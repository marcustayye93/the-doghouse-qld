import { usePageMeta } from '../../components/ui';
import { CavoodleHero, CavoodleFooter } from './shared';

export default function Generations() {
  usePageMeta(
    'Cavoodle Generations',
    'What multi-generational Cavoodles are, and why a higher generation number does not automatically mean a better Cavoodle.'
  );
  return (
    <>
      <CavoodleHero
        title="Cavoodle Generations"
        image="/images/photos/pup-white-brown.jpg"
        imageAlt="White and brown Cavoodle puppy"
        intro={
          <>
            <p>
              In the earlier generations of Cavoodle development, breeding begins with the Cavalier
              King Charles Spaniel and Poodle. As generations progress, Cavoodles can then be bred
              to other Cavoodles, allowing breeders to work with established Cavoodle lines rather
              than continually returning to a first-generation Cavalier and Poodle cross.
            </p>
          </>
        }
      />
      <section className="prose-dog mx-auto max-w-6xl px-5 pb-4">
        <h2>What is a multi-generational Cavoodle?</h2>
        <p>The Doghouse QLD specialises in multi-generational Cavoodles.</p>
        <p>
          In the earlier generations of Cavoodle development, breeding begins with the Cavalier
          King Charles Spaniel and Poodle. As generations progress, Cavoodles can then be bred to
          other Cavoodles, allowing breeders to work with established Cavoodle lines rather than
          continually returning to a first-generation Cavalier and Poodle cross.
        </p>
        <p>
          Within our own program, we predominantly breed Cavoodle to Cavoodle, while a carefully
          considered backcross to a Cavalier may occasionally form part of the development of a
          line.
        </p>
        <p>
          Multi-generational breeding gives us the opportunity to look beyond a simple percentage
          of Cavalier versus Poodle and consider the actual dogs in front of us. Health,
          temperament, structure, size, coat, genetics and how two dogs may complement one another
          are all important parts of that decision.
        </p>
        <p>
          A higher generation number does not automatically mean a better Cavoodle. A thoughtfully
          bred F2 can be a far better breeding prospect than a poorly selected dog with many
          generations behind it.
        </p>
        {/* OWNER: Deeper generation-by-generation detail (F1, F1b, F2 and beyond) can be added here when approved by The Doghouse QLD. Do not present non-universal generation terminology as universally standard. */}
      </section>
      <CavoodleFooter currentPath="/cavoodles/generations" />
    </>
  );
}
