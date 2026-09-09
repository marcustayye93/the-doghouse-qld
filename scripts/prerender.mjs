/**
 * Prerender every route to a static HTML file so each page is a real URL
 * (good for SEO, and genuinely-missing URLs still return a true HTTP 404
 * via 404.html instead of being swallowed by client-side routing).
 *
 * Usage: npm run build  (client build -> SSR bundle -> this script)
 * Optional: SITE_URL=https://example.com.au node scripts/prerender.mjs
 */
import { readFileSync, writeFileSync, mkdirSync, rmSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const siteUrl = (process.env.SITE_URL || '').replace(/\/$/, '');

const { render, prerenderPages } = await import(join(root, 'dist-ssr/entry-server.js'));
const pages = prerenderPages();

let template = readFileSync(join(dist, 'index.html'), 'utf8');

const esc = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function buildPage(title, description, appHtml) {
  return template
    .replace(/<title>.*<\/title>/, `<title>${esc(title)}</title>`)
    .replace(
      /<meta name="description" content=".*" \/>/,
      `<meta name="description" content="${esc(description)}" />`
    )
    .replace('<!--app-html-->', appHtml);
}

for (const { path, title, description } of pages) {
  const html = render(path);
  const outDir = path === '/' ? dist : join(dist, path);
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, 'index.html'), buildPage(title, description, html));
  console.log('prerendered', path);
}

// Branded 404 page. Static hosts serve 404.html with a true 404 status.
const missing = render('/__this-page-does-not-exist__');
writeFileSync(
  join(dist, '404.html'),
  buildPage('Page not found | The Doghouse QLD', 'Oops... this page has wandered off!', missing)
);
console.log('prerendered /404.html');

// robots.txt (+ sitemap reference once the production domain is known)
let robots = 'User-agent: *\nAllow: /\n';
if (siteUrl) {
  const urls = pages.map((p) => `  <url><loc>${siteUrl}${p.path}</loc></url>`).join('\n');
  writeFileSync(
    join(dist, 'sitemap.xml'),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
  );
  robots += `Sitemap: ${siteUrl}/sitemap.xml\n`;
  console.log('wrote sitemap.xml');
}
writeFileSync(join(dist, 'robots.txt'), robots);

rmSync(join(root, 'dist-ssr'), { recursive: true, force: true });
console.log('done');
