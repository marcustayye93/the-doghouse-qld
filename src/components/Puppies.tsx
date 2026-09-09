import { Paw, SectionHeading, RIGHTPAW_URL } from './shared'

const LITTERS = [
  {
    name: 'Speckles & Spots puppies',
    detail: 'Born 8 Jul 2026 · Ready to leave 2 Sep 2026',
    status: 'All puppies allocated',
  },
  {
    name: 'Midsummer Night\u2019s Dream Fairies',
    detail: 'Born 27 Aug 2026 · Ready to leave 22 Oct 2026',
    status: 'All puppies allocated',
  },
]

export default function Puppies() {
  return (
    <section id="puppies" className="bg-mist/60 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="Available puppies" title="Our litters">
          Demand is high and litters are small — the waitlist is the best way in.
        </SectionHeading>

        <div className="mx-auto mb-8 max-w-2xl rounded-3xl border-2 border-dashed border-brand/50 bg-cream px-6 py-5 text-center">
          <p className="font-display text-4xl font-bold text-ink">
            All puppies are currently allocated
          </p>
          <p className="mt-1 text-pine">
            There are no future litter plans announced yet — join the waitlist to be first to
            know.
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-5 sm:grid-cols-2">
          {LITTERS.map((l) => (
            <div key={l.name} className="rounded-3xl border border-ink/10 bg-white/70 p-7 shadow-sm">
              <Paw className="mb-3 h-7 w-7 text-brand" />
              <h3 className="font-display text-4xl font-bold text-ink">{l.name}</h3>
              <p className="mt-1 text-sm text-pine">{l.detail}</p>
              <span className="mt-4 inline-block rounded-full bg-ink/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-pine">
                {l.status}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={RIGHTPAW_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-block rounded-full bg-brand px-8 py-3.5 font-semibold text-white transition hover:bg-branddark"
          >
            Join the waitlist
          </a>
          <p className="mt-3 text-sm text-pine">
            Enquiries and waitlist via our RightPaw profile.
          </p>
        </div>
      </div>
    </section>
  )
}
