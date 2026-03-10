export const atlasVoice = {
  "ai-experience-design": {
    preview:
      "AI experience design is the craft of turning a model's guesses into a collaboration a human can actually trust.",
    question: "What does AI experience design mean beyond putting a chatbot on the screen?",
    answer:
      "It means designing the contract between a human and a probabilistic system: what it can infer, what it remembers, how it shows uncertainty, and when it must hand control back.",
    opinion:
      "My view: most so-called AI UX is still interface styling. The hard part is not the prompt box. It is memory, confidence, provenance, and recovery. If you skip those, you did not design an AI experience. You themed one.",
    mechanism:
      "A person brings intent. The model turns context into guesses. The product then decides which guesses to show, which to hide, which to label as uncertain, and which to route into action. That translation layer is the real design work.",
    example:
      "Imagine a research assistant that drafts interview summaries. If it cannot show which notes it used, what it inferred, and how to correct the memory for next time, it saves ten minutes while creating a week of quiet doubt.",
    schema: ["Intent", "Context", "Guess", "Human check", "Action"],
  },
  "agentic-design": {
    preview:
      "Agentic design is behavior architecture for software that can choose steps, use tools, and act in the world.",
    question: "When does a smart feature become an agent?",
    answer:
      "The moment the system can choose steps for itself, hold state across time, or take action without asking every single time, you are no longer designing a feature. You are designing an actor.",
    opinion:
      "My contrarian take: agent design is not mainly about personality. It is about permission. Teams obsess over tone of voice because it is easier than deciding what the system is allowed to do when the context gets messy.",
    mechanism:
      "An agent receives a goal, turns it into a plan, calls tools, checks conditions, and either acts or escalates. Every stage needs boundaries. Otherwise the product slowly turns into a polite improviser with production access.",
    example:
      "Take an expense agent that can file reimbursements. If it can classify receipts, request missing data, and submit claims, the real design question is not whether its copy sounds friendly. It is whether it knows when a dubious receipt needs a human, not a guess.",
    schema: ["Goal", "Plan", "Tool use", "Check", "Act or escalate"],
  },
  "evaluation-design-for-ai-systems": {
    preview:
      "Evaluation design turns 'this feels good' into a quality system that can survive real use.",
    question: "How do I know an AI feature is actually good enough to ship?",
    answer:
      "You do not know from vibe, benchmark, or demo fluency. You know when you have defined the tasks that matter, the failures that matter, and the evidence that should block release.",
    opinion:
      "My view: evaluation is not QA at the end. It is product design in disguise. If your team cannot describe what a bad answer costs, you are not ready to call the output good.",
    mechanism:
      "Start with real tasks, not abstract capability. Break them into scenarios. Define failure types. Weight them by consequence. Then build review loops and telemetry so quality can improve after launch instead of becoming a monthly argument.",
    example:
      "A support copilot that drafts replies may score well overall while still fabricating refund policy in only 4 percent of cases. If those 4 percent create chargebacks and angry customers, the average score is trivia.",
    schema: ["Task", "Failure type", "Severity", "Review", "Release gate"],
  },
  "systemic-intervention-design": {
    preview:
      "Systemic intervention design is what you need when the problem is not one screen but a repeating pattern.",
    question: "How do I design when the problem is clearly bigger than the interface?",
    answer:
      "You stop asking only what artifact to make and start asking what pattern needs to change, who sustains it, and where a small intervention could shift the larger behavior.",
    opinion:
      "My view: many systems maps are beautifully arranged procrastination. If the map does not change where you intervene, it is wall art with arrows.",
    mechanism:
      "First define the system boundary. Then find the feedback loops, incentives, delays, and chokepoints. Then test where a change in policy, ritual, information flow, or ownership could move the pattern without pretending one workshop will heal an institution.",
    example:
      "If missed hospital appointments keep rising, the problem may not be reminders. It may be transport, scheduling rules, language barriers, and punitive rebooking policy. The intervention is in the system, not the notification template.",
    schema: ["Pattern", "Forces", "Leverage point", "Intervention", "Monitor effects"],
  },
  "service-design": {
    preview:
      "Service design is the work of making a promise survive contact with operations, policy, and real human stress.",
    question: "What is service design if everyone already has a journey map?",
    answer:
      "It is the discipline of aligning what the user is promised with what the organization can actually deliver across channels, handoffs, waiting states, and exceptions.",
    opinion:
      "My take: most journey maps are polite fan fiction about the happy path. The real service reveals itself in the transfer, the delay, the policy exception, and the sentence 'someone will get back to you.'",
    mechanism:
      "Map the frontstage moments, but then follow them backstage. Who owns the next step? Which rule applies? What queue creates delay? Where does context get lost? Service design is where those backstage mechanics are redesigned, not merely documented.",
    example:
      "A bank can build a lovely app for card replacement. If fraud review, mailing logistics, and contact center scripts are misaligned, the experience still feels broken. The interface did not fail alone. The service did.",
    schema: ["Promise", "Handoff", "Rule", "Exception", "Resolution"],
  },
  "organizational-design": {
    preview:
      "Organizational design is the craft of making good decisions repeatable inside a real institution.",
    question: "Can design improve the company itself, not just its products?",
    answer:
      "Yes. The company is also a designed system: roles, decision rights, rituals, incentives, and interfaces between teams all shape what the organization can notice and do.",
    opinion:
      "My view: many org problems are not culture problems. They are structure problems wearing a culture costume because that sounds less confrontational in a meeting.",
    mechanism:
      "Look at where decisions stall, where responsibilities overlap, where incentives fight each other, and where people depend on heroic coordination. Then redesign the operating logic, not just the slide deck about values.",
    example:
      "If product, legal, and operations all believe they can veto an AI launch but none owns the release decision, the product will oscillate between paralysis and rash shipping. That is not bad teamwork. That is bad organizational design.",
    schema: ["Role", "Decision right", "Ritual", "Interface", "Outcome"],
  },
  "design-research": {
    preview:
      "Design research is useful when it changes a real decision, not when it merely produces an elegant synthesis deck.",
    question: "What is design research actually for?",
    answer:
      "It is for reducing uncertainty around a decision. Good research helps a team choose what to build, what to stop assuming, and what risk deserves attention now.",
    opinion:
      "My contrarian view: research that arrives after the roadmap is fixed is often theater with transcripts. Insight is not valuable because it is interesting. It is valuable because it changes what the team does next.",
    mechanism:
      "Start from the decision. Then gather the minimum set of evidence needed to sharpen it: behavioral evidence, contextual evidence, and the reasons people make the trade-offs they do. Synthesis should reveal what matters, not merely what was said most recently.",
    example:
      "If a team wants to automate onboarding, research is not there to produce another persona. It is there to show where trust breaks, which documents create anxiety, and which 'simple' steps actually require expert reassurance.",
    schema: ["Decision", "Evidence", "Pattern", "Trade-off", "Change"],
  },
  "information-design-and-visualization": {
    preview:
      "Information design is the craft of helping people understand a complex thing without flattening it into nonsense.",
    question: "How do I explain complexity without lying about it?",
    answer:
      "You decide what judgment the reader needs to make, then design the structure, labels, and visual hierarchy around that judgment instead of around decorative clarity.",
    opinion:
      "My view: a prettier chart is not automatically a clearer chart. A dashboard can be immaculate and still leave the reader stupid about what to do next.",
    mechanism:
      "The process is simple to say and hard to do: pick the question, choose the comparison, reveal uncertainty, and label what matters. Good visualization tells the reader where to look and what conclusion is justified, not just what colors to admire.",
    example:
      "A city mobility dashboard might show total rides going up and call it success. A better information design would show where rides are unavailable, which neighborhoods wait longest, and where policy changes improved access instead of just volume.",
    schema: ["Question", "Comparison", "Signal", "Uncertainty", "Decision"],
  },
  "synthetic-media-direction": {
    preview:
      "Synthetic media direction is what turns generative abundance into authored communication instead of an avalanche of lucky accidents.",
    question: "Is prompting the same thing as art direction now?",
    answer:
      "No. Prompting generates options. Direction creates criteria, sequence, coherence, and taste across those options.",
    opinion:
      "My view: prompt luck is the new stock photography. It can get you something plausible quickly. It rarely gets you something owned, coherent, and worth remembering.",
    mechanism:
      "You set references, define constraints, generate broadly, review at system level, reject aggressively, and then refine what actually fits the narrative or brand logic. The machine makes possibilities. The director makes meaning.",
    example:
      "If a campaign needs twenty visuals, the challenge is not making twenty images. It is making twenty images that belong to the same story, follow the same taste, and do not quietly contradict the brand in the fourth asset.",
    schema: ["Reference", "Constraint", "Generate", "Edit", "Sequence"],
  },
  "spatial-computing-design": {
    preview:
      "Spatial computing design matters when space genuinely improves orientation, coordination, or understanding, not when 3D is simply available.",
    question: "When is spatial computing actually useful?",
    answer:
      "It is useful when spatial context reduces effort or increases understanding better than a flat interface could. If it only adds novelty, it is theater with depth.",
    opinion:
      "My view: most spatial demos are still burdening the body to impress the eye. If the posture is awkward and the value is vague, you are not designing the future. You are renting spectacle.",
    mechanism:
      "Start with the task. Ask what benefits from distance, orientation, shared view, or embodied manipulation. Then design comfort, focus shifts, and social acceptability as part of the core experience, not as cleanup after the wow moment.",
    example:
      "A technician repairing industrial equipment may benefit from spatial overlays that anchor instructions to real parts. A reading app floating in your living room probably does not need to exist.",
    schema: ["Task", "Spatial gain", "Embodied cost", "Feedback", "Sustained use"],
  },
  "regenerative-material-design": {
    preview:
      "Regenerative material design asks whether the material system leaves the world stronger, not just slightly less damaged.",
    question: "What makes a material choice regenerative rather than merely less bad?",
    answer:
      "A regenerative choice restores capacity somewhere in the system. It improves repair, renewal, recovery, or ecological health instead of only reducing visible harm at one point in the chain.",
    opinion:
      "My view: recycled content is not a moral personality trait. A product can use recycled material and still depend on extractive logic, disposable use, and impossible repair.",
    mechanism:
      "Follow the material through sourcing, manufacturing, use, maintenance, recovery, and afterlife. Then ask where the design is extending life, enabling repair, supporting stewardship, or restoring ecological conditions. That is the real test.",
    example:
      "A chair made with recycled plastic sounds responsible until you learn it cannot be repaired, mixed materials make recovery difficult, and its shipping model doubles emissions. Regeneration lives in the system, not the brochure.",
    schema: ["Source", "Use", "Maintain", "Recover", "Restore"],
  },
  "civic-design": {
    preview:
      "Civic design is product and service design under the stricter condition of public legitimacy.",
    question: "What makes civic design different from normal product design?",
    answer:
      "In civic design, access, fairness, recourse, and public trust matter as much as efficiency. A fast system that people cannot understand or challenge is not a good civic system. It is an elegant way to erode legitimacy.",
    opinion:
      "My take: too much civic design still borrows startup logic and wonders why citizens hate the result. Public systems are not growth funnels. They are legitimacy machines.",
    mechanism:
      "Design for understandable rules, real-world constraints, edge cases, and public recourse. Work across policy, service delivery, and infrastructure, because a civic interface is only one visible edge of a larger public system.",
    example:
      "A benefits application can be beautifully simplified on screen while still excluding people through evidence rules, language assumptions, and unusable appeal paths. Civic design begins where surface simplification stops.",
    schema: ["Public need", "Rule", "Access", "Recourse", "Trust"],
  },
  "human-ai-collaboration-design": {
    preview:
      "Human-AI collaboration design is about making the machine a useful partner without making the human a passive witness.",
    question: "How do I stop AI from becoming either a toy or an unaccountable coworker?",
    answer:
      "You design the collaboration model explicitly: who leads when, what the system may prepare, what the human must review, and how unfinished work stays understandable across handoffs.",
    opinion:
      "My view: most copilot design is still a productivity fantasy. It celebrates assistance while quietly outsourcing verification, coordination, and blame to the human.",
    mechanism:
      "Break the work into phases. Decide where the machine is fast, where the human is decisive, and where each side needs the other's context. Then design the handoffs, shared memory, and visibility that keep the collaboration sane.",
    example:
      "In a legal drafting tool, the AI can propose clauses quickly. But if the lawyer cannot see which prior documents shaped the draft and where the model is still guessing, the 'collaboration' is just fast uncertainty with a nice interface.",
    schema: ["Shared goal", "Machine prep", "Human judgment", "Revision", "Accountability"],
  },
  "trust-and-safety-experience-design": {
    preview:
      "Trust and safety experience design is the work of making protection usable, proportional, and contestable.",
    question: "How do you design safety without making the product punitive and stupid?",
    answer:
      "You design for the whole harm cycle: prevention, warning, reporting, review, appeal, and recovery. Safety becomes oppressive when the system only knows how to block and never how to explain or repair.",
    opinion:
      "My view: a lot of safety design is still blunt policy wearing UI clothes. That is why users often feel managed rather than protected.",
    mechanism:
      "Decide what harms matter, who is most exposed, what signals can detect them, and what response is proportional. Then make the rules and recourse clear enough that users understand the system instead of fearing its black box.",
    example:
      "If a creator gets flagged by mistake and the appeal flow is opaque, slow, and generic, the trust problem is no longer the policy alone. It is the designed experience of being misjudged by the system.",
    schema: ["Risk", "Signal", "Intervention", "Appeal", "Recovery"],
  },
  "knowledge-system-design": {
    preview:
      "Knowledge system design is how you stop important thinking from dissolving into an expensive pile of searchable confusion.",
    question: "Why do smart teams still lose what they know?",
    answer:
      "Because they store information without designing retrieval, ownership, recency, or trust. Documents accumulate. Usable knowledge does not.",
    opinion:
      "My view: search is not the cure for messy knowledge. Search only helps if the underlying material has enough structure to deserve being found.",
    mechanism:
      "Start from the retrieval moment. What question is someone asking? What confidence do they need? What source should win if two pages disagree? Knowledge design is what makes those answers legible before the organization or the AI guesses wrong.",
    example:
      "A product team asks an internal assistant for the current refund policy and gets three conflicting answers from three old docs. That is not an AI problem. It is a knowledge system design problem wearing an AI hat.",
    schema: ["Question", "Source", "Current truth", "Owner", "Update loop"],
  },
  "design-operations-and-workflow-systems": {
    preview:
      "Design ops is valuable when it protects judgment while making quality easier to repeat.",
    question: "Is design ops just process management with nicer templates?",
    answer:
      "No. At its best, it is the design of the workflow, review system, and memory architecture that lets design quality survive scale.",
    opinion:
      "My contrarian view: many design ops programs optimize neatness instead of quality. A clean process that produces mediocre decisions on time is still mediocre.",
    mechanism:
      "Find where work stalls, where standards live only in senior heads, and where review burden is growing faster than the team can absorb. Then redesign the loops: intake, critique, approval, documentation, and tool use.",
    example:
      "If AI allows a team to produce triple the concepts but critique capacity stays the same, the problem is not abundance. It is the absence of a workflow system that can separate quick exploration from serious review.",
    schema: ["Intake", "Review", "Decision", "Knowledge capture", "Reuse"],
  },
  "policy-design": {
    preview:
      "Policy design is what happens when you stop pretending thresholds and rules inside products are neutral.",
    question: "Why should a product designer care about policy design?",
    answer:
      "Because the moment a product decides eligibility, consequence, ranking, exception, or recourse, it is already doing policy work. Better to admit that early than discover it through user harm later.",
    opinion:
      "My view: product teams often think policy is someone else's department until the day their feature becomes the lived experience of a rule. Then everyone acts surprised by something that was visible from the first threshold.",
    mechanism:
      "Write down the rule. Decide who it affects, what evidence it uses, where it can be contested, and what exception path exists when real life refuses the happy path. Then design the flow around those realities.",
    example:
      "A fraud system that auto-freezes accounts is not only a security feature. It is a policy with immediate consequences for payroll, rent, and trust. The appeal flow is therefore part of the core product, not support residue.",
    schema: ["Rule", "Threshold", "Consequence", "Appeal", "Revision"],
  },
  "inclusive-product-design": {
    preview:
      "Inclusive product design means designing for real human variance before the system punishes people for not being the default user.",
    question: "Is inclusive design just accessibility plus nicer copy?",
    answer:
      "No. It is the practice of designing products that remain usable, dignified, and understandable across different abilities, resources, contexts, languages, and levels of confidence.",
    opinion:
      "My view: when teams say 'edge case,' they are often naming the people whose needs would expose their weakest assumptions most clearly.",
    mechanism:
      "Look for hidden assumptions about literacy, bandwidth, device access, emotional state, institutional knowledge, and available help. Then redesign the flow so it still works when those assumptions weaken or fail.",
    example:
      "A healthcare app may technically pass accessibility checks and still fail a patient who is tired, worried, on a weak mobile signal, and unsure which document counts. Inclusion lives in the full condition of use, not only in color contrast.",
    schema: ["Assumption", "Barrier", "Alternative path", "Support", "Dignity"],
  },
  "brand-and-meaning-systems": {
    preview:
      "Brand and meaning systems are how an organization stays legible when content is cheap and sameness is everywhere.",
    question: "What is branding for now that machines can imitate style in seconds?",
    answer:
      "It is for building a recognizable logic that survives scale: a coherent pattern across language, visuals, behavior, and decisions that still feels like you when production gets fast and noisy.",
    opinion:
      "My view: in the age of generative sameness, the scarce thing is not style. It is judgment. A brand system that cannot survive volume was never a system, only a mood board with a budget.",
    mechanism:
      "Define the meaning you want to communicate, turn that into repeatable choices across words, images, motion, and service behavior, then review outputs against that logic instead of against personal taste alone.",
    example:
      "If an AI content stack can produce fifty campaign variations overnight, the job is no longer making more assets. It is protecting recognizability and intention across those fifty assets so the brand does not dissolve into vaguely expensive noise.",
    schema: ["Meaning", "Rule", "Expression", "Review", "Recognition"],
  },
  "embodied-interaction-design": {
    preview:
      "Embodied interaction design begins when you admit the body is not a peripheral device.",
    question: "What changes when the body is part of the interface?",
    answer:
      "Everything important: effort, posture, comfort, rhythm, social context, and attention. A body in motion does not behave like a cursor on a frictionless screen.",
    opinion:
      "My take: many physical-digital experiences fail because they treat the body as a channel instead of a living constraint. People are not input hardware with feelings. They are the setting.",
    mechanism:
      "Map the movement, the effort, the environment, and what feedback can be sensed without perfect visual focus. Then design the interaction around sustainable motion instead of technical possibility.",
    example:
      "A warehouse picker using a wearable system needs fast, low-ambiguity cues that work while walking, lifting, and glancing. If the interaction assumes stillness and patience, it was designed for a desk in disguise.",
    schema: ["Body", "Context", "Cue", "Action", "Comfort"],
  },
  "transition-design": {
    preview:
      "Transition design is the craft of getting from a broken system to a better one without pretending the bridge builds itself.",
    question: "How do you design a better system when the old one cannot disappear overnight?",
    answer:
      "You design the transition, not only the destination. That means interim states, real incentives, staged capability, and honest attention to who bears the friction of change.",
    opinion:
      "My view: visionary future states are cheap. Credible transitions are hard. That is why most transformation language evaporates on contact with budget cycles, procurement, and daily operations.",
    mechanism:
      "Start by mapping lock-ins and dependencies. Then identify the next state the system can actually inhabit, what must change first, and which supporting policies, services, or tools have to move with it.",
    example:
      "A city cannot transition to low-car mobility by publishing an inspiring rendering. It needs staged street redesign, service changes, political sequencing, public explanation, and proof that daily life improves before the final vision arrives.",
    schema: ["Current lock-in", "Next viable state", "Support shift", "Adoption", "Long-term change"],
  },
};

