import { useEffect, useState } from 'react';
import { asset, CTAButton, usePageMeta } from '../components/ui';

const photos = [
  { src: asset('/images/photos/hero-thumper.jpg'), alt: 'Cavoodle puppy portrait' },
  { src: asset('/images/photos/home-solo.jpg'), alt: 'Cavoodle puppy sitting' },
  { src: asset('/images/photos/home-milo.jpg'), alt: 'Cavoodle puppy portrait' },
  { src: asset('/images/photos/home-juniper.jpg'), alt: 'Cavoodle puppy with a bandana' },
  { src: asset('/images/photos/home-beach-pup.jpg'), alt: 'Cavoodle puppy on the beach' },
  { src: asset('/images/photos/home-two-pups.jpg'), alt: 'Two Cavoodle puppies together' },
  { src: asset('/images/photos/hero-ruby.jpg'), alt: 'Cavoodle puppy portrait' },
  { src: asset('/images/photos/home-bronnie.jpg'), alt: 'Cavoodle puppy portrait' },
];

function Gallery() {
  const [group, setGroup] = useState(0);
  const desktopGroups = Math.ceil(photos.length / 4);
  const mobileGroups = photos.length;

  useEffect(() => {
    const t = setInterval(() => setGroup((g) => g + 1), 3500);
    return () => clearInterval(t);
  }, []);

  const desktopIndex = group % desktopGroups;
  const mobileIndex = group % mobileGroups;
  const desktopPhotos = photos.slice(desktopIndex * 4, desktopIndex * 4 + 4);

  return (
    <div aria-roledescription="carousel" aria-label="Doghouse Cavoodles photo gallery">
      {/* Desktop / laptop: four square photos side by side */}
      <div className="hidden md:block">
        <div key={desktopIndex} className="gallery-fade grid grid-cols-4 gap-4">
          {desktopPhotos.map((p) => (
            <img
              key={p.src}
              src={p.src}
              alt={p.alt}
              loading={desktopIndex === 0 ? 'eager' : 'lazy'}
              className="aspect-square w-full rounded-2xl object-cover shadow-sm"
            />
          ))}
        </div>
        <div className="mt-4 flex justify-center gap-2" aria-hidden="true">
          {Array.from({ length: desktopGroups }).map((_, i) => (
            <span
              key={i}
              className={`h-2.5 w-2.5 rounded-full transition ${i === desktopIndex ? 'bg-gold' : 'bg-gold/25'}`}
            />
          ))}
        </div>
      </div>
      {/* Mobile: one substantial square photo at a time */}
      <div className="md:hidden">
        <div key={mobileIndex} className="gallery-fade">
          <img
            src={photos[mobileIndex].src}
            alt={photos[mobileIndex].alt}
            loading={mobileIndex === 0 ? 'eager' : 'lazy'}
            className="aspect-square w-full rounded-2xl object-cover shadow-sm"
          />
        </div>
        <div className="mt-4 flex justify-center gap-2" aria-hidden="true">
          {photos.map((p, i) => (
            <span
              key={p.src}
              className={`h-2.5 w-2.5 rounded-full transition ${i === mobileIndex ? 'bg-gold' : 'bg-gold/25'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  usePageMeta(
    'The Doghouse QLD',
    'The Doghouse QLD is a specialist multi-generational Cavoodle breeder in Queensland, Australia.'
  );
  return (
    <main>
      <section className="mx-auto max-w-7xl px-4 pt-6 pb-10 md:px-6 md:pt-8">
        <Gallery />
        <div className="mt-8 flex flex-col items-center text-center">
          <CTAButton to="/puppies/process-applying">Apply Now</CTAButton>
          <p className="mt-5 max-w-xl font-serif text-lg leading-relaxed text-bark">
            Start your journey to welcome a Doghouse Cavoodle puppy into your home.
          </p>
        </div>
      </section>
    </main>
  );
}
