import Link from "next/link";
import { notFound } from "next/navigation";

import { MicaPrimer } from "../../../components/MicaPrimer";
import {
  formatPublishedDate,
  getDisciplinesBySlugs,
  getFrameworksBySlugs,
  getGuide,
  guides,
} from "../../../lib/site-data";

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const guide = getGuide(slug);

  if (!guide) {
    return {};
  }

  return {
    title: guide.title,
    description: guide.preview,
  };
}

export default async function GuidePage({ params }) {
  const { slug } = await params;
  const guide = getGuide(slug);

  if (!guide) {
    notFound();
  }

  const relatedDisciplines = getDisciplinesBySlugs(guide.relatedDisciplines);
  const relatedFrameworks = getFrameworksBySlugs(guide.frameworks);

  return (
    <article className="page-stack">
      <Link href="/guides" className="back-link">
        Back to field guides
      </Link>

      <section className="detail-hero">
        <p className="eyebrow">{guide.theme}</p>
        <h1>{guide.title}</h1>
        <p className="detail-lede">{guide.preview}</p>
        <p className="micro-meta">
          {guide.readingTime} · {formatPublishedDate(guide.published)}
        </p>
      </section>

      <section className="detail-layout">
        <div className="detail-main">
          <MicaPrimer voice={guide} />

          <section className="panel prose-panel article-section">
            <p className="section-kicker">Why this guide exists</p>
            <p>{guide.whyIAmWritingThisNow}</p>
            <p>{guide.useThisWhenTheRoomIsStuck}</p>
            <div className="article-section-stack">
              {guide.bodySections.map((section) => (
                <div key={section.title} className="article-block">
                  <h3>{section.title}</h3>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              ))}
            </div>
          </section>

          <section className="panel prose-panel article-section">
            <h2>Take this into the week</h2>
            <div className="article-section-stack">
              <div className="article-block">
                <h3>If you only do three things</h3>
                <ul className="bullet-list">
                  {guide.ifYouOnlyDoThreeThings.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="article-block">
                <h3>Moves for the next seven days</h3>
                <ul className="bullet-list">
                  {guide.movesForTheNextSevenDays.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="article-block">
                <h3>Where teams fool themselves</h3>
                <ul className="bullet-list">
                  {guide.whereTeamsFoolThemselves.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </div>

        <aside className="detail-sidebar">
          <section className="panel sidebar-panel">
            <p className="eyebrow">Connected atlas nodes</p>
            <div className="sidebar-links">
              {relatedDisciplines.map((item) => (
                <Link key={item.slug} href={`/atlas/${item.slug}`} className="sidebar-link">
                  {item.title}
                </Link>
              ))}
            </div>
          </section>
          <section className="panel sidebar-panel">
            <p className="eyebrow">Useful lenses</p>
            <div className="sidebar-links">
              {relatedFrameworks.map((item) => (
                <Link
                  key={item.slug}
                  href={`/frameworks/${item.slug}`}
                  className="sidebar-link"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </section>
        </aside>
      </section>
    </article>
  );
}
