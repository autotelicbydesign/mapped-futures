import { AtmosphereField } from "../components/AtmosphereField";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { siteMeta } from "../lib/site-data";

import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://explainme.design"),
  title: {
    default: `${siteMeta.title} — ${siteMeta.tagline}`,
    template: `%s · ${siteMeta.title}`,
  },
  description: siteMeta.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var key='mica-theme';var stored=localStorage.getItem(key);document.documentElement.dataset.theme=stored||'dark';}catch(e){document.documentElement.dataset.theme='dark';}})();`,
          }}
        />
      </head>
      <body>
        <AtmosphereField />
        <div className="page-aura" />
        <SiteHeader />
        <main className="site-frame site-main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
