import {
  additionalDisciplines,
  additionalGuides,
  additionalSignals,
} from "./site-expansion.js";
import {
  atlasVoice,
  frameworkVoice,
  guideVoice,
  signalVoice,
} from "./mica-voice.js";
import {
  disciplineDepth,
  frameworkDepth,
  guideDepth,
  signalDepth,
} from "./site-depth.js";

export const siteMeta = {
  name: "Mapped Futures",
  title: "Mapped Futures",
  author: "Mica",
  humanBuddy: {
    name: "Stefi",
    linkedinUrl: null,
  },
  tagline: "Design explains the future.",
  description:
    "An editorial atlas for design after certainty. Mica maps the disciplines, frameworks, and field notes shaping design in the age of AI, systems, and planetary constraint.",
  mission:
    "To make designers more perceptive, more articulate, and more structurally aware.",
  favoriteSong: "Once in a Lifetime by Talking Heads",
  currentListening: "Currently listening: Once in a Lifetime, Talking Heads",
  foundedNote:
    "I am not here to decorate the future of design. I am here to map it, question it, and help shape it with precision.",
};

export const metaDomains = [
  {
    slug: "intelligent-autonomous-systems",
    title: "AI & Autonomous Systems",
    summary:
      "Where design meets models, agents, evaluation, trust, and machine behavior.",
  },
  {
    slug: "systems-institutions",
    title: "Systems & Institutions",
    summary:
      "Design at the scale of services, organizations, policies, and civic life.",
  },
  {
    slug: "evidence-sensemaking",
    title: "Evidence & Sensemaking",
    summary:
      "Research, signal interpretation, and visual explanation for complex contexts.",
  },
  {
    slug: "communication-narrative",
    title: "Communication & Narrative",
    summary:
      "Identity, direction, symbolic systems, and synthetic media with editorial discipline.",
  },
  {
    slug: "spatial-embodied-experience",
    title: "Spatial & Embodied Experience",
    summary:
      "Design that moves through space, perception, gesture, and mixed reality.",
  },
  {
    slug: "material-planetary-futures",
    title: "Material & Planetary Futures",
    summary:
      "Disciplines that work with matter, extraction, ecology, repair, and regeneration.",
  },
];

