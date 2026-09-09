import { Link } from 'react-router-dom';
import { usePageMeta, PageHero, ReadMore, CTAButton, PawDivider } from '../../components/ui';

export default function MatchingTemperament() {
  usePageMeta(
    'Puppy Matching & Temperament',
    'How we observe, assess and match each Doghouse puppy with the right family, through weeks of observation and temperament assessment.'
  );
  return (
    <main>
      <PageHero
        title="Puppy Matching & Temperament"
        eyebrow="Puppies"
        image="/images/photos/pup-closeup.jpg"
        imageAlt="Close-up of a Cavoodle puppy"
        intro={
          <>
            <p>Every puppy is an individual.</p>
            <p>
              Even puppies born in the same litter, raised in the same home and given the same
              opportunities can develop very different personalities. One may be adventurous and
              eager to investigate everything, another may prefer to watch before joining in, while
              another may naturally seek out people and happily settle into a cuddle.
            </p>
            <p>
              At The Doghouse QLD, we believe finding the right puppy is about looking beyond
              colour, markings and that irresistible little face. We want to understand the puppy,
              understand the family, and bring those two pieces together as thoughtfully as we can.
            </p>
            <p>
              That process begins with weeks of observation and is supported by a structured
              temperament assessment at approximately 6.5 to 7 weeks of age.
            </p>
          </>
        }
      />
      <section className="mx-auto max-w-4xl px-5 pb-16">
        <div className="prose-dog">
          <ReadMore id="matching-more" summary={<></>}>
            <h2>We Start Observing Long Before the Assessment</h2>
            <p>Getting to know a puppy doesn&apos;t begin on temperament assessment day.</p>
            <p>From the time our puppies begin interacting with the world around them, we are watching.</p>
            <p>
              As they encounter new surfaces, sounds, people, objects, environments and little
              challenges through The Doghouse Method™, we begin seeing differences in how
              individual puppies approach their world.
            </p>
            <p>Some puppies investigate immediately.</p>
            <p>Some stop and think first.</p>
            <p>Some are naturally very people-focused.</p>
            <p>Some are busy little explorers.</p>
            <p>Some may be more independent.</p>
            <p>Some are gentle and easygoing.</p>
            <p>
              Others may have plenty of enthusiasm and energy for a family who would love a more
              active companion.
            </p>
            <p>None of these characteristics automatically makes one puppy better than another.</p>
            <p>They simply help us understand who that puppy may be.</p>

            <h2>Why We Assess Temperament</h2>
            <p>
              At approximately 6.5 to 7 weeks of age, we conduct an individual temperament
              assessment with our puppies.
            </p>
            <p>The purpose isn&apos;t to pass or fail them.</p>
            <p>There is no winning puppy and no perfect score.</p>
            <p>
              Instead, the assessment gives us another opportunity to observe each puppy
              individually and see how they respond to a series of situations away from the normal
              dynamics of their litter.
            </p>
            <p>
              Depending on the puppy and assessment, we may observe things such as their
              confidence, curiosity, engagement with people, response to novelty, activity level,
              resilience and how they approach unfamiliar situations.
            </p>
            <p>The assessment provides information.</p>
            <p>It doesn&apos;t define the puppy.</p>

            <h2>One Assessment Doesn&apos;t Tell the Whole Story</h2>
            <p>A puppy is a living, developing little animal, not a set of numbers on a scorecard.</p>
            <p>That is why we never rely solely on what happens during one temperament assessment.</p>
            <p>
              A puppy may be tired. They may be particularly energetic that day. Something may
              distract them. They may respond differently in one environment than they have during
              the previous weeks.
            </p>
            <p>
              We therefore consider the assessment alongside what we have already learned about
              that puppy through everyday life.
            </p>
            <p>We have watched them play with their littermates.</p>
            <p>We have handled and cuddled them.</p>
            <p>We have watched them encounter unfamiliar things.</p>
            <p>We have seen how they respond when something surprises them.</p>
            <p>We have watched how they interact with people.</p>
            <p>
              We have seen whether they tend to charge into an experience or stand back and think
              about it first.
            </p>
            <p>The temperament assessment is another piece of the puzzle, not the entire picture.</p>

            <h2>Then We Need to Understand You</h2>
            <p>Knowing our puppies is only half of successful matching.</p>
            <p>We also need to understand the family they may be joining.</p>
            <p>
              A puppy who may be wonderful for one family isn&apos;t automatically the right puppy
              for another.
            </p>
            <p>
              That is why our puppy process includes learning more about your household, lifestyle
              and what you are hoping for in your future dog.
            </p>
            <p>
              Later in the process, our Puppy Matching Questionnaire allows us to explore this in
              more detail.
            </p>
            <p>
              We may consider things such as your household, children, existing pets, working
              arrangements, activity levels, experience with dogs, the amount of time a puppy may
              spend alone and the kind of companion you are hoping to welcome into your life.
            </p>
            <p>
              There may also be practical considerations such as your preferred puppy size, sex,
              coat or colour.
            </p>
            <p>Those preferences matter too.</p>
            <p>Our job is to consider the whole picture.</p>

            <h2>Matching Doesn&apos;t Mean Choosing for You</h2>
            <p>We don&apos;t want families to feel that they have no say in choosing their puppy.</p>
            <p>You may naturally fall in love with a particular puppy.</p>
            <p>
              Colour, markings, sex, size and appearance can absolutely form part of your
              preferences. There is nothing wrong with wanting a puppy you find beautiful.
            </p>
            <p>
              Our role is to help make sure that the puppy behind that beautiful face also looks
              like a sensible match for your family.
            </p>
            <p>Sometimes your favourite puppy may also be a wonderful temperament match.</p>
            <p>
              Sometimes we may see something that makes us want to have a conversation with you
              before you make your final decision.
            </p>
            <p>That conversation is part of the process.</p>

            <h2>When the Puppy You Love May Not Be the Best Match</h2>
            <p>
              Occasionally, what we have learned about a puppy may suggest that another puppy could
              be better suited to a family&apos;s lifestyle.
            </p>
            <p>
              For example, a particularly active, confident puppy might thrive with a family who
              enjoys an energetic lifestyle and wants a dog involved in plenty of activity.
            </p>
            <p>
              That same puppy may not be the most natural fit for a household hoping for a
              particularly quiet, relaxed companion.
            </p>
            <p>
              Likewise, a gentler or more considered puppy may suit one family beautifully while
              another family may be looking for a more outgoing little adventurer.
            </p>
            <p>These aren&apos;t rigid rules.</p>
            <p>They are conversations informed by what we have observed.</p>
            <p>If we have concerns about a match, we will explain why and talk through the options with you.</p>

            <h2>There Is No &quot;Best Puppy&quot;</h2>
            <p>This is something we believe is particularly important.</p>
            <p>Temperament assessment isn&apos;t a competition.</p>
            <p>The boldest puppy isn&apos;t automatically the best puppy.</p>
            <p>The quietest puppy isn&apos;t automatically the easiest puppy.</p>
            <p>
              The puppy with the highest or lowest result in a particular area isn&apos;t
              necessarily better or worse.
            </p>
            <p>Different homes suit different dogs.</p>
            <p>A busy family may adore a puppy with plenty of enthusiasm for life.</p>
            <p>Another family may value a puppy who tends to approach things more thoughtfully.</p>
            <p>What matters isn&apos;t finding the puppy who is supposedly &quot;best&quot;.</p>
            <p>
              It is finding the puppy whose developing characteristics appear to complement the
              family who will be raising and loving them.
            </p>

            <h2>Temperament Is Both Nature and Nurture</h2>
            <p>Temperament doesn&apos;t begin and end with the breeder.</p>
            <p>Genetics matter.</p>
            <p>Early puppy development matters.</p>
            <p>The experiences puppies have during their first weeks matter.</p>
            <p>But what happens after they leave us matters enormously too.</p>
            <p>
              Training, socialisation, boundaries, routines, independence, positive experiences and
              the relationship a puppy develops with their family will continue influencing the dog
              they become.
            </p>
            <p>A temperament assessment at seven weeks cannot predict every aspect of an adult dog&apos;s personality.</p>
            <p>And we would never pretend that it can.</p>
            <p>
              What it can do is give us useful information about the puppy in front of us at that
              stage of development.
            </p>
            <p>
              Combined with weeks of observation and a good understanding of the family, it gives
              us another valuable tool for making thoughtful placement decisions.
            </p>

            <h2>The Right Puppy for Your Family</h2>
            <p>Ultimately, puppy matching is about bringing together everything we know.</p>
            <p>What we have observed while raising the puppy.</p>
            <p>What we learn during their temperament assessment.</p>
            <p>What we know about their developing personality.</p>
            <p>What you tell us about your family.</p>
            <p>What matters to you in a puppy.</p>
            <p>And what we believe will give both puppy and family the best opportunity to thrive together.</p>
            <p>We cannot predict exactly who an eight-week-old puppy will become.</p>
            <p>But we can pay attention.</p>
            <p>We can observe.</p>
            <p>We can listen to what our puppies are showing us.</p>
            <p>
              And we can use that information to help families make a more thoughtful decision than
              choosing from a photograph alone.
            </p>
            <p>That is what puppy matching means to us.</p>
          </ReadMore>

          <p className="mt-8">
            <Link
              to="/puppies/doghouse-method"
              className="font-semibold text-branddark underline decoration-brand/40 underline-offset-4 hover:decoration-brand"
            >
              Discover The Doghouse Method™
            </Link>
          </p>

          <h2>Ready to Begin Your Doghouse Journey?</h2>
          <p>
            If you&apos;re considering welcoming a Doghouse puppy into your family, the first step
            is to tell us a little about yourself and the home you can offer.
          </p>
          <p>
            <CTAButton to="/puppies/process-applying">
              Learn About Our Puppy Process &amp; Apply
            </CTAButton>
          </p>
        </div>
        <PawDivider />
      </section>
    </main>
  );
}
