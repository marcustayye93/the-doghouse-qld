import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { asset, PageHero, usePageMeta } from '../../components/ui';
import { Field, FormShell, SelectField, TextArea } from '../../components/forms';
import { siteConfig } from '../../config';

const ilink =
  'font-semibold text-branddark underline decoration-brand/40 underline-offset-4 hover:decoration-brand';

// ZZZA CONTACT US FORM.docx - exact dropdown options.
const enquiryOptions = [
  'Puppy enquiry',
  'Current or upcoming litter',
  'Guardian Home',
  'Existing Doghouse family',
  'Doghouse Deli',
  'Training',
  'General Cavoodle question',
  'Something else',
];

// ZZZA CONTACT US FORM.docx - exact error messages.
const contactErrorMessages: Record<string, string> = {
  name: 'Please enter your name.',
  email: 'Please enter a valid email address.',
  enquiry_type: 'Please choose what we can help you with.',
  message: 'Please enter your message.',
};

/** Card-style internal link, used for the puppy-enquiry and resource link lists. */
function LinkCard({ to, title, blurb }: { to: string; title: string; blurb: string }) {
  return (
    <Link
      to={to}
      className="block rounded-2xl border border-brand/15 bg-white p-5 shadow-sm transition hover:border-brand/40 hover:shadow"
    >
      <h3 className="!mt-0 text-lg font-bold text-deep">{title}</h3>
      <p className="mt-1 text-sm leading-relaxed text-ink/70">{blurb}</p>
    </Link>
  );
}

