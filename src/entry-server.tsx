import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { SiteRoutes, prerenderPages } from './SiteRoutes';

/** Render a URL path to an HTML string (used by scripts/prerender.mjs). */
const rawBase = import.meta.env.VITE_PREVIEW_BASE || '';
const baseName = rawBase.replace(/\/$/, '') || undefined;

export function render(url: string): string {
  // StaticRouter only matches when the location starts with the basename.
  const location = baseName ? `${baseName}${url}` : url;
  return renderToString(
    <StaticRouter location={location} basename={baseName}>
      <SiteRoutes />
    </StaticRouter>
  );
}

export { prerenderPages };
