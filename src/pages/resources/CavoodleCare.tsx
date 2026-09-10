import { Link } from 'react-router-dom';
import { asset, PageHero, ReadMore, usePageMeta } from '../../components/ui';

const ilink =
  'font-semibold text-branddark underline decoration-brand/40 underline-offset-4 hover:decoration-brand';

export default function CavoodleCare() {
  usePageMeta(
    'Cavoodle Care Guide',
    'Everyday Cavoodle care from The Doghouse QLD: nutrition, exercise, dental care, preventative health, grooming and living well with your Cavoodle.'
  );
  return (
    <main>
      <PageHero
        title="Cavoodle Care"
        eyebrow="Resources"
        image={asset("/images/photos/pup-grass.jpg")}
        imageAlt="Cavoodle puppy standing on grass"
        intro={
          <>
            <h2>Caring for your Cavoodle throughout their life</h2>
            <p>Cavoodles are wonderful family companions, but like every dog, they rely on us for much more than food, cuddles and a comfortable place to sleep.</p>
            <p>Good care means looking after the whole dog.</p>
            <p>Their nutrition. Their physical health. Their teeth and coat. Their exercise and mental stimulation. Their emotional wellbeing. Their training. And, just as importantly, noticing when something about your individual dog changes.</p>
            <p>At The Doghouse QLD, we want our families to understand not only how to care for their Cavoodle as a puppy, but how those needs change as their dog grows from a tiny puppy into an adult and eventually into a much-loved senior.</p>
            <p>This section brings together some of the everyday things we believe Cavoodle families should understand throughout that journey.</p>
          </>
        }
      />
      <section className="mx-auto max-w-4xl px-5 pb-16">
        <div className="prose-dog">
          <ReadMore id="cavoodle-care-read-more" summary={null}>
            <h2>Feeding your Cavoodle</h2>
            <p>Good nutrition forms one of the foundations of lifelong health.</p>
            <p>What you feed will depend on your dog's age, size, activity level, body condition and individual needs. A growing puppy has different nutritional requirements from an adult dog, and an older Cavoodle may need something different again.</p>
            <p>Whatever feeding approach you choose, the main diet should be complete and balanced for your dog's particular life stage.</p>
            <p>Be careful not to judge how much your Cavoodle needs simply by how enthusiastically they tell you they're starving.</p>
            <p>Some are remarkably convincing.</p>
            <p>Monitor your dog's body condition rather than relying only on the recommended amount printed on a packet. Feeding guides are useful starting points, but dogs are individuals.</p>
            <p>Your veterinarian can help you determine an appropriate weight and body condition for your particular dog.</p>
            <h2>Changing foods</h2>
            <p>If you decide to change your Cavoodle's food, a gradual transition is generally easier on the digestive system than an abrupt change.</p>
            <p>Introduce the new food progressively while reducing the old food over several days, unless your veterinarian has given you different instructions.</p>
            <p>If your dog develops persistent vomiting, diarrhoea, loss of appetite or another concerning response to a dietary change, seek veterinary advice rather than continually trying different foods.</p>
            <h2>Treats and extras</h2>
            <p>Treats are useful.</p>
            <p>We use them for training, enrichment, rewarding good choices and occasionally simply because those eyes are very difficult to resist.</p>
            <p>But treats are still food.</p>
            <p>They should complement your dog's complete and balanced diet rather than gradually becoming a substantial part of it.</p>
            <p>For training, small rewards are generally all that's required. Your Cavoodle doesn't need a large piece every time they do something correctly.</p>
            <p>Be particularly thoughtful with richer treats and high-fat foods, and remember that "natural" doesn't automatically mean something can be fed without moderation.</p>
            <p>If your dog has food intolerances, allergies, gastrointestinal problems, pancreatitis or requires a veterinary diet, discuss appropriate treats with your veterinarian.</p>
            <h2>Fresh water</h2>
            <p>Your Cavoodle should always have access to clean, fresh drinking water.</p>
            <p>Water intake can change with weather, exercise, diet and health.</p>
            <p>An unexplained substantial increase or decrease in drinking can sometimes be an early indication that something has changed medically, so don't ignore a significant change in your dog's normal habits.</p>
            <h2>Maintaining a healthy weight</h2>
            <p>One of the simplest things we can do for our dogs is help them maintain an appropriate body condition.</p>
            <p>Extra weight doesn't just change how a dog looks. It places additional load on joints and can contribute to wider health problems.</p>
            <p>With a fluffy Cavoodle coat, it isn't always easy to see what's happening underneath.</p>
            <p>Use your hands.</p>
            <p>Become familiar with how your dog's ribs, waist and body normally feel rather than relying only on what you can see through their coat.</p>
            <p>Regular weighing can also help you notice gradual changes that aren't obvious from day to day.</p>
            <p>If you're unsure whether your Cavoodle is at an appropriate weight, ask your veterinarian.</p>
            <h2>Exercise</h2>
            <p>Cavoodles may be small, but they still need regular physical activity.</p>
            <p>Exactly how much will vary enormously.</p>
            <p>Age, size, health, personality and lifestyle all matter. A lively young Cavoodle may enjoy considerably more activity than an older dog, while another may be perfectly content with a more moderate routine.</p>
            <p>Walks provide more than physical exercise.</p>
            <p>They offer opportunities to sniff, explore, experience the world and practise calm behaviour outside the home.</p>
            <p>Don't become too focused on distance.</p>
            <p>A slower walk filled with opportunities to sniff can sometimes offer more enrichment than marching quickly around the neighbourhood.</p>
            <p>And remember that a dog doesn't need to be physically exhausted every day in order to be content.</p>
            <h2>Looking after growing joints</h2>
            <p>Puppies and young dogs are still developing.</p>
            <p>Give them opportunities for natural movement, play and exploration without feeling that you need to exercise them like adult dogs.</p>
            <p>Be sensible about repetitive high-impact activity, repeated jumping from furniture, excessive stair use and slippery flooring.</p>
            <p>Rugs and runners can be useful in areas where smooth floors make it difficult for puppies to maintain traction.</p>
            <p>As your Cavoodle matures, their exercise can develop with them.</p>
            <p>If your dog develops persistent limping, stiffness, reluctance to jump, difficulty rising or another change in movement, have it investigated rather than assuming they'll simply get over it.</p>
            <h2>Mental stimulation</h2>
            <p>A Cavoodle's brain needs exercise too.</p>
            <p>These are clever little dogs, and mental enrichment doesn't need to involve complicated equipment or hours of formal training.</p>
            <p>It might include:</p>
            <p>Sniffing and exploring on walks</p>
            <p>Searching for food</p>
            <p>Puzzle toys</p>
            <p>Short training sessions</p>
            <p>Learning new skills</p>
            <p>Appropriate chew toys</p>
            <p>Exploring different environments</p>
            <p>Problem-solving games</p>
            <p>Practising calm behaviour around distractions</p>
            <p>Mental stimulation can be particularly valuable on days when weather, illness or family commitments make a normal walk difficult.</p>
            <p>But enrichment doesn't mean your dog needs constant entertainment.</p>
            <p>Learning how to relax when nothing exciting is happening is valuable too.</p>
            <h2>Training doesn't finish after puppyhood</h2>
            <p>Training is not something we complete during puppy school and then put away.</p>
            <p>Dogs continue learning throughout their lives.</p>
            <p>The behaviours that are regularly reinforced tend to become stronger, whether we intended to teach them or not.</p>
            <p>Continue rewarding the things you value.</p>
            <p>Coming when called. Walking nicely. Waiting. Settling. Being handled. Remaining calm around visitors. Listening around distractions.</p>
            <p>And if a behaviour begins to unravel, revisit the foundations rather than assuming your Cavoodle suddenly "knows better and is choosing not to listen".</p>
            <p>Sometimes the environment has become harder, the reward is no longer valuable enough or the behaviour simply hasn't been practised enough in that situation.</p>
            <p>For more comprehensive Cavoodle-specific training information, visit our dedicated <Link to="/training" className={ilink}>Training section</Link>.</p>
            <h2>Independence matters throughout life</h2>
            <p>Cavoodles are known for being affectionate companion dogs, and many would happily follow their people from room to room all day.</p>
            <p>We love that closeness.</p>
            <p>But we also want our dogs to be comfortable when life requires us to leave the house.</p>
            <p>Continue maintaining your dog's ability to spend appropriate periods alone, even if your normal lifestyle means somebody is home most of the time.</p>
            <p>Independence is a skill worth preserving.</p>
            <p>Try not to accidentally create a routine where your Cavoodle is never separated from you and then suddenly expect them to cope beautifully when circumstances change.</p>
            <p>Loving your Cavoodle and teaching your Cavoodle independence are not opposites.</p>
            <h2>Creating an "off switch"</h2>
            <p>A dog who can walk, play and train enthusiastically is wonderful.</p>
            <p>A dog who can also settle is even easier to live with.</p>
            <p>Cavoodles can be bright and busy little companions. If every moment of their day is filled with activity, they can become very good at expecting constant activity.</p>
            <p>Build quiet time into normal life.</p>
            <p>Let your dog learn that sometimes the family watches television, works, cooks dinner or simply gets on with things while the dog rests.</p>
            <p>Being able to switch off is an important life skill.</p>
            <h2>Grooming is part of Cavoodle ownership</h2>
            <p>A Cavoodle coat requires ongoing care.</p>
            <p>How much maintenance is required depends partly on the individual coat, its length and how you choose to keep it, but no Cavoodle coat should be considered maintenance-free.</p>
            <p>Brushing only over the surface can leave tangles and matting closer to the skin, particularly in friction areas such as behind the ears, under the collar or harness, beneath the legs and around the body.</p>
            <p>Professional grooming is also a normal part of Cavoodle ownership.</p>
            <p>We generally expect Cavoodle families to plan for professional grooming approximately every six to eight weeks, although the exact schedule will depend on the dog's coat and chosen style.</p>
            <p>At-home coat care is still necessary between appointments.</p>
            <p>Because this subject deserves much more than a few paragraphs, we have created a dedicated <Link to="/resources/grooming" className={ilink}>Grooming section</Link> covering coat care, brushing, grooming schedules, nails, ears, eyes, bathing and helping your Cavoodle remain comfortable with the grooming process.</p>
            <h2>Teeth and dental care</h2>
            <p>Dental care is something we take seriously at The Doghouse QLD.</p>
            <p>Our recommendation is to brush your Cavoodle's teeth every day.</p>
            <p>And yes, we recommend beginning when they're still a puppy, even though those tiny baby teeth are eventually going to fall out.</p>
            <p>At that stage, you're establishing something just as important as cleaning the teeth.</p>
            <p>You're teaching your puppy that having their mouth handled and their teeth brushed is simply part of everyday life.</p>
            <p>A dog who has experienced gentle, regular tooth brushing from puppyhood is far more likely to accept it comfortably as an adult.</p>
            <p>Use a toothbrush and toothpaste designed for dogs and introduce brushing gradually and positively.</p>
            <p>Daily brushing should form the foundation of home dental care rather than relying on dental treats, chews or other products to do the job for you.</p>
            <p>Appropriate chews may have a place, but they don't replace physically brushing the teeth.</p>
            <p>Regular veterinary examinations are also important because dental disease can develop below the gumline where you can't necessarily see it at home.</p>
            <p>If you notice bad breath that is new or particularly strong, red or bleeding gums, difficulty eating, dropping food, pawing at the mouth, loose or damaged teeth or signs of oral pain, arrange a veterinary examination.</p>
            <h2>Ear care</h2>
            <p>Cavoodle ears deserve regular attention.</p>
            <p>Their floppy ears and the hair around the ear area mean it's useful to make checking them part of your normal care routine.</p>
            <p>Become familiar with what your dog's healthy ears normally look and smell like.</p>
            <p>Look for changes such as redness, discharge, persistent scratching, head shaking, sensitivity, swelling or an unusual smell.</p>
            <p>Don't repeatedly put products into an irritated ear without knowing what you're treating.</p>
            <p>Ear problems can have different causes, and persistent symptoms should be assessed by your veterinarian.</p>
            <h2>Eyes</h2>
            <p>Those expressive Cavoodle eyes are one of their loveliest features, but the hair around the face can require regular attention.</p>
            <p>Keep the area around the eyes clean and monitor for unusual discharge, redness, swelling, squinting or obvious discomfort.</p>
            <p>A little normal eye discharge is different from an eye that suddenly becomes painful, very red or produces significant discharge.</p>
            <p>Eye problems can deteriorate quickly.</p>
            <p>If your Cavoodle is squinting, holding an eye closed, rubbing at it or appears to have injured the eye, seek veterinary advice promptly.</p>
            <h2>Nails and paws</h2>
            <p>Nails need regular attention throughout your dog's life.</p>
            <p>How quickly they grow and how much they wear naturally will vary between dogs.</p>
            <p>Don't assume regular walking automatically keeps them short enough.</p>
            <p>Overgrown nails can affect comfort and the way a dog stands and moves.</p>
            <p>Regularly check the nails, including dewclaws where present, and make nail handling an ordinary part of your dog's routine.</p>
            <p>Also check paws and between the toes.</p>
            <p>Grass seeds, small injuries, irritation, matting and foreign material can hide surprisingly well inside a fluffy Cavoodle foot.</p>
            <p>If your dog suddenly begins licking a paw repeatedly or becomes lame, have a proper look rather than assuming it's just a habit.</p>
            <h2>Skin and coat changes</h2>
            <p>Your Cavoodle's coat can tell you quite a lot.</p>
            <p>Regular grooming gives you an opportunity to notice lumps, bumps, wounds, skin irritation, parasites and other changes that might otherwise remain hidden beneath the hair.</p>
            <p>Pay attention to persistent scratching, chewing or licking, recurring redness, bald patches, sores or a significant change in coat quality.</p>
            <p>There can be many reasons for skin problems, including parasites, infection, environmental factors and allergies.</p>
            <p>Persistent problems deserve proper investigation rather than repeated guesswork.</p>
            <h2>Fleas, ticks and worms</h2>
            <p>Parasite prevention is part of responsible ongoing dog care.</p>
            <p>The products and schedule appropriate for your Cavoodle can depend on where you live, your dog's age and weight, lifestyle and local parasite risks.</p>
            <p>Queensland families in particular need to take tick prevention seriously.</p>
            <p>Talk to your veterinarian about an appropriate preventative program for fleas, ticks, heartworm and intestinal worms, and make sure products are suitable for your dog's current weight and age.</p>
            <p>Don't assume that because you haven't seen a parasite, your dog doesn't require prevention.</p>
            <h2>Veterinary care</h2>
            <p>Don't wait until your dog is sick to build a relationship with your veterinarian.</p>
            <p>Routine veterinary care provides opportunities to monitor weight, teeth, heart, joints and general health and to discuss vaccination and parasite-prevention requirements.</p>
            <p>Your veterinarian can also advise how frequently your individual dog should be examined as they move through different stages of life.</p>
            <p>As dogs age, regular health checks become particularly valuable because subtle changes may be detected before they become obvious at home.</p>
            <h2>Vaccinations</h2>
            <p>Vaccination requirements don't end when puppy vaccinations are completed.</p>
            <p>Your veterinarian will recommend an ongoing vaccination schedule based on your dog's age, health, lifestyle and local disease risks.</p>
            <p>Keep a record of vaccinations and discuss what your individual Cavoodle requires rather than assuming every dog needs precisely the same schedule throughout life.</p>
            <p>If boarding, attending daycare, training classes or using other dog services, check their vaccination requirements in advance.</p>
            <h2>Desexing</h2>
            <p>Desexing is an individual decision that should take into account your dog's age, sex, health, development and circumstances.</p>
            <p>At The Doghouse QLD, we don't support automatically rushing to desex a young puppy simply because they've reached the earliest age at which the procedure can technically be performed.</p>
            <p>For Doghouse puppies, families should follow the desexing requirements contained within their purchase agreement and discuss the appropriate timing for their individual dog with their veterinarian.</p>
            <p>Breeding rights are not provided with our pet puppies.</p>
            <h2>Heat and Queensland weather</h2>
            <p>Queensland heat deserves respect.</p>
            <p>Dogs don't cool themselves in the same way humans do, and hot or humid weather can make exercise dangerous surprisingly quickly.</p>
            <p>During warmer weather:</p>
            <p>Exercise during cooler parts of the day</p>
            <p>Provide constant access to shade and fresh water</p>
            <p>Avoid leaving dogs in parked vehicles</p>
            <p>Be conscious of hot concrete, asphalt and other surfaces</p>
            <p>Reduce the intensity of activity when conditions are hot or humid</p>
            <p>Watch for signs that your dog is struggling with the heat</p>
            <p>If you're unsure whether the ground is too hot, remember that your Cavoodle's paws are directly on it.</p>
            <p>Heatstroke is an emergency.</p>
            <p>Heavy or distressed panting, weakness, collapse, vomiting, confusion or other signs of overheating require immediate action and veterinary attention.</p>
            <h2>Water and swimming</h2>
            <p>Some Cavoodles love water.</p>
            <p>Others look at it as though you've suggested something completely unreasonable.</p>
            <p>If your dog swims, supervise them.</p>
            <p>Not every dog is naturally a strong or sensible swimmer, and pools can be particularly dangerous if a dog falls in and cannot find the exit.</p>
            <p>Teach your dog where the pool steps or safe exit are.</p>
            <p>Take extra care around dams, beaches, rivers and other waterways where currents, waves, wildlife, water quality and underwater hazards can introduce additional risks.</p>
            <p>Rinse and dry your Cavoodle appropriately after swimming, particularly around the ears and coat.</p>
            <h2>Car safety</h2>
            <p>Your Cavoodle should travel securely in the car.</p>
            <p>Use an appropriate restraint, carrier or other safe transport setup rather than allowing your dog to move freely around the vehicle.</p>
            <p>Secure travel protects your dog and reduces distraction for the driver.</p>
            <p>Never leave a dog unattended in a parked vehicle in warm conditions.</p>
            <p>The temperature inside a car can become dangerous extremely quickly.</p>
            <h2>Home and garden safety</h2>
            <p>Many ordinary household items can be dangerous to dogs.</p>
            <p>Medications, cleaning products, pesticides, rodenticides and other chemicals should be securely stored.</p>
            <p>Be conscious of foods that are toxic or potentially dangerous to dogs, and don't assume something is safe simply because humans eat it.</p>
            <p>Plants can also present risks, so check unfamiliar plants in your home and garden.</p>
            <p>Secure rubbish bins and keep small objects that could be swallowed out of reach.</p>
            <p>If you believe your dog has eaten something toxic or potentially dangerous, contact a veterinarian or appropriate animal poison service promptly rather than waiting for symptoms to appear.</p>
            <h2>Collars, harnesses and identification</h2>
            <p>Your Cavoodle should have reliable identification.</p>
            <p>Ensure microchip contact details remain current, particularly after moving house or changing telephone numbers.</p>
            <p>Collars and harnesses should fit securely without causing rubbing or restricting movement.</p>
            <p>Check the fit regularly, particularly while puppies are growing.</p>
            <p>Equipment can wear over time too.</p>
            <p>Periodically check leads, clips, buckles and harnesses rather than discovering something has failed when your dog is already attached to it.</p>
            <h2>Choosing a groomer, trainer, daycare or boarding facility</h2>
            <p>The people you trust with your dog matter.</p>
            <p>Ask questions.</p>
            <p>A good professional should be comfortable explaining how they handle dogs, what methods they use, how dogs are supervised and what happens if a dog becomes frightened, overwhelmed or unwell.</p>
            <p>For grooming, look for someone who understands Cavoodle and oodle coats and values the dog's emotional experience as well as the finished haircut.</p>
            <p>For training, choose approaches that teach clearly without relying on fear or intimidation.</p>
            <p>For daycare and boarding, consider whether the environment actually suits your individual dog.</p>
            <p>A busy room filled with dogs isn't automatically enriching for every Cavoodle.</p>
            <h2>Changes in behaviour can mean something</h2>
            <p>Behaviour is information.</p>
            <p>If your normally social dog suddenly doesn't want to be touched, your active dog becomes reluctant to walk, your previously settled dog begins waking at night or your easy-going dog suddenly becomes irritable, don't automatically assume they're being difficult.</p>
            <p>Pain and illness can change behaviour.</p>
            <p>So can fear, stress and changes within the dog's environment.</p>
            <p>A significant or unexplained behavioural change deserves attention, and sometimes the first step should be a veterinary examination.</p>
            <h2>Know your normal</h2>
            <p>One of the most useful things you can do for your Cavoodle is simply know them.</p>
            <p>Know how much they normally drink.</p>
            <p>Know what their appetite is like.</p>
            <p>Know their usual toilet habits.</p>
            <p>Know how active they are.</p>
            <p>Know how they move.</p>
            <p>Know what their skin and ears normally look like.</p>
            <p>Know their usual personality.</p>
            <p>You don't need to obsess over every tiny variation.</p>
            <p>But when you know your dog's normal, you're much more likely to recognise when something genuinely changes.</p>
            <h2>When to call the vet</h2>
            <p>You don't need to diagnose your dog before asking a veterinarian for help.</p>
            <p>Seek veterinary advice if your Cavoodle is showing something that concerns you, particularly significant or persistent changes such as:</p>
            <p>Difficulty breathing</p>
            <p>Collapse or severe weakness</p>
            <p>Suspected poisoning</p>
            <p>Significant injury or uncontrolled bleeding</p>
            <p>Severe or obvious pain</p>
            <p>Repeated vomiting or diarrhoea</p>
            <p>Blood in vomit or stool</p>
            <p>A swollen or painful abdomen</p>
            <p>Difficulty urinating</p>
            <p>Seizures</p>
            <p>Sudden inability to walk normally</p>
            <p>Significant lethargy</p>
            <p>Refusal to eat accompanied by illness or behavioural change</p>
            <p>Eye injury or significant eye pain</p>
            <p>Signs of heatstroke</p>
            <p>Any sudden deterioration that worries you</p>
            <p>For emergencies, contact a veterinarian immediately.</p>
            <p>The internet is useful for learning about dogs.</p>
            <p>It isn't an emergency department.</p>
            <h2>As your Cavoodle gets older</h2>
            <p>One day the tiny puppy who followed you everywhere becomes an adult, and eventually that adult starts to slow down.</p>
            <p>Senior dogs deserve care that changes with them.</p>
            <p>You may notice changes in:</p>
            <p>Activity</p>
            <p>Sleep</p>
            <p>Hearing</p>
            <p>Vision</p>
            <p>Mobility</p>
            <p>Teeth</p>
            <p>Weight</p>
            <p>Muscle condition</p>
            <p>Appetite</p>
            <p>Toilet habits</p>
            <p>Tolerance of heat or cold</p>
            <p>Ability to manage stairs or slippery floors</p>
            <p>Don't dismiss every change as "just old age".</p>
            <p>Age itself isn't a diagnosis.</p>
            <p>Some changes are normal, while others may indicate pain or illness that can be managed.</p>
            <p>Older Cavoodles may benefit from more frequent veterinary monitoring, adjustments to exercise, changes around the home and modifications to grooming or dental care.</p>
            <p>A dog who can no longer comfortably do something the way they used to may simply need us to change how we help them do it.</p>
            <h2>Caring for the dog in front of you</h2>
            <p>There isn't one perfect Cavoodle-care routine that suits every dog.</p>
            <p>Some Cavoodles are incredibly active.</p>
            <p>Some would prefer to spend a significant portion of the day attached to the lounge.</p>
            <p>Some have easy coats.</p>
            <p>Some seem capable of producing a knot simply by looking at a breeze.</p>
            <p>Some will eat almost anything.</p>
            <p>Others would like to review today's menu before committing.</p>
            <p>Guidelines are useful, but your individual dog matters more.</p>
            <p>Learn their normal.</p>
            <p>Notice changes.</p>
            <p>Keep teaching them.</p>
            <p>Look after their body and their mind.</p>
            <p>Give them appropriate boundaries as well as affection.</p>
            <p>And allow the way you care for them to change as they move through different stages of life.</p>
            <p>That's what lifelong care really looks like.</p>
            <h2>For our Doghouse families</h2>
            <p>When you take home a puppy from The Doghouse QLD, our relationship doesn't finish at handover.</p>
            <p>We want our families to feel comfortable asking questions as their puppy grows.</p>
            <p>Sometimes that question will be about training.</p>
            <p>Sometimes it will be grooming.</p>
            <p>Sometimes feeding.</p>
            <p>Sometimes you'll simply want to know whether the strange thing your Cavoodle has suddenly decided to do is something every other Cavoodle seems to do too.</p>
            <p>We're always happy for our families to reach out.</p>
            <p>Where something requires veterinary diagnosis or treatment, we'll always direct you back to the appropriate veterinary professional.</p>
            <p>Our role isn't to replace your vet.</p>
            <p>It's to continue being part of the support network around the puppy we raised and the family who loves them.</p>
            <h2>Continue exploring our Resources</h2>
            <h3><Link to="/resources/puppy-resources" className={ilink}>Puppy Resources</Link></h3>
            <p>Practical guidance for preparing for your puppy and navigating those important early months.</p>
            <h3><Link to="/resources/grooming" className={ilink}>Grooming</Link></h3>
            <p>Detailed information about Cavoodle coat care, brushing, matting, bathing, professional grooming, nails, ears, eyes, teeth and helping your dog become comfortable with being groomed.</p>
            <h3><Link to="/resources/blog" className={ilink}>Blog</Link></h3>
            <p>Articles, practical advice and new information from The Doghouse QLD.</p>
            <h3><Link to="/resources/faq" className={ilink}>Frequently Asked Questions</Link></h3>
            <p>Straightforward answers to many of the questions Cavoodle owners and prospective puppy families ask us.</p>
            <h3><Link to="/resources/contact-us" className={ilink}>Contact Us</Link></h3>
            <p>Can't find the answer you're looking for?</p>
            <p>Get in touch with The Doghouse QLD.</p>
          </ReadMore>
        </div>
      </section>
    </main>
  );
}