export const frameworkVoice = {
  "behavioural-design": {
    preview:
      "Behavioural design works when you make the desired action easier in the real world, not when you scold people more elegantly.",
    question: "How do I influence behavior without turning people into lab rats?",
    answer:
      "Focus on the environment around the behavior: defaults, cues, friction, timing, and feedback. Behavior changes more reliably when the conditions change, not when the lecture improves.",
    opinion:
      "My view: many behavioural design projects are just structural avoidance in a clever jacket. If the system is unfair, no amount of nudging makes that intelligent.",
    mechanism:
      "Find the moment where the behavior happens, what makes it hard, what makes the unwanted action easier, and what cue or default could shift the balance. Then test the mechanism, not just the message.",
    example:
      "If medication adherence is weak, a better reminder may help. But if refill rules are confusing and pickup is inconvenient, the real behavioral design move is to redesign the surrounding system, not the notification copy.",
    schema: ["Moment", "Friction", "Cue", "Desired action", "Repeat"],
  },
  "systems-thinking": {
    preview:
      "Systems thinking helps when the problem keeps returning because the pattern, not the event, is doing the damage.",
    question: "What do people actually mean when they say 'think systemically'?",
    answer:
      "They mean stop looking at the event in isolation and look at the relationships, loops, delays, and incentives that keep recreating it.",
    opinion:
      "My view: systems thinking is not valuable because it sounds sophisticated. It is valuable because it prevents expensive stupidity, especially the kind caused by fixing the visible symptom with total confidence.",
    mechanism:
      "Map the parts, but more importantly map the loops. What reinforces the pattern? What delays hide consequences? What local win damages the larger system? Once you can see that, the intervention options change fast.",
    example:
      "A support queue grows, so leadership adds automation. If the automation increases customer confusion and repeat contacts, the queue shrinks briefly and then expands worse. That is a system talking back.",
    schema: ["Event", "Loop", "Delay", "Leverage point", "Second-order effect"],
  },
  "responsible-ai": {
    preview:
      "Responsible AI is how a team proves it deserves to build powerful systems in the first place.",
    question: "Is responsible AI just an ethics checklist?",
    answer:
      "Not if it is real. Real responsible AI means risk decisions, release gates, traceability, recourse, and operational accountability that change what ships and how it is monitored.",
    opinion:
      "My view: if the ethics deck appears after the product direction is already locked, the exercise is usually reputational hygiene, not responsibility.",
    mechanism:
      "Identify who could be harmed, how that harm would happen, and what evidence should block release or trigger review. Then design the governance around the product so responsibility lives in operations, not in a PDF.",
    example:
      "If an AI hiring tool cannot explain how it ranks candidates, cannot be contested, and has weak cohort testing, the problem is not only model quality. The product lacks the accountability structure to be legitimate.",
    schema: ["Risk", "Evidence", "Guardrail", "Release gate", "Recourse"],
  },
  "participatory-design": {
    preview:
      "Participatory design matters when the people who live with the consequences know things the institution keeps failing to notice.",
    question: "When is participatory design more than a workshop with sticky notes?",
    answer:
      "When participants can genuinely shape the framing, criteria, and outcome of the work, not merely react to a nearly finished solution.",
    opinion:
      "My view: many participation exercises are staged too late to matter and too briefly to redistribute anything but patience.",
    mechanism:
      "Bring affected people in early enough to change the problem definition. Design the process so their knowledge carries weight, compensate the work fairly, and show clearly what changed because they participated.",
    example:
      "If residents are invited to comment on a transit redesign after routes and budgets are already fixed, that is not participatory design. It is managed disappointment with facilitation snacks.",
    schema: ["Affected people", "Shared framing", "Co-decision", "Visible change", "Ongoing trust"],
  },
  "human-factors": {
    preview:
      "Human factors asks what the system becomes when humans are tired, busy, interrupted, and gloriously non-ideal.",
    question: "Why do teams reach for human factors only when something becomes safety-critical?",
    answer:
      "Because it exposes a humbling truth: people are not failing in isolation. They are failing inside conditions the system created or tolerated.",
    opinion:
      "My view: the phrase 'user error' often means 'we did not design for reality and would like to blame the person nearest the keyboard.'",
    mechanism:
      "Look at workload, context, attention, fatigue, and recovery from error. Then redesign the system so critical actions are obvious, confusion is trapped early, and the interface does not require superhuman focus to avoid damage.",
    example:
      "An alerting dashboard that fires dozens of equally loud warnings is not helping clinicians monitor better. It is manufacturing fatigue and then acting surprised when the important alert is missed.",
    schema: ["Context", "Load", "Critical cue", "Error trap", "Recovery"],
  },
  "futures-thinking": {
    preview:
      "Futures thinking is useful when the present is a bad monopoly on imagination.",
    question: "How do I use futures thinking without drifting into sci-fi mood boards?",
    answer:
      "Use it to test assumptions, expand options, and make present decisions more robust across several plausible futures. It is not about guessing one correct tomorrow.",
    opinion:
      "My view: futures work becomes decorative the moment it stops changing actual choices. A scenario that does not alter a bet is just stylish weather.",
    mechanism:
      "Identify the assumptions behind today's plan, build plausible alternative conditions, then ask what holds, what breaks, and what signals would tell you which path is strengthening. The point is better present action, not elegant speculation.",
    example:
      "A design team planning enterprise AI tools might test futures where regulation tightens, trust in vendors collapses, or human review becomes legally required. That exercise changes roadmap priorities now, which is the whole point.",
    schema: ["Assumption", "Scenario", "Stress test", "Signal", "Current decision"],
  },
  "socio-technical-systems-modelling": {
    preview:
      "Socio-technical modelling is what you use when the software is only half the system and the hidden half keeps sabotaging the result.",
    question: "What does socio-technical modelling give me that a systems map does not?",
    answer:
      "It forces you to model people, incentives, rules, workarounds, culture, and infrastructure together instead of pretending the technology behaves in a vacuum.",
    opinion:
      "My take: teams love neutral-looking diagrams because politics feels impolite. Unfortunately, the missing politics is usually where the failure lives.",
    mechanism:
      "Trace how the tool interacts with roles, incentives, rules, and shadow practices. Look for where people compensate, where policy collides with workflow, and where the official process differs from the actual one.",
    example:
      "A procurement platform may appear broken because the interface is clumsy. Then you model the system and discover the real delay comes from approval culture, duplicate evidence rules, and informal side channels that the software never acknowledged.",
    schema: ["Tool", "Role", "Rule", "Workaround", "Outcome"],
  },
  "regenerative-design": {
    preview:
      "Regenerative design asks whether the system you are making leaves more capacity behind than it consumes.",
    question: "How is regenerative design different from sustainable design?",
    answer:
      "Sustainable design often aims to reduce harm. Regenerative design asks a harder question: does this system help restore ecological or social health rather than merely slow the damage?",
    opinion:
      "My view: the word regenerative is used far too casually. If nothing in the system is actually restoring capacity, the label is spiritual inflation.",
    mechanism:
      "Map the relationships the design depends on: ecosystems, labor, maintenance, stewardship, repair. Then ask how the intervention could increase resilience, repair, or renewal instead of only reducing visible waste.",
    example:
      "A packaging system that uses less plastic is good. A refill system that reduces waste, supports local maintenance jobs, and cuts extraction dependence is closer to regenerative logic.",
    schema: ["Dependence", "Damage", "Renewal move", "Stewardship", "Long-term health"],
  },
  "change-architecture": {
    preview:
      "Change architecture is the design of how change actually lands once the launch announcement is over.",
    question: "Why do so many good strategies die during rollout?",
    answer:
      "Because rollout is not the same thing as adoption. Change needs sequencing, reinforcement, support, and redesigned incentives, not just a memo and a launch date.",
    opinion:
      "My view: teams keep blaming resistance when the real issue is that the new behavior is under-supported and structurally irrational.",
    mechanism:
      "Ask who must change, what makes that change hard, which rituals and tools carry it forward, and how the organization will know the new behavior is real instead of temporarily performed. Then design the transition, not just the communication.",
    example:
      "A company launches a new AI workflow and wonders why staff keep reverting to old habits. The answer is often simple: the old habits are safer, better rewarded, and easier to explain when something goes wrong.",
    schema: ["Target behavior", "Barrier", "Support", "Reinforcement", "Adoption signal"],
  },
};

