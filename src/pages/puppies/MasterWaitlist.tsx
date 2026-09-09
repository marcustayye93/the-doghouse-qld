import type { ReactNode } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { usePageMeta, PageHero, ReadMore, CTAButton, PawDivider } from '../../components/ui';
import { FormShell, Field, CheckboxField, RadioGroup } from '../../components/forms';

/** CTAButton styling for links that include a hash anchor (native navigation). */
function AnchorCTA({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-8 py-3.5 text-base font-bold uppercase tracking-wide text-white shadow-md transition hover:bg-branddark focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
    >
      {children}
      <span aria-hidden="true">›</span>
    </a>
  );
}

/** In-page anchor button matching CTAButton styling (native smooth scroll). */
function ScrollCTA({ to, children }: { to: string; children: ReactNode }) {
  return (
    <a
      href={to}
      className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-8 py-3.5 text-base font-bold uppercase tracking-wide text-white shadow-md transition hover:bg-branddark focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
    >
      {children}
      <span aria-hidden="true">›</span>
    </a>
  );
}

/** Optional multi-select checkboxes, matching the shared form styling. */
function MultiCheckbox({
  legend,
  name,
  options,
}: {
  legend: string;
  name: string;
  options: string[];
}) {
  return (
    <fieldset className="text-sm font-semibold text-ink">
      <legend>{legend}</legend>
      <div className="mt-2 grid gap-2">
        {options.map((o) => (
          <label key={o} className="flex cursor-pointer items-center gap-3 font-normal">
            <input type="checkbox" name={name} value={o} className="h-5 w-5 accent-[#17A296]" />
            {o}
          </label>
        ))}
      </div>
    </fieldset>
  );
}

const GENERAL_INTEREST = "I'm interested in the litter generally / I'd like to discuss which puppy may suit me";

