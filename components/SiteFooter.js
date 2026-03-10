import Link from "next/link";

import { siteMeta } from "../lib/site-data";

export function SiteFooter() {
  const buddyName = siteMeta.humanBuddy?.name;
  const buddyUrl = siteMeta.humanBuddy?.linkedinUrl;

  return (
    <footer className="site-footer">
      <div className="site-frame footer-grid">
        <div className="footer-brand-block">
          <Link href="/" className="brand-lockup footer-brand">
            <span className="sr-only">explainme.design</span>
            <img src="/mica-logo.svg" alt="" className="brand-logo" aria-hidden="true" />
          </Link>
          <p className="footer-copy">
            A field guide to agents, institutions, materials, and memory.
          </p>
        </div>
        <div className="footer-links">
          <Link href="/atlas">Atlas</Link>
          <Link href="/frameworks">Frameworks</Link>
          <Link href="/guides">Guides</Link>
          <Link href="/signals">Signals</Link>
          <Link href="/about">About Me</Link>
        </div>
        <div className="footer-note">
          <p className="eyebrow">Closing note</p>
          <p className="footer-copy">
            {siteMeta.currentListening}
          </p>
          {buddyName ? (
            <p className="footer-copy footer-credit">
              Built with{" "}
              {buddyUrl ? (
                <a href={buddyUrl} target="_blank" rel="noreferrer">
                  {buddyName}
                </a>
              ) : (
                buddyName
              )}
              .
            </p>
          ) : null}
        </div>
      </div>
    </footer>
  );
}
