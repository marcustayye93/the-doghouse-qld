import { Link } from 'react-router-dom';
import { usePageMeta, CTAButton, PawDivider } from '../../components/ui';
import { PhotoPlaceholder } from './PhotoPlaceholder';

interface StudProfile {
  name: string;
  facts: [string, string][];
  traits: [string, string][];
  personalityHeading: string;
  personality: string[];
  personalityPending?: boolean;
}

const currentStuds: StudProfile[] = [
  {
    name: 'Louie',
    facts: [
      ['Breed/Generation', 'F3 Cavoodle'],
      ['Date of Birth', '22 November 2023'],
      ['Colour', 'Rich Red with Abstract White Markings under his Chin and on his Chest'],
      ['Weight', '4.8 kg'],
      ['Height', '34 cm at the withers'],
      ['Teeth & Bite', 'Well-aligned teeth with a good bite'],
      ['Conformation', 'Smaller, well-proportioned build with great overall structure'],
      [
        'Additional Health Screening',
        'Hip and elbow scoring, echocardiogram and specialist ophthalmologist eye examination',
      ],
      ['Status', 'Current Stud'],
      ['Bloodlines', 'Harley-Davidson lines'],
    ],
    traits: [
      ['MMVD', 'A/G'],
      ['Other DNA-tested conditions', 'Clear'],
      ['A locus', 'at/at'],
      ['B locus', 'B/B'],
      ['D locus', 'D/D'],
      ['E locus', 'e/e'],
      ['K locus', 'ky/ky'],
      ['M locus', 'm/m'],
      ['S locus', 'S/sp'],
      ['Coat Type', 'Fleece'],
      ['Curl', 'Negative for curly coat variant'],
      ['Furnishings', 'Double furnished'],
      ['Coat Length', 'Long coat'],
      ['Intensity', 'I/I'],
      ['Shedding', 'Low shedding'],
    ],
    personalityHeading: "Louie's Personality",
    personality: [
      'Louie is a handsome little boy with a big personality and a wonderful enthusiasm for life. Playful, adventurous and fun-loving, he is always ready to be involved and brings plenty of happiness and character wherever he goes.',
      'For all his playful energy, Louie is also an incredibly friendly and affectionate boy. He loves people, enjoys his cuddles and has that lovely combination of being ready for an adventure one minute and happily soaking up affection the next.',
      'Louie has already sired many beautiful Doghouse puppies, as well as puppies for other breeders, and we are incredibly proud of the gorgeous little dogs he has helped bring into the world. With his small, well-structured build, beautiful looks, affectionate temperament and comprehensive health screening, Louie is a very special part of our breeding program.',
    ],
  },
  {
    name: 'Harry',
    facts: [
      ['Breed/Generation', 'F3 Cavoodle'],
      ['Date of Birth', '22 May 2025'],
      ['Colour', 'Rich Ruby Red with Abstract White Markings on his Face, Chest and Tips of his Paws'],
      ['Weight', '8.5 kg'],
      ['Height', '38 cm at the withers'],
      ['Teeth & Bite', 'Well-aligned teeth with a good bite'],
      ['Conformation', 'Beautifully proportioned build with excellent overall structure'],
      [
        'Additional Health Screening',
        'Hip and elbow scoring, echocardiogram and specialist ophthalmologist eye examination',
      ],
      ['Status', 'Current Stud'],
      ['Bloodlines', 'Harley-Davidson lines'],
    ],
    traits: [
      ['MMVD', 'A/A'],
      ['Other DNA-tested conditions', 'Clear'],
      ['A locus', 'at/at'],
      ['B locus', 'B/B'],
      ['D locus', 'D/D'],
      ['E locus', 'e/e'],
      ['K locus', 'KB/ky'],
      ['M locus', 'm/m'],
      ['S locus', 'S/sp'],
      ['Coat Type', 'Shaggy'],
      ['Curl', 'Negative for curly coat variant 2'],
      ['Furnishings', 'Double furnished'],
      ['Coat Length', 'Long coat'],
      ['Intensity', 'I/I'],
      ['Shedding', 'Low shedding'],
    ],
    personalityHeading: "Harry's Personality",
    personality: [
      "Harry is a beautiful, gentle boy with a wonderfully affectionate nature and a genuine love of family life. He is happiest when he's with his people and is always ready to settle in close for a cuddle and enjoy being part of whatever the family is doing.",
      'He also loves getting out for his neighbourhood walks, particularly when his fur bestie Dexter is coming along. Harry has a lovely softness about his personality, with an easy, loving nature that makes him a beautiful companion both at home and out and about.',
      'Harry has already sired some absolutely beautiful Doghouse Cavoodles, and we love seeing his wonderful qualities reflected in the puppies he has helped bring into the world. Handsome, affectionate and beautifully natured, Harry is a much-loved family dog and an important part of The Doghouse breeding program.',
    ],
  },
];