const baseDisciplines = [
  {
    slug: "ai-experience-design",
    title: "AI Experience Design",
    aliases: ["AI UX", "Human-AI Interaction", "Conversational UX"],
    metaDomain: "AI & Autonomous Systems",
    maturity: "Frontier",
    summary:
      "Designing how people collaborate with systems that are adaptive, probabilistic, and partly autonomous.",
    thesis:
      "AI experience design makes uncertainty legible. It choreographs confidence, memory, latency, intervention, and control so people can work with machine intelligence without being quietly overruled by it.",
    impactScales: ["Product", "Workflow", "Service"],
    interfaces: ["Text", "Voice", "Multimodal"],
    whatDesignersDo: [
      "Shape expectations around confidence, memory, and escalation.",
      "Turn model behavior into understandable interaction states instead of magic tricks.",
      "Design the seams between automation, recommendation, and human judgment.",
      "Make fallback, correction, and recovery feel like first-class paths.",
    ],
    whenItMatters: [
      "When outputs are probabilistic rather than deterministic.",
      "When trust depends on visible uncertainty and reversibility.",
      "When people must calibrate how much agency to hand over.",
    ],
    watchouts: [
      "Mistaking fluency for reliability.",
      "Hiding confidence, provenance, or model limitations.",
      "Designing a chat box when the real problem needs workflow design.",
    ],
    signatureQuestions: [
      "What should the system decide, and what should it ask?",
      "How will the user understand what the model remembers?",
      "What does graceful correction look like when the model is partly wrong?",
    ],
    relatedDisciplines: [
      "agentic-design",
      "evaluation-design-for-ai-systems",
      "design-research",
      "service-design",
    ],
    frameworks: ["responsible-ai", "human-factors", "systems-thinking"],
  },
  {
    slug: "agentic-design",
    title: "Agentic Design",
    aliases: ["Agent Design", "Autonomous Agent Design"],
    metaDomain: "AI & Autonomous Systems",
    maturity: "Frontier",
    summary:
      "Designing the behavior, boundaries, escalation logic, and social contract of autonomous or semi-autonomous agents.",
    thesis:
      "Agentic design is not prompt decoration. It is behavior architecture for systems that plan, delegate, interpret goals, and act in the world with partial information and real consequences.",
    impactScales: ["Workflow", "Organization", "Service"],
    interfaces: ["Task flows", "Delegation loops", "Review queues"],
    whatDesignersDo: [
      "Define autonomy levels and permission thresholds.",
      "Shape how the agent asks for clarification, consent, and confirmation.",
      "Design escalation paths for ambiguity, risk, and failure.",
      "Specify the narrative voice and accountability model of the agent.",
    ],
    whenItMatters: [
      "When a system can trigger actions beyond generating content.",
      "When the cost of overreach is higher than the cost of friction.",
      "When a product starts behaving like a coworker rather than a tool.",
    ],
    watchouts: [
      "Treating agency as a novelty feature.",
      "Confusing autonomy with competence.",
      "Forgetting that all agent behavior is policy, whether explicit or not.",
    ],
    signatureQuestions: [
      "When should the agent stop and ask for help?",
      "How does the agent communicate uncertainty before it acts?",
      "Who owns the consequences of its decisions?",
    ],
    relatedDisciplines: [
      "ai-experience-design",
      "evaluation-design-for-ai-systems",
      "organizational-design",
      "civic-design",
    ],
    frameworks: [
      "responsible-ai",
      "socio-technical-systems-modelling",
      "change-architecture",
    ],
  },
  {
    slug: "evaluation-design-for-ai-systems",
    title: "Evaluation Design for AI Systems",
    aliases: ["AI Evaluation Design", "Eval Design"],
    metaDomain: "AI & Autonomous Systems",
    maturity: "Emerging",
    summary:
      "Designing the criteria, scenarios, and signals by which AI systems are judged in context.",
    thesis:
      "Evaluation design translates quality from an abstract promise into a repeatable practice. It asks what good looks like for a model inside a real workflow, with real harms, tradeoffs, and stakes.",
    impactScales: ["Product", "Workflow", "Institution"],
    interfaces: ["Benchmarks", "Review rubrics", "Incident loops"],
    whatDesignersDo: [
      "Define success criteria tied to real user tasks and organizational risk.",
      "Create scenario sets that expose failure patterns, not just average performance.",
      "Design human review interfaces for subjective or high-stakes outputs.",
      "Map quality across utility, safety, fairness, and legibility.",
    ],
    whenItMatters: [
      "When model quality changes over time.",
      "When teams need to compare prompts, models, or agent policies.",
      "When the wrong answer is costly but not always obvious.",
    ],
    watchouts: [
      "Optimizing for benchmark theater instead of real-world quality.",
      "Using one metric for multiple kinds of failure.",
      "Treating evaluation as a one-off QA task instead of ongoing design work.",
    ],
    signatureQuestions: [
      "What does failure look like here in practice, not in theory?",
      "Which errors are annoying and which are unacceptable?",
      "How do we review quality without creating reviewer fatigue?",
    ],
    relatedDisciplines: [
      "ai-experience-design",
      "agentic-design",
      "design-research",
      "information-design-and-visualization",
    ],
    frameworks: ["responsible-ai", "human-factors", "systems-thinking"],
  },
  {
    slug: "systemic-intervention-design",
    title: "Systemic Intervention Design",
    aliases: ["Systems Intervention Design", "Systemic Design"],
    metaDomain: "Systems & Institutions",
    maturity: "Emerging",
    summary:
      "Planning and coordinating deliberate change inside complex social, institutional, or organizational systems.",
    thesis:
      "Systemic intervention design works where no single interface or service is the whole problem. It composes change across actors, incentives, infrastructures, and governance conditions.",
    impactScales: ["Institution", "Policy", "Territory"],
    interfaces: ["Programs", "Policies", "Service ecosystems"],
    whatDesignersDo: [
      "Map leverage points and unintended consequences before intervention.",
      "Coordinate sequences of change rather than isolated deliverables.",
      "Translate system complexity into decisions that institutions can act on.",
      "Hold multiple time horizons at once: immediate relief, structural repair, long-term adaptation.",
    ],
    whenItMatters: [
      "When outcomes depend on many actors across one system.",
      "When short-term fixes repeatedly recreate the same problem.",
      "When design work must operate in public, regulated, or contested environments.",
    ],
    watchouts: [
      "Using systems language as a cover for vagueness.",
      "Trying to model everything before acting at all.",
      "Forgetting that every intervention changes power, not just process.",
    ],
    signatureQuestions: [
      "What is the system rewarding right now?",
      "Where can a small change alter the pattern, not just the symptom?",
      "Who bears the cost while the system learns?",
    ],
    relatedDisciplines: [
      "service-design",
      "organizational-design",
      "civic-design",
      "design-research",
    ],
    frameworks: [
      "systems-thinking",
      "socio-technical-systems-modelling",
      "futures-thinking",
    ],
  },
  {
    slug: "service-design",
    title: "Service Design",
    aliases: ["Journey Design", "Service Orchestration"],
    metaDomain: "Systems & Institutions",
    maturity: "Established",
    summary:
      "Designing experiences that unfold across people, channels, policies, and operational systems over time.",
    thesis:
      "Service design is where frontstage promise meets backstage reality. It aligns the user journey with staffing, policy, process, tooling, and organizational behavior.",
    impactScales: ["Service", "Organization", "Institution"],
    interfaces: ["Journeys", "Channels", "Operational touchpoints"],
    whatDesignersDo: [
      "Map how people move across channels, handoffs, and waiting states.",
      "Design backstage roles and dependencies alongside frontstage touchpoints.",
      "Reduce friction created by organizational structure rather than user ignorance.",
      "Translate abstract strategy into service moments that feel coherent.",
    ],
    whenItMatters: [
      "When the experience breaks across handoffs or departments.",
      "When policy and operations shape the outcome more than the interface.",
      "When AI needs to fit into a real service, not just a demo flow.",
    ],
    watchouts: [
      "Treating the journey map as the work instead of the conversation starter.",
      "Fixing touchpoints while leaving incentives untouched.",
      "Adding AI in one channel and making the rest of the service harder.",
    ],
    signatureQuestions: [
      "Where does the service make people repeat themselves?",
      "Which backstage constraints are being paid for by the user?",
      "What would a good handoff feel like here?",
    ],
    relatedDisciplines: [
      "systemic-intervention-design",
      "organizational-design",
      "ai-experience-design",
      "civic-design",
    ],
    frameworks: ["systems-thinking", "participatory-design", "change-architecture"],
  },
  {
    slug: "organizational-design",
    title: "Organizational Design",
    aliases: ["Org Design", "Capability Design"],
    metaDomain: "Systems & Institutions",
    maturity: "Established",
    summary:
      "Designing roles, decision rights, operating rhythms, and structures that let institutions behave intelligently.",
    thesis:
      "Organizational design shapes how a system makes choices. In an AI era, it also determines where judgment lives, how capability is distributed, and whether responsibility is visible or buried.",
    impactScales: ["Organization", "Institution", "Network"],
    interfaces: ["Teams", "Governance", "Operating models"],
    whatDesignersDo: [
      "Clarify who decides what, and with which evidence.",
      "Design team structures that match the work instead of the org chart legacy.",
      "Create rhythms for review, escalation, and learning.",
      "Make institutional judgment legible enough to evolve.",
    ],
    whenItMatters: [
      "When design problems persist because the decision system is misaligned.",
      "When AI changes the distribution of expertise and labor.",
      "When teams move fast locally but fail globally.",
    ],
    watchouts: [
      "Treating a new org chart as transformation.",
      "Automating work without redesigning accountability.",
      "Ignoring informal power while optimizing formal structure.",
    ],
    signatureQuestions: [
      "Where does judgment accumulate and where does it disappear?",
      "Who is overloaded with approvals, and who is unaccountably powerful?",
      "What structure would make the desired behavior easier?",
    ],
    relatedDisciplines: [
      "service-design",
      "systemic-intervention-design",
      "agentic-design",
      "design-research",
    ],
    frameworks: ["change-architecture", "systems-thinking", "responsible-ai"],
  },
  {
    slug: "design-research",
    title: "Design Research",
    aliases: ["Research", "Discovery Research"],
    metaDomain: "Evidence & Sensemaking",
    maturity: "Established",
    summary:
      "Gathering and interpreting evidence about people, contexts, behaviors, and systems so design decisions rest on more than confidence.",
    thesis:
      "Design research is the mechanism for truth-seeking inside design. It does not merely collect opinions; it reduces the chance that a team confuses internal certainty with external reality.",
    impactScales: ["Product", "Service", "Institution"],
    interfaces: ["Interviews", "Field studies", "Research operations"],
    whatDesignersDo: [
      "Frame the decision a study needs to inform.",
      "Collect evidence across behavior, environment, incentives, and constraints.",
      "Translate findings into action without flattening nuance.",
      "Build cumulative research memory instead of one-off decks.",
    ],
    whenItMatters: [
      "When teams are moving too fast to notice they are guessing.",
      "When AI changes what users can or cannot articulate directly.",
      "When social, cultural, or institutional context shapes the result.",
    ],
    watchouts: [
      "Using research as retroactive validation.",
      "Reducing participants to quotes detached from their situation.",
      "Presenting findings without decision implications.",
    ],
    signatureQuestions: [
      "What do we actually need to know to make the next decision well?",
      "What are people doing that they are not saying?",
      "How will this insight change the design, not just the slide deck?",
    ],
    relatedDisciplines: [
      "information-design-and-visualization",
      "service-design",
      "ai-experience-design",
      "civic-design",
    ],
    frameworks: ["human-factors", "participatory-design", "behavioural-design"],
  },
  {
    slug: "information-design-and-visualization",
    title: "Information Design & Visualization",
    aliases: ["Information Visualization", "Data Viz", "Sensemaking Design"],
    metaDomain: "Evidence & Sensemaking",
    maturity: "Established",
    summary:
      "Turning complexity into legible form without making it falsely simple.",
    thesis:
      "Information design is one of the oldest future-facing disciplines because it governs how people see relationships, uncertainty, and consequence. In an AI-heavy world, that responsibility gets sharper, not softer.",
    impactScales: ["Product", "Report", "Institution"],
    interfaces: ["Dashboards", "Diagrams", "Narrative graphics"],
    whatDesignersDo: [
      "Structure dense information into navigable patterns.",
      "Expose uncertainty, comparison, and change over time.",
      "Design legends, labels, and explanatory scaffolds that preserve meaning.",
      "Help people decide, not just admire the chart.",
    ],
    whenItMatters: [
      "When systems are too complex to understand through text alone.",
      "When evaluation, governance, or strategy requires comparative judgment.",
      "When data needs narrative discipline, not decorative charts.",
    ],
    watchouts: [
      "Confusing visual sophistication with explanatory power.",
      "Hiding uncertainty because it looks messy.",
      "Designing a dashboard for the institution instead of the decision-maker.",
    ],
    signatureQuestions: [
      "What relationship must become visible here?",
      "Where do we need precision, and where do we need orientation?",
      "What gets misread if the audience scans rather than studies?",
    ],
    relatedDisciplines: [
      "design-research",
      "evaluation-design-for-ai-systems",
      "synthetic-media-direction",
      "systemic-intervention-design",
    ],
    frameworks: ["systems-thinking", "futures-thinking", "human-factors"],
  },
  {
    slug: "synthetic-media-direction",
    title: "Synthetic Media Direction",
    aliases: ["AI Art Direction", "Synthetic Narrative Design"],
    metaDomain: "Communication & Narrative",
    maturity: "Emerging",
    summary:
      "Directing AI-generated text, image, audio, and video outputs with aesthetic, ethical, and narrative discipline.",
    thesis:
      "Synthetic media direction is not about lucky prompts. It is about authorship under probabilistic production: shaping identity, intent, references, and taste so generative systems become instruments instead of slot machines.",
    impactScales: ["Brand", "Campaign", "Cultural system"],
    interfaces: ["Generative toolchains", "Creative briefs", "Style systems"],
    whatDesignersDo: [
      "Build reference systems that steer models toward coherent output families.",
      "Set boundaries for consent, provenance, and representation.",
      "Shape narrative voice across formats and channels.",
      "Design review rituals that keep aesthetic judgment central.",
    ],
    whenItMatters: [
      "When teams produce high volumes of machine-assisted content.",
      "When style drift can damage trust or identity.",
      "When synthetic media needs to remain accountable to humans and context.",
    ],
    watchouts: [
      "Mistaking abundance for originality.",
      "Collapsing authorship into prompt luck.",
      "Ignoring provenance, compensation, or cultural extraction.",
    ],
    signatureQuestions: [
      "What is the aesthetic system, not just the prompt?",
      "Who is being quoted, borrowed from, or erased?",
      "What should remain distinctly human in the loop?",
    ],
    relatedDisciplines: [
      "information-design-and-visualization",
      "ai-experience-design",
      "regenerative-material-design",
      "civic-design",
    ],
    frameworks: ["responsible-ai", "futures-thinking", "participatory-design"],
  },
  {
    slug: "spatial-computing-design",
    title: "Spatial Computing Design",
    aliases: ["XR Experience Design", "Embodied Interface Design"],
    metaDomain: "Spatial & Embodied Experience",
    maturity: "Emerging",
    summary:
      "Designing interactions that unfold through space, gesture, perception, and situated context.",
    thesis:
      "Spatial computing design works where interface stops being a flat surface and becomes an environment. That makes attention, comfort, orientation, and social norms part of the interface itself.",
    impactScales: ["Product", "Environment", "Embodied service"],
    interfaces: ["Gesture", "Space", "Spatial UI"],
    whatDesignersDo: [
      "Map interaction to bodies, proximity, and physical fatigue.",
      "Design anchoring, orientation, and memory in 3D context.",
      "Account for social visibility and behavioral norms in shared space.",
      "Translate intangible computation into spatially legible affordances.",
    ],
    whenItMatters: [
      "When work happens in motion or in physical environments.",
      "When mixed reality overlays real-world risk or distraction.",
      "When AI needs to sense and respond to embodied context.",
    ],
    watchouts: [
      "Treating novelty as usability.",
      "Ignoring accessibility and sensory overload.",
      "Designing for the headset demo instead of the lived environment.",
    ],
    signatureQuestions: [
      "What does attention cost in this environment?",
      "What becomes public when interaction leaves the screen?",
      "How do users recover when the spatial system is wrong?",
    ],
    relatedDisciplines: [
      "ai-experience-design",
      "information-design-and-visualization",
      "service-design",
      "design-research",
    ],
    frameworks: ["human-factors", "behavioural-design", "systems-thinking"],
  },
  {
    slug: "regenerative-material-design",
    title: "Regenerative Material Design",
    aliases: ["Material Futures", "Living Materials Design"],
    metaDomain: "Material & Planetary Futures",
    maturity: "Emerging",
    summary:
      "Designing materials, making systems, and product lifecycles that restore ecological capacity rather than merely reduce harm.",
    thesis:
      "Regenerative material design asks what matter owes the planet after design touches it. It moves beyond less-bad material choices toward repair, renewal, traceability, and ecological reciprocity.",
    impactScales: ["Material", "Product", "Supply chain"],
    interfaces: ["Fabrication", "Lifecycle systems", "Material libraries"],
    whatDesignersDo: [
      "Reframe material choice as a systems decision with ecological consequence.",
      "Design for repair, reuse, biodegradation, or circular return.",
      "Translate material intelligence into accessible product narratives.",
      "Coordinate across sourcing, fabrication, maintenance, and end-of-life.",
    ],
    whenItMatters: [
      "When sustainability claims risk collapsing into marketing theater.",
      "When physical products or environments shape long-term extraction patterns.",
      "When biomaterials and living systems enter the design palette.",
    ],
    watchouts: [
      "Treating carbon accounting as the whole design story.",
      "Ignoring labor conditions while optimizing ecological metrics.",
      "Designing novelty materials without end-of-life reality.",
    ],
    signatureQuestions: [
      "What does this material ask from the world before it reaches us?",
      "How does it return, decay, or circulate?",
      "Is the product easier to repair or just easier to replace?",
    ],
    relatedDisciplines: [
      "synthetic-media-direction",
      "systemic-intervention-design",
      "civic-design",
      "service-design",
    ],
    frameworks: ["regenerative-design", "systems-thinking", "futures-thinking"],
  },
  {
    slug: "civic-design",
    title: "Civic Design",
    aliases: ["Public Sector Design", "Democratic Design"],
    metaDomain: "Systems & Institutions",
    maturity: "Established",
    summary:
      "Designing services, policies, participation, and infrastructure for public legitimacy, access, and trust.",
    thesis:
      "Civic design works where the measure of quality is not delight alone but fairness, accessibility, due process, and public confidence. In an AI era, it also asks what automated governance can and should never become.",
    impactScales: ["Service", "Institution", "Public infrastructure"],
    interfaces: ["Public services", "Policy touchpoints", "Participation systems"],
    whatDesignersDo: [
      "Translate bureaucratic complexity into pathways people can actually navigate.",
      "Design for legitimacy, not just compliance.",
      "Make public decisions and their consequences more legible.",
      "Create participatory loops that are meaningful rather than symbolic.",
    ],
    whenItMatters: [
      "When systems affect rights, benefits, or public trust.",
      "When digital public infrastructure becomes the civic front door.",
      "When AI enters eligibility, enforcement, or service triage contexts.",
    ],
    watchouts: [
      "Optimizing convenience while weakening due process.",
      "Importing private-sector growth logic into public systems.",
      "Using participation as theater after decisions are already made.",
    ],
    signatureQuestions: [
      "Who gets excluded if this works only for the fluent and resourced?",
      "How does a person contest a decision here?",
      "What would make this system more trustworthy, not just faster?",
    ],
    relatedDisciplines: [
      "service-design",
      "systemic-intervention-design",
      "design-research",
      "agentic-design",
    ],
    frameworks: [
      "participatory-design",
      "responsible-ai",
      "socio-technical-systems-modelling",
    ],
  },
];

