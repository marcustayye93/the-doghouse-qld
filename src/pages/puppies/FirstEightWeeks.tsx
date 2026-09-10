import { useState } from 'react';
import {
  ApplyNowButton,
  PhotoPlaceholder,
  PuppySectionNav,
  usePageMeta,
} from '../../components/ui';

function ReadToggle({ open, onToggle, id }: { open: boolean; onToggle: () => void; id: string }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-expanded={open}
      aria-controls={id}
      className="mt-4 inline-flex items-center font-semibold text-branddark underline decoration-brand/40 underline-offset-4 transition hover:decoration-brand"
    >
      {open ? 'Read less' : 'Read more...'}
    </button>
  );
}

/**
 * PUPPIES > The First Eight Weeks.
 * Built from XXXXX_The_first_8_weeks.docx: exact approved copy, Read more...
 * directly under the final sentence of the opening copy, alternating
 * text/square-image sections down the chronological journey (image positions
 * held ready for final approved photographs), Read less directly under the
 * final sentence in the text column, Apply Now outside the expandable
 * content, PUPPIES related navigation, global footer.
 */
export default function FirstEightWeeks() {
  const [open, setOpen] = useState(false);
  usePageMeta(
    'The First Eight Weeks',
    'From tiny newborns to curious puppies ready for their families: the first eight weeks at The Doghouse QLD.'
  );
  return (
    <main>
      <section className="mx-auto max-w-6xl px-5 pt-10 md:pt-14">
        <h1 className="text-center font-display text-5xl font-bold leading-tight text-brand md:text-6xl">
          The First Eight Weeks
        </h1>
        <div className="prose-dog mx-auto mt-8 max-w-3xl">
            <p>The first eight weeks of a puppy's life are extraordinary.</p>
            <p>A newborn puppy arrives completely dependent on their mother, unable to see or hear and with very limited ability to regulate their own body. Just eight weeks later, that tiny newborn is ready to begin life with a family of their own.</p>
            <p>So much happens in between.</p>
            <p>At The Doghouse QLD, we see these first eight weeks as a journey. As our puppies grow and their developmental needs change, their world gradually grows with them. We introduce new experiences at an age-appropriate pace while making sure there is still plenty of time for the things puppies need most: their mum, sleep, security, play and simply being puppies.</p>
          <ReadToggle open={open} onToggle={() => setOpen((v) => !v)} id="first-eight-weeks-extended" />
        </div>
        <div
          id="first-eight-weeks-extended"
          className={`grid transition-all duration-500 ease-in-out ${open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
        >
          <div className="overflow-hidden">
            <div className="prose-dog mx-auto mt-10 max-w-3xl">
            <p>Although there are developmental stages that puppies generally move through at similar ages, puppies are individuals. They do not all reach every milestone on exactly the same day, and we never believe in pushing a puppy into an experience simply because a calendar says it is time.</p>
            <p>Instead, we watch the litter and the individual puppy and introduce experiences when they are developmentally ready.</p>
            <p>Here is a little glimpse into how those remarkable first eight weeks unfold at The Doghouse.</p>
            </div>
            <div className="mt-14 grid gap-14 md:gap-20">
          <section className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
            <div className="md:order-1">
              <div className="prose-dog [&>h2:first-child]:mt-0">
                <h2>Birth to Two Weeks: A tiny world centred around Mum</h2>
              <p>During the first couple of weeks, a puppy's world is beautifully simple.</p>
              <p>Their priorities are warmth, nourishment, sleep and their mother.</p>
              <p>Newborn puppies are born with their eyes and ears closed. They rely heavily on touch, warmth and scent to navigate their tiny world, spending most of their time feeding and sleeping while their bodies and nervous systems undergo enormous development.</p>
              <p>Our role during this stage is largely about supporting mum and allowing her to care for her babies while we carefully monitor both her and the litter.</p>
              <p>Puppies are weighed regularly so we can monitor their growth, and we observe feeding, behaviour and general wellbeing closely.</p>
              <p>Our dedicated indoor whelping room is within our home and provides mum and her puppies with a calm, temperature-controlled environment. It includes the equipment we need close at hand, along with a heated area for the puppies and 24-hour video monitoring.</p>
              <p>This allows us to keep a close eye on the litter without unnecessarily disturbing the quiet relationship between mum and her newborn babies.</p>
              <p><strong className="font-bold">Early Neurological Stimulation and Early Scent Introduction</strong></p>
              <p>From approximately three days of age, we begin incorporating Early Neurological Stimulation, or ENS, and Early Scent Introduction, or ESI.</p>
              <p>At this age, the exercises and experiences are extremely brief and appropriate for this very early developmental period.</p>
              <p>ENS provides puppies with gentle, controlled forms of stimulation, while ESI introduces their already-important sense of smell to a variety of safe scents.</p>
              <p>These activities form only one small part of the much broader developmental journey ahead.</p>
              <p>At this stage, less is very much more. Newborn puppies need enormous amounts of sleep and uninterrupted time with their mother, so everything we introduce is kept gentle and brief.</p>
              </div>
            </div>
            <div className="md:order-2">
              <PhotoPlaceholder />
            </div>
          </section>
          <section className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
            <div className="md:order-2">
              <div className="prose-dog [&>h2:first-child]:mt-0">
                <h2>Around Two to Three Weeks: The world begins to appear</h2>
              <p>This is one of the most magical stages to watch.</p>
              <p>Little eyes begin opening. Hearing starts developing. Puppies who previously moved mostly by crawling begin trying to get their legs underneath them.</p>
              <p>Their movements are initially wonderfully wobbly, but day by day they become stronger and more coordinated.</p>
              <p>For the first time, littermates begin becoming more than simply warm bodies to sleep beside. Early interactions and the beginnings of play start to appear.</p>
              <p>As their senses develop, we gently begin increasing their experiences.</p>
              <p>Human handling continues, and puppies become increasingly aware of touch, voices, movement and the environment around them.</p>
              <p>This is also around the time we begin weekly nail care. Starting young allows paw handling and nail care to become a familiar part of life rather than something completely new when they are older.</p>
              <p>There is no rush to make their world enormous.</p>
              <p>At this stage, their world is only just beginning to open.</p>
              </div>
            </div>
            <div className="md:order-1">
              <PhotoPlaceholder />
            </div>
          </section>
          <section className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
            <div className="md:order-1">
              <div className="prose-dog [&>h2:first-child]:mt-0">
                <h2>Around Three to Four Weeks: Finding their feet</h2>
              <p>By three to four weeks, puppies are becoming increasingly mobile, curious and interactive.</p>
              <p>Walking becomes steadier. Play becomes more obvious. Personalities begin peeking through.</p>
              <p>They start investigating rather than simply existing within their environment.</p>
              <p>This is when their living space can gradually begin providing more opportunities for exploration.</p>
              <p>Puppies start experiencing age-appropriate toys and novelty items, different textures and simple enrichment opportunities.</p>
              <p>They begin discovering that things can move, make noises, feel different beneath their paws and sometimes require a little thought to investigate.</p>
              <p>Their interactions with us also increase as they become more capable of actively engaging with people.</p>
              <p>We begin seeing little glimpses of the individuals they are becoming. Some puppies are immediately curious. Some prefer to observe before joining in. Some are determined problem-solvers. Others look to people for a little reassurance.</p>
              <p>There is no "right" personality.</p>
              <p>These differences are the beginning of what makes each puppy uniquely themselves.</p>
              </div>
            </div>
            <div className="md:order-2">
              <PhotoPlaceholder />
            </div>
          </section>
          <section className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
            <div className="md:order-2">
              <div className="prose-dog [&>h2:first-child]:mt-0">
                <h2>Around Four to Five Weeks: Learning through play</h2>
              <p>By four to five weeks, puppy life becomes considerably busier.</p>
              <p>Play is becoming an increasingly important way in which puppies learn about their bodies, their littermates and their environment.</p>
              <p>They chase, wrestle, explore and investigate.</p>
              <p>Their environment develops with them.</p>
              <p>We begin introducing a broader variety of age-appropriate enrichment and novelty. Depending on the litter and individual puppy, this can include tunnels, different toys, simple puzzles, snuffle activities, unfamiliar objects and equipment that encourages puppies to explore and think.</p>
              <p>Wobble and balance equipment can introduce the feeling of a surface moving gently beneath their feet.</p>
              <p>Different textures and surfaces provide new sensory information.</p>
              <p>New sounds become part of their expanding world.</p>
              <p>Importantly, these activities are not about keeping puppies constantly entertained.</p>
              <p>Young puppies still require enormous amounts of sleep.</p>
              <p>Periods of stimulation are balanced with quiet time, rest and the opportunity for puppies simply to play naturally with their littermates.</p>
              </div>
            </div>
            <div className="md:order-1">
              <PhotoPlaceholder />
            </div>
          </section>
          <section className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
            <div className="md:order-1">
              <div className="prose-dog [&>h2:first-child]:mt-0">
                <h2>Early toilet-learning foundations</h2>
              <p>As puppies become more mobile, we also begin establishing early toilet-learning foundations.</p>
              <p>Their indoor puppy environment provides a separate toileting area away from their main sleeping and play areas.</p>
              <p>At this age, we are not expecting puppies to be toilet trained.</p>
              <p>We are simply beginning to create a distinction between the areas where they sleep and play and the place provided for toileting.</p>
              <p>As the puppies become older and begin spending time outside, this foundation expands to include opportunities to toilet on natural grass.</p>
              <p>We also introduce our clear acrylic doggy door so moving through a dog door begins becoming another familiar part of their environment.</p>
              <p>It is the beginning of a skill their families will continue teaching once they arrive home.</p>
              </div>
            </div>
            <div className="md:order-2">
              <PhotoPlaceholder />
            </div>
          </section>
          <section className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
            <div className="md:order-2">
              <div className="prose-dog [&>h2:first-child]:mt-0">
                <h2>Around Five to Six Weeks: The world gets much bigger</h2>
              <p>By five to six weeks, the transformation from helpless newborn to adventurous little dog is remarkable.</p>
              <p>Puppies are more physically capable, their senses are well developed and their natural curiosity is growing.</p>
              <p>Their experiences can now become more varied.</p>
              <p>When developmentally ready, puppies begin supervised exploration of our outdoor puppy areas.</p>
              <p>One provides premium pet synthetic turf with interactive equipment and opportunities for active exploration.</p>
              <p>The other provides natural grass, garden experiences, gentle sunshine and another completely different surface beneath their paws.</p>
              <p>The garden itself offers a world of natural sights, smells, textures and sounds.</p>
              <p>Rather than experiencing only one type of environment, puppies begin discovering that the world changes depending on where they are.</p>
              </div>
            </div>
            <div className="md:order-1">
              <PhotoPlaceholder />
            </div>
          </section>
          <section className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
            <div className="md:order-1">
              <div className="prose-dog [&>h2:first-child]:mt-0">
                <h2>Everyday life becomes part of puppy life</h2>
              <p>As the puppies mature, normal household and environmental experiences become increasingly incorporated into their days.</p>
              <p>They may hear the vacuum cleaner, television, household activity and outdoor equipment such as the leaf blower.</p>
              <p>We have relaxed movie afternoons where puppies can settle while experiencing the changing sounds of television and everyday family life.</p>
              <p>They may investigate bubbles, hula hoops and other unusual objects.</p>
              <p>They experience different surfaces such as indoor flooring, synthetic turf, natural lawn and gravel.</p>
              <p>The objective is never to bombard puppies with noise or novelty.</p>
              <p>We introduce experiences thoughtfully so puppies have opportunities to notice, investigate and recover from something unfamiliar.</p>
              <p>Sometimes a puppy walks straight towards something new.</p>
              <p>Sometimes they stop and think.</p>
              <p>Both responses tell us something.</p>
              </div>
            </div>
            <div className="md:order-2">
              <PhotoPlaceholder />
            </div>
          </section>
          <section className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
            <div className="md:order-2">
              <div className="prose-dog [&>h2:first-child]:mt-0">
                <h2>Around Six Weeks: Grooming preparation becomes more familiar</h2>
              <p>By this stage, grooming and body handling become increasingly important parts of puppy life.</p>
              <p>Cavoodles require lifelong grooming, so we want the sensations associated with grooming to begin feeling familiar while puppies are still young.</p>
              <p>Along with the nail care and handling that began earlier, puppies are gradually introduced to experiences such as bathing, blow-drying and paw-pad trimming.</p>
              <p>The gentle hum and vibration of an electric toothbrush may be used to familiarise them with sensations similar to grooming equipment.</p>
              <p>We touch paws, ears and bodies and help puppies become comfortable with calm handling.</p>
              <p>This does not mean a six-week-old puppy is expected to behave like an experienced adult dog at the groomer.</p>
              <p>We are simply laying foundations.</p>
              </div>
            </div>
            <div className="md:order-1">
              <PhotoPlaceholder />
            </div>
          </section>
          <section className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
            <div className="md:order-1">
              <div className="prose-dog [&>h2:first-child]:mt-0">
                <h2>Car rides and experiences beyond home</h2>
              <p>As puppies become developmentally ready, we begin introducing experiences beyond their immediate puppy environment.</p>
              <p>Car rides allow puppies to begin experiencing the sounds, movement and sensations of travelling in a vehicle.</p>
              <p>This is particularly useful because one of the first major experiences every puppy will eventually have is travelling away from The Doghouse with their new family.</p>
              <p>We may also introduce gentle familiarisation with wearing equipment and the earliest foundations associated with walking on a loose lead.</p>
              <p>Again, we are not expecting polished skills.</p>
              <p>At this age, familiarity is the goal.</p>
              </div>
            </div>
            <div className="md:order-2">
              <PhotoPlaceholder />
            </div>
          </section>
          <section className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
            <div className="md:order-2">
              <div className="prose-dog [&>h2:first-child]:mt-0">
                <h2>Confidence, problem-solving and little challenges</h2>
              <p>As puppies become more capable, we give them opportunities to work through simple age-appropriate challenges.</p>
              <p>A puppy may need to work out how to move through a tunnel, step onto an unfamiliar surface, navigate around an object or investigate something they have never seen before.</p>
              <p>We don't measure success by how quickly every puppy completes an activity.</p>
              <p>Often, what interests us most is how they approach it.</p>
              <p>Do they rush in?</p>
              <p>Do they pause and observe?</p>
              <p>Do they investigate gradually?</p>
              <p>Do they persist?</p>
              <p>Do they look to a person for guidance?</p>
              <p>And if something surprises them, how quickly do they recover and investigate again?</p>
              <p>These experiences give puppies opportunities to develop confidence and problem-solving skills while giving us valuable insight into the individual puppy.</p>
              </div>
            </div>
            <div className="md:order-1">
              <PhotoPlaceholder />
            </div>
          </section>
          <section className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
            <div className="md:order-1">
              <div className="prose-dog [&>h2:first-child]:mt-0">
                <h2>Around Six to Seven Weeks: Their personalities are emerging</h2>
              <p>By six to seven weeks, the differences between littermates can become increasingly apparent.</p>
              <p>They may all share parents, an environment and many of the same experiences, but they are certainly not identical.</p>
              <p>One puppy may be outgoing and adventurous.</p>
              <p>Another may be thoughtful and observant.</p>
              <p>One may seek people out constantly, while another is happy to explore independently before coming back for affection.</p>
              <p>Some may have a naturally softer approach to the world, while others seem ready to investigate everything immediately.</p>
              <p>Throughout the previous weeks we have been observing these differences during everyday puppy life.</p>
              <p>This becomes particularly valuable as we move towards temperament evaluation and matching.</p>
              </div>
            </div>
            <div className="md:order-2">
              <PhotoPlaceholder />
            </div>
          </section>
          <section className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
            <div className="md:order-2">
              <div className="prose-dog [&>h2:first-child]:mt-0">
                <h2>Approximately 6.5 to 7 Weeks: Temperament evaluation</h2>
              <p>At approximately 6.5 to 7 weeks, we undertake temperament evaluation as another part of understanding each puppy.</p>
              <p>This is not viewed in isolation.</p>
              <p>A temperament evaluation is one moment in time, so we consider it alongside weeks of observations about how that puppy has behaved, learned, played, interacted and responded to different experiences.</p>
              <p>We are looking at the individual puppy rather than simply asking which puppy is the prettiest or which colour a family likes most.</p>
              <p>The information helps us consider which puppy may be best suited to different households and lifestyles.</p>
              <p>The puppy suited to a busy family with children may not necessarily be the same puppy we would choose for a quieter household.</p>
              <p>Matching is about finding compatibility, not ranking puppies from best to worst.</p>
              </div>
            </div>
            <div className="md:order-1">
              <PhotoPlaceholder />
            </div>
          </section>
          <section className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
            <div className="md:order-1">
              <div className="prose-dog [&>h2:first-child]:mt-0">
                <h2>Around Seven to Eight Weeks: Preparing for their families</h2>
              <p>The final week or so is incredibly exciting, but it is also an important transition period.</p>
              <p>The puppies are becoming increasingly capable little dogs, but they are still very young babies.</p>
              <p>We continue their enrichment, socialisation, handling, grooming preparation, outdoor experiences, toilet-learning foundations and everyday learning.</p>
              <p>We also continue spending time with puppies as individuals so that being separated briefly from the group for positive interaction does not feel entirely unfamiliar.</p>
              <p>Their experiences with people, car travel, handling, household sounds, different surfaces and environments have all been helping to prepare them for the enormous change ahead.</p>
              <p>There is no way to make moving to a new home completely familiar.</p>
              <p>What we can do is make sure the world outside the litter is not entirely new.</p>
              </div>
            </div>
            <div className="md:order-2">
              <PhotoPlaceholder />
            </div>
          </section>
          <section className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
            <div className="md:order-2">
              <div className="prose-dog [&>h2:first-child]:mt-0">
                <h2>Veterinary care before leaving us</h2>
              <p>Before leaving The Doghouse, puppies receive the age-appropriate veterinary care required as part of our puppy process.</p>
              <p>They are microchipped and receive their first puppy vaccination and veterinary health assessment before going home.</p>
              <p>Their families receive the relevant veterinary and puppy information as part of their handover.</p>
              <p>Vaccination protection is not complete when a puppy first leaves us, so families need to continue the required puppy vaccination schedule with their veterinarian and carefully manage exposure to public areas until their puppy is appropriately protected.</p>
              <p>Detailed vaccination and health information is provided separately to our puppy families.</p>
              </div>
            </div>
            <div className="md:order-1">
              <PhotoPlaceholder />
            </div>
          </section>
          <section className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
            <div className="md:order-1">
              <div className="prose-dog [&>h2:first-child]:mt-0">
                <h2>Handover is not the end of our role</h2>
              <p>Puppies can begin leaving for their new homes from eight weeks of age, although there may be occasions where we decide an individual puppy would benefit from remaining with us a little longer.</p>
              <p>Going-home day is the end of their first chapter, but certainly not the end of their development.</p>
              <p>An eight-week-old puppy is not a finished dog.</p>
              <p>They are not completely toilet trained.</p>
              <p>They are not completely socialised.</p>
              <p>They do not have perfect manners.</p>
              <p>They cannot yet confidently cope with every situation life might present.</p>
              <p>What they do have is a foundation.</p>
              </div>
            </div>
            <div className="md:order-2">
              <PhotoPlaceholder />
            </div>
          </section>
          <section className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
            <div className="md:order-2">
              <div className="prose-dog [&>h2:first-child]:mt-0">
                <h2>The next eight weeks belong to you</h2>
              <p>The work we do during the first eight weeks matters, but what happens afterwards matters enormously too.</p>
              <p>Your puppy's developmental journey continues the moment they arrive home.</p>
              <p>The routines you establish, the independence you teach, the socialisation you continue, the grooming and handling you practise, the boundaries you introduce and the relationship you build will all help shape the adult dog your puppy becomes.</p>
              <p>Our job is to give them the best foundation we can during their first eight weeks.</p>
              <p>Then we hand that little puppy, and that foundation, over to you.</p>
              <p>And that is where your life together really begins.</p>
              <ReadToggle open={open} onToggle={() => setOpen((v) => !v)} id="first-eight-weeks-extended" />
              </div>
            </div>
            <div className="md:order-1">
              <PhotoPlaceholder />
            </div>
          </section>
            </div>
          </div>
        </div>
        <div className="mt-14 flex justify-center">
          <ApplyNowButton />
        </div>
      </section>
      <div className="mt-14">
        <PuppySectionNav currentPath="/puppies/first-eight-weeks" />
      </div>
    </main>
  );
}
