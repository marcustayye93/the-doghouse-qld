import { Link } from 'react-router-dom';
import { asset, PageHero, usePageMeta } from '../../components/ui';
import { Field, FormShell, SelectField, TextArea } from '../../components/forms';

const ilink =
  'font-semibold text-branddark underline decoration-brand/40 underline-offset-4 hover:decoration-brand';

const enquiryOptions = [
  'Puppy Enquiry',
  'Waitlist Enquiry',
  'Guardian Home Enquiry',
  'Doghouse Deli Enquiry',
  'Training Enquiry',
  'Puppy Support (For Existing Doghouse Families)',
  'General Enquiry',
  'Other',
];

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
        imageAlt="Family with their Cavoodle dogs"
        intro={
          <>
            <h2>We&apos;d love to hear from you</h2>
            <p>
              Whether you have a question about our puppies, want to learn more about The
              Doghouse QLD, need some guidance with your Cavoodle, or are interested in
              Doghouse Deli, we&apos;d love to hear from you.
            </p>
            <p>We aim to respond to all genuine enquiries as promptly as we can.</p>
          </>
        }
      />
      <section className="mx-auto max-w-2xl px-5 pb-16">
        {/*
          OWNER: Email routing. Per the email/database integration spec, contact form
          submissions should be routed to different recipients based on the enquiry type
          selected. Set up routing rules in the form backend once the receiving email
          addresses are supplied. Do not invent addresses.
        */}
        <div className="rounded-2xl border border-brand/15 bg-white p-6 shadow-sm md:p-8">
          <h2 className="!mt-0">Send Us a Message</h2>
          <div className="mt-6">
            <FormShell
              formName="contact-us"
              submitLabel="Send Message"
              successHeading="Thank You for Getting in Touch!"
              successMessage="We've received your message and will respond as soon as we can."
            >
              <Field label="Your name" name="name" required placeholder="Your name" />
              <Field
                label="Email address"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
              />
              <Field
                label="Phone number"
                name="phone"
                type="tel"
                placeholder="Phone number (optional)"
              />
              <SelectField
                label="What is your enquiry about?"
                name="enquiry_type"
                required
                options={enquiryOptions}
              />
              <TextArea
                label="Your message"
                name="message"
                required
                rows={6}
                placeholder="How can we help?"
              />
              <p className="text-sm leading-relaxed text-ink/70">
                We respect your privacy. Your information will be handled in accordance with
                our{' '}
                <Link to="/privacy-policy" className={ilink}>
                  Privacy Policy
                </Link>
                .
              </p>
            </FormShell>
          </div>
        </div>

        {/*
          OWNER: Optional alternative contact details (email address and/or phone number)
          can be displayed here once supplied by the owner. Do not invent contact details.
        */}
      </section>
    </main>
  );
}
