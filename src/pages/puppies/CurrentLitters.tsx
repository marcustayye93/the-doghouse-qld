import { asset, usePageMeta, PageHero } from '../../components/ui';

export default function CurrentLitters() {
  usePageMeta(
    'Current Litters',
    'Current Litters at The Doghouse QLD.'
  );
  return (
    <main>
      <PageHero
        title="Current Litters"
        image={asset("/images/photos/basket-pups-2.jpg")}
        imageAlt="Basket of young Cavoodle puppies"
        intro={<></>}
      />
    </main>
  );
}
