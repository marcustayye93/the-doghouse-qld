import { Link } from 'react-router-dom';
import { asset, usePageMeta, PageHero, CTAButton, PawDivider } from '../../components/ui';

export default function PuppyPricing() {
  usePageMeta(
    'Puppy Pricing',
    'How Doghouse Cavoodle puppy pricing works: from approximately $4,500 upwards, equal pricing within a litter, and the $1,000 holding fee.'
  );
  return (
    <main>
      <PageHero
        title="Puppy Pricing"
        eyebrow="Puppies"
        image={asset("/images/photos/pup-blue-bandana.jpg")}
        imageAlt="Cavoodle puppy wearing a blue bandana"
        intro={
          <>
            <p>
              We understand that price is an important part of planning to welcome a puppy into your
              family, and we want our pricing to be as clear and straightforward as possible.
            </p>
            <p>
              Doghouse Cavoodle puppies are generally priced from approximately $4,500 upwards, with
              the price of each litter determined by the costs involved in thoughtfully producing and
              raising that particular litter.
            </p>
            <p>
              All puppies within the same litter are priced equally. We don&apos;t place a higher
              price on one puppy within a litter because of their sex, colour, markings or
              appearance.
            </p>
            <p>
              The current price of any puppy looking for their family will always be clearly
              displayed on their individual profile on our Available Puppies page.
            </p>
          </>
        }
      />
      <section className="mx-auto max-w-4xl px-5 pb-16">
        <div className="prose-dog">
          <h2>Why Can Pricing Vary Between Litters?</h2>
          <p>Not every litter has exactly the same costs behind it.</p>
          <p>
            The cost of producing a litter can vary depending on the breeding itself and the
            veterinary, reproductive and other costs involved in bringing that particular litter
            into the world and raising the puppies through their first eight weeks.
          </p>
          <p>For this reason, we don&apos;t publish one fixed price that applies to every Doghouse puppy.</p>
          <p>
            Instead, our puppies are generally priced from approximately $4,500 upwards, and the
            price applicable to an available puppy will be clearly shown before a family decides
            whether they would like to proceed.
          </p>

          <h2>The Same Price Across the Litter</h2>
          <p>Within an individual litter, our puppies are priced equally.</p>
          <p>
            We don&apos;t believe one puppy should suddenly become more expensive than their
            littermates because they happen to have particularly desirable markings, a popular
            colour or a certain sex.
          </p>
          <p>
            If puppies from a litter become available, the same litter price applies to each of
            them.
          </p>

          <h2>The $1,000 Holding Fee</h2>
          <p>
            Once you and The Doghouse QLD have agreed to proceed with a particular puppy, a $1,000
            holding fee is required to allocate that puppy to your family.
          </p>
          <p>
            The holding fee forms part of the puppy&apos;s total purchase price. It is not an
            additional $1,000 on top of the advertised puppy price.
          </p>
          <p>
            Once the holding fee has been received, your puppy is marked as Allocated and is no
            longer offered to other families while the final stages of their puppy journey are
            completed.
          </p>
          <p>
            The full conditions relating to holding fees, payments and refunds are provided as part
            of the puppy purchase process and within our Puppy Sale Agreement.
          </p>
          <p>
            <Link
              to="/puppies/process-applying"
              className="font-semibold text-branddark underline decoration-brand/40 underline-offset-4 hover:decoration-brand"
            >
              Learn About Our Puppy Process
            </Link>
          </p>

          <h2>What Does Your Puppy Receive Before Going Home?</h2>
          <p>
            Before leaving The Doghouse, our puppies receive their first puppy vaccination,
            microchip and veterinary health examination.
          </p>
          <p>
            Our puppies are also raised through those important first weeks with the care,
            development, early learning, socialisation, desensitisation, grooming preparation and
            individual observation that form part of life at The Doghouse QLD.
          </p>
          <p>
            Our puppy families receive a 10-day veterinary health confirmation period and a 2-year
            genetic health guarantee, subject to the terms and conditions contained within our Puppy
            Sale Agreement.
          </p>
          <p>
            <Link
              to="/puppies/doghouse-method"
              className="font-semibold text-branddark underline decoration-brand/40 underline-offset-4 hover:decoration-brand"
            >
              The Doghouse Method™
            </Link>
            {' · '}
            <Link
              to="/puppies/first-eight-weeks"
              className="font-semibold text-branddark underline decoration-brand/40 underline-offset-4 hover:decoration-brand"
            >
              The First Eight Weeks
            </Link>
          </p>

          <h2>Interstate Families</h2>
          <p>We are happy to work with suitable families interstate.</p>
          <p>
            Where transport is required, the cost of transporting the puppy to their new family is
            separate from the puppy purchase price and is organised and paid for by the purchaser.
          </p>

          <h2>Looking for a Doghouse Puppy?</h2>
          <p>
            For the current price of puppies presently looking for their families, visit our
            Available Puppies page.
          </p>
          <p>
            <CTAButton to="/puppies/available-puppies">View Available Puppies</CTAButton>
          </p>
          <p>
            If there isn&apos;t currently a puppy available or you&apos;re planning for the future,
            you can join our free Master Waitlist to hear about future litter announcements and
            puppy availability.
          </p>
          <p>There is no fee or deposit required to join the Master Waitlist.</p>
          <p>
            <CTAButton to="/puppies/master-waitlist">Join the Master Waitlist</CTAButton>
          </p>
        </div>
        <PawDivider />
      </section>
    </main>
  );
}
