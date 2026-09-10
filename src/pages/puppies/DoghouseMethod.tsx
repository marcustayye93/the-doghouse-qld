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
 * PUPPIES > The Doghouse Method (TM).
 * Built from XXXX_The_Doghouse_Method.docx: exact approved copy, Read more...
 * directly under the final sentence of the opening copy (text column), Read
 * less directly under the final sentence of the extended content, square
 * image position held ready for the final approved photograph.
 */
export default function DoghouseMethod() {
  const [open, setOpen] = useState(false);
  usePageMeta(
    'The Doghouse Method™',
    'Discover The Doghouse Method, the thoughtful puppy-raising approach behind The Doghouse QLD.'
  );
  return (
    <main>
      <section className="mx-auto max-w-6xl px-5 pt-10 md:pt-14">
        <h1 className="text-center font-display text-5xl font-bold leading-tight text-brand md:text-6xl">
          The Doghouse Method™
        </h1>
        <div className="mt-10 grid items-start gap-10 md:grid-cols-2 md:gap-12">
          <div>
            <div className="prose-dog">
              <p className="text-xl font-semibold leading-relaxed">Raising puppies with purpose, from the very beginning.</p>
              <p>Every puppy born at The Doghouse QLD begins learning about the world long before they leave us at eight weeks of age.</p>
              <p>The Doghouse Method™ is our approach to raising puppies with purpose. It brings together early neurological and scent stimulation, thoughtful socialisation, confidence building, enrichment, positive human interaction, grooming preparation, exposure to everyday life and careful observation of each puppy as an individual.</p>
              <p>Our aim is not to create puppies that have experienced absolutely everything before they leave us. That would be impossible. Instead, we want to give them a strong developmental foundation and help them begin learning that new experiences can be approached with curiosity and confidence.</p>
            </div>
            <ReadToggle open={open} onToggle={() => setOpen((v) => !v)} id="doghouse-method-extended" />
          </div>
          <PhotoPlaceholder />
        </div>
        <div
          id="doghouse-method-extended"
          className={`grid transition-all duration-500 ease-in-out ${open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
        >
          <div className="overflow-hidden">
            <div className="prose-dog mx-auto mt-10 max-w-3xl">
              <p>Puppy development begins incredibly early, and those first eight weeks provide an important opportunity to gently introduce experiences that help prepare puppies for life beyond The Doghouse.</p>
              <p>Rather than simply allowing our puppies to grow up around us, we deliberately consider what they are learning at each stage of their development.</p>
              <p>The Doghouse Method™ continues to evolve as we learn more about puppy development, behaviour and the individual needs of the puppies we raise. It is not about ticking boxes or putting puppies through a rigid program. Every litter is different and every puppy develops at their own pace.</p>
              <p>Our role is to provide appropriate opportunities, observe how each puppy responds and gently help them build the skills they will need as family companions.</p>
              <h2>It begins in the whelping box</h2>
              <p>During the earliest weeks, our puppies spend their time with their mother in our dedicated indoor whelping room within our home.</p>
              <p>This allows us to closely monitor mum and puppies while giving them a calm, secure environment in which to begin life.</p>
              <p>As their senses and mobility develop, their world gradually becomes larger. Experiences are introduced according to the puppies' developmental stage rather than overwhelming them with too much, too soon.</p>
              <p>From these very early days, gentle handling and appropriate stimulation begin laying foundations for the weeks ahead.</p>
              <h2>Early Neurological Stimulation</h2>
              <p>From approximately three days of age, we incorporate Early Neurological Stimulation, commonly known as ENS.</p>
              <p>ENS involves a series of very brief, gentle exercises performed during a specific early developmental period.</p>
              <p>The exercises introduce puppies to mild, controlled forms of stimulation while their neurological systems are developing.</p>
              <p>ENS is only one small component of our puppy-raising program. It is not something we view as a guarantee of future temperament or behaviour. Rather, it forms part of the broader developmental foundation we provide throughout the puppies' time with us.</p>
              <h2>Early Scent Introduction</h2>
              <p>We also introduce Early Scent Introduction, or ESI, during the puppies' early developmental period.</p>
              <p>Before puppies can see or hear, scent is already an important way in which they experience their world.</p>
              <p>ESI gently introduces puppies to a variety of safe scents, allowing us to engage this developing sense during those very early weeks.</p>
              <p>Like ENS, ESI is one component of a much larger program rather than a stand-alone exercise.</p>
              <h2>Positive relationships with people</h2>
              <p>Our puppies are being raised to become family companions, so positive interaction with people is an important part of their development.</p>
              <p>As they grow, puppies experience plenty of gentle handling, affection, play and everyday interaction with us. They learn that people can be a source of comfort, fun, guidance and security.</p>
              <p>We also spend time interacting with puppies individually, rather than only engaging with them as a litter. This gives us opportunities to get to know each puppy more closely while allowing them to experience positive one-on-one human attention.</p>
              <p>We want our puppies to enjoy being with people and to begin developing trust in human interaction, while also learning that they do not need someone's undivided attention every moment of the day.</p>
              <h2>A world that gradually becomes bigger</h2>
              <p>As puppies begin walking, playing, exploring and interacting more confidently, we gradually increase the variety of experiences available to them.</p>
              <p>Their environment develops from the security of the whelping area into a larger indoor puppy space with room for play, exploration, enrichment and early toilet-learning foundations.</p>
              <p>Later, when they are developmentally ready, they begin enjoying supervised outdoor experiences as well.</p>
              <p>Our puppies have access to two different outdoor environments, including an area with premium pet synthetic turf and interactive equipment, as well as natural grass where they can enjoy gentle sunshine, explore the garden environment and begin becoming familiar with toileting on lawn.</p>
              <p>The intention is not constant stimulation. Puppies also need enormous amounts of sleep, quiet time and opportunities simply to be puppies.</p>
              <p>We aim for a thoughtful balance between rest, play, learning and new experiences.</p>
              <h2>Building confidence through novelty</h2>
              <p>A cardboard box, an unfamiliar sound or a surface that moves beneath their feet might seem insignificant to us, but to a young puppy each can be an opportunity to learn.</p>
              <p>Throughout their development, we introduce age-appropriate novelty in many different forms.</p>
              <p>Puppies may encounter tunnels, wobble and balance equipment, snuffle activities, different toys, sound experiences, hula hoops, bubbles and objects with unfamiliar shapes, textures or movement.</p>
              <p>They experience different surfaces under their paws, including indoor flooring, synthetic turf, natural grass and gravel.</p>
              <p>The objective is not to frighten puppies or force them through something they find overwhelming.</p>
              <p>We allow them time to investigate, think and work things out. When something is unfamiliar, we want puppies to begin developing the confidence to approach it at their own pace rather than automatically avoid it.</p>
              <h2>Learning to think, persist and recover</h2>
              <p>Confidence is not about never finding something difficult. Part of growing into a capable young dog is beginning to learn what to do when something does not happen immediately or when an experience feels a little unfamiliar.</p>
              <p>Within safe, age-appropriate situations, we don't necessarily rush in to solve every tiny problem for a puppy the instant they encounter it.</p>
              <p>Sometimes we give them a moment to think, investigate, try another approach or work out how to navigate a simple challenge for themselves.</p>
              <p>We are always watching and supporting them, and we would never deliberately leave a puppy frightened or overwhelmed. The aim is gentle opportunity, not unnecessary stress.</p>
              <p>These little moments can help puppies begin developing persistence, problem-solving skills and the ability to recover after something doesn't go exactly as expected.</p>
              <p>Those are useful foundations for real family life, where the world cannot always be perfectly predictable.</p>
              <h2>Everyday sounds and household life</h2>
              <p>Our puppies are raised as part of the everyday rhythm of The Doghouse.</p>
              <p>Life is not silent, and we do not believe puppies should spend their first eight weeks in an artificially quiet environment.</p>
              <p>As they become developmentally ready, they are gradually exposed to normal household and environmental sounds and activities.</p>
              <p>This can include the vacuum cleaner, television and movie sounds, household activity, grooming equipment and outdoor noises such as the leaf blower.</p>
              <p>We also have relaxed movie afternoons where puppies can experience different sounds while settling and resting around us.</p>
              <p>The purpose is sensible, gradual familiarisation rather than simply making as much noise around puppies as possible.</p>
              <h2>Learning through play</h2>
              <p>Play is one of the most valuable ways puppies learn.</p>
              <p>Our puppy areas include toys, puzzles and enrichment activities that encourage puppies to explore, investigate and use their developing bodies and brains.</p>
              <p>Tunnels encourage exploration. Wobble and balance equipment introduces movement beneath their feet. Snuffle activities encourage puppies to use their noses. Novel objects give them opportunities to investigate something they have not seen before.</p>
              <p>Sometimes the most valuable part of an activity is not whether a puppy completes it immediately, but how they approach it.</p>
              <p>Those little moments give us valuable insight into each puppy's confidence, persistence, curiosity and problem-solving style.</p>
              <h2>Early independence</h2>
              <p>Cavoodles are wonderfully affectionate dogs and often love being close to their people. That is one of the characteristics families adore about them.</p>
              <p>But loving your Cavoodle and teaching your Cavoodle independence are not opposites.</p>
              <p>During their time with us, puppies gradually experience age-appropriate opportunities to develop confidence without needing constant human attention.</p>
              <p>They also begin learning that periods of calm, rest and time without continuous interaction are simply part of normal life.</p>
              <p>We want puppies to enjoy people and connection while also beginning to develop the emotional skills that will help them cope when their family cannot be beside them every moment of the day.</p>
              <p>This is only the beginning. Their new family will need to continue building healthy independence once their puppy comes home.</p>
              <h2>Preparing for grooming from puppyhood</h2>
              <p>Grooming will be part of a Cavoodle's life forever, so we believe preparation should begin before puppies leave us.</p>
              <p>Our puppies are gradually introduced to the types of handling, sounds and sensations they are likely to encounter throughout their lives.</p>
              <p>We begin weekly nail care from approximately three weeks of age and introduce puppies to experiences such as bathing, blow-drying, paw handling and paw-pad trimming.</p>
              <p>We may also use the gentle hum and vibration of an electric toothbrush as an early introduction to the sensation and sound of grooming equipment.</p>
              <p>The purpose is not to teach an eight-week-old puppy to stand perfectly for a complete professional groom. It is to begin building positive familiarity with being touched, handled and groomed.</p>
              <p>Families then have an important role in continuing this preparation at home.</p>
              <h2>Preparing for everyday handling and care</h2>
              <p>A family dog needs to be comfortable with far more than cuddles.</p>
              <p>Throughout their lives, dogs will need their paws handled, ears checked, teeth cared for, coats brushed and bodies examined.</p>
              <p>They will visit vets and groomers and occasionally need people to look closely at areas they might prefer were left alone.</p>
              <p>We therefore incorporate calm, gentle body handling into puppy life.</p>
              <p>We also encourage families to continue this from the day their puppy arrives home, including introducing daily tooth brushing from puppyhood so that dental care becomes a normal part of life rather than something suddenly introduced later.</p>
              <h2>Early toilet-learning foundations</h2>
              <p>We do not promise that an eight-week-old puppy will arrive home completely toilet trained.</p>
              <p>At that age, puppies are still babies and their new family will need to continue the process.</p>
              <p>What we can do is begin creating useful foundations.</p>
              <p>As puppies grow, their indoor environment provides a distinct toileting area, helping them begin learning that there are appropriate places to toilet away from their sleeping and play areas.</p>
              <p>When they begin spending supervised time outside, they also have opportunities to toilet on natural lawn.</p>
              <p>We introduce an acrylic doggy door so puppies can begin becoming familiar with moving through a doorway designed specifically for them.</p>
              <p>These experiences provide a starting point that families can build upon at home.</p>
              <h2>Early experiences beyond the puppy pen</h2>
              <p>As puppies become ready, their experiences extend beyond their immediate puppy areas.</p>
              <p>This may include supervised garden exploration, car rides and other carefully chosen experiences that allow them to encounter something different while still feeling supported.</p>
              <p>We also begin gentle familiarisation with wearing equipment and the very early foundations associated with loose-lead walking.</p>
              <p>At eight weeks we do not expect puppies to walk beautifully on a lead. We simply want some of these sensations to be less unfamiliar when their families begin teaching those skills properly.</p>
              <h2>Socialisation is more than meeting lots of people</h2>
              <p>Socialisation is sometimes misunderstood as simply exposing a puppy to as many people, dogs and places as possible.</p>
              <p>We see it differently.</p>
              <p>Good early socialisation is about helping puppies form positive associations with the world while protecting them from experiences that are too intense or inappropriate for their developmental stage.</p>
              <p>Quality matters more than simply accumulating experiences.</p>
              <p>We want puppies to encounter different sights, sounds, surfaces, objects, handling and situations in ways that help build confidence rather than overwhelm them.</p>
              <p>Their new families then continue that process carefully after they leave us, while also following appropriate vaccination precautions.</p>
              <h2>We watch the puppy, not just the program</h2>
              <p>One of the most important parts of The Doghouse Method™ is observation.</p>
              <p>Two puppies from the same litter can experience exactly the same activity and respond very differently.</p>
              <p>One may rush forward immediately. Another may stop and think before investigating. One may be highly people-focused, while another is more independent. Some puppies persist with a challenge while others quickly seek assistance.</p>
              <p>None of those differences automatically makes one puppy better than another.</p>
              <p>They tell us something about who that puppy is.</p>
              <p>Throughout the puppies' time with us, we observe these differences so that our understanding of each puppy develops alongside them.</p>
              <h2>Temperament evaluation and matching</h2>
              <p>At approximately 6.5 to 7 weeks of age, temperament evaluation becomes another important part of our process.</p>
              <p>This is considered alongside everything we have observed throughout the puppy's development.</p>
              <p>We look beyond colour, markings and appearance to consider the individual puppy and the type of home in which they are most likely to thrive.</p>
              <p>A busy household with children may suit a different puppy from a quiet adult household. A first-time dog owner may have different needs from an experienced family. Some homes want a puppy suited to an active lifestyle, while others are hoping for a calmer companion.</p>
              <p>Our aim is not to label puppies as "good" or "bad".</p>
              <p>It is to understand their individual characteristics and help families choose, or be matched with, a puppy whose temperament and needs are compatible with their household and lifestyle.</p>
              <h2>Preparing for the transition home</h2>
              <p>The final part of our role is helping puppies prepare for one of the biggest changes they will experience so far: leaving The Doghouse and beginning life with their new family.</p>
              <p>No puppy can be completely prepared for that transition. They are leaving the environment, littermates and routines they have known and entering an entirely new home.</p>
              <p>What we can do is make sure that not everything about family life feels completely unfamiliar.</p>
              <p>Their experiences with individual human attention, handling, grooming, car travel, different environments, periods of calm, everyday sounds and age-appropriate independence all contribute to those foundations.</p>
              <p>Where appropriate, puppies also have opportunities to experience time and interaction as individuals rather than every experience occurring only as part of the litter.</p>
              <p>The aim is not to make puppies independent of their littermates before they leave. It is simply to begin helping each puppy discover that they can feel safe, engage with people and experience the world as an individual too.</p>
              <p>Their family then takes over that developmental journey when they arrive home.</p>
              <h2>Eight weeks is the beginning, not the finish line</h2>
              <p>No breeder can produce a completely trained, perfectly socialised eight-week-old puppy.</p>
              <p>Puppies leave us at the beginning of their lives.</p>
              <p>The experiences we provide during those first weeks are intended to create foundations that their families continue building upon.</p>
              <p>There will still be toilet training, independence training, lead walking, grooming, socialisation, boundaries, manners and plenty of learning ahead.</p>
              <p>The difference is that we want our puppies to begin that next stage having already experienced a thoughtful introduction to learning, handling, novelty and everyday life.</p>
              <h2>Raised as individuals</h2>
              <p>Perhaps the most important part of The Doghouse Method™ is that there is a puppy at the centre of it.</p>
              <p>Not a checklist.</p>
              <p>Not a timetable.</p>
              <p>Not a collection of exercises.</p>
              <p>A puppy.</p>
              <p>Each one develops differently. Each one has their own personality, strengths and areas where they may need a little more support.</p>
              <p>Our job during those precious first eight weeks is to get to know them, provide appropriate experiences and help build the foundations for the family dog they are becoming.</p>
              <p>Then it is time for their family to take over.</p>
              <p>The Doghouse Method™ begins here, but the learning, relationship and life you build together continue long after your puppy leaves The Doghouse.</p>
              <ReadToggle open={open} onToggle={() => setOpen((v) => !v)} id="doghouse-method-extended" />
            </div>
          </div>
        </div>
        <div className="mt-12 flex justify-center">
          <ApplyNowButton />
        </div>
      </section>
      <div className="mt-14">
        <PuppySectionNav currentPath="/puppies/doghouse-method" />
      </div>
    </main>
  );
}
