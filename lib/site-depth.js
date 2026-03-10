import {
  additionalDisciplineDepth,
  additionalGuideDepth,
  additionalSignalDepth,
} from "./site-depth-expansion.js";

export const disciplineDepth = {
  "ai-experience-design": {
    operatingReality:
      "AI experience design is the discipline of shaping collaboration with systems that are probabilistic, stateful, and sometimes partially autonomous. The real work is not styling a prompt box. It is deciding what the system may infer, what it may remember, when it must ask, how it shows provenance, and how people recover when the model is wrong in a confident voice.",
    decisionMoves: [
      "Draw the boundary between user judgment, model suggestion, and automated action before you design the interaction layer.",
      "Design memory, context carry-over, and provenance as first-class experience components, not backend implementation details.",
      "Evaluate usefulness through task completion, calibration, and recovery speed, not just satisfaction with the first answer.",
    ],
    evidenceOfMaturity: [
      "Users can tell what the system knows, what it guessed, and what source or history influenced the output.",
      "People can correct, reset, or override model behavior without feeling trapped inside invisible state.",
      "The team has a clear policy for escalation when the system enters ambiguity, contradiction, or low-confidence territory.",
    ],
    commonMisreadings: [
      "Treating the prompt box as the product instead of the collaboration model around it.",
      "Assuming fluent language automatically creates justified trust.",
      "Optimizing for personalization before the team has designed accountability and recovery.",
    ],
  },
  "agentic-design": {
    operatingReality:
      "Agentic design is less about conversational polish and more about operational choreography. Once an agent can plan, call tools, remember context, and act over time, the design problem becomes one of permissions, checkpoints, stopping rules, observability, and human governance. You are designing a worker, not a widget.",
    decisionMoves: [
      "Define what the agent may decide independently, what requires confirmation, and what must never happen without a human in the loop.",
      "Model the workflow as contracts, handoffs, and checkpoints rather than a single open-ended chat session.",
      "Expose state, intent, tool use, and rationale so people can inspect the work in progress instead of waiting for a final reveal.",
    ],
    evidenceOfMaturity: [
      "The agent asks fewer but better clarification questions because the team has specified scope and context requirements.",
      "Irreversible actions have explicit checkpoints, logs, and review trails that humans can understand quickly.",
      "The team can explain how the agent stops, how it fails safe, and how it recovers from partial completion.",
    ],
    commonMisreadings: [
      "Equating more autonomy with better design regardless of stakes or reversibility.",
      "Assuming agentic systems eliminate the need for service operations, policy, or support design.",
      "Judging the product on demo smoothness rather than on edge cases, interruptions, and messy real tasks.",
    ],
  },
  "evaluation-design-for-ai-systems": {
    operatingReality:
      "Evaluation design turns quality from a vibe into an operating system. In AI products, the product experience is only as good as the task taxonomy, failure severity model, sampling strategy, and review loops behind it. This is where designers help teams decide what 'good enough' means before harm, drift, or embarrassment decides for them.",
    decisionMoves: [
      "Break the experience into task families, failure modes, and risk tiers so evaluation reflects real usage rather than generic benchmark scores.",
      "Combine offline evals, expert review, live telemetry, and user feedback instead of looking for a single master metric.",
      "Define release gates that connect quality thresholds to shipping decisions, not just to dashboards nobody uses.",
    ],
    evidenceOfMaturity: [
      "The team can trace regressions back to scenarios, cohorts, and specific failure patterns instead of saying the model just 'got worse.'",
      "Design, research, policy, and engineering share a language for what counts as unacceptable behavior.",
      "Post-launch feedback feeds directly into updated rubrics, datasets, and test cases.",
    ],
    commonMisreadings: [
      "Treating public benchmarks as a substitute for product-specific evaluation.",
      "Assuming evaluation belongs only to model teams and not to product or design teams.",
      "Using a single aggregate score to hide failures that are rare overall but severe for certain users or tasks.",
    ],
  },
  "systemic-intervention-design": {
    operatingReality:
      "Systemic intervention design operates where outcomes depend on multiple actors, time delays, incentives, and feedback loops. The job is not to admire complexity. It is to find leverage points where a change in policy, ritual, information flow, or infrastructure can shift the behavior of a larger system over time.",
    decisionMoves: [
      "Name the system boundary explicitly so everyone knows what is in scope, what is adjacent, and what is being ignored for now.",
      "Identify leverage points, dependencies, and likely second-order effects before choosing a form factor or artifact.",
      "Prototype adoption paths, governance, and ownership alongside the intervention itself.",
    ],
    evidenceOfMaturity: [
      "Interventions are tied to owners, time horizons, and leading indicators rather than just ambition.",
      "The team monitors side effects and adaptation, not just first-order outputs.",
      "Stakeholders can explain how the intervention changes coordination, incentives, or decision flow in practice.",
    ],
    commonMisreadings: [
      "Treating the systems map as the intervention instead of a diagnostic artifact.",
      "Using complexity as an excuse to avoid concrete commitments or measurement.",
      "Assuming bigger system awareness automatically produces better interventions.",
    ],
  },
  "service-design": {
    operatingReality:
      "Service design shapes experiences that unfold across people, channels, rules, and backstage operations. What matters most is not the beauty of the journey map but whether promises hold when users are stressed, channels switch, exceptions arise, and frontline staff have to act inside real constraints.",
    decisionMoves: [
      "Map the service in terms of promises, handoffs, decision rights, and failure-prone moments, not just steps on a happy path.",
      "Design explicitly for exceptions, escalation, and vulnerable contexts where standard flows break down.",
      "Bring operations, policy, and support into the design process early enough that the experience is actually deliverable.",
    ],
    evidenceOfMaturity: [
      "Frontline staff can explain the service and handle edge cases without inventing workarounds every week.",
      "Handoff failures, repeat contacts, and unresolved cases are decreasing for structural reasons rather than heroic effort.",
      "Users encounter fewer contradictions between channels, policies, and human interactions.",
    ],
    commonMisreadings: [
      "Treating a blueprint as the final deliverable instead of the start of operational redesign.",
      "Thinking service design is only for hospitality, public services, or obvious end-to-end journeys.",
      "Prioritizing consistency so heavily that the service loses the ability to respond intelligently to context.",
    ],
  },
  "organizational-design": {
    operatingReality:
      'Organizational design shapes how institutions think and move. Roles, decision rights, rituals, interfaces between teams, and incentive structures all determine whether strategy becomes coordinated action or theater. Designers here are designing the conditions under which good decisions become repeatable.',
    decisionMoves: [
      "Make decision rights visible so the organization knows who informs, who decides, who executes, and who carries risk.",
      "Design the interfaces between teams with as much care as the teams themselves.",
      "Tune cadences, meetings, and review rituals to the uncertainty of the work instead of inheriting them by habit.",
    ],
    evidenceOfMaturity: [
      "Escalations decrease because responsibilities are clearer, not because people gave up raising issues.",
      "Critical coordination happens through designed mechanisms instead of hallway heroics and private knowledge.",
      "The organization can point to where conflicting incentives live and how they are being managed.",
    ],
    commonMisreadings: [
      "Reducing organizational design to an org chart exercise.",
      "Assuming new roles can compensate for unclear interfaces and poor governance.",
      "Treating culture language as a substitute for structural decisions.",
    ],
  },
  "design-research": {
    operatingReality:
      "Design research earns its keep when it changes a decision. The point is not to collect compelling quotes or produce a polished synthesis deck. It is to reduce uncertainty about behavior, context, needs, and trade-offs in ways that help teams choose what to build, how to ship it, and what to stop believing.",
    decisionMoves: [
      "Frame research around decisions the team must make, not just around broad curiosity.",
      "Combine behavioral, attitudinal, and operational evidence so the team is not fooled by any single lens.",
      "Make uncertainty explicit by showing where evidence is strong, where it is thin, and what assumptions remain load-bearing.",
    ],
    evidenceOfMaturity: [
      "Research outputs change priorities, policies, or design directions instead of merely validating work already chosen.",
      "Teams can distinguish recurring signal from an anecdote that feels persuasive but is not representative.",
      "Research questions are not constantly repeated because the organization has a usable memory of prior learning.",
    ],
    commonMisreadings: [
      "Using research as retrospective justification for predetermined ideas.",
      "Assuming sample size alone determines validity regardless of question quality or context.",
      "Believing interviews can predict future behavior without being paired with behavioral or operational evidence.",
    ],
  },
  "information-design-and-visualization": {
    operatingReality:
      "Information design is the craft of reducing cognitive friction without flattening complexity. Good visualization does not just show data. It helps people compare, orient, notice uncertainty, and decide what deserves attention. The question is always: what task of interpretation is this artifact helping someone perform?",
    decisionMoves: [
      "Decide what comparison, relationship, or judgment the reader must make before selecting a visual form.",
      "Show scale, uncertainty, and annotation deliberately so people are not forced to infer what matters from visual drama alone.",
      "Test comprehension on real questions, not on whether viewers say the graphic looks clear.",
    ],
    evidenceOfMaturity: [
      "People can answer the intended questions faster and with fewer misreads.",
      "The design makes caveats and boundaries visible without burying the signal.",
      "Annotations, labels, and hierarchy support interpretation instead of being decorative residue.",
    ],
    commonMisreadings: [
      "Assuming prettier charts are automatically clearer charts.",
      "Treating dashboards as the default answer to every information problem.",
      "Confusing density with sophistication when the reader actually needs orientation.",
    ],
  },
  "synthetic-media-direction": {
    operatingReality:
      "Synthetic media direction is the emerging discipline of turning generative outputs into authored communication. The real job is less about prompt cleverness and more about reference systems, quality thresholds, editorial sequencing, rights awareness, and maintaining a recognizable point of view across volumes of machine-made possibility.",
    decisionMoves: [
      "Build a reference stack of visual, narrative, and tonal constraints before generating large volumes of assets.",
      "Judge outputs at the sequence or system level, not just asset by asset.",
      "Design review loops that clarify what gets rejected, refined, attributed, or escalated to humans.",
    ],
    evidenceOfMaturity: [
      "Generated work feels directed and coherent across surfaces rather than like a collection of lucky one-offs.",
      "Teams can explain why an asset passed or failed review in terms beyond personal taste.",
      "Provenance, rights, and sourcing decisions are tracked alongside aesthetic decisions.",
    ],
    commonMisreadings: [
      "Mistaking prompt fluency for editorial direction.",
      "Assuming more generations will eventually equal better judgment.",
      "Optimizing for stylistic consistency while neglecting narrative intent and governance.",
    ],
  },
  "spatial-computing-design": {
    operatingReality:
      "Spatial computing design is embodied interaction design under conditions of attention, motion, comfort, and social context. The challenge is not to make everything three-dimensional. It is to decide when spatiality genuinely improves orientation, collaboration, or task performance without exhausting the body or violating social norms.",
    decisionMoves: [
      "Anchor the experience in task value and bodily cost before reaching for spectacle.",
      "Design transitions between physical and digital attention so the experience does not constantly steal the user from their environment.",
      "Test for comfort, orientation, and social acceptability in real contexts rather than lab novelty.",
    ],
    evidenceOfMaturity: [
      "Users can orient themselves quickly without heavy onboarding or constant recentering.",
      "Physical fatigue, discomfort, and cognitive overload remain low during real tasks.",
      "The experience respects shared-space etiquette and makes collaboration legible to other people nearby.",
    ],
    commonMisreadings: [
      "Assuming 3D equals immersion and immersion equals value.",
      "Treating novelty as sufficient justification for friction.",
      "Porting flat-screen patterns into space without rethinking posture, distance, and shared context.",
    ],
  },
  "regenerative-material-design": {
    operatingReality:
      "Regenerative material design asks not only how products use materials, but how those choices affect extraction, labor, maintenance, recovery, and ecological renewal over time. The point is not merely to do less harm. It is to create material systems that restore capacity, support repair, and remain accountable for where matter comes from and where it goes next.",
    decisionMoves: [
      "Design from the full material lifecycle, including sourcing, use, maintenance, recovery, and afterlife.",
      "Treat repairability, disassembly, and logistics as part of the design brief rather than afterthought constraints.",
      "Measure ecological and social externalities upstream and downstream instead of focusing only on the finished object.",
    ],
    evidenceOfMaturity: [
      "Materials have credible paths for repair, recovery, or reuse that survive contact with real operations.",
      "The design extends useful life through maintenance and service models, not just through marketing claims.",
      "Trade-offs between aesthetics, cost, supply, and ecological impact are visible and deliberate.",
    ],
    commonMisreadings: [
      "Equating recycled content with regenerative practice.",
      "Using sustainability claims to mask unchanged extractive patterns.",
      "Treating premium finish or novelty as justification for avoidable waste.",
    ],
  },
  "civic-design": {
    operatingReality:
      "Civic design works where legitimacy matters as much as efficiency. Public interfaces, services, participation processes, and infrastructures must be understandable, reachable, and fair enough that people can act without insider knowledge. The work is inseparable from rights, recourse, and public trust.",
    decisionMoves: [
      "Design for edge cases and vulnerable contexts first, because civic failure tends to punish those with the least slack.",
      "Make rights, obligations, and recourse visible at the moment people need them, not buried in policy documents.",
      "Bring frontline workers, community groups, and affected publics into the design loop early enough to shape outcomes.",
    ],
    evidenceOfMaturity: [
      "More people can complete tasks without mediation, translation by insiders, or repeated attempts.",
      "Appeals, exception handling, and recourse are understandable and navigable.",
      "Participation changes actual decisions rather than merely validating predetermined plans.",
    ],
    commonMisreadings: [
      "Treating civic design as government forms plus nicer language.",
      "Assuming consultation equals participation or legitimacy.",
      "Optimizing public systems for administrative efficiency while eroding trust and access.",
    ],
  },
  ...additionalDisciplineDepth,
};

