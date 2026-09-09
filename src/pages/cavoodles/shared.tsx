import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { CTAButton, PawDivider, SquareImage } from '../../components/ui';

const siblingLinks = [
  { label: 'About Cavoodles', path: '/cavoodles/about' },
  { label: 'Cavoodle Generations', path: '/cavoodles/generations' },
  { label: 'Cavoodle Sizes', path: '/cavoodles/sizes' },
  { label: 'Coat Types', path: '/cavoodles/coat-types' },
  { label: 'Colours & Markings', path: '/cavoodles/colours-markings' },
  { label: 'Shedding', path: '/cavoodles/shedding' },
  { label: 'Living With a Cavoodle', path: '/cavoodles/living-with-a-cavoodle' },
  { label: 'The Theodore', path: '/cavoodles/the-theodore' },
];

/** Opening layout shared by the Cavoodle information pages. */
export function CavoodleHero({
  title,
  intro,
  image,
  imageAlt,
}: {
  title: string;
  intro: ReactNode;
  image: string;
  imageAlt: string;
}) {
  return (
    <section className="mx-auto max-w-6xl px-5 pt-10 pb-8 md:pt-14 md:pb-12">
      <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-branddark">
            Cavoodles
          </p>
          <h1 className="font-display text-5xl font-bold leading-tight text-deep md:text-6xl">
            {title}
          </h1>
          <div className="prose-dog mt-5">{intro}</div>
        </div>
        <SquareImage src={image} alt={imageAlt} eager className="shadow-lg" />
      </div>
    </section>
  );
}

/** Closing block shared by the Cavoodle information pages. */
export function CavoodleFooter({ currentPath }: { currentPath: string }) {
  return (
    <section className="mx-auto max-w-6xl px-5 py-12 text-center">
      <PawDivider />
      <div className="mt-6">
        <CTAButton to="/puppies/process-applying">Apply Now</CTAButton>
      </div>
      <nav aria-label="More about Cavoodles" className="mt-8">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-branddark">
          More about Cavoodles
        </p>
        <div className="mt-3 flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          {siblingLinks
            .filter((l) => l.path !== currentPath)
            .map((l) => (
              <Link
                key={l.path}
                to={l.path}
                className="text-sm font-semibold text-branddark underline decoration-brand/40 underline-offset-4 hover:decoration-brand"
              >
                {l.label}
              </Link>
            ))}
        </div>
      </nav>
    </section>
  );
}
