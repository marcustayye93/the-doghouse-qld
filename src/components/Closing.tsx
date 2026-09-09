import { Paw, SectionHeading, RIGHTPAW_URL, FACEBOOK_URL } from './shared'

const OPTIONS = [
  {
    title: 'In-person pickup',
    text: 'Meet Charmaine in person when you collect your puppy.',
  },
  {
    title: 'Ground transport',
    text: 'Supportive of on-the-road pet transport by car or van.',
  },
  {
    title: 'Domestic flights',
    text: 'Puppies can fly to their new families anywhere in Australia.',
  },
  {
    title: 'International flights',
    text: 'International air transport supported for overseas families.',
  },
]

export function Transport() {
  return (
    <section id="transport" className="bg-white/60 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="Getting your puppy home" title="We deliver Australia-wide">
          Puppies go to families in every state — QLD, NSW, VIC, SA, WA, NT, ACT and TAS.
        </SectionHeading>
        <div className="mx-auto grid max-w-4xl gap-5 sm:grid-cols-2">
          {OPTIONS.map((o) => (
            <div
              key={o.title}
              className="flex items-start gap-4 rounded-3xl border border-ink/10 bg-cream p-6 shadow-sm"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                <Paw className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-display text-3xl font-bold text-ink">{o.title}</h3>
                <p className="mt-1 text-pine">{o.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Contact() {
  return (
    <section id="contact" className="bg-deep py-16 text-cream sm:py-24">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <Paw className="mx-auto mb-5 h-12 w-12 text-honey" />
        <h2 className="font-display text-6xl font-bold sm:text-7xl">Say hello</h2>
        <p className="mx-auto mt-4 max-w-xl text-cream/80">
          The best way to reach Charmaine is through the RightPaw profile or Facebook —
          enquiries, waitlist and puppy updates all live there.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={RIGHTPAW_URL}
            target="_blank"
            rel="noreferrer"
            className="w-full rounded-full bg-honey px-8 py-3.5 text-center font-semibold text-deep transition hover:bg-cream sm:w-auto"
          >
            Enquire via RightPaw
          </a>
          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noreferrer"
            className="w-full rounded-full border-2 border-cream/30 px-8 py-3 text-center font-semibold text-cream transition hover:border-cream/60 sm:w-auto"
          >
            Message us on Facebook
          </a>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="bg-deep pb-10 pt-2 text-center text-sm text-cream/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t border-cream/15 pt-8">
          <img
            src="/images/logo.png"
            alt="The Doghouse Queensland"
            className="mx-auto h-24 w-auto rounded-2xl"
          />
          <p className="mt-4">Theodore Cavoodles · Moreton Bay, Queensland</p>
          <p className="mt-3 text-xs">
            © {new Date().getFullYear()} The Doghouse QLD. Made with love (and muddy paw prints).
          </p>
        </div>
      </div>
    </footer>
  )
}