const futureHopefulStuds: StudProfile[] = [
  {
    name: 'Monty',
    facts: [
      ['Breed/Generation', 'F3 Cavoodle'],
      ['Date of Birth', '9 November 2025'],
      ['Colour', 'Apricot Cream'],
      ['Weight', 'Still growing'],
      ['Height', 'Still growing'],
      ['Teeth & Bite', 'Well-aligned teeth with a good bite'],
      ['Conformation', 'Beautifully proportioned build with excellent overall structure'],
      [
        'Planned Additional Health Screening',
        'Hip and elbow scoring, echocardiogram and specialist ophthalmologist eye examination',
      ],
      ['Status', 'Future Hopeful Stud'],
      ['Bloodlines', 'Harley-Davidson lines'],
    ],
    traits: [
      ['MMVD', 'A/G'],
      ['Other DNA-tested conditions', 'Clear'],
      ['A locus', 'at/a'],
      ['B locus', 'B/B'],
      ['D locus', 'D/D'],
      ['E locus', 'e/e'],
      ['K locus', 'KB/ky'],
      ['M locus', 'm/m'],
      ['S locus', 'S/sp'],
      ['Coat Type', 'Fleece'],
      ['Curl', 'Negative for curly coat variant 2'],
      ['Furnishings', 'Double furnished'],
      ['Coat Length', 'Long coat'],
      ['Shedding', 'Low shedding'],
    ],
    personalityHeading: "Monty's Personality",
    personality: [
      'Monty is an absolute sweetheart with a beautifully affectionate nature and a gentle way about him that makes him incredibly endearing. Friendly and loving, he is one of those boys who genuinely enjoys being close to people and is always very happy when affection is coming his way.',
      'He is also a proper little smoocher. Monty loves his cuddles and has a gorgeous way of settling in close and making the most of every opportunity for some one-on-one attention.',
      'Sweet-natured, friendly and wonderfully affectionate, Monty is an adorable young boy who is continuing to grow and develop. We are very excited to watch him mature and see what the future may hold for him.',
    ],
  },
  {
    name: 'Milo',
    facts: [
      ['Breed/Generation', 'F3 Cavoodle'],
      ['Date of Birth', '15 December 2025'],
      ['Colour', 'Intense Red Parti'],
      ['Weight', 'Still growing'],
      ['Height', 'Still growing'],
      ['Teeth & Bite', 'Well-aligned teeth with a good bite'],
      ['Conformation', 'Small to medium-sized, well-proportioned build with great overall structure'],
      [
        'Planned Additional Health Screening',
        'Hip and elbow scoring, echocardiogram and specialist ophthalmologist eye examination',
      ],
      ['Status', 'Future Hopeful Stud'],
      ['Bloodlines', 'Bruno lines'],
    ],
    traits: [
      ['MMVD', 'A/G'],
      ['Other DNA-tested conditions', 'Carrier of DM (Degenerative Myelopathy)'],
      ['A locus', 'aw/at'],
      ['B locus', 'B/b (carries brown)'],
      ['D locus', 'D/d'],
      ['E locus', 'e/e'],
      ['K locus', 'KB/ky'],
      ['M locus', 'm/m'],
      ['S locus', 'sp/sp'],
      ['Coat Type', 'Shaggy'],
      ['Curl', 'Negative for curly coat variant 2'],
      ['Furnishings', 'Double furnished'],
      ['Coat Length', 'Long coat'],
      ['Shedding', 'Low shedding'],
    ],
    personalityHeading: "Milo's Personality",
    personality: [
      'Milo is a cheeky little character with confidence to spare and a real zest for life. Fun, playful and wonderfully adventurous, he is always keen to see what is happening and rarely needs much convincing when there is an outing or a new experience on offer.',
      'He loves his walks and getting out and about, but for all that enthusiasm, Milo is also a beautifully behaved and affectionate boy. He has a lovely balance of confidence and playfulness while still being incredibly endearing and connected to his people.',
      'With his adventurous spirit, cheeky charm and loving nature, Milo is a gorgeous young boy who makes life that little bit more fun. We are looking forward to watching him continue to mature and seeing what the future may hold for him.',
    ],
  },
  {
    name: 'Frankie',
    facts: [
      ['Breed/Generation', 'F3 Cavoodle'],
      ['Date of Birth', '9 June 2026'],
      ['Colour', 'Tri-colour'],
      ['Weight', 'Still growing'],
      ['Height', 'Still growing'],
      ['Teeth & Bite', 'Well-aligned teeth with a good bite'],
      ['Conformation', 'Beautifully proportioned build with great overall structure'],
      [
        'Planned Additional Health Screening',
        'Hip and elbow scoring, echocardiogram and specialist ophthalmologist eye examination',
      ],
      ['Status', 'Future Hopeful Stud'],
      ['Bloodlines', 'Harley-Davidson lines'],
    ],
    traits: [
      ['MMVD', 'A/G'],
      ['Other DNA-tested conditions', 'Carrier of DM (Degenerative Myelopathy)'],
      ['A locus', 'at/at'],
      ['B locus', 'B/B'],
      ['D locus', 'D/D'],
      ['E locus', 'E/e'],
      ['K locus', 'ky/ky'],
      ['M locus', 'm/m'],
      ['S locus', 'sp/sp'],
      ['Coat Type', 'Fleece'],
      ['Furnishings', 'Single furnished (F/I)'],
      ['Coat Length', 'Long coat'],
      ['Shedding', 'Light shedding'],
    ],
    personalityHeading: "Frankie's Personality",
    personality: [
      'Frankie is a fun-loving little boy with a playful, adventurous spirit and a wonderfully affectionate nature. He approaches life with plenty of enthusiasm and is always ready to join in the fun or see what the next adventure might bring.',
      'Behind that playful side is an incredibly sweet and cuddly boy who loves affection and being close to his people. Frankie has a gorgeous combination of fun, confidence and warmth that makes him an absolute delight to have around.',
      'Playful, loving and full of personality, Frankie is simply an awesome little boy who brings plenty of happiness wherever he goes. We are excited to watch him continue to grow and develop and see what the future may hold for him.',
    ],
  },
  {
    name: 'Teddy',
    facts: [
      ['Breed/Generation', 'F2 Cavoodle'],
      ['Date of Birth', 'To be added'],
      ['Colour', 'Deep Mahogany Red with Abstract White Markings on his Face, Chest and Paws'],
      ['Weight', 'Still growing'],
      ['Height', 'Still growing'],
      ['Teeth & Bite', 'Well-aligned teeth with a good bite'],
      ['Conformation', 'Beautifully proportioned build with great overall structure'],
      [
        'Planned Additional Health Screening',
        'Hip and elbow scoring, echocardiogram and specialist ophthalmologist eye examination',
      ],
      ['Status', 'Future Hopeful Stud'],
      ['Bloodlines', 'Harley-Davidson lines'],
    ],
    traits: [
      ['MMVD', 'A/G'],
      ['Other DNA-tested conditions', 'Clear'],
      ['Coat Type', 'Shaggy'],
      ['Furnishings', 'Single furnished (F/I)'],
      ['Coat Length', 'Long coat'],
      ['Shedding', 'Low shedding'],
    ],
    personalityHeading: "Teddy's Personality",
    personality: [],
    personalityPending: true,
  },
  {
    name: 'Hershey',
    facts: [
      ['Breed/Generation', 'F4 Cavoodle'],
      ['Date of Birth', '8 July 2026'],
      ['Colour', 'Chocolate Tuxedo with Classic White Tuxedo Markings'],
      ['Weight', 'Still growing'],
      ['Height', 'Still growing'],
      ['Teeth & Bite', 'Well-aligned teeth with a good bite'],
      ['Conformation', 'Beautifully proportioned build with great overall structure'],
      [
        'Planned Additional Health Screening',
        'Hip and elbow scoring, echocardiogram and specialist ophthalmologist eye examination',
      ],
      ['Status', 'Future Hopeful Stud'],
      ['Bloodlines', 'Cloud 9 Teddy and Dudley lines'],
    ],
    traits: [
      ['MMVD', 'G/G'],
      ['Other DNA-tested conditions', 'Clear'],
      ['IVDD', 'No copies'],
      ['Coat Type', 'Shaggy'],
      ['Furnishings', 'Double furnished'],
      ['Coat Length', 'Long coat'],
      ['Shedding', 'Low shedding'],
    ],
    personalityHeading: "Hershey's Personality",
    personality: [
      'Hershey is a gorgeous, energetic little boy with a playful, fun-loving personality and a real enthusiasm for being part of the action. He loves to play and has a wonderfully engaging nature that makes him such a fun young dog to have around.',
      "He is particularly social and thoroughly enjoys interacting with both people and other dogs. Whether he's playing with his doggy friends or spending time with his people, Hershey is happiest when he has company and can be involved in what's going on around him.",
      'Playful, sociable and full of life, Hershey is an absolutely gorgeous little boy with a lovely outgoing nature. We are excited to watch him continue to grow and develop and see what the future may hold for him.',
    ],
  },
  {
    name: 'Patches',
    facts: [
      ['Breed/Generation', 'F3 Cavoodle'],
      ['Date of Birth', '8 July 2026'],
      ['Colour', 'Apricot Parti'],
      ['Weight', 'Still growing'],
      ['Height', 'Still growing'],
      ['Teeth & Bite', 'Well-aligned teeth with a good bite'],
      ['Conformation', 'Beautifully proportioned build with great overall structure'],
      [
        'Planned Additional Health Screening',
        'Hip and elbow scoring, echocardiogram and specialist ophthalmologist eye examination',
      ],
      ['Status', 'Future Hopeful Stud'],
      ['Bloodlines', 'Bruno lines'],
    ],
    traits: [
      ['MMVD', 'G/G'],
      ['Other DNA-tested conditions', 'Carrier of DM (Degenerative Myelopathy)'],
      ['B locus', 'b/b'],
      ['Pigment', 'Liver nose'],
      ['Coat Type', 'Fleece'],
      ['Furnishings', 'Double furnished'],
      ['Coat Length', 'Long coat'],
      ['Shedding', 'Low shedding'],
    ],
    personalityHeading: "Patches' Personality",
    personality: [
      'Patches is an absolute sweetheart with the most beautifully gentle and affectionate nature. Calm and easygoing, he has a lovely softness about him and is one of those little boys who simply melts into your heart.',
      'He adores affection and has such a sweet, cuddly way about him. There is no need for Patches to be the loudest personality in the room. His gentle nature and quiet charm are more than enough to make him completely irresistible.',
      'Sweet, calm, affectionate and utterly delicious, Patches is a very special little boy. We are looking forward to watching him grow and develop and seeing what the future may hold for him.',
    ],
  },
  {
    name: 'Speckles',
    facts: [
      ['Breed/Generation', 'F3 Cavoodle'],
      ['Date of Birth', '8 July 2026'],
      ['Colour', 'Chocolate Parti'],
      ['Weight', 'Still growing'],
      ['Height', 'Still growing'],
      ['Teeth & Bite', 'Well-aligned teeth with a good bite'],
      ['Conformation', 'Beautifully proportioned build with great overall structure'],
      [
        'Planned Additional Health Screening',
        'Hip and elbow scoring, echocardiogram and specialist ophthalmologist eye examination',
      ],
      ['Status', 'Future Hopeful Stud'],
      ['Bloodlines', 'Bruno lines'],
    ],
    traits: [
      ['MMVD', 'A/G'],
      ['Other DNA-tested conditions', 'Clear'],
      ['B locus', 'b/b'],
      ['Pigment', 'Liver nose'],
      ['Coat Type', 'Fleece'],
      ['Furnishings', 'Double furnished'],
      ['Coat Length', 'Long coat'],
      ['Shedding', 'Low shedding'],
    ],
    personalityHeading: "Speckles' Personality",
    personality: [
      'Speckles is a beautifully calm and gentle little boy with the sweetest, most affectionate nature. He has a wonderfully relaxed way about him and is one of those gorgeous little dogs who simply loves being close to his people.',
      'A true little smoocher, Speckles is happiest soaking up affection and settling in for a cuddle. There is such a softness to his personality, and his calm, easygoing nature makes him an absolute pleasure to have around.',
      'Sweet, gentle and incredibly loving, Speckles is a gorgeous young boy with a beautifully relaxed temperament. We are very excited to watch him continue to grow and develop and see what the future may hold for him.',
    ],
  },
];

