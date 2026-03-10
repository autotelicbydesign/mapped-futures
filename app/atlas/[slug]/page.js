import Link from "next/link";
import { notFound } from "next/navigation";

import { MicaPrimer } from "../../../components/MicaPrimer";
import {
  disciplines,
  getDiscipline,
  getDisciplinesBySlugs,
  getFrameworksBySlugs,
} from "../../../lib/site-data";

export function generateStaticParams() {
  return disciplines.map((discipline) => ({ slug: discipline.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const discipline = getDiscipline(slug);

  if (!discipline) {
    return {};
  }

  return {
    title: discipline.title,
    description: discipline.preview,
  };
}

export default async function DisciplinePage({ params }) {
  const { slug } = await params;
  const discipline = getDiscipline(slug);

  if (!discipline) {
    notFound();
  }

  const relatedDisciplines = getDisciplinesBySlugs(discipline.relatedDisciplines);
  const relatedFrameworks = getFrameworksBySlugs(discipline.frameworks);

  return (
    <article className="page-stack">
      <Link href="/atlas" className="back-link">
        Back to atlas
      </Link>

      <section className="detail-hero">
        <p className="eyebrow">{discipline.metaDomain}</p>
        <h1>{discipline.title}</h1>
        <p className="detail-lede">{discipline.preview}</p>
        <div className="chip-row">
          <span className="chip accent">{discipline.maturity}</span>
          {discipline.impactScales.map((scale) => (
            <span key={scale} className="chip">
              {scale}
            </span>
          ))}
        </div>
      </section>

      <section className="detail-layout">
        <div className="detail-main">
          <MicaPrimer voice={discipline} />

          <section className="panel prose-panel article-section">
            <h2>What this discipline really changes</h2>
            <p>{discipline.whatItReallyIs}</p>
            <p>{discipline.whatChangesOnTheGround}</p>
          </section>

          <section className="panel prose-panel article-section">
            <h2>What the work actually looks like</h2>
            <div className="article-section-stack">
              <div className="article-block">
                <h3>What people actually do</h3>
                <ul className="bullet-list">
                  {discipline.whatPeopleActuallyDo.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="article-block">
                <h3>Moves that raise the level</h3>
                <ul className="bullet-list">
                  {discipline.movesThatRaiseTheLevel.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="article-block">
                <h3>Reach for it when</h3>
                <ul className="bullet-list">
                  {discipline.whenToReachForIt.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="article-block">
                <h3>How to tell it is getting real</h3>
                <ul className="bullet-list">
                  {discipline.evidenceItIsWorking.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className="panel prose-panel article-section">
            <h2>Where people get fooled</h2>
            <div className="article-section-stack">
              <div className="article-block">
                <h3>Where this goes wrong</h3>
                <ul className="bullet-list">
                  {discipline.whereItGoesWrong.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="article-block">
                <h3>What people usually get wrong</h3>
                <ul className="bullet-list">
                  {discipline.whatPeopleUsuallyGetWrong.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="article-block">
                <h3>Questions worth taking into the room</h3>
                <ul className="bullet-list">
                  {discipline.questionsToTakeIntoTheRoom.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </div>

        <aside className="detail-sidebar">
          <section className="panel sidebar-panel">
            <p className="eyebrow">Works across</p>
            <div className="chip-row">
              {discipline.interfaces.map((item) => (
                <span key={item} className="chip">
                  {item}
                </span>
              ))}
            </div>
          </section>
          <section className="panel sidebar-panel">
            <p className="eyebrow">Also called</p>
            <div className="chip-row">
              {discipline.aliases.map((item) => (
                <span key={item} className="chip">
                  {item}
                </span>
              ))}
            </div>
          </section>
          <section className="panel sidebar-panel">
            <p className="eyebrow">Read next</p>
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
