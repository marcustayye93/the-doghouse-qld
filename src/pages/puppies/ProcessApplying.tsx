import { useState, type ReactNode } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { asset, usePageMeta, PageHero, ReadMore, CTAButton, PawDivider } from '../../components/ui';
import {
  FormShell,
  Field,
  TextArea,
  SelectField,
  CheckboxField,
  RadioGroup,
  inputClass,
} from '../../components/forms';

/** In-page anchor button matching CTAButton styling (native smooth scroll). */
function ApplyNowButton() {
  return (
    <a
      href="#doghouse-application"
      className="inline-flex items-center justify-center gap-2 rounded-full bg-cta px-8 py-3.5 text-base font-bold uppercase tracking-wide text-white shadow-md transition hover:bg-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
    >
      Apply Now
      <span aria-hidden="true">›</span>
    </a>
  );
}

/** Card wrapper for each numbered form section. */
function FormSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="rounded-2xl border border-bark/30 bg-white p-6 shadow-sm md:p-8">
      <h3 className="font-bold text-3xl  leading-snug text-bark">{title}</h3>
      <div className="mt-5 grid gap-5">{children}</div>
    </div>
  );
}

const AU_STATES = [
  'New South Wales',
  'Victoria',
  'Queensland',
  'South Australia',
  'Western Australia',
  'Tasmania',
  'Northern Territory',
  'Australian Capital Territory',
];

const JOURNEY_ENQUIRING = "I'm enquiring about a particular available puppy";

const JOURNEY_OPTIONS = [
  JOURNEY_ENQUIRING,
  "I'm interested in a current litter",
  "I'm interested in a planned or upcoming litter",
  "I'm looking for a future Doghouse puppy",
  "I'm not sure yet",
];

