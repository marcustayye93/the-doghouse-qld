import { Link } from 'react-router-dom';
import { asset, PageHero, ReadMore, usePageMeta } from '../../components/ui';

const ilink =
  'font-semibold text-branddark underline decoration-brand/40 underline-offset-4 hover:decoration-brand';

export default function Training() {
  usePageMeta(
    'Cavoodle Training',
    'A Cavoodle-specific training program is currently being developed by The Doghouse QLD for Cavoodle families everywhere, with a focus on confident, well-mannered family companions.'
  );
  return (
    <main>
      <PageHero
        title="Cavoodle Training"
        image={asset("/images/photos/pup-held-outdoors.jpg")}
        imageAlt="Cavoodle puppy held outdoors with a person"
        intro={
          <>
            <h2>Something special is coming...</h2>
            <p>
              We are currently developing a comprehensive training program created specifically with
              the Cavoodle in mind.
            </p>
            <p>
              While there are many wonderful general dog training programs available, Cavoodles have
              their own wonderful combination of intelligence, sensitivity, affection and
              personality. Our goal is to create a practical training program that understands the
              breed and helps families build confident, well-mannered dogs who are a pleasure to
              share everyday life with.
            </p>
            <p>
              Most importantly, this program will be for all Cavoodles. You won&apos;t need to have
              a Doghouse puppy to join us.
            </p>
          </>
        }
      />
      <section className="mx-auto max-w-4xl px-5 pb-16">
        <div className="prose-dog">
          <ReadMore id="training-read-more" summary={null}>
            <h2>Training with generations of experience behind it</h2>
            <p>My love of dogs and training started long before The Doghouse QLD.</p>
            <p>
              Growing up, I watched and learnt from my dad as he trained German Shorthaired
              Pointers, and those early experiences helped shape my understanding of dogs, their
              behaviour and just how much can be achieved through patient, consistent training.
            </p>
            <p>
              Over the years, my own experience raising, living with and training dogs has continued
              to build on that foundation. Today, working with Cavoodles every day has given me an
              even deeper appreciation of their intelligence, sensitivity and wonderfully individual
              personalities.
            </p>
            <p>
              The training program we are developing will bring those years of experience together
              with what we have learnt specifically from raising and working with Cavoodles.
            </p>

            <h2>Built around the Cavoodle</h2>
            <p>
              This won&apos;t simply be a general puppy training course with the word
              &ldquo;Cavoodle&rdquo; added to the title.
            </p>
            <p>
              Our aim is to develop a customised training program designed around the
              characteristics we so often see in Cavoodles and the things that matter most when
              raising them as family companions.
            </p>
            <p>We want training to extend beyond simply teaching commands.</p>
            <p>
              A beautifully trained family dog also needs to learn how to settle, develop
              confidence, cope with frustration, walk appropriately, listen around distractions,
              spend time independently and understand what is expected of them in everyday life.
            </p>
            <p>
              The program will also build on many of the foundations we already introduce to
              Doghouse puppies through{' '}
              <Link to="/puppies/doghouse-method" className={ilink}>
                The Doghouse Method&trade;
              </Link>{' '}
              during their first eight weeks.
            </p>
            <p>
              For families taking home a Doghouse puppy, this will create a natural pathway from
              the early learning their puppy receives with us into the next stage of training at
              home.
            </p>
            <p>
              For families whose Cavoodle comes from another breeder, the program will provide the
              same opportunity to work through a training approach developed specifically with
              Cavoodles in mind.
            </p>

            <h2>For Cavoodles everywhere</h2>
            <p>
              Although the program grows from our experience raising Doghouse Cavoodles, it is being
              created for Cavoodle families everywhere.
            </p>
            <p>
              Whether your Cavoodle comes from The Doghouse QLD or somewhere else entirely, you will
              be welcome.
            </p>
            <p>
              Ultimately, we want to help families understand their Cavoodle, communicate with them
              clearly and build the skills that help a clever little puppy grow into a confident,
              well-rounded and enjoyable family companion.
            </p>

            <h2>Coming soon</h2>
            <p>
              We&apos;re taking our time developing this program because we want it to be genuinely
              useful, practical and worthy of the families who choose to use it.
            </p>
            <p>
              The Doghouse QLD Cavoodle Training Program is currently in development and is not yet
              available.
            </p>
            <p>More information will be added here as the program gets closer to launch.</p>
          </ReadMore>

          <p className="mt-6 text-sm">
            <Link to="/puppies/first-eight-weeks" className={ilink}>
              The First Eight Weeks
            </Link>
          </p>
        </div>

      </section>
    </main>
  );
}
