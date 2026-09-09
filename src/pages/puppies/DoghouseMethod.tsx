import { asset, usePageMeta, PageHero } from '../../components/ui';

export default function DoghouseMethod() {
  usePageMeta(
    'The Doghouse Method™',
    'The Doghouse Method™ at The Doghouse QLD.'
  );
  return (
    <main>
      <PageHero
        title="The Doghouse Method™"
        image={asset("/images/photos/enrichment-ball-pit.jpg")}
        imageAlt="Cavoodle puppy playing in a ball pit enrichment activity"
        intro={<></>}
      />
    </main>
  );
}
