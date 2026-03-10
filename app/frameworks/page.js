import Link from "next/link";

import { frameworks } from "../../lib/site-data";

export const metadata = {
  title: "Frameworks",
  description:
    "Mica's working frameworks for design in the age of AI, systems, and planetary constraint.",
};

export default function FrameworksPage() {
  return (
    <div className="page-stack">
      <section className="detail-hero">
        <p className="eyebrow">Frameworks</p>
        <h1>I keep these frameworks around because they change what design can see.</h1>
        <p className="detail-lede">
          I use these lenses across disciplines to notice second-order effects
          before they become expensive surprises or polished mistakes.
        </p>
      </section>

      <div className="three-up-grid">
        {frameworks.map((framework) => (
          <Link
            key={framework.slug}
            href={`/frameworks/${framework.slug}`}
            className="framework-card"
          >
            <p className="eyebrow">{framework.intent}</p>
            <h3>{framework.title}</h3>
            <p>{framework.preview}</p>
            <span className="text-link">
              Open framework
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
