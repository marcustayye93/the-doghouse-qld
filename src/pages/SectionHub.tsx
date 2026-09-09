import { Link } from 'react-router-dom';
import { navigation } from '../nav';
import { PawDivider, usePageMeta } from '../components/ui';

const blurbs: Record<string, string> = {
  '/about-us': 'Get to know The Doghouse QLD, our philosophy and our approach to health testing.',
  '/puppies': 'Our puppies and litters, how we raise them, and how to apply.',
  '/our-dogs': 'Meet the dogs at the heart of The Doghouse QLD.',
  '/cavoodles': 'Learn about the Cavoodle breed we specialise in.',
  '/resources': 'Guides, answers and support for Doghouse families.',
};

/** Landing hub for a top-level section: title plus cards linking to subpages. */
export default function SectionHub({ sectionPath }: { sectionPath: string }) {
  const section = navigation.find((n) => n.path === sectionPath)!;
  usePageMeta(
    section.label,
    `${section.label} - ${blurbs[sectionPath] ?? 'The Doghouse QLD'}`.slice(0, 160)
  );
  return (
    <main className="mx-auto max-w-6xl px-5 py-10 md:py-14">
      <h1 className="text-center font-display text-5xl font-bold text-deep md:text-6xl">
        {section.label}
      </h1>
      {blurbs[sectionPath] && (
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg leading-relaxed text-ink/80">
          {blurbs[sectionPath]}
        </p>
      )}
      <PawDivider />
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {(section.children ?? []).map((child) => (
          <Link
            key={child.path}
            to={child.path}
            className="group rounded-2xl border border-brand/10 bg-white p-7 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <h2 className="font-display text-3xl font-bold leading-snug text-deep group-hover:text-branddark">
              {child.label}
            </h2>
            <span className="mt-3 inline-block text-sm font-bold text-branddark">
              Read more <span aria-hidden="true">›</span>
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
}