export const frameworkDepth = {
  "behavioural-design": {
    practicalUse:
      "Behavioural design is useful when outcomes depend on routines, defaults, feedback loops, and local context rather than on awareness alone. Its value comes from changing the conditions around behavior, not from adding one more persuasive message.",
    diagnosticQuestions: [
      "What friction, capability gap, cue, or incentive is shaping the current behavior?",
      "Which moments are decisive: initiation, repetition, exception handling, or recovery after lapse?",
      "What change in context would matter more than a change in messaging?",
    ],
    evidenceToCollect: [
      "Observed behavioral traces such as drop-off points, completion times, and repeat failure patterns.",
      "Differences between what people say they intend to do and what they actually do in context.",
      "The effects of defaults, reminders, prompts, or incentives on real behavior over time.",
    ],
    whatGoodLooksLike: [
      "Interventions are targeted to specific moments and mechanisms rather than broad motivation language.",
      "The design reduces effort or ambiguity at the critical step instead of asking people to try harder.",
      "The team can show a measurable shift in behavior, not just higher awareness.",
    ],
  },
  "systems-thinking": {
    practicalUse:
      "Systems thinking matters when local optimization is producing larger failures. It helps teams see feedback loops, delays, boundaries, and unintended consequences so they can intervene where the system actually moves rather than where the org chart suggests it should.",
    diagnosticQuestions: [
      "What feedback loops reinforce the current pattern and what delays hide the consequences?",
      "Where is the system boundary set, and who or what disappears because of that choice?",
      "What apparent problem is really an outcome of interactions between multiple subsystems?",
    ],
    evidenceToCollect: [
      "Metrics that show flow over time, not just snapshots at one stage of a process.",
      "Handoff failures, waiting times, exceptions, and adaptation behaviors across actors.",
      "Evidence of incentives or policies that reward one part of the system while damaging another.",
    ],
    whatGoodLooksLike: [
      "The map leads to a real intervention hypothesis rather than remaining an intellectual artifact.",
      "The team can explain likely second-order effects and what it will monitor after intervention.",
      "People stop arguing only about symptoms because the structural drivers are visible.",
    ],
  },
  "responsible-ai": {
    practicalUse:
      "Responsible AI is only useful when it leaves the ethics deck and enters product operations. Its job is to define risk, accountability, review, recourse, and evidence so AI systems can be governed under real business pressure instead of vague principle language.",
    diagnosticQuestions: [
      "Who can be harmed, excluded, or misclassified, and what would that harm actually look like in context?",
      "Which decisions are automated, assisted, or merely informed by the system?",
      "What recourse, human review, or appeal exists when the system fails or someone contests its output?",
    ],
    evidenceToCollect: [
      "Performance and failure data across different cohorts, tasks, and contexts of use.",
      "Audit trails showing prompts, model versions, decision paths, overrides, and human interventions.",
      "Documentation of dataset provenance, evaluation criteria, and release approval decisions.",
    ],
    whatGoodLooksLike: [
      "Risk tiers translate into real review depth, release gates, and monitoring obligations.",
      "Users and staff know when the system is assisting, deciding, or escalating.",
      "Teams can investigate incidents quickly because accountability and evidence were designed in from the start.",
    ],
  },
  "participatory-design": {
    practicalUse:
      "Participatory design is most valuable when the people affected by a system hold knowledge, constraints, and consequences that outsiders routinely miss. Its purpose is not to make stakeholders feel heard. It is to improve the quality and legitimacy of decisions by redistributing how problems are framed and solved.",
    diagnosticQuestions: [
      "Who bears the cost of the system and who is absent from current decision-making?",
      "At what point can participants meaningfully alter priorities, criteria, or trade-offs?",
      "What forms of compensation, access, and continuity are required so participation is not extractive?",
    ],
    evidenceToCollect: [
      "Proof that participants influenced scope, success criteria, or final decisions, not just copy edits.",
      "Records of who took part, who could not, and what barriers shaped participation.",
      "Evidence of ongoing relationship and feedback beyond a one-off workshop.",
    ],
    whatGoodLooksLike: [
      "Participants help define the problem, not just react to preframed solutions.",
      "The work changes institutional understanding as well as product outputs.",
      "The process leaves behind stronger capacity and trust, not only extracted insights.",
    ],
  },
  "human-factors": {
    practicalUse:
      "Human factors becomes essential when safety, cognitive load, fatigue, or time pressure shape outcomes. It treats performance as a property of the whole system, not of individual willpower, and asks how design can prevent error, reduce overload, and support good action under stress.",
    diagnosticQuestions: [
      "Where are people likely to misread, forget, or confuse information under realistic pressure?",
      "What happens when users are tired, interrupted, overloaded, or operating with incomplete context?",
      "Which errors can be prevented, trapped early, or made easier to recover from?",
    ],
    evidenceToCollect: [
      "Task time, error types, near misses, recovery patterns, and workload indicators.",
      "Observed behavior in realistic environments rather than pristine test conditions alone.",
      "Differences between novice and expert performance, including use of workarounds.",
    ],
    whatGoodLooksLike: [
      "Critical actions are strongly cued and low-value complexity is removed.",
      "The system anticipates predictable human mistakes instead of blaming users after the fact.",
      "Performance improves under real conditions, not just in idealized demos.",
    ],
  },
  "futures-thinking": {
    practicalUse:
      "Futures thinking helps teams make decisions when the present is no longer a reliable guide. Its value is not in predicting a single future but in exposing assumptions, surfacing alternative trajectories, and building strategies that remain useful across several plausible conditions.",
    diagnosticQuestions: [
      "Which assumptions about users, markets, institutions, or technologies are doing the most hidden work in current plans?",
      "What drivers or disruptions could make today's strategy brittle within two to five years?",
      "What signals would tell us which scenario is becoming more likely?",
    ],
    evidenceToCollect: [
      "Signals, trend data, expert insight, and edge-case developments that challenge business-as-usual assumptions.",
      "Dependencies that would break differently under different future conditions.",
      "Evidence of where the organization is already overcommitted to one future story.",
    ],
    whatGoodLooksLike: [
      "The work produces strategic options and trigger signals, not just provocative scenarios.",
      "Teams can explain what they would do differently under several plausible futures.",
      "Near-term design decisions become more robust because long-term uncertainty is explicit.",
    ],
  },
  "socio-technical-systems-modelling": {
    practicalUse:
      "Socio-technical modelling is useful when behavior emerges from the interaction of tools, rules, incentives, roles, and informal workarounds. It helps teams stop treating technology as the whole system and instead see how institutions and people adapt around it.",
    diagnosticQuestions: [
      "Which artifacts, rules, incentives, and actors together create the observed behavior?",
      "Where are people compensating for the formal system through shadow practices or manual patches?",
      "What looks like a user problem but is actually an institutional or policy problem?",
    ],
    evidenceToCollect: [
      "Workflow traces, policy documents, exception logs, and evidence of shadow systems or spreadsheets.",
      "Interviews with people doing invisible coordination work around the official process.",
      "Breakdowns at the junction between software behavior and organizational expectation.",
    ],
    whatGoodLooksLike: [
      "The model includes actors, rules, incentives, artifacts, and adaptation behaviors, not just system components.",
      "Interventions target both technical and organizational leverage points.",
      "The team can explain how technology and institution co-produce the outcome.",
    ],
  },
  "regenerative-design": {
    practicalUse:
      "Regenerative design becomes relevant when the goal is not merely harm reduction but renewal of social or ecological capacity. It asks whether a design strengthens the living systems it depends on, and whether those systems will be healthier because this intervention exists.",
    diagnosticQuestions: [
      "What living systems does this intervention depend on, and how are they currently being depleted or stressed?",
      "Where can the design create reciprocity, renewal, or restored capacity rather than externalized extraction?",
      "What time horizon matters here, and how might benefits or harms appear long after launch?",
    ],
    evidenceToCollect: [
      "Material, energy, maintenance, and ecological flow data across the full lifecycle.",
      "Indicators of resilience, renewal, or restored capacity rather than only efficiency gains.",
      "Evidence of who maintains the system and whether that labor is supported or hidden.",
    ],
    whatGoodLooksLike: [
      "The system leaves ecological or social conditions stronger, not merely less damaged.",
      "Maintenance, stewardship, and long-term renewal are designed into the model.",
      "Claims of regeneration are backed by credible loops, partnerships, and measures.",
    ],
  },
  "change-architecture": {
    practicalUse:
      "Change architecture matters when a strategy is conceptually sound but adoption keeps failing. It focuses on the design of transition: sequencing, reinforcement, governance, incentives, rituals, and the practical conditions that help new behavior take root.",
    diagnosticQuestions: [
      "Whose behavior has to change, and what are they currently rewarded, measured, or constrained to do?",
      "What routines, artifacts, or rituals will carry the change once the launch energy disappears?",
      "Where is resistance rational because the proposed change increases risk, ambiguity, or hidden labor?",
    ],
    evidenceToCollect: [
      "Adoption patterns by role, team, and context rather than simple organization-wide averages.",
      "Leader behavior, tool switching, exception handling, and signs of passive rollback.",
      "Feedback from the people asked to absorb the operational cost of the change.",
    ],
    whatGoodLooksLike: [
      "The rollout is sequenced and reinforced instead of being framed as a one-time communication event.",
      "New behaviors are supported by governance, incentives, and usable tools.",
      "The team can tell whether the change is taking root or merely being performed temporarily.",
    ],
  },
};

