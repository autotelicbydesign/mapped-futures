export const additionalDisciplines = [
  {
    slug: "human-ai-collaboration-design",
    title: "Human-AI Collaboration Design",
    aliases: ["AI Collaboration Design", "Copilot Design"],
    metaDomain: "Intelligent & Autonomous Systems",
    maturity: "Emerging",
    summary:
      "Designing how humans and machine systems share context, initiative, and accountability across real work.",
    thesis:
      "Human-AI collaboration design is the discipline of composing work between people and machine reasoning without making either side carry invisible coordination debt. The real design problem is not whether the AI can help. It is whether the collaboration model lets humans stay oriented, calibrated, and in command of what matters.",
    impactScales: ["Workflow", "Product", "Organization"],
    interfaces: ["Copilots", "Shared workspaces", "Review loops"],
    whatDesignersDo: [
      "Define when the system leads, when the human leads, and when initiative must be negotiated.",
      "Design shared context so people can understand what the system has seen, assumed, and prepared.",
      "Shape handoffs, approvals, and review states that keep accountability visible.",
      "Turn collaboration history into a usable memory rather than a confusing transcript.",
    ],
    whenItMatters: [
      "When AI is embedded in expert work rather than isolated as a toy feature.",
      "When value depends on coordination between human judgment and machine speed.",
      "When multiple people need to inspect or inherit AI-assisted work downstream.",
    ],
    watchouts: [
      "Designing for convenience while quietly shifting cognitive burden onto the human reviewer.",
      "Assuming the human will always notice when the system has overstepped its lane.",
      "Treating collaboration as a chat transcript instead of as a work relationship with rules.",
    ],
    signatureQuestions: [
      "What kind of coworker is this system being allowed to become?",
      "Where does the human need leverage, not just visibility?",
      "How does the collaboration stay trustworthy across repeated use, not just first use?",
    ],
    relatedDisciplines: [
      "ai-experience-design",
      "agentic-design",
      "design-operations-and-workflow-systems",
      "organizational-design",
    ],
    frameworks: ["human-factors", "responsible-ai", "change-architecture"],
  },
  {
    slug: "trust-and-safety-experience-design",
    title: "Trust & Safety Experience Design",
    aliases: ["T&S Design", "Safety Experience Design"],
    metaDomain: "Intelligent & Autonomous Systems",
    maturity: "Emerging",
    summary:
      "Designing how products prevent harm, communicate risk, and provide recourse when systems fail or are abused.",
    thesis:
      "Trust and safety experience design is where harm prevention meets lived interaction. It is not just policy enforcement or moderation tooling. It is the discipline of designing guardrails, reports, appeals, warnings, and recovery paths so people can stay safe without being treated like collateral damage by blunt systems.",
    impactScales: ["Product", "Service", "Institution"],
    interfaces: ["Guardrails", "Reports", "Appeals"],
    whatDesignersDo: [
      "Shape warning, reporting, and appeal flows that remain usable in stressful moments.",
      "Translate policy intent into product behavior without hiding consequences inside opaque systems.",
      "Design the recovery experience after harm, not just the prevention layer before it.",
      "Coordinate moderation, policy, support, and product signals so the experience stays coherent.",
    ],
    whenItMatters: [
      "When abuse, manipulation, fraud, or harmful output is a realistic operating condition.",
      "When products encode policies that affect visibility, eligibility, or access.",
      "When users need meaningful recourse after a false positive, missed harm, or harmful recommendation.",
    ],
    watchouts: [
      "Treating safety controls as friction to minimize rather than trust infrastructure to design well.",
      "Building report flows that protect metrics more than people.",
      "Using generic warning language in moments that actually demand specific guidance and recourse.",
    ],
    signatureQuestions: [
      "What is the safest useful experience, not the safest abstract rule?",
      "How does someone recover if the system gets the safety call wrong?",
      "Which harms are being optimized for, and which are being ignored because they are harder to measure?",
    ],
    relatedDisciplines: [
      "evaluation-design-for-ai-systems",
      "policy-design",
      "civic-design",
      "inclusive-product-design",
    ],
    frameworks: ["responsible-ai", "human-factors", "socio-technical-systems-modelling"],
  },
  {
    slug: "knowledge-system-design",
    title: "Knowledge System Design",
    aliases: ["Knowledge Design", "Organizational Knowledge Design"],
    metaDomain: "Evidence & Sensemaking",
    maturity: "Emerging",
    summary:
      "Designing how knowledge is structured, retrieved, updated, and trusted so it remains usable over time.",
    thesis:
      "Knowledge system design matters when information abundance starts producing institutional amnesia. The job is to shape not only repositories and search, but also standards of evidence, update rhythms, ownership, and retrieval patterns so knowledge compounds instead of decaying into disconnected documents.",
    impactScales: ["Workflow", "Organization", "Institution"],
    interfaces: ["Repositories", "Search", "Decision records"],
    whatDesignersDo: [
      "Design retrieval paths around decisions and tasks instead of around storage locations.",
      "Create structures for ownership, revision, and context so knowledge remains interpretable later.",
      "Connect formal documentation with living operational signals, not just archived artifacts.",
      "Make it easier to find the right layer of detail at the right moment.",
    ],
    whenItMatters: [
      "When teams repeat the same research, debates, and mistakes because knowledge cannot be found or trusted.",
      "When AI systems are being asked to operate over internal documentation and institutional memory.",
      "When the speed of work is outpacing the quality of synthesis and retrieval.",
    ],
    watchouts: [
      "Treating search as the whole problem when the deeper issue is unstructured knowledge.",
      "Assuming documentation helps if ownership and update responsibility are unclear.",
      "Letting AI summarization mask the fact that the underlying material is inconsistent or stale.",
    ],
    signatureQuestions: [
      "What does someone need to know here, and at which moment of the workflow?",
      "How does the system distinguish current guidance from historical residue?",
      "What makes this body of knowledge trustworthy enough to act on?",
    ],
    relatedDisciplines: [
      "design-research",
      "information-design-and-visualization",
      "organizational-design",
      "design-operations-and-workflow-systems",
    ],
    frameworks: ["systems-thinking", "socio-technical-systems-modelling", "change-architecture"],
  },
  {
    slug: "design-operations-and-workflow-systems",
    title: "Design Operations & Workflow Systems",
    aliases: ["Design Ops", "Workflow Design Systems"],
    metaDomain: "Systems & Institutions",
    maturity: "Established",
    summary:
      "Designing the tools, rituals, review loops, and coordination structures that let design work scale without losing judgment.",
    thesis:
      "Design operations becomes a real discipline when it stops being calendar management for creative teams and starts shaping the conditions under which quality work can happen repeatedly. It is workflow design, governance design, and memory design for teams whose output depends on judgment under pressure.",
    impactScales: ["Workflow", "Organization", "Service"],
    interfaces: ["Review loops", "Tooling", "Operating rituals"],
    whatDesignersDo: [
      "Build review systems that clarify standards, ownership, and escalation.",
      "Reduce coordination drag across tools, teams, and decision-making forums.",
      "Design reusable operating patterns for intake, prioritization, critique, and knowledge capture.",
      "Translate quality from taste into a system people can work inside.",
    ],
    whenItMatters: [
      "When the team is growing faster than its ability to maintain quality and coherence.",
      "When design is blocked more by workflow friction than by lack of ideas.",
      "When AI and automation are changing who produces work and who reviews it.",
    ],
    watchouts: [
      "Confusing administrative neatness with a genuinely better operating model.",
      "Creating process overhead that removes time for real judgment.",
      "Building workflow tooling without clarifying standards, power, or decision rights.",
    ],
    signatureQuestions: [
      "What part of quality is still living only in the heads of a few senior people?",
      "Which routine is currently costing the team the most judgment per week?",
      "How do new tools alter the review burden, not just the output volume?",
    ],
    relatedDisciplines: [
      "organizational-design",
      "knowledge-system-design",
      "human-ai-collaboration-design",
      "service-design",
    ],
    frameworks: ["change-architecture", "systems-thinking", "behavioural-design"],
  },
  {
    slug: "policy-design",
    title: "Policy Design",
    aliases: ["Rule Design", "Service Policy Design"],
    metaDomain: "Systems & Institutions",
    maturity: "Emerging",
    summary:
      "Designing rules, eligibility, recourse, and institutional logic as lived experiences rather than hidden administrative text.",
    thesis:
      "Policy design sits where abstract rules become practical realities. Every threshold, exception, appeal path, and evidence requirement creates a user experience and an institutional behavior. The discipline is about making that rule system intelligible, fairer, and operationally coherent.",
    impactScales: ["Service", "Institution", "Policy"],
    interfaces: ["Rules", "Eligibility", "Appeals"],
    whatDesignersDo: [
      "Translate policy intent into operational logic people can understand and navigate.",
      "Design exception handling, recourse, and evidence requests as part of the rule system.",
      "Expose the consequences of thresholds, defaults, and missing data on real lives.",
      "Test how rules behave in edge cases before institutions harden around them.",
    ],
    whenItMatters: [
      "When product behavior determines access, eligibility, or consequences.",
      "When rules are being encoded into software or agent behavior.",
      "When the operational burden of policy is falling on users or frontline staff.",
    ],
    watchouts: [
      "Pretending policy is neutral once it is written into a product flow.",
      "Optimizing for administrative clarity while making recourse unusable.",
      "Treating edge cases as noise when they are where legitimacy is tested.",
    ],
    signatureQuestions: [
      "What rule is this product already enforcing, whether we admit it or not?",
      "Who pays when the policy is too crude for the real world?",
      "How does someone contest the system’s decision without insider knowledge?",
    ],
    relatedDisciplines: [
      "civic-design",
      "service-design",
      "trust-and-safety-experience-design",
      "systemic-intervention-design",
    ],
    frameworks: ["responsible-ai", "participatory-design", "systems-thinking"],
  },
  {
    slug: "inclusive-product-design",
    title: "Inclusive Product Design",
    aliases: ["Accessible Product Design", "Equitable Product Design"],
    metaDomain: "Systems & Institutions",
    maturity: "Established",
    summary:
      "Designing products and services that remain usable, dignified, and intelligible across ability, language, literacy, context, and power.",
    thesis:
      "Inclusive product design is not compliance polish at the end. It is the discipline of designing for real human variance from the start, especially where exclusion is produced by assumptions about bodies, bandwidth, literacy, risk, language, or social circumstance.",
    impactScales: ["Product", "Service", "Institution"],
    interfaces: ["Interfaces", "Content", "Support paths"],
    whatDesignersDo: [
      "Design flows that work under different cognitive, physical, linguistic, and contextual conditions.",
      "Reduce hidden assumptions about ideal users, devices, environments, and confidence levels.",
      "Build recourse and support into the experience instead of expecting perfect self-service.",
      "Treat inclusion as a quality bar that changes structure, not just wording.",
    ],
    whenItMatters: [
      "When exclusion risk is amplified by automation, self-service, or opaque systems.",
      "When a product claims broad reach but still depends on insider knowledge to use well.",
      "When quality must be judged across a wider range of real-life contexts and constraints.",
    ],
    watchouts: [
      "Reducing inclusion to a checklist of interface fixes after core decisions are already frozen.",
      "Treating accessibility as separate from service design, content design, and product strategy.",
      "Assuming the most visible accessibility issues are the only meaningful exclusion problems.",
    ],
    signatureQuestions: [
      "Who is this experience quietly excluding right now?",
      "What does competence look like for someone with less slack, less certainty, or fewer resources?",
      "Which part of the flow assumes a user the team never explicitly chose?",
    ],
    relatedDisciplines: [
      "service-design",
      "civic-design",
      "design-research",
      "trust-and-safety-experience-design",
    ],
    frameworks: ["human-factors", "participatory-design", "behavioural-design"],
  },
  {
    slug: "brand-and-meaning-systems",
    title: "Brand & Meaning Systems",
    aliases: ["Brand Systems", "Meaning Design"],
    metaDomain: "Communication & Narrative",
    maturity: "Established",
    summary:
      "Designing the symbolic, linguistic, and behavioral systems that make an organization legible and distinct over time.",
    thesis:
      "Brand and meaning systems are not just visual identity. They are the patterns by which an organization becomes intelligible to itself and to others. In a world of synthetic content and rapid imitation, the real work is designing coherence, recognizability, and believable behavior across every surface.",
    impactScales: ["Product", "Organization", "Public"],
    interfaces: ["Language", "Identity", "Behavioral cues"],
    whatDesignersDo: [
      "Shape the visual, verbal, and behavioral rules that create coherence across many outputs.",
      "Turn values and positioning into repeatable decisions rather than abstract brand decks.",
      "Design systems that hold distinction under scale, automation, and content volume.",
      "Connect brand to lived experience so meaning is reinforced through action, not just assets.",
    ],
    whenItMatters: [
      "When generative production makes sameness the default.",
      "When organizations are speaking in many channels with inconsistent tone or intent.",
      "When design needs to translate strategy into a public pattern people can recognize and trust.",
    ],
    watchouts: [
      "Treating identity as surface styling disconnected from actual behavior.",
      "Confusing novelty with distinctiveness.",
      "Using generative tools to increase output while eroding recognizability and point of view.",
    ],
    signatureQuestions: [
      "What stays recognizably ours when production scales tenfold?",
      "How does this system communicate meaning before someone reads the explanation?",
      "Which behaviors are reinforcing the brand, and which are contradicting it?",
    ],
    relatedDisciplines: [
      "synthetic-media-direction",
      "information-design-and-visualization",
      "service-design",
      "knowledge-system-design",
    ],
    frameworks: ["futures-thinking", "systems-thinking", "change-architecture"],
  },
  {
    slug: "embodied-interaction-design",
    title: "Embodied Interaction Design",
    aliases: ["Embodied UX", "Physical-Digital Interaction Design"],
    metaDomain: "Spatial & Embodied Experience",
    maturity: "Emerging",
    summary:
      "Designing interactions shaped by posture, gesture, movement, touch, and physical context rather than screen logic alone.",
    thesis:
      "Embodied interaction design treats the body as part of the interface, not as a passive delivery surface. It asks how movement, attention, effort, comfort, and space alter what makes an interaction intuitive, fatiguing, cooperative, or safe.",
    impactScales: ["Product", "Space", "Service"],
    interfaces: ["Gestures", "Motion", "Physical-digital feedback"],
    whatDesignersDo: [
      "Design interaction patterns around bodily cost, posture, and attention shifts.",
      "Shape feedback that can be understood through movement, spatial orientation, and multisensory cues.",
      "Test how environments and social contexts change what feels natural or disruptive.",
      "Translate abstract digital states into embodied signals people can act on quickly.",
    ],
    whenItMatters: [
      "When the body is doing meaningful work in the interaction.",
      "When screen-based assumptions break down under motion, shared space, or physical constraint.",
      "When spatial or physical context is part of the value proposition, not just the setting.",
    ],
    watchouts: [
      "Porting screen conventions into embodied contexts without rethinking effort and attention.",
      "Designing for novelty instead of comfort and sustained use.",
      "Ignoring how social context changes what counts as acceptable gesture or feedback.",
    ],
    signatureQuestions: [
      "What is the body being asked to do here, and at what cost?",
      "How does the environment change the usability of this interaction?",
      "What feedback is needed when the user cannot stare at a screen?",
    ],
    relatedDisciplines: [
      "spatial-computing-design",
      "human-ai-collaboration-design",
      "service-design",
      "inclusive-product-design",
    ],
    frameworks: ["human-factors", "systems-thinking", "behavioural-design"],
  },
  {
    slug: "transition-design",
    title: "Transition Design",
    aliases: ["Systems Transition Design", "Design for Transition"],
    metaDomain: "Material & Planetary Futures",
    maturity: "Emerging",
    summary:
      "Designing long-horizon shifts from extractive, brittle systems toward more repairable, regenerative, and equitable ones.",
    thesis:
      "Transition design works at the scale of change pathways. It asks how products, services, policies, infrastructures, and practices can move from one regime to another without pretending the transition will be tidy, linear, or politically neutral.",
    impactScales: ["Organization", "Territory", "Policy"],
    interfaces: ["Roadmaps", "Programs", "Public systems"],
    whatDesignersDo: [
      "Map current-state lock-ins and identify realistic pathways toward different futures.",
      "Design interim states, not just end-state ideals.",
      "Coordinate policy, service, material, and behavioral changes so transition can actually happen.",
      "Make long-horizon shifts tangible enough for institutions to commit to them.",
    ],
    whenItMatters: [
      "When the current system is clearly unsustainable but cannot be replaced overnight.",
      "When multiple actors must change in sequence for a better future to become real.",
      "When design must help institutions move, not just imagine.",
    ],
    watchouts: [
      "Designing visionary futures with no adoption path.",
      "Ignoring who bears transition costs in the short term.",
      "Using transformation language while leaving old incentives untouched.",
    ],
    signatureQuestions: [
      "What has to change first, and what cannot change until later?",
      "Who is carrying the cost of the transition while the future is still incomplete?",
      "What does a credible next state look like, not just an inspiring final state?",
    ],
    relatedDisciplines: [
      "regenerative-material-design",
      "systemic-intervention-design",
      "policy-design",
      "civic-design",
    ],
    frameworks: ["regenerative-design", "futures-thinking", "change-architecture"],
  },
];

