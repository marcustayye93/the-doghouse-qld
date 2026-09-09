import { asset, usePageMeta, PageHero, CTAButton, PawDivider } from '../../components/ui';

export default function DoghouseMethod() {
  usePageMeta(
    'The Doghouse Method™',
    'Discover The Doghouse Method™, the thoughtful puppy-raising approach behind The Doghouse QLD.'
  );
  return (
    <main>
      <PageHero
        title="The Doghouse Method™"
        eyebrow="Puppies"
        image={asset("/images/photos/enrichment-ball-pit.jpg")}
        imageAlt="Cavoodle puppy playing in a ball pit enrichment activity"
        intro={
          <>
            <p>
              Discover the thoughtful puppy-raising approach behind The Doghouse QLD, where early
              learning isn&apos;t simply about exposure. We expose, observe, respond and help each
              puppy build confidence at their own pace.
            </p>
          </>
        }
      />
      <section className="mx-auto max-w-4xl px-5 pb-16">
        <div className="prose-dog">
          {/* OWNER: Full approved The Doghouse Method™ page content to be supplied by The Doghouse QLD. */}
          <div className="rounded-2xl border border-brand/15 bg-mist/60 p-8 text-center md:p-10">
            <h2 className="!mt-0">The Doghouse Method™</h2>
            <p className="mx-auto max-w-xl">Details to be supplied by The Doghouse QLD.</p>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <CTAButton to="/puppies/first-eight-weeks">The First Eight Weeks</CTAButton>
            <CTAButton to="/puppies/matching-temperament">Puppy Matching &amp; Temperament</CTAButton>
          </div>
        </div>
        <PawDivider />
      </section>
    </main>
  );
}
