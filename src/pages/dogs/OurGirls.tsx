import { Link } from 'react-router-dom';
import { usePageMeta, CTAButton, PawDivider } from '../../components/ui';
import { PhotoPlaceholder } from './PhotoPlaceholder';

interface GirlProfile {
  name: string;
  facts: [string, string][];
  personalityHeading: string;
  personality: string[];
}

const currentGirls: GirlProfile[] = [
  {
    name: 'Meet Luna',
    facts: [
      ['Breed/Generation', 'F3 Cavoodle'],
      ['Date of Birth', '24 May 2024'],
      ['Colour', 'Red Parti'],
      ['Coat', 'Curly, soft fleece coat'],
      ['Approximate Adult Weight', '8 kg'],
      ['Approximate Height', '34 cm at the withers'],
      ['Shedding Genetics', 'Low shedding'],
      ['Teeth & Bite', 'Well-aligned teeth with a good bite'],
      ['Conformation', 'Solid build with great structure'],
    ],
    personalityHeading: "Luna's Personality",
    personality: [
      'Luna is a beautifully relaxed and affectionate girl with a calm, easygoing nature. She loves being part of family life and is just as happy settling in for a cuddle as she is heading outside for an adventure.',
      "She has a lovely playful side and a wonderful ability to make us laugh, bringing plenty of personality and fun wherever she goes. Luna's combination of sweetness, affection and quiet confidence makes her a very special part of our Doghouse family.",
    ],
  },
  {
    name: 'Meet Bunny',
    facts: [
      ['Breed/Generation', 'F2 Cavoodle'],
      ['Date of Birth', '4 February 2023'],
      ['Colour', 'Rich Caramel'],
      ['Coat', 'Beautiful, soft fleece coat'],
      ['Approximate Adult Weight', '4.5 kg'],
      ['Approximate Height', '32 cm at the withers'],
      ['Shedding Genetics', 'Low shedding'],
      ['Teeth & Bite', 'Well-aligned teeth with a good bite'],
      ['Conformation', 'Small with a solid build and good structure'],
    ],
    personalityHeading: "Bunny's Personality",
    personality: [
      'Bunny is a beautiful example of just how much love can be packed into a little dog. Gentle, calm and wonderfully relaxed, she has an incredibly affectionate nature and genuinely enjoys the company of people.',
      'Her beautiful temperament has also seen her become a therapy dog, a role that suits her gentle and loving nature so well. Bunny enjoys meeting new people and has a lovely way of being quietly affectionate and comfortable in their company.',
      'She is a small girl with a very big heart, and her calm, people-loving personality is one of the many things that makes Bunny so special to us.',
    ],
  },
  {
    name: 'Meet Sibby',
    facts: [
      ['Breed/Generation', 'F3 Cavoodle'],
      ['Date of Birth', '24 December 2024'],
      ['Colour', 'Rich Red with Abstract White Markings'],
      ['Coat', 'Wool coat'],
      ['Approximate Adult Weight', '7 kg'],
      ['Shedding Genetics', 'Low shedding'],
      ['Teeth & Bite', 'Well-aligned teeth with a good bite'],
      ['Conformation', 'Well-balanced build with good overall structure'],
    ],
    personalityHeading: "Sibby's Personality",
    personality: [
      'Sibby is one of those lovely all-rounders who seems equally at home curled up with her family or heading out to see what the day has in store. She has an affectionate, lovable nature and thoroughly enjoys being included in family life.',
      'She also has a wonderful sense of adventure. Beach walks and car rides are right up her alley, and she loves getting out and about and being part of whatever her family is doing. Once the adventures are over, though, Sibby is more than happy to settle in for plenty of cuddles.',
      "With her beautiful big eyes, striking rich red and white colouring and that lovely balance between affectionate companion and enthusiastic adventurer, Sibby has a personality that's very easy to fall in love with.",
    ],
  },
  {
    name: 'Meet Bubbles',
    facts: [
      ['Breed/Generation', 'F2 Cavoodle'],
      ['Date of Birth', '7 August 2023'],
      ['Colour', 'Rich Mahogany Red with Abstract White Markings on her Chin and Chest'],
      ['Coat', 'Soft, Curly Fleece Coat'],
      ['Approximate Adult Weight', '7.5 kg'],
      ['Approximate Height', '36 cm at the withers'],
      ['Shedding Genetics', 'Low shedding'],
      ['Teeth & Bite', 'Well-aligned teeth with a good bite'],
      ['Conformation', 'Solid build with great conformation'],
    ],
    personalityHeading: "Bubbles' Personality",
    personality: [
      "Bubbles is our happy, fun-loving girl who brings a wonderful sense of playfulness wherever she goes. She has a naturally cheerful nature and loves being involved in the action, whether that's heading out for an adventure, having a good play or simply enjoying time with her people.",
      'She is particularly lovely with children and has that beautiful combination of being playful and engaging while also incredibly sweet and affectionate. Once the fun is over, Bubbles is more than happy to trade playtime for cuddles and settle in close to the people she loves.',
      'With her affectionate nature, playful spirit and genuine love of family life, Bubbles is a gorgeous companion and a much-loved member of our Doghouse family.',
    ],
  },
  {
    name: 'Meet Tinkerbell',
    facts: [
      ['Breed/Generation', 'F3 Cavoodle'],
      ['Date of Birth', '15 October 2024'],
      ['Colour', 'Rich Caramel'],
      ['Coat', 'Soft, Silky Fleece Coat with a Gentle Wavy-to-Curly Texture'],
      ['Approximate Adult Weight', '2.8 kg'],
      ['Approximate Height', '28 cm at the withers'],
      ['Shedding Genetics', 'Low shedding'],
      ['Teeth & Bite', 'Well-aligned teeth with a good bite'],
      ['Conformation', 'Petite, light build with lovely structure'],
    ],
    personalityHeading: "Tinkerbell's Personality",
    personality: [
      'Tinkerbell may be tiny, but she has an enormous capacity for love. She is the sweetest little darling with an exceptionally gentle and affectionate nature, and being close to her people is quite simply where she is happiest.',
      "A true little lap dog, Tinkerbell will happily climb onto a welcoming lap, make herself comfortable and settle in for as much love and attention as she can get. She adores human company and has such a soft, endearing way about her that it's almost impossible not to scoop her up for a cuddle.",
      'There is something particularly precious about Tinkerbell. With her tiny stature, beautiful gentle nature and absolute love of affection, she is our gorgeous little pocket-sized sweetheart and an incredibly special member of the Doghouse family.',
    ],
  },
  {
    name: 'Meet Bambi',
    facts: [
      ['Breed/Generation', 'F2 Cavoodle'],
      ['Date of Birth', '20 May 2025'],
      ['Colour', 'Rich Chocolate'],
      ['Coat', 'Beautiful, Silky Soft Fleece Coat'],
      ['Approximate Adult Weight', '4.5 kg'],
      ['Approximate Height', '34 cm at the withers'],
      ['Shedding Genetics', 'Low shedding'],
      ['Teeth & Bite', 'Well-aligned teeth with a good bite'],
      ['Conformation', 'Elegant, well-proportioned build with lovely structure'],
    ],
    personalityHeading: "Bambi's Personality",
    personality: [
      "Bambi is one of those truly endearing little souls who seems to capture the heart of everyone who meets her. She has an incredibly soft and gentle nature, with a sweetness about her that is difficult to put into words until you've spent time with her.",
      "She is wonderfully cuddly and affectionate, and there is such a tenderness to the way she connects with people. Bambi doesn't need to demand attention to be noticed. Her beautiful nature simply draws people to her, and before long, everyone seems to be completely smitten.",
      'There is something very special about this girl. Gentle, loving and endlessly sweet, Bambi is simply one of those dogs that everybody adores, and we certainly do too.',
    ],
  },
  {
    name: 'Meet Birdie',
    facts: [
      ['Breed/Generation', 'F3 Cavoodle'],
      ['Date of Birth', '15 October 2023'],
      ['Colour', 'Soft Cream with Abstract White Markings on her Face and Chest'],
      ['Coat', 'Soft Shaggy Coat'],
      ['Approximate Adult Weight', '8 kg'],
      ['Approximate Height', '36 cm at the withers'],
      ['Shedding Genetics', 'Low shedding'],
      ['Teeth & Bite', 'Well-aligned teeth with a good bite'],
      ['Conformation', 'Solid build with great overall structure'],
    ],
    personalityHeading: "Birdie's Personality",
    personality: [
      'Birdie is our wonderfully chilled-out girl who seems to take just about everything in her stride. She has a naturally relaxed, easygoing nature and is one of those dogs who simply makes being around her feel easy.',
      "Happy and friendly, Birdie loves the company of people and has a beautifully affectionate side. She's always happy to enjoy a cuddle and soak up some love, but there is never any fuss about her. She simply has a calm, contented way of moving through life.",
      'With her gentle affection, friendly nature and wonderfully relaxed outlook, Birdie is a beautiful family companion and a very special part of our Doghouse family.',
    ],
  },
  {
    name: 'Meet Honey',
    facts: [
      ['Breed/Generation', 'F3 Cavoodle'],
      ['Date of Birth', '15 October 2024'],
      ['Colour', 'Rich Red with Abstract White Markings on her Face and Chest'],
      ['Coat', 'Soft Teddy Bear Wool Coat'],
      ['Approximate Adult Weight', '3.5 kg'],
      ['Approximate Height', '30 cm at the withers'],
      ['Shedding Genetics', 'Low shedding'],
      ['Teeth & Bite', 'Well-aligned teeth with a good bite'],
      ['Conformation', 'Well-proportioned build with great overall structure'],
    ],
    personalityHeading: "Honey's Personality",
    personality: [
      "Honey is the perfect little combination of sweet and sassy. She is a gorgeous family girl who loves being right in the middle of home life and certainly isn't shy about embracing her position as the princess of the house.",
      'She absolutely loves her cuddles and has a wonderfully affectionate side, but there is also a little spark to Honey that gives her plenty of character. She knows how to make her presence felt and brings her own touch of personality and charm to family life.',
      'Tiny in stature but certainly not in personality, Honey is loving, full of character and just a little bit sassy. A very sweet little princess who knows exactly where she belongs, right at the heart of her family.',
    ],
  },
  {
    name: 'Meet Buttercup',
    facts: [
      ['Breed/Generation', 'F2 Cavoodle'],
      ['Date of Birth', '24 December 2022'],
      ['Colour', 'Shiny Jet Black with a Hint of White on her Chin and Chest'],
      ['Coat', 'Silky Soft Fleece Coat'],
      ['Approximate Adult Weight', '7.5 kg'],
      ['Approximate Height', '34 cm at the withers'],
      ['Shedding Genetics', 'Low shedding'],
      ['Teeth & Bite', 'Well-aligned teeth with a good bite'],
      ['Conformation', 'Solid build with great structure'],
    ],
    personalityHeading: "Buttercup's Personality",
    personality: [
      "Buttercup is our wonderfully happy-go-lucky girl who seems to approach life with the attitude that anything is fun as long as her people are coming too. Friendly, playful and adventurous, she loves being involved and is always happiest when she's part of whatever her family is doing.",
      'She has a lovely balance to her personality. Buttercup is ready to join in the fun and head off on an adventure, but she is every bit as happy enjoying a cuddle and simply being close to the people she loves.',
      'At heart, Buttercup is very much a people dog. Her affectionate nature, playful spirit and easygoing approach to life make her a wonderful all-round companion and a much-loved member of our Doghouse family.',
    ],
  },
  {
    name: 'Meet Juliet',
    facts: [
      ['Breed/Generation', 'F2 Cavoodle'],
      ['Date of Birth', '24 December 2022'],
      ['Colour', 'Black Phantom'],
      ['Coat', 'Shiny, Silky Shaggy Coat with a Gentle Wave'],
      ['Approximate Adult Weight', '7.5 kg'],
      ['Approximate Height', '34 cm at the withers'],
      ['Shedding Genetics', 'Low shedding'],
      ['Teeth & Bite', 'Well-aligned teeth with a good bite'],
      ['Conformation', 'Solid build with great overall structure'],
    ],
    personalityHeading: "Juliet's Personality",
    personality: [
      'Juliet is our beautifully laid-back girl with a wonderfully calm and gentle way about her. She takes life in her stride and has that lovely relaxed nature that makes her such an easy and enjoyable dog to be around.',
      'She is incredibly loving and friendly, with a very smoochy side that comes out whenever there is affection on offer. Juliet is more than happy to settle in close, soak up the cuddles and simply enjoy being with her people.',
      "There is a softness to Juliet's personality that is every bit as lovely as her beautiful silky coat. Gentle, affectionate and wonderfully easygoing, she really is our uber-relaxed sweetheart.",
    ],
  },
  {
    name: 'Meet Chantilly',
    facts: [
      ['Breed/Generation', 'F4 Cavoodle'],
      ['Date of Birth', '23 June 2025'],
      ['Colour', 'Red with Abstract White Markings on her Face, Chest and Paws'],
      ['Coat', 'Beautiful Soft, Waved Fleece Coat'],
      ['Approximate Adult Weight', '8.5 kg'],
      ['Approximate Height', '38 cm at the withers'],
      ['Shedding Genetics', 'Low shedding'],
      ['Teeth & Bite', 'Well-aligned teeth with a good bite'],
      ['Conformation', 'Beautifully proportioned, larger build with great overall structure'],
    ],
    personalityHeading: "Chantilly's Personality",
    personality: [
      'Chantilly is a wonderfully curious girl with a real enthusiasm for life. Playful and adventurous, she loves getting out and exploring and is always interested in discovering what might be happening around her.',
      'For all that adventurous spirit, Chantilly is also an incredibly affectionate girl. She loves her cuddles and being close to her family, giving her that lovely balance between a dog who is ready to head out and enjoy the world and one who treasures being home with the people she loves.',
      'Sweet, inquisitive and full of personality, Chantilly brings together a beautiful affectionate nature with a playful sense of adventure.',
    ],
  },
  {
    name: 'Meet Gigi',
    facts: [
      ['Breed/Generation', 'F2 Cavoodle'],
      ['Date of Birth', '10 May 2024'],
      ['Colour', 'Red Apricot'],
      ['Coat', 'Beautiful Soft, Shaggy Coat'],
      ['Approximate Adult Weight', '7 kg'],
      ['Approximate Height', '34 cm at the withers'],
      ['Shedding Genetics', 'Low shedding'],
      ['Teeth & Bite', 'Well-aligned teeth with a good bite'],
      ['Conformation', 'Solid build with great overall structure'],
    ],
    personalityHeading: "Gigi's Personality",
    personality: [
      'Gigi is a beautifully gentle soul with a calm, loving nature that makes her incredibly easy to adore. She has a softness about her personality and a sweet, endearing way of simply enjoying being close to the people she loves.',
      'While some dogs are always looking for their next adventure, Gigi knows there is something pretty wonderful about a lazy afternoon on the couch. She loves nothing more than settling in beside her family for a long, cosy snuggle and soaking up the affection.',
      'Gentle, sweet and wonderfully content in the company of her people, Gigi has a quiet warmth about her that makes her such a lovely companion and a very special part of our Doghouse family.',
    ],
  },
];