export const additionalGuides = [
  {
    slug: "designing-human-handoffs-in-agentic-systems",
    title: "Designing Human Handoffs in Agentic Systems",
    dek: "If the agent can act, the handoff is the product. Here is how to make human intervention timely, legible, and useful instead of ceremonial.",
    published: "2026-02-24",
    readingTime: "9 min read",
    theme: "Handoffs",
    sections: [
      {
        title: "Why handoffs are where the truth lives",
        paragraphs: [
          "Most agent demos make handoffs look like a fallback. In production they are where the real quality of the system becomes visible. A handoff reveals whether the agent understood the boundary of its authority, whether it preserved enough context for a person to help, and whether the organization actually designed for ambiguity instead of pretending it would not happen.",
          "Bad handoffs create a special kind of waste. They interrupt the human too late, transfer too little context, and quietly convert automation into downstream cleanup labor. That is why a handoff is never just a UI event. It is a contract between automation, human judgment, and the institution that will absorb the consequences.",
        ],
      },
      {
        title: "Design the threshold, not only the button",
        paragraphs: [
          "The hardest part is rarely the visible control that says escalate. The hard part is deciding which signals should trigger intervention, which should trigger clarification, and which should be tolerated as noise. Thresholds should be tied to stakes, reversibility, and uncertainty, not to a generic anxiety about letting the system act.",
          "A useful rule of thumb is to escalate whenever the system is missing context that a reasonable human would recognize as decision-shaping, whenever actions are hard to reverse, or whenever the social cost of a wrong move is materially larger than the time saved by proceeding.",
        ],
      },
      {
        title: "Give the human leverage, not just visibility",
        paragraphs: [
          "When a person takes over, they need more than a log. They need leverage. That means seeing the agent’s intent, assumptions, tool results, outstanding uncertainties, and the exact point where confidence or permission ran out. Without that, the handoff becomes an archaeological dig through machine behavior.",
          "Good handoffs reduce restart cost. They help a person understand what happened, decide quickly, and either complete, redirect, or halt the work without reconstructing the whole situation from scratch.",
        ],
      },
    ],
    takeaways: [
      "Escalation quality depends on thresholds, not just interface placement.",
      "A handoff should preserve intent, state, evidence, and uncertainty.",
      "If a human has to restart from zero, the handoff failed even if the UI looked clean.",
    ],
    relatedDisciplines: [
      "agentic-design",
      "human-ai-collaboration-design",
      "service-design",
      "evaluation-design-for-ai-systems",
    ],
    frameworks: ["human-factors", "responsible-ai", "change-architecture"],
  },
  {
    slug: "how-to-build-a-knowledge-system-that-doesnt-decay",
    title: "How to Build a Knowledge System That Doesn’t Decay",
    dek: "The problem is rarely too little information. It is stale structure, weak ownership, and retrieval paths designed for storage instead of decision-making.",
    published: "2026-02-20",
    readingTime: "10 min read",
    theme: "Knowledge",
    sections: [
      {
        title: "Start from the retrieval moment",
        paragraphs: [
          "Teams often build knowledge systems as if storage were the core problem. It almost never is. The real problem is retrieval under pressure. Someone needs to make a decision, explain a rule, inherit a project, or understand a past trade-off, and the system does not make the right layer of knowledge easy to find or trust.",
          "That means the design should begin with the moment of need: what question is someone asking, what level of confidence do they need, and what kind of evidence would make the answer actionable enough to use?",
        ],
      },
      {
        title: "Structure is not bureaucracy",
        paragraphs: [
          "Unstructured documentation feels fast until the cost of ambiguity compounds. Tags, ownership, recency signals, canonical pages, and decision records are not administrative ornaments. They are what make knowledge usable as the organization speeds up and changes shape.",
          "A useful knowledge system makes it obvious what is current, what is historical, what is opinion, what is policy, and what is still under active revision. Without those distinctions, search becomes a machine for retrieving confusion at scale.",
        ],
      },
      {
        title: "Design the maintenance loop",
        paragraphs: [
          "Knowledge systems decay because nobody owns the afterlife of information. Pages are created with enthusiasm and abandoned with silence. A better design includes update prompts, review cadences, archival rules, and visible ownership so maintenance is part of the system, not an act of personal virtue.",
          "If AI sits on top of the knowledge base, maintenance matters even more. The model will happily synthesize outdated, contradictory, or misleading material unless the system exposes confidence, recency, and canonical sources clearly enough to resist that failure mode.",
        ],
      },
    ],
    takeaways: [
      "Design around retrieval and decision support, not storage volume.",
      "Differentiate current guidance, history, opinion, and policy explicitly.",
      "Ownership and update loops are product features in a knowledge system.",
    ],
    relatedDisciplines: [
      "knowledge-system-design",
      "design-research",
      "information-design-and-visualization",
      "design-operations-and-workflow-systems",
    ],
    frameworks: ["systems-thinking", "socio-technical-systems-modelling", "change-architecture"],
  },
  {
    slug: "policy-thinking-for-product-designers",
    title: "Policy Thinking for Product Designers",
    dek: "The moment a product sets thresholds, exceptions, or consequences, it is already doing policy work. Designers need the literacy to see it.",
    published: "2026-02-16",
    readingTime: "8 min read",
    theme: "Policy",
    sections: [
      {
        title: "Products already make policy-like choices",
        paragraphs: [
          "Designers do not need to work in government to be shaping policy. Thresholds, defaults, fraud checks, moderation rules, ranking systems, eligibility flows, and escalation logic all determine what people can do, what evidence they must provide, and what happens when they fall outside the expected path.",
          "Once you see it this way, a large part of product design stops being neutral. It becomes a form of rule design with material consequences for people and organizations.",
        ],
      },
      {
        title: "The user journey is not enough",
        paragraphs: [
          "Traditional product framing often asks what the user is trying to do. Policy thinking adds another layer: what the system is trying to protect, optimize, or prevent, and who bears the cost of those choices. A clean flow can still encode a crude or unjust rule.",
          "That is why policy literacy helps product teams. It forces the conversation toward legitimacy, recourse, evidence, and edge cases rather than stopping at convenience and completion rates.",
        ],
      },
      {
        title: "Design for recourse, not just decision",
        paragraphs: [
          "A mature system does not only make decisions. It supports contestation. People need to understand what happened, what evidence matters, and what path exists when the system got it wrong. Recourse is not an afterthought. It is part of what makes a rule system trustworthy enough to live inside.",
          "If the product cannot explain itself and cannot be challenged, it may still be efficient, but it is unlikely to remain legitimate for long.",
        ],
      },
    ],
    takeaways: [
      "Thresholds and defaults are policy choices even when they appear inside product flows.",
      "Legitimacy depends on explanation, proportionality, and recourse.",
      "Product teams need policy literacy before agentic systems raise the stakes further.",
    ],
    relatedDisciplines: [
      "policy-design",
      "civic-design",
      "service-design",
      "trust-and-safety-experience-design",
    ],
    frameworks: ["responsible-ai", "participatory-design", "systems-thinking"],
  },
];

