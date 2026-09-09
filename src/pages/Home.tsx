import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CTAButton, usePageMeta } from '../components/ui';

const photos = [
  { src: '/images/photos/hero-thumper.jpg', alt: 'Cavoodle puppy portrait' },
  { src: '/images/photos/home-solo.jpg', alt: 'Cavoodle puppy sitting' },
  { src: '/images/photos/home-milo.jpg', alt: 'Cavoodle puppy portrait' },
  { src: '/images/photos/home-juniper.jpg', alt: 'Cavoodle puppy with a bandana' },
  { src: '/images/photos/home-beach-pup.jpg', alt: 'Cavoodle puppy on the beach' },
  { src: '/images/photos/home-two-pups.jpg', alt: 'Two Cavoodle puppies together' },
  { src: '/images/photos/hero-ruby.jpg', alt: 'Cavoodle puppy portrait' },
  { src: '/images/photos/home-bronnie.jpg', alt: 'Cavoodle puppy portrait' },
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
    'The Doghouse QLD - Thoughtfully Bred, Beautifully Raised Cavoodles',
    'The Doghouse QLD is a specialist multi-generational Cavoodle breeder in Queensland, Australia. Thoughtfully bred. Beautifully raised.'
  );
  return (
    <main>
      <section className="mx-auto max-w-7xl px-4 pt-6 pb-10 md:px-6 md:pt-8">
        <Gallery />
        <div className="mt-8 flex flex-col items-center text-center">
          <CTAButton to="/puppies/process-applying">Apply Now</CTAButton>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-gold">
            Start your journey to welcome a Doghouse Cavoodle puppy into your home.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-5 pb-4 md:px-6" aria-label="Explore the website">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { to: '/about-us', title: 'About Us', text: 'Our story, philosophy and health testing.' },
            { to: '/puppies', title: 'Puppies', text: 'Litters, our method, process and waitlist.' },
            { to: '/our-dogs', title: 'Our Dogs', text: 'Meet the dogs behind our puppies.' },
            { to: '/cavoodles', title: 'Cavoodles', text: 'Learn about the breed we love.' },
          ].map((card) => (
            <Link
              key={card.to}
              to={card.to}
              className="group rounded-2xl border border-brand/10 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <h2 className="font-display text-3xl font-bold text-deep group-hover:text-branddark">
                {card.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-ink/80">{card.text}</p>
              <span className="mt-3 inline-block text-sm font-bold text-branddark">
                Explore <span aria-hidden="true">›</span>
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
