import { usePageMeta, PageHero, CTAButton, PawDivider } from '../../components/ui';

export default function FirstEightWeeks() {
  usePageMeta(
    'The First Eight Weeks',
    'From tiny newborns to curious puppies ready for their families: the first eight weeks at The Doghouse QLD.'
  );
  return (
    <main>
      <PageHero
        title="The First Eight Weeks"
        eyebrow="Puppies"
        image="/images/photos/pup-in-hands.jpg"
        imageAlt="Newborn Cavoodle puppy held gently in hands"
        intro={
          <>
            <p>
              From tiny newborns to curious little puppies ready for their families, discover what
              happens during the first eight weeks of life at The Doghouse.
            </p>
          </>
        }
      />
      <section className="mx-auto max-w-4xl px-5 pb-16">
        <div className="prose-dog">
          {/* OWNER: Full approved The First Eight Weeks page content to be supplied by The Doghouse QLD. */}
          <div className="rounded-2xl border border-brand/15 bg-mist/60 p-8 text-center md:p-10">
            <h2 className="!mt-0">The First Eight Weeks</h2>
            <p className="mx-auto max-w-xl">Details to be supplied by The Doghouse QLD.</p>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <CTAButton to="/puppies/doghouse-method">The Doghouse Method™</CTAButton>
            <CTAButton to="/puppies/matching-temperament">Puppy Matching &amp; Temperament</CTAButton>
          </div>
        </div>
        <PawDivider />
      </section>
    </main>
  );
}
