import { useCallback, useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { navigation } from '../nav';
import { siteConfig } from '../config';
import { asset, CTAButton } from './ui';

function Logo({ className = 'h-12 w-auto' }: { className?: string }) {
  return (
    <Link to="/" aria-label="The Doghouse QLD - home" className="inline-block shrink-0">
      <img src={asset('/images/logo.png')} alt="The Doghouse QLD" className={className} />
    </Link>
  );
}

/**
 * Desktop navigation with explicitly controlled dropdowns (master spec
 * section 11): the submenu closes immediately when a destination is
 * selected, when another category opens, on outside click, on Escape, and
 * on route change. It never lingers over the destination page.
 */
function DesktopNav({ centered = false }: { centered?: boolean }) {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const location = useLocation();
  const close = useCallback(() => setOpenMenu(null), []);

  // Close whenever the route changes (the destination page becomes the focus).
  useEffect(() => {
    close();
  }, [location.pathname, close]);

  // Close on outside click and on Escape.
  useEffect(() => {
    const onPointerDown = (e: PointerEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) close();
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [close ]);

  return (
    <nav ref={navRef} aria-label="Main navigation" className={centered ? undefined : 'hidden lg:block'}>
      <ul className={`flex items-center gap-1 ${centered ? 'justify-center' : ''}`}>
        {navigation.map((item) => (
          <li
            key={item.path}
            className="relative"
            onMouseEnter={() => item.children && setOpenMenu(item.path)}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <NavLink
              to={item.path}
              onClick={close}
              onFocus={() => item.children && setOpenMenu(item.path)}
              className={({ isActive }) =>
                `block whitespace-nowrap px-3 py-2.5 text-[13px] font-semibold uppercase tracking-wide transition ${
                  isActive ? 'text-brand' : 'text-bark hover:text-brand'
                }`
              }
            >
              {item.label}
            </NavLink>
            {item.children && openMenu === item.path && (
              <div className="absolute left-0 top-full z-50 w-64 pt-1">
                <ul className="overflow-hidden rounded-xl border border-brand/10 bg-white py-2 shadow-xl">
                  {item.children.map((child) => (
                    <li key={child.path}>
                      <Link
                        to={child.path}
                        onClick={close}
                        className="block px-5 py-2.5 text-sm text-bark transition hover:bg-mist hover:text-brand"
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

/**
 * Mobile navigation (master spec section 12): selecting a destination
 * navigates and closes the submenu/panel immediately, revealing the page.
 */
function MobileNav({ onNavigate }: { onNavigate: () => void }) {
  const [openSection, setOpenSection] = useState<string | null>(null);
  return (
    <nav aria-label="Mobile navigation">
      <ul className="divide-y divide-brand/10">
        {navigation.map((item) => (
          <li key={item.path}>
            {item.children ? (
              <>
                <button
                  type="button"
                  onClick={() => setOpenSection((s) => (s === item.path ? null : item.path))}
                  aria-expanded={openSection === item.path}
                  className="flex w-full items-center justify-between px-2 py-3.5 text-left text-sm font-bold uppercase tracking-wide text-bark"
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={`text-brand transition-transform ${openSection === item.path ? 'rotate-180' : ''}`}
                  >
                    ▾
                  </span>
                </button>
                {openSection === item.path && (
                  <ul className="pb-2 pl-4">
                    <li>
                      <Link
                        to={item.path}
                        onClick={onNavigate}
                        className="block py-2 text-sm font-semibold text-branddark"
                      >
                        {item.label}
                      </Link>
                    </li>
                    {item.children.map((child) => (
                      <li key={child.path}>
                        <Link
                          to={child.path}
                          onClick={onNavigate}
                          className="block py-2 text-sm text-bark/90"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            ) : (
              <Link
                to={item.path}
                onClick={onNavigate}
                className="block px-2 py-3.5 text-sm font-bold uppercase tracking-wide text-bark"
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

function useCloseMenuOnRouteChange(menuOpen: boolean, setMenuOpen: (v: boolean) => void) {
  const location = useLocation();
  const lastPath = useRef(location.pathname);
  useEffect(() => {
    if (location.pathname !== lastPath.current) {
      lastPath.current = location.pathname;
      if (menuOpen) setMenuOpen(false);
    }
  }, [location.pathname, menuOpen, setMenuOpen]);
  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [menuOpen, setMenuOpen]);
}

/** Compact sticky header for inner pages. */
export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  useCloseMenuOnRouteChange(menuOpen, setMenuOpen);

  return (
    <header className="sticky top-0 z-40 border-b border-bark/30 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2.5 md:px-6">
        <Logo />
        <DesktopNav />
        <button
          type="button"
          className="rounded-lg p-2.5 text-bark hover:bg-mist lg:hidden"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            {menuOpen ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>
      {menuOpen && (
        <div className="max-h-[70vh] overflow-y-auto border-t border-bark/20 bg-white px-4 pb-6 lg:hidden">
          <MobileNav onNavigate={() => setMenuOpen(false)} />
        </div>
      )}
    </header>
  );
}

/**
 * Homepage masthead (master spec sections 1-2): large centred logo with
 * generous whitespace, then the main navigation sitting between two thin
 * warm tan-chocolate horizontal lines.
 */
export function HomeMasthead() {
  const [menuOpen, setMenuOpen] = useState(false);
  useCloseMenuOnRouteChange(menuOpen, setMenuOpen);

  return (
    <header className="bg-white">
      <div className="mx-auto max-w-7xl px-4 pb-8 pt-10 text-center md:pb-10 md:pt-14">
        <Logo className="h-28 w-auto md:h-36" />
      </div>
      <div className="hidden border-y border-bark/40 lg:block">
        <div className="mx-auto max-w-7xl px-6">
          <DesktopNav centered />
        </div>
      </div>
      <div className="border-y border-bark/40 lg:hidden">
        <div className="flex justify-center py-1.5">
          <button
            type="button"
            className="rounded-lg p-2.5 text-bark hover:bg-mist"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              {menuOpen ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
        {menuOpen && (
          <div className="max-h-[70vh] overflow-y-auto border-t border-bark/20 bg-white px-4 pb-6">
            <MobileNav onNavigate={() => setMenuOpen(false)} />
          </div>
        )}
      </div>
    </header>
  );
}

const exploreLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about-us' },
  { label: 'Puppies', path: '/puppies' },
  { label: 'Our Dogs', path: '/our-dogs' },
  { label: 'Cavoodles', path: '/cavoodles' },
  { label: 'Training', path: '/training' },
  { label: 'Doghouse Deli', path: '/doghouse-deli' },
  { label: 'Resources', path: '/resources' },
];

const helpfulLinks = [
  { label: 'Available Puppies', path: '/puppies/available-puppies' },
  { label: 'Planned & Upcoming Litters', path: '/puppies/planned-litters' },
  { label: 'Puppy Process & Applying', path: '/puppies/process-applying' },
  { label: 'Master Waitlist', path: '/puppies/master-waitlist' },
  { label: 'Guardian Homes', path: '/about-us/guardian-homes' },
  { label: 'Frequently Asked Questions', path: '/resources/faq' },
  { label: 'Contact Us', path: '/resources/contact-us' },
];

function SocialIcons() {
  const iconClass =
    'flex h-11 w-11 items-center justify-center rounded-full bg-white text-bark transition hover:bg-brand hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand';
  return (
    <div className="flex gap-3">
      <a
        href={siteConfig.socials.facebook}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="The Doghouse QLD on Facebook"
        className={iconClass}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.9.3-1.5 1.6-1.5h1.3V4.9c-.6-.1-1.4-.2-2.2-.2-2.2 0-3.7 1.3-3.7 3.8V11H8v3h2.5v7h3z" />
        </svg>
      </a>
      <a
        href={siteConfig.socials.instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="The Doghouse QLD on Instagram"
        className={iconClass}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          <rect x="4" y="4" width="16" height="16" rx="4.5" />
          <circle cx="12" cy="12" r="3.6" />
          <circle cx="17" cy="7" r="1.3" fill="currentColor" stroke="none" />
        </svg>
      </a>
    </div>
  );
}

/** Global footer: pale teal background, Aptos throughout (master spec section 20). */
export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-16 bg-paleteal text-bark">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-2 lg:grid-cols-4 md:px-6">
        <div>
          <img src={asset('/images/logo.png')} alt="The Doghouse QLD" className="h-16 w-auto" />
          <p className="mt-4 text-xl font-bold">
            Thoughtfully bred. Beautifully raised.
          </p>
          <p className="mt-2 text-sm leading-relaxed">
            Specialist multi-generational Cavoodle breeder in Queensland, Australia.
          </p>
          <p className="mt-4 text-sm font-semibold">The Doghouse QLD</p>
          <p className="text-sm">Caboolture, Queensland<br />Australia</p>
        </div>
        <nav aria-label="Explore">
          <h2 className="text-lg font-bold">Explore</h2>
          <ul className="mt-4 grid gap-2.5">
            {exploreLinks.map((l) => (
              <li key={l.path}>
                <Link to={l.path} className="text-sm transition hover:text-branddark hover:underline underline-offset-4">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Helpful links">
          <h2 className="text-lg font-bold">Helpful Links</h2>
          <ul className="mt-4 grid gap-2.5">
            {helpfulLinks.map((l) => (
              <li key={l.path}>
                <Link to={l.path} className="text-sm transition hover:text-branddark hover:underline underline-offset-4">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h2 className="text-lg font-bold">
            Follow The Doghouse
          </h2>
          <div className="mt-4">
            <SocialIcons />
          </div>
          <div className="mt-6">
            <CTAButton to="/resources/contact-us">Contact Us</CTAButton>
          </div>
        </div>
      </div>
      <div className="border-t border-bark/20">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-5 text-xs md:flex-row md:px-6">
          <p>© {year} The Doghouse QLD. All rights reserved.</p>
          <div>
            <p className="mb-2 text-center font-bold md:text-right">
              Legal
            </p>
            <div className="flex gap-5">
              <Link to="/privacy-policy" className="transition hover:text-branddark hover:underline underline-offset-4">
                Privacy Policy
              </Link>
              <Link to="/terms-and-conditions" className="transition hover:text-branddark hover:underline underline-offset-4">
                Terms &amp; Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
