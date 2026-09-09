import { Paw, RIGHTPAW_URL, FACEBOOK_REVIEWS_URL } from './shared'

const BADGES = [
  { title: 'RightPaw Outstanding Breeder', sub: 'Recognised since Apr 2023' },
  { title: '100% Buyer Recommendation', sub: 'Every reviewer recommends us' },
  { title: 'RPBA Member', sub: 'Responsible Pet Breeders Australia' },
  { title: 'MDBA Registered', sub: 'Master Dog Breeders & Associates' },
]

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* decorative paws */}
      <Paw className="pointer-events-none absolute -left-8 top-16 h-40 w-40 rotate-[-18deg] text-mist" />
      <Paw className="pointer-events-none absolute -right-10 top-64 h-52 w-52 rotate-[24deg] text-mist" />
      <Paw className="pointer-events-none absolute bottom-24 left-1/3 h-24 w-24 rotate-[10deg] text-mist/70" />

      <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-14 sm:px-6 sm:pt-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-mist px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-branddark">
            <Paw className="h-4 w-4" />
            Theodore Cavoodles · Moreton Bay, Queensland
          </p>
          <h1 className="font-display text-6xl font-bold leading-[1.05] text-ink sm:text-7xl">
            Raised in our home,
            <br />
            ready for <span className="text-brand">yours</span>.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-pine">
            The Doghouse QLD is a small, home-based Cavoodle breeder run by Charmaine — the
            self-confessed crazy dog lady — raising happy, healthy, beautifully socialised
            puppies underfoot.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={RIGHTPAW_URL}
              target="_blank"
              rel="noreferrer"
              className="w-full rounded-full bg-brand px-8 py-3.5 text-center font-semibold text-white transition hover:bg-branddark sm:w-auto"
            >
              Enquire about a puppy
            </a>
            <a
              href={FACEBOOK_REVIEWS_URL}
              target="_blank"
              rel="noreferrer"
              className="w-full rounded-full border-2 border-ink/15 px-8 py-3 text-center font-semibold text-ink transition hover:border-brand/50 hover:text-branddark sm:w-auto"
            >
              Read our reviews
            </a>
          </div>
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4">
          {BADGES.map((b) => (
            <div
              key={b.title}
              className="rounded-2xl border border-ink/10 bg-white/70 px-4 py-5 text-center shadow-sm"
            >
              <Paw className="mx-auto mb-2 h-6 w-6 text-brand" />
              <p className="text-sm font-bold text-ink">{b.title}</p>
              <p className="mt-1 text-xs text-pine">{b.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
