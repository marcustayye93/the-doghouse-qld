import { CTAButton, ReadMore, usePageMeta } from '../../components/ui';
import { PhotoPlaceholder } from './PhotoPlaceholder';

export default function GuardianHomes() {
  usePageMeta(
    'Guardian Homes',
    'Selected Doghouse breeding dogs live as loved family pets through our Guardian Program. Learn what is involved and how to apply.'
  );

  return (
    <main>
      <section className="mx-auto max-w-6xl px-5 pt-10 pb-8 md:pt-14 md:pb-12">
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-branddark">
              About Us
            </p>
            <h1 className="font-display text-5xl font-bold leading-tight text-deep md:text-6xl">
              Guardian Homes
            </h1>
            <div className="prose-dog mt-5">
              <ReadMore
                id="guardian-homes-more"
                summary={
                  <div className="grid gap-4">
                    <p>
                      Our Guardian Program allows selected Doghouse breeding dogs to enjoy what we
                      believe every dog deserves: a permanent, loving family home of their own.
                    </p>
                    <p>
                      Rather than having all of our breeding dogs live permanently with us,
                      carefully selected dogs are placed with Guardian Families where they live as
                      much-loved family companions while remaining part of The Doghouse QLD
                      breeding program for an agreed period of time.
                    </p>
                    <p>
                      Becoming a Guardian Family can be a wonderful opportunity, but it is also an
                      important commitment. The right family needs to understand that while this
                      is their much-loved family dog, there will be times when we need their
                      cooperation and flexibility so the dog can fulfil their role within our
                      breeding program.
                    </p>
                  </div>
                }
              >
                <div className="grid gap-4">
                  <p>
                    Our Guardian Program has always been built around one very simple principle:
                    dogs first.
                  </p>
                  <p>
                    We want our breeding dogs to experience normal family life. We want them
                    sleeping in family homes, going for walks, joining in everyday activities,
                    receiving individual attention and, most importantly, knowing exactly where
                    home is.
                  </p>
                  <p>
                    A Guardian Family provides that permanent home while The Doghouse QLD retains
                    ownership of the dog for the duration of their breeding commitments. Once
                    those commitments have been completed and the requirements of the Guardian
                    Agreement have been met, ownership can be transferred to the Guardian Family.
                  </p>

                  <h3>What does being a Guardian Family involve?</h3>
                  <p>
                    Guardian Families are responsible for the everyday care and costs that come
                    with owning a dog, just as they would be with any other family pet. This
                    includes providing a loving home, appropriate food, grooming, training,
                    exercise and routine veterinary care.
                  </p>
                  <p>
                    The Doghouse QLD remains responsible for costs directly associated with the
                    dog&apos;s reproductive and breeding requirements.
                  </p>
                  <p>
                    Good communication between us and our Guardian Families is extremely
                    important. Breeding doesn&apos;t always work to a perfectly predictable
                    calendar, so Guardian Families need to be willing to communicate with us and
                    make their dog available when required for breeding-related appointments and
                    commitments.
                  </p>
                  <p>
                    For this reason, location is an important consideration. Guardian Families
                    need to live within a practical travelling distance of The Doghouse QLD in
                    Caboolture and be able and willing to assist with transporting their dog when
                    required.
                  </p>

                  <h3>Guardian girls</h3>
                  <p>
                    Our Guardian girls live their everyday lives with their families and return to
                    The Doghouse when required as part of their breeding program.
                  </p>
                  <p>
                    When it is time for one of our Guardian girls to have her puppies, she
                    returns to us so we can care for her through the final stages of pregnancy,
                    whelping and raising her litter.
                  </p>
                  <p>
                    This means a Guardian Family needs to be comfortable with their girl being
                    away from home during this important period.
                  </p>
                  <p>
                    While she is with us, she receives the care and support she needs throughout
                    whelping and motherhood, and her puppies are raised here at The Doghouse
                    through their first weeks of development.
                  </p>
                  <p>
                    Once her responsibilities with her litter are complete and she is ready, she
                    returns home to her Guardian Family.
                  </p>

                  <h3>Guardian boys</h3>
                  <p>
                    Our Guardian boys live as much-loved family pets with their Guardian Families
                    while remaining available to The Doghouse QLD as required for our breeding
                    program.
                  </p>
                  <p>
                    While our boys are young, we encourage our Guardian Families to bring them
                    back to The Doghouse from time to time. This helps them become familiar and
                    comfortable with us, our home and our environment, so that The Doghouse can
                    become a familiar home away from home rather than somewhere they only visit
                    when they are required for breeding.
                  </p>
                  <p>
                    As they become part of our breeding program, there may be times when a
                    Guardian boy needs to come to The Doghouse or attend a reproductive
                    appointment. There may also be occasions when it is more appropriate for
                    reproductive services to take place at the Guardian Family&apos;s home, where
                    the boy is most comfortable and relaxed.
                  </p>
                  <p>
                    For this reason, Guardian Families need to be comfortable with both
                    possibilities and willing to work with us depending on what is most
                    appropriate for their dog and the particular circumstances.
                  </p>
                  <p>
                    The commitments for a male are naturally different from those of a female,
                    but availability, communication and flexibility are still very important.
                    Reproduction doesn&apos;t always follow a convenient timetable, and there may
                    occasionally be relatively short notice when a boy is required.
                  </p>
                  <p>
                    This is also one of the reasons living within a practical travelling distance
                    of The Doghouse QLD is so important for our Guardian Families.
                  </p>

                  <h3>Who makes a good Guardian Family?</h3>
                  <p>
                    The right Guardian Family isn&apos;t simply someone who would love one of our
                    dogs. We need to feel confident that the home, family and lifestyle are
                    suitable for the individual dog and for the responsibilities that come with
                    the Guardian Program.
                  </p>
                  <p>
                    We look for families who can provide a secure, loving and stable home with
                    appropriate fencing and who understand the importance of training, grooming,
                    good nutrition and ongoing care.
                  </p>
                  <p>
                    The household also needs to be suitable for a breeding dog. Existing pets and
                    the individual circumstances of the home need to be considered, and there
                    cannot be circumstances that could create a risk of an unplanned mating.
                  </p>
                  <p>
                    Location, availability, transport and communication are also important.
                    Guardian Families need to understand that there will occasionally be times
                    when we need their help in getting their dog to and from The Doghouse or to
                    appointments associated with the breeding program.
                  </p>
                  <p>
                    Most importantly, we are looking for families who understand the partnership
                    involved.
                  </p>

                  <h3>A partnership built around the dog</h3>
                  <p>
                    A successful Guardian arrangement requires trust and communication on both
                    sides.
                  </p>
                  <p>
                    The Guardian Family knows and loves their dog as a member of their family,
                    while The Doghouse QLD remains responsible for decisions relating to the
                    dog&apos;s breeding program during the Guardian period.
                  </p>
                  <p>
                    The welfare of the dog remains central to those decisions. Being selected as
                    a potential breeding dog does not mean that a dog must breed regardless of
                    circumstances. Health, development, temperament and other factors can
                    influence whether a dog ultimately continues within our breeding program.
                  </p>
                  <p>
                    Likewise, breeding is biology, not a production schedule. Plans can change.
                    Timing can change. A mating may not result in a pregnancy, and circumstances
                    sometimes require us to make a different decision from the one originally
                    anticipated.
                  </p>
                  <p>
                    Our Guardian Families need to be comfortable with that flexibility and
                    understand that breeding decisions and timing remain the responsibility of The
                    Doghouse QLD.
                  </p>
                </div>
              </ReadMore>
            </div>
          </div>
          {/* OWNER: Guardian Homes page photograph to be supplied by The Doghouse QLD. */}
          <PhotoPlaceholder />
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 pb-10 md:pb-14">
        <div className="prose-dog">
          <h2>Interested in becoming a Guardian Family?</h2>
          <p>There are two ways families may express their interest in our Guardian Program.</p>
          <p>
            Families who would love to be considered for a future opportunity can join our
            Guardian Family Interest List. This allows us to learn a little about your family,
            location, home and lifestyle so we can consider you when a suitable dog becomes
            available.
          </p>
          <p>
            From time to time, we may also have a Current Guardian Opportunity for a particular
            dog. These opportunities will be clearly identified when available.
          </p>
          <p>
            Completing a Guardian application does not guarantee placement of a dog. Matching the
            right dog with the right Guardian Family is extremely important to us, and not every
            home will be suitable for every dog.
          </p>
          <p>
            The website provides an overview of how our Guardian Program works, but it is
            deliberately not intended to replace our Guardian Agreement. The full
            responsibilities, requirements and conditions of the arrangement are discussed with
            suitable families and provided in the agreement before anyone commits to becoming a
            Guardian Family.
          </p>
          <p>
            For the right family, becoming a Guardian can be a very special way to welcome a
            beautiful Doghouse dog into their lives while also becoming an important part of the
            future of The Doghouse QLD breeding program.
          </p>
        </div>
        <div className="mt-6">
          <CTAButton to="/about-us/guardian-homes/apply">Apply Now</CTAButton>
        </div>
      </section>
    </main>
  );
}