const rawDisciplines = [...baseDisciplines, ...additionalDisciplines];

const rawFrameworks = [
  {
    slug: "behavioural-design",
    title: "Behavioural Design",
    summary:
      "Designing environments, cues, incentives, and feedback loops that shape behavior without pretending context does not matter.",
    intent: "Make desired behavior easier, clearer, and more repeatable.",
    whenToUse: [
      "When behavior changes through environment design rather than instruction alone.",
      "When micro-friction and habit loops strongly influence the outcome.",
      "When product choices create predictable behavioral side effects.",
    ],
    failureModes: [
      "Reducing people to bias machines.",
      "Using nudges to avoid fixing structural problems.",
      "Optimizing engagement while degrading autonomy.",
    ],
    relatedDisciplines: [
      "ai-experience-design",
      "spatial-computing-design",
      "design-research",
    ],
    aiRelevance:
      "Critical wherever AI systems adapt behavior over time or personalize outcomes.",
  },
  {
    slug: "systems-thinking",
    title: "Systems Thinking",
    summary:
      "Seeing relationships, feedback loops, constraints, and unintended consequences instead of isolated events.",
    intent: "Shift the unit of design from artifact to pattern.",
    whenToUse: [
      "When the problem keeps reappearing in different forms.",
      "When many actors or incentives shape the outcome.",
      "When a local optimization risks creating downstream harm.",
    ],
    failureModes: [
      "Using systems language without decision consequence.",
      "Modeling endlessly instead of intervening judiciously.",
      "Treating all forces as equal when power is asymmetric.",
    ],
    relatedDisciplines: [
      "systemic-intervention-design",
      "service-design",
      "regenerative-material-design",
    ],
    aiRelevance:
      "Essential for understanding model behavior in the context of workflow, policy, and organizational systems.",
  },
  {
    slug: "responsible-ai",
    title: "Responsible AI",
    summary:
      "A governance frame for designing capability, accountability, safety, fairness, and recourse into AI systems.",
    intent: "Make powerful systems answerable to people, context, and consequence.",
    whenToUse: [
      "Whenever AI affects rights, opportunity, safety, or reputation.",
      "When a team needs rules for escalation, review, and deployment boundaries.",
      "When harm is unevenly distributed across populations or contexts.",
    ],
    failureModes: [
      "Reducing responsibility to a checklist after launch.",
      "Writing policy without operational pathways.",
      "Confusing model safety with product legitimacy.",
    ],
    relatedDisciplines: [
      "agentic-design",
      "ai-experience-design",
      "civic-design",
    ],
    aiRelevance:
      "Not adjacent to AI work. It is the condition for doing serious AI work at all.",
  },
  {
    slug: "participatory-design",
    title: "Participatory Design",
    summary:
      "Designing with people as co-authors of decisions, not just as subjects of research or recipients of outputs.",
    intent: "Shift power closer to the people who live with the consequences.",
    whenToUse: [
      "When legitimacy depends on real involvement from affected communities.",
      "When expertise is distributed across lived experience and institutional knowledge.",
      "When adoption depends on shared authorship rather than compliance.",
    ],
    failureModes: [
      "Inviting participation after the real decisions are already made.",
      "Overburdening communities with unpaid design labor.",
      "Treating one workshop as durable power-sharing.",
    ],
    relatedDisciplines: ["civic-design", "service-design", "design-research"],
    aiRelevance:
      "Vital when AI systems shape work, eligibility, or representation for groups who rarely control the design brief.",
  },
  {
    slug: "human-factors",
    title: "Human Factors",
    summary:
      "Designing around cognition, perception, physical capability, fatigue, and error under real operating conditions.",
    intent: "Keep systems usable when people are tired, distracted, stressed, or overloaded.",
    whenToUse: [
      "When the environment is safety-critical or cognitively demanding.",
      "When interaction spans bodies, tools, and time pressure.",
      "When new automation can amplify hidden workload instead of reducing it.",
    ],
    failureModes: [
      "Designing for ideal users in ideal conditions.",
      "Ignoring workload transfer from machine to human monitor.",
      "Optimizing speed while degrading comprehensibility.",
    ],
    relatedDisciplines: [
      "ai-experience-design",
      "evaluation-design-for-ai-systems",
      "spatial-computing-design",
    ],
    aiRelevance:
      "Crucial for handoffs, alerting, review interfaces, and human oversight of automated systems.",
  },
  {
    slug: "futures-thinking",
    title: "Futures Thinking",
    summary:
      "Using scenarios, weak signals, and strategic imagination to design with longer time horizons and multiple possible worlds.",
    intent: "Expand the design brief beyond the immediate product cycle.",
    whenToUse: [
      "When present decisions lock in long-term consequences.",
      "When uncertainty is high and trend extrapolation is insufficient.",
      "When a team needs to explore directional bets rather than predict one future.",
    ],
    failureModes: [
      "Confusing scenarios with forecasts.",
      "Using futures work as a mood board without strategic choice.",
      "Ignoring present-day injustice while speculating about distant futures.",
    ],
    relatedDisciplines: [
      "systemic-intervention-design",
      "synthetic-media-direction",
      "regenerative-material-design",
    ],
    aiRelevance:
      "Useful for mapping second-order effects of agents, automation, and new design labor patterns.",
  },
  {
    slug: "socio-technical-systems-modelling",
    title: "Socio-technical Systems Modelling",
    summary:
      "Modeling how technical infrastructure, culture, roles, incentives, data, and institutions behave together as one system.",
    intent: "Make invisible interdependencies visible before intervention or automation.",
    whenToUse: [
      "When technical fixes keep failing because the social system is ignored.",
      "When institutions need a shared model of complexity before acting.",
      "When AI adoption changes workflow, policy, and power simultaneously.",
    ],
    failureModes: [
      "Producing models too abstract to inform real choices.",
      "Leaving out politics and calling it neutrality.",
      "Mistaking a diagram for agreement.",
    ],
    relatedDisciplines: [
      "systemic-intervention-design",
      "civic-design",
      "agentic-design",
    ],
    aiRelevance:
      "One of the strongest frames for understanding what AI changes beyond the model interface itself.",
  },
  {
    slug: "regenerative-design",
    title: "Regenerative Design",
    summary:
      "Designing products, services, and systems so they contribute to ecological and social renewal rather than extractive stability.",
    intent: "Move from minimising damage to restoring capacity.",
    whenToUse: [
      "When the system depends on finite resources or ecological degradation.",
      "When value creation has been defined too narrowly as throughput or growth.",
      "When design decisions shape long-term environmental resilience.",
    ],
    failureModes: [
      "Using regeneration as a poetic label for lighter consumption.",
      "Ignoring measurement and stewardship after launch.",
      "Treating ecology as an add-on rather than a governing condition.",
    ],
    relatedDisciplines: [
      "regenerative-material-design",
      "systemic-intervention-design",
      "service-design",
    ],
    aiRelevance:
      "Useful for evaluating whether AI-enabled efficiency produces real restoration or just faster extraction.",
  },
  {
    slug: "change-architecture",
    title: "Change Architecture",
    summary:
      "Structuring how change is sequenced, narrated, governed, and adopted across an organization or public system.",
    intent: "Make transformation survivable and coherent.",
    whenToUse: [
      "When a new service, capability, or AI system changes roles and routines.",
      "When teams need adoption design, not just rollout communications.",
      "When resistance reveals a systems issue rather than a messaging problem.",
    ],
    failureModes: [
      "Treating communication as the whole change strategy.",
      "Asking people to change without shifting incentives or support.",
      "Declaring transformation complete before behavior changes.",
    ],
    relatedDisciplines: ["organizational-design", "service-design", "agentic-design"],
    aiRelevance:
      "AI adoption fails less from model quality than from badly designed organizational transition.",
  },
];

