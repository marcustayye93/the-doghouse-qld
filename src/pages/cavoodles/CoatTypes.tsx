import { usePageMeta } from '../../components/ui';
import { CavoodleHero, CavoodleFooter } from './shared';

export default function CoatTypes() {
  usePageMeta(
    'Cavoodle Coat Types',
    'Wool, fleece and shaggy Cavoodle coats explained, including furnishings and the classic teddy bear look.'
  );
  return (
    <>
      <CavoodleHero
        title="Coat Types"
        image="/images/photos/pup-yellow-bandana.jpg"
        imageAlt="Cavoodle wearing a yellow bandana"
        intro={
          <>
            <p>One of the most noticeable differences between Cavoodles is their coat.</p>
            <p>
              At The Doghouse QLD, we generally describe our coats as Wool, Fleece and Shaggy. All
              Doghouse puppies have at least one copy of the furnishings gene, which contributes to
              the familiar teddy bear expression.
            </p>
          </>
        }
      />
      <section className="prose-dog mx-auto max-w-6xl px-5 pb-4">
        <h2>Cavoodle coats</h2>
        <p>One of the most noticeable differences between Cavoodles is their coat.</p>
        <p>At The Doghouse QLD, we generally describe our coats as:</p>
        <p>
          Wool
          <br />
          Fleece
          <br />
          Shaggy
        </p>
        <p>
          Wool coats generally have the tightest curl. Fleece coats tend to have a softer curl and
          sit between wool and shaggy in appearance. Shaggy coats can range from a gentle wave
          through to a considerably straighter appearance.
        </p>
        <p>
          There can be variation within these descriptions because coat genetics are complex, and
          a puppy's coat also changes as they mature.
        </p>
        <p>
          Furnishings are another important part of the classic Cavoodle appearance. These are the
          facial coat characteristics that contribute to the familiar beard, moustache and teddy
          bear expression.
        </p>
        <p>All Doghouse puppies have at least one copy of the furnishings gene.</p>
      </section>
      <CavoodleFooter currentPath="/cavoodles/coat-types" />
    </>
  );
}
