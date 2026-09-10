import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { asset, usePageMeta, CTAButton, PawDivider, SquareImage } from '../../components/ui';
import { PhotoPlaceholder } from '../dogs/PhotoPlaceholder';

const colourTiles = [
  'Red',
  'Apricot',
  'Cream',
  'Chocolate',
  'Black',
  'Caramel',
  'Ruby',
  'Abstract White',
  'Parti',
  'Phantom',
  'Tri-colour',
  'Merle',
  'Red Merle',
  'Chocolate Merle',
  'Harlequin',
];

export function ColourGallery() {
  return (
    <div>
      {/* OWNER: Replace each tile with a Doghouse-supplied photograph showing that colour or marking. Fifteen positions, one per colour/pattern. */}
      <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {colourTiles.map((colour) => (
          <figure key={colour} className="m-0">
            <PhotoPlaceholder small label={`${colour} example photograph to be supplied`} />
            <figcaption className="mt-2 text-center text-sm font-semibold text-deep">
              {colour}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

const readMoreButtonClass =
  'mt-3 inline-flex items-center gap-1 font-semibold text-branddark underline decoration-brand/40 underline-offset-4 hover:decoration-brand';

export default function AboutCavoodles() {
  usePageMeta(
    'About Cavoodles',
    'Learn about Cavoodles, including temperament, sizes, coats, colours, shedding, grooming, family life and multi-generational Cavoodles from The Doghouse QLD in Queensland.'
  );
  const [open, setOpen] = useState(false);
  const topRef = useRef<HTMLElement>(null);

  const collapse = () => {
    setOpen(false);
    topRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <section
        ref={topRef}
        className="mx-auto max-w-6xl scroll-mt-24 px-5 pt-10 pb-8 md:pt-14 md:pb-12"
      >
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-branddark">
              Cavoodles
            </p>
            <h1 className="font-display text-5xl  leading-tight text-brand md:text-6xl">
              About Cavoodles
            </h1>
            <div className="prose-dog mt-5">
              <p>
                Cavoodles have become one of Australia's most loved companion dogs, and it is easy
                to understand their appeal. Developed from the Cavalier King Charles Spaniel and
                the Poodle, they are often affectionate, intelligent, playful and wonderfully
                people-oriented dogs. They can fit beautifully into many different family lifestyles
                and come in an extraordinary variety of sizes, colours, markings and coat types.
              </p>
              <p>
                But there is much more to understanding a Cavoodle than the teddy bear face.
                Cavoodles are not all the same, and being a Cavalier and Poodle cross does not
                automatically determine a dog's temperament, coat, shedding, size or health.
                Genetics, thoughtful breeding, early development, training and the environment in
                which a puppy grows all play a part in the dog they ultimately become.
              </p>
              <p>
                At The Doghouse QLD, we breed multi-generational Cavoodles and believe families
                should understand not only why these little dogs are so loved, but also what living
                with one genuinely involves.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              className={readMoreButtonClass}
            >
              {open ? 'Read less' : 'Read more...'}
            </button>
          </div>
          <SquareImage
            src={asset("/images/photos/pup-closeup.jpg")}
            alt="Cavoodle close-up portrait"
            eager
            className="shadow-lg"
          />
        </div>
      </section>

      <div
        className={`grid transition-all duration-500 ease-in-out ${
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <section className="prose-dog mx-auto max-w-6xl px-5 pb-4">
            <h2>Where does the Cavoodle come from?</h2>
            <p>
              A Cavoodle, also widely known internationally as a Cavapoo, originates from the
              Cavalier King Charles Spaniel and Poodle.
            </p>
            <p>
              The Cavalier has a long history as a companion dog and is particularly known for its
              affectionate, people-oriented and adaptable nature. Cavaliers generally enjoy being
              close to their families while still appreciating walks, play and everyday adventures.
            </p>
            <p>
              Poodles bring their own characteristics to the combination, including intelligence,
              trainability and the coat genetics that contribute to many of the different coats
              seen in Cavoodles.
            </p>
            <p>
              The result can be a wonderful companion dog, but we prefer not to describe a Cavoodle
              as simply having "the best of both breeds". Genetics are far more complex than
              selecting a list of desirable characteristics from each parent.
            </p>
            <p>
              A puppy can inherit different combinations of physical and behavioural traits, which
              is one reason there can be noticeable differences between Cavoodles, even between
              brothers and sisters in the same litter.
            </p>
            <p>
              Understanding and working with that variation is an important part of thoughtful
              Cavoodle breeding.
            </p>

            <h2>What is a multi-generational Cavoodle?</h2>
            <p>The Doghouse QLD specialises in multi-generational Cavoodles.</p>
            <p>
              In the earlier generations of Cavoodle development, breeding begins with the Cavalier
              King Charles Spaniel and Poodle. As generations progress, Cavoodles can then be bred
              to other Cavoodles, allowing breeders to work with established Cavoodle lines rather
              than continually returning to a first-generation Cavalier and Poodle cross.
            </p>
            <p>
              Within our own program, we predominantly breed Cavoodle to Cavoodle, while a
              carefully considered backcross to a Cavalier may occasionally form part of the
              development of a line.
            </p>
            <p>
              Multi-generational breeding gives us the opportunity to look beyond a simple
              percentage of Cavalier versus Poodle and consider the actual dogs in front of us.
              Health, temperament, structure, size, coat, genetics and how two dogs may complement
              one another are all important parts of that decision.
            </p>
            <p>
              A higher generation number does not automatically mean a better Cavoodle. A
              thoughtfully bred F2 can be a far better breeding prospect than a poorly selected dog
              with many generations behind it.
            </p>
            <p>
              <CTAButton to="/cavoodles/generations">Learn About Cavoodle Generations</CTAButton>
            </p>

            <h2>Cavoodle temperament</h2>
            <p>One of the greatest attractions of the Cavoodle is companionship.</p>
            <p>
              Many Cavoodles are affectionate, friendly, sociable and strongly connected to their
              people. They can be playful and entertaining one moment and very happy to curl up
              beside their family the next. Their intelligence can also make them enthusiastic
              learners who enjoy interaction, games and training.
            </p>
            <p>However, "Cavoodle temperament" is not a single personality type.</p>
            <p>
              Within the same breed, and even the same litter, one puppy may be outgoing and
              adventurous, another calm and observant, another highly people-focused, and another
              more independent. Energy levels, confidence, sensitivity and resilience can all vary.
            </p>
            <p>Genetics matter, which is why the temperament of breeding dogs matters. But genetics are only part of the picture.</p>
            <p>
              A puppy's early experiences, socialisation, confidence building, training and
              continuing experiences after leaving the breeder also help shape the adult dog.
            </p>
            <p>
              This is one of the reasons temperament evaluation and thoughtful puppy matching are
              important parts of{' '}
              <Link
                to="/puppies/doghouse-method"
                className="font-semibold text-branddark underline decoration-brand/40 underline-offset-4 hover:decoration-brand"
              >
                The Doghouse Method™
              </Link>
              . We are not simply matching families to the puppy they find cutest. We want to
              consider whether the individual puppy's temperament is likely to complement the
              lifestyle and expectations of the family who will be raising them.
            </p>

            <h2>Are Cavoodles good family dogs?</h2>
            <p>Cavoodles can make beautiful family companions and can suit many different types of homes.</p>
            <p>
              They may live happily with families with children, couples, singles, retirees and
              households with other pets. Their relatively manageable size and adaptable nature can
              also make them suitable for anything from apartment living to homes with larger
              yards, provided their physical, mental and social needs are being met.
            </p>
            <p>The more important question is not simply, "Is a Cavoodle good for families?"</p>
            <p>It is, "Is this particular Cavoodle a good match for this particular family?"</p>
            <p>
              An active household wanting a dog to accompany them on regular adventures may be
              delighted with a confident, energetic puppy. Someone looking for a quieter companion
              may be much happier with a calmer puppy who naturally settles more readily.
            </p>
            <p>
              There is no "best" temperament. There is a temperament that is a better fit for a
              particular home.
            </p>

            <h2>Cavoodles and children</h2>
            <p>A well-matched Cavoodle can form an extraordinary relationship with children.</p>
            <p>
              They are companion dogs, and many genuinely enjoy being involved in family life.
              However, having a family-friendly breed does not remove the need to teach both the
              puppy and the children how to interact appropriately.
            </p>
            <p>
              Children should learn to respect a dog's space, allow them to rest and eat
              undisturbed, handle them gently and recognise when the dog has had enough
              interaction. Adults should supervise interactions, particularly with younger
              children.
            </p>
            <p>
              Likewise, puppies need to learn that children are not littermates. Jumping, mouthing,
              chasing and over-excited play need calm, consistent guidance.
            </p>
            <p>
              When both sides are taught how to live together respectfully, the relationship
              between a child and their dog can be incredibly special.
            </p>

            <h2>Cavoodles and other dogs</h2>
            <p>Many Cavoodles are naturally social and can live very happily alongside other dogs.</p>
            <p>
              Good early socialisation helps puppies learn appropriate canine communication, but
              personality still matters. Some dogs adore having a canine companion, while others
              are perfectly content being the only dog in their household.
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
              Training should not only be about teaching sit, stay and come. Learning how to
              settle, wait calmly, walk nicely, cope with frustration, spend time independently and
              make good choices in everyday situations is equally valuable.
            </p>
            <p>
              Mental enrichment can be surprisingly simple. Sniffing, food puzzles, short training
              sessions, exploring different environments and learning new skills all give a
              Cavoodle opportunities to use their brain.
            </p>
            <p>
              An intelligent puppy who is never taught what is expected of them can become very
              creative at finding their own entertainment.
            </p>

            <h2>Affection and independence</h2>
            <p>Cavoodles are often described as "velcro dogs" because many love being close to their people.</p>
            <p>
              That affection is one of their most endearing qualities, but it is also why
              independence should be deliberately taught from puppyhood. Separation-related
              difficulties can occur in Cavoodles, particularly when a dog has never learned that
              being apart from their person is safe and normal.
            </p>
            <p>A puppy does not need to be constantly entertained or held to feel loved.</p>
            <p>
              Short periods resting in their pen, playing independently, sleeping away from their
              owner and calmly remaining home for age-appropriate periods can all help build
              confidence.
            </p>
            <p>Loving your Cavoodle and teaching your Cavoodle independence are not opposites.</p>
            <p>
              In fact, helping a puppy learn that they are safe even when you are not beside them
              is one of the kindest things we can teach.
            </p>

            <h2>Exercise and everyday life</h2>
            <p>Cavoodles are often wonderfully adaptable.</p>
            <p>
              Some are enthusiastic little adventurers who adore walks, outings and exploring.
              Others are more relaxed and quite content with moderate daily exercise followed by a
              comfortable spot on the couch.
            </p>
            <p>Most fall somewhere in between.</p>
            <p>
              Their needs will vary with age, size, health and individual energy level. Daily
              movement, play, opportunities to sniff and explore, and mental stimulation are all
              important. Cavoodles generally do not require the workload of a high-drive working
              breed, but they are still dogs and need more from life than simply being carried
              around or sitting inside.
            </p>
            <p>
              Equally important is teaching them an "off switch". A well-rounded family dog should
              be able to enjoy activity and also learn how to relax.
            </p>

            <h2>Cavoodle sizes</h2>
            <p>One of the reasons Cavoodles can suit such a variety of homes is that they are bred across a range of sizes.</p>
            <p>At The Doghouse QLD, the broad size descriptions we use are:</p>
            <p>
              Teacup: under approximately 4 kg
              <br />
              Toy: approximately 4 to 8 kg
              <br />
              Mini: approximately 7 to 12 kg
            </p>
            <p>
              There is intentional overlap between these ranges because dogs do not grow according
              to a perfectly defined chart.
            </p>
            <p>
              "Teacup" is also a descriptive term rather than an officially recognised Cavoodle size
              classification.
            </p>
            <p>
              Predicting adult size is an estimate. Parent size, genetics, birth weight and the
              puppy's growth pattern can all help us form an expectation, but no breeder can
              responsibly guarantee an exact adult weight.
            </p>
            <p>
              <CTAButton to="/cavoodles/sizes">Explore Cavoodle Sizes</CTAButton>
            </p>

            <h2>Cavoodle coats</h2>
            <p>One of the most noticeable differences between Cavoodles is their coat.</p>
            <p>At The Doghouse QLD, we generally describe our coats as:</p>
            <p>
              Wool
              <br />
              Fleece
              <br />
              Shaggy
            </p>
            <p>
              Wool coats generally have the tightest curl. Fleece coats tend to have a softer curl
              and sit between wool and shaggy in appearance. Shaggy coats can range from a gentle
              wave through to a considerably straighter appearance.
            </p>
            <p>
              There can be variation within these descriptions because coat genetics are complex,
              and a puppy's coat also changes as they mature.
            </p>
            <p>
              Furnishings are another important part of the classic Cavoodle appearance. These are
              the facial coat characteristics that contribute to the familiar beard, moustache and
              teddy bear expression.
            </p>
            <p>All Doghouse puppies have at least one copy of the furnishings gene.</p>
            <p>
              <CTAButton to="/cavoodles/coat-types">Explore Cavoodle Coat Types</CTAButton>
            </p>

            <h2>Do Cavoodles shed?</h2>
            <p>
              Cavoodles are commonly advertised as "non-shedding" or "hypoallergenic", but we don't
              believe those are responsible guarantees to make.
            </p>
            <p>
              Cavoodles can be low shedding, but the amount of shedding varies according to their
              individual coat genetics and coat type. Poodle ancestry can contribute low-shedding
              characteristics, but not every Cavoodle inherits exactly the same combination.
            </p>
            <p>
              At The Doghouse QLD, our puppies are considered low shedding, but we do not promise
              that any dog will shed absolutely no hair.
            </p>
            <p>
              Puppy coats can also behave differently while the adult coat is developing. Families
              may notice more shedding during coat transition before the mature coat is
              established, which can continue through approximately the first 18 months.
            </p>
            <p>
              Wool coats will generally be at the lower-shedding end of the spectrum, but coat type
              alone should never be treated as an absolute guarantee.
            </p>
            <p>
              For families where allergies are a significant concern, spending time around dogs
              with similar coats before committing to a puppy is sensible. No dog should be
              guaranteed to be completely hypoallergenic.
            </p>
            <p>
              <CTAButton to="/cavoodles/shedding">Learn More About Cavoodle Shedding</CTAButton>
            </p>

            <h2>Cavoodle colours and markings</h2>
            <p>
              Cavoodles come in an extraordinary variety of colours and patterns, and this is one
              of the things that makes them so visually diverse.
            </p>
            <p>At The Doghouse QLD, colours you may see include:</p>
            <p>
              Red
              <br />
              Apricot
              <br />
              Cream
              <br />
              Chocolate
              <br />
              Black
            </p>
            <p>
              Ruby is used to describe a particularly deep, rich shade within the red spectrum,
              while caramel is often a useful descriptive term for a red coat that has softened or
              faded in colour.
            </p>
            <p>Markings and patterns can include:</p>
            <p>
              Abstract White
              <br />
              Parti
              <br />
              Phantom
              <br />
              Tri-colour
              <br />
              Merle
              <br />
              Red Merle
              <br />
              Chocolate Merle
              <br />
              Harlequin
            </p>
            <p>
              A black and tan Cavoodle, for example, is an expression of the phantom pattern.
            </p>
            <p>
              Colour can also change as a puppy matures. Some dogs retain very intense colour while
              others gradually soften or fade. That does not make one dog better than another.
              Colour is simply one part of the extraordinary variety found within Cavoodles.
            </p>

            <h3>Cavoodle Colour Gallery</h3>
            <ColourGallery />
            <p>
              <CTAButton to="/cavoodles/colours-markings">
                Explore Cavoodle Colours &amp; Markings
              </CTAButton>
            </p>

            <h2>The grooming commitment</h2>
            <p>That beautiful Cavoodle coat comes with responsibility.</p>
            <p>
              Low shedding does not mean low maintenance. In fact, because loose coat can remain
              trapped rather than simply falling away, regular brushing and professional grooming
              are particularly important to prevent knots and matting.
            </p>
            <p>
              As a general guide, families should expect professional grooming approximately every
              6 to 8 weeks, depending on coat type, coat length, lifestyle and the style in which
              the dog is kept.
            </p>
            <p>
              Home brushing is still essential between appointments, particularly in friction areas
              such as behind the ears, under the collar or harness, around the legs and wherever
              the coat is prone to tangling.
            </p>
            <p>Grooming also includes nail care, ears, teeth, eyes and general body handling.</p>
            <p>
              This is one reason we introduce grooming experiences during the puppies' first eight
              weeks. Learning from an early age that being brushed, bathed, blow-dried, having
              paws handled and nails attended to are ordinary parts of life can make ongoing
              grooming considerably easier for both dog and owner.
            </p>
            <p>
              Learn more in{' '}
              <Link
                to="/puppies/first-eight-weeks"
                className="font-semibold text-branddark underline decoration-brand/40 underline-offset-4 hover:decoration-brand"
              >
                The First Eight Weeks
              </Link>{' '}
              and{' '}
              <Link
                to="/resources/grooming"
                className="font-semibold text-branddark underline decoration-brand/40 underline-offset-4 hover:decoration-brand"
              >
                Grooming
              </Link>
              .
            </p>

            <h2>Health and responsible breeding</h2>
            <p>Being a crossbreed does not automatically protect a Cavoodle from inherited disease.</p>
            <p>
              Because Cavoodles descend from Cavaliers and Poodles, responsible breeding requires
              an understanding of health concerns relevant to both sides of their ancestry. These
              can include cardiac, orthopaedic and eye conditions.
            </p>
            <p>DNA testing is valuable, but it is only one component of health screening.</p>
            <p>
              At The Doghouse QLD, our approach to breeding health extends beyond DNA testing and,
              moving forward, includes comprehensive DNA screening, hip and elbow assessment,
              echocardiograms, specialist ophthalmologist examinations, patella assessment, teeth
              and bite evaluation and general physical assessment.
            </p>
            <p>
              No breeder can promise that a puppy will never develop a health problem. Responsible
              breeding is about gathering as much meaningful information as possible and using that
              information to make thoughtful breeding decisions designed to reduce avoidable risk.
            </p>
            <p>
              <CTAButton to="/about-us/health-testing">Our Approach to Health Testing</CTAButton>
            </p>

            <h2>Can Cavoodles be therapy or assistance dogs?</h2>
            <p>
              The affectionate, people-oriented nature and trainability seen in many Cavoodles can
              make some individuals promising candidates for therapy or support roles.
            </p>
            <p>But being a Cavoodle does not automatically make a dog suitable for this work.</p>
            <p>
              A therapy dog needs the right individual temperament, including qualities such as
              confidence, resilience, appropriate sociability and an ability to remain calm in
              different environments. Training and appropriate assessment are also essential.
            </p>
            <p>
              This is another example of why we believe the individual dog matters more than the
              label attached to the breed.
            </p>

            <h2>How long do Cavoodles live?</h2>
            <p>
              Published estimates vary, with Cavoodle life expectancy commonly placed somewhere
              around the low to mid teens.
            </p>
            <p>
              At The Doghouse QLD, we hope our puppies will share approximately 14 to 16 wonderful
              years with their families, but lifespan can never be guaranteed.
            </p>
            <p>
              Genetics, health, nutrition, body condition, preventative veterinary care, dental
              health, exercise, accidents, disease and simple individual variation can all
              influence how long a dog lives.
            </p>
            <p>
              The goal should not only be a long life, but a healthy, happy and well-supported one.
            </p>

            <h2>Is a Cavoodle right for you?</h2>
            <p>
              Cavoodles can be extraordinary companions, but they are not ornaments and they are
              not maintenance-free teddy bears.
            </p>
            <p>
              Before welcoming one into your family, it is worth considering whether you are
              prepared for:
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
              In return, a thoughtfully bred, carefully raised and appropriately matched Cavoodle
              can become an extraordinary little companion.
            </p>
            <p>
              They can be funny, clever, affectionate, adventurous, gentle, cheeky and deeply
              connected to their families. They can make us laugh, follow us from room to room,
              curl up beside us at the end of the day and somehow become woven into the ordinary
              rhythms of family life.
            </p>
            <p>
              That, more than their curls, colours or teddy bear faces, is what we believe makes
              the Cavoodle so special.
            </p>
            <p>
              <button type="button" onClick={collapse} className={readMoreButtonClass}>
                Read less
              </button>
            </p>
          </section>
        </div>
      </div>

      <section className="mx-auto max-w-6xl px-5 py-12 text-center">
        <PawDivider />
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          <CTAButton to="/puppies/process-applying">Apply Now</CTAButton>
          <Link
            to="/cavoodles/generations"
            className="font-semibold text-branddark underline decoration-brand/40 underline-offset-4 hover:decoration-brand"
          >
            Cavoodle Generations
          </Link>
          <Link
            to="/cavoodles/living-with-a-cavoodle"
            className="font-semibold text-branddark underline decoration-brand/40 underline-offset-4 hover:decoration-brand"
          >
            Living With a Cavoodle
          </Link>
        </div>
      </section>
    </>
  );
}
