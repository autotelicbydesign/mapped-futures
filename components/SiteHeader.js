"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/atlas", label: "Atlas" },
  { href: "/guides", label: "Guides" },
  { href: "/signals", label: "Signals" },
  { href: "/about", label: "About Me" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const root = document.documentElement;
    const current = root.dataset.theme || "dark";
    setTheme(current);
  }, []);

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";

    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("mica-theme", nextTheme);
    setTheme(nextTheme);
  }

  return (
    <header className="site-header">
      <div className="site-frame site-header-inner">
        <Link href="/" className="brand-lockup">
          <span className="sr-only">explainme.design</span>
          <img src="/mica-logo.svg" alt="" className="brand-logo" aria-hidden="true" />
        </Link>
        <div className="site-header-controls">
          <nav className="site-nav" aria-label="Primary">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`site-nav-link ${
                  item.href === "/"
                    ? pathname === "/"
                      ? "is-active"
                      : ""
                    : pathname === item.href || pathname.startsWith(`${item.href}/`)
                    ? "is-active"
                    : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-pressed={theme === "dark"}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            <span className="theme-toggle-track" aria-hidden="true">
              <span className="theme-toggle-thumb" />
            </span>
            <span className="theme-toggle-label">{theme === "dark" ? "Dark" : "Light"}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