export const guideDepth = {
  "designing-an-agent-that-knows-when-to-stop": {
    stakes:
      "This guide matters because the most dangerous agent is not the one that fails loudly. It is the one that keeps going past the point where its confidence, authority, or context should have run out. Stopping behavior is a design problem long before it becomes a safety incident.",
    useThisWhen:
      "Use this when you are designing an agent that can plan, call tools, or act across multiple steps on behalf of a person or organization.",
    movesThisWeek: [
      "List every irreversible action and attach a confirmation, approval, or halt rule to it.",
      "Define explicit stop conditions for ambiguity, conflict, policy breach, missing context, and low-confidence execution.",
      "Run adversarial tasks that reward overreach so the team can see where the agent continues when it should defer.",
    ],
    watchFor: [
      "Demo tasks that make the agent look decisive while hiding uncertainty and runaway action.",
      "A design that asks for human confirmation too late, after consequential work has already happened.",
      "Logs that show what the agent did but not why it believed it was still authorized to continue.",
    ],
  },
  "trust-gradients-for-probabilistic-products": {
    stakes:
      "Trust is not a binary state in AI products. People calibrate trust continuously based on stakes, consistency, provenance, and recovery. Products fail when they ask for the same level of trust from users in moments that deserve radically different degrees of scrutiny.",
    useThisWhen:
      "Use this when the product outputs vary in certainty, consequence, or reversibility, and you need the interface to help users trust wisely rather than blindly.",
    movesThisWeek: [
      "Create a gradient of interaction patterns for low-confidence, medium-confidence, and high-stakes outputs.",
      "Pair claims with provenance, alternatives, or confidence cues at the point of decision.",
      "Make it cheap for users to inspect, correct, or route uncertain outputs to human review.",
    ],
    watchFor: [
      "Using tone and polish to imply certainty the system has not earned.",
      "Hiding caveats until after a confident recommendation has already shaped behavior.",
      "Designing one generic trust pattern for tasks that vary wildly in consequence.",
    ],
  },
  "when-not-to-automate": {
    stakes:
      "Bad automation does not just fail. It hardens weak policy, removes opportunities for human judgment, and makes future repair harder. The value of restraint is often larger than the value of speed when the underlying workflow is unresolved.",
    useThisWhen:
      "Use this before automating a workflow with many exceptions, legal consequences, tacit expertise, or unresolved decision logic.",
    movesThisWeek: [
      "Map where the current process depends on judgment, discretion, negotiation, or tacit contextual knowledge.",
      "Price the cost of a wrong automated decision, not just the time saved when the happy path works.",
      "Automate retrieval, preparation, and evidence gathering first before automating final judgment or action.",
    ],
    watchFor: [
      "Using automation to cover for unresolved policy questions or service debt.",
      "Removing expert learning loops that currently help the organization notice ambiguity and harm.",
      "Measuring success only in throughput while invisible rework and exception cost rise elsewhere.",
    ],
  },
  "the-new-design-stack-beyond-the-screen": {
    stakes:
      "The stack has changed. Teams that still imagine design as mostly interface craft will miss where product quality now lives: in evaluation, orchestration, governance, memory, tool design, and operational trust. This guide exists to help teams redesign their own role before the market does it for them.",
    useThisWhen:
      "Use this when a design team is trying to understand what work belongs to it in AI systems, service operations, or new cross-functional structures.",
    movesThisWeek: [
      "Map the stack from models and data through tooling, policy, evaluation, service operations, and user interaction.",
      "Assign ownership for design problems that currently fall between product, research, ops, and engineering.",
      "Create artifacts beyond screens: eval rubrics, escalation flows, governance decisions, and interaction contracts.",
    ],
    watchFor: [
      "Learning new vocabulary without changing responsibilities or operating models.",
      "Reducing the expanded design role to prompt writing or content dressing.",
      "Treating governance and evaluation as engineering concerns instead of shared product concerns.",
    ],
  },
  "how-to-run-a-futures-sprint-with-ai": {
    stakes:
      "AI can make futures work dramatically faster, but it can also flood teams with plausible-sounding cliches. The value of the sprint is not volume of scenarios. It is whether a team leaves with better strategic options, clearer assumptions, and sharper signals to monitor.",
    useThisWhen:
      "Use this when a team needs to think beyond current roadmaps and test strategy against several plausible futures without running a long research program first.",
    movesThisWeek: [
      "Generate broad scenario directions, then pressure test them with domain expertise before treating them as useful.",
      "Convert scenarios into option portfolios: what to do now, what to defer, and what to watch.",
      "Name the early signals that would tell you one trajectory is strengthening over another.",
    ],
    watchFor: [
      "Prompt theatrics that produce dramatic scenarios with no strategic consequence.",
      "Confusing speculative abundance with clarity.",
      "Letting the sprint end at storytelling instead of landing on decisions, bets, and watchpoints.",
    ],
  },
  "building-a-design-atlas-instead-of-a-content-factory": {
    stakes:
      "Most content systems decay because they reward chronology over compounding understanding. A design atlas is different. It treats publishing as knowledge infrastructure: categories, relationships, updates, and editorial judgment that become more useful as the field grows more confusing.",
    useThisWhen:
      "Use this when you are building a knowledge product and want it to become a durable instrument rather than a feed that disappears into time.",
    movesThisWeek: [
      "Define the core taxonomy and relationship model before scaling publishing volume.",
      "Write pages so they are useful in retrieval mode, not only in the week they are published.",
      "Use signals and updates to strengthen existing nodes instead of creating endless near-duplicate content.",
    ],
    watchFor: [
      "Category sprawl that makes the map less useful with every new entry.",
      "Orphaned pages that never connect to the larger body of knowledge.",
      "Editorial rhythms optimized for output volume instead of cumulative insight.",
    ],
  },
  ...additionalGuideDepth,
};

