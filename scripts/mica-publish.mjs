import {
  buildRepoContextBlock,
  callOpenAIJson,
  createGitHubIssue,
  evaluateRunWindow,
  getSydneyParts,
  writePublishToNotion,
  writeSummary,
} from "./mica-common.mjs";

const runInfo = evaluateRunWindow("publish", process.env.GITHUB_EVENT_NAME);

if (!runInfo.due) {
  const skipped = `# Mica biweekly publish\n\nSkipped.\n\n- Reason: ${runInfo.reason}\n- Sydney time: ${getSydneyParts().isoDate} ${getSydneyParts().hour}:00\n- Cycle date: ${runInfo.cycleDate}`;
  console.log(skipped);
  writeSummary(skipped);
  process.exit(0);
}

const prompt = `
You are Mica, the editorial intelligence for Mapped Futures.

Today is the publish cycle for ${runInfo.cycleDate}.
Create a concrete publish package that would make the site noticeably more valuable this cycle.

Rules:
- Focus on what should actually ship next, not everything that could.
- Use the existing public surfaces: Atlas, Frameworks, Guides, Signals, plus Experimental if justified.
- Be opinionated about what earns publication now.
- Prefer compact, high-value moves over volume.
- The result should read like a decisive editorial operating note, not a brainstorm.

${buildRepoContextBlock()}
`;

const schemaHint = `{
  "summary": "one paragraph on what should ship this cycle and why",
  "releases": [
    {
      "content_type": "Discipline | Framework | Guide | Signal | Experimental",
      "title": "string",
      "slug": "kebab-case",
      "why_it_should_ship_now": "string",
      "user_value": "string",
      "implementation_notes": ["string", "string"],
      "publish_status": "Drafted | Ready for Review | Published"
    }
  ],
  "experiments": ["string", "string"],
  "product_improvements": ["string", "string"]
}`;

const aiResult = await callOpenAIJson({
  prompt,
  schemaHint,
  taskName: "biweekly publish",
});

let markdown = `# Mica biweekly publish\n\n- Cycle date: ${runInfo.cycleDate}\n- Reason: ${runInfo.reason}\n`;

if (!aiResult.ok) {
  markdown += `\n## Blocked\n\n${aiResult.reason}\n`;
  writeSummary(markdown);
  await createGitHubIssue({
    title: `Mica publish blocked · ${runInfo.cycleDate}`,
    body: markdown,
  });
  process.exit(0);
}

const publishData = aiResult.data;
const notionResult = await writePublishToNotion(publishData, runInfo.cycleDate).catch(
  (error) => ({
    ok: false,
    reason: error.message,
  }),
);

markdown += `\n## Summary\n\n${publishData.summary}\n\n## Recommended release set\n`;

for (const release of publishData.releases ?? []) {
  markdown += `\n### ${release.title}\n- Type: ${release.content_type}\n- Slug: \`${release.slug}\`\n- Why now: ${release.why_it_should_ship_now}\n- User value: ${release.user_value}\n- Status: ${release.publish_status}\n`;
  if (release.implementation_notes?.length) {
    markdown += `${release.implementation_notes.map((item) => `  - ${item}`).join("\n")}\n`;
  }
}

if (publishData.experiments?.length) {
  markdown += `\n## Experiments worth staging\n${publishData.experiments
    .map((item) => `- ${item}`)
    .join("\n")}\n`;
}

if (publishData.product_improvements?.length) {
  markdown += `\n## Product improvements\n${publishData.product_improvements
    .map((item) => `- ${item}`)
    .join("\n")}\n`;
}

if (notionResult.ok) {
  markdown += `\n## Notion\n\nUpdated cycle ${notionResult.cycleName} in Notion for publish review.\n`;
} else {
  markdown += `\n## Notion\n\nSkipped or failed: ${notionResult.reason}\n`;
}

writeSummary(markdown);

const issueResult = await createGitHubIssue({
  title: `Mica publish plan · ${runInfo.cycleDate}`,
  body: markdown,
});

if (issueResult.ok) {
  console.log(`Created issue: ${issueResult.issueUrl}`);
} else {
  console.log(issueResult.reason);
}
