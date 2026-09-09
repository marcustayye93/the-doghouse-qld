import { asset, usePageMeta } from '../../components/ui';
import { CavoodleHero, CavoodleFooter } from './shared';

export default function Sizes() {
  usePageMeta(
    'Cavoodle Sizes',
    'Teacup, Toy and Mini Cavoodle sizes explained, and why adult size can only ever be an estimate. The Doghouse QLD.'
  );
  return (
    <>
      <CavoodleHero
        title="Cavoodle Sizes"
        image={asset("/images/photos/pup-in-hands.jpg")}
        imageAlt="Small Cavoodle puppy held in hands"
        intro={
          <>
            <p>
              One of the reasons Cavoodles can suit such a variety of homes is that they are bred
              across a range of sizes.
            </p>
            <p>
              At The Doghouse QLD, the broad size descriptions we use are Teacup, Toy and Mini.
              Predicting adult size is an estimate, and no breeder can responsibly guarantee an
              exact adult weight.
            </p>
          </>
        }
      />
      <section className="prose-dog mx-auto max-w-6xl px-5 pb-4">
        <h2>Cavoodle sizes</h2>
        <p>
          One of the reasons Cavoodles can suit such a variety of homes is that they are bred
          across a range of sizes.
        </p>
        <p>At The Doghouse QLD, the broad size descriptions we use are:</p>
        <p>
          Teacup: under approximately 4 kg
          <br />
          Toy: approximately 4 to 8 kg
          <br />
          Mini: approximately 7 to 12 kg
        </p>
        <p>
          There is intentional overlap between these ranges because dogs do not grow according to
          a perfectly defined chart.
        </p>
        <p>
          "Teacup" is also a descriptive term rather than an officially recognised Cavoodle size
          classification.
        </p>
        <p>
          Predicting adult size is an estimate. Parent size, genetics, birth weight and the
          puppy's growth pattern can all help us form an expectation, but no breeder can
          responsibly guarantee an exact adult weight.
        </p>
      </section>
      <CavoodleFooter currentPath="/cavoodles/sizes" />
    </>
  );
}