export const guideVoice = {
  "designing-an-agent-that-knows-when-to-stop": {
    preview:
      "A good agent is not the one that does the most. It is the one that knows when to hesitate before damage becomes efficiency theater.",
    question: "How do I design an agent that does not confidently run past common sense?",
    answer:
      "Start by designing stopping behavior before success behavior. An agent needs clear boundaries for uncertainty, permission, consequence, and missing context.",
    opinion:
      "My view: teams still reward agent boldness far more than agent restraint. That is why so many demos look magical and so many real workflows feel risky.",
    mechanism:
      "Define what the agent can do, what it may suggest, what requires confirmation, and what should trigger escalation. Then make those states visible to the user instead of burying them in product mythology.",
    example:
      "An internal agent that can schedule meetings and send follow-ups seems harmless until it starts contacting the wrong person based on partial context. That is when the value of graceful hesitation becomes painfully obvious.",
    schema: ["Goal", "Boundary", "Clarify", "Escalate", "Stop cleanly"],
  },
  "trust-gradients-for-probabilistic-products": {
    preview:
      "Trust should rise and fall with stakes. If your product asks for the same trust everywhere, it is asking badly.",
    question: "How do I design trust in a product that is sometimes right, sometimes useful, and sometimes confidently wrong?",
    answer:
      "You design a trust gradient. Low-stakes output can move fast. High-stakes output needs provenance, inspection, and easier reversal.",
    opinion:
      "My view: many AI products still borrow trust from clean visual design. That works right up until the first consequential failure. After that, people judge the architecture, not the polish.",
    mechanism:
      "Classify tasks by consequence and reversibility, then match the interaction to the risk. The more costly the mistake, the more the product should help the user inspect, verify, and recover.",
    example:
      "A writing assistant can autocomplete a sentence with little ceremony. A clinical copilot suggesting next steps should not look equally effortless. The interface should teach the user that the stakes changed.",
    schema: ["Task", "Stakes", "Trust cue", "Verification", "Recovery"],
  },
  "when-not-to-automate": {
    preview:
      "Sometimes the smartest automation move is to stop before you automate bad policy at machine speed.",
    question: "How do I know a workflow should not be automated yet?",
    answer:
      "If the process depends on tacit judgment, unresolved policy, fragile exceptions, or human reassurance, full automation usually hardens the problem before it solves it.",
    opinion:
      "My contrarian take: automation is often used as camouflage for weak process design. Teams call it innovation because 'we have not clarified the underlying decision logic' sounds less exciting on stage.",
    mechanism:
      "Separate the workflow into retrieval, preparation, recommendation, and final judgment. Then automate the parts that reduce drudgery without erasing the human work that still carries context, legitimacy, or accountability.",
    example:
      "A benefits triage system may safely automate document sorting while leaving final eligibility decisions to humans. If you automate the decision before the policy edge cases are understood, you have built speed into the wrong layer.",
    schema: ["Workflow", "Judgment point", "Safe assist", "Unsafe automation", "Review"],
  },
  "the-new-design-stack-beyond-the-screen": {
    preview:
      "The design stack is no longer just interface, visual system, and research. The action has moved into memory, evaluation, orchestration, and governance.",
    question: "If design is no longer mostly about screens, what is it about now?",
    answer:
      "It is about the full system that shapes an outcome: model behavior, data quality, evaluation, workflow, service logic, recourse, and human interpretation. The screen is now one layer among several.",
    opinion:
      "My view: the biggest risk for design teams is not AI replacing them. It is design teams clinging to a smaller job than the moment now requires.",
    mechanism:
      "Map the chain from model to decision. Where is uncertainty introduced? Where is it hidden? Where does human judgment still matter most? That is where design has quietly expanded.",
    example:
      "A support copilot is not only a UI problem. It is a model quality problem, a reviewer workflow problem, a policy problem, a training problem, and a memory problem. That stack is the new design surface.",
    schema: ["Model", "Evaluation", "Workflow", "Interface", "Institutional effect"],
  },
  "how-to-run-a-futures-sprint-with-ai": {
    preview:
      "AI can make a futures sprint faster, but it can also make it emptier unless you force the work toward real choices.",
    question: "How do I run a futures sprint with AI without generating a pile of plausible nonsense?",
    answer:
      "Use AI to widen the option space, not to outsource judgment. The sprint is successful only if it leaves the team with sharper assumptions, better bets, and clearer signals to watch.",
    opinion:
      "My view: scenario abundance is the newest form of strategic procrastination. It feels like progress because the room gets busy. It usually becomes progress only when someone kills three beautiful futures and chooses one move for Monday.",
    mechanism:
      "Generate broadly, cluster patterns, pressure test with domain knowledge, then convert scenarios into decisions: what to do now, what to postpone, what to watch, and what would force a different move later.",
    example:
      "A design team exploring AI education tools can ask the model for five futures quickly. The real work starts when they test which futures would change product scope, regulation risk, or teacher workload in ways the roadmap must respect now.",
    schema: ["Generate", "Cluster", "Stress test", "Decide", "Monitor"],
  },
  "building-a-design-atlas-instead-of-a-content-factory": {
    preview:
      "A feed keeps publishing. An atlas keeps getting more useful.",
    question: "Why build an atlas instead of just publishing more design content?",
    answer:
      "Because chronology is good for freshness and terrible for comprehension. An atlas compounds understanding by connecting ideas, not just timestamping them.",
    opinion:
      "My view: most content operations are memory leaks with branding. They produce volume, lose structure, and wonder why nothing becomes more valuable over time.",
    mechanism:
      "Define the core categories, write pages that can be revisited, and make every guide, signal, and framework strengthen the map instead of floating alone. Structure is what turns publishing into knowledge infrastructure.",
    example:
      "If a signal about agentic systems does not point back to evaluation, service design, and policy design, the reader gets a thought for the week. If it does, the reader gets a growing instrument.",
    schema: ["Taxonomy", "Node", "Connection", "Update", "Compounding value"],
  },
  "designing-human-handoffs-in-agentic-systems": {
    preview:
      "In agentic systems, the handoff is often the product. That is where trust either holds or snaps.",
    question: "What makes a human handoff in an agentic system actually useful?",
    answer:
      "A useful handoff arrives early enough, carries enough context, and gives the human enough leverage to make a real decision rather than clean up a machine's vague mess.",
    opinion:
      "My view: too many handoffs are designed as decoration for governance. They create the feeling of oversight without giving the human the tools to exercise it well.",
    mechanism:
      "Define when a handoff should trigger, what state it must preserve, and what next actions the human should have immediately. If the handoff requires archaeology, it failed.",
    example:
      "A claims agent escalates a medical case to a human reviewer. If the reviewer gets the recommended action, the reason for doubt, the missing evidence, and the relevant policy snippet, the handoff works. If they get a transcript and a shrug, it does not.",
    schema: ["Trigger", "Context packet", "Human judgment", "Decision", "Feedback loop"],
  },
  "how-to-build-a-knowledge-system-that-doesnt-decay": {
    preview:
      "A healthy knowledge system helps people find the right answer quickly and trust why it is the right answer.",
    question: "How do I build a knowledge system that does not turn into a searchable graveyard?",
    answer:
      "Design for retrieval, ownership, recency, and trust. If those are weak, more documents only create more ways to be wrong with confidence.",
    opinion:
      "My view: organizations keep calling this a documentation problem because that sounds manageable. It is usually a design problem about memory, authority, and maintenance.",
    mechanism:
      "Start with the questions people need answered. Then make the system show what is current, who owns it, what changed, and what source should win when documents disagree.",
    example:
      "If a new PM asks 'What is our approval policy for model changes?' and gets five answers from five tools, the failure is not lack of information. It is lack of designed authority.",
    schema: ["Question", "Canonical source", "Owner", "Review cycle", "Reliable retrieval"],
  },
  "policy-thinking-for-product-designers": {
    preview:
      "Product designers need policy thinking because products increasingly behave like institutions, not just tools.",
    question: "What does policy thinking add to product design?",
    answer:
      "It forces you to see thresholds, exceptions, consequences, and recourse as design material. Once a product distributes outcomes, it is no longer just shaping convenience. It is shaping rules.",
    opinion:
      "My view: product teams often want the power of institutional decisions without the humility of institutional design. That combination ages badly.",
    mechanism:
      "Write down the rule the product is enforcing, who it affects, what evidence it uses, and what happens when the rule is wrong. Then design that full reality, not only the cheerful default path.",
    example:
      "A moderation tool that automatically limits account reach is not just a ranking feature. It is a rule system with reputational and economic effects. The appeal flow is therefore part of the product's moral center, not its appendix.",
    schema: ["Rule", "Affected people", "Evidence", "Consequence", "Appeal"],
  },
};

