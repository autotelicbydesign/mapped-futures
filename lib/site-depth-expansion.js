export const additionalDisciplineDepth = {
  "human-ai-collaboration-design": {
    operatingReality:
      "Human-AI collaboration design is what happens when the system is not just advising but actively participating in work. The challenge is to create a collaboration model where initiative, memory, and accountability are distributed deliberately rather than by accident. That means designing how the system enters the work, how it stays intelligible, and how humans keep leverage even when the machine is fast.",
    decisionMoves: [
      "Map the task into phases of human judgment, machine assistance, and shared coordination rather than one blended interaction.",
      "Make the system’s assumptions, inputs, and unfinished work visible enough that someone else can inherit the task without guesswork.",
      "Design checkpoints where the human meaningfully steers or reframes the work instead of merely approving a finished recommendation.",
    ],
    evidenceOfMaturity: [
      "People can tell when the AI is collaborating, when it is preparing, and when it is trying to decide.",
      "Handoffs between users or teams do not destroy the value of AI-assisted work because context is preserved cleanly.",
      "The collaboration reduces cognitive load in the right places instead of relocating it into review fatigue.",
    ],
    commonMisreadings: [
      "Thinking collaboration means adding chat around an existing workflow.",
      "Assuming the human stays meaningfully in control just because they can technically override the final action.",
      "Judging quality only by speed rather than by retained judgment and coordination quality.",
    ],
  },
  "trust-and-safety-experience-design": {
    operatingReality:
      "Trust and safety experience design becomes essential when product harms are not rare accidents but operating conditions. The work is not only preventing bad outcomes. It is making safety legible, proportionate, and recoverable for the people living inside the system.",
    decisionMoves: [
      "Design the full harm lifecycle: prevention, detection, reporting, review, appeal, and post-incident recovery.",
      "Separate low-risk friction from high-stakes intervention so the system is not equally blunt in every situation.",
      "Treat support and moderation teams as part of the experience architecture, not as operational cleanup after the UI ships.",
    ],
    evidenceOfMaturity: [
      "Users understand how to report, what happens next, and how to contest a wrong decision.",
      "Policy intent can be traced into concrete product behavior and operational response.",
      "False positives and false negatives are monitored as experience quality issues, not just compliance metrics.",
    ],
    commonMisreadings: [
      "Thinking safety is solved once the harmful content is hidden from the interface.",
      "Treating appeals as edge cases instead of as trust architecture.",
      "Assuming policy precision guarantees user comprehension.",
    ],
  },
  "knowledge-system-design": {
    operatingReality:
      "Knowledge system design is closer to infrastructure design than content design. The work is about making knowledge retrievable, current, interpretable, and actionable across time. Without that, organizations accumulate documents but not usable memory.",
    decisionMoves: [
      "Start from the decisions people must make and work backward to the knowledge structure that supports them.",
      "Distinguish canonical guidance, active debate, historical context, and local interpretation instead of mixing them together.",
      "Design ownership and review cadence into the system so information can age visibly rather than silently.",
    ],
    evidenceOfMaturity: [
      "People can find trustworthy answers quickly enough to use them inside live work.",
      "The organization repeats fewer debates because prior reasoning is discoverable and usable.",
      "AI-assisted retrieval improves because the source material has clearer structure and quality signals.",
    ],
    commonMisreadings: [
      "Treating search quality as a substitute for information architecture.",
      "Assuming more documentation means better organizational memory.",
      "Letting summaries replace source judgment in domains where nuance matters.",
    ],
  },
  "design-operations-and-workflow-systems": {
    operatingReality:
      "Design operations becomes valuable when it converts quality from personality into system behavior. In the AI era, that includes not only reviews and rituals but also tool governance, knowledge routing, and decisions about how much machine-made output the team can responsibly absorb.",
    decisionMoves: [
      "Map where judgment is currently concentrated and decide which parts should be systematized, documented, or escalated.",
      "Design workflows that reduce coordination waste without stripping away meaningful critique.",
      "Treat new tools as changes to review burden, governance, and quality risk, not just as throughput boosters.",
    ],
    evidenceOfMaturity: [
      "The team can explain how quality is maintained as output volume rises.",
      "Reviews are faster because standards are clearer, not because scrutiny disappeared.",
      "Knowledge from critiques and decisions feeds back into reusable guidance instead of evaporating.",
    ],
    commonMisreadings: [
      "Confusing process visibility with actual operating health.",
      "Automating asset production without redesigning review capacity.",
      "Reducing design ops to service administration instead of quality architecture.",
    ],
  },
  "policy-design": {
    operatingReality:
      "Policy design is where abstract rules meet lived consequences. The discipline matters whenever thresholds, evidence requirements, or consequences must be applied repeatedly across many cases. That means product designers are already doing policy work more often than they admit.",
    decisionMoves: [
      "Name the rule explicitly before designing the flow that enforces it.",
      "Design appeal and exception paths as part of the rule system rather than as support leftovers.",
      "Pressure test the rule on edge cases, vulnerable contexts, and institutional handoffs before it hardens into software behavior.",
    ],
    evidenceOfMaturity: [
      "People can understand what happened, why it happened, and how to respond if they disagree.",
      "The institution can trace outcomes back to specific rule decisions and update them intentionally.",
      "Frontline staff and affected users are not forced to invent informal repairs around formal policy.",
    ],
    commonMisreadings: [
      "Assuming rules become neutral once implemented consistently.",
      "Optimizing policy for administrative convenience while calling the result user-centered.",
      "Treating recourse as a downstream support function instead of a design responsibility.",
    ],
  },
  "inclusive-product-design": {
    operatingReality:
      "Inclusive product design is not a specialist add-on. It is an indicator of whether a team understands the real conditions in which its product is used. As systems become more autonomous, inclusive quality increasingly determines whether automation expands access or simply scales exclusion.",
    decisionMoves: [
      "Design for stressed, interrupted, low-confidence, or resource-constrained use cases early enough to change the core flow.",
      "Test language, pacing, and support assumptions on people who do not match the team’s implicit default user.",
      "Treat recourse, assisted completion, and alternative paths as product quality rather than failure states.",
    ],
    evidenceOfMaturity: [
      "Completion and comprehension stay strong across more varied users and contexts.",
      "Support burden falls because the core experience better matches real conditions of use.",
      "The team can point to structural decisions that improved inclusion, not only to accessibility fixes.",
    ],
    commonMisreadings: [
      "Reducing inclusion to compliance requirements.",
      "Treating accessibility, content clarity, and service recovery as separate topics.",
      "Thinking one round of inclusive testing means the work is done.",
    ],
  },
  "brand-and-meaning-systems": {
    operatingReality:
      "Brand and meaning systems are under pressure because content production is cheap but coherence is not. The discipline now depends on creating a recognizable logic across language, symbols, behaviors, and machine-assisted output so the organization keeps a point of view under scale.",
    decisionMoves: [
      "Translate positioning into specific language, visual, and behavioral decisions teams can reuse.",
      "Design the system to hold up under automation, localization, and content multiplication.",
      "Judge coherence across sequences and surfaces, not only on isolated mockups or hero assets.",
    ],
    evidenceOfMaturity: [
      "Outputs remain recognizably authored even when multiple teams and tools produce them.",
      "People can distinguish what belongs to the brand beyond surface style alone.",
      "The organization’s actions and service behaviors reinforce the meaning system instead of contradicting it.",
    ],
    commonMisreadings: [
      "Thinking brand systems are mainly about visual polish.",
      "Confusing louder aesthetics with stronger meaning.",
      "Letting generative content scale faster than editorial judgment.",
    ],
  },
  "embodied-interaction-design": {
    operatingReality:
      "Embodied interaction design asks what interaction feels like when the body is part of the system. That means attention is partial, posture matters, and social context can make a technically usable interaction feel absurd or exhausting. The work is to design for usable motion, not just for possible motion.",
    decisionMoves: [
      "Measure bodily effort and attentional interruption as part of interaction quality.",
      "Design feedback that works through movement, orientation, touch, or peripheral perception.",
      "Test the interaction where the body and environment actually complicate it.",
    ],
    evidenceOfMaturity: [
      "People can stay oriented and effective without over-focusing on the interface.",
      "The experience remains comfortable and socially acceptable over time, not only in novelty demos.",
      "Physical context improves the interaction instead of constantly fighting it.",
    ],
    commonMisreadings: [
      "Mistaking gestural possibility for good interaction.",
      "Treating the body as a channel without respecting fatigue or context.",
      "Assuming immersion excuses awkwardness.",
    ],
  },
  "transition-design": {
    operatingReality:
      "Transition design matters when everyone agrees the current system is broken but the path out is politically, operationally, or materially difficult. The work is not to draw an ideal future state. It is to design the sequence of moves that makes a different system plausible enough to inhabit.",
    decisionMoves: [
      "Design interim states that reduce harm now while opening the path to deeper structural change later.",
      "Map who carries cost and who gains capacity at each stage of the transition.",
      "Treat communication, policy, service, and material changes as interdependent rather than parallel tracks.",
    ],
    evidenceOfMaturity: [
      "The transition has credible intermediate milestones instead of only abstract ambitions.",
      "The organization can explain what must change first and why.",
      "Short-term decisions are strengthening the future pathway rather than undermining it.",
    ],
    commonMisreadings: [
      "Using future language to avoid designing present compromises.",
      "Ignoring who is asked to absorb the friction of transition.",
      "Treating transformation as a launch rather than a prolonged redesign of conditions.",
    ],
  },
};

