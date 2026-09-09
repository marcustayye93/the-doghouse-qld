import { Link } from 'react-router-dom';
import { PageHero, ReadMore, usePageMeta } from '../../components/ui';
import { CheckboxField, Field, FormShell, TextArea } from '../../components/forms';

const ilink =
  'font-semibold text-branddark underline decoration-brand/40 underline-offset-4 hover:decoration-brand';

export default function Training() {
  usePageMeta(
    'Cavoodle Training',
    'A Cavoodle-specific training program is being developed by The Doghouse QLD for Cavoodle families everywhere, focused on confident, well-mannered companions.'
  );
  return (
    <main>
      <PageHero
        title="Cavoodle Training"
        image="/images/photos/pup-held-outdoors.jpg"
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

        {/*
          OWNER: The interest form below was added so visitors can register interest in the
          future training program. Its heading, labels and success message are functional
          microcopy (not from the approved docs) and should be reviewed. Per ZZZE, a dedicated
          Training mailing audience must only be created with explicit owner approval before
          this form is connected to any mailing system.
        */}
        <div id="training-interest" className="mt-12 scroll-mt-24 rounded-2xl border border-brand/15 bg-white p-6 shadow-sm md:p-8">
          <h2 className="font-display text-4xl font-bold text-deep">Register your interest</h2>
          <p className="mt-3 leading-relaxed text-ink/80">
            Leave your details and we&apos;ll let you know when there&apos;s news about the
            Doghouse QLD training program.
          </p>
          <div className="mt-6">
            <FormShell
              formName="training-interest"
              submitLabel="Register Interest"
              successHeading="Thank you!"
              successMessage="Thanks for your interest. We'll share updates about the training program as it develops."
            >
              <Field label="Your name" name="name" required placeholder="Your name" />
              <Field
                label="Email address"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
              />
              <TextArea
                label="Tell us a little about your dog (optional)"
                name="dog"
                placeholder="Optional"
                rows={3}
              />
              <CheckboxField
                required
                name="consent"
                label="Yes, I'd like to receive updates about the Doghouse QLD training program by email."
              />
            </FormShell>
          </div>
        </div>
      </section>
    </main>
  );
}