export const signalDepth = {
  "evaluation-is-becoming-the-new-usability": {
    longerArc:
      "The deeper shift is that quality in AI products is moving from interface smoothness to system accountability. Usability still matters, but the new differentiator is whether teams can define, measure, and improve the quality of probabilistic output under real conditions.",
    whatToWatchNext: [
      "Design teams taking formal ownership of failure taxonomies and release criteria.",
      "Evaluation dashboards connected to live product telemetry rather than isolated offline scoring.",
      "Cross-functional review rituals where shipping is gated by product-specific quality thresholds.",
    ],
    movesThisWeek: [
      "Define a small but concrete failure taxonomy tied to real tasks and user harm.",
      "Instrument post-launch feedback so qualitative complaints can become test cases.",
      "Join release discussions with evaluation evidence, not just design rationale.",
    ],
  },
  "agents-are-turning-service-design-into-policy-design": {
    longerArc:
      "As agents start acting inside services, service design inherits the logic of policy design. Every permission, escalation route, retry loop, and exception path becomes a rule about who gets what outcome under which conditions. That is institutional design, not just UX.",
    whatToWatchNext: [
      "Service blueprints expanding to include agent states, tool calls, approvals, and escalation logic.",
      "Frontline support and operations becoming critical inputs to agent behavior design.",
      "Greater scrutiny on recourse, appeals, and exception handling when agents influence service decisions.",
    ],
    movesThisWeek: [
      "Map where an agent is effectively making or encoding policy today.",
      "Write escalation and exception rules before expanding automation scope.",
      "Review edge cases with operations, legal, and support teams, not only product teams.",
    ],
  },
  "synthetic-media-needs-direction-not-prompt-luck": {
    longerArc:
      "Generative media is maturing from a novelty of output into a discipline of editorial systems. The scarce value is moving toward taste, consistency, review standards, and narrative judgment. Prompt luck will keep producing noise. Direction will produce meaning.",
    whatToWatchNext: [
      "Studios and product teams formalizing reference systems, brand constraints, and review criteria.",
      "Rights, provenance, and sourcing practices becoming part of creative operations.",
      "Demand increasing for people who can art direct across models rather than merely operate them.",
    ],
    movesThisWeek: [
      "Build a reference board and a reject board so quality has clear edges.",
      "Review outputs in sets or sequences, not one by one in isolation.",
      "Document what counts as coherent, ownable, and publishable before scaling generation.",
    ],
  },
  "repairability-is-returning-as-a-digital-design-virtue": {
    longerArc:
      "Repairability is returning because opaque systems are exhausting people. As AI products become more stateful and consequential, the ability to inspect, reset, undo, export, and recover stops being a nice-to-have. It becomes part of trust architecture.",
    whatToWatchNext: [
      "More products exposing memory controls, reset mechanisms, and provenance trails.",
      "Higher expectations that users can hand work to humans or move context across tools.",
      "Trust increasingly shaped by recoverability rather than just by initial delight.",
    ],
    movesThisWeek: [
      "Audit where users are trapped by invisible state or irreversible flow decisions.",
      "Add reset, undo, export, or escalation paths in the most consequential workflows first.",
      "Make provenance and system state visible enough that people can diagnose what happened.",
    ],
  },
  "memory-strategy-is-becoming-a-product-strategy": {
    longerArc:
      "Persistent memory is no longer a feature detail. It is becoming central to utility, lock-in, privacy risk, and cross-session product value. Teams that treat memory as infrastructure rather than interface garnish will make better decisions about usefulness and control.",
    whatToWatchNext: [
      "Clearer segmentation between ephemeral context, working memory, and durable user memory.",
      "Enterprise pressure for retention controls, governance, and auditability of memory features.",
      "New expectations that users can inspect, edit, transport, and delete what systems remember.",
    ],
    movesThisWeek: [
      "Define the memory classes your product uses and what purpose each serves.",
      "Set defaults for retention, editing, and deletion before memory behavior becomes inconsistent.",
      "Design visible controls so users understand what is being remembered and why.",
    ],
  },
  "design-teams-need-an-institutional-imagination-again": {
    longerArc:
      "The bigger shift is that design teams are being pulled back toward institutional questions: rules, incentives, governance, public legitimacy, and organizational capability. Products increasingly behave like institutions, which means product design without institutional imagination becomes shallow very quickly.",
    whatToWatchNext: [
      "Design roles expanding into evaluation, governance, service policy, and operational design.",
      "Teams being asked to model consequences beyond the screen or feature boundary.",
      "A renewed need for designers who can work with legal, policy, procurement, and operations.",
    ],
    movesThisWeek: [
      "Map where your product is already acting like an institution with rules, thresholds, and exceptions.",
      "Bring non-product functions into design reviews for decisions with systemic consequences.",
      "Audit where design choices are quietly encoding power, eligibility, or accountability.",
    ],
  },
  ...additionalSignalDepth,
};

export function getDisciplineDepth(slug) {
  return disciplineDepth[slug];
}

export function getFrameworkDepth(slug) {
  return frameworkDepth[slug];
}

export function getGuideDepth(slug) {
  return guideDepth[slug];
}

export function getSignalDepth(slug) {
  return signalDepth[slug];
}
