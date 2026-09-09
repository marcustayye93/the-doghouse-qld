import { Link } from 'react-router-dom';
import { navigation } from '../nav';
import { PawDivider, usePageMeta } from '../components/ui';

/** Landing hub for a top-level section: title plus cards linking to subpages. */
export default function SectionHub({ sectionPath }: { sectionPath: string }) {
  const section = navigation.find((n) => n.path === sectionPath)!;
  usePageMeta(section.label, `${section.label} - The Doghouse QLD`);
  return (
    <main className="mx-auto max-w-6xl px-5 py-10 md:py-14">
      <h1 className="text-center font-display text-5xl font-bold text-deep md:text-6xl">
        {section.label}
      </h1>
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
          </Link>
        ))}
      </div>
    </main>
  );
}
