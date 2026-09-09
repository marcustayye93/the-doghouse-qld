import type { ReactNode } from 'react';
import { asset, usePageMeta, PageHero, CTAButton, PawDivider, SquareImage } from '../../components/ui';

/** CTAButton styling for links that include a hash anchor (native navigation). */
function AnchorCTA({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-8 py-3.5 text-base font-bold uppercase tracking-wide text-white shadow-md transition hover:bg-branddark focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
    >
      {children}
      <span aria-hidden="true">›</span>
    </a>
  );
}

export default function AvailablePuppies() {
  usePageMeta(
    'Available Puppies',
    'Meet the Doghouse Cavoodle puppies currently looking for their families, and learn how our thoughtful matching process works.'
  );
  return (
    <main>
      <PageHero
        title="Available Puppies"
        eyebrow="Puppies"
        image={asset("/images/photos/pup-yellow-bandana.jpg")}
        imageAlt="Cavoodle puppy wearing a yellow bandana"
        intro={
          <>
            <p>
              Finding the right puppy is about so much more than choosing the cutest little face.
              Every Doghouse puppy is an individual, with their own personality, energy level,
              confidence and way of interacting with the world.
            </p>
            <p>
              This is where you can meet the Doghouse puppies currently looking for their
              families. You can learn a little about each puppy, see plenty of gorgeous photos
              and, if someone captures your heart, take the next step to find out whether they
              might be the right fit for your family.
            </p>
            <p>
              We don&apos;t always have puppies available, and that&apos;s perfectly normal. Our
              litters are planned thoughtfully and some puppies may already have families waiting
              for them. If there are no puppies currently available, you can still explore
              what&apos;s happening at The Doghouse and join our free Master Waitlist to hear about
              future litters and availability.
            </p>
          </>
        }
      />
      <section className="mx-auto max-w-4xl px-5 pb-16">
        <div className="prose-dog">
          {/* OWNER: Individual available puppy profiles (name, sex, date of birth, colour and markings, coat, expected adult size, dam, sire, description, status, price, photographs, optional video) to be supplied by The Doghouse QLD. No puppy details have been invented. */}
          <h2>Meet Our Available Puppies</h2>
          <div className="rounded-2xl border border-brand/15 bg-white p-8 text-center shadow-sm md:p-10">
            <div className="mx-auto max-w-sm">
              <SquareImage src={asset("/images/photos/basket-pups.jpg")} alt="Basket of Cavoodle puppies" />
            </div>
            <h3 className="!mt-6 font-display !text-4xl font-bold text-deep">
              No Puppies Currently Available
            </h3>
            <p className="mx-auto mt-3 max-w-xl leading-relaxed text-ink/80">
              We don&apos;t currently have any Doghouse puppies looking for their families, but
              there are always exciting things happening behind the scenes.
            </p>
            <p className="mx-auto mt-3 max-w-xl leading-relaxed text-ink/80">
              You can meet our Current Litters, see what we have planned for the months ahead, or
              join our free Master Waitlist to hear about future litters and puppy availability.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <CTAButton to="/puppies/current-litters">View Current Litters</CTAButton>
              <CTAButton to="/puppies/planned-litters">View Upcoming Litters</CTAButton>
              <CTAButton to="/puppies/master-waitlist">Join the Master Waitlist</CTAButton>
            </div>
          </div>

          <h2>Understanding Puppy Status</h2>
          <h3>Available</h3>
          <p>This puppy is currently open to enquiries from suitable families.</p>
          <h3>Allocated</h3>
          <p>This puppy is currently allocated to a family and is no longer open to general enquiries.</p>
          <h3>Placed</h3>
          <p>This puppy has found their family.</p>

          <h2>Interested in One of Our Puppies?</h2>
          <p>
            Seeing a puppy you love is the beginning of the conversation rather than an automatic
            purchase.
          </p>
          <p>
            Our puppies are bred to become much-loved family companions, and finding the right home
            for each puppy is very important to us. We want to learn about your family, lifestyle,
            home and what you are hoping for in a puppy so we can consider whether the puppy you
            have fallen in love with may also be a good fit for you.
          </p>
          <p>
            If you haven&apos;t already completed our Doghouse Puppy Application, you will be asked
            to do so when you enquire.
          </p>
          <p>
            <AnchorCTA href={asset("/puppies/process-applying#doghouse-application")}>
              Apply for a Doghouse Puppy
            </AnchorCTA>
          </p>

          <h2>Meeting Your Puppy</h2>
          <p>
            Once we have received your application and there is a puppy who may be suitable for
            your family, we can continue the conversation and discuss the next steps.
          </p>
          <p>
            Families who are able to travel to us in Caboolture may be able to arrange a visit at
            the appropriate stage.
          </p>
          <p>
            For interstate families or those who cannot reasonably visit, we can arrange a
            FaceTime call so you can meet the puppy and have a chat with us.
          </p>
          <p>
            Interstate puppy transport is also possible where appropriate, with transport
            organised and paid for by the purchaser.
          </p>

          <h2>Before Your Puppy Comes Home</h2>
          <p>
            Before leaving The Doghouse, our puppies receive their first vaccination, microchip
            and veterinary health examination.
          </p>
          <p>
            Our puppies generally leave us from eight weeks of age, although there may
            occasionally be circumstances where we feel an individual puppy would benefit from
            staying with us a little longer.
          </p>
          <p>
            Our puppy families also receive a 10-day veterinary health confirmation period and a
            2-year genetic health guarantee, subject to the terms of our Puppy Sale Agreement.
          </p>
          <p>
            <CTAButton to="/puppies/process-applying">Learn More About Our Puppy Process</CTAButton>
          </p>
        </div>
        <PawDivider />
      </section>
    </main>
  );
}
