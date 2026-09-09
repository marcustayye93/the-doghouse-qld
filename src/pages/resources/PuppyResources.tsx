import { Link } from 'react-router-dom';
import { asset, PageHero, ReadMore, usePageMeta } from '../../components/ui';

const ilink =
  'font-semibold text-branddark underline decoration-brand/40 underline-offset-4 hover:decoration-brand';

function ResourceCard({ to, title, text }: { to: string; title: string; text: string }) {
  return (
    <Link
      to={to}
      className="group rounded-2xl border border-brand/10 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <h3 className="!mt-0 text-xl font-bold text-deep group-hover:text-branddark">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink/80">{text}</p>
    </Link>
  );
}

export default function PuppyResources() {
  usePageMeta(
    'Puppy Resources',
    'Practical guidance for preparing for your puppy and navigating the early months, from toilet training and sleep to socialisation.'
  );
  return (
    <main>
      <PageHero
        title="Puppy Resources"
        eyebrow="Resources"
        image={asset("/images/photos/pup-sitting.jpg")}
        imageAlt="Cavoodle puppy sitting"
        intro={
          <>
            <h2>Helping you navigate puppyhood</h2>
            <p>
              Bringing home a puppy is incredibly exciting, but there is also a lot to learn.
            </p>
            <p>
              Suddenly you&apos;re thinking about toilet training, sleeping, feeding, biting,
              vaccinations, socialisation, grooming, puppy-proofing and whether the thing your
              puppy just picked up off the floor needs to come out of their mouth immediately.
            </p>
            <p>
              Puppies don&apos;t arrive knowing how to live in our human world. They learn through
              the experiences we give them, the behaviours we reinforce and the routines we
              establish from the beginning.
            </p>
            <p>
              At The Doghouse QLD, we believe raising a beautiful family companion goes far beyond
              teaching a puppy to sit. It&apos;s about helping them learn how to live confidently
              and comfortably within everyday family life.
            </p>
            <p>
              Our Puppy Resources are here to help you through those important early months,
              whether you&apos;re raising one of our Doghouse puppies or simply share your home
              with a puppy of your own.
            </p>
          </>
        }
      />
      <section className="mx-auto max-w-4xl px-5 pb-16">
        <div className="prose-dog">
          <ReadMore id="puppy-resources-read-more" summary={null}>
            <h2>Before your puppy comes home</h2>
            <h3>Preparing your home</h3>
            <p>A little preparation before your puppy arrives can make those first few days considerably easier.</p>
            <p>Think about your home from puppy height.</p>
            <p>
              Electrical cords, children&apos;s toys, shoes, medications, cleaning products,
              houseplants, bins and anything small enough to swallow can suddenly become extremely
              interesting.
            </p>
            <p>
              Decide where your puppy will sleep, where they will eat, where their safe resting
              area will be and which door you will use for toilet trips.
            </p>
            <p>It&apos;s also worth deciding some of your household rules before your puppy arrives.</p>
            <p>
              Will they be allowed on the lounge? Where will they sleep long term? Which rooms can
              they access? Who is responsible for feeding and toilet trips?
            </p>
            <p>
              Consistency between family members makes life much easier for a puppy who is trying
              to work out how their new world operates.
            </p>

            <h3>What do you actually need?</h3>
            <p>It&apos;s very easy to get carried away buying things for a new puppy.</p>
            <p>
              You don&apos;t need every puppy product on the market. Start with the basics that
              will help keep your puppy safe, comfortable and settled:
            </p>
            <ul>
              <li>
                A safe puppy pen area, even if choosing to crate train. Your puppy&apos;s crate can
                sit inside the pen, giving them a secure area for sleeping, resting and short safe
                periods when they aren&apos;t supervised.
              </li>
              <li>A comfortable bed or appropriately sized crate</li>
              <li>Comfortable, washable bedding</li>
              <li>Food and water bowls</li>
              <li>The food your puppy is already accustomed to eating</li>
              <li>A secure collar or harness and lead</li>
              <li>Identification</li>
              <li>Appropriate puppy toys</li>
              <li>Safe, age-appropriate puppy chew toys</li>
              <li>Grooming equipment suitable for their coat</li>
              <li>An enzyme-based cleaner for toilet accidents</li>
              <li>A safe and secure way to transport your puppy in the car</li>
            </ul>
            <p>
              Your breeder should also tell you what your puppy has been eating and provide
              information about their existing routine.
            </p>
            <p>
              There is already enough change happening in your puppy&apos;s life without changing
              everything else on the first day too.
            </p>

            <h2>Bringing your puppy home</h2>
            <h3>The first few days</h3>
            <p>Your puppy has just experienced an enormous change.</p>
            <p>
              They have left the environment they know, along with their littermates and the people
              who have cared for them, and suddenly everything smells, sounds and feels different.
            </p>
            <p>Give them time to take it all in.</p>
            <p>
              The first few days don&apos;t need to be filled with visitors, outings and constant
              excitement.
            </p>
            <p>
              Keep things relatively calm and predictable. Show your puppy where to sleep, where to
              toilet, where to find water and what everyday life in your home looks like.
            </p>
            <p>Start establishing the routines you would like to continue, but don&apos;t expect perfection.</p>
            <p>They&apos;re babies.</p>

            <h2>Sleep and settling</h2>
            <p>Puppies need a remarkable amount of sleep.</p>
            <p>
              A tired puppy doesn&apos;t necessarily become a sleepy puppy. Quite often they become
              a bitey, frantic little creature who appears to have forgotten everything you taught
              them earlier in the day.
            </p>
            <p>Regular rest is an important part of puppy development.</p>
            <p>
              Create a safe, comfortable sleeping space and help your puppy learn that settling away
              from constant activity is normal.
            </p>
            <p>
              A crate, pen or other appropriately managed puppy area can provide somewhere safe for
              your puppy to switch off and rest.
            </p>
            <p>
              It can also help prevent them from practising unwanted behaviours every time you
              can&apos;t supervise them.
            </p>
            <p>
              Your puppy can be deeply loved without needing to be entertained or physically
              attached to somebody every minute of the day.
            </p>
            <p>Learning to rest is a skill too.</p>

            <h2>Toilet training</h2>
            <p>Toilet training is built through opportunity, observation and consistency.</p>
            <p>
              Young puppies have small bladders and limited control, so give them plenty of
              opportunities to succeed.
            </p>
            <p>Take your puppy to their designated toilet area:</p>
            <ul>
              <li>After waking</li>
              <li>After eating or drinking</li>
              <li>After active play</li>
              <li>Before bedtime</li>
              <li>After time in their crate or pen</li>
              <li>
                Whenever you notice the little signs that suggest they&apos;re looking for
                somewhere to go
              </li>
            </ul>
            <p>
              When they toilet in the right place, quietly let them know they&apos;ve done well and
              reward them.
            </p>
            <p>If an accident happens inside, clean it thoroughly and move on.</p>
            <p>
              Punishing a puppy for toileting indoors doesn&apos;t teach them where you wanted them
              to go. It can simply teach them that toileting in front of you isn&apos;t safe.
            </p>
            <p>
              Your job is to make the correct choice easy and rewarding until the routine becomes
              established.
            </p>
            <p>
              And remember that progress isn&apos;t always perfectly linear. A puppy who has been
              doing beautifully can still have an occasional accident.
            </p>

            <h2>Feeding your puppy</h2>
            <p>
              The first days in a new home aren&apos;t the ideal time to suddenly change your
              puppy&apos;s entire diet.
            </p>
            <p>Continue with the food and feeding routine recommended by your breeder initially.</p>
            <p>
              If you decide to change foods later, transition gradually unless your veterinarian
              advises otherwise.
            </p>
            <p>Growing puppies need a complete and balanced diet appropriate for their life stage.</p>
            <p>
              Treats and extras can be useful, particularly during training, but they shouldn&apos;t
              displace the nutrition provided by your puppy&apos;s main diet.
            </p>
            <p>And remember that little dogs have little stomachs.</p>
            <p>
              Training rewards can be tiny. Your puppy doesn&apos;t need a large piece of food every
              time they get something right.
            </p>

            <h2>Puppy biting</h2>
            <p>Those tiny teeth are surprisingly sharp.</p>
            <p>
              Mouthing and biting are normal parts of puppy development, particularly while puppies
              are exploring, playing and teething.
            </p>
            <p>That doesn&apos;t mean we simply allow puppies to practise biting people indefinitely.</p>
            <p>Provide appropriate things to chew and redirect your puppy onto safe, age-appropriate chew toys.</p>
            <p>Also look at what was happening before the biting escalated.</p>
            <p>
              Is your puppy overtired? Overexcited? Frustrated? Have they been awake too long? Do
              they need the toilet? Are they being wound up during play?
            </p>
            <p>Sometimes the answer to a particularly bitey puppy isn&apos;t more activity.</p>
            <p>It&apos;s sleep.</p>
            <p>
              Calm, consistent responses are far more useful than turning puppy biting into a
              battle.
            </p>
            <p>This stage passes, but the habits you establish during it matter.</p>

            <h2>Socialisation is more than meeting dogs</h2>
            <p>Socialisation is one of the most misunderstood parts of puppyhood.</p>
            <p>
              Good socialisation isn&apos;t about introducing your puppy to as many people and dogs
              as possible before a certain date.
            </p>
            <p>
              It&apos;s about helping them develop positive, appropriately paced experiences with
              the world they are going to live in.
            </p>
            <p>That world might include:</p>
            <ul>
              <li>People of different ages and appearances</li>
              <li>Household noises</li>
              <li>Traffic</li>
              <li>Cars</li>
              <li>Different surfaces</li>
              <li>Grooming</li>
              <li>Veterinary handling</li>
              <li>Visitors</li>
              <li>Children</li>
              <li>Suitable animals</li>
              <li>New environments</li>
              <li>Being alone for short periods</li>
              <li>Everyday objects that move, wobble, rattle or make noise</li>
            </ul>
            <p>Quality matters more than quantity.</p>
            <p>Your puppy doesn&apos;t need to physically interact with everything they see.</p>
            <p>
              Learning to calmly observe another dog, person, bicycle, pram or noisy environment
              without needing to approach it can be just as valuable.
            </p>
            <p>The goal isn&apos;t a puppy who believes the entire world exists for them to greet.</p>
            <p>
              It&apos;s a puppy who learns that the world contains lots of different things and
              that they can cope with them.
            </p>

            <h2>Socialisation and vaccinations</h2>
            <p>
              Early socialisation is important, but puppies are also still progressing through
              their vaccination schedule.
            </p>
            <p>
              Until your veterinarian confirms your puppy has appropriate protection, avoid
              unnecessary exposure to higher-risk public areas where unknown or unvaccinated dogs
              may have been.
            </p>
            <p>That doesn&apos;t mean your puppy needs to experience the world only from inside your house.</p>
            <p>
              Safe experiences can include being carried in appropriate environments, car trips,
              observing the world from a safe position, visiting suitable private homes and
              spending time with healthy, appropriately vaccinated dogs in controlled environments.
            </p>
            <p>
              Disease risk can vary between areas, so follow your veterinarian&apos;s advice about
              local risks and when your puppy can safely begin accessing public ground.
            </p>

            <h2>Teaching independence</h2>
            <p>Cavoodles often adore their people.</p>
            <p>It&apos;s one of the things families love about them.</p>
            <p>But affection and independence should grow together.</p>
            <p>
              From the beginning, give your puppy opportunities to settle safely without somebody
              constantly beside them.
            </p>
            <p>Start small.</p>
            <p>
              Perhaps you&apos;re on the other side of the puppy pen. Then you&apos;re moving
              around the room. Later, you briefly leave the room and return.
            </p>
            <p>We don&apos;t need to make puppies distressed in order to teach independence.</p>
            <p>
              The aim is to build the skill gradually so your puppy learns that being apart from
              you for appropriate periods is simply part of normal life.
            </p>
            <p>
              Avoid making every nap dependent on somebody holding them and every waking moment
              dependent on somebody entertaining them.
            </p>
            <p>Loving your Cavoodle and teaching your Cavoodle independence are not opposites.</p>

            <h2>Training starts on day one</h2>
            <p>Training doesn&apos;t begin when puppy school starts.</p>
            <p>It begins the moment your puppy enters your home.</p>
            <p>Every interaction is teaching something.</p>
            <p>
              Your puppy is learning whether jumping gets attention, whether sitting politely
              works, whether coming when called is worthwhile, whether pulling gets them where they
              want to go and whether calm behaviour is ever noticed.
            </p>
            <p>Reward the behaviours you want to see again.</p>
            <p>Keep learning positive, clear and manageable.</p>
            <p>
              Formal cues such as sit, drop and stay have their place, but some of the most
              valuable things your puppy can learn are everyday life skills:
            </p>
            <ul>
              <li>Settling</li>
              <li>Waiting</li>
              <li>Coming when called</li>
              <li>Walking appropriately</li>
              <li>Being handled</li>
              <li>Listening around distractions</li>
              <li>Coping with small frustrations</li>
              <li>Spending appropriate time independently</li>
              <li>Being calm around people and other dogs</li>
              <li>Switching off when nothing exciting is happening</li>
            </ul>
            <p>A clever puppy doesn&apos;t just need more commands.</p>
            <p>They need to learn how to live in the world.</p>
            <p>
              The Doghouse QLD is developing a{' '}
              <Link to="/training" className={ilink}>
                dedicated Cavoodle training program
              </Link>{' '}
              that will build much further on these foundations.
            </p>

            <h2>Grooming starts before the first haircut</h2>
            <p>For a Cavoodle, grooming is a lifelong necessity.</p>
            <p>
              Don&apos;t wait until your puppy needs their first full groom before introducing
              brushes, combs, feet handling, nail care, face handling, teeth brushing, dryers and
              the sounds associated with grooming equipment.
            </p>
            <p>Keep early experiences short and positive.</p>
            <p>
              Handle paws when nothing needs to be done. Touch ears. Look at teeth. Brush for a few
              moments. Reward calm behaviour.
            </p>
            <p>The aim isn&apos;t simply to get the grooming job finished.</p>
            <p>It&apos;s to teach your puppy that being handled is a normal and safe part of life.</p>
            <p>
              Doghouse puppies begin grooming preparation during their first eight weeks with us,
              including early nail care and exposure to bathing, drying, grooming sounds and paw
              handling.
            </p>
            <p>Those foundations need to continue at home.</p>
            <p>
              For much more detailed information about caring for a Cavoodle coat, visit our{' '}
              <Link to="/resources/grooming" className={ilink}>
                Grooming section
              </Link>
              .
            </p>

            <h2>Teeth matter too</h2>
            <p>At The Doghouse QLD, we recommend brushing your Cavoodle&apos;s teeth every day.</p>
            <p>
              Start while your puppy still has their baby teeth, even though those teeth will
              eventually fall out.
            </p>
            <p>
              At this age, you&apos;re not only caring for the teeth currently in their mouth.
              You&apos;re also teaching your puppy that having their lips lifted, mouth handled and
              teeth brushed is simply part of normal life.
            </p>
            <p>
              Introducing tooth brushing gently and consistently during puppyhood makes it much
              easier for many dogs to accept regular brushing throughout their lives.
            </p>
            <p>
              Use a toothbrush and toothpaste designed for dogs and build the experience gradually
              and positively.
            </p>
            <p>
              Daily tooth brushing should form the foundation of home dental care rather than
              relying on dental treats, chews or other dental products to do the job for you.
            </p>
            <p>Dental products may have a place, but they don&apos;t replace physically brushing the teeth.</p>

            <h2>Exercise and growing bodies</h2>
            <p>
              Puppies need opportunities to move, play, explore and develop their bodies, but more
              isn&apos;t automatically better.
            </p>
            <p>
              Growing puppies don&apos;t need repetitive, forced exercise designed simply to exhaust
              them.
            </p>
            <p>
              Allow plenty of natural movement and age-appropriate play while being sensible about
              repeated jumping, high-impact activity and slippery surfaces.
            </p>
            <p>Mental activity matters too.</p>
            <p>
              Sniffing, exploring, short training sessions, food puzzles and learning new skills can
              provide valuable enrichment without requiring kilometres of exercise.
            </p>
            <p>Your aim isn&apos;t to create the most exhausted puppy possible.</p>
            <p>
              It&apos;s to meet their physical and mental needs while also teaching them how to
              settle.
            </p>

            <h2>Your puppy and children</h2>
            <p>The relationship between a child and a dog can be incredibly special.</p>
            <p>But adults are responsible for teaching both sides how to interact appropriately.</p>
            <p>
              Children should learn not to disturb puppies while they&apos;re sleeping or eating,
              climb on them, chase them, pull at them or treat them like toys.
            </p>
            <p>Puppies also need somewhere they can rest without being followed.</p>
            <p>
              Young puppies are still learning how to control their excitement, their bodies and
              those very sharp little teeth.
            </p>
            <p>Supervise interactions and step in before either the child or puppy becomes overwhelmed.</p>
            <p>
              Teaching children to recognise when a dog wants space is just as important as teaching
              the puppy how to behave around children.
            </p>

            <h2>Meeting other dogs</h2>
            <p>Your puppy doesn&apos;t need to greet every dog.</p>
            <p>Choose early canine interactions carefully.</p>
            <p>Calm, socially appropriate, healthy dogs can be wonderful company and teachers for puppies.</p>
            <p>
              Uncontrolled encounters can be overwhelming and aren&apos;t automatically good
              socialisation simply because another dog was involved.
            </p>
            <p>
              Your puppy should also learn that seeing another dog doesn&apos;t always mean rushing
              over to meet them.
            </p>
            <p>Sometimes the lesson is simply:</p>
            <p>There&apos;s another dog.</p>
            <p>We noticed it.</p>
            <p>And now we&apos;re carrying on with our day.</p>
            <p>That ability becomes incredibly valuable as your puppy grows.</p>

            <h2>Cars and travel</h2>
            <p>Introduce car travel positively and safely.</p>
            <p>Use an appropriate restraint or secure travel setup and begin with manageable trips.</p>
            <p>
              Try not to make every car journey end at the vet or groomer. Short, uneventful trips
              can help car travel become an ordinary part of life.
            </p>
            <p>Some puppies settle beautifully in cars almost immediately. Others need more time.</p>
            <p>
              If your puppy experiences repeated motion sickness or significant distress when
              travelling, discuss it with your veterinarian rather than assuming they simply need
              to get used to it.
            </p>

            <h2>Visitors and excitement</h2>
            <p>A new puppy can attract a surprising number of visitors.</p>
            <p>
              While meeting people is valuable, your puppy doesn&apos;t need to be passed from
              person to person or kept awake because everybody wants a cuddle.
            </p>
            <p>Allow your puppy to approach people appropriately and reward calm greetings.</p>
            <p>
              If your puppy is becoming overwhelmed, overtired or excessively excited, it&apos;s
              perfectly reasonable for them to go back to their safe area and sleep.
            </p>
            <p>Rest isn&apos;t antisocial.</p>
            <p>Sometimes it&apos;s exactly what a puppy needs.</p>

            <h2>Management is part of training</h2>
            <p>Puppy-proofing doesn&apos;t last forever.</p>
            <p>
              The goal isn&apos;t to spend the next fifteen years hiding every shoe and guarding
              the rubbish bin.
            </p>
            <p>
              Management simply gives you time to teach good habits while your puppy develops
              enough maturity and self-control to make better choices.
            </p>
            <p>
              Pens, baby gates, crates, closed doors and putting tempting objects out of reach can
              be enormously useful.
            </p>
            <p>
              If your puppy has access to the washing basket every day and steals a sock every day,
              they&apos;re getting very good at stealing socks.
            </p>
            <p>
              Preventing the opportunity while teaching an alternative behaviour is often much
              easier than repeatedly correcting something they&apos;ve already learnt is fun.
            </p>
            <p>Management isn&apos;t failure.</p>
            <p>It&apos;s part of good training.</p>

            <h2>Routine without making life rigid</h2>
            <p>Puppies generally benefit from some predictability.</p>
            <p>
              Regular opportunities to eat, toilet, sleep, play and learn help them understand the
              rhythm of family life.
            </p>
            <p>
              But you don&apos;t necessarily want to create a dog whose entire world falls apart
              because dinner is twenty minutes late.
            </p>
            <p>
              Use routine to provide security without making every event happen at precisely the
              same minute every day.
            </p>
            <p>Real family life changes.</p>
            <p>Helping puppies learn a little flexibility is useful too.</p>

            <h2>Building confidence</h2>
            <p>Confidence doesn&apos;t come from forcing puppies into situations that frighten them.</p>
            <p>
              It grows through manageable experiences where the puppy learns that they can explore,
              investigate and recover.
            </p>
            <p>Give your puppy opportunities to think.</p>
            <p>Let them investigate a new object.</p>
            <p>Allow them to work out how to step onto a different surface.</p>
            <p>Encourage rather than force.</p>
            <p>And notice the small wins.</p>
            <p>
              A puppy who was unsure about something yesterday and calmly investigates it today has
              learnt something important.
            </p>

            <h2>When your puppy gets something wrong</h2>
            <p>They will.</p>
            <p>Again and again.</p>
            <p>Puppies aren&apos;t deliberately trying to make your life difficult.</p>
            <p>They&apos;re learning which behaviours work in a world designed for humans.</p>
            <p>Before correcting a behaviour, ask yourself:</p>
            <p>What would I like my puppy to do instead?</p>
            <p>Then teach that.</p>
            <p>
              If jumping gets no reward but four paws on the floor does, you&apos;re giving your
              puppy useful information.
            </p>
            <p>
              If stealing shoes creates a wonderful chase around the house, you&apos;ve
              accidentally made shoe stealing extremely entertaining.
            </p>
            <p>
              Training becomes much easier when we look at what our puppies are learning from the
              consequences of their behaviour.
            </p>

            <h2>When something doesn&apos;t seem right</h2>
            <p>You will get to know your puppy&apos;s normal behaviour remarkably quickly.</p>
            <p>If something feels wrong, take it seriously.</p>
            <p>
              Significant lethargy, repeated vomiting or diarrhoea, difficulty breathing, suspected
              poisoning, injury, severe pain, inability to urinate, collapse or another sudden
              concerning change warrants veterinary advice.
            </p>
            <p>Young puppies can become unwell quickly.</p>
            <p>
              If you&apos;re uncertain whether something requires veterinary attention, contact
              your veterinarian and let them help you make that decision.
            </p>
            <p>Online information can be wonderful for education.</p>
            <p>It isn&apos;t a substitute for veterinary assessment when your puppy is unwell.</p>

            <h2>A special note for Doghouse families</h2>
            <p>Our relationship with our puppy families doesn&apos;t end when a puppy leaves The Doghouse.</p>
            <p>
              Before bringing their puppy home, Doghouse families receive more detailed information
              to help them prepare, followed by further guidance to help navigate those important
              first days and weeks together.
            </p>
            <p>
              Our comprehensive Preparing for Your Puppy and Bringing Your Puppy Home information
              is provided privately to our puppy families rather than being reproduced publicly in
              full.
            </p>
            <p>
              Your puppy also goes home with information specific to their care and the foundations
              they have already begun learning with us.
            </p>
            <p>But information on paper can never anticipate every question.</p>
            <p>Once your puppy is home, please ask us.</p>
            <p>
              If something isn&apos;t going quite as expected, you&apos;re unsure whether
              you&apos;re approaching something correctly or you simply want some reassurance,
              reach out.
            </p>
            <p>We would always rather our families ask.</p>

            <h2>Keep learning with us</h2>
            <p>
              Puppyhood passes remarkably quickly, but caring for and learning about your dog
              doesn&apos;t stop when they grow up.
            </p>
            <p>Continue exploring our Resources:</p>
          </ReadMore>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <ResourceCard
            to="/resources/cavoodle-care"
            title="Cavoodle Care"
            text="Practical information about caring for your Cavoodle throughout the different stages of their life."
          />
          <ResourceCard
            to="/resources/grooming"
            title="Grooming"
            text="Understand the ongoing coat care, brushing, professional grooming, nails, ears, eyes, teeth and handling that form part of living with a Cavoodle."
          />
          <ResourceCard
            to="/resources/blog"
            title="Blog"
            text="Explore articles, practical advice, Doghouse insights and new information as our resource library continues to grow."
          />
          <ResourceCard
            to="/resources/faq"
            title="Frequently Asked Questions"
            text="Find straightforward answers to many of the questions puppy families and prospective Cavoodle owners ask us most often."
          />
          <ResourceCard
            to="/resources/contact-us"
            title="Contact Us"
            text="Still can't find what you're looking for? Get in touch with The Doghouse QLD and we'll point you in the right direction."
          />
        </div>
      </section>
    </main>
  );
}
