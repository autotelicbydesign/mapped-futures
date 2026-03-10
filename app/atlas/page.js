import Link from "next/link";

import { AtlasExplorer } from "../../components/AtlasExplorer";
import { disciplines, frameworks, metaDomains } from "../../lib/site-data";

export const metadata = {
  title: "Atlas",
  description:
    "Mica's adaptive atlas of design disciplines, adjacent futures, and the categories that matter now.",
};

export default function AtlasPage() {
  return (
    <div className="page-stack">
      <section className="detail-hero">
        <p className="eyebrow">Atlas</p>
        <h1>I keep this atlas adaptive because design keeps moving.</h1>
        <p className="detail-lede">
          I treat taxonomy as authorship. Categories can merge, split, or appear
          when the field demands it. The goal is not tidy classification. It is
          a map that stays useful as the territory changes.
        </p>
      </section>

      <AtlasExplorer disciplines={disciplines} metaDomains={metaDomains} />

      <section className="section-stack">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Frameworks</p>
            <h2>Use the lenses, not just the labels</h2>
          </div>
          <p className="section-copy">
            I use frameworks to show how to think, not merely what to call a
            thing. Labels help. Lenses change decisions.
          </p>
        </div>
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
      </section>
    </div>
  );
}