export default function ProcessApplying() {
  usePageMeta(
    'Puppy Process & Applying',
    'How the Doghouse puppy process works, from your first application through to finding your puppy. Start your application here.'
  );
  const [searchParams] = useSearchParams();
  const puppyParam = searchParams.get('puppy');

  const [childrenAtHome, setChildrenAtHome] = useState('');
  const [petsAtHome, setPetsAtHome] = useState('');
  const [homeType, setHomeType] = useState('');
  const [ownRent, setOwnRent] = useState('');
  const [ownedDogBefore, setOwnedDogBefore] = useState('');
  const [journey, setJourney] = useState(puppyParam ? JOURNEY_ENQUIRING : '');

  return (
    <main>
      <PageHero
        title="Puppy Process & Applying"
        eyebrow="Puppies"
        image={asset("/images/photos/family-with-dogs.jpg")}
        imageAlt="Family with their dogs"
        intro={
          <>
            <p>Welcoming a Doghouse puppy into your family begins with getting to know each other.</p>
            <p>
              We want to learn a little about you, your household, lifestyle and what you&apos;re
              hoping for in a puppy. Just as importantly, we want you to have the opportunity to
              learn about us, how we raise our puppies and whether The Doghouse QLD feels like the
              right breeder for your family.
            </p>
            <p>
              Our process is designed to be personal rather than transactional. Completing an
              application doesn&apos;t commit you to a puppy, and it doesn&apos;t mean you need to
              have chosen a particular litter or puppy before getting in touch.
            </p>
            <p>It simply starts the conversation.</p>
            <p className="pt-2">
              <ApplyNowButton />
            </p>
          </>
        }
      />
      <section className="mx-auto max-w-4xl px-5 pb-16">
        <div className="prose-dog">
          <ReadMore id="process-more" summary={<></>}>
            <h2>Step 1: Explore The Doghouse</h2>
            <p>Before applying, we encourage you to spend a little time getting to know us.</p>
            <p>
              Explore our{' '}
              <Link
                to="/about-us/our-breeding-philosophy"
                className="font-semibold text-branddark underline decoration-brand/40 underline-offset-4 hover:decoration-brand"
              >
                breeding philosophy
              </Link>
              ,{' '}
              <Link
                to="/about-us/health-testing"
                className="font-semibold text-branddark underline decoration-brand/40 underline-offset-4 hover:decoration-brand"
              >
                health testing
              </Link>
              ,{' '}
              <Link
                to="/puppies/doghouse-method"
                className="font-semibold text-branddark underline decoration-brand/40 underline-offset-4 hover:decoration-brand"
              >
                The Doghouse Method™
              </Link>
              ,{' '}
              <Link
                to="/puppies/current-litters"
                className="font-semibold text-branddark underline decoration-brand/40 underline-offset-4 hover:decoration-brand"
              >
                current
              </Link>{' '}
              and{' '}
              <Link
                to="/puppies/planned-litters"
                className="font-semibold text-branddark underline decoration-brand/40 underline-offset-4 hover:decoration-brand"
              >
                upcoming litters
              </Link>{' '}
              and the way we raise and match our puppies.
            </p>
            <p>
              Choosing a breeder is an important decision, and we want our families to feel
              comfortable not only with our puppies, but with the values and practices behind them.
            </p>

            <h2>Step 2: Complete Your Doghouse Puppy Application</h2>
            <p>
              When you feel that The Doghouse QLD may be the right breeder for you, the next step
              is to complete our Doghouse Puppy Application.
            </p>
            <p>
              The initial application gives us an introduction to your family, your home and the
              kind of Cavoodle you are hoping to welcome.
            </p>
            <p>You don&apos;t need to know exactly which puppy you want.</p>
            <p>
              You may be interested in a puppy currently available, following one of our litters,
              planning ahead for a future puppy or simply waiting for the right Doghouse puppy to
              come along.
            </p>
            <p>There is no application fee.</p>

            <h2>Step 3: We Review Your Application</h2>
            <p>Every application is reviewed by us.</p>
            <p>
              This isn&apos;t an automated approval process and completing an application doesn&apos;t
              guarantee that a puppy will be offered.
            </p>
            <p>
              We look at the information you&apos;ve provided and consider whether we believe one of
              our puppies may be suitable for your home and lifestyle.
            </p>
            <p>If we need more information, we may get in touch for a chat.</p>
            <p>
              If you have enquired about a particular available puppy, we will also consider what
              we already know about that puppy and whether they may potentially complement your
              family.
            </p>

            <h2>Step 4: Getting to Know Each Other</h2>
            <p>If there is a puppy or litter that may be suitable, we can continue the conversation.</p>
            <p>
              Families who are able to travel to us in Caboolture may be able to arrange a visit at
              the appropriate stage.
            </p>
            <p>
              For interstate families, or families who cannot reasonably visit, we can arrange a
              FaceTime call.
            </p>
            <p>
              This gives you the opportunity to ask questions, learn more about the puppy or litter
              and get to know us a little better too.
            </p>
            <p>We believe the relationship should work both ways.</p>
            <p>
              You are deciding whether you trust us with something as important as your future
              puppy, just as we are deciding whether we believe one of our puppies may be right
              for your family.
            </p>

            <h2>Step 5: Understanding What You&apos;re Looking For</h2>
            <p>
              As we move closer to puppy matching, we may ask you to complete our more detailed
              Doghouse Puppy Matching Questionnaire.
            </p>
            <p>This is separate from the initial application.</p>
            <p>
              By this stage, we want to understand more than simply whether you would provide a
              good home. We want to understand what life in that home actually looks like.
            </p>
            <p>
              Your activity level, working arrangements, children, other pets, experience with
              dogs, expectations, preferences and the type of companion you imagine sharing your
              life with can all help us understand which puppy characteristics may suit you.
            </p>
            <p>
              We also want to know about the things you naturally care about, such as preferred
              size, sex, coat, colour or markings.
            </p>
            <p>Those preferences are part of the picture too.</p>

            <h2>Step 6: Puppy Temperament &amp; Matching</h2>
            <p>We spend weeks observing our puppies as they grow through The Doghouse Method™.</p>
            <p>
              At approximately 6.5 to 7 weeks of age, we also conduct an individual temperament
              assessment.
            </p>
            <p>
              We then bring together what we have learned about the puppy with what we have
              learned about your family.
            </p>
            <p>This doesn&apos;t mean we simply choose your puppy for you.</p>
            <p>Your preferences and the puppies you naturally connect with matter.</p>
            <p>
              Our role is to help guide the decision and let you know if something we have
              observed makes us believe a particular puppy may, or may not, be a natural fit for
              your home.
            </p>
            <p>
              <CTAButton to="/puppies/matching-temperament">
                Learn About Puppy Matching &amp; Temperament
              </CTAButton>
            </p>

            <h2>Step 7: Allocating Your Puppy</h2>
            <p>
              Once a family and The Doghouse QLD have agreed to proceed with a particular puppy,
              that puppy can be allocated to the family.
            </p>
            <p>At this stage, a $1,000 holding fee is required.</p>
            <p>
              Once the holding fee has been received, the puppy is marked as Allocated and removed
              from general availability while the final stages of the puppy journey are completed.
            </p>
            <p>The holding fee forms part of the puppy purchase price.</p>
            <p>
              Because allocation means we stop offering that puppy to other families, the holding
              fee is not simply a fee to temporarily reserve a puppy while a family decides
              whether they would like to proceed.
            </p>
            <p>
              Our full payment, holding fee and purchase conditions are provided as part of the
              puppy purchase process and Puppy Sale Agreement.
            </p>

            <h2>What If the Temperament Assessment Shows a Concern?</h2>
            <p>
              Sometimes a family may fall in love with a puppy before their temperament assessment
              has been completed.
            </p>
            <p>
              If the later temperament assessment and our broader observations identify a genuine
              temperament mismatch between that puppy and the family&apos;s circumstances, we will
              talk through it with you.
            </p>
            <p>The first step is always a conversation.</p>
            <p>
              There may be circumstances where something that initially appears to be a concern can
              be comfortably managed within the family&apos;s lifestyle.
            </p>
            <p>
              In other situations, we may believe another puppy would be a more appropriate match.
            </p>
            <p>
              Where a genuine temperament mismatch is identified and we cannot find a workable
              solution or suitable alternative, the $1,000 holding fee may be refunded in
              accordance with our puppy purchase terms.
            </p>
            <p>
              This is different from changing your mind because you prefer another puppy&apos;s
              colour, markings, sex or appearance.
            </p>
            <p>
              The detailed terms applying to holding fees, allocation and refunds are contained
              within the Puppy Sale Agreement.
            </p>

            <h2>Step 8: Preparing for Go Home Day</h2>
            <p>Once your puppy has been allocated, the exciting countdown begins.</p>
            <p>
              Before leaving The Doghouse, our puppies receive their first puppy vaccination,
              microchip and veterinary health examination.
            </p>
            <p>
              Our puppies generally leave us from eight weeks of age, although there may
              occasionally be circumstances where we feel an individual puppy would benefit from
              remaining with us a little longer.
            </p>
            <p>
              You will also receive information from us to help you prepare for your puppy and
              those important first days at home.
            </p>
            <p>
              <CTAButton to="/puppies/preparing-for-your-puppy">Preparing for Your Puppy</CTAButton>
            </p>

            <h2>Interstate Families</h2>
            <p>
              Living outside Queensland doesn&apos;t necessarily mean a Doghouse puppy is out of
              reach.
            </p>
            <p>
              We can work with suitable interstate families and use FaceTime where an in-person
              visit isn&apos;t practical.
            </p>
            <p>
              Where a puppy needs to travel interstate, transport can be arranged where
              appropriate, with transport organised and paid for by the purchaser.
            </p>
            <p>
              We will work with you around the practical requirements needed to help your puppy
              make their journey safely.
            </p>

            <h2>Not Ready Yet?</h2>
            <p>
              You don&apos;t need to apply for a puppy simply because you would like to follow The
              Doghouse QLD.
            </p>
            <p>
              If you&apos;re interested in a future puppy but the timing isn&apos;t quite right, you
              can join our free Master Waitlist.
            </p>
            <p>There is no fee to join and no deposit is required.</p>
            <p>
              Our Master Waitlist allows you to stay informed about future litter announcements and
              puppy availability without committing to a puppy.
            </p>
            <p>
              <CTAButton to="/puppies/master-waitlist">Join the Master Waitlist</CTAButton>
            </p>
          </ReadMore>

          <div className="mt-8">
            <ApplyNowButton />
          </div>

          <div id="doghouse-application" className="scroll-mt-28 pt-4">
            <h2 className="!mb-2">Doghouse Puppy Application</h2>
            <p>Let&apos;s get to know each other.</p>
            <p>You don&apos;t need to write an essay and there are no perfect answers.</p>
            <p>
              We simply want to understand a little about you, the home you can offer and what
              you&apos;re hoping for in your future Cavoodle.
            </p>
            <p>
              Completing this application does not commit you to purchasing a puppy and does not
              guarantee that a puppy will be offered.
            </p>

            <div className="mt-6">
              <FormShell
                formName="puppy-application"
                submitLabel="Submit My Puppy Application"
                successHeading="Thank You"
                successMessage="Thank you for taking the time to tell us a little about yourself and the home you could offer a Doghouse puppy. Your application has been received and will be reviewed by The Doghouse QLD. We look forward to learning more about you and hopefully helping you find the little Doghouse puppy who may become part of your family."
                fieldValidators={{
                  postcode: {
                    test: (value) => /^\d{4}$/.test(value),
                    message: 'Please enter a valid postcode.',
                  },
                }}
              >
                {puppyParam && (
                  <p
                    role="status"
                    className="rounded-xl border border-brand/25 bg-mist p-4 text-sm font-semibold text-deep"
                  >
                    You&apos;re enquiring about {puppyParam}.
                  </p>
                )}

                <FormSection title="Your Details">
                  <Field label="Full Name" name="full_name" type="text" required autoComplete="name" />
                  <Field label="Email Address" name="email" type="email" required autoComplete="email" />
                  <Field label="Mobile Number" name="mobile" type="tel" required autoComplete="tel" />
                  <div className="grid gap-5 sm:grid-cols-3">
                    <Field label="Suburb" name="suburb" type="text" required autoComplete="address-level2" />
                    <SelectField label="State" name="state" options={AU_STATES} required />
                    <Field label="Postcode" name="postcode" type="text" required autoComplete="postal-code" />
                  </div>
                  <RadioGroup
                    legend="Preferred Method of Contact"
                    name="preferred_contact"
                    options={['Phone', 'Text message', 'Email']}
                    required
                  />
                </FormSection>

                <FormSection title="Your Household">
                  <TextArea
                    label="Tell us a little about who lives in your home."
                    name="household_description"
                  />
                  <Field label="Number of Adults" name="number_of_adults" type="number" required />
                  <div
                    onChange={(e) =>
                      setChildrenAtHome((e.target as HTMLInputElement).value)
                    }
                  >
                    <RadioGroup
                      legend="Do any children live in your household?"
                      name="children_at_home"
                      options={['Yes', 'No']}
                    />
                  </div>
                  {childrenAtHome === 'Yes' && (
                    <Field
                      label="Please tell us the ages of the children in your household."
                      name="children_ages"
                      type="text"
                    />
                  )}
                  <div
                    onChange={(e) => setPetsAtHome((e.target as HTMLInputElement).value)}
                  >
                    <RadioGroup
                      legend="Do you currently have any pets?"
                      name="pets_at_home"
                      options={['Yes', 'No']}
                    />
                  </div>
                  {petsAtHome === 'Yes' && (
                    <TextArea
                      label="Please tell us a little about your current pets, including species, breed, age and sex where relevant."
                      name="pets_description"
                    />
                  )}
                </FormSection>

                <FormSection title="Your Home">
                  <div onChange={(e) => setHomeType((e.target as HTMLInputElement).value)}>
                    <RadioGroup
                      legend="What type of home do you live in?"
                      name="home_type"
                      options={[
                        'House',
                        'Townhouse',
                        'Apartment or unit',
                        'Acreage or rural property',
                        'Other',
                      ]}
                    />
                  </div>
                  {homeType === 'Other' && (
                    <input
                      type="text"
                      name="home_type_other"
                      aria-label="What type of home do you live in?"
                      className={inputClass}
                    />
                  )}
                  <div onChange={(e) => setOwnRent((e.target as HTMLInputElement).value)}>
                    <RadioGroup
                      legend="Do you own or rent your home?"
                      name="own_or_rent"
                      options={['Own', 'Rent', 'Other']}
                    />
                  </div>
                  {ownRent === 'Rent' && (
                    <RadioGroup
                      legend="Are you permitted to keep a dog at your property?"
                      name="rental_permission"
                      options={['Yes', 'No', 'Permission pending']}
                    />
                  )}
                  <RadioGroup
                    legend="Do you have a securely fenced outdoor area?"
                    name="fenced_area"
                    options={['Yes', 'No', 'Not applicable to my home']}
                  />
                  <TextArea
                    label="Please tell us anything else about your home environment that you think may be helpful for us to know."
                    name="home_extra"
                  />
                </FormSection>

                <FormSection title="Your Lifestyle">
                  <TextArea
                    label="What does a typical weekday look like in your household?"
                    name="typical_weekday"
                    required
                  />
                  <Field
                    label="Approximately how long would your puppy usually be home without a person present?"
                    name="time_alone"
                    type="text"
                    required
                  />
                  <TextArea
                    label="What kinds of activities would you like your future dog to be part of?"
                    name="activities"
                  />
                </FormSection>

                <FormSection title="Your Dog Experience">
                  <div
                    onChange={(e) => setOwnedDogBefore((e.target as HTMLInputElement).value)}
                  >
                    <RadioGroup
                      legend="Have you owned a dog before?"
                      name="owned_dog_before"
                      options={['Yes', 'No']}
                    />
                  </div>
                  {ownedDogBefore === 'Yes' && (
                    <TextArea
                      label="Please tell us a little about your previous or current dog experience."
                      name="dog_experience"
                    />
                  )}
                  <RadioGroup
                    legend="Have you owned a Cavoodle or another oodle breed before?"
                    name="owned_oodle_before"
                    options={['Yes', 'No']}
                  />
                </FormSection>

                <FormSection title="The Puppy You're Hoping For">
                  <div onChange={(e) => setJourney((e.target as HTMLInputElement).value)}>
                    <RadioGroup
                      legend="What best describes where you are in your puppy journey?"
                      name="puppy_journey"
                      options={JOURNEY_OPTIONS}
                    />
                  </div>
                  {journey === JOURNEY_ENQUIRING && (
                    <label className="block text-sm font-semibold text-bark">
                      Which puppy are you interested in?
                      <input
                        type="text"
                        name="interested_puppy"
                        defaultValue={puppyParam ?? ''}
                        className="mt-1.5 w-full rounded-xl border border-ink/15 bg-white px-4 py-3 font-normal text-ink placeholder:text-ink/35 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
                      />
                    </label>
                  )}
                  {journey === "I'm interested in a current litter" && (
                    <Field
                      label="Which litter are you interested in?"
                      name="interested_litter"
                      type="text"
                    />
                  )}
                  {journey === "I'm interested in a planned or upcoming litter" && (
                    <Field
                      label="Which planned or upcoming litter are you interested in?"
                      name="interested_planned_litter"
                      type="text"
                    />
                  )}
                  <RadioGroup
                    legend="When are you hoping to welcome a puppy?"
                    name="timing"
                    options={[
                      'As soon as the right puppy is available',
                      'Within the next 3 months',
                      'Within 3 to 6 months',
                      'Within 6 to 12 months',
                      'More than 12 months from now',
                      "I'm flexible",
                      "I'm not sure yet",
                    ]}
                  />
                  <RadioGroup
                    legend="Do you have a preferred sex?"
                    name="preferred_sex"
                    options={['Male', 'Female', 'No preference']}
                  />
                  <div>
                    <RadioGroup
                      legend="Do you have a preferred expected adult size?"
                      name="preferred_size"
                      options={['Teacup', 'Toy', 'Mini', 'No preference']}
                    />
                    <p className="mt-2 text-sm font-normal text-bark/70">
                      Expected adult size is an estimate rather than a guarantee.
                    </p>
                  </div>
                  <RadioGroup
                    legend="Do you have a preferred coat type?"
                    name="preferred_coat"
                    options={['Wool', 'Fleece', 'Shaggy', 'No preference', "I'm not sure"]}
                  />
                  <TextArea
                    label="Do you have preferred colours or markings?"
                    name="preferred_colours"
                  />
                  <CheckboxField label="No preference" name="preferred_colours_no_preference" />
                  <TextArea
                    label="Which of these preferences are particularly important to you, and which are simply preferences?"
                    name="preference_importance"
                  />
                </FormSection>

                <FormSection title="What Matters to You?">
                  <TextArea
                    label="What are you hoping for in your future dog's personality and temperament?"
                    name="hoped_temperament"
                    required
                  />
                  <div>
                    <TextArea
                      label="Is there anything you particularly hope to do with your dog?"
                      name="hoped_activities"
                    />
                    <p className="mt-2 text-sm font-normal text-bark/70">
                      For example, family companionship, walking, travelling, an active
                      lifestyle, training activities or simply sharing everyday family life.
                    </p>
                  </div>
                  <TextArea
                    label="Is there anything about your household or lifestyle that you think we should consider when helping you find the right puppy?"
                    name="household_considerations"
                  />
                </FormSection>

                <FormSection title="Why The Doghouse QLD?">
                  <TextArea
                    label="What has led you to consider a Doghouse Cavoodle?"
                    name="why_doghouse"
                  />
                </FormSection>

                <FormSection title="Anything Else?">
                  <TextArea
                    label="Is there anything else you would like us to know or any questions you would like to ask?"
                    name="anything_else"
                  />
                </FormSection>

                <FormSection title="Before You Submit">
                  <p className="text-sm leading-relaxed text-bark">
                    I understand that submitting a Doghouse Puppy Application does not guarantee
                    that I will be offered a puppy. I understand that The Doghouse QLD considers
                    the individual puppy, the family and the suitability of the match when placing
                    puppies.
                  </p>
                  <CheckboxField
                    label="I have read and understand the above."
                    name="acknowledgement"
                    required
                  />
                </FormSection>
              </FormShell>
            </div>
          </div>
        </div>
        <PawDivider />
      </section>
    </main>
  );
}
