import Link from "next/link";

import { formatPublishedDate } from "../lib/site-data";

export function SignalRail({ signals }) {
  return (
    <div className="signal-rail" aria-label="Recent signals">
      {signals.map((signal) => (
        <Link
          key={signal.slug}
          href={`/signals/${signal.slug}`}
          className="signal-card"
          data-tone={signal.kicker.toLowerCase()}
        >
          <div className="signal-card-top">
            <p className="signal-kicker">{signal.kicker}</p>
            <p className="micro-meta">{formatPublishedDate(signal.published)}</p>
          </div>
          <h3>{signal.title}</h3>
          <p>{signal.preview}</p>
          <span className="text-link">
            Read signal
          </span>
        </Link>
      ))}
    </div>
  );
}
