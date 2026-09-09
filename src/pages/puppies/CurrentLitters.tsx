import { asset, usePageMeta, PageHero, CTAButton, PawDivider } from '../../components/ui';

export default function CurrentLitters() {
  usePageMeta(
    'Current Litters',
    'Meet our current Doghouse litters and follow their journey through those precious first weeks of life.'
  );
  return (
    <main>
      <PageHero
        title="Current Litters"
        eyebrow="Puppies"
        image={asset("/images/photos/basket-pups-2.jpg")}
        imageAlt="Basket of young Cavoodle puppies"
        intro={
          <>
            <p>
              Meet our current Doghouse litters and follow their journey as our puppies grow,
              develop and experience those precious first weeks of life.
            </p>
          </>
        }
      />
      <section className="mx-auto max-w-4xl px-5 pb-16">
        <div className="prose-dog">
          {/* OWNER: Current litter profiles (dam, sire, whelp date, puppy details, photographs and journey updates) to be supplied by The Doghouse QLD. No litter information has been invented. */}
          <div className="rounded-2xl border border-brand/15 bg-mist/60 p-8 text-center md:p-10">
            <h2 className="!mt-0">Our Current Litters</h2>
            <p className="mx-auto max-w-xl">Details to be supplied by The Doghouse QLD.</p>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <CTAButton to="/puppies/available-puppies">View Available Puppies</CTAButton>
            <CTAButton to="/puppies/planned-litters">View Upcoming Litters</CTAButton>
            <CTAButton to="/puppies/first-eight-weeks">The First Eight Weeks</CTAButton>
          </div>
        </div>
        <PawDivider />
      </section>
    </main>
  );
}