export interface RetiredBoy {
  name: string;
  story: string[];
}

export const retiredLegacyBoys: RetiredBoy[] = [
  {
    name: 'Romeo',
    story: [
      'Romeo is one of those truly special boys whose beautiful nature has always been every bit as memorable as his looks. Loyal, calm and wonderfully gentle, he has always adored people and other dogs and has the sweetest, most affectionate way about him.',
      'A true smoocher, Romeo loves nothing more than being close to his people and soaking up plenty of cuddles. His stunning rich red coat was one of his defining features, and it is lovely to see that beautiful colour carried through in so many of the gorgeous offspring he has helped bring into the world.',
      'Now retired, Romeo is thoroughly enjoying life with his family. Camping holidays, beach adventures and long walks keep his adventurous side happy, while binge-watch couch cuddle sessions provide the perfect opportunity for Romeo to do what he has always done best, stay close to the people he loves.',
      'Romeo may have retired from our breeding program, but his beautiful temperament, rich red colouring and the generations he helped create will always make him a very special part of The Doghouse story.',
    ],
  },
  {
    name: 'Waldo',
    story: [
      'Waldo may be tiny at just 3.4 kilograms, but this gorgeous little boy has always had personality and charm in abundance. Sweet, affectionate and delightfully quirky, he is quite simply one of the cutest little characters you could ever meet.',
      "One of Waldo's most endearing little habits has always been the way he lies with his front paws neatly crossed over in front of him. It is such a distinctly Waldo thing to do, and we absolutely love seeing that same gorgeous little mannerism appear in some of his puppies.",
      'Now retired, Waldo is living his best life alongside retired Doghouse girl Toffee and their loving human mum. Despite his tiny size, he enjoys a wonderfully active lifestyle filled with long walks, runs in the park and plenty of opportunities to get out and enjoy himself.',
      'Of course, no day would be complete without some serious couch cuddle time and plenty of belly rubs. For our sweet, quirky little Waldo, retirement life is looking pretty wonderful.',
    ],
  },
  {
    name: 'Rocco',
    story: [
      'Rocco will always hold a place at the very heart of The Doghouse QLD. He was, and always will be, the face of The Doghouse and, to me, the most beautiful Cavoodle I have ever laid eyes on.',
      'He was exceptional in every way. From his stunning rich red coat and beautiful big eyes to the extraordinary nature beneath them, Rocco simply ticked every box. He was calm, gentle, loyal and incredibly affectionate, a true smoocher who loved nothing more than being close to his people.',
      'There was also something very special about the way Rocco cared for the other dogs around him. He seemed to naturally look out for everyone, with the same gentle, loving nature that made him so deeply adored by us.',
      'Heartbreakingly, we lost Rocco at just two and a half years of age after a paralysis tick. His life was far too short, but the place he holds within our family and The Doghouse can never be measured by the number of years we had with him.',
      'Rocco was a beautiful soul, inside and out. He helped shape The Doghouse in a way that no other dog ever could, and although he is no longer physically beside us, his beautiful face and his memory remain part of who we are.',
      'He will always be the face of The Doghouse, and he will always be lovingly remembered in our hearts.',
    ],
  },
];

