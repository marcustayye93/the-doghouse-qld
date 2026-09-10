import { Link } from 'react-router-dom';
import { usePageMeta, PawDivider } from '../../components/ui';
import { PhotoPlaceholder } from './PhotoPlaceholder';
import { retiredGirls, RetiredGirlCard } from './OurGirls';
import { retiredLegacyBoys, RetiredBoyCard } from './OurStuds';

export default function RetiredLegacy() {
  usePageMeta(
    'Retired & Legacy Dogs',
    'Celebrating the retired and legacy dogs of The Doghouse QLD and their place in our story.'
  );
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pt-10 pb-8 md:pt-14 md:pb-12">
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-branddark">
              Our Dogs
            </p>
            <h1 className="font-display text-5xl  leading-tight text-brand md:text-6xl">
              Retired &amp; Legacy Dogs
            </h1>
            <div className="prose-dog mt-5">
              <p>
                Some dogs may retire from breeding, but they never stop being part of The Doghouse
                story.
              </p>
              <p>
                Our Retired &amp; Legacy Dogs page celebrates the special dogs who have been part of
                our journey, including dogs who have contributed to our breeding program and those
                whose influence continues through the generations that followed them.
              </p>
            </div>
          </div>
          {/* OWNER: Replace with the designated Retired & Legacy Dogs introduction photograph when supplied by The Doghouse QLD. */}
          <PhotoPlaceholder label="Retired & Legacy Dogs photograph to be supplied" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-10">
        <h2 className="font-display text-4xl  text-brand md:text-5xl">Retired Girls</h2>
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

      <section className="mx-auto max-w-6xl px-5 py-10">
        <h2 className="font-display text-4xl  text-brand md:text-5xl">
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
          <Link
            to="/our-dogs/our-girls"
            className="font-semibold text-branddark underline decoration-brand/40 underline-offset-4 hover:decoration-brand"
          >
            Meet Our Girls
          </Link>
          <Link
            to="/our-dogs/our-studs"
            className="font-semibold text-branddark underline decoration-brand/40 underline-offset-4 hover:decoration-brand"
          >
            Meet Our Studs
          </Link>
          <Link
            to="/our-dogs"
            className="font-semibold text-branddark underline decoration-brand/40 underline-offset-4 hover:decoration-brand"
          >
            Back to Our Dogs
          </Link>
        </div>
      </section>
    </>
  );
}
