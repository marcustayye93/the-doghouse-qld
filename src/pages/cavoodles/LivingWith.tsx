import { Link } from 'react-router-dom';
import { asset, usePageMeta } from '../../components/ui';
import { CavoodleHero, CavoodleFooter } from './shared';

const methodLinkClass =
  'font-semibold text-branddark underline decoration-brand/40 underline-offset-4 hover:decoration-brand';

export default function LivingWith() {
  usePageMeta(
    'Living With a Cavoodle',
    'What living with a Cavoodle is really like: temperament, children, other pets, exercise, training and independence.'
  );
  return (
    <>
      <CavoodleHero
        title="Living With a Cavoodle"
        image={asset("/images/photos/family-with-dogs.jpg")}
        imageAlt="Family with dogs"
        intro={
          <>
            <p>
              Cavoodles can be funny, clever, affectionate, adventurous, gentle, cheeky and deeply
              connected to their families.
            </p>
            <p>
              But they are not ornaments and they are not maintenance-free teddy bears. Here is what
              living with one genuinely involves.
            </p>
          </>
        }
      />
      <section className="prose-dog mx-auto max-w-6xl px-5 pb-4">
        <h2>Cavoodle temperament</h2>
        <p>One of the greatest attractions of the Cavoodle is companionship.</p>
        <p>
          Many Cavoodles are affectionate, friendly, sociable and strongly connected to their
          people. They can be playful and entertaining one moment and very happy to curl up beside
          their family the next. Their intelligence can also make them enthusiastic learners who
          enjoy interaction, games and training.
        </p>
        <p>However, "Cavoodle temperament" is not a single personality type.</p>
        <p>
          Within the same breed, and even the same litter, one puppy may be outgoing and
          adventurous, another calm and observant, another highly people-focused, and another more
          independent. Energy levels, confidence, sensitivity and resilience can all vary.
        </p>
        <p>
          Genetics matter, which is why the temperament of breeding dogs matters. But genetics are
          only part of the picture.
        </p>
        <p>
          A puppy's early experiences, socialisation, confidence building, training and continuing
          experiences after leaving the breeder also help shape the adult dog.
        </p>
        <p>
          This is one of the reasons temperament evaluation and thoughtful puppy matching are
          important parts of{' '}
          <Link to="/puppies/doghouse-method" className={methodLinkClass}>
            The Doghouse Method™
          </Link>
          . We are not simply matching families to the puppy they find cutest. We want to consider
          whether the individual puppy's temperament is likely to complement the lifestyle and
          expectations of the family who will be raising them.
        </p>

        <h2>Are Cavoodles good family dogs?</h2>
        <p>Cavoodles can make beautiful family companions and can suit many different types of homes.</p>
        <p>
          They may live happily with families with children, couples, singles, retirees and
          households with other pets. Their relatively manageable size and adaptable nature can
          also make them suitable for anything from apartment living to homes with larger yards,
          provided their physical, mental and social needs are being met.
        </p>
        <p>The more important question is not simply, "Is a Cavoodle good for families?"</p>
        <p>It is, "Is this particular Cavoodle a good match for this particular family?"</p>
        <p>
          An active household wanting a dog to accompany them on regular adventures may be
          delighted with a confident, energetic puppy. Someone looking for a quieter companion may
          be much happier with a calmer puppy who naturally settles more readily.
        </p>
        <p>
          There is no "best" temperament. There is a temperament that is a better fit for a
          particular home.
        </p>

        <h2>Cavoodles and children</h2>
        <p>A well-matched Cavoodle can form an extraordinary relationship with children.</p>
        <p>
          They are companion dogs, and many genuinely enjoy being involved in family life. However,
          having a family-friendly breed does not remove the need to teach both the puppy and the
          children how to interact appropriately.
        </p>
        <p>
          Children should learn to respect a dog's space, allow them to rest and eat undisturbed,
          handle them gently and recognise when the dog has had enough interaction. Adults should
          supervise interactions, particularly with younger children.
        </p>
        <p>
          Likewise, puppies need to learn that children are not littermates. Jumping, mouthing,
          chasing and over-excited play need calm, consistent guidance.
        </p>
        <p>
          When both sides are taught how to live together respectfully, the relationship between a
          child and their dog can be incredibly special.
        </p>

        <h2>Cavoodles and other dogs</h2>
        <p>Many Cavoodles are naturally social and can live very happily alongside other dogs.</p>
        <p>
          Good early socialisation helps puppies learn appropriate canine communication, but
          personality still matters. Some dogs adore having a canine companion, while others are
          perfectly content being the only dog in their household.
        </p>
        <p>
          Introductions should always be thoughtful, and an existing dog's temperament, age and
          tolerance of puppies should be considered before bringing another dog into the home.
        </p>
        <p>
          The same principle applies to other household pets. Successful relationships are
          influenced by the individual animals, their previous experiences, introductions,
          management and training rather than breed name alone.
        </p>

        <h2>Intelligent little dogs</h2>
        <p>
          Cavoodles are often quick learners, and their Poodle heritage is one of the reasons
          intelligence and trainability are frequently associated with them.
        </p>
        <p>That intelligence is wonderful, but it also needs somewhere to go.</p>
        <p>
          Training should not only be about teaching sit, stay and come. Learning how to settle,
          wait calmly, walk nicely, cope with frustration, spend time independently and make good
          choices in everyday situations is equally valuable.
        </p>
        <p>
          Mental enrichment can be surprisingly simple. Sniffing, food puzzles, short training
          sessions, exploring different environments and learning new skills all give a Cavoodle
          opportunities to use their brain.
        </p>
        <p>
          An intelligent puppy who is never taught what is expected of them can become very
          creative at finding their own entertainment.
        </p>

        <h2>Affection and independence</h2>
        <p>Cavoodles are often described as "velcro dogs" because many love being close to their people.</p>
        <p>
          That affection is one of their most endearing qualities, but it is also why independence
          should be deliberately taught from puppyhood. Separation-related difficulties can occur
          in Cavoodles, particularly when a dog has never learned that being apart from their
          person is safe and normal.
        </p>
        <p>A puppy does not need to be constantly entertained or held to feel loved.</p>
        <p>
          Short periods resting in their pen, playing independently, sleeping away from their
          owner and calmly remaining home for age-appropriate periods can all help build
          confidence.
        </p>
        <p>Loving your Cavoodle and teaching your Cavoodle independence are not opposites.</p>
        <p>
          In fact, helping a puppy learn that they are safe even when you are not beside them is
          one of the kindest things we can teach.
        </p>

        <h2>Exercise and everyday life</h2>
        <p>Cavoodles are often wonderfully adaptable.</p>
        <p>
          Some are enthusiastic little adventurers who adore walks, outings and exploring. Others
          are more relaxed and quite content with moderate daily exercise followed by a
          comfortable spot on the couch.
        </p>
        <p>Most fall somewhere in between.</p>
        <p>
          Their needs will vary with age, size, health and individual energy level. Daily movement,
          play, opportunities to sniff and explore, and mental stimulation are all important.
          Cavoodles generally do not require the workload of a high-drive working breed, but they
          are still dogs and need more from life than simply being carried around or sitting
          inside.
        </p>
        <p>
          Equally important is teaching them an "off switch". A well-rounded family dog should be
          able to enjoy activity and also learn how to relax.
        </p>

        <h2>The grooming commitment</h2>
        <p>That beautiful Cavoodle coat comes with responsibility.</p>
        <p>
          Low shedding does not mean low maintenance. In fact, because loose coat can remain
          trapped rather than simply falling away, regular brushing and professional grooming are
          particularly important to prevent knots and matting.
        </p>
        <p>
          As a general guide, families should expect professional grooming approximately every 6
          to 8 weeks, depending on coat type, coat length, lifestyle and the style in which the
          dog is kept.
        </p>
        <p>
          Home brushing is still essential between appointments, particularly in friction areas such
          as behind the ears, under the collar or harness, around the legs and wherever the coat
          is prone to tangling.
        </p>
        <p>Grooming also includes nail care, ears, teeth, eyes and general body handling.</p>
        <p>
          This is one reason we introduce grooming experiences during the puppies' first eight
          weeks. Learning from an early age that being brushed, bathed, blow-dried, having paws
          handled and nails attended to are ordinary parts of life can make ongoing grooming
          considerably easier for both dog and owner.
        </p>
        <p>
          Learn more in{' '}
          <Link to="/puppies/first-eight-weeks" className={methodLinkClass}>
            The First Eight Weeks
          </Link>{' '}
          and{' '}
          <Link to="/resources/grooming" className={methodLinkClass}>
            Grooming
          </Link>
          .
        </p>

        <h2>Is a Cavoodle right for you?</h2>
        <p>
          Cavoodles can be extraordinary companions, but they are not ornaments and they are not
          maintenance-free teddy bears.
        </p>
        <p>
          Before welcoming one into your family, it is worth considering whether you are prepared
          for:
        </p>
        <ul>
          <li>A dog who will want to be part of your everyday life</li>
          <li>Regular professional grooming and home coat maintenance</li>
          <li>Training that continues well beyond puppyhood</li>
          <li>Daily exercise, play and mental stimulation</li>
          <li>Teaching independence as well as providing affection</li>
          <li>Ongoing veterinary and preventative healthcare</li>
          <li>The financial commitment of caring for a dog throughout its lifetime</li>
          <li>
            Changes to holidays, work routines and everyday plans because you now have a
            four-legged family member to consider
          </li>
        </ul>
        <p>
          In return, a thoughtfully bred, carefully raised and appropriately matched Cavoodle can
          become an extraordinary little companion.
        </p>
        <p>
          They can be funny, clever, affectionate, adventurous, gentle, cheeky and deeply
          connected to their families. They can make us laugh, follow us from room to room, curl
          up beside us at the end of the day and somehow become woven into the ordinary rhythms of
          family life.
        </p>
        <p>
          That, more than their curls, colours or teddy bear faces, is what we believe makes the
          Cavoodle so special.
        </p>
      </section>
      <CavoodleFooter currentPath="/cavoodles/living-with-a-cavoodle" />
    </>
  );
}