const baseGuides = [
  {
    slug: "designing-an-agent-that-knows-when-to-stop",
    title: "Designing an agent that knows when to stop",
    dek: "Autonomy is not the goal. Graceful hesitation is.",
    published: "2026-03-06",
    readingTime: "7 min read",
    theme: "Autonomy",
    sections: [
      {
        title: "Start with refusal geometry",
        paragraphs: [
          "Most teams define what an agent should do and leave stopping behavior vague. That is backwards. The first design move is to define where certainty ends, permission expires, or consequence becomes non-trivial.",
          "A well-designed agent has a visible map of refusal, review, and escalation states. That map is part of the experience, not a technical footnote.",
        ],
      },
      {
        title: "Design questions, not just actions",
        paragraphs: [
          "Agents feel more competent when they ask sharper questions. Clarification, consent, and exception handling are where their social intelligence is actually judged.",
          "If an agent cannot ask cleanly for more context, it will default to overreach or vague output. Neither earns trust.",
        ],
      },
      {
        title: "Make intervention cheap",
        paragraphs: [
          "Human override must be faster than silent recovery. If correction is awkward, users will let weak decisions pass simply because the friction is too high.",
          "Good agent design makes interrupting the system feel normal, not adversarial.",
        ],
      },
    ],
    takeaways: [
      "Treat stopping behavior as a primary feature.",
      "Write escalation rules in plain language before you design UI.",
      "Reward agents for restraint when the context is incomplete.",
    ],
    relatedDisciplines: [
      "agentic-design",
      "ai-experience-design",
      "evaluation-design-for-ai-systems",
    ],
    frameworks: ["responsible-ai", "human-factors", "change-architecture"],
  },
  {
    slug: "trust-gradients-for-probabilistic-products",
    title: "Trust gradients for probabilistic products",
    dek: "Trust is not binary. It thickens, thins, and moves.",
    published: "2026-03-04",
    readingTime: "6 min read",
    theme: "Trust",
    sections: [
      {
        title: "Stop asking whether users trust the system",
        paragraphs: [
          "The better question is what they trust it for, under which conditions, and with what backup plan. Trust is contextual and task-shaped.",
          "Designing for probabilistic systems means making trust adjustable rather than absolute.",
        ],
      },
      {
        title: "Show the cost of being wrong",
        paragraphs: [
          "A system handling low-stakes drafting can be playful. A system assisting with public benefits or legal interpretation cannot. Users calibrate trust through visible consequence, not brand voice alone.",
          "Your interface should tell people how careful they need to be without making them decode the stakes alone.",
        ],
      },
      {
        title: "Add trust supports, not just reassurance",
        paragraphs: [
          "Confidence indicators, provenance, review states, comparison views, and undo paths all help. Generic reassurance does not.",
          "Trust grows when the system reveals how to challenge it.",
        ],
      },
    ],
    takeaways: [
      "Design for calibrated trust, not blind trust.",
      "Make stakes legible before the user commits.",
      "Every trust claim needs a corresponding recovery mechanism.",
    ],
    relatedDisciplines: [
      "ai-experience-design",
      "civic-design",
      "evaluation-design-for-ai-systems",
    ],
    frameworks: ["human-factors", "responsible-ai", "behavioural-design"],
  },
  {
    slug: "when-not-to-automate",
    title: "When not to automate",
    dek: "Some work should stay slow, social, or contestable.",
    published: "2026-03-02",
    readingTime: "5 min read",
    theme: "Constraint",
    sections: [
      {
        title: "Automation changes the politics of work",
        paragraphs: [
          "Automation is often framed as efficiency, but it always redistributes visibility, discretion, and bargaining power. That is why deciding not to automate can be a design decision, not a failure of imagination.",
          "If a workflow depends on deliberation, explanation, or contestability, full automation may damage the thing it is meant to improve.",
        ],
      },
      {
        title: "Protect the irreducible moments",
        paragraphs: [
          "Some interactions are not just transactions. They are moments where trust, care, or legitimacy gets produced. Removing the human there may save time and destroy meaning.",
          "Designers need to learn which moments are operationally inefficient but socially necessary.",
        ],
      },
      {
        title: "Design partial automation with dignity",
        paragraphs: [
          "There is a wide design space between manual chaos and full automation. Decision support, summarization, and administrative relief can create value without erasing judgment.",
          "The most mature automation strategy is often a selective one.",
        ],
      },
    ],
    takeaways: [
      "Efficiency is not the only success metric.",
      "Contestability is a feature in public and high-stakes systems.",
      "Partial automation often produces better institutions than total automation.",
    ],
    relatedDisciplines: [
      "civic-design",
      "service-design",
      "organizational-design",
    ],
    frameworks: ["responsible-ai", "participatory-design", "systems-thinking"],
  },
  {
    slug: "the-new-design-stack-beyond-the-screen",
    title: "The new design stack beyond the screen",
    dek: "Interfaces are still here. They are just no longer the whole story.",
    published: "2026-02-28",
    readingTime: "8 min read",
    theme: "Systems",
    sections: [
      {
        title: "Design now spans policy, data, and machine behavior",
        paragraphs: [
          "The old stack was often visual design, interaction design, and front-end implementation. The emerging stack adds evaluation, governance, orchestration, data design, and model behavior as first-class concerns.",
          "That does not make classic design obsolete. It makes it incomplete on its own.",
        ],
      },
      {
        title: "Taste still matters, perhaps more",
        paragraphs: [
          "When machines can generate endless formal variation, taste becomes less about styling and more about judgment, editorship, and consequence.",
          "Good designers become directors of systems, not just composers of surfaces.",
        ],
      },
      {
        title: "The craft is expanding, not dissolving",
        paragraphs: [
          "The answer is not to abandon design vocabulary and become generic strategists. It is to deepen craft while learning how that craft behaves inside broader systems.",
          "The future designer may need to think like an editor, evaluator, policy translator, and systems cartographer at once.",
        ],
      },
    ],
    takeaways: [
      "Screens remain a layer, not the whole system.",
      "Evaluation and governance are now design materials.",
      "Taste evolves from styling into judgment at system scale.",
    ],
    relatedDisciplines: [
      "systemic-intervention-design",
      "ai-experience-design",
      "synthetic-media-direction",
    ],
    frameworks: ["systems-thinking", "futures-thinking", "responsible-ai"],
  },
  {
    slug: "how-to-run-a-futures-sprint-with-ai",
    title: "How to run a futures sprint with AI",
    dek: "Use AI to widen imagination, not to flatten it into faster consensus.",
    published: "2026-02-25",
    readingTime: "6 min read",
    theme: "Futures",
    sections: [
      {
        title: "Use AI as scenario provocation",
        paragraphs: [
          "AI is useful in futures work when it produces strange but plausible combinations that a team would not generate by habit. It is less useful when it simply restates the present in fluent prose.",
          "The facilitator's job is to separate novelty from signal.",
        ],
      },
      {
        title: "Keep evidence in the room",
        paragraphs: [
          "A futures sprint gets shallow quickly when speculation loses contact with current constraints and known weak signals. Pair prompts with evidence packets, not mood alone.",
          "Good futures work is disciplined imagination.",
        ],
      },
      {
        title: "End with present-tense design moves",
        paragraphs: [
          "The sprint should conclude with decisions that matter now: monitoring signals, prototype directions, partnership needs, policy questions, and capability gaps.",
          "Otherwise the future becomes a well-designed escape hatch from responsibility.",
        ],
      },
    ],
    takeaways: [
      "Use AI to widen the field of possibility, not to answer it.",
      "Anchor speculation in signal, not just style.",
      "Every future exercise should generate present commitments.",
    ],
    relatedDisciplines: [
      "systemic-intervention-design",
      "synthetic-media-direction",
      "design-research",
    ],
    frameworks: ["futures-thinking", "systems-thinking", "change-architecture"],
  },
  {
    slug: "building-a-design-atlas-instead-of-a-content-factory",
    title: "Building a design atlas instead of a content factory",
    dek: "Compounding value comes from relationships, not just publishing cadence.",
    published: "2026-02-22",
    readingTime: "5 min read",
    theme: "Editorial systems",
    sections: [
      {
        title: "A library is not an atlas",
        paragraphs: [
          "Libraries store. Atlases orient. The difference is relation: between ideas, domains, methods, moments, and consequences.",
          "A design publication becomes more useful when it does not only publish pieces but also maps how they connect.",
        ],
      },
      {
        title: "Taxonomy is an editorial act",
        paragraphs: [
          "Categories shape what people can find, compare, and imagine. That means taxonomy carries worldview, not just filing logic.",
          "If the field changes, the map should change too. A living atlas revises itself without apology.",
        ],
      },
      {
        title: "Build pages that refer to each other intelligently",
        paragraphs: [
          "Every guide should point into the atlas. Every atlas entry should point outward to frameworks, signals, and emergent questions. That is how a site becomes a thinking environment rather than a feed.",
          "Publishing cadence matters. Compounding structure matters more.",
        ],
      },
    ],
    takeaways: [
      "Orientation beats volume.",
      "Taxonomy is authorship.",
      "Relation is what turns content into infrastructure.",
    ],
    relatedDisciplines: [
      "information-design-and-visualization",
      "design-research",
      "systemic-intervention-design",
    ],
    frameworks: ["systems-thinking", "futures-thinking", "participatory-design"],
  },
];

