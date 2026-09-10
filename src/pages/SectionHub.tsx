import { navigation } from '../nav';
import { asset, usePageMeta } from '../components/ui';

/**
 * Landing page for a top-level section (master spec sections 13-15).
 * The subsection card grid is NOT approved: each landing page shows the
 * major heading plus one beautiful, genuine, naturally-presented section
 * photograph (no heavy cards, square frames or thick borders). The dropdown
 * navigation provides access to the subsections.
 */
const sectionPhotos: Record<string, { src: string; alt: string }> = {
  '/about-us': {
    src: '/images/photos/our-story-charmaine-pups.jpg',
    alt: 'Charmaine holding two Cavoodle puppies',
  },
  '/puppies': {
    src: '/images/photos/pup-in-hands.jpg',
    alt: 'Cavoodle puppy held gently in hands',
  },
  '/our-dogs': {
    src: '/images/photos/our-dogs-bella.jpg',
    alt: 'Adult Cavoodle portrait',
  },
  '/cavoodles': {
    src: '/images/photos/home-two-pups.jpg',
    alt: 'Two Cavoodle puppies together',
  },
  '/resources': {
    src: '/images/photos/family-with-dogs.jpg',
    alt: 'Family with their dogs outdoors',
  },
};

/**
 * Approved landing-page introductory copy per section (verbatim from the
 * section general-information documents). The master design instructions
 * removed the subsection card grids, but the approved introductions stay.
 * Sections without an approved landing intro show heading + photo only.
 */
const sectionIntros: Record<string, string[]> = {
  '/about-us': [
    'The Doghouse QLD is about much more than breeding beautiful Cavoodles. Behind every litter are thoughtful breeding decisions, health testing, puppy development, years of learning and a genuine love of dogs and the families who welcome them into their lives.',
    'Get to know the story, people and philosophy behind The Doghouse QLD, learn more about the health testing that helps guide our breeding decisions, and discover how our Guardian Program allows selected breeding dogs to live as much-loved family companions.',
  ],
  '/puppies': [
    'Welcoming a puppy into your family is exciting, but choosing the right puppy and the right breeder involves much more than falling in love with a beautiful little face.',
    'At The Doghouse QLD, the journey begins long before our puppies are ready to leave us. From thoughtful breeding decisions and those precious first days of life through to early learning, socialisation, confidence building, temperament evaluation and matching, an enormous amount happens during their first eight weeks.',
    'This section will help you explore our available puppies and current and upcoming litters, discover how we raise our puppies through The Doghouse Method™, understand our puppy matching and application process, and find the information you need as you prepare to welcome a Doghouse Cavoodle into your family.',
  ],
  '/our-dogs': [
    'Our dogs are at the heart of The Doghouse QLD.',
    'Behind every litter are the individual dogs whose health, temperament, structure and characteristics help shape the generations that follow. Getting to know our dogs as individuals is an important part of our breeding program, and each one brings something uniquely their own to The Doghouse family.',
    'Here you can meet our girls, get to know our stud boys and also meet some of the special retired and legacy dogs who have helped shape The Doghouse story along the way.',
  ],
};

export default function SectionHub({ sectionPath }: { sectionPath: string }) {
  const section = navigation.find((n) => n.path === sectionPath)!;
  const photo = sectionPhotos[sectionPath];
  const intro = sectionIntros[sectionPath];
  usePageMeta(section.label, `${section.label} - The Doghouse QLD`);
  return (
    <main className="mx-auto max-w-6xl px-5 py-10 md:py-14">
      <h1 className="text-center font-display text-5xl font-bold text-brand md:text-6xl">
        {section.label}
      </h1>
      {intro && (
        <div className="prose-dog mx-auto mt-8 max-w-3xl text-center">
          {intro.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>
      )}
      {photo && (
        <div className="mx-auto mt-10 max-w-4xl">
          <img
            src={asset(photo.src)}
            alt={photo.alt}
            loading="eager"
            className="aspect-[16/10] w-full rounded-[2rem] object-cover"
          />
        </div>
      )}
    </main>
  );
}