const futureHopefulGirls: GirlProfile[] = [
  {
    name: 'Meet Dottie',
    facts: [
      ['Breed/Generation', 'F3 Cavoodle'],
      ['Date of Birth', '15 December 2025'],
      ['Colour', 'Apricot Parti'],
      ['Coat', 'Beautiful Soft Wool Coat'],
      ['Approximate Adult Weight', 'Still growing'],
      ['Approximate Height', 'Still growing'],
      ['Shedding Genetics', 'Low shedding'],
      ['Teeth & Bite', 'Well-aligned teeth with a good bite'],
      ['Conformation', 'Solid build with great overall structure'],
      ['Status', 'Future Hopeful Breeding Girl'],
    ],
    personalityHeading: "Dottie's Personality",
    personality: [
      'Dottie is a delightful little girl with a playful spirit and a wonderfully sweet nature. She loves having fun and exploring the world around her, approaching new adventures with plenty of enthusiasm while still being very happy to make time for cuddles.',
      'One of the loveliest things about Dottie is how beautifully mannered she is. For a young girl, she has a lovely way about her and is sweet, well-behaved and an absolute pleasure to have around.',
      'Playful, affectionate and full of fun, Dottie is growing into a gorgeous young dog, and we are very excited to watch her continue to develop.',
    ],
  },
  {
    name: 'Meet Milly',
    facts: [
      ['Breed/Generation', 'F3 Cavoodle'],
      ['Date of Birth', '8 February 2026'],
      ['Colour', 'Apricot with Abstract White Markings'],
      ['Coat', 'Beautiful Soft, Silky Fleece Coat'],
      ['Approximate Adult Weight', 'Still growing'],
      ['Approximate Height', 'Still growing'],
      ['Shedding Genetics', 'Low shedding'],
      ['Teeth & Bite', 'Well-aligned teeth with a good bite'],
      ['Conformation', 'Lovely solid build with good overall structure'],
      ['Status', 'Future Hopeful Breeding Girl'],
    ],
    personalityHeading: "Milly's Personality",
    personality: [
      'Milly is a beautifully calm and gentle young girl with a wonderfully loving nature. She has an easygoing way about her and seems to appreciate the simple pleasures in life, especially when they involve being with the people she loves.',
      "A leisurely walk along the beach is very much Milly's idea of a good outing. There is no need to rush when you can take your time, enjoy the surroundings and then head home for what might be her favourite activity of all, a long cuddle session on the couch.",
      'Soft-natured, affectionate and wonderfully relaxed, Milly is a gorgeous young girl, and we look forward to watching her continue to grow and develop.',
    ],
  },
  {
    name: 'Meet Penny',
    facts: [
      ['Breed/Generation', 'F3 Cavoodle'],
      ['Date of Birth', '25 February 2026'],
      ['Colour', 'Ruby Red'],
      ['Coat', 'Silky Shaggy Coat'],
      ['Approximate Adult Weight', 'Still growing'],
      ['Approximate Height', 'Still growing'],
      ['Shedding Genetics', 'Low shedding'],
      ['Teeth & Bite', 'Well-aligned teeth with a good bite'],
      ['Conformation', 'Solid build with good overall structure'],
      ['Status', 'Future Hopeful Breeding Girl'],
    ],
    personalityHeading: "Penny's Personality",
    personality: [
      'Penny is our cheerful little ray of sunshine who seems to find the fun in just about everything. She has a wonderfully easygoing nature and approaches life with a happy-go-lucky attitude that makes her such a pleasure to have around.',
      'She loves to play and has plenty of fun-loving puppy spirit, but underneath that playful side is a very sweet and affectionate girl who is always happy to make time for a cuddle. Penny has an uncomplicated, go-with-the-flow personality and is simply happy enjoying life alongside her people.',
      'With her playful charm, loving nature and sunny outlook on life, Penny is a delightful young girl, and we are looking forward to seeing the beautiful dog she grows into.',
    ],
  },
  {
    name: 'Meet Mabel',
    facts: [
      ['Breed/Generation', 'F4 Cavoodle'],
      ['Date of Birth', '7 April 2025'],
      ['Colour', 'Rich Ruby Red'],
      ['Coat', 'Shaggy Coat'],
      ['Approximate Adult Weight', 'Still growing'],
      ['Approximate Height', 'Still growing'],
      ['Shedding Genetics', 'Low shedding'],
      ['Teeth & Bite', 'Well-aligned teeth with a good bite'],
      ['Conformation', 'Smaller build with solid, well-balanced structure'],
      ['Status', 'Future Hopeful Breeding Girl'],
    ],
    personalityHeading: "Mabel's Personality",
    personality: [
      'Mabel is a cheerful little girl who loves sharing life with her family. She has a naturally affectionate nature and is never far away when there is an opportunity for some attention or a good cuddle.',
      "She also thoroughly enjoys getting out and about. Walks and adventures give Mabel the chance to explore and enjoy herself, particularly when her favourite people are coming along too. For her, the best part of almost any activity is simply being included.",
      "Bright, loving and wonderfully companionable, Mabel has a lovely combination of affectionate closeness and enthusiasm for life. Whether she's out exploring or enjoying some quiet family time, she's happiest when her people are nearby.",
    ],
  },
  {
    name: 'Meet Cocoa',
    facts: [
      ['Breed/Generation', 'F2 Cavoodle'],
      ['Date of Birth', '8 July 2026'],
      ['Colour', 'Rich Chocolate with a Tiny White Patch on her Chest'],
      ['Coat', 'Silky Soft Fleece Coat'],
      ['Approximate Adult Weight', 'Still growing'],
      ['Approximate Height', 'Still growing'],
      ['Shedding Genetics', 'Low shedding'],
      ['Teeth & Bite', 'Well-aligned teeth with a good bite'],
      ['Conformation', 'Smaller, well-proportioned build with solid overall structure'],
      ['Status', 'Future Hopeful Breeding Girl'],
    ],
    personalityHeading: "Cocoa's Personality",
    personality: [
      'Cocoa is a confident little character with a cheeky sparkle and a wonderfully happy approach to life. She is playful, cheerful and always seems ready to join in the fun, bringing plenty of personality wherever she goes.',
      'She has that lovely happy-go-lucky nature that makes her easy to enjoy, but beneath all that playful confidence is also a very loving little girl. Cocoa adores her cuddles and is just as happy soaking up affection as she is finding her next bit of mischief.',
      'Confident without being over the top, affectionate without missing out on the fun, Cocoa is a gorgeous all-round little girl with a big personality developing inside her smaller frame. We are very excited to watch her grow and see what the future holds for her.',
    ],
  },
];

