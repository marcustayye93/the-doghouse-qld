import { Link } from 'react-router-dom';
import { asset, PageHero, ReadMore, SquareImage, usePageMeta } from '../../components/ui';
import {
  CheckboxField,
  Field,
  FormShell,
  RadioGroup,
} from '../../components/forms';

const ilink =
  'font-semibold text-branddark underline decoration-brand/40 underline-offset-4 hover:decoration-brand';

/* OWNER: The individual portrait treat information graphics are final Doghouse QLD
   artwork to be supplied (one per treat below). Do not recreate their nutritional
   information as website text. Replace each placeholder with the supplied graphic,
   keeping its original portrait aspect ratio, and make it tap-to-enlarge. */
const treatCollection: { protein: string; treats: string[] }[] = [
  {
    protein: 'Beef',
    treats: [
      'Beef Achilles tendon',
      'Natural beef jerky',
      'Beef liver',
      'Beef tendons',
      'Beef pizzle',
      'Beef trachea',
    ],
  },
  {
    protein: 'Kangaroo',
    treats: [
      'Kangaroo heart',
      'Kangaroo jerky',
      'Kangaroo leg meat cubes',
      'Kangaroo tail pieces',
      'Kangaroo teeth cleansers',
    ],
  },
  {
    protein: 'Seafood',
    treats: ['Fish fingers', 'Green-lipped mussels', 'Shark cartilage', 'Shark jerky crispies'],
  },
  {
    protein: 'Venison',
    treats: ['Venison jerky cubes', 'Venison jerky pieces'],
  },
  {
    protein: 'Emu',
    treats: ['Emu jerky pieces'],
  },
  {
    protein: 'Crocodile',
    treats: ['Crocodile feet'],
  },
  {
    protein: 'Goat',
    treats: ['Goat horns'],
  },
];

function TreatPlaceholder({ name }: { name: string }) {
  return (
    <div className="flex aspect-[3/4] items-center justify-center rounded-2xl border-2 border-dashed border-brand/30 bg-white p-4 text-center shadow-sm">
      <span className="text-sm font-semibold leading-snug text-ink/60">{name}</span>
    </div>
  );
}

const interests = [
  'Monthly assorted treat boxes',
  'Puppy treat options',
  'Older dog / softer treat options',
  'Single-protein options',
  'Birthday & special occasion boxes',
  'New Doghouse Deli products',
  'Everything Doghouse Deli',
];

