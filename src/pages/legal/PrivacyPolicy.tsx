import { Link } from 'react-router-dom';
import { usePageMeta } from '../../components/ui';

const ilink =
  'font-semibold text-branddark underline decoration-brand/40 underline-offset-4 hover:decoration-brand';

export default function PrivacyPolicy() {
  usePageMeta(
    'Privacy Policy',
    'Read The Doghouse QLD Privacy Policy and learn how personal information provided through our website, enquiries, applications and services is handled.'
  );
  return (
    <main>
      <section className="mx-auto max-w-3xl px-5 pt-10 pb-16 md:pt-14">
        <div className="prose-dog">
          <h1>Privacy Policy</h1>
          <p>
            <strong>Last updated: September 2026</strong>
          </p>
          <p>
            At The Doghouse QLD, we respect the privacy of the people who contact us, apply for
            one of our puppies, join our Master Waitlist, enquire about our Guardian Home Program,
            purchase from us, use our website or otherwise communicate with us.
          </p>
          <p>
            This Privacy Policy explains the types of personal information we may collect, why we
            collect it, how we may use and protect it, and the choices available to you regarding
            your information.
          </p>
          <p>The Doghouse QLD is based in Caboolture, Queensland, Australia.</p>

          <h2>Information We May Collect</h2>
          <p>Depending on how you interact with The Doghouse QLD, we may collect information including:</p>
          <ul>
            <li>Your name</li>
            <li>Email address</li>
            <li>Telephone number</li>
            <li>Suburb, state or general location</li>
            <li>Information you provide through our contact forms</li>
            <li>Puppy applications and puppy enquiries</li>
            <li>Information supplied when joining our Master Waitlist</li>
            <li>Information relating to Guardian Home enquiries or applications</li>
            <li>
              Information you provide when communicating with us by email, telephone, social media
              or other communication methods
            </li>
            <li>Information relating to a puppy or dog you have purchased from The Doghouse QLD</li>
            <li>Information required to provide ongoing breeder support</li>
            <li>
              Order, delivery and transaction information where you purchase products or services
              from us
            </li>
            <li>Information you voluntarily provide when corresponding with us</li>
            <li>
              Technical information relating to your use of our website, where collected through
              website hosting, analytics, security or similar technologies
            </li>
          </ul>
          <p>
            We aim to collect only information that is reasonably relevant to our interactions with
            you and the operation of The Doghouse QLD.
          </p>

          <h2>How We Collect Information</h2>
          <p>We may collect personal information when you:</p>
          <ul>
            <li>Complete a form on our website</li>
            <li>Apply for or enquire about a puppy</li>
            <li>Join our Master Waitlist or another mailing list</li>
            <li>Enquire about our Guardian Home Program</li>
            <li>Contact us directly</li>
            <li>Communicate with us through social media</li>
            <li>Purchase a product or service</li>
            <li>Become a Doghouse puppy family</li>
            <li>Request information or support</li>
            <li>Subscribe to communications where this option is offered</li>
            <li>Otherwise voluntarily provide information to us</li>
          </ul>
          <p>
            Some technical information may also be collected automatically when you use our website
            through the services and technologies used to operate, secure and understand the
            performance of the website.
          </p>

          <h2>Why We Collect and Use Personal Information</h2>
          <p>We may use personal information to:</p>
          <ul>
            <li>Respond to enquiries</li>
            <li>Process puppy applications</li>
            <li>Communicate with prospective puppy families</li>
            <li>Manage our Master Waitlist</li>
            <li>Communicate information about puppies, litters and availability</li>
            <li>Assess Guardian Home enquiries</li>
            <li>Communicate with existing Doghouse families</li>
            <li>Provide breeder support</li>
            <li>Manage orders, subscriptions, payments and deliveries where applicable</li>
            <li>
              Provide information about Doghouse Deli, Training or other Doghouse services where
              appropriate
            </li>
            <li>Maintain business and customer records</li>
            <li>Improve our website, services and communications</li>
            <li>Protect the security and proper operation of our website</li>
            <li>
              Meet legal, regulatory, veterinary, animal registration or other legitimate business
              requirements where applicable
            </li>
          </ul>
          <p>
            We do not collect personal information simply for the purpose of accumulating or
            selling personal data.
          </p>

          <h2>Email Updates and Marketing Communications</h2>
          <p>
            Where you choose to join a mailing list, Master Waitlist, notification list or otherwise
            consent to receive relevant communications, The Doghouse QLD may use your contact
            information to send you those communications.
          </p>
          <p>
            Where required, marketing communications must provide a clear and functional way to
            unsubscribe.
          </p>
          <p>
            A person who unsubscribes from marketing communications may still receive necessary
            individual communications relating to an existing enquiry, puppy, order, transaction,
            agreement or other service they have requested.
          </p>
          <p>
            Do not automatically treat submission of the general Contact Us form as consent to
            receive ongoing marketing.
          </p>
          <p>
            Where the website offers a separate marketing or email subscription option, make the
            consent wording clear and do not use a pre-selected consent checkbox.
          </p>

          <h2>Master Waitlist</h2>
          <p>
            Information provided when joining The Doghouse QLD Master Waitlist may be used to manage
            the waitlist and communicate relevant information about puppies, litters, availability
            and the puppy process.
          </p>
          <p>Joining the Master Waitlist does not mean that a puppy is guaranteed or reserved.</p>
          <p>
            Information collected through the Master Waitlist should only be used in accordance with
            the purpose explained to the person when they provide it and this Privacy Policy.
          </p>

          <h2>Puppy Applications and Enquiries</h2>
          <p>
            When a person applies for or enquires about a puppy, we may collect information about
            their household, lifestyle, preferences and circumstances where this information assists
            us in understanding whether a Doghouse puppy may be suitable for their family and, where
            appropriate, assisting with puppy matching.
          </p>
          <p>
            Information supplied in an application does not guarantee approval, allocation or
            availability of a puppy.
          </p>

          <h2>Guardian Home Enquiries</h2>
          <p>
            People enquiring about the Guardian Home Program may be asked to provide information
            relevant to assessing whether their home, location, lifestyle and circumstances may be
            suitable for a Doghouse guardian dog.
          </p>
          <p>
            This information is used for the purpose of assessing and communicating about the
            Guardian Home opportunity and, where a placement proceeds, administering the Guardian
            Home relationship.
          </p>

          <h2>Doghouse Deli and Other Purchases</h2>
          <p>
            Where purchasing functionality is available, information may be collected to process and
            manage orders, payments, subscriptions, deliveries, customer service and related
            communications.
          </p>
          <p>
            Payment information should be processed using the website&apos;s approved secure payment
            provider.
          </p>
          <p>
            The Doghouse QLD website should not unnecessarily store full payment card details.
          </p>
          <p>
            When ecommerce functionality is activated, update this Privacy Policy if necessary to
            accurately identify how payment, ecommerce, delivery and subscription providers handle
            personal information.
          </p>

          <h2>Sharing Personal Information</h2>
          <p>The Doghouse QLD does not sell or rent personal information.</p>
          <p>
            We may share information with trusted service providers where reasonably necessary to
            operate our website or provide a requested product or service.
          </p>
          <p>
            Depending on the services used by the website and business, these may include providers
            involved in:
          </p>
          <ul>
            <li>Website hosting</li>
            <li>Website forms</li>
            <li>Email delivery</li>
            <li>Mailing list management</li>
            <li>Data storage</li>
            <li>Website analytics</li>
            <li>Security</li>
            <li>Payment processing</li>
            <li>Ecommerce</li>
            <li>Delivery or shipping</li>
            <li>Business administration</li>
            <li>Professional services</li>
          </ul>
          <p>
            We may also disclose information where required or authorised by law or where reasonably
            necessary to protect our legal rights, safety, customers, dogs or business.
          </p>
          <p>
            Service providers should only receive information reasonably necessary for the service
            they provide.
          </p>

          <h2>Overseas Service Providers</h2>
          <p>
            Some technology providers used to operate websites, email systems, cloud storage,
            analytics, payment services or other online services may process or store information
            outside Australia.
          </p>
          <p>
            Before publishing the final website, review the actual third-party services connected to
            the site.
          </p>
          <p>
            If personal information is likely to be disclosed to overseas recipients and applicable
            privacy requirements require countries to be identified where practicable, update this
            section to accurately reflect those arrangements.
          </p>
          <p>
            Do not invent countries or technology providers before the final website integrations
            are known.
          </p>

          <h2>Cookies and Website Technologies</h2>
          <p>
            The website may use cookies and similar technologies that help the website function,
            remember preferences, understand how visitors use the website, improve performance and
            maintain security.
          </p>
          <p>
            Where analytics, advertising or other optional tracking technologies are added, ensure
            the website&apos;s cookie practices and any required consent mechanisms accurately
            reflect the technologies actually in use.
          </p>
          <p>
            Do not state that the website uses a particular analytics or advertising platform unless
            it has actually been installed.
          </p>

          <h2>Third-Party Websites and Social Media</h2>
          <p>
            Our website may contain links to external websites, social media platforms or
            third-party services.
          </p>
          <p>
            When you leave The Doghouse QLD website and use another website or service, that
            provider&apos;s own privacy practices and terms may apply.
          </p>
          <p>
            The Doghouse QLD is not responsible for the privacy practices of independent third-party
            websites or services.
          </p>

          <h2>How We Protect Personal Information</h2>
          <p>
            We take reasonable steps appropriate to our business to protect personal information from
            misuse, interference, loss, unauthorised access, modification or disclosure.
          </p>
          <p>
            The website should use appropriate technical and security measures for the information it
            handles.
          </p>
          <p>
            No internet-based system can guarantee absolute security, so visitors should also take
            reasonable care when sending information electronically.
          </p>

          <h2>How Long We Keep Information</h2>
          <p>
            We may retain personal information for as long as reasonably necessary for the purpose
            for which it was collected, for ongoing relationships with Doghouse families, for
            legitimate business record keeping, or where retention is required or appropriate for
            legal, contractual, accounting or other business purposes.
          </p>
          <p>
            Information that is no longer reasonably required should be securely deleted, destroyed
            or de-identified where appropriate and subject to applicable record-keeping obligations.
          </p>

          <h2>Accessing or Correcting Your Information</h2>
          <p>
            You may contact The Doghouse QLD if you would like to request access to personal
            information we hold about you or ask us to correct information that is inaccurate or out
            of date.
          </p>
          <p>
            There may be circumstances where we cannot provide access to particular information.
            Where applicable, we will handle requests in accordance with relevant legal
            requirements.
          </p>

          <h2>Privacy Questions or Concerns</h2>
          <p>
            If you have a question, concern or complaint about how The Doghouse QLD has handled
            your personal information, please contact us through our{' '}
            <Link to="/resources/contact-us" className={ilink}>
              Contact Us
            </Link>{' '}
            page.
          </p>
          <p>We will consider privacy enquiries or concerns and respond appropriately.</p>
          <p>
            Where applicable, individuals may also have rights to make a complaint to the relevant
            Australian privacy regulator.
          </p>

          <h2>Changes to This Privacy Policy</h2>
          <p>
            The Doghouse QLD may update this Privacy Policy from time to time to reflect changes to
            our website, business practices, technology, services or applicable requirements.
          </p>
          <p>
            The current version will be published on this page and the <strong>Last updated</strong>{' '}
            date should be changed whenever the policy is materially updated.
          </p>
        </div>
      </section>
    </main>
  );
}
