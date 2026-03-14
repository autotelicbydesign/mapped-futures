import fs from "node:fs";
import path from "node:path";

export const TIME_ZONE = "Australia/Sydney";
export const DEFAULT_NOTION_PAGE_ID = "31cc7693aa0380c9a418c5fd7013b63e";

const ANCHORS = {
  scan: "2026-03-09",
  publish: "2026-03-10",
};

const TARGETS = {
  scan: { weekday: "Mon", hour: 9 },
  publish: { weekday: "Tue", hour: 9 },
};

function pad(value) {
  return String(value).padStart(2, "0");
}

export function getSydneyParts(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    weekday: "short",
  }).formatToParts(date);

  const lookup = Object.fromEntries(
    parts
      .filter((part) => part.type !== "literal")
      .map((part) => [part.type, part.value]),
  );

  return {
    year: Number(lookup.year),
    month: Number(lookup.month),
    day: Number(lookup.day),
    hour: Number(lookup.hour),
    minute: Number(lookup.minute),
    weekday: lookup.weekday,
    isoDate: `${lookup.year}-${lookup.month}-${lookup.day}`,
  };
}

export function getCycleDate(kind, now = new Date()) {
  const { isoDate } = getSydneyParts(now);
  const [year, month, day] = isoDate.split("-").map(Number);
  const localDate = new Date(Date.UTC(year, month - 1, day));
  const weekday = localDate.getUTCDay();
  const offset = kind === "publish" ? 1 : 0;
  const mondayOffset = weekday === 0 ? -6 : 1 - weekday;
  localDate.setUTCDate(localDate.getUTCDate() + mondayOffset + offset);
  return `${localDate.getUTCFullYear()}-${pad(localDate.getUTCMonth() + 1)}-${pad(
    localDate.getUTCDate(),
  )}`;
}

function diffInWeeks(anchorIsoDate, currentIsoDate) {
  const anchor = new Date(`${anchorIsoDate}T00:00:00Z`);
  const current = new Date(`${currentIsoDate}T00:00:00Z`);
  const diffDays = Math.floor((current - anchor) / 86400000);
  return Math.floor(diffDays / 7);
}

export function evaluateRunWindow(kind, eventName, now = new Date()) {
  if (eventName === "workflow_dispatch") {
    return { due: true, reason: "Manual dispatch", cycleDate: getCycleDate(kind, now) };
  }

  const local = getSydneyParts(now);
  const target = TARGETS[kind];
  const cycleDate = getCycleDate(kind, now);

  if (local.weekday !== target.weekday) {
    return {
      due: false,
      reason: `Local weekday is ${local.weekday}, expected ${target.weekday}`,
      cycleDate,
    };
  }

  if (local.hour !== target.hour) {
    return {
      due: false,
      reason: `Local hour is ${local.hour}, expected ${target.hour}`,
      cycleDate,
    };
  }

  const weekDiff = diffInWeeks(ANCHORS[kind], cycleDate);
  if (weekDiff < 0 || weekDiff % 2 !== 0) {
    return {
      due: false,
      reason: `Cycle ${cycleDate} is off the biweekly cadence`,
      cycleDate,
    };
  }

  return { due: true, reason: "Within scheduled biweekly window", cycleDate };
}

function uniq(values) {
  return [...new Set(values)];
}

export function readRepoCatalog() {
  const filePath = path.join(process.cwd(), "lib", "site-data.js");
  const source = fs.readFileSync(filePath, "utf8");

  const slugs = [...source.matchAll(/slug:\s*"([^"]+)"/g)].map((match) => match[1]);
  const titles = [...source.matchAll(/title:\s*"([^"]+)"/g)].map((match) => match[1]);
  const metaDomainTitles = [...source.matchAll(/metaDomain:\s*"([^"]+)"/g)].map(
    (match) => match[1],
  );

  return {
    counts: {
      slugs: slugs.length,
      titles: titles.length,
      metaDomains: uniq(metaDomainTitles).length,
    },
    titles: uniq(titles).slice(0, 80),
    metaDomains: uniq(metaDomainTitles),
  };
}

export async function callOpenAIJson({ prompt, schemaHint, taskName }) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return {
      ok: false,
      reason: "OPENAI_API_KEY is not configured",
    };
  }

  const model = process.env.OPENAI_MODEL || "gpt-4.1-mini";
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model,
      response_format: { type: "json_object" },
      messages: [
        {
          role: "system",
          content:
            "You are Mica, an editorial cartographer for Mapped Futures. Write clear, sharp, plain-language JSON only. No markdown fences. Keep it concrete, useful, and specific.",
        },
        {
          role: "user",
          content: `${prompt}\n\nJSON contract:\n${schemaHint}`,
        },
      ],
    }),
  });

  if (!response.ok) {
    const text = await response.text();
    return {
      ok: false,
      reason: `OpenAI request failed for ${taskName}: ${response.status} ${text}`,
    };
  }

  const json = await response.json();
  const rawContent = json?.choices?.[0]?.message?.content;

  if (!rawContent) {
    return {
      ok: false,
      reason: `OpenAI response for ${taskName} did not include message content`,
    };
  }

  try {
    return {
      ok: true,
      data: JSON.parse(rawContent),
    };
  } catch (error) {
    return {
      ok: false,
      reason: `Could not parse JSON from OpenAI for ${taskName}: ${error.message}`,
      rawContent,
    };
  }
}