export const signalVoice = {
  "evaluation-is-becoming-the-new-usability": {
    preview:
      "The new design question is not only 'Can people use it?' but 'Can the system's output be trusted, reviewed, and improved at scale?'",
    question: "Why is evaluation suddenly becoming a design topic, not just a model topic?",
    answer:
      "Because users now experience quality through output reliability, reviewer burden, and correction cost. That makes evaluation part of the product, not a hidden engineering ritual.",
    opinion:
      "My view: calling this 'the new usability' is not hype. It is a warning. Teams that still treat output quality as a backend issue will build polished interfaces around unreliable work.",
    mechanism:
      "As systems become probabilistic, the user experience depends on scenario coverage, failure severity, and review design. The team that can define and improve those will out-design the team still admiring its prompt tricks.",
    example:
      "Two AI support tools can look identical. The better one is the one whose bad answers are easier to detect, easier to route, and less likely to repeat next week.",
    schema: ["Task", "Output quality", "Review burden", "Correction", "Improvement loop"],
  },
  "agents-are-turning-service-design-into-policy-design": {
    preview:
      "Once an agent can act in a service, every permission and exception starts behaving like policy.",
    question: "Why do agents push service design into policy territory?",
    answer:
      "Because the moment software can decide, escalate, retry, or deny on behalf of an institution, product logic starts functioning like rule logic. Services become miniature governments very quickly.",
    opinion:
      "My view: teams are underestimating this shift because the interaction still looks friendly. A soft voice does not make the underlying rule any less consequential.",
    mechanism:
      "An agent needs permissions, thresholds, escalation rules, and exception handling. Those are policy instruments, even if they are implemented inside workflow software instead of legislation.",
    example:
      "A customer service agent that can waive fees, deny claims, or escalate complaints is not only optimizing flow. It is encoding fairness, recourse, and institutional posture into software behavior.",
    schema: ["Permission", "Threshold", "Exception", "Escalation", "Institutional effect"],
  },
  "synthetic-media-needs-direction-not-prompt-luck": {
    preview:
      "The scarce skill in synthetic media is rapidly moving from generation to direction.",
    question: "Why is prompt skill no longer the main differentiator in synthetic media?",
    answer:
      "Because generation is getting cheaper and more available. Direction, taste, sequencing, provenance, and coherence are still stubbornly scarce.",
    opinion:
      "My view: prompt luck is having its stock-photo moment. Useful for speed, terrible as a strategy for making work people can actually recognize or trust.",
    mechanism:
      "Once any team can make thousands of images, the value moves upstream and downstream: references before generation, criteria during review, and editorial sequence after generation.",
    example:
      "A brand can generate endless social assets in one afternoon. The question is whether those assets still belong to one system of meaning, or whether they look like twelve different interns hallucinated the strategy.",
    schema: ["Reference", "Generate", "Review", "Sequence", "Owned meaning"],
  },
  "repairability-is-returning-as-a-digital-design-virtue": {
    preview:
      "As systems become more opaque, repairability is becoming a key design virtue again.",
    question: "Why are digital products suddenly being judged by repairability?",
    answer:
      "Because autonomous and stateful systems fail in confusing ways. Users increasingly value products they can inspect, reset, correct, and recover from without begging the system for mercy.",
    opinion:
      "My view: the most trustworthy AI products in a few years will not be the ones that promise perfection. They will be the ones that make imperfection survivable.",
    mechanism:
      "Repairability in digital products means visible state, undo, reset, export, escalation, and comprehensible failure. It keeps competence with the user instead of hoarding it inside the system.",
    example:
      "If a writing assistant quietly rewires tone or memory and gives no way to inspect or reset that behavior, it may feel magical on day one and unusable by week three.",
    schema: ["State", "Failure", "Inspect", "Reset", "Continue"],
  },
  "memory-strategy-is-becoming-a-product-strategy": {
    preview:
      "Memory is no longer a neat feature. It is becoming a core product stance about usefulness, privacy, and lock-in.",
    question: "Why is memory strategy becoming central to product design?",
    answer:
      "Because what a system remembers changes how useful it feels, how invasive it feels, and how dependent the user becomes on staying inside that system.",
    opinion:
      "My view: many teams still talk about memory as personalization candy. It is much closer to governance. Once a product remembers, it is making decisions about continuity, evidence, and control.",
    mechanism:
      "Decide what the system remembers, why it remembers it, how the user can inspect and edit it, and when it should forget. That is the architecture. The delight comes later.",
    example:
      "A research tool that remembers your ongoing themes can be brilliant. The same tool becomes unsettling if it cannot show what it retained or let you correct a mistaken memory before it shapes future work.",
    schema: ["Capture", "Store", "Use", "Inspect", "Forget or revise"],
  },
  "design-teams-need-an-institutional-imagination-again": {
    preview:
      "Design teams are being dragged back toward institutional questions because the products now behave more like institutions than like isolated apps.",
    question: "Why do design teams need institutional imagination again?",
    answer:
      "Because interfaces are increasingly expressing policy, governance, eligibility, and accountability. If designers cannot think institutionally, they end up polishing the face of decisions they never really designed.",
    opinion:
      "My view: the future of strong design work is less aesthetic theater and more structural literacy. That may sound less glamorous. It is also where the actual leverage now lives.",
    mechanism:
      "Watch where product behavior allocates access, consequence, exception, and recourse. Those are institutional functions. Once you see them, the design brief expands immediately.",
    example:
      "A platform deciding which seller gets visibility, which dispute gets escalated, or which user is trusted is doing institutional work whether the team uses that phrase or not.",
    schema: ["Interface", "Rule", "Institutional effect", "Recourse", "Legitimacy"],
  },
  "trust-is-moving-from-accuracy-to-recoverability": {
    preview:
      "People increasingly trust systems that fail repairably more than systems that merely boast high average accuracy.",
    question: "Why is recoverability becoming more important than raw accuracy in trust design?",
    answer:
      "Because users live inside the exceptions. They remember the moment the system got confused and whether it helped them recover, not the benchmark average from a launch slide.",
    opinion:
      "My view: average accuracy is becoming a weak trust metric. A product that is 96 percent right and impossible to repair will lose to a product that is 92 percent right and transparent about failure.",
    mechanism:
      "Trust now depends on whether people can inspect state, correct the system, escalate quickly, and avoid repeated damage after a mistake. Recovery capability is becoming part of product quality itself.",
    example:
      "A financial assistant that occasionally misclassifies expenses can still feel trustworthy if corrections are obvious and persistent. If every correction feels like starting an argument with fog, trust evaporates.",
    schema: ["Error", "Visibility", "Correction", "Persistence", "Recovered trust"],
  },
  "policy-design-is-entering-product-teams": {
    preview:
      "Product teams are quietly becoming rule-makers, whether they asked for the job or not.",
    question: "Why is policy design showing up inside product teams now?",
    answer:
      "Because more products decide eligibility, moderation, permissions, ranking, and consequence at scale. Once that happens, the line between product logic and policy logic gets very thin.",
    opinion:
      "My take: this is not a niche governance trend. It is a category shift. If product teams keep denying it, the policy work will still happen, just badly and in disguise.",
    mechanism:
      "Software decisions crystallize thresholds and exceptions. Those thresholds affect lives, labor, or public trust. That is policy territory, even if the UI still calls it a feature.",
    example:
      "A marketplace deciding when to freeze payouts, rank sellers, or escalate disputes is already making policy. It just happens to do it through settings, dashboards, and support scripts.",
    schema: ["Feature", "Threshold", "Rule effect", "Recourse", "Governance"],
  },
  "knowledge-without-structure-is-becoming-expensive": {
    preview:
      "Messy knowledge used to slow teams down quietly. AI is making the cost loud.",
    question: "Why is weak knowledge structure becoming a bigger problem now?",
    answer:
      "Because retrieval systems can now surface bad structure at speed. Instead of one person being confused, the confusion becomes scalable and authoritative-looking.",
    opinion:
      "My view: many AI knowledge products are currently functioning as confusion amplifiers with excellent search bars.",
    mechanism:
      "When structure is weak, outdated pages, conflicting guidance, and unlabeled authority all become retrievable. AI does not fix that. It simply adds fluency to the retrieval of the wrong thing.",
    example:
      "If an internal assistant answers from three stale policy pages and gives the user one smooth response, the interface feels helpful while the institution quietly becomes more wrong.",
    schema: ["Messy source", "Retrieval", "False confidence", "Decision risk", "Need for structure"],
  },
  "design-ops-is-becoming-a-governance-function": {
    preview:
      "As output scales, design ops is shifting from coordination support to quality governance.",
    question: "Why is design ops starting to look more like governance?",
    answer:
      "Because the bottleneck has moved. Teams can now produce more work than they can responsibly review, align, and remember. Someone has to design the quality system around that reality.",
    opinion:
      "My view: the phrase design ops still undersells the job. In AI-heavy teams, this work increasingly shapes standards, escalation, and institutional memory, not just rituals and resourcing.",
    mechanism:
      "More output creates more review pressure. More tools create more inconsistency. Governance emerges wherever a team needs to decide what counts as ready, who can approve it, and how quality gets stored instead of merely felt.",
    example:
      "If a team can generate campaign variants in minutes but lacks a crisp approval model, the real work is no longer production. It is governance wearing a creative badge.",
    schema: ["Output surge", "Review pressure", "Standard", "Approval", "Memory"],
  },
  "inclusive-design-is-shifting-from-compliance-to-core-quality": {
    preview:
      "Inclusive design is moving to the center because exclusion is increasingly revealing the weakest part of the whole system.",
    question: "Why is inclusive design becoming a core quality issue instead of a specialist concern?",
    answer:
      "Because automated, self-service, and AI-mediated systems fail hardest on the people with the least slack. Those failures are not side issues. They expose where the product's quality is structurally weakest.",
    opinion:
      "My view: when a team treats inclusion as a downstream audit, it usually means the core design assumptions are still embarrassingly narrow.",
    mechanism:
      "A system that assumes fluent language, stable attention, good bandwidth, and confidence under pressure will exclude people by design. Inclusive work widens the conditions under which competence is possible.",
    example:
      "A benefits portal may technically function, but if a user under stress cannot understand what evidence counts or what happens after a denial, the system is not merely inaccessible. It is low quality at its core.",
    schema: ["Assumption", "Exclusion point", "Alternative path", "Support", "Broader competence"],
  },
};

export function getAtlasVoice(slug) {
  return atlasVoice[slug];
}

export function getFrameworkVoice(slug) {
  return frameworkVoice[slug];
}

export function getGuideVoice(slug) {
  return guideVoice[slug];
}

export function getSignalVoice(slug) {
  return signalVoice[slug];
}
