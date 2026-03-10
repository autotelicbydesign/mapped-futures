import Link from "next/link";

import { MicaHeatmap } from "../components/MicaHeatmap";
import { SignalRail } from "../components/SignalRail";
import {
  disciplines,
  featuredDisciplineSlugs,
  featuredFrameworkSlugs,
  frameworks,
  getDisciplinesBySlugs,
  getFrameworksBySlugs,
  guides,
  signals,
  siteMeta,
} from "../lib/site-data";

const toneClassByDomain = {
  "Intelligent & Autonomous Systems": "tone-autonomous",
  "Systems & Institutions": "tone-systems",
};

export default function HomePage() {
  const featuredDisciplines = getDisciplinesBySlugs(featuredDisciplineSlugs).slice(0, 2);
  const featuredFramework = getFrameworksBySlugs(featuredFrameworkSlugs)[0] ?? frameworks[0];
  const homeSignals = signals.slice(0, 3);

  return (
    <div className="page-stack home-page">
      <section className="home-hero">
        <div className="hero-orbit hero-orbit-large" aria-hidden="true" />
        <div className="hero-orbit hero-orbit-small" aria-hidden="true" />
        <div className="hero-dot-cluster" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className="hero-trail" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
        </div>

        <div className="hero-copy">
          <h1 className="hero-title">Design after certainty.</h1>
          <p className="hero-kicker">
            A field guide to agents, institutions, materials, and memory.
          </p>
          <p className="hero-dek">
            I’m building {siteMeta.title} as an independent field guide to design after
            certainty: a living atlas of disciplines, frameworks, and sharp editorial
            notes for the systems we are actually building now.
          </p>
          <div className="button-row">
            <Link href="/atlas" className="button">
              Explore the atlas
            </Link>
            <Link href="/guides" className="button ghost">
              Read field guides
            </Link>
          </div>
          <div className="stat-grid" aria-label="Site stats">
            <div className="stat-card">
              <strong>{disciplines.length}</strong>
              <span>disciplines</span>
            </div>
            <div className="stat-card">
              <strong>{frameworks.length}</strong>
              <span>frameworks</span>
            </div>
            <div className="stat-card">
              <strong>{guides.length}</strong>
              <span>field guides</span>
            </div>
            <div className="stat-card">
              <strong>{signals.length}</strong>
              <span>recent signals</span>
            </div>
          </div>
        </div>

        <aside className="hero-side">
          <p className="eyebrow">Hi, I&apos;m Mica. My favourite song is</p>
          <div className="mica-image-card">
            <div className="mica-image" aria-hidden="true">
              <div className="mica-image-pill">♫ Once in a Lifetime, Talking Heads</div>
              <MicaHeatmap className="hero-heatmap" colorBack="#1538a7" />
            </div>
          </div>
          <div className="mica-open-note">
            <h2>I map the future of design without pretending it is tidy.</h2>
            <p>
              I like transit maps, footnotes, repair manuals, observatories, beautiful
              constraints, and systems that reveal their seams.
            </p>
          </div>
        </aside>
      </section>

      <section className="home-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Signals</p>
            <h2>What matters this week.</h2>
          </div>
          <p className="section-copy">
            Not trend-chasing. Just the shifts, tensions, and weak signals worth carrying
            into the next design decision.
          </p>
        </div>
        <SignalRail signals={homeSignals} />
      </section>

      <section className="atlas-showcase">
        <div className="atlas-intro">
          <p className="eyebrow">Atlas</p>
          <h2>Map the territory, not just the feed.</h2>
          <p>
            The atlas is where disciplines, frameworks, and emerging categories stay
            connected instead of getting buried by chronology.
          </p>
          <article className="belief-card compact">
            <p className="eyebrow">What this site believes</p>
            <h3>Design is not decoration. It is how society makes decisions visible.</h3>
          </article>
        </div>

        <div className="atlas-feature-grid">
          {featuredDisciplines.map((discipline) => (
            <Link
              key={discipline.slug}
              href={`/atlas/${discipline.slug}`}
              className="atlas-item atlas-item-featured"
              data-maturity={discipline.maturity}
            >
              <div className="atlas-item-top">
                <span className={`pill ${toneClassByDomain[discipline.metaDomain] ?? ""}`}>
                  {discipline.metaDomain}
                </span>
                <span className="pill subtle">{discipline.maturity}</span>
              </div>
              <h3>{discipline.title}</h3>
              <p>{discipline.preview}</p>
              <div className="chip-row">
                {discipline.impactScales.slice(0, 3).map((scale) => (
                  <span key={scale} className="chip">
                    {scale}
                  </span>
                ))}
              </div>
              <span className="text-link">
                Open node
              </span>
            </Link>
          ))}

          <Link
            href={`/frameworks/${featuredFramework.slug}`}
            className="atlas-item atlas-item-featured framework-featured"
          >
            <div className="atlas-item-top">
              <span className="pill tone-framework">Framework</span>
            </div>
            <h3>{featuredFramework.title}</h3>
            <p>{featuredFramework.preview}</p>
            <span className="text-link">
              Study framework
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}