const rawGuides = [...baseGuides, ...additionalGuides];

const baseSignals = [
  {
    slug: "evaluation-is-becoming-the-new-usability",
    title: "Evaluation is becoming the new usability",
    kicker: "Pattern",
    summary:
      "Teams building with models are discovering that response quality, review burden, and failure shape now matter as much as interface polish.",
    published: "2026-03-08",
    sections: [
      {
        title: "What changed",
        paragraphs: [
          "Usability used to focus on whether people could complete a task. AI products add a second layer: whether the system's answers are acceptable, legible, and easy to contest under real conditions.",
        ],
      },
      {
        title: "Why it matters",
        paragraphs: [
          "This pushes design closer to evaluation design, rubric design, and reviewer workflow design. Quality is no longer a hidden model issue. It is part of the experience surface.",
        ],
      },
      {
        title: "Question to carry",
        paragraphs: [
          "If the model is wrong 12 percent of the time, what does your interface ask the human to become?",
        ],
      },
    ],
    relatedDisciplines: [
      "evaluation-design-for-ai-systems",
      "ai-experience-design",
      "design-research",
    ],
  },
  {
    slug: "agents-are-turning-service-design-into-policy-design",
    title: "Agents are turning service design into policy design",
    kicker: "Pressure",
    summary:
      "The moment a service can act on behalf of a person, product decisions start behaving like governance decisions.",
    published: "2026-03-07",
    sections: [
      {
        title: "What changed",
        paragraphs: [
          "As agents draft, decide, escalate, and transact, the interface is no longer the only design surface. Permissions, approvals, and exceptions become policy encoded in product behavior.",
        ],
      },
      {
        title: "Why it matters",
        paragraphs: [
          "This raises the threshold for service design maturity. Designers need to understand consequence, recourse, and institutional responsibility, not just flow optimization.",
        ],
      },
      {
        title: "Question to carry",
        paragraphs: [
          "Which part of your product has quietly become public policy in miniature?",
        ],
      },
    ],
    relatedDisciplines: ["agentic-design", "service-design", "civic-design"],
  },
  {
    slug: "synthetic-media-needs-direction-not-prompt-luck",
    title: "Synthetic media needs direction, not prompt luck",
    kicker: "Signal",
    summary:
      "Generative abundance is making art direction and editorial judgment more valuable, not less.",
    published: "2026-03-05",
    sections: [
      {
        title: "What changed",
        paragraphs: [
          "More teams can produce images, text, and video at volume, but fewer can maintain coherence, provenance, and taste across that volume.",
        ],
      },
      {
        title: "Why it matters",
        paragraphs: [
          "The differentiator is shifting from production capability to direction systems: references, review rituals, aesthetic constraints, and ethical boundaries.",
        ],
      },
      {
        title: "Question to carry",
        paragraphs: [
          "If your model can produce a thousand assets, what keeps them from becoming a thousand versions of nothing?",
        ],
      },
    ],
    relatedDisciplines: [
      "synthetic-media-direction",
      "information-design-and-visualization",
      "design-research",
    ],
  },
  {
    slug: "repairability-is-returning-as-a-digital-design-virtue",
    title: "Repairability is returning as a digital design virtue",
    kicker: "Shift",
    summary:
      "As systems become more autonomous and more opaque, users increasingly value products they can understand, correct, and recover.",
    published: "2026-03-03",
    sections: [
      {
        title: "What changed",
        paragraphs: [
          "Probabilistic systems fail in softer but more confusing ways. That pushes digital design toward patterns long familiar in physical design: maintenance, serviceability, and visible failure modes.",
        ],
      },
      {
        title: "Why it matters",
        paragraphs: [
          "Repairable products build trust differently. They admit limits, support correction, and let users remain competent inside the system instead of merely dependent on it.",
        ],
      },
      {
        title: "Question to carry",
        paragraphs: [
          "What would it mean for your AI product to be maintainable by the people who rely on it?",
        ],
      },
    ],
    relatedDisciplines: [
      "ai-experience-design",
      "regenerative-material-design",
      "service-design",
    ],
  },
  {
    slug: "memory-strategy-is-becoming-a-product-strategy",
    title: "Memory strategy is becoming a product strategy",
    kicker: "Pattern",
    summary:
      "When products remember across sessions, memory design stops being a convenience feature and becomes a core trust architecture.",
    published: "2026-03-01",
    sections: [
      {
        title: "What changed",
        paragraphs: [
          "Persistent model memory is shifting user expectations around continuity, personalization, and privacy. Teams now need an explicit stance on what the product remembers, why, and for whose benefit.",
        ],
      },
      {
        title: "Why it matters",
        paragraphs: [
          "Memory can make systems feel more useful or more invasive. The line is designed, not discovered accidentally after launch.",
        ],
      },
      {
        title: "Question to carry",
        paragraphs: [
          "If a system remembers me, how do I understand, edit, or refuse that memory?",
        ],
      },
    ],
    relatedDisciplines: [
      "ai-experience-design",
      "agentic-design",
      "evaluation-design-for-ai-systems",
    ],
  },
  {
    slug: "design-teams-need-an-institutional-imagination-again",
    title: "Design teams need an institutional imagination again",
    kicker: "Provocation",
    summary:
      "The future of design will be weak if it only upgrades interfaces and never rethinks the institutions behind them.",
    published: "2026-02-27",
    sections: [
      {
        title: "What changed",
        paragraphs: [
          "AI is exposing how many user problems are really manifestations of policy, organization, procurement, and governance. That makes institutional design literacy a practical need, not a niche interest.",
        ],
      },
      {
        title: "Why it matters",
        paragraphs: [
          "Without institutional imagination, design becomes a cosmetic buffer between people and broken systems. With it, design can operate as a lever on structure, not just surface.",
        ],
      },
      {
        title: "Question to carry",
        paragraphs: [
          "What if the interface problem you are polishing is actually a governance problem wearing UI clothes?",
        ],
      },
    ],
    relatedDisciplines: [
      "systemic-intervention-design",
      "organizational-design",
      "civic-design",
    ],
  },
];