export const additionalSignals = [
  {
    slug: "trust-is-moving-from-accuracy-to-recoverability",
    title: "Trust is moving from accuracy to recoverability",
    kicker: "Shift",
    summary:
      "Users increasingly judge AI products by how well they recover from mistakes, not just by how often they avoid them.",
    published: "2026-02-25",
    sections: [
      {
        title: "What changed",
        paragraphs: [
          "As AI systems enter repeated, real workflows, people stop expecting perfection and start demanding intelligible recovery. They want reset paths, provenance, escalation, and evidence that the system can be corrected without institutional drama.",
        ],
      },
      {
        title: "Why it matters",
        paragraphs: [
          "Trust is becoming architectural rather than cosmetic. Products that make repair easy can survive occasional error. Products that hide state and trap users will lose trust even if average accuracy is high.",
        ],
      },
      {
        title: "Question to carry",
        paragraphs: [
          "If your system is wrong at the worst possible moment, what does a competent recovery look like?",
        ],
      },
    ],
    relatedDisciplines: [
      "ai-experience-design",
      "trust-and-safety-experience-design",
      "human-ai-collaboration-design",
    ],
  },
  {
    slug: "policy-design-is-entering-product-teams",
    title: "Policy design is entering product teams",
    kicker: "Pressure",
    summary:
      "Thresholds, appeals, moderation logic, and agent permissions are pushing product teams into policy territory whether they name it or not.",
    published: "2026-02-23",
    sections: [
      {
        title: "What changed",
        paragraphs: [
          "As products mediate more consequential decisions, product behavior starts encoding rule systems. Teams are discovering that governance cannot stay in a separate memo while software decides how the rule is actually lived.",
        ],
      },
      {
        title: "Why it matters",
        paragraphs: [
          "Designers need policy literacy to make these systems legible, contestable, and operationally coherent. Otherwise product design becomes the quiet enforcement arm of decisions nobody fully designed.",
        ],
      },
      {
        title: "Question to carry",
        paragraphs: [
          "What rule is your product already enforcing in practice, even if nobody owns it in theory?",
        ],
      },
    ],
    relatedDisciplines: ["policy-design", "civic-design", "service-design"],
  },
  {
    slug: "knowledge-without-structure-is-becoming-expensive",
    title: "Knowledge without structure is becoming expensive",
    kicker: "Pattern",
    summary:
      "Teams are learning that AI over messy documentation does not solve institutional memory. It scales inconsistency unless the structure improves too.",
    published: "2026-02-21",
    sections: [
      {
        title: "What changed",
        paragraphs: [
          "Search, summarization, and retrieval systems are making bad knowledge architecture more visible, not less. Weak ownership, stale pages, and contradictory guidance now create operational drag faster because systems can surface and spread that confusion at speed.",
        ],
      },
      {
        title: "Why it matters",
        paragraphs: [
          "Knowledge design is becoming a product and operations concern. The institution that structures its memory well will move faster than the one that merely adds AI over a document graveyard.",
        ],
      },
      {
        title: "Question to carry",
        paragraphs: [
          "What would your system retrieve today that is still available but no longer trustworthy?",
        ],
      },
    ],
    relatedDisciplines: [
      "knowledge-system-design",
      "design-operations-and-workflow-systems",
      "design-research",
    ],
  },
  {
    slug: "design-ops-is-becoming-a-governance-function",
    title: "Design ops is becoming a governance function",
    kicker: "Signal",
    summary:
      "As output scales through AI and distributed teams, design ops is shifting from coordination support to quality governance.",
    published: "2026-02-19",
    sections: [
      {
        title: "What changed",
        paragraphs: [
          "More teams can produce more work than ever. The bottleneck is increasingly review, consistency, decision traceability, and cross-functional alignment. That pushes design operations toward standards, escalation, and policy-like stewardship.",
        ],
      },
      {
        title: "Why it matters",
        paragraphs: [
          "The value of design ops now lives less in keeping the calendar running and more in creating the operating system for trustworthy design quality at scale.",
        ],
      },
      {
        title: "Question to carry",
        paragraphs: [
          "What part of your quality standard still depends on one exhausted expert noticing the problem in time?",
        ],
      },
    ],
    relatedDisciplines: [
      "design-operations-and-workflow-systems",
      "organizational-design",
      "knowledge-system-design",
    ],
  },
  {
    slug: "inclusive-design-is-shifting-from-compliance-to-core-quality",
    title: "Inclusive design is shifting from compliance to core quality",
    kicker: "Shift",
    summary:
      "Teams are starting to see exclusion less as a legal edge case and more as a sign of weak product quality and weak institutional imagination.",
    published: "2026-02-17",
    sections: [
      {
        title: "What changed",
        paragraphs: [
          "As services become more automated and self-service becomes the norm, exclusion costs become easier to see. A product that works only for confident, well-resourced users is increasingly understood as a structurally weak product, not merely an unfinished one.",
        ],
      },
      {
        title: "Why it matters",
        paragraphs: [
          "Inclusive design is moving into the center of quality conversations. It now shapes trust, support burden, adoption, and legitimacy, not only accessibility checklists.",
        ],
      },
      {
        title: "Question to carry",
        paragraphs: [
          "What if the people struggling most with your system are actually showing you where quality is weakest?",
        ],
      },
    ],
    relatedDisciplines: [
      "inclusive-product-design",
      "civic-design",
      "service-design",
      "design-research",
    ],
  },
];
