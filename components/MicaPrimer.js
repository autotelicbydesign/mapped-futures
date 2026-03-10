export function MicaPrimer({ voice }) {
  if (!voice) {
    return null;
  }

  return (
    <section className="panel prose-panel mica-primer">
      <p className="eyebrow">The real question</p>
      <h2>{voice.readerQuestion}</h2>
      <p className="mica-answer">{voice.quickAnswer}</p>
      <p className="mica-opinion">
        <strong>My view:</strong> {voice.opinion}
      </p>
      <p>{voice.mechanism}</p>
      <p>{voice.runningExample}</p>
      {voice.schemaSteps?.length ? (
        <div className="schema-strip" aria-label="How it works schema">
          {voice.schemaSteps.map((step, index) => (
            <div key={step} className="schema-item">
              <span className="schema-step">{step}</span>
              {index < voice.schemaSteps.length - 1 ? (
                <span className="schema-arrow" aria-hidden="true">
                  →
                </span>
              ) : null}
            </div>
          ))}
        </div>
      ) : null}
      {voice.questionToCarry ? (
        <p className="mica-carry">
          <strong>One question worth carrying:</strong> {voice.questionToCarry}
        </p>
      ) : null}
    </section>
  );
}