export interface RetiredGirl {
  name: string;
  story: string[];
}

export const retiredGirls: RetiredGirl[] = [
  {
    name: 'Meet Millie',
    story: [
      'Millie is a beautiful red girl whose coat gradually faded over time to the most stunning rich caramel, but it is her beautiful nature that has always made her truly special.',
      "Gentle, relaxed and wonderfully friendly, Millie has always had a genuine love of both people and other dogs. She enjoys meeting new friends wherever she goes and has always been equally happy heading out for a long walk, enjoying a little adventure or simply spending time with the people she loves.",
      "Millie is one of those wonderful all-round dogs who would happily turn her paw to just about anything, because for her, what she's doing has never been as important as who she's doing it with. As long as she's close to her people, Millie is happy.",
      "Now retired, Millie is living her very best life with her beautiful mum, Rosemary. Her days are filled with gorgeous long walks along the river, plenty of love and, perhaps most importantly for Millie, lots and lots of her favourite belly rubs. It's exactly the kind of retirement this very special girl deserves.",
    ],
  },
  {
    name: 'Meet Toffee',
    story: [
      'Toffee is the epitome of a gentle little sweetheart. With her beautiful creamy fawn colouring, soft fleece coat and gorgeous abstract markings on her face, she has always been a very pretty girl, but her wonderfully soft nature is what makes her unforgettable.',
      'A true little smoocher, Toffee has always adored affection. She is gentle, sweet and incredibly loving, happiest when she can snuggle in close and enjoy all the cuddles on offer. There is such a softness about her, both in the way she looks and in the way she loves her people.',
      'Now retired, Toffee is enjoying life at exactly her preferred pace, with plenty of lazy cuddles on the couch and all the love a sweet girl like her could wish for.',
    ],
  },
  {
    name: 'Meet Roxy',
    story: [
      "Roxy is a striking jet black girl with beautiful abstract white markings on her face and chest and the softest, shiny fleece coat. Yet as beautiful as she is on the outside, it has always been Roxy's extraordinary nature that has defined her.",
      'There is an almost peaceful quality about Roxy. She is incredibly gentle, calm and loving, with a quiet presence that seems to make everything around her feel just a little more settled. We have always joked that if Buddha were a dog, Roxy would be it, and even in retirement, that description still suits her perfectly.',
      'These days, Roxy is thoroughly enjoying retired life with my parents. Her world consists of leisurely walks to the park, lazy morning lie-ins, plenty of treats and, of course, all the tummy tickles she can convince someone to give her. A peaceful retirement for our beautiful, peaceful girl.',
    ],
  },
  {
    name: 'Meet Lucy',
    story: [
      'Lucy is a beautiful red Cavoodle whose coat softened over the years into a gorgeous caramel, with a lovely soft fleece texture to match her equally gentle personality.',
      'Calm, friendly and easygoing, Lucy has always had a wonderfully uncomplicated way about her. She is happiest enjoying the simple things, especially when they involve spending time with the family she loves.',
      'Now retired and happily settled with her family, Lucy enjoys beautiful walks along the beach followed by plenty of cuddle time at home. Long TV sessions are made even better with her favourite behind-the-ears scratches, and Lucy is quite content to settle in and make sure they continue for as long as possible.',
      'Life for Lucy these days is gentle, comfortable and full of love, which suits our beautiful girl perfectly.',
    ],
  },
  {
    name: 'Meet Addie',
    story: [
      'Addie is a stunning rich ruby red Cavoodle who holds a very special place in The Doghouse story. During her time as one of our breeding girls, she blessed us with some truly beautiful puppies and left her own lovely contribution to the generations that followed.',
      'Addie has always been a warm and affectionate girl with a beautifully gentle nature. Friendly and loving, she enjoys being part of family life and has a lovely way of making herself right at home wherever her favourite people are.',
      'Retirement for Addie means enjoying the things she loves most. Walks with her family are even better when her best fur friend Birdie comes along, and afterwards, Addie is more than ready to claim her spot on the couch for a long, lazy cuddle.',
      'Her breeding days may be behind her, but Addie will always be a much-loved part of The Doghouse family and one of the special girls who helped shape our story.',
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

function PreviousPuppies({ name }: { name: string }) {
  const girl = name.replace(/^Meet /, '');
  return (
    <div className="mt-6">
      {/* OWNER: Replace each tile with a photograph of one of this girl's previous puppies when supplied. Five square images per current breeding girl. */}
      <h4 className="text-lg font-medium text-deep">Previous Puppies</h4>
      <div className="mt-3 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {[1, 2, 3, 4, 5].map((n) => (
          <PhotoPlaceholder
            key={n}
            small
            label={`${girl}'s puppy photo ${n} to be supplied`}
          />
        ))}
      </div>
    </div>
  );
}

