"use client";

import Link from "next/link";
import { startTransition, useDeferredValue, useState } from "react";

const maturityFilters = ["All", "Established", "Emerging", "Frontier"];

export function AtlasExplorer({ disciplines, metaDomains }) {
  const [query, setQuery] = useState("");
  const [activeDomain, setActiveDomain] = useState("All");
  const [activeMaturity, setActiveMaturity] = useState("All");

  const deferredQuery = useDeferredValue(query);
  const normalizedQuery = deferredQuery.trim().toLowerCase();

  const filteredDisciplines = disciplines.filter((discipline) => {
    const matchesDomain =
      activeDomain === "All" || discipline.metaDomain === activeDomain;
    const matchesMaturity =
      activeMaturity === "All" || discipline.maturity === activeMaturity;
    const haystack = [
      discipline.title,
      discipline.summary,
      discipline.metaDomain,
      ...(discipline.aliases || []),
    ]
      .join(" ")
      .toLowerCase();
    const matchesQuery =
      normalizedQuery.length === 0 || haystack.includes(normalizedQuery);

    return matchesDomain && matchesMaturity && matchesQuery;
  });

  return (
    <section className="panel atlas-explorer">
      <div className="explorer-head">
        <div>
          <p className="eyebrow">Atlas explorer</p>
          <h2>Browse the map by domain, maturity, or a specific term.</h2>
        </div>
        <p className="explorer-count">
          {filteredDisciplines.length} node
          {filteredDisciplines.length === 1 ? "" : "s"} visible
        </p>
      </div>

      <label className="search-field">
        <span className="sr-only">Search atlas entries</span>
        <input
          type="search"
          className="search-input"
          placeholder="Search AI UX, civic, materials, research..."
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </label>

      <div className="filter-cluster">
        <div className="filter-group">
          <p className="filter-label">Meta-domain</p>
          <div className="filter-row">
            <button
              type="button"
              className={`filter-chip ${activeDomain === "All" ? "is-active" : ""}`}
              onClick={() => startTransition(() => setActiveDomain("All"))}
            >
              All domains
            </button>
            {metaDomains.map((domain) => (
              <button
                key={domain.slug}
                type="button"
                className={`filter-chip ${
                  activeDomain === domain.title ? "is-active" : ""
                }`}
                onClick={() =>
                  startTransition(() => setActiveDomain(domain.title))
                }
              >
                {domain.title}
              </button>
            ))}
          </div>
        </div>
        <div className="filter-group">
          <p className="filter-label">Maturity</p>
          <div className="filter-row">
            {maturityFilters.map((maturity) => (
              <button
                key={maturity}
                type="button"
                className={`filter-chip ${
                  activeMaturity === maturity ? "is-active" : ""
                }`}
                onClick={() => startTransition(() => setActiveMaturity(maturity))}
              >
                {maturity}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="atlas-grid">
        {filteredDisciplines.map((discipline) => (
          <Link
            key={discipline.slug}
            href={`/atlas/${discipline.slug}`}
            className="atlas-item"
            data-maturity={discipline.maturity}
          >
            <div className="atlas-item-top">
              <span className="pill">{discipline.metaDomain}</span>
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
      </div>

      {filteredDisciplines.length === 0 ? (
        <div className="empty-state">
          No atlas nodes match that combination yet. Try a broader term or clear a
          filter.
        </div>
      ) : null}
    </section>
  );
}