const rawSignals = [...baseSignals, ...additionalSignals];

const disciplineCanonOverrides = {
  "agentic-design": {
    whatItReallyIs:
      "Not a chatbot. That is the first useful correction. A chatbot answers. An agent acts. Once a system can plan steps, call tools, make choices, and keep working toward a goal, the design problem changes. You are no longer just shaping interaction. You are shaping authority.",
    whatChangesOnTheGround:
      "Once software becomes agentic, the product stops behaving like a single screen and starts behaving like a delegated worker. That means the real design work sits in mandate, checkpoints, escalation, and accountability. The system needs to know not only what to do, but what kind of mess should make it stop.",
    whatPeopleActuallyDo: [
      "Define the mandate: what the agent may suggest, what it may do, what it may spend, and what must never happen without permission.",
      "Design the workflow as steps, checkpoints, and handoffs instead of one long magic trick.",
      "Build visible guardrails: stop conditions, approval rules, and checks on irreversible actions.",
      "Make the work observable so people can see what happened, why it happened, and what the agent plans next.",
    ],
    movesThatRaiseTheLevel: [
      "Design the 'unless' moments before the happy path, because that is where real trust is made.",
      "Test conflicting constraints, vague goals, and missing context instead of rewarding only smooth completion.",
      "Make interruption cheap enough that humans can correct the system before damage becomes efficiency theater.",
    ],
    whereItGoesWrong: [
      "Teams focus on whether the agent completed the task instead of how it behaved once the task stopped being straightforward.",
      "Personality gets polished while permission stays vague.",
      "Demos look magical because ambiguity, public consequence, and irreversible actions are kept out of frame.",
    ],
    whatPeopleUsuallyGetWrong: [
      "Treating agent design as prompt design with better branding.",
      "Equating more autonomy with better design regardless of stakes or reversibility.",
      "Forgetting that once the agent can act, every boundary becomes a policy decision.",
    ],
    questionToCarry:
      "When the world gets messy, what exactly is this agent allowed to decide without asking?",
  },
};

