import { asset, usePageMeta } from '../../components/ui';
import { CavoodleHero, CavoodleFooter } from './shared';

export default function Shedding() {
  usePageMeta(
    'Cavoodle Shedding',
    'Do Cavoodles shed? Honest answers on low-shedding coats, coat transition and allergies from The Doghouse QLD.'
  );
  return (
    <>
      <CavoodleHero
        title="Shedding"
        image={asset("/images/photos/pup-sitting-3.jpg")}
        imageAlt="Cavoodle sitting"
        intro={
          <>
            <p>
              Cavoodles are commonly advertised as "non-shedding" or "hypoallergenic", but we don't
              believe those are responsible guarantees to make.
            </p>
            <p>
              At The Doghouse QLD, our puppies are considered low shedding, but we do not promise
              that any dog will shed absolutely no hair.
            </p>
          </>
        }
      />
      <section className="prose-dog mx-auto max-w-6xl px-5 pb-4">
        <h2>Do Cavoodles shed?</h2>
        <p>
          Cavoodles are commonly advertised as "non-shedding" or "hypoallergenic", but we don't
          believe those are responsible guarantees to make.
        </p>
        <p>
          Cavoodles can be low shedding, but the amount of shedding varies according to their
          individual coat genetics and coat type. Poodle ancestry can contribute low-shedding
          characteristics, but not every Cavoodle inherits exactly the same combination.
        </p>
        <p>
          At The Doghouse QLD, our puppies are considered low shedding, but we do not promise that
          any dog will shed absolutely no hair.
        </p>
        <p>
          Puppy coats can also behave differently while the adult coat is developing. Families may
          notice more shedding during coat transition before the mature coat is established, which
          can continue through approximately the first 18 months.
        </p>
        <p>
          Wool coats will generally be at the lower-shedding end of the spectrum, but coat type
          alone should never be treated as an absolute guarantee.
        </p>
        <p>
          For families where allergies are a significant concern, spending time around dogs with
          similar coats before committing to a puppy is sensible. No dog should be guaranteed to
          be completely hypoallergenic.
        </p>
      </section>
      <CavoodleFooter currentPath="/cavoodles/shedding" />
    </>
  );
}