export const additionalGuideDepth = {
  "designing-human-handoffs-in-agentic-systems": {
    stakes:
      "If an agent can act, the handoff becomes one of the highest-stakes moments in the product. It determines whether human judgment arrives in time, with enough leverage, and without unnecessary reconstruction work.",
    useThisWhen:
      "Use this when an AI system can plan or act across multiple steps and a human may need to intervene, approve, or recover the workflow.",
    movesThisWeek: [
      "Audit every workflow where the system can escalate and capture exactly what information is missing at handoff time.",
      "Define escalation triggers by stakes, reversibility, and uncertainty rather than vague discomfort.",
      "Prototype the handoff payload so a human can understand intent, state, evidence, and next choices in under a minute.",
    ],
    watchFor: [
      "Beautiful handoff interfaces with no serious logic behind when they trigger.",
      "Escalations that happen after consequential work is already done.",
      "Logs that preserve activity but not rationale or missing context.",
    ],
  },
  "how-to-build-a-knowledge-system-that-doesnt-decay": {
    stakes:
      "Knowledge decay looks invisible until it becomes expensive. Teams repeat work, ship on outdated assumptions, and ask AI systems to retrieve answers from material nobody actually trusts anymore.",
    useThisWhen:
      "Use this when a team has too many documents, weak institutional memory, or an AI retrieval layer that is exposing the disorder underneath.",
    movesThisWeek: [
      "Identify the highest-value retrieval moments and redesign structure around them.",
      "Separate canonical guidance, historical context, and active debate into visibly different states.",
      "Assign explicit ownership and review cadence to the highest-risk knowledge surfaces first.",
    ],
    watchFor: [
      "Adding AI search before fixing obvious quality and ownership gaps.",
      "Letting documentation sprawl because nobody is responsible for retirement or revision.",
      "Assuming people will trust a system simply because it can find text quickly.",
    ],
  },
  "policy-thinking-for-product-designers": {
    stakes:
      "This guide matters because more products now shape eligibility, recourse, visibility, and consequence. Designers who cannot see the policy layer will keep shipping rule systems they never properly designed.",
    useThisWhen:
      "Use this when product behavior sets thresholds, applies consequences, interprets evidence, or routes people into different outcomes.",
    movesThisWeek: [
      "Pick one flow and write down the rule it is actually enforcing in plain language.",
      "Map the exception and appeal path as part of the core experience, not as support residue.",
      "Review the flow with the people who will carry the operational cost when the rule gets it wrong.",
    ],
    watchFor: [
      "Assuming consistency automatically equals fairness.",
      "Using optimization language to avoid discussing consequence and power.",
      "Treating edge cases as product debt instead of legitimacy tests.",
    ],
  },
};

