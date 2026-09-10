import { useEffect, useState } from 'react';
import { asset, ApplyNowButton, usePageMeta } from '../components/ui';

/** 16 genuine Doghouse QLD photographs for the homepage sliding gallery. */
const photos = [
  { src: asset('/images/photos/hero-thumper.jpg'), alt: 'Cavoodle puppy portrait' },
  { src: asset('/images/photos/home-solo.jpg'), alt: 'Cavoodle puppy sitting outdoors' },
  { src: asset('/images/photos/home-milo.jpg'), alt: 'Cavoodle puppy looking at the camera' },
  { src: asset('/images/photos/home-juniper.jpg'), alt: 'Cavoodle puppy wearing a bandana' },
  { src: asset('/images/photos/home-beach-pup.jpg'), alt: 'Cavoodle puppy at the beach' },
  { src: asset('/images/photos/home-two-pups.jpg'), alt: 'Two Cavoodle puppies together' },
  { src: asset('/images/photos/hero-ruby.jpg'), alt: 'Cavoodle puppy portrait' },
  { src: asset('/images/photos/home-bronnie.jpg'), alt: 'Cavoodle puppy resting' },
  { src: asset('/images/photos/pup-blue-bandana.jpg'), alt: 'Cavoodle puppy wearing a blue bandana' },
  { src: asset('/images/photos/pup-yellow-bandana.jpg'), alt: 'Cavoodle puppy wearing a yellow bandana' },
  { src: asset('/images/photos/pup-sitting.jpg'), alt: 'Cavoodle puppy sitting' },
  { src: asset('/images/photos/pup-sitting-2.jpg'), alt: 'Cavoodle puppy sitting in the garden' },
  { src: asset('/images/photos/pup-sitting-3.jpg'), alt: 'Cavoodle puppy sitting on the grass' },
  { src: asset('/images/photos/pup-closeup.jpg'), alt: 'Close-up of a Cavoodle puppy' },
  { src: asset('/images/photos/pup-white-brown.jpg'), alt: 'Cavoodle puppy portrait' },
  { src: asset('/images/photos/pup-grass.jpg'), alt: 'Cavoodle puppy lying on the grass' },
];

function perViewForWidth(width: number) {
  if (width >= 1024) return 4;
  if (width >= 640) return 2;
  return 1;
}

/**
 * Homepage photographic gallery (master spec section 3): 16 square photos in
 * four sets of four on desktop. Each set glides left as one coordinated
 * group every ~5.5 seconds and cycles back to the start. Tablet shows two at
 * a time, mobile one substantial photo at a time. With reduced-motion
 * preferences the gallery renders as a static set.
 */
function Gallery() {
  const [index, setIndex] = useState(0);
  const [perView, setPerView] = useState(4);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    const recalc = () => {
      const pv = perViewForWidth(window.innerWidth);
      setPerView(pv);
      setIndex((i) => Math.floor(i / pv) * pv);
    };
    recalc();
    window.addEventListener('resize', recalc);
    return () => window.removeEventListener('resize', recalc);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;
    const t = setInterval(() => {
      setIndex((i) => (i + perViewForWidth(window.innerWidth)) % photos.length);
    }, 5500);
    return () => clearInterval(t);
  }, [reducedMotion]);

  return (
    <div aria-roledescription="carousel" aria-label="Doghouse Cavoodle photo gallery">
      <div className="overflow-hidden">
        <div
          className="gallery-track flex"
          style={{ transform: `translateX(-${(index / perView) * 100}%)` }}
        >
          {photos.map((p, i) => (
            <div key={p.src} className="w-full shrink-0 px-2 sm:w-1/2 lg:w-1/4">
              <img
                src={p.src}
                alt={p.alt}
                loading={i < 4 ? 'eager' : 'lazy'}
                className="aspect-square w-full rounded-xl object-cover"
              />
            </div>
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
      <section className="mx-auto max-w-7xl px-4 pb-12 pt-8 md:px-6 md:pt-10">
        <Gallery />
        <div className="mt-10 flex flex-col items-center text-center">
          <ApplyNowButton />
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-bark">
            Start your journey to welcome a Doghouse Cavoodle puppy into your home.
          </p>
        </div>
      </section>
    </main>
  );
}
