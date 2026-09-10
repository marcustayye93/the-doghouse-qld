import { asset, usePageMeta, PageHero, ReadMore, CTAButton, PawDivider, SquareImage } from '../../components/ui';

export default function PlannedLitters() {
  usePageMeta(
    'Planned & Upcoming Litters',
    'See the Doghouse litters we are planning or expecting, and learn what may be coming up at The Doghouse QLD.'
  );
  return (
    <main>
      <PageHero
        title="Planned & Upcoming Litters"
        eyebrow="Puppies"
        image={asset("/images/photos/pup-sitting-3.jpg")}
        imageAlt="Cavoodle puppy sitting"
        intro={
          <>
            <p>There is always something exciting on the horizon at The Doghouse QLD.</p>
            <p>
              Our Planned &amp; Upcoming Litters page is where you can see the litters we are
              hoping for in the months ahead, including confirmed pregnancies as well as pairings
              we are thoughtfully planning for the future.
            </p>
            <p>
              Breeding, however, is never completely predictable. Mother Nature ultimately has the
              final say, so planned pairings, timing, pregnancy and the puppies a litter may
              produce can never be guaranteed. This page is designed to give our families an
              indication of what we are working towards while allowing our plans to change when
              the dogs, their health or circumstances tell us they should.
            </p>
          </>
        }
      />
      <section className="mx-auto max-w-4xl px-5 pb-16">
        <div className="prose-dog">
          <ReadMore id="planned-litters-more" summary={<></>}>
            <h2>A Little Note About Mother Nature</h2>
            <p>Breeding plans are just that: plans.</p>
            <p>
              While we carefully consider the dogs we hope to pair and the timing of future
              litters, there are many things we cannot control. Seasons don&apos;t always arrive
              when expected, a mating or insemination may not result in pregnancy, litter sizes can
              vary, and occasionally we may decide that a planned pairing should change.
            </p>
            <p>
              The health and wellbeing of our dogs will always be more important than following a
              published breeding calendar.
            </p>
            <p>
              For that reason, all planned pairings, expected dates, litter sizes, colours, coats
              and estimated puppy sizes shown on this page should be considered indicative rather
              than guaranteed.
            </p>

            <h2>What Might a Litter Produce?</h2>
            <p>
              While genetics can give us useful information about the possibilities within a
              litter, puppies still have a wonderful way of surprising us.
            </p>
            <p>
              Parent size, genetics, coat traits, colours and markings can help us understand what
              a pairing may potentially produce, but we cannot promise the number, sex, exact
              colour, markings, coat or eventual adult size of puppies before they are born.
            </p>
            <p>
              Where we provide predictions for an upcoming or planned litter, they are our best
              estimate based on the information available to us rather than a guarantee.
            </p>
          </ReadMore>

          {/* OWNER: Upcoming (Pregnancy Confirmed) and Planned (Planned Pairing) litter profiles to be supplied by The Doghouse QLD. No pairings, dates or predictions have been invented. */}
          <div className="rounded-2xl border border-brand/15 bg-white p-8 text-center shadow-sm md:p-10">
            <div className="mx-auto max-w-sm">
              <SquareImage
                src={asset("/images/photos/basket-pups.jpg")}
                alt="Basket of Cavoodle puppies"
              />
            </div>
            <h3 className="!mt-6 font-display !text-4xl  text-brand">
              More Litters Coming in the Future
            </h3>
            <p className="mx-auto mt-3 max-w-xl font-serif leading-relaxed text-bark">
              We don&apos;t currently have any planned or upcoming litters ready to announce.
            </p>
            <p className="mx-auto mt-3 max-w-xl font-serif leading-relaxed text-bark">
              Our breeding plans are made thoughtfully and sometimes we prefer to wait until we
              are comfortable with a pairing or pregnancy before sharing the details.
            </p>
            <p className="mx-auto mt-3 max-w-xl font-serif leading-relaxed text-bark">
              You can join our free Master Waitlist to stay connected and hear about future litter
              announcements and puppy availability.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <CTAButton to="/puppies/master-waitlist">Join the Master Waitlist</CTAButton>
              <CTAButton to="/puppies/current-litters">View Current Litters</CTAButton>
            </div>
          </div>

          <h2>Interested in a Future Doghouse Puppy?</h2>
          <p>
            If one of our planned or upcoming litters catches your eye, you don&apos;t need to
            place a deposit simply to follow that litter.
          </p>
          <p>
            Our Master Waitlist is free to join and allows families to stay connected with The
            Doghouse QLD and hear about future litter announcements and puppy availability.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <CTAButton to="/puppies/master-waitlist">Join the Master Waitlist</CTAButton>
            <CTAButton to="/puppies/process-applying">Learn About Our Puppy Process</CTAButton>
          </div>
        </div>
        <PawDivider />
      </section>
    </main>
  );
}