export const additionalSignalDepth = {
  "trust-is-moving-from-accuracy-to-recoverability": {
    longerArc:
      "A deeper product shift is underway: trust is becoming less about claims of correctness and more about the system’s capacity for repair. As AI systems enter recurring work, recoverability may matter more to long-term loyalty than marginal gains in average accuracy.",
    whatToWatchNext: [
      "More products exposing reset, undo, provenance, and escalation controls by default.",
      "Support and success teams becoming critical inputs to trust design rather than downstream responders.",
      "Evaluation criteria expanding to include recoverability and user competence after failure.",
    ],
    movesThisWeek: [
      "Audit the most consequential workflows for reset, undo, export, and escalation quality.",
      "Document the difference between initial success and recovery success in your evaluation rubric.",
      "Treat hidden state as a trust risk, not only as a technical implementation detail.",
    ],
  },
  "policy-design-is-entering-product-teams": {
    longerArc:
      "The longer arc is that product teams are becoming operational rule-makers. As agents, automation, and ranking systems gain consequence, product design increasingly overlaps with governance, recourse, and institutional legitimacy.",
    whatToWatchNext: [
      "More cross-functional reviews involving policy, legal, and operations before feature launch.",
      "Teams formalizing rule inventories instead of hiding policy inside product behavior.",
      "Growing demand for designers who can work across product logic and institutional consequence.",
    ],
    movesThisWeek: [
      "Identify one product flow that is already acting like a policy decision.",
      "Write down its appeal path and check whether a real user could follow it.",
      "Bring policy and operations into the next review where consequences are non-trivial.",
    ],
  },
  "knowledge-without-structure-is-becoming-expensive": {
    longerArc:
      "Knowledge infrastructure is becoming competitive infrastructure. Teams that keep treating documentation as overflow storage will increasingly pay in slower decisions, duplicated work, and brittle AI retrieval layers.",
    whatToWatchNext: [
      "Organizations investing in canonical knowledge architecture rather than only in search tools.",
      "AI retrieval products surfacing quality, recency, and source confidence more explicitly.",
      "Knowledge ownership becoming a more formal operational role.",
    ],
    movesThisWeek: [
      "Find one high-value decision area and mark which documents are canonical, stale, or ambiguous.",
      "Add ownership and review metadata to the most referenced pages first.",
      "Measure repeated questions and repeated debates as signals of retrieval failure.",
    ],
  },
  "design-ops-is-becoming-a-governance-function": {
    longerArc:
      "As AI increases output volume, the scarce function shifts toward governance of quality, review load, and institutional memory. Design ops is therefore moving closer to organizational design than many teams expect.",
    whatToWatchNext: [
      "Design ops roles expanding into tool governance, review standards, and knowledge stewardship.",
      "More formal escalation paths for quality disagreements and release readiness.",
      "Stronger connections between design ops, evaluation, and content/system governance.",
    ],
    movesThisWeek: [
      "List which quality standards are still implicit and who currently carries them.",
      "Review how AI-assisted output is affecting critique burden and decision time.",
      "Capture one recurring review comment as reusable guidance instead of letting it disappear again.",
    ],
  },
  "inclusive-design-is-shifting-from-compliance-to-core-quality": {
    longerArc:
      "The larger shift is that inclusion is moving from a protective requirement into a central definition of product quality. As more systems mediate access and judgment, exclusion becomes harder to dismiss as an edge case and easier to recognize as structural weakness.",
    whatToWatchNext: [
      "Design quality conversations expanding to include context variance, support burden, and recourse quality.",
      "Accessibility and inclusion work moving earlier into product framing.",
      "Greater pressure on self-service systems to prove they are usable beyond the ideal user case.",
    ],
    movesThisWeek: [
      "Pick one important flow and identify the assumptions it makes about language, confidence, or available support.",
      "Review the flow with people closest to exclusion risk, not only with expert users.",
      "Treat avoidable support work as evidence of design exclusion, not just as an ops cost.",
    ],
  },
};