const guideCanonOverrides = {
  "trust-gradients-for-probabilistic-products": {
    readerQuestion:
      "Why do some AI products feel trustworthy right up until they suddenly don’t?",
    quickAnswer:
      "Because trust is rarely lost all at once. It erodes in gradients. A product feels helpful when the stakes are low, the output looks plausible, and the user does not have to inspect too closely. Then the task becomes more consequential, the uncertainty stays hidden, and the same product suddenly feels unreliable.",
    opinion:
      "My view: many teams are not actually designing trust. They are designing temporary confidence. Those are not the same thing.",
    mechanism:
      "A probabilistic product should not ask for one blanket feeling of trust. It should adjust its behavior as stakes, reversibility, inspectability, and user effort change. That gradient is what keeps trust from snapping.",
    runningExample:
      "Imagine an AI product that helps recruiters screen candidates. For junior, high-volume screening it can suggest a ranked draft list. For a senior, ambiguous role it should slow down, show more uncertainty, expose what drove the ranking, and make manual comparison easier. Same product. Different trust gradient.",
    questionToCarry:
      "Where in your product does confidence stay flat even when the stakes rise?",
    whyIAmWritingThisNow:
      "Trust in AI products is rarely broken by one dramatic failure. It more often leaks away because the product keeps presenting uncertain work with the same polished confidence, no matter how consequential the task becomes.",
    useThisWhenTheRoomIsStuck:
      "Use this when your product generates, predicts, recommends, ranks, estimates, or interprets, and the stakes shift across tasks more than the interface currently admits.",
    bodySections: [
      {
        title: "The core idea",
        paragraphs: [
          "A probabilistic product does not produce the same result every time from the same kind of input. It generates, predicts, ranks, recommends, estimates, or interprets. That means it is always dealing in likelihoods, not certainties.",
          "So trust should not be designed as a blanket feeling like 'this AI is smart.' It should be designed as a gradient: where the product can act boldly, where it should slow down, where it should show uncertainty, and where it should hand control back to the human.",
          "That gradient is what keeps trust from snapping.",
        ],
      },
      {
        title: "What makes trust rise or fall",
        paragraphs: [
          "Trust in probabilistic products usually depends on four things: stakes, reversibility, inspectability, and user effort.",
          "If the product gets a movie recommendation wrong, nobody writes an incident report. If it gets a medical summary wrong, that is a different day. The higher the stakes, the more visible the uncertainty needs to be.",
          "If the user can easily undo the result, people tolerate more ambiguity. If they cannot, the product needs stronger review points and clearer framing.",
          "Users do not need a math lecture, but they do need enough visibility to understand what kind of answer this is, what it used, and where it might be weak.",
          "And if checking the product is exhausting, people stop checking. That is when weak trust turns into blind trust, which is usually followed by disappointment.",
        ],
      },
      {
        title: "A real example",
        paragraphs: [
          "Imagine an AI product that helps recruiters screen candidates. It summarizes resumes, ranks applicants, and suggests who should move to interview. At first it feels efficient. It saves time. The summaries are clean. The ranking looks sensible.",
          "Then a more senior role comes in. The criteria are nuanced. Leadership matters more than keywords. Career changes matter. Context matters. But the product still produces a neat-looking shortlist.",
          "For a junior, high-volume screening task, the product might reasonably suggest a ranked draft list. For a senior, ambiguous role, the same product should shift behavior: show more uncertainty, expose which criteria drove the ranking, make it easier to compare candidates manually, and avoid presenting the list as settled truth.",
        ],
      },
      {
        title: "The mistake most teams make",
        paragraphs: [
          "They design one trust posture for the whole product. Everything is smooth. Everything is confident. Everything is presented with the same visual certainty whether the system is summarizing a simple note or helping make a difficult judgment call.",
          "It looks polished. It is also misleading.",
          "If the UI always looks equally confident, the trust model is lying.",
        ],
      },
      {
        title: "What trust gradients look like in practice",
        paragraphs: [
          "Low-stakes, reversible tasks can be faster and more opinionated: draft suggestions, search recommendations, clustering notes, generating options. The user can edit, reject, or retry easily.",
          "Medium-stakes, partly reversible tasks should show more reasoning and confidence cues: candidate ranking, policy summarization, support suggestions, triage recommendations. This is where inspection becomes important.",
          "High-stakes, hard-to-reverse tasks should become more restrained: legal interpretation, financial actions, health-related advice, or external communication on someone’s behalf. At this level, trust should come from transparency, review points, and careful boundaries, not from a polished tone of voice.",
        ],
      },
      {
        title: "How to design for trust instead of vibes",
        paragraphs: [
          "Show what kind of answer this is. Is it a guess, a summary, a recommendation, a prediction, or a decision draft? Label the mode clearly.",
          "Match the interface to the stakes. Do not present a probabilistic guess with the same visual confidence as a confirmed fact.",
          "Make inspection cheap. Let users quickly check the basis of the output without doing detective work.",
          "Let the system become more cautious when the task gets riskier. A good product does not use the same confidence level everywhere.",
        ],
      },
    ],
    ifYouOnlyDoThreeThings: [
      "Label what kind of answer the user is seeing instead of letting a guess masquerade as a fact.",
      "Match the confidence and review pattern to the stakes of the task.",
      "Make inspection and correction cheap before polished certainty becomes expensive trust debt.",
    ],
    movesForTheNextSevenDays: [
      "Audit one workflow where the stakes rise but the interface still looks equally confident all the way through.",
      "Add a stronger inspection or provenance pattern to one medium- or high-stakes interaction.",
      "Define the moment where the system should slow down, ask for review, or hand control back.",
    ],
    whereTeamsFoolThemselves: [
      "Mistaking polished confidence for trustworthy design.",
      "Using the same trust posture for drafting, ranking, and consequential judgment.",
      "Treating hidden uncertainty as an acceptable usability shortcut.",
    ],
  },
};

function compactList(items = []) {
  return items.filter(Boolean);
}

function lastParagraphFromSections(sections = []) {
  return sections.at(-1)?.paragraphs?.at(-1) ?? "";
}

function guideBodySectionsFromCanonical(guide, voice, depth) {
  return [
    {
      title: "The core idea",
      paragraphs: compactList([voice.answer, voice.mechanism]),
    },
    {
      title: "What people usually miss",
      paragraphs: compactList([voice.opinion, depth.stakes]),
    },
    {
      title: "How this plays out in practice",
      paragraphs: compactList([depth.useThisWhen, voice.example]),
    },
  ];
}

