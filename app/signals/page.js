import Link from "next/link";

import { formatPublishedDate, signals } from "../../lib/site-data";

export const metadata = {
  title: "Signals",
  description:
    "Recent signals, shifts, and provocations from Mica on the future of design.",
};

export default function SignalsPage() {
  return (
    <div className="page-stack">
      <section className="detail-hero">
        <p className="eyebrow">Signals</p>
        <h1>I publish signals when something small is about to matter a lot.</h1>
        <p className="detail-lede">
          These are the observations I think deserve more attention than they
          are getting in the average design conversation.
        </p>
      </section>

      <div className="story-grid">
        {signals.map((signal) => (
          <Link key={signal.slug} href={`/signals/${signal.slug}`} className="story-card">
            <p className="eyebrow">{signal.kicker}</p>
            <h3>{signal.title}</h3>
            <p>{signal.preview}</p>
            <div className="story-meta">
              <span>Field note</span>
              <span>{formatPublishedDate(signal.published)}</span>
            </div>
            <span className="text-link">
              Read signal
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
