import Link from "next/link";
import { notFound } from "next/navigation";

import { MicaPrimer } from "../../../components/MicaPrimer";
import {
  frameworks,
  getDisciplinesBySlugs,
  getFramework,
} from "../../../lib/site-data";

export function generateStaticParams() {
  return frameworks.map((framework) => ({ slug: framework.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const framework = getFramework(slug);

  if (!framework) {
    return {};
  }

  return {
    title: framework.title,
    description: framework.preview,
  };
}

export default async function FrameworkPage({ params }) {
  const { slug } = await params;
  const framework = getFramework(slug);

  if (!framework) {
    notFound();
  }

  const relatedDisciplines = getDisciplinesBySlugs(framework.relatedDisciplines);

  return (
    <article className="page-stack">
      <Link href="/frameworks" className="back-link">
        Back to frameworks
      </Link>

      <section className="detail-hero">
        <p className="eyebrow">Framework</p>
        <h1>{framework.title}</h1>
        <p className="detail-lede">{framework.preview}</p>
      </section>

      <section className="detail-layout">
        <div className="detail-main">
          <MicaPrimer voice={framework} />

          <section className="panel prose-panel article-section">
            <h2>What this framework is really for</h2>
            <p>{framework.whatProblemThisIsReallyFor}</p>
            <p>{framework.howToUseWithoutKiddingYourself}</p>
          </section>

          <section className="panel prose-panel article-section">
            <h2>How to use it without theatre</h2>
            <div className="article-section-stack">
              <div className="article-block">
                <h3>Reach for it when</h3>
                <ul className="bullet-list">
                  {framework.whenToReachForIt.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="article-block">
                <h3>Questions that expose the system</h3>
                <ul className="bullet-list">
                  {framework.questionsThatExposeTheSystem.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="article-block">
                <h3>Evidence worth collecting</h3>
                <ul className="bullet-list">
                  {framework.evidenceWorthCollecting.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className="panel prose-panel article-section">
            <h2>What good and bad use look like</h2>
            <div className="article-section-stack">
              <div className="article-block">
                <h3>What good looks like in the wild</h3>
                <ul className="bullet-list">
                  {framework.whatGoodLooksLike.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="article-block">
                <h3>How teams misuse it</h3>
                <ul className="bullet-list">
                  {framework.howTeamsMisuseIt.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </div>

        <aside className="detail-sidebar">
          <section className="panel sidebar-panel">
            <p className="eyebrow">Why AI changes this</p>
            <p>{framework.aiRelevance}</p>
          </section>
          <section className="panel sidebar-panel">
            <p className="eyebrow">Best paired with</p>
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
