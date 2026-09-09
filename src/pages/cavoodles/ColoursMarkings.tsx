import { usePageMeta } from '../../components/ui';
import { CavoodleHero, CavoodleFooter } from './shared';
import { ColourGallery } from './AboutCavoodles';

export default function ColoursMarkings() {
  usePageMeta(
    'Cavoodle Colours & Markings',
    'Cavoodle colours and markings, from red and chocolate to parti, phantom, tri-colour and merle, with a photo gallery.'
  );
  return (
    <>
      <CavoodleHero
        title="Colours & Markings"
        image="/images/photos/pup-blue-bandana.jpg"
        imageAlt="Cavoodle wearing a blue bandana"
        intro={
          <>
            <p>
              Cavoodles come in an extraordinary variety of colours and patterns, and this is one
              of the things that makes them so visually diverse.
            </p>
            <p>
              Colour can also change as a puppy matures. Some dogs retain very intense colour while
              others gradually soften or fade. That does not make one dog better than another.
            </p>
          </>
        }
      />
      <section className="prose-dog mx-auto max-w-6xl px-5 pb-4">
        <h2>Cavoodle colours and markings</h2>
        <p>
          Cavoodles come in an extraordinary variety of colours and patterns, and this is one of
          the things that makes them so visually diverse.
        </p>
        <p>At The Doghouse QLD, colours you may see include:</p>
        <p>
          Red
          <br />
          Apricot
          <br />
          Cream
          <br />
          Chocolate
          <br />
          Black
        </p>
        <p>
          Ruby is used to describe a particularly deep, rich shade within the red spectrum, while
          caramel is often a useful descriptive term for a red coat that has softened or faded in
          colour.
        </p>
        <p>Markings and patterns can include:</p>
        <p>
          Abstract White
          <br />
          Parti
          <br />
          Phantom
          <br />
          Tri-colour
          <br />
          Merle
          <br />
          Red Merle
          <br />
          Chocolate Merle
          <br />
          Harlequin
        </p>
        <p>A black and tan Cavoodle, for example, is an expression of the phantom pattern.</p>
        <p>
          Colour can also change as a puppy matures. Some dogs retain very intense colour while
          others gradually soften or fade. That does not make one dog better than another. Colour
          is simply one part of the extraordinary variety found within Cavoodles.
        </p>

        <h3>Cavoodle Colour Gallery</h3>
        <ColourGallery />
      </section>
      <CavoodleFooter currentPath="/cavoodles/colours-markings" />
    </>
  );
}
