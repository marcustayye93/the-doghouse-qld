import { ReadMore, usePageMeta } from '../../components/ui';
import { PhotoPlaceholder } from './PhotoPlaceholder';

export default function BreedingPhilosophy() {
  usePageMeta(
    'Our Breeding Philosophy',
    'The breeding philosophy behind The Doghouse QLD.'
  );

  return (
    <main>
      <section className="mx-auto max-w-6xl px-5 pt-10 pb-8 md:pt-14 md:pb-12">
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-branddark">
              About Us
            </p>
            <h1 className="font-display text-5xl font-bold  leading-tight text-brand md:text-6xl">
              Our Breeding Philosophy
            </h1>
            <div className="prose-dog mt-5">
              <ReadMore
                id="breeding-philosophy-more"
                summary={
                  <div className="grid gap-4">
                    <p>
                      Thoughtful breeding starts long before puppies are born. Every pairing at
                      The Doghouse QLD is considered with the future puppies in mind, not simply
                      how they might look, but the dogs they may grow to become and the families
                      who will eventually share their lives with them.
                    </p>
                    <p>
                      There are many things we consider when making breeding decisions, but some
                      of the main criteria we look at are health, temperament, structure and, of
                      course, good looks. A beautiful Cavoodle is lovely, but appearance is only
                      one piece of a much bigger picture. We want to bring together dogs whose
                      qualities complement one another and give us the best opportunity to produce
                      healthy, well-tempered, well-structured and beautiful family companions.
                    </p>
                  </div>
                }
              >
                <div className="grid gap-4">
                  <p>
                    Health is an important consideration when deciding whether a dog should become
                    part of our breeding program and when considering which two dogs may
                    complement one another. We use comprehensive health testing and available
                    health information to help us make informed breeding decisions. This can
                    include DNA genetic screening, hip and elbow radiographs and scoring, patella
                    assessment, echocardiograms, specialist ophthalmology examinations, teeth and
                    bite assessment, and general veterinary and physical assessment.
                  </p>
                  <p>
                    Health testing isn&apos;t about collecting certificates or claiming that
                    testing can guarantee a perfectly healthy puppy. No breeder can promise that.
                    It is about gathering as much useful information as we reasonably can,
                    understanding what that information means, and using it to reduce known and
                    avoidable risks when planning a litter.
                  </p>
                  <p>
                    DNA results also need to be understood rather than simply labelled as good or
                    bad. A healthy dog carrying one copy of a recessively inherited genetic
                    variant is not necessarily an unhealthy dog or a dog that should automatically
                    be removed from a breeding program. Depending on the condition, a carrier can
                    sometimes be responsibly paired with a genetically clear dog without producing
                    puppies affected by that condition. For us, responsible breeding means
                    understanding the genetics behind the result and choosing the other parent
                    accordingly.
                  </p>
                  <p>
                    Temperament is enormously important because ultimately our puppies are being
                    bred to become much-loved family companions. We value dogs that are friendly,
                    relaxed, affectionate and comfortable with people, including both young and
                    old.
                  </p>
                  <p>
                    A dog may be physically beautiful, but if we have concerns about significant
                    anxiety, nervousness, excessive shyness, withdrawal, aggression, poor
                    suitability around children or older people, or excessive nervous barking,
                    those characteristics matter when deciding whether that dog belongs in our
                    breeding program. Temperament is influenced by both genetics and environment,
                    which is why we believe our responsibility begins with the parents and
                    continues through the way we raise their puppies.
                  </p>
                  <p>
                    Structure is another important part of our breeding decisions. We look at the
                    overall dog and consider balance, proportion, size, teeth and bite, and other
                    physical characteristics that may influence the puppies a pairing could
                    produce.
                  </p>
                  <p>
                    We also consider how the structure of one parent may complement the other.
                    Breeding isn&apos;t simply about finding two lovely dogs and putting them
                    together. The strengths and characteristics of both dogs need to be
                    considered as part of the bigger picture when deciding whether we believe
                    they are a suitable match.
                  </p>
                  <p>
                    And, of course, we love beautiful Cavoodles. Colour, markings, coat type and
                    that gorgeous teddy-bear appearance are naturally part of our breeding
                    considerations. We may consider coat traits, furnishings, colours and
                    markings when planning a pairing, but we don&apos;t believe appearance should
                    come at the expense of health, temperament or sound structure.
                  </p>
                  <p>
                    We predominantly breed multi-generational Cavoodles because it allows us to
                    make increasingly deliberate choices using generations of information about
                    the dogs behind our puppies. We can consider health, temperament, size, coat
                    and other characteristics across established Cavoodle lines rather than
                    looking only at the generation label attached to a dog.
                  </p>
                  <p>
                    But an F-number alone does not make a good Cavoodle. Generation cannot tell
                    you whether the parents were appropriately health tested, whether they have
                    beautiful family-friendly temperaments, whether their structure is sound,
                    whether the pairing was thoughtfully chosen or how their puppies were
                    raised. Those things matter far more to us than a generation label on its
                    own.
                  </p>
                  <p>
                    When considering an outside stud, we apply the same principles. We need to
                    feel comfortable with the dog&apos;s health information, temperament,
                    structure and suitability for the girl we are considering. Access to a
                    particular colour, coat or desirable physical trait isn&apos;t enough on its
                    own.
                  </p>
                  <p>
                    For us, thoughtful breeding is about bringing all of those pieces together.
                    Science gives us increasingly valuable tools through genetics, veterinary
                    screening and health testing. Experience teaches us to observe the dogs in
                    front of us. And heart reminds us why those decisions matter.
                  </p>
                  <p>
                    Every puppy we deliberately bring into the world will eventually become
                    someone&apos;s dog. Someone&apos;s companion. Someone&apos;s little shadow.
                    Someone&apos;s Poochy.
                  </p>
                  <p>That responsibility sits behind every breeding decision we make.</p>
                  <p>
                    And while we can never control everything Mother Nature has in store, we can
                    make sure that the decisions within our control are made thoughtfully,
                    carefully and with purpose.
                  </p>
                </div>
              </ReadMore>
            </div>
          </div>
          {/* OWNER: Our Breeding Philosophy page photograph to be supplied by The Doghouse QLD. */}
          <PhotoPlaceholder />
        </div>
      </section>
    </main>
  );
}