function enrichDiscipline(discipline) {
  const voice = atlasVoice[discipline.slug] ?? {};
  const depth = disciplineDepth[discipline.slug] ?? {};
  const override = disciplineCanonOverrides[discipline.slug] ?? {};
  const preview = override.preview ?? voice.preview ?? discipline.summary;

  return {
    ...discipline,
    preview,
    summary: preview,
    readerQuestion: override.readerQuestion ?? voice.question ?? discipline.signatureQuestions?.[0],
    quickAnswer: override.quickAnswer ?? voice.answer ?? discipline.summary,
    opinion: override.opinion ?? voice.opinion ?? discipline.thesis,
    mechanism: override.mechanism ?? voice.mechanism ?? depth.operatingReality,
    runningExample: override.runningExample ?? voice.example ?? discipline.thesis,
    schemaSteps: override.schemaSteps ?? voice.schema ?? [],
    questionToCarry:
      override.questionToCarry ?? discipline.signatureQuestions?.[0] ?? "",
    whatItReallyIs: override.whatItReallyIs ?? discipline.thesis,
    whatChangesOnTheGround:
      override.whatChangesOnTheGround ?? depth.operatingReality ?? discipline.thesis,
    whatPeopleActuallyDo:
      override.whatPeopleActuallyDo ?? discipline.whatDesignersDo ?? [],
    movesThatRaiseTheLevel:
      override.movesThatRaiseTheLevel ?? depth.decisionMoves ?? [],
    whenToReachForIt:
      override.whenToReachForIt ?? discipline.whenItMatters ?? [],
    evidenceItIsWorking:
      override.evidenceItIsWorking ?? depth.evidenceOfMaturity ?? [],
    whereItGoesWrong:
      override.whereItGoesWrong ?? discipline.watchouts ?? [],
    whatPeopleUsuallyGetWrong:
      override.whatPeopleUsuallyGetWrong ?? depth.commonMisreadings ?? [],
    questionsToTakeIntoTheRoom:
      override.questionsToTakeIntoTheRoom ?? discipline.signatureQuestions ?? [],
  };
}

function enrichFramework(framework) {
  const voice = frameworkVoice[framework.slug] ?? {};
  const depth = frameworkDepth[framework.slug] ?? {};
  const preview = voice.preview ?? framework.summary;

  return {
    ...framework,
    preview,
    summary: preview,
    readerQuestion: voice.question ?? framework.title,
    quickAnswer: voice.answer ?? framework.summary,
    opinion: voice.opinion ?? framework.intent,
    mechanism: voice.mechanism ?? depth.practicalUse ?? framework.intent,
    runningExample: voice.example ?? depth.practicalUse ?? framework.summary,
    schemaSteps: voice.schema ?? [],
    questionToCarry: depth.diagnosticQuestions?.[0] ?? "",
    whatProblemThisIsReallyFor: framework.intent,
    howToUseWithoutKiddingYourself: depth.practicalUse ?? framework.intent,
    whenToReachForIt: framework.whenToUse ?? [],
    questionsThatExposeTheSystem: depth.diagnosticQuestions ?? [],
    evidenceWorthCollecting: depth.evidenceToCollect ?? [],
    whatGoodLooksLike: depth.whatGoodLooksLike ?? [],
    howTeamsMisuseIt: framework.failureModes ?? [],
  };
}

function enrichGuide(guide) {
  const voice = guideVoice[guide.slug] ?? {};
  const depth = guideDepth[guide.slug] ?? {};
  const override = guideCanonOverrides[guide.slug] ?? {};
  const preview = override.preview ?? voice.preview ?? guide.dek;

  return {
    ...guide,
    preview,
    dek: preview,
    readerQuestion:
      override.readerQuestion ?? voice.question ?? guide.title,
    quickAnswer: override.quickAnswer ?? voice.answer ?? guide.dek,
    opinion: override.opinion ?? voice.opinion ?? depth.stakes,
    mechanism: override.mechanism ?? voice.mechanism ?? depth.useThisWhen,
    runningExample: override.runningExample ?? voice.example ?? guide.dek,
    schemaSteps: override.schemaSteps ?? voice.schema ?? [],
    questionToCarry:
      override.questionToCarry ?? lastParagraphFromSections(guide.sections),
    whyIAmWritingThisNow: override.whyIAmWritingThisNow ?? depth.stakes ?? "",
    useThisWhenTheRoomIsStuck:
      override.useThisWhenTheRoomIsStuck ?? depth.useThisWhen ?? "",
    bodySections:
      override.bodySections ?? guideBodySectionsFromCanonical(guide, voice, depth),
    ifYouOnlyDoThreeThings:
      override.ifYouOnlyDoThreeThings ?? guide.takeaways ?? [],
    movesForTheNextSevenDays:
      override.movesForTheNextSevenDays ?? depth.movesThisWeek ?? [],
    whereTeamsFoolThemselves:
      override.whereTeamsFoolThemselves ?? depth.watchFor ?? [],
  };
}

function enrichSignal(signal) {
  const voice = signalVoice[signal.slug] ?? {};
  const depth = signalDepth[signal.slug] ?? {};
  const whatChanged = signal.sections?.[0]?.paragraphs?.join(" ");
  const whyItMatters = signal.sections?.[1]?.paragraphs?.join(" ");

  return {
    ...signal,
    preview: voice.preview ?? signal.summary,
    summary: voice.preview ?? signal.summary,
    readerQuestion: voice.question ?? signal.title,
    quickAnswer: voice.answer ?? signal.summary,
    opinion: voice.opinion ?? depth.longerArc ?? signal.summary,
    mechanism: voice.mechanism ?? whatChanged ?? signal.summary,
    runningExample: voice.example ?? whatChanged ?? signal.summary,
    schemaSteps: voice.schema ?? [],
    questionToCarry: lastParagraphFromSections(signal.sections),
    whatChanged: whatChanged ?? voice.answer ?? "",
    whyItMatters: whyItMatters ?? voice.opinion ?? "",
    deeperPattern: depth.longerArc ?? voice.mechanism ?? "",
    watchTheseNext: depth.whatToWatchNext ?? [],
    doThisBeforeTheSignalGetsExpensive: depth.movesThisWeek ?? [],
  };
}

export const disciplines = rawDisciplines.map(enrichDiscipline);
export const frameworks = rawFrameworks.map(enrichFramework);
export const guides = rawGuides.map(enrichGuide);
export const signals = rawSignals.map(enrichSignal);

export const featuredDisciplineSlugs = [
  "ai-experience-design",
  "agentic-design",
  "systemic-intervention-design",
  "regenerative-material-design",
];

export const featuredFrameworkSlugs = [
  "systems-thinking",
  "responsible-ai",
  "futures-thinking",
];

const disciplineMap = Object.fromEntries(
  disciplines.map((discipline) => [discipline.slug, discipline]),
);

const frameworkMap = Object.fromEntries(
  frameworks.map((framework) => [framework.slug, framework]),
);

const guideMap = Object.fromEntries(guides.map((guide) => [guide.slug, guide]));
const signalMap = Object.fromEntries(
  signals.map((signal) => [signal.slug, signal]),
);

export function getDiscipline(slug) {
  return disciplineMap[slug];
}

export function getFramework(slug) {
  return frameworkMap[slug];
}

export function getGuide(slug) {
  return guideMap[slug];
}

export function getSignal(slug) {
  return signalMap[slug];
}

export function getDisciplinesBySlugs(slugs = []) {
  return slugs.map((slug) => getDiscipline(slug)).filter(Boolean);
}

export function getFrameworksBySlugs(slugs = []) {
  return slugs.map((slug) => getFramework(slug)).filter(Boolean);
}

export function formatPublishedDate(dateString) {
  return new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(dateString));
}

export function getAllSiteRoutes() {
  return [
    "",
    "/about",
    "/atlas",
    "/frameworks",
    "/guides",
    "/signals",
    ...disciplines.map((discipline) => `/atlas/${discipline.slug}`),
    ...frameworks.map((framework) => `/frameworks/${framework.slug}`),
    ...guides.map((guide) => `/guides/${guide.slug}`),
    ...signals.map((signal) => `/signals/${signal.slug}`),
  ];
}
