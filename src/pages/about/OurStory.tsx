import { PageHero, ReadMore, usePageMeta } from '../../components/ui';

export default function OurStory() {
  usePageMeta(
    'Our Story',
    'The story behind The Doghouse QLD, from a childhood sidekick named Poochie to a Queensland Cavoodle breeding program built on love and science.'
  );

  return (
    <main>
      <PageHero
        title="Our Story"
        eyebrow="About Us"
        image="/images/photos/our-story-charmaine-pups.jpg"
        imageAlt="Charmaine with two Cavoodle puppies"
        intro={
          <ReadMore
            id="our-story-more"
            summary={
              <div className="grid gap-4">
                <p>
                  My first love wasn&apos;t with a boy, it was with a dog. At just three years
                  old, I was gifted a scruffy little sidekick I proudly named Poochie. And from
                  that moment, she became my whole world.
                </p>
                <p>
                  She was my best friend, my student, my partner in crime. I carted her around on
                  skateboards, tucked her into prams, dressed her up in dolls&apos; clothes, and
                  even held &ldquo;lessons&rdquo; for her at my blackboard. She tolerated it all
                  with the patience of a saint and taught me the greatest truth of all: life is
                  simply better with a dog.
                </p>
                <p>
                  You could say dogs run in my DNA. My grandfather bred Dobermans and Boxers. My
                  mum bred Toy Pomeranians. My aunt bred Bull Terriers, and my dad trained German
                  Shorthaired Pointer pups. Growing up, there were always paws padding around the
                  house. So, for me, dog breeding and training wasn&apos;t just something I saw.
                  It was simply a part of the rhythm of family life.
                </p>
              </div>
            }
          >
            <div className="grid gap-4">
              <p>
                Those childhood memories gave me the best foundation, but I didn&apos;t want to
                stop there. I wanted to take everything I&apos;d learned and observed and raise
                the bar higher by layering modern genetics, health insights, and new and
                researched puppy development techniques on top of the love and care that shaped my
                childhood understanding of the breeding world.
              </p>
              <p>
                I wanted to create a program that not only honoured my family&apos;s legacy but
                elevated it, building a future where every pup got the very best start and every
                family could feel the difference.
              </p>
              <p>
                That turning point came with my first Cavoodle. I thought I was just buying a
                puppy for my boys, but really, I was buying myself a love affair with the breed.
                That little Cavoodle opened my eyes and sparked something bigger.
              </p>
              <p>
                I wanted more for the puppies and more for the families who welcomed them home. I
                wanted a program where pups were nurtured with enrichment, socialisation, and
                love from the very beginning, while also embracing the incredible advances in
                genetics.
              </p>
              <p>
                Today, we understand so much more about how to protect health lines, reduce
                inherited issues, and even guide coat traits and colours to better match what
                families are looking for. Science has given us tools my parents and grandparents
                never had, and I wanted to use them to raise healthier, happier, more
                well-rounded pups.
              </p>
              <p>
                And that&apos;s how The Doghouse QLD was born. Not out of business plans or big
                strategies, but out of love, history, purpose, and a whole lot of puppy kisses.
              </p>
              <p>
                Here, every puppy is raised with the best of science, heart, and a splash of
                cheeky fun, because we truly believe that a happy pup is a Doghouse pup.
              </p>
            </div>
          </ReadMore>
        }
      />
    </main>
  );
}