function GirlProfileCard({ profile, flip }: { profile: GirlProfile; flip: boolean }) {
  const girl = profile.name.replace(/^Meet /, '');
  return (
    <article>
      <div className="grid items-start gap-6 md:grid-cols-2 md:gap-10">
        <div className={flip ? 'md:order-2' : ''}>
          {/* OWNER: Replace with this girl's individual square portrait when supplied by The Doghouse QLD. Additional photographs can be added beside it. */}
          <PhotoPlaceholder label={`${girl}'s photograph to be supplied`} />
        </div>
        <div className={flip ? 'md:order-1' : ''}>
          <h3 className="text-2xl font-bold text-deep">{profile.name}</h3>
          <FactList facts={profile.facts} />
          <h4 className="mt-5 text-lg font-medium text-deep">{profile.personalityHeading}</h4>
          <div className="prose-dog mt-2">
            {profile.personality.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </div>
      <PreviousPuppies name={profile.name} />
    </article>
  );
}

function FutureGirlCard({ profile, flip }: { profile: GirlProfile; flip: boolean }) {
  const girl = profile.name.replace(/^Meet /, '');
  return (
    <article className="grid items-start gap-6 md:grid-cols-2 md:gap-10">
      <div className={flip ? 'md:order-2' : ''}>
        {/* OWNER: Replace with this girl's individual square portrait when supplied by The Doghouse QLD. */}
        <PhotoPlaceholder label={`${girl}'s photograph to be supplied`} />
      </div>
      <div className={flip ? 'md:order-1' : ''}>
        <h3 className="text-2xl font-bold text-deep">{profile.name}</h3>
        <FactList facts={profile.facts} />
        <h4 className="mt-5 text-lg font-medium text-deep">{profile.personalityHeading}</h4>
        <div className="prose-dog mt-2">
          {profile.personality.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </article>
  );
}

export function RetiredGirlCard({ girl, flip }: { girl: RetiredGirl; flip: boolean }) {
  const name = girl.name.replace(/^Meet /, '');
  return (
    <article className="grid items-start gap-6 md:grid-cols-2 md:gap-10">
      <div className={flip ? 'md:order-2' : ''}>
        {/* OWNER: Replace with this girl's individual square portrait when supplied by The Doghouse QLD. */}
        <PhotoPlaceholder label={`${name}'s photograph to be supplied`} />
      </div>
      <div className={flip ? 'md:order-1' : ''}>
        <h3 className="text-2xl font-bold text-deep">{girl.name}</h3>
        <div className="prose-dog mt-3">
          {girl.story.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function OurGirls() {
  usePageMeta(
    'Our Girls',
    'Meet the girls of The Doghouse QLD: current breeding girls, future hopefuls and much-loved retired girls.'
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
              Our Girls
            </h1>
            <div className="prose-dog mt-5">
              <p>Our girls are at the heart of The Doghouse QLD.</p>
              <p>
                Each one is an individual, with her own personality, characteristics and place
                within our story. Some are the girls currently contributing to our breeding
                program, some are promising young girls we are watching grow and develop, and
                others are much-loved retired girls whose contribution will always remain part of
                The Doghouse.
              </p>
              <p>
                Here you can get to know each of our girls and discover a little more about the
                beautiful personalities behind our Doghouse puppies.
              </p>
            </div>
          </div>
          {/* OWNER: Replace with the designated Our Girls introduction photograph when supplied by The Doghouse QLD. */}
          <PhotoPlaceholder label="Our Girls introduction photograph to be supplied" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-10">
        <h2 className="font-display text-4xl font-bold text-deep md:text-5xl">
          Current Breeding Girls
        </h2>
        <div className="mt-10 space-y-14">
          {currentGirls.map((profile, i) => (
            <div key={profile.name}>
              <GirlProfileCard profile={profile} flip={i % 2 === 1} />
              {i < currentGirls.length - 1 && (
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
          Future Hopeful Breeding Girls
        </h2>
        <div className="prose-dog mt-5 max-w-3xl">
          <p>
            These are promising young girls we are excited to watch grow and develop. Being shown
            here as a Future Hopeful Breeding Girl does not guarantee that a dog will ultimately
            enter our breeding program. Each girl must continue to develop appropriately and meet
            The Doghouse QLD's requirements before any future breeding decision is made.
          </p>
        </div>
        <div className="mt-10 space-y-14">
          {futureHopefulGirls.map((profile, i) => (
            <div key={profile.name}>
              <FutureGirlCard profile={profile} flip={i % 2 === 1} />
              {i < futureHopefulGirls.length - 1 && (
                <div className="mt-14">
                  <PawDivider />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-10">
        <h2 className="font-display text-4xl font-bold text-deep md:text-5xl">Retired Girls</h2>
        <div className="mt-10 space-y-14">
          {retiredGirls.map((girl, i) => (
            <div key={girl.name}>
              <RetiredGirlCard girl={girl} flip={i % 2 === 1} />
              {i < retiredGirls.length - 1 && (
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
            to="/our-dogs/our-studs"
            className="font-semibold text-branddark underline decoration-brand/40 underline-offset-4 hover:decoration-brand"
          >
            Meet Our Studs
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
