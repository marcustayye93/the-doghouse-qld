import { Paw, SectionHeading } from './shared'

export function About() {
  return (
    <section id="about" className="bg-white/60 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="About the breeder" title="Meet Charmaine">
          The woman behind The Doghouse.
        </SectionHeading>
        <div className="mx-auto max-w-3xl space-y-5 text-lg leading-relaxed text-pine">
          <p>
            <span className="font-display text-3xl text-brand">“</span>Hi, I'm Charmaine — known
            affectionately <em>(and accurately)</em> as the crazy dog lady. I live in The
            Doghouse, literally and figuratively, and I wouldn't have it any other way.
            <span className="font-display text-3xl text-brand">”</span>
          </p>
          <p>
            By day and night she wears a lot of hats: doggy matchmaker, fertility specialist,
            birth doula, midwife, puppy wrangler — all in service of one goal. Her first
            Cavoodles brought her so much joy that she started breeding so other families could
            experience it too.
          </p>
          <p>
            Health and socialisation are where she concentrates her effort, and every puppy is
            born and raised inside the family home — surrounded from day one by the sights,
            sounds and routines of a busy household.
          </p>
        </div>
      </div>
    </section>
  )
}

const PILLARS = [
  {
    title: 'Behaviour & socialisation',
    text: 'The Doghouse Method™ — Charmaine\u2019s own puppy development framework, built on the internationally recognised Puppy Culture program and Badass Breeder curriculum, then refined through years of hands-on experience.',
  },
  {
    title: 'Health, from before birth',
    text: 'Healthy puppies begin long before birth. Comprehensive DNA screening forms the foundation of the breeding program, with the goal of giving every puppy the best opportunity for a long, healthy, happy life.',
  },
  {
    title: 'Home is where the heart is',
    text: 'Every puppy is born and raised inside the family home, right in the heart of everyday life — a natural introduction to the environment they\u2019ll thrive in with their forever family.',
  },
  {
    title: 'Everything they need to start',
    text: 'Each puppy goes home with a full puppy pack: information folder, puppy passport, vet health check, microchip and first vaccination, beginnings of potty and crate training, a seatbelt tether and a blanket carrying mum\u2019s scent.',
  },
]

export function Method() {
  return (
    <section id="method" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="How we raise them" title="The Doghouse Method™">
          Four pillars behind every puppy that leaves The Doghouse.
        </SectionHeading>
        <div className="grid gap-5 sm:grid-cols-2">
          {PILLARS.map((p) => (
            <div
              key={p.title}
              className="rounded-3xl border border-ink/10 bg-white/70 p-7 shadow-sm transition hover:shadow-md"
            >
              <Paw className="mb-4 h-8 w-8 text-brand" />
              <h3 className="font-display text-4xl font-bold text-ink">{p.title}</h3>
              <p className="mt-2 leading-relaxed text-pine">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Health() {
  return (
    <section id="health" className="bg-deep py-16 text-cream sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-honey">
            Health testing
          </p>
          <h2 className="font-display text-5xl font-bold sm:text-6xl">
            Health is never left to chance
          </h2>
          <p className="mt-4 text-cream/80">
            Comprehensive DNA screening forms the foundation of the breeding program — because
            healthy puppies begin long before birth.
          </p>
        </div>
        <div className="mx-auto grid max-w-4xl gap-5 sm:grid-cols-3">
          <div className="rounded-3xl bg-cream/10 p-7 text-center">
            <p className="font-display text-6xl font-bold text-honey">1/1</p>
            <p className="mt-2 font-semibold">Core health tests</p>
            <p className="mt-1 text-sm text-cream/70">
              Patellar luxation — the core test RightPaw recommends for Cavoodles
            </p>
          </div>
          <div className="rounded-3xl bg-cream/10 p-7 text-center">
            <p className="font-display text-6xl font-bold text-honey">12</p>
            <p className="mt-2 font-semibold">Additional tests</p>
            <p className="mt-1 text-sm text-cream/70">
              Beyond the core panel, for extra peace of mind
            </p>
          </div>
          <div className="rounded-3xl bg-cream/10 p-7 text-center">
            <p className="font-display text-6xl font-bold text-honey">100%</p>
            <p className="mt-2 font-semibold">DNA screened program</p>
            <p className="mt-1 text-sm text-cream/70">
              Screening underpins every breeding decision
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

const PACK_ITEMS = [
  'Information folder',
  'Puppy passport',
  'Full veterinary health check at 6 weeks old',
  'Microchip and first vaccination',
  "Potty training begun (with Charmaine's 'safe pup' pen system)",
  'Beginnings of crate training',
  'Full socialisation program for early development',
  'Seatbelt tether for safe travel',
  "Blanket with mum's scent for the transition home",
]

export function PuppyPack() {
  return (
    <section id="pack" className="py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHeading eyebrow="Included with every puppy" title="The puppy pack">
          Every Doghouse puppy goes home with an amazing pack of quality goodies — and a
          thorough grounding for life.
        </SectionHeading>
        <ul className="grid gap-3 sm:grid-cols-2">
          {PACK_ITEMS.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-2xl border border-ink/10 bg-white/70 px-5 py-4 shadow-sm"
            >
              <Paw className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
              <span className="text-pine">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
