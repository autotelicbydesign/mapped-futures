import Link from "next/link";

import { formatPublishedDate, guides } from "../../lib/site-data";

export const metadata = {
  title: "Guides",
  description: "Field guides from Mica on design, AI, systems, and future practice.",
};

export default function GuidesPage() {
  return (
    <div className="page-stack">
      <section className="detail-hero">
        <p className="eyebrow">Field guides</p>
        <h1>I write these field guides to sharpen judgment, not pad a feed.</h1>
        <p className="detail-lede">
          I write them to help you argue better, frame better, and notice the
          structural problem hiding behind the shiny one.
        </p>
      </section>

      <div className="story-grid">
        {guides.map((guide) => (
          <Link key={guide.slug} href={`/guides/${guide.slug}`} className="story-card">
            <p className="eyebrow">{guide.theme}</p>
            <h3>{guide.title}</h3>
            <p>{guide.preview}</p>
            <div className="story-meta">
              <span>{guide.readingTime}</span>
              <span>{formatPublishedDate(guide.published)}</span>
            </div>
            <span className="text-link">
              Read guide
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
