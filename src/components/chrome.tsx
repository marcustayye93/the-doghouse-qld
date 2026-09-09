import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { navigation } from '../nav';
import { siteConfig } from '../config';
import { asset } from './ui';

function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link to="/" aria-label="The Doghouse QLD - home" className="shrink-0">
      <img
        src={asset("/images/logo.png")}
        alt="The Doghouse QLD"
        className={compact ? 'h-12 w-auto' : 'h-14 w-auto md:h-16'}
      />
    </Link>
  );
}

function DesktopNav() {
  return (
    <nav aria-label="Main navigation" className="hidden lg:block">
      <ul className="flex items-center gap-1">
        {navigation.map((item) => (
          <li key={item.path} className="group relative">
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `block whitespace-nowrap rounded-lg px-3 py-2.5 text-[13px] font-semibold uppercase tracking-wide transition ${
                  isActive ? 'text-branddark' : 'text-ink hover:text-branddark'
                }`
              }
            >
              {item.label}
            </NavLink>
            {item.children && (
              <div className="invisible absolute left-0 top-full z-50 w-64 translate-y-1 pt-1 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                <ul className="overflow-hidden rounded-xl border border-brand/10 bg-white py-2 shadow-xl">
                  {item.children.map((child) => (
                    <li key={child.path}>
                      <Link
                        to={child.path}
                        className="block px-5 py-2.5 text-sm text-ink transition hover:bg-mist hover:text-branddark"
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
                  className="flex w-full items-center justify-between px-2 py-3.5 text-left text-sm font-bold uppercase tracking-wide text-ink"
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
                        {item.label} overview
                      </Link>
                    </li>
                    {item.children.map((child) => (
                      <li key={child.path}>
                        <Link
                          to={child.path}
                          onClick={onNavigate}
                          className="block py-2 text-sm text-ink/90"
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
                className="block px-2 py-3.5 text-sm font-bold uppercase tracking-wide text-ink"
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

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Close the mobile menu whenever the route changes.
  const [lastPath, setLastPath] = useState(location.pathname);
  if (location.pathname !== lastPath) {
    setLastPath(location.pathname);
    if (menuOpen) setMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-40 border-b border-brand/10 bg-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2.5 md:px-6">
        <Logo />
        <DesktopNav />
        <button
          type="button"
          className="rounded-lg p-2.5 text-ink hover:bg-mist lg:hidden"
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
        <div className="max-h-[70vh] overflow-y-auto border-t border-brand/10 bg-cream px-4 pb-6 lg:hidden">
          <MobileNav onNavigate={() => setMenuOpen(false)} />
        </div>
      )}
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
    'flex h-11 w-11 items-center justify-center rounded-full bg-brand/10 text-branddark transition hover:bg-brand hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand';
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

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-16 bg-deep text-cream/90">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-2 lg:grid-cols-4 md:px-6">
        <div>
          <img src={asset("/images/logo.png")} alt="The Doghouse QLD" className="h-16 w-auto" />
          <p className="mt-4 font-display text-2xl font-bold text-white">
            Thoughtfully bred. Beautifully raised.
          </p>
          <p className="mt-2 text-sm leading-relaxed">
            Specialist multi-generational Cavoodle breeder in Queensland, Australia.
          </p>
          <p className="mt-4 text-sm font-semibold text-white">The Doghouse QLD</p>
          <p className="text-sm">Caboolture, Queensland<br />Australia</p>
        </div>
        <nav aria-label="Explore">
          <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-white">Explore</h2>
          <ul className="mt-4 grid gap-2.5">
            {exploreLinks.map((l) => (
              <li key={l.path}>
                <Link to={l.path} className="text-sm transition hover:text-white hover:underline underline-offset-4">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Helpful links">
          <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-white">Helpful Links</h2>
          <ul className="mt-4 grid gap-2.5">
            {helpfulLinks.map((l) => (
              <li key={l.path}>
                <Link to={l.path} className="text-sm transition hover:text-white hover:underline underline-offset-4">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-white">
            Follow The Doghouse
          </h2>
          <div className="mt-4">
            <SocialIcons />
          </div>
          <Link
            to="/resources/contact-us"
            className="mt-6 inline-block rounded-xl bg-brand px-6 py-2.5 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-branddark"
          >
            Contact Us
          </Link>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-5 text-xs md:flex-row md:px-6">
          <p>© {year} The Doghouse QLD. All rights reserved.</p>
          <div className="flex gap-5">
            <Link to="/privacy-policy" className="transition hover:text-white hover:underline underline-offset-4">
              Privacy Policy
            </Link>
            <Link to="/terms-and-conditions" className="transition hover:text-white hover:underline underline-offset-4">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
