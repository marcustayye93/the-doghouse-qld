import { asset, usePageMeta, PageHero } from '../../components/ui';

export default function FirstEightWeeks() {
  usePageMeta(
    'The First Eight Weeks',
    'The First Eight Weeks at The Doghouse QLD.'
  );
  return (
    <main>
      <PageHero
        title="The First Eight Weeks"
        image={asset("/images/photos/pup-in-hands.jpg")}
        imageAlt="Newborn Cavoodle puppy held gently in hands"
        intro={<></>}
      />
    </main>
  );
}
