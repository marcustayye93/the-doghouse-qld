import { useState, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { usePageMeta } from '../../components/ui';
import {
  CheckboxField,
  Field,
  FormShell,
  RadioGroup,
  SelectField,
  TextArea,
} from '../../components/forms';

function SectionHeading({ children }: { children: ReactNode }) {
  return <h2 className="text-xl font-bold text-deep">{children}</h2>;
}

function HelperText({ children }: { children: ReactNode }) {
  return <p className="-mt-2 text-sm leading-relaxed text-ink/60">{children}</p>;
}

/** Radio group with change callback, for the conditional pets question. */
function ChoiceGroup({
  legend,
  name,
  options,
  required = false,
  value,
  onChange,
}: {
  legend: string;
  name: string;
  options: string[];
  required?: boolean;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <fieldset className="text-sm font-semibold text-ink">
      <legend>
        {legend} {required && <span className="text-branddark" aria-hidden="true">*</span>}
      </legend>
      <div className="mt-2 grid gap-2">
        {options.map((o) => (
          <label key={o} className="flex cursor-pointer items-center gap-3 font-normal">
            <input
              type="radio"
              name={name}
              value={o}
              required={required}
              checked={value === o}
              onChange={() => onChange(o)}
              className="h-5 w-5 accent-[#17A296]"
            />
            {o}
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export default function GuardianApplication() {
  usePageMeta(
    'Guardian Home Application',
    'Apply to become a Guardian Home with The Doghouse QLD, or join our Guardian Opportunities list for future placements.'
  );

  const [hasOtherPets, setHasOtherPets] = useState('');
  const [opportunityOptIn, setOpportunityOptIn] = useState(false);

  const successMessage =
    "We've received your Guardian Home Application and appreciate your interest in becoming part of The Doghouse QLD Guardian Home Program. We'll review your information and be in touch if we feel an opportunity may be suitable." +
    (opportunityOptIn
      ? " You're also subscribed to receive notifications about future Guardian Home opportunities."
      : '');

  return (
    <main>
      <section className="mx-auto max-w-3xl px-5 pt-10 pb-6 md:pt-14">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-branddark">
          About Us
        </p>
        <h1 className="font-display text-5xl font-bold leading-tight text-deep md:text-6xl">
          Guardian Home Application
        </h1>
        <div className="prose-dog mt-5">
          <p>Thank you for your interest in becoming a Guardian Home with The Doghouse QLD.</p>
          <p>
            Our Guardian Home Program allows selected dogs to live permanently with their own
            loving family while remaining an important part of our breeding program for a period
            of time.
          </p>
          <p>
            We&apos;d love to learn a little about you, your home and your lifestyle. We&apos;ve
            kept this application simple so we can get to know the basics first. If we feel a
            Guardian Home opportunity may suit your family, we can then have a more detailed
            conversation about how the program works.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 pb-14 md:pb-20">
        <FormShell
          formName="guardian-home-application"
          submitLabel="Submit Guardian Home Application"
          successHeading="Thank you!"
          successMessage={successMessage}
        >
          <div className="grid gap-4 rounded-2xl border border-brand/10 bg-white p-6 shadow-sm md:p-8">
            <SectionHeading>Your Details</SectionHeading>
            <Field label="Your name" name="full_name" type="text" required autoComplete="name" />
            <Field label="Email address" name="email" type="email" required autoComplete="email" />
            <Field label="Phone number" name="phone" type="tel" required autoComplete="tel" />
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Suburb" name="suburb" type="text" required autoComplete="address-level2" />
              <Field label="Postcode" name="postcode" type="text" required autoComplete="postal-code" />
            </div>
            <HelperText>
              This information is particularly important because Guardian Home suitability depends
              partly on distance from The Doghouse QLD in Caboolture.
            </HelperText>
          </div>

          <div className="grid gap-4 rounded-2xl border border-brand/10 bg-white p-6 shadow-sm md:p-8">
            <SectionHeading>Your Household</SectionHeading>
            <div className="grid gap-2">
              <Field
                label="Who would the guardian dog be living with?"
                name="household"
                type="text"
                required
              />
              <HelperText>
                A short answer is perfect. For example, adults, children and their ages.
              </HelperText>
            </div>
            <ChoiceGroup
              legend="Do you currently have any other dogs or pets?"
              name="has_other_pets"
              options={['Yes', 'No']}
              required
              value={hasOtherPets}
              onChange={setHasOtherPets}
            />
            {hasOtherPets === 'Yes' && (
              <div className="grid gap-2">
                <Field
                  label="Please tell us briefly about your other pets."
                  name="other_pets"
                  type="text"
                  required
                />
                <HelperText>
                  Please include whether any dogs are male or female and whether they are
                  desexed.
                </HelperText>
              </div>
            )}
          </div>

          <div className="grid gap-4 rounded-2xl border border-brand/10 bg-white p-6 shadow-sm md:p-8">
            <SectionHeading>Your Home</SectionHeading>
            <RadioGroup
              legend="Do you have secure fencing suitable for a dog?"
              name="fencing"
              required
              options={['Yes', 'No', "I'm not sure and would like to discuss this"]}
            />
            <RadioGroup
              legend="Will the guardian dog live primarily inside your home as part of your family?"
              name="indoor_living"
              required
              options={['Yes', 'A combination of indoors and outdoors', "I'd like to discuss this"]}
            />
          </div>

          <div className="grid gap-4 rounded-2xl border border-brand/10 bg-white p-6 shadow-sm md:p-8">
            <SectionHeading>Your Lifestyle</SectionHeading>
            <SelectField
              label="During a typical week, approximately how long would the dog regularly be home without people?"
              name="time_alone"
              required
              options={[
                'Rarely',
                'Less than 2 hours at a time',
                '2 to 4 hours at a time',
                '4 to 6 hours at a time',
                'More than 6 hours at a time',
                'It varies',
              ]}
            />
            <RadioGroup
              legend="Are you generally able to assist with transport to and from The Doghouse QLD in Caboolture when required as part of the Guardian Home Program?"
              name="transport"
              required
              options={['Yes', "Usually, but I'd like to discuss the requirements", "I'm not sure"]}
            />
          </div>

          <div className="grid gap-4 rounded-2xl border border-brand/10 bg-white p-6 shadow-sm md:p-8">
            <SectionHeading>Guardian Opportunity</SectionHeading>
            <fieldset className="text-sm font-semibold text-ink">
              <legend>
                Are you interested in:{' '}
                <span className="text-branddark" aria-hidden="true">
                  *
                </span>
              </legend>
              <div className="mt-2 grid gap-3 font-normal">
                <CheckboxField label="A guardian girl" name="interest_girl" />
                <CheckboxField label="A guardian boy" name="interest_boy" />
                <CheckboxField
                  label="Either, depending on the dog and opportunity"
                  name="interest_either"
                />
              </div>
            </fieldset>
            <HelperText>
              The requirements and travel involved can differ between guardian girls and boys, so
              location and individual circumstances are considered when matching Guardian Homes.
            </HelperText>
          </div>

          <div className="grid gap-4 rounded-2xl border border-brand/10 bg-white p-6 shadow-sm md:p-8">
            <SectionHeading>Tell Us a Little About You</SectionHeading>
            <div className="grid gap-2">
              <TextArea
                label="Why does becoming a Guardian Home appeal to you?"
                name="why_guardian"
                required
                rows={5}
              />
              <HelperText>
                A few sentences are plenty. We&apos;d simply love to understand what appeals to
                you about the program and the kind of home you could offer one of our dogs.
              </HelperText>
            </div>
            <TextArea
              label="Is there anything else you'd like us to know or any questions you'd like to ask?"
              name="anything_else"
              rows={5}
            />
          </div>

          <div className="grid gap-4 rounded-2xl border border-brand/10 bg-white p-6 shadow-sm md:p-8">
            <CheckboxField
              label="I understand that submitting a Guardian Home Application does not guarantee acceptance into the program or allocation of a guardian puppy or dog."
              name="acknowledgement"
              required
            />
            <label className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-ink">
              <input
                type="checkbox"
                name="guardian_opportunities_consent"
                value="yes"
                checked={opportunityOptIn}
                onChange={(e) => setOpportunityOptIn(e.target.checked)}
                className="mt-1 h-5 w-5 shrink-0 accent-[#17A296]"
              />
              <span>
                Yes, I&apos;d also like to receive email notifications when The Doghouse QLD has
                new Guardian Home opportunities available.
              </span>
            </label>
            <p className="text-sm leading-relaxed text-ink/60">
              We respect your privacy. Information submitted through this form will be handled in
              accordance with our{' '}
              <Link to="/privacy-policy" className="font-semibold text-branddark underline">
                Privacy Policy
              </Link>
              . If you choose to receive Guardian Opportunity emails, you can unsubscribe at any
              time.
            </p>
          </div>
        </FormShell>
      </section>
    </main>
  );
}
