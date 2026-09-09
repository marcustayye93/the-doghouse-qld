import { asset, usePageMeta } from '../../components/ui';
import { CavoodleHero, CavoodleFooter } from './shared';

export default function Theodore() {
  usePageMeta(
    'The Theodore',
    'What the Theodore is: developing multi-generational companion-dog lines from the Cavoodle foundation, recognised through the MDBA.'
  );
  return (
    <>
      <CavoodleHero
        title="The Theodore"
        image={asset("/images/photos/pup-held-outdoors.jpg")}
        imageAlt="Puppy held outdoors"
        intro={
          <>
            <p>
              We are passionate about the continued development of the Cavoodle and support the
              development and recognition of the Theodore through the MDBA.
            </p>
            <p>
              The Theodore represents the development of established multi-generational
              companion-dog lines from the Cavoodle foundation, with work being undertaken towards
              breed development and recognition through the MDBA.
            </p>
          </>
        }
      />
      <section className="prose-dog mx-auto max-w-6xl px-5 pb-4">
        <h2>What is a Theodore?</h2>
        <p>
          The Theodore represents the development of established multi-generational companion-dog
          lines from the Cavoodle foundation, with work being undertaken towards breed development
          and recognition through the MDBA.
        </p>
        <p>
          We are passionate about the continued development of the Cavoodle and support the
          development and recognition of the Theodore through the MDBA.
        </p>

        <h2>Is every multi-generational Cavoodle automatically a Theodore?</h2>
        <p>No.</p>
        <p>
          "Multi-generational Cavoodle" and "Theodore" shouldn't simply be treated as
          interchangeable terms.
        </p>
        <p>There are specific breeding-development and registration considerations involved.</p>

        <h2>Are all Doghouse puppies registered as Theodores?</h2>
        <p>No.</p>
        <p>
          The Doghouse QLD supports the development and recognition of the Theodore and our future
          breeding direction includes Theodore lines, but that doesn't mean every Doghouse puppy
          or every multi-generational Cavoodle litter should automatically be described as a
          registered Theodore.
        </p>
        {/* OWNER: This is a developing area. Deeper approved Theodore information (breeding-development and registration considerations) can be added here when supplied by The Doghouse QLD. Do not claim that every multi-generational Cavoodle is a Theodore, or that every Doghouse litter is registered as Theodore, unless verified. */}
      </section>
      <CavoodleFooter currentPath="/cavoodles/the-theodore" />
    </>
  );
}
