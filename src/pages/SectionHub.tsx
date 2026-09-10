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

export default function SectionHub({ sectionPath }: { sectionPath: string }) {
  const section = navigation.find((n) => n.path === sectionPath)!;
  const photo = sectionPhotos[sectionPath];
  usePageMeta(section.label, `${section.label} - The Doghouse QLD`);
  return (
    <main className="mx-auto max-w-6xl px-5 py-10 md:py-14">
      <h1 className="text-center font-display text-5xl font-bold text-brand md:text-6xl">
        {section.label}
      </h1>
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