/** Confirmed active accounts only - never invent social URLs. */
function SocialIcons() {
  const iconClass =
    'flex h-11 w-11 items-center justify-center rounded-full bg-brand/10 text-branddark transition hover:bg-brand hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand';
  return (
    <div className="mt-4 flex gap-3">
      <a
        href={siteConfig.socials.facebook}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="The Doghouse QLD on Facebook"
        className={iconClass}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.9.3-1.5 1.6-1.5h1.3V4.9c-.6-.1-1.4-.2-2.2-.2-2.2 0-3.7 1.3-3.7 3.8V11H8v3h2.5v7h3z" />
        </svg>
      </a>
      <a
        href={siteConfig.socials.instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="The Doghouse QLD on Instagram"
        className={iconClass}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          <rect x="4" y="4" width="16" height="16" rx="4.5" />
          <circle cx="12" cy="12" r="3.6" />
          <circle cx="17" cy="7" r="1.3" fill="currentColor" stroke="none" />
        </svg>
      </a>
    </div>
  );
}

function PostFormSection({ children }: { children: ReactNode }) {
  return <div className="prose-dog mt-12">{children}</div>;
}

export default function ContactUs() {
  usePageMeta(
    'Contact Us',
    'Get in touch with The Doghouse QLD about puppy enquiries, guardian homes, Doghouse Deli, training or general Cavoodle questions.'
  );
  return (
    <main>
      <PageHero
        title="Contact Us"
        eyebrow="Resources"
        image={asset("/images/photos/family-with-dogs.jpg")}
        imageAlt="Family with their dogs"
        intro={
          <>
            <h2>We&apos;d love to hear from you</h2>
            <p>
              Whether you&apos;re considering welcoming a Doghouse puppy into your family, have a
              question about our breeding program, would like to know more about a Guardian
              opportunity or simply can&apos;t find the information you&apos;re looking for,
              you&apos;re welcome to get in touch.
            </p>
            <p>The Doghouse QLD is located in Caboolture, Queensland, north of Brisbane.</p>
            <p>
              As a working breeding home rather than a retail premises, we aren&apos;t open for
              drop-in visits. Visits are arranged by appointment where appropriate as part of our
              puppy or Guardian Home process.
            </p>
            <p>
              Before sending an enquiry, you may find that your question has already been answered
              in our{' '}
              <Link to="/resources/faq" className={ilink}>
                Frequently Asked Questions
              </Link>
              .
            </p>
            <p>
              Otherwise, send us a message below and we&apos;ll get back to you as soon as we can.
            </p>
          </>
        }
      />

      <section id="contact-form" className="mx-auto max-w-2xl scroll-mt-28 px-5 pb-16">
        <div className="rounded-2xl border border-brand/15 bg-white p-6 shadow-sm md:p-8">
          <h2 className="!mt-0 font-display text-4xl font-bold text-deep">Send Us a Message</h2>
          <p className="mt-3 leading-relaxed text-ink/80">
            Have a question or would like to get in touch? Send us a message below and we&apos;ll
            get back to you as soon as we can.
          </p>
          <div className="mt-6">
            <FormShell
              formName="contact-us"
              submitLabel="Send Message"
              successHeading="Thank you!"
              successMessage="Your message has been sent successfully. We'll be in touch as soon as we can."
              errorMessages={contactErrorMessages}
            >
              <Field label="Your name" name="name" required placeholder="Your name" autoComplete="name" />
              <Field
                label="Email address"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                autoComplete="email"
              />
              <Field
                label="Phone number"
                name="phone"
                type="tel"
                placeholder="Optional"
                autoComplete="tel"
              />
              <SelectField
                label="What can we help you with?"
                name="enquiry_type"
                required
                options={enquiryOptions}
              />
              <TextArea
                label="Your message"
                name="message"
                required
                rows={6}
                placeholder="Tell us a little about how we can help."
              />
              <p className="text-sm leading-relaxed text-ink/70">
                We respect your privacy. Information submitted through this form will be handled in
                accordance with our{' '}
                <Link to="/privacy-policy" className={ilink}>
                  Privacy Policy
                </Link>
                .
              </p>
            </FormShell>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 pb-20">
        <PostFormSection>
          <h2>Puppy enquiries</h2>
          <p>
            If you&apos;re contacting us because you&apos;re interested in welcoming a Doghouse
            puppy into your family, we&apos;d love you to explore our puppy information before
            getting in touch.
          </p>
          <p>
            Our website explains how we raise our puppies, our application process, current
            availability, upcoming litters, pricing and how our Master Waitlist works.
          </p>
          <h3>Looking for a puppy?</h3>
        </PostFormSection>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <LinkCard
            to="/puppies/available-puppies"
            title="View Available Puppies"
            blurb="See puppies currently available to suitable families."
          />
          <LinkCard
            to="/puppies/planned-litters"
            title="Planned & Upcoming Litters"
            blurb="See what we're hoping to welcome in the months ahead."
          />
          <LinkCard
            to="/puppies/process-applying"
            title="Puppy Process & Applying"
            blurb="Learn how our application and puppy process works."
          />
          <LinkCard
            to="/puppies/master-waitlist"
            title="Master Waitlist"
            blurb="Join our free Master Waitlist to hear about future litters and puppy availability."
          />
        </div>

        <PostFormSection>
          <h2>Existing Doghouse families</h2>
          <p>Already part of our Doghouse family?</p>
          <p>Please don&apos;t feel that you need to use the website to find every answer.</p>
          <p>
            If one of our puppies already shares your home and you have a question or something
            isn&apos;t going quite as expected, you&apos;re always welcome to contact us.
          </p>
          <p>
            Sometimes it&apos;s a quick question about feeding, toilet training, grooming or
            behaviour.
          </p>
          <p>Sometimes you simply want a little reassurance.</p>
          <p>
            And sometimes you just want to send us a photograph and show us what one of our babies
            has grown into.
          </p>
          <p>We love those messages too.</p>
          <p>
            Where something requires veterinary diagnosis or treatment, we&apos;ll always encourage
            you to contact your veterinarian, but we&apos;re very happy to continue being part of
            the support network around the puppies we&apos;ve raised.
          </p>
        </PostFormSection>

        <PostFormSection>
          <h2>Guardian Home enquiries</h2>
          <p>Interested in becoming a Guardian family for one of our breeding dogs?</p>
          <p>
            Our Guardian Homes page explains how the program works, what&apos;s involved and the
            responsibilities that come with becoming a Guardian family.
          </p>
          <p>
            Because Guardian dogs need to remain reasonably close to The Doghouse QLD, location is
            particularly important.
          </p>
          <p>Please read our Guardian Home information before contacting us.</p>
          <p>
            <Link to="/about-us/guardian-homes" className={ilink}>
              Learn About Guardian Homes
            </Link>
          </p>
        </PostFormSection>

        <PostFormSection>
          <h2>Doghouse Deli enquiries</h2>
          <p>Have a question about Doghouse Deli?</p>
          <p>
            Our Doghouse Deli page contains information about our treat collection and monthly
            assorted treat box.
          </p>
          <p>
            For questions that aren&apos;t answered there, choose Doghouse Deli on the contact form
            and send us a message.
          </p>
          <p>
            <Link to="/doghouse-deli" className={ilink}>
              Visit Doghouse Deli
            </Link>
          </p>
        </PostFormSection>

        <PostFormSection>
          <h2>Training enquiries</h2>
          <p>We&apos;re currently developing our Cavoodle-specific training program.</p>
          <p>Current information and future updates will be published in our Training section.</p>
          <p>
            <Link to="/training" className={ilink}>
              Explore Training
            </Link>
          </p>
        </PostFormSection>

        <PostFormSection>
          <h2>Looking for advice?</h2>
          <p>
            Before sending your question, you may find exactly what you&apos;re looking for in our
            growing Resource library.
          </p>
        </PostFormSection>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <LinkCard
            to="/resources/puppy-resources"
            title="Puppy Resources"
            blurb="Practical help for those important first weeks and months with your puppy."
          />
          <LinkCard
            to="/resources/cavoodle-care"
            title="Cavoodle Care"
            blurb="Everyday care and information for living with your Cavoodle throughout their life."
          />
          <LinkCard
            to="/resources/grooming"
            title="Grooming"
            blurb="Detailed guidance about Cavoodle coats, brushing, grooming, nails, teeth, ears and ongoing maintenance."
          />
          <LinkCard
            to="/resources/blog"
            title="Blog"
            blurb="Articles, videos, practical advice and life at The Doghouse."
          />
          <LinkCard
            to="/resources/faq"
            title="Frequently Asked Questions"
            blurb="Quick answers to many of the questions we're asked most often."
          />
        </div>

        <PostFormSection>
          <h2>Follow The Doghouse QLD</h2>
          <p>Want to keep up with what&apos;s happening at The Doghouse?</p>
          <p>
            Our social media is where you&apos;ll see plenty of the everyday moments that
            don&apos;t necessarily need an entire website page.
          </p>
          <p>
            Follow along for litter announcements, puppy updates, available puppy information,
            videos, Doghouse life, educational content and, inevitably, plenty of Cavoodle
            personalities.
          </p>
        </PostFormSection>
        <SocialIcons />

        <PostFormSection>
          <h2>A little note before visiting</h2>
          <p>The Doghouse QLD is our home as well as the place where we raise our puppies.</p>
          <p>
            For the safety and wellbeing of our dogs, puppies and family, we don&apos;t offer
            unscheduled visits or general puppy viewing.
          </p>
          <p>
            Visits are arranged with prospective families at the appropriate stage of our puppy or
            Guardian Home process.
          </p>
          <p>Thank you for understanding and respecting our home.</p>
        </PostFormSection>

        <PostFormSection>
          <h2>We look forward to hearing from you</h2>
          <p>Choosing the right breeder, the right puppy and the right family fit matters.</p>
          <p>
            If you&apos;ve spent some time exploring our website and still have a question, please
            get in touch.
          </p>
          <p>We&apos;ll be happy to help where we can.</p>
          <p>
            <a
              href="#contact-form"
              className="inline-flex items-center justify-center rounded-xl bg-brand px-8 py-3.5 text-base font-bold uppercase tracking-wide text-white shadow-md transition hover:bg-branddark focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
            >
              Send us a message
            </a>
          </p>
        </PostFormSection>
      </section>
    </main>
  );
}