function FactList({ facts }: { facts: [string, string][] }) {
  return (
    <dl className="mt-4 space-y-1.5">
      {facts.map(([label, value]) => (
        <div key={label} className="flex gap-2 text-[15px] leading-relaxed">
          <dt className="shrink-0 text-ink/60">{label}:</dt>
          <dd className="text-ink">{value}</dd>
        </div>
      ))}
    </dl>
  );
}

function StudProfileCard({ profile, flip }: { profile: StudProfile; flip: boolean }) {
  return (
    <article>
      <div className="grid items-start gap-6 md:grid-cols-2 md:gap-10">
        <div className={flip ? 'md:order-2' : ''}>
          {/* OWNER: Replace with this boy's individual square portrait when supplied by The Doghouse QLD. No offspring galleries are used on this page. */}
          <PhotoPlaceholder label={`${profile.name}'s photograph to be supplied`} />
        </div>
        <div className={flip ? 'md:order-1' : ''}>
          <h3 className="text-2xl font-bold text-deep">{profile.name}</h3>
          <FactList facts={profile.facts} />
          <h4 className="mt-5 text-lg font-bold text-deep">Genetic &amp; Coat Traits</h4>
          <dl className="mt-2 space-y-1.5">
            {profile.traits.map(([label, value]) => (
              <div key={label} className="flex gap-2 text-[15px] leading-relaxed">
                <dt className="shrink-0 text-ink/60">{label}:</dt>
                <dd className="text-ink">{value}</dd>
              </div>
            ))}
          </dl>
          {profile.personalityPending ? null : (
            <>
              <h4 className="mt-5 text-lg font-bold text-deep">{profile.personalityHeading}</h4>
              <div className="prose-dog mt-2">
                {profile.personality.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </article>
  );
}

export function RetiredBoyCard({ boy, flip }: { boy: RetiredBoy; flip: boolean }) {
  return (
    <article className="grid items-start gap-6 md:grid-cols-2 md:gap-10">
      <div className={flip ? 'md:order-2' : ''}>
        {/* OWNER: Replace with this boy's individual square portrait when supplied by The Doghouse QLD. */}
        <PhotoPlaceholder label={`${boy.name}'s photograph to be supplied`} />
      </div>
      <div className={flip ? 'md:order-1' : ''}>
        <h3 className="text-2xl font-bold text-deep">{boy.name}</h3>
        <div className="prose-dog mt-3">
          {boy.story.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function OurStuds() {
  usePageMeta(
    'Our Studs',
    'Meet the Doghouse QLD stud boys, the young future hopeful studs and our retired and legacy boys.'
  );
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pt-10 pb-8 md:pt-14 md:pb-12">
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-branddark">
              Our Dogs
            </p>
            <h1 className="font-display text-5xl font-bold leading-tight text-deep md:text-6xl">
              Our Studs
            </h1>
            <div className="prose-dog mt-5">
              <p>
                Our stud boys are an important part of The Doghouse QLD breeding program, and just
                like our girls, there is so much more to each of them than simply being a beautiful
                dog.
              </p>
              <p>
                When considering a boy for our breeding program, we look at the whole dog. Health,
                temperament, structure and good looks all form part of our breeding decisions,
                along with how his individual qualities may complement our girls and contribute to
                the generations that follow.
              </p>
              <p>
                Our studs are also much-loved family dogs, each with his own personality, quirks
                and characteristics. Some are our current breeding boys, while others are exciting
                young future hopefuls who are still growing and developing.
              </p>
              <p>
                Here you can meet our current studs, get to know the young boys we are watching for
                the future, and discover a little more about the personalities behind them.
              </p>
            </div>
          </div>
          {/* OWNER: Replace with the designated Our Studs introduction photograph when supplied by The Doghouse QLD. */}
          <PhotoPlaceholder label="Our Studs introduction photograph to be supplied" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-10">
        <h2 className="font-display text-4xl font-bold text-deep md:text-5xl">Current Studs</h2>
        <div className="mt-10 space-y-14">
          {currentStuds.map((profile, i) => (
            <div key={profile.name}>
              <StudProfileCard profile={profile} flip={i % 2 === 1} />
              {i < currentStuds.length - 1 && (
                <div className="mt-14">
                  <PawDivider />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-10">
        <h2 className="font-display text-4xl font-bold text-deep md:text-5xl">
          Future Hopeful Studs
        </h2>
        <div className="prose-dog mt-5 max-w-3xl">
          <p>
            Our future hopeful studs are a group of promising young boys who we are excited to
            watch grow and develop.
          </p>
          <p>
            While each has been selected as a potential future stud based on the qualities we have
            seen so far, some of the specialist health screening required as part of our breeding
            program can only be completed once they reach the appropriate age. This includes
            screening such as hip and elbow scoring, echocardiograms and specialist
            ophthalmologist eye examinations.
          </p>
          <p>
            As they mature, we will continue to assess their health, temperament, structure and
            overall development before making any final breeding decisions. Being listed as a
            Future Hopeful Stud does not guarantee that a boy will ultimately enter our breeding
            program.
          </p>
          <p>
            For now, they are much-loved young dogs with exciting potential, and we are hopeful
            that, subject to their ongoing development and health screening, they may one day join
            our Doghouse stud team.
          </p>
        </div>
        <div className="mt-10 space-y-14">
          {futureHopefulStuds.map((profile, i) => (
            <div key={profile.name}>
              <StudProfileCard profile={profile} flip={i % 2 === 1} />
              {i < futureHopefulStuds.length - 1 && (
                <div className="mt-14">
                  <PawDivider />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-10">
        <h2 className="font-display text-4xl font-bold text-deep md:text-5xl">
          Retired &amp; Legacy Boys
        </h2>
        <div className="mt-10 space-y-14">
          {retiredLegacyBoys.map((boy, i) => (
            <div key={boy.name}>
              <RetiredBoyCard boy={boy} flip={i % 2 === 1} />
              {i < retiredLegacyBoys.length - 1 && (
                <div className="mt-14">
                  <PawDivider />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12 text-center">
        <PawDivider />
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          <CTAButton to="/puppies/process-applying">Apply Now</CTAButton>
          <Link
            to="/our-dogs/our-girls"
            className="font-semibold text-branddark underline decoration-brand/40 underline-offset-4 hover:decoration-brand"
          >
            Meet Our Girls
          </Link>
          <Link
            to="/our-dogs/retired-legacy-dogs"
            className="font-semibold text-branddark underline decoration-brand/40 underline-offset-4 hover:decoration-brand"
          >
            Meet Our Retired &amp; Legacy Dogs
          </Link>
        </div>
      </section>
    </>
  );
}