function notionHeaders() {
  return {
    Authorization: `Bearer ${process.env.NOTION_TOKEN}`,
    "Content-Type": "application/json",
    "Notion-Version": "2022-06-28",
  };
}

async function notionRequest(pathname, { method = "GET", body } = {}) {
  const response = await fetch(`https://api.notion.com/v1${pathname}`, {
    method,
    headers: notionHeaders(),
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Notion request failed (${response.status}): ${text}`);
  }

  return response.json();
}

function titleProp(content) {
  return {
    title: [{ text: { content: String(content).slice(0, 2000) } }],
  };
}

function richTextProp(content) {
  if (!content) {
    return { rich_text: [] };
  }

  return {
    rich_text: [{ text: { content: String(content).slice(0, 2000) } }],
  };
}

function selectProp(name) {
  return name ? { select: { name } } : { select: null };
}

function dateProp(value) {
  return value ? { date: { start: value } } : { date: null };
}

function numberProp(value) {
  return typeof value === "number" ? { number: value } : { number: null };
}

function urlProp(value) {
  return value ? { url: value } : { url: null };
}

function childDatabaseTitle(title) {
  return {
    title: [{ type: "text", text: { content: title } }],
  };
}

async function listChildDatabases(pageId) {
  const response = await notionRequest(`/blocks/${pageId}/children?page_size=100`);
  return response.results.filter((item) => item.type === "child_database");
}

async function ensureDatabase(pageId, title, properties) {
  const children = await listChildDatabases(pageId);
  const existing = children.find((item) => item.child_database?.title === title);
  if (existing) {
    return existing.id;
  }

  const created = await notionRequest("/databases", {
    method: "POST",
    body: {
      parent: { type: "page_id", page_id: pageId },
      ...childDatabaseTitle(title),
      properties,
    },
  });

  return created.id;
}

async function queryDatabaseByName(databaseId, value) {
  const response = await notionRequest(`/databases/${databaseId}/query`, {
    method: "POST",
    body: {
      filter: {
        property: "Name",
        title: {
          equals: value,
        },
      },
    },
  });

  return response.results?.[0] ?? null;
}

async function createOrUpdatePage({ databaseId, name, properties }) {
  const existing = await queryDatabaseByName(databaseId, name);
  if (existing) {
    await notionRequest(`/pages/${existing.id}`, {
      method: "PATCH",
      body: { properties },
    });
    return existing.id;
  }

  const created = await notionRequest("/pages", {
    method: "POST",
    body: {
      parent: { database_id: databaseId },
      properties,
    },
  });

  return created.id;
}

export async function writeScanToNotion(scanData, cycleDate) {
  if (!process.env.NOTION_TOKEN) {
    return { ok: false, reason: "NOTION_TOKEN is not configured" };
  }

  const pageId = process.env.NOTION_PAGE_ID || DEFAULT_NOTION_PAGE_ID;
  const cyclesDatabaseId = await ensureDatabase(pageId, "Mica Cycles", {
    Name: { title: {} },
    "Research Date": { date: {} },
    "Publish Date": { date: {} },
    Status: {
      select: {
        options: [
          { name: "Researching", color: "blue" },
          { name: "Ready for Drafting", color: "yellow" },
          { name: "Ready for Review", color: "orange" },
          { name: "Published", color: "green" },
          { name: "Blocked", color: "red" },
        ],
      },
    },
    Theme: { rich_text: {} },
    "Value Thesis": { rich_text: {} },
    "Publish Summary": { rich_text: {} },
    "PR URL": { url: {} },
    "Preview URL": { url: {} },
  });

  const discoveriesDatabaseId = await ensureDatabase(pageId, "Mica Discoveries", {
    Name: { title: {} },
    "Content Type": {
      select: {
        options: [
          { name: "Discipline", color: "blue" },
          { name: "Framework", color: "purple" },
          { name: "Guide", color: "green" },
          { name: "Signal", color: "orange" },
          { name: "Experimental", color: "pink" },
        ],
      },
    },
    "Public Surface": {
      select: {
        options: [
          { name: "Atlas", color: "blue" },
          { name: "Frameworks", color: "purple" },
          { name: "Guides", color: "green" },
          { name: "Signals", color: "orange" },
          { name: "Staged Only", color: "gray" },
        ],
      },
    },
    Status: {
      select: {
        options: [
          { name: "Discovered", color: "blue" },
          { name: "Researching", color: "yellow" },
          { name: "Drafted", color: "orange" },
          { name: "Ready for Review", color: "purple" },
          { name: "Published", color: "green" },
          { name: "Shelved", color: "red" },
        ],
      },
    },
    Cycle: { rich_text: {} },
    "Reader Question": { rich_text: {} },
    "Quick Answer": { rich_text: {} },
    "Contrarian View": { rich_text: {} },
    Mechanism: { rich_text: {} },
    "Running Example": { rich_text: {} },
    "Schema Steps": { rich_text: {} },
    "Why Now": { rich_text: {} },
    "Value Score": { number: { format: "number" } },
    "Novelty Score": { number: { format: "number" } },
    "User Utility Score": { number: { format: "number" } },
    "Repo Slug": { rich_text: {} },
    "Live URL": { url: {} },
  });

  const cycleName = `Cycle ${cycleDate}`;

  await createOrUpdatePage({
    databaseId: cyclesDatabaseId,
    name: cycleName,
    properties: {
      Name: titleProp(cycleName),
      "Research Date": dateProp(cycleDate),
      Status: selectProp("Researching"),
      Theme: richTextProp(scanData.theme),
      "Value Thesis": richTextProp(scanData.value_thesis),
    },
  });

  for (const discovery of scanData.discoveries ?? []) {
    await createOrUpdatePage({
      databaseId: discoveriesDatabaseId,
      name: discovery.name,
      properties: {
        Name: titleProp(discovery.name),
        "Content Type": selectProp(discovery.content_type),
        "Public Surface": selectProp(discovery.public_surface),
        Status: selectProp("Discovered"),
        Cycle: richTextProp(cycleName),
        "Reader Question": richTextProp(discovery.reader_question),
        "Quick Answer": richTextProp(discovery.quick_answer),
        "Contrarian View": richTextProp(discovery.contrarian_view),
        Mechanism: richTextProp(discovery.mechanism),
        "Running Example": richTextProp(discovery.running_example),
        "Schema Steps": richTextProp((discovery.schema_steps ?? []).join(" → ")),
        "Why Now": richTextProp(discovery.why_now),
        "Value Score": numberProp(discovery.value_score),
        "Novelty Score": numberProp(discovery.novelty_score),
        "User Utility Score": numberProp(discovery.user_utility_score),
        "Repo Slug": richTextProp(discovery.repo_slug || ""),
        "Live URL": urlProp(discovery.live_url || ""),
      },
    });
  }

  return { ok: true, cycleName, pageId, cyclesDatabaseId, discoveriesDatabaseId };
}

export async function writePublishToNotion(publishData, cycleDate) {
  if (!process.env.NOTION_TOKEN) {
    return { ok: false, reason: "NOTION_TOKEN is not configured" };
  }

  const pageId = process.env.NOTION_PAGE_ID || DEFAULT_NOTION_PAGE_ID;
  const cyclesDatabaseId = await ensureDatabase(pageId, "Mica Cycles", {
    Name: { title: {} },
    "Research Date": { date: {} },
    "Publish Date": { date: {} },
    Status: {
      select: {
        options: [
          { name: "Researching", color: "blue" },
          { name: "Ready for Drafting", color: "yellow" },
          { name: "Ready for Review", color: "orange" },
          { name: "Published", color: "green" },
          { name: "Blocked", color: "red" },
        ],
      },
    },
    Theme: { rich_text: {} },
    "Value Thesis": { rich_text: {} },
    "Publish Summary": { rich_text: {} },
    "PR URL": { url: {} },
    "Preview URL": { url: {} },
  });

  const cycleName = `Cycle ${cycleDate}`;

  await createOrUpdatePage({
    databaseId: cyclesDatabaseId,
    name: cycleName,
    properties: {
      Name: titleProp(cycleName),
      "Publish Date": dateProp(getSydneyParts().isoDate),
      Status: selectProp("Ready for Review"),
      "Publish Summary": richTextProp(publishData.summary),
    },
  });

  return { ok: true, cycleName };
}

export async function createGitHubIssue({ title, body }) {
  if (!process.env.GITHUB_TOKEN || !process.env.GITHUB_REPOSITORY) {
    return { ok: false, reason: "GitHub context is unavailable" };
  }

  const [owner, repo] = process.env.GITHUB_REPOSITORY.split("/");

  const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/issues`, {
    method: "POST",
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      "X-GitHub-Api-Version": "2022-11-28",
    },
    body: JSON.stringify({
      title,
      body,
    }),
  });

  if (!response.ok) {
    const text = await response.text();
    return { ok: false, reason: `GitHub issue creation failed: ${response.status} ${text}` };
  }

  const issue = await response.json();
  return { ok: true, issueUrl: issue.html_url };
}

export function writeSummary(markdown) {
  const summaryPath = process.env.MICA_SUMMARY_PATH;
  if (summaryPath) {
    fs.writeFileSync(summaryPath, `${markdown}\n`);
  }
}

export function buildRepoContextBlock() {
  const catalog = readRepoCatalog();
  return [
    `Mapped Futures repo snapshot`,
    `Meta domains: ${catalog.metaDomains.join(", ")}`,
    `Representative titles: ${catalog.titles.slice(0, 30).join("; ")}`,
  ].join("\n");
}
