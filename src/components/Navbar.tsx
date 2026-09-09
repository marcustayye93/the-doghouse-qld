import { useState } from 'react'
import { RIGHTPAW_URL } from './shared'

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#method', label: 'The Method' },
  { href: '#health', label: 'Health' },
  { href: '#puppies', label: 'Puppies' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2.5 sm:px-6">
        <a href="#top" className="flex items-center">
          <img
            src="/images/logo.png"
            alt="The Doghouse Queensland — Theodore Cavoodles"
            className="h-14 w-auto rounded-lg"
          />
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-pine hover:text-ink">
              {l.label}
            </a>
          ))}
          <a
            href={RIGHTPAW_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-branddark"
          >
            Enquire
          </a>
        </nav>

        <button
          className="rounded-lg p-2 text-ink md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-ink/10 bg-cream px-4 py-3 md:hidden">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-2.5 text-sm font-medium text-pine hover:bg-mist"
            >
              {l.label}
            </a>
          ))}
          <a
            href={RIGHTPAW_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-2 block rounded-full bg-brand px-5 py-2.5 text-center text-sm font-semibold text-white"
          >
            Enquire
          </a>
        </nav>
      )}
    </header>
  )
}