export default function DoghouseDeli() {
  usePageMeta(
    'Doghouse Deli',
    'Natural, single-ingredient dog treats from Doghouse Deli, tried and tested by our Cavoodles with sensitive tummies and discerning palates in mind.'
  );
  return (
    <main>
      {/*
        OWNER: The hero, assorted-box, treat-collection and delivery photographs are final
        Doghouse QLD photography to be supplied. Real Doghouse photos are used as tasteful
        stand-ins for now. Never use stock photography here.
      */}
      <PageHero
        title="Doghouse Deli"
        image={asset("/images/photos/basket-pups.jpg")}
        imageAlt="Cavoodle puppies in a basket"
        intro={
          <>
            <h2>Natural treats for discerning little palates</h2>
            <p>
              When you live with as many Cavoodles as we do, you have a fairly impressive tasting
              panel at your disposal.
            </p>
            <p>
              For more than two years, the treats selected for Doghouse Deli have been genuinely
              tried and tested on our own Cavoodles. We&apos;ve watched what they love, what they
              turn their noses up at, what sits comfortably with their sometimes sensitive little
              tummies and, just as importantly, what we&apos;re happy to keep feeding them.
            </p>
            <p>
              Because Cavoodles can be wonderfully discerning little creatures. They can also have
              sensitive digestive systems, which means we have always been particularly careful
              about the treats we choose for our own dogs.
            </p>
            <p>Doghouse Deli grew naturally from that experience.</p>
            <p>
              Our assorted treat boxes contain a changing selection of carefully chosen, natural,
              single-ingredient, air-dried treats across a variety of proteins, textures and sizes.
            </p>
            <p>
              They&apos;ve been chosen with Cavoodles in mind, tested by a rather substantial panel
              of Doghouse Cavoodles, and selected with the same attention to quality that we bring
              to everything else we do.
            </p>
            <p>
              Of course, you don&apos;t need to own a Cavoodle to enjoy Doghouse Deli. These
              beautiful natural treats can be enjoyed by dogs of many breeds. But if you happen to
              share your home with a discerning little oodle who knows exactly what they like,
              you&apos;ve come to the right place.
            </p>
            <p className="mt-6">
              <a
                href="#deli-signup"
                className="inline-flex items-center justify-center rounded-xl bg-brand px-8 py-3.5 text-base font-bold uppercase tracking-wide text-white shadow-md transition hover:bg-branddark"
              >
                Join the Doghouse Deli List
              </a>
            </p>
          </>
        }
      />
      <section className="mx-auto max-w-4xl px-5 pb-16">
        <div className="prose-dog">
          <ReadMore id="deli-read-more" summary={null}>
            <h2>Why we created Doghouse Deli</h2>
            <p>Doghouse Deli didn&apos;t begin because we decided we wanted to sell dog treats.</p>
            <p>
              It began because we already had treats we trusted and had been feeding to our own
              dogs for years.
            </p>
            <p>
              Living with, breeding and raising Cavoodles every day has taught us that what appears
              to be a simple treat isn&apos;t always quite so simple.
            </p>
            <p>
              Some treats are incredibly rich. Some are surprisingly high in fat. Some might be
              perfectly suitable as an occasional chew but aren&apos;t something we would choose for
              regular rewarding. And some simply don&apos;t agree with a sensitive little Cavoodle
              tummy.
            </p>
            <p>
              Over the past two years, we&apos;ve tried different treats with our own dogs and
              gradually learnt which ones earn a place in our treat cupboard.
            </p>
            <p>
              And with the number of Cavoodles at The Doghouse, we certainly haven&apos;t been
              short of willing taste testers.
            </p>
            <p>But passing the taste test isn&apos;t enough.</p>
            <p>
              Before a treat earns a place in Doghouse Deli, we want to understand what it is, its
              protein source, its nutritional composition, how rich it is, its texture, how we would
              use it and whether we&apos;re genuinely comfortable feeding it to our own dogs.
            </p>
            <p>That&apos;s really the philosophy behind Doghouse Deli.</p>
            <p>Our dogs tried them first.</p>

            <h2>Created with sensitive tummies in mind</h2>
            <p>
              Doghouse Deli has been developed particularly with Cavoodles and other oodles in
              mind, including those who can have more sensitive digestive systems.
            </p>
            <p>
              That doesn&apos;t mean every Doghouse Deli treat will suit every sensitive dog. Dogs
              are individuals, and food intolerances, allergies and medical conditions always need
              to be considered individually.
            </p>
            <p>What it does mean is that sensitivity influences the decisions we make.</p>
            <p>
              We pay attention to ingredients, protein sources, protein and fat levels, richness,
              texture and portion size. We consider whether something is suitable as a little
              reward, an occasional treat or a longer-lasting chew.
            </p>
            <p>
              And we don&apos;t assume something is automatically a good choice simply because it
              says &ldquo;natural&rdquo;.
            </p>
            <p>Our standards go further than that.</p>
            <p>
              As we finalise our nutritional information, families will also be able to see useful
              information about the treats in our range, including their protein and fat analysis
              where available.
            </p>
            <p>We want you to understand what you&apos;re feeding your dog.</p>

            <h2>What&apos;s inside matters</h2>
            <p>We believe a dog treat should be easy to understand.</p>
            <p>
              The treats selected for Doghouse Deli are single-ingredient treats that are slowly
              air-dried without unnecessary ingredients being added.
            </p>
            <p>When something says beef liver, we want beef liver.</p>
            <p>When it says kangaroo heart, we want kangaroo heart.</p>
            <p>Simple.</p>
            <p>
              Our treats are made in Australia using Australian produce, with the exception of our
              green-lipped mussels, which originate from New Zealand.
            </p>
            <p>
              For us, it isn&apos;t about colourful packaging or complicated ingredient lists.
              It&apos;s about starting with quality ingredients and choosing products we&apos;re
              comfortable giving to our own dogs.
            </p>

            <h2>Why air-dried?</h2>
            <p>
              Air-drying removes moisture from the raw product while creating the different natural
              tastes and textures dogs enjoy.
            </p>
            <p>
              It allows us to offer everything from small pieces suitable for rewarding through to
              more substantial natural chews.
            </p>
            <p>
              Because moisture has been removed, air-dried treats can also be nutritionally
              concentrated. A relatively small piece can represent more food than its size might
              suggest.
            </p>
            <p>
              That&apos;s another reason we believe treats should be given thoughtfully rather than
              endlessly.
            </p>
            <p>Natural doesn&apos;t mean unlimited.</p>

            <h2>For discerning little palates</h2>
            <p>
              Anyone who has lived with a Cavoodle who has suddenly decided that yesterday&apos;s
              perfectly acceptable food is beneath them will understand this section.
            </p>
            <p>They can be discerning little creatures.</p>
            <p>
              Fortunately, having plenty of Cavoodles means we&apos;ve had plenty of opportunity to
              discover which natural treats consistently receive an enthusiastic response.
            </p>
            <p>
              Our assorted boxes provide different proteins, tastes, textures and chewing
              experiences rather than sending exactly the same selection month after month.
            </p>
            <p>
              Some treats are small and useful for rewarding. Some offer a satisfying crunch. Others
              give your dog something to settle down and enjoy for longer.
            </p>
            <p>The selection changes, and that&apos;s part of the fun.</p>
            <p>
              Your dog gets variety, while you get the reassurance of knowing that the treats have
              been selected by people who live with and raise Cavoodles every single day.
            </p>

            <div className="my-8 grid items-center gap-8 md:grid-cols-2">
              <div>
                <h2 className="!mt-0">The Doghouse Deli Assorted Treat Box</h2>
                <p>We&apos;re beginning Doghouse Deli with one carefully curated assorted treat box.</p>
                <p>
                  Each box contains a changing selection chosen from our approved Doghouse Deli
                  treat range.
                </p>
                <p>
                  Not every box will contain every treat or every protein. The assortment will
                  vary, giving your dog an opportunity to experience different tastes and textures
                  while keeping their monthly delivery interesting.
                </p>
                <p>
                  Selections may also vary according to product availability and the combination of
                  treats we choose for that particular box.
                </p>
                <p>At launch, our assorted box is not individually customisable.</p>
                <p>
                  We&apos;ve deliberately chosen to begin with one beautiful mixed box and do it
                  well before expanding into the many other ideas we have planned for Doghouse
                  Deli.
                </p>
                {/*
                  OWNER: Pricing and postage are intentionally not displayed publicly yet.
                  Per the approved docs and master handover, do not invent or publish prices.
                  Structure to activate later without redesigning the page:
                  - "Subscription price" heading with the final monthly subscription price
                  - "Postage" heading with final postage price and delivery details
                  Keep these hidden until the final figures are supplied.
                */}
              </div>
              <SquareImage
                src={asset("/images/photos/basket-pups-2.jpg")}
                alt="Cavoodle puppies together"
              />
            </div>

            <h2>Our Treat Collection</h2>
            <p>
              Your assorted Doghouse Deli box may contain treats selected from the following
              collection.
            </p>
            <div className="my-6">
              <SquareImage
                src={asset("/images/photos/pup-grass.jpg")}
                alt="Cavoodle puppy on the grass"
              />
            </div>

            {treatCollection.map((group) => (
              <div key={group.protein} className="mt-8">
                <h3 className="!text-xl">{group.protein}</h3>
                <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
                  {group.treats.map((treat) => (
                    <TreatPlaceholder key={treat} name={treat} />
                  ))}
                </div>
              </div>
            ))}

            <p className="mt-8">
              Not every treat listed above will appear in every box. This is our broader approved
              collection from which each assorted box may be selected.
            </p>

            <h3>A little word about richer treats</h3>
            <p>Natural treats can vary enormously in their nutritional composition.</p>
            <p>
              Some animal products are naturally much richer or higher in fat than others. A treat
              can therefore be completely natural and still be something we would choose to offer
              only occasionally.
            </p>
            <p>
              This is particularly important to us when feeding Cavoodles and dogs with sensitive
              tummies.
            </p>
            <p>
              Rather than simply looking at whether a treat is natural, we consider its protein and
              fat levels and how we would realistically use it with our own dogs.
            </p>
            <p>
              As our individual nutritional information is finalised, we&apos;ll make that
              information available so families can make informed choices too.
            </p>
            {/*
              OWNER: Individual treat nutritional analysis to be added here once supplied.
              Do not invent nutritional values. The structure above allows it to be added
              per treat without redesigning the page.
            */}

            <h2>Starting with our assorted box</h2>
            <p>For our initial launch, we&apos;re keeping Doghouse Deli beautifully simple.</p>
            <p>One mixed box. One carefully selected assortment. Plenty of variety.</p>
            <p>At this stage, the assorted box cannot be customised to exclude particular proteins.</p>
            <p>
              We understand, however, that some Cavoodles and other dogs have specific food
              sensitivities, allergies or particular animal proteins they simply cannot eat.
            </p>
            <p>
              If your dog has a known allergy or intolerance to a particular protein, our initial
              assorted box may therefore not be suitable for them just yet.
            </p>
            <p>And that&apos;s okay.</p>
            <p>
              We would much rather tell you that our assorted box isn&apos;t right for your dog yet
              than send you something we know they shouldn&apos;t eat.
            </p>

            <h2>But this is only the beginning...</h2>
            <p>
              Greater personalisation is an important part of where we want to take Doghouse Deli
              next.
            </p>
            <p>
              Our next phase will include developing more customisable options, allowing families to
              tell us which proteins their dog can and cannot have so that we can create boxes
              better suited to individual dogs.
            </p>
            <p>
              We also plan to introduce single-protein options for dogs who need a simpler or more
              restricted selection.
            </p>
            <p>And our ideas certainly don&apos;t stop there.</p>
            <p>As Doghouse Deli grows, we&apos;d love to introduce:</p>
            <ul>
              <li>Customisable protein selections</li>
              <li>Single-protein boxes</li>
              <li>Puppy boxes</li>
              <li>Older dog boxes</li>
              <li>Birthday boxes</li>
              <li>Special occasion treat boxes</li>
            </ul>
            <p>
              We&apos;re starting with one assorted box because we&apos;d rather do one thing
              beautifully before trying to do everything at once.
            </p>
            <p>As Doghouse Deli grows, so will the choices available to our families.</p>

            <h2>Puppy treats are coming</h2>
            <p>
              Puppies have different needs from adult dogs, and this is an area we&apos;re
              particularly excited to develop.
            </p>
            <p>
              Our future puppy range will focus on smaller, manageable pieces that are practical
              for little mouths and frequent training rewards.
            </p>
            <p>
              We&apos;ll also be particularly thoughtful about richness when choosing the puppy
              collection. Richer organ treats such as liver and heart won&apos;t form the basis of
              this range, and harder adult chews won&apos;t simply be added because they happen to
              be natural.
            </p>
            <p>
              As puppy breeders, we know just how many little rewards can disappear during a good
              training session.
            </p>
            <p>
              Puppy treats need to be appropriately sized, practical and easy to use without
              filling a tiny tummy with unnecessarily large or rich pieces.
            </p>
            <p>The dedicated Doghouse Deli Puppy range will come later.</p>

            <h2>Something softer for our older friends</h2>
            <p>Our older dogs deserve a little extra thought too.</p>
            <p>
              As dogs age, changes in their teeth, chewing strength and general health can mean the
              treat they loved when they were three isn&apos;t necessarily the treat they should
              be tackling when they&apos;re thirteen.
            </p>
            <p>
              Our future older dog range will focus particularly on smaller, softer and more
              manageable options rather than automatically including harder products such as
              tendons and other substantial chews.
            </p>
            <p>
              It&apos;s another range we want to develop thoughtfully rather than simply putting an
              &ldquo;older dog&rdquo; label on an ordinary box.
            </p>

            <h2>A little extra thought for teeth</h2>
            <p>Dental care is something we&apos;re very conscious of with our Cavoodles.</p>
            <p>
              We introduce our puppies to{' '}
              <Link to="/resources/grooming" className={ilink}>
                teeth brushing
              </Link>{' '}
              while they&apos;re still with us and encourage families to continue regular dental
              care at home throughout their dog&apos;s life.
            </p>
            <p>But brushing isn&apos;t the only time our dogs use their teeth.</p>
            <p>
              Part of the reason we like having different textures within the Doghouse Deli range
              is that chewing itself can provide useful mechanical action against the surface of
              the teeth. Some appropriately selected chews may help reduce the accumulation of
              plaque and food debris as the dog gnaws and works on the treat.
            </p>
            <p>That&apos;s one reason you&apos;ll see firmer and more substantial options alongside our smaller meat treats.</p>
            <p>But we don&apos;t want to overstate what a chew can do.</p>
            <p>
              Natural chews are not a replacement for regular teeth brushing, appropriate
              veterinary dental checks or professional dental treatment when required. And extremely
              hard chews are not automatically better for teeth. In fact, a product that is too
              hard for a particular dog may risk tooth damage.
            </p>
            <p>As with everything in Doghouse Deli, it&apos;s about choosing thoughtfully.</p>
            <p>The right texture. The right size. The right dog. And plenty of supervision.</p>

            <div className="my-8 grid items-center gap-8 md:grid-cols-2">
              <SquareImage
                src={asset("/images/photos/pup-in-hands.jpg")}
                alt="Cavoodle puppy held in hands"
              />
              <div>
                <h2 className="!mt-0">Your first Doghouse Deli delivery</h2>
                <p>We wanted receiving Doghouse Deli to feel special from the very first delivery.</p>
                <p>
                  With your first subscription, you&apos;ll receive your treats together with your
                  beautiful reusable Doghouse Deli treat box.
                </p>
                <p>
                  The box has a glossy white finish featuring our Doghouse Deli logo and is
                  designed to become the home for your dog&apos;s treat collection.
                </p>
                <p>
                  The treats themselves arrive sealed for freshness, with food-safe
                  moisture-control sachets included where appropriate.
                </p>
                <p>Then we do something deliberately different.</p>
                <p>We don&apos;t send you another presentation box every month.</p>
                <p>
                  With your subsequent monthly deliveries, your fresh treat selection arrives in
                  sealed refill packaging, ready for you to replenish your Doghouse Deli box at
                  home.
                </p>
                <p>
                  It means less unnecessary packaging while still giving you that beautiful
                  Doghouse Deli box sitting ready for some very hopeful little eyes.
                </p>
              </div>
            </div>

            <h2>Keeping your treats fresh</h2>
            <p>
              Keep unopened treats sealed until required and follow any storage and best-before
              information supplied with your delivery.
            </p>
            <p>
              Moisture-control sachets included inside relevant treat packaging help maintain
              product quality. They are not edible and must always be kept away from dogs and
              children.
            </p>
            <p>
              Once your treats are transferred into your Doghouse Deli box, keep it in a cool, dry
              location away from direct sunlight, heat and moisture.
            </p>

            <h2>Treats are treats</h2>
            <p>Even a beautiful natural treat is still a treat.</p>
            <p>Treats should complement a complete and balanced diet rather than replace it.</p>
            <p>
              How much is appropriate depends on the individual dog, including their size, age,
              activity level, usual diet and the particular treat being offered.
            </p>
            <p>For training, we&apos;re big believers in tiny rewards.</p>
            <p>
              Dogs don&apos;t measure the size of their reward in grams. A tiny piece can still
              tell them, &ldquo;Yes, that&apos;s exactly what I wanted.&rdquo;
            </p>
            <p>
              Smaller rewards also allow us to reinforce good behaviour repeatedly without
              unnecessarily adding large quantities of food to a dog&apos;s day.
            </p>

            <h2>Different treats for different purposes</h2>
            <p>Not every treat needs to do the same job.</p>
            <p>Small jerky pieces and meat cubes can make convenient rewards.</p>
            <p>Other treats provide opportunities for chewing and enrichment.</p>
            <p>
              Some firmer treats can provide a satisfying chewing experience and useful mechanical
              action against the teeth, while others are simply there to be enjoyed.
            </p>
            <p>And harder isn&apos;t always better.</p>
            <p>
              The right treat depends on the individual dog&apos;s age, size, dental health and
              chewing style.
            </p>

            <h2>Treat safety</h2>
            <p>
              Natural doesn&apos;t mean risk-free, and all dogs should be supervised when enjoying
              treats and chews.
            </p>
            <p>
              Dogs can approach the exact same treat very differently. One may carefully work away
              at a chew while another attempts to swallow a large piece as quickly as possible.
            </p>
            <p>Please:</p>
            <ul>
              <li>Always supervise your dog while they are eating treats or chews.</li>
              <li>
                Choose treats appropriate to your dog&apos;s size, age, dental health and chewing
                style.
              </li>
              <li>Ensure fresh drinking water is always available.</li>
              <li>
                Remove a chew once it becomes small enough to present a swallowing or choking risk.
              </li>
              <li>Never allow dogs or children to access moisture-control sachets or packaging.</li>
              <li>Introduce unfamiliar proteins and richer treats gradually.</li>
              <li>Feed treats in moderation as part of an appropriate overall diet.</li>
              <li>Take additional care with puppies, older dogs and dogs with dental problems.</li>
            </ul>
            <p>
              If your dog has known food allergies, pancreatitis, gastrointestinal disease,
              requires a veterinary diet or has another medical condition affecting what they
              should eat, please seek advice from your veterinarian before introducing new treats.
            </p>

            <h2>A note about harder chews</h2>
            <p>Our collection includes naturally firm products such as tendons, horns and cartilage.</p>
            <p>These won&apos;t be appropriate for every dog.</p>
            <p>
              Very enthusiastic or powerful chewers can potentially damage teeth on extremely hard
              products, while puppies, older dogs and dogs with existing dental issues may require
              softer alternatives.
            </p>
            <p>
              Know your dog, supervise them and remove a chew if you&apos;re uncomfortable with the
              way they&apos;re tackling it.
            </p>
            <p>
              Doghouse Deli is about providing thoughtful choices, not suggesting that every treat
              is right for every dog.
            </p>

            <h2>What about food allergies?</h2>
            <p>
              Because the treats we have selected are single-ingredient, it is easier to understand
              which animal protein you&apos;re giving your dog.
            </p>
            <p>
              However, our launch assorted box contains a rotating selection of proteins and cannot
              currently be customised.
            </p>
            <p>
              If your dog has a diagnosed allergy or intolerance and must completely avoid a
              particular animal protein, please don&apos;t order the assorted box with the
              expectation that we can remove that protein.
            </p>
            <p>
              Our future customisable and single-protein boxes are being planned with dogs like
              yours very much in mind.
            </p>

            <h2>Our approach to quality</h2>
            <p>
              Doghouse Deli comes from the same philosophy that sits behind{' '}
              <Link to="/about-us" className={ilink}>
                The Doghouse QLD
              </Link>
              .
            </p>
            <p>Details matter.</p>
            <p>
              Whether we&apos;re making a breeding decision, raising a litter, introducing a puppy
              to grooming or choosing something as seemingly simple as a treat, we want to
              understand what we&apos;re doing and why we&apos;re doing it.
            </p>
            <p>
              We aren&apos;t interested in filling a box with novelty products simply to make it
              look full.
            </p>
            <p>
              We would rather offer a thoughtful selection of natural, straightforward treats and
              give families useful information about what they&apos;re feeding.
            </p>
            <p>And there is one very simple question behind every treat we choose:</p>
            <p>Would we feed this to our own Cavoodles?</p>
            <p>If the answer isn&apos;t yes, it doesn&apos;t belong in Doghouse Deli.</p>

            <h2>The Doghouse Deli subscription</h2>
            <p>
              Doghouse Deli is designed as a convenient monthly subscription so a fresh selection
              of treats can arrive at your door without adding another thing to the family shopping
              list.
            </p>
            <p>At launch, there will be one assorted monthly subscription.</p>
            <p>The assortment can change from one delivery to the next.</p>
            <p>
              Your first subscription delivery includes the reusable Doghouse Deli presentation
              box. Future monthly deliveries provide your fresh selection in sealed refill
              packaging.
            </p>
            {/*
              OWNER: Monthly subscription price and postage are intentionally not displayed
              publicly yet. Per the approved docs and master handover, do not invent or
              publish prices, postage, checkout or payment details. Activate these sections
              (with final subscription terms) before enabling purchasing.
            */}

            <h2>Managing your subscription</h2>
            <p>
              We want Doghouse Deli to be something you and your dog look forward to, not
              something you&apos;re trapped into.
            </p>
            <p>Your subscription will continue monthly until cancelled.</p>
            <p>
              You&apos;ll be able to manage your delivery details and cancel your subscription in
              accordance with our subscription terms.
            </p>
            <p>
              Where supported by our final subscription system, we also intend to make managing
              your subscription as flexible as practical, including options such as pausing or
              skipping a delivery.
            </p>
            <p>
              Full processing dates, cancellation cut-offs and subscription terms will be clearly
              available before you subscribe.
            </p>
            {/*
              OWNER: Do not publicly promise pause or skip functionality unless the final
              subscription platform supports it correctly. Final billing, cancellation and
              subscription-management policies to be added once decided.
            */}

            <div
              id="deli-signup"
              className="my-10 scroll-mt-24 rounded-2xl border border-brand/15 bg-white p-6 shadow-sm md:p-8"
            >
              {/*
                OWNER: Doghouse Deli mailing audience. Per ZZZE this must remain a dedicated,
                separate audience (not merged with Master Waitlist or Guardian Opportunities).
                Connect via siteConfig.mailingLists.doghouseDeli when the mailing provider is
                chosen. Do not invent the provider.
              */}
              <h2 className="!mt-0 font-display">Join the Doghouse Deli List</h2>
              <p className="font-bold">Love the sound of Doghouse Deli?</p>
              <p>
                Join our email list to hear about Doghouse Deli news, new treat boxes, product
                launches and other Deli updates.
              </p>
              <div className="mt-6">
                <FormShell
                  formName="doghouse-deli-signup"
                  submitLabel="Join the Doghouse Deli List"
                  successHeading="Welcome to Doghouse Deli!"
                  successMessage="Thanks for joining us. You're now on our list to receive Doghouse Deli news, new product announcements and other Deli updates."
                >
                  <Field label="Your name" name="name" required placeholder="Your name" />
                  <Field
                    label="Email address"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                  />
                  <div>
                    <h3 className="!mb-1 !mt-0 text-base font-bold">
                      Tell Us a Little About Your Dog
                    </h3>
                    <p className="text-sm text-ink/60">
                      The following is optional.
                    </p>
                  </div>
                  <Field
                    label="Your dog's name"
                    name="dog_name"
                    placeholder="Dog's name"
                  />
                  <RadioGroup
                    legend="What Life Stage Is Your Dog?"
                    name="dog_life_stage"
                    options={['Puppy', 'Adult', 'Senior']}
                  />
                  <fieldset className="text-sm font-semibold text-ink">
                    <legend>What Would You Be Interested in Hearing About?</legend>
                    <p className="mt-1 text-xs font-normal text-ink/60">
                      Optional. Select all that apply.
                    </p>
                    <div className="mt-2 grid gap-2">
                      {interests.map((interest) => (
                        <label
                          key={interest}
                          className="flex cursor-pointer items-center gap-3 font-normal"
                        >
                          <input
                            type="checkbox"
                            name="interest"
                            value={interest}
                            className="h-5 w-5 shrink-0 accent-[#17A296]"
                          />
                          {interest}
                        </label>
                      ))}
                    </div>
                  </fieldset>
                  <CheckboxField
                    required
                    name="consent"
                    label="Yes, I'd like to receive Doghouse Deli news, product updates and offers by email."
                  />
                  <p className="text-sm leading-relaxed text-ink/70">
                    We respect your privacy. Your information will be handled in accordance with
                    our{' '}
                    <Link to="/privacy-policy" className={ilink}>
                      Privacy Policy
                    </Link>
                    . You can unsubscribe from Doghouse Deli emails at any time.
                  </p>
                </FormShell>
              </div>
            </div>

            <h2>Problems with an order</h2>
            <p>
              If your delivery arrives damaged, something is missing or there is a genuine problem
              with your order, please contact The Doghouse QLD promptly so we can look into it for
              you.
            </p>
            <p>
              Because dog treats are food products, opened products generally cannot be returned
              simply because a dog doesn&apos;t like a particular treat.
            </p>
            <p>
              Full refund, replacement, delivery and subscription terms will be available before
              purchase and will operate alongside your rights under Australian Consumer Law.
            </p>

            <h2>Doghouse Deli is for more than Doghouse dogs</h2>
            <p>
              Doghouse Deli may have been born at The Doghouse QLD and tested by our own rather
              enthusiastic Cavoodle tasting panel, but you certainly don&apos;t need to have one of
              our puppies to join us.
            </p>
            <p>You don&apos;t even need to own a Cavoodle.</p>
            <p>
              We&apos;ve created Doghouse Deli with Cavoodles, oodles, sensitive tummies and
              discerning palates particularly in mind, but beautiful natural treats can be enjoyed
              by dogs of many breeds.
            </p>
            <p>
              If you&apos;re particular about what goes into your dog&apos;s treat cupboard,
              you&apos;re very welcome here.
            </p>

            <h2>This is just the beginning</h2>
            <p>Doghouse Deli begins with one simple idea.</p>
            <p>
              To make it easier for families to keep a beautiful selection of thoughtfully chosen
              natural treats at home, selected by people who have genuinely fed and tested them
              with their own dogs for years.
            </p>
            <p>We&apos;re starting with our assorted subscription box.</p>
            <p>From there, we have plenty planned.</p>
            <p>
              More choice. More personalisation. Specialised boxes. Puppy options. Older dog
              options. Single-protein selections. And a few ideas we&apos;re keeping to ourselves
              for now.
            </p>
            <p>
              But just as we do with our dogs, we&apos;re not interested in rushing simply for the
              sake of doing more.
            </p>
            <p>We&apos;ll grow Doghouse Deli thoughtfully.</p>
            <p>
              One good decision, one beautiful box and, we suspect, quite a few wagging tails at a
              time.
            </p>
          </ReadMore>
        </div>
      </section>
    </main>
  );
}