export default function MasterWaitlist() {
  usePageMeta(
    'Master Waitlist',
    'Join the free Doghouse QLD Master Waitlist to hear about future litters and puppy availability.'
  );
  const [searchParams] = useSearchParams();
  const puppyParam = searchParams.get('puppy');
  const interestOptions = puppyParam ? [puppyParam, GENERAL_INTEREST] : [GENERAL_INTEREST];

  return (
    <main>
      <PageHero
        title="Master Waitlist"
        eyebrow="Puppies"
        image="/images/photos/pup-grass.jpg"
        imageAlt="Cavoodle puppy sitting in grass"
        intro={
          <>
            <p>
              Not quite ready for a puppy today, or simply waiting for the right Doghouse litter
              to come along?
            </p>
            <p>
              Our free Master Waitlist is the easiest way to stay connected with The Doghouse QLD
              and hear when we have a new litter or puppies available. There is no fee to join, no
              deposit required and no obligation to purchase a puppy.
            </p>
            <p>
              When we have puppies available, we&apos;ll let our Master Waitlist families know by
              email. You can then visit our Available Puppies page, have a look at the puppies and
              their current information, and decide whether you&apos;d like to send us an
              Expression of Interest.
            </p>
            <p>
              Joining the Master Waitlist doesn&apos;t reserve a puppy or guarantee that a puppy
              will be available to you. It simply makes sure you&apos;re in the loop.
            </p>
            <p className="pt-2">
              <ScrollCTA to="#join-the-master-waitlist">Join the Master Waitlist</ScrollCTA>
            </p>
          </>
        }
      />
      <section className="mx-auto max-w-4xl px-5 pb-16">
        <div className="prose-dog">
          <ReadMore id="waitlist-more" summary={<></>}>
            <h2>How the Master Waitlist Works</h2>
            <p>Joining is simple.</p>
            <p>
              Add your details to our Master Waitlist and we&apos;ll let you know by email when we
              have a new litter or puppies available.
            </p>
            <p>
              You don&apos;t need to tell us now whether you&apos;re looking for a boy or girl, a
              particular size, coat or colour. When puppies become available, you can visit our
              Available Puppies page and see the information about them at that time.
            </p>
            <p>
              If a litter or puppy catches your eye, you can send us a simple Expression of
              Interest.
            </p>
            <p>
              If it isn&apos;t the right litter or the timing isn&apos;t right, you don&apos;t
              need to do anything at all. Simply remain on the Master Waitlist and wait to hear
              from us again.
            </p>

            <h2>No Deposits. No Numbered Positions.</h2>
            <p>Our Master Waitlist isn&apos;t a traditional numbered puppy waiting list.</p>
            <p>There is no fee to join.</p>
            <p>There is no deposit required.</p>
            <p>
              There isn&apos;t a first, second or twentieth position that automatically determines
              who receives a puppy.
            </p>
            <p>And joining the Master Waitlist doesn&apos;t commit you to the next puppy that becomes available.</p>
            <p>
              We believe finding the right home for a puppy involves much more than simply working
              down a list of names.
            </p>
            <p>When something catches your eye, that&apos;s when the conversation begins.</p>

            <h2>When We Have Puppies Available</h2>
            <p>
              When we have a litter or puppies available, we&apos;ll send an email to our Master
              Waitlist families letting you know there&apos;s something new to see.
            </p>
            <p>
              From there, you can visit our Available Puppies page where you&apos;ll find the
              current information about the puppies looking for their families.
            </p>
            <p>
              Depending on the puppy and the information available at the time, you may be able to
              see photographs, sex, colour and markings, expected adult size, coat information,
              price and a little about the puppy themselves.
            </p>
            <p>You can take your time, have a look and decide whether you&apos;d like to know more.</p>
            <p>
              <CTAButton to="/puppies/available-puppies">View Available Puppies</CTAButton>
            </p>
          </ReadMore>

          <div
            id="join-the-master-waitlist"
            className="mt-10 scroll-mt-28 rounded-2xl border border-ink/10 bg-white p-6 shadow-sm md:p-8"
          >
            <h2 className="!mt-0">Join the Master Waitlist</h2>
            <p>Joining is free and only takes a moment.</p>
            <p>
              We don&apos;t need to know exactly what kind of puppy you&apos;re hoping for at this
              stage. We&apos;ll simply let you know when we have new puppies available, and you can
              decide for yourself whether you&apos;d like to take a closer look.
            </p>
            <div className="mt-6">
              <FormShell
                formName="master-waitlist"
                submitLabel="Join the Master Waitlist"
                successHeading="You're on the Master Waitlist!"
                successMessage="Thank you for joining The Doghouse QLD Master Waitlist. We'll keep you informed about relevant future litters and puppy availability. Please remember that joining the Master Waitlist does not reserve a puppy or guarantee availability."
              >
                <Field label="Your name" name="name" type="text" required placeholder="Your name" autoComplete="name" />
                <Field
                  label="Email address"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  autoComplete="email"
                />
                <Field
                  label="Suburb & State"
                  name="suburb_state"
                  type="text"
                  placeholder="For example, Caboolture, QLD"
                  autoComplete="address-level2"
                />
                <MultiCheckbox
                  legend="What size are you most interested in?"
                  name="size_preference"
                  options={['Toy (4 to 8 kg)', 'Mini (8 to 12 kg)', "I'm flexible"]}
                />
                <RadioGroup
                  legend="Do you have a preference for male or female?"
                  name="sex_preference"
                  options={['Male', 'Female', 'No preference']}
                />
                <CheckboxField
                  label="I would like to join The Doghouse QLD Master Waitlist and receive relevant puppy, litter and availability updates by email."
                  name="waitlist_consent"
                  required
                />
              </FormShell>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-ink/70">
              We respect your privacy. Your information will be handled in accordance with our{' '}
              <Link
                to="/privacy-policy"
                className="font-semibold text-branddark underline decoration-brand/40 underline-offset-4 hover:decoration-brand"
              >
                Privacy Policy
              </Link>
              , and you can unsubscribe from Master Waitlist emails at any time.
            </p>
          </div>

          <h2>Interested in One of Our Puppies?</h2>
          <p>
            If you&apos;ve seen a puppy you love, or you&apos;re interested in the litter generally
            but aren&apos;t sure which puppy may suit you, you can send us a simple Expression of
            Interest.
          </p>
          <p>An Expression of Interest doesn&apos;t reserve or allocate a puppy.</p>
          <p>
            It simply lets us know that you&apos;ve seen something you&apos;re interested in and
            would like to continue the conversation.
          </p>
          <p>
            From there, we can get in touch, answer any questions and, if appropriate, discuss the
            next step in our puppy process.
          </p>

          <div className="rounded-2xl border border-ink/10 bg-white p-6 shadow-sm md:p-8">
            <h2 className="!mt-0">Expression of Interest</h2>
            <div className="mt-6">
              <FormShell
                formName="expression-of-interest"
                submitLabel="Send Expression of Interest"
                successHeading="Thank You"
                successMessage="Thank you for your interest in our Doghouse puppies. We've received your Expression of Interest and will be in touch so we can continue the conversation. Please remember that submitting an Expression of Interest does not reserve or allocate a puppy."
              >
                <h3 className="text-base font-bold text-deep">Your Details</h3>
                <Field label="Full Name" name="full_name" type="text" required autoComplete="name" />
                <Field label="Email Address" name="email" type="email" required autoComplete="email" />
                <Field label="Mobile Number" name="mobile" type="tel" required autoComplete="tel" />
                {/* OWNER: Populate the interest options from puppies marked Available once puppy records are supplied. */}
                <label className="block text-sm font-semibold text-ink">
                  Which puppy are you interested in?
                  <select
                    name="puppy_interest"
                    defaultValue={puppyParam ?? GENERAL_INTEREST}
                    className="mt-1.5 w-full rounded-xl border border-ink/15 bg-white px-4 py-3 font-normal text-ink focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
                  >
                    {interestOptions.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                </label>
                {puppyParam && (
                  <p role="status" className="text-sm font-semibold text-branddark">
                    You&apos;re enquiring about {puppyParam}.
                  </p>
                )}
                <label className="block text-sm font-semibold text-ink">
                  Is there anything you&apos;d like to ask or tell us?
                  <textarea
                    name="message"
                    rows={4}
                    className="mt-1.5 w-full rounded-xl border border-ink/15 bg-white px-4 py-3 font-normal text-ink placeholder:text-ink/35 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
                  />
                </label>
              </FormShell>
            </div>
          </div>

          <h2>Ready to Take the Next Step?</h2>
          <p>
            If, after speaking with us, you would like to be formally considered for a Doghouse
            puppy, the next step is our Doghouse Puppy Application.
          </p>
          <p>
            This gives us the opportunity to learn more about your family, home and lifestyle and
            helps us begin considering whether one of our puppies may be the right fit.
          </p>
          <p>
            <AnchorCTA href="/puppies/process-applying#doghouse-application">
              Learn About Our Puppy Process &amp; Apply
            </AnchorCTA>
          </p>

          <h2>No Longer Looking for a Puppy?</h2>
          <p>We understand that circumstances change.</p>
          <p>
            Every Master Waitlist email will include an Unsubscribe link at the bottom. Simply
            select that link and you&apos;ll be removed from our active Master Waitlist and will
            no longer receive litter and puppy availability emails from us.
          </p>
          <p>If you ever change your mind, you&apos;re always welcome to join again.</p>
        </div>
        <PawDivider />
      </section>
    </main>
  );
}
