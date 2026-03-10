import Link from "next/link";
import { notFound } from "next/navigation";

import { MicaPrimer } from "../../../components/MicaPrimer";
import {
  formatPublishedDate,
  getDisciplinesBySlugs,
  getSignal,
  signals,
} from "../../../lib/site-data";

export function generateStaticParams() {
  return signals.map((signal) => ({ slug: signal.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const signal = getSignal(slug);

  if (!signal) {
    return {};
  }

  return {
    title: signal.title,
    description: signal.preview,
  };
}

export default async function SignalPage({ params }) {
  const { slug } = await params;
  const signal = getSignal(slug);

  if (!signal) {
    notFound();
  }

  const relatedDisciplines = getDisciplinesBySlugs(signal.relatedDisciplines);

  return (
    <article className="page-stack">
      <Link href="/signals" className="back-link">
        Back to signals
      </Link>

      <section className="detail-hero">
        <p className="eyebrow">{signal.kicker}</p>
        <h1>{signal.title}</h1>
        <p className="detail-lede">{signal.preview}</p>
        <p className="micro-meta">{formatPublishedDate(signal.published)}</p>
      </section>

      <section className="detail-layout">
        <div className="detail-main">
          <MicaPrimer voice={signal} />

          <section className="panel prose-panel article-section">
            <h2>What changed underneath this</h2>
            <p>{signal.whatChanged}</p>
            <p>{signal.whyItMatters}</p>
          </section>

          <section className="panel prose-panel article-section">
            <h2>What this signal is really telling you</h2>
            <p>{signal.deeperPattern}</p>
            <div className="article-section-stack">
              <div className="article-block">
                <h3>Watch these next</h3>
                <ul className="bullet-list">
                  {signal.watchTheseNext.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="article-block">
                <h3>Do this before the signal gets expensive</h3>
                <ul className="bullet-list">
                  {signal.doThisBeforeTheSignalGetsExpensive.map((item) => (
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
        </aside>
      </section>
    </article>
  );
}
