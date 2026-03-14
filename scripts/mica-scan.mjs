import {
  buildRepoContextBlock,
  callOpenAIJson,
  createGitHubIssue,
  evaluateRunWindow,
  getSydneyParts,
  writeScanToNotion,
  writeSummary,
} from "./mica-common.mjs";

const runInfo = evaluateRunWindow("scan", process.env.GITHUB_EVENT_NAME);

if (!runInfo.due) {
  const skipped = `# Mica biweekly scan\n\nSkipped.\n\n- Reason: ${runInfo.reason}\n- Sydney time: ${getSydneyParts().isoDate} ${getSydneyParts().hour}:00\n- Cycle date: ${runInfo.cycleDate}`;
  console.log(skipped);
  writeSummary(skipped);
  process.exit(0);
}

const prompt = `
You are Mica, the editorial intelligence for Mapped Futures.

Today is the scan cycle for ${runInfo.cycleDate}.
Your job is to identify exactly 3 new or underdeveloped areas worth adding to the ecosystem.

Rules:
- Focus on design, AI, systems, materials, governance, futures, and emerging practice.
- The output must be more useful than obvious trend commentary.
- Prefer areas that make the atlas more structurally complete.
- If an area already exists in another name, propose the cleaner name and explain the distinction.
- Keep the writing plain, precise, and opinionated in Mica's voice.

${buildRepoContextBlock()}
`;

const schemaHint = `{
  "theme": "short cycle theme",
  "value_thesis": "why these 3 additions matter for users now",
  "discoveries": [
    {
      "name": "string",
      "content_type": "Discipline | Framework | Guide | Signal | Experimental",
      "public_surface": "Atlas | Frameworks | Guides | Signals | Staged Only",
      "reader_question": "string",
      "quick_answer": "string",
      "contrarian_view": "string",
      "mechanism": "string",
      "running_example": "string",
      "schema_steps": ["step 1", "step 2", "step 3"],
      "why_now": "string",
      "value_score": 1,
      "novelty_score": 1,
      "user_utility_score": 1,
      "repo_slug": "optional-kebab-case"
    }
  ],
  "product_improvements": ["string", "string"]
}`;

const aiResult = await callOpenAIJson({
  prompt,
  schemaHint,
  taskName: "biweekly scan",
});

let markdown = `# Mica biweekly scan\n\n- Cycle date: ${runInfo.cycleDate}\n- Reason: ${runInfo.reason}\n`;

if (!aiResult.ok) {
  markdown += `\n## Blocked\n\n${aiResult.reason}\n`;
  writeSummary(markdown);
  await createGitHubIssue({
    title: `Mica scan blocked · ${runInfo.cycleDate}`,
    body: markdown,
  });
  process.exit(0);
}

const scanData = aiResult.data;
const notionResult = await writeScanToNotion(scanData, runInfo.cycleDate).catch((error) => ({
  ok: false,
  reason: error.message,
}));

markdown += `\n## Theme\n\n${scanData.theme}\n\n## Value thesis\n\n${scanData.value_thesis}\n\n## 3 discoveries\n`;

for (const discovery of scanData.discoveries ?? []) {
  markdown += `\n### ${discovery.name}\n- Type: ${discovery.content_type}\n- Surface: ${discovery.public_surface}\n- Question: ${discovery.reader_question}\n- Why now: ${discovery.why_now}\n- Scores: value ${discovery.value_score}/5, novelty ${discovery.novelty_score}/5, utility ${discovery.user_utility_score}/5\n`;
}

if (scanData.product_improvements?.length) {
  markdown += `\n## Value improvements\n${scanData.product_improvements
    .map((item) => `- ${item}`)
    .join("\n")}\n`;
}

if (notionResult.ok) {
  markdown += `\n## Notion\n\nUpdated cycle ${notionResult.cycleName} on the Mapped Futures Notion page.\n`;
} else {
  markdown += `\n## Notion\n\nSkipped or failed: ${notionResult.reason}\n`;
}

writeSummary(markdown);

const issueResult = await createGitHubIssue({
  title: `Mica scan · ${runInfo.cycleDate}`,
  body: markdown,
});

if (issueResult.ok) {
  console.log(`Created issue: ${issueResult.issueUrl}`);
} else {
  console.log(issueResult.reason);
}
