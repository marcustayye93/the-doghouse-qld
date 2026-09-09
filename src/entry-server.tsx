import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { SiteRoutes, prerenderPages } from './SiteRoutes';

/** Render a URL path to an HTML string (used by scripts/prerender.mjs). */
export function render(url: string): string {
  return renderToString(
    <StaticRouter location={url}>
      <SiteRoutes />
    </StaticRouter>
  );
}

export { prerenderPages };
