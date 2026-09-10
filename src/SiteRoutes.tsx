import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Header, HomeMasthead, Footer } from './components/chrome';
import { allRoutes, hubPaths, hubMeta } from './routes';
import SectionHub from './pages/SectionHub';
import NotFound from './pages/NotFound';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export function SiteRoutes() {
  // The homepage carries its own masthead (large centred logo + nav between
  // two rules, per master spec sections 1-2); inner pages use the compact header.
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  return (
    <>
      <ScrollToTop />
      {isHome ? <HomeMasthead /> : <Header />}
      <Routes>
        {allRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
        {hubPaths.map((p) => (
          <Route key={p} path={p} element={<SectionHub sectionPath={p} />} />
        ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

/** Flat list of prerenderable pages (real pages + hubs). */
export function prerenderPages() {
  const pages = allRoutes.map(({ path, title, description }) => ({ path, title, description }));
  for (const p of hubPaths) pages.push({ path: p, ...hubMeta[p] });
  return pages;
}
