import { Link } from 'react-router-dom';
import { asset, CTAButton, usePageMeta } from '../components/ui';

const helpfulLinks = [
  { label: 'Available Puppies', path: '/puppies/available-puppies' },
  { label: 'Planned & Upcoming Litters', path: '/puppies/planned-litters' },
  { label: 'Puppy Process & Applying', path: '/puppies/process-applying' },
  { label: 'Master Waitlist', path: '/puppies/master-waitlist' },
  { label: 'About Cavoodles', path: '/cavoodles/about' },
  { label: 'Frequently Asked Questions', path: '/resources/faq' },
  { label: 'Contact Us', path: '/resources/contact-us' },
];

export default function NotFound() {
  usePageMeta('Page not found', 'Oops... this page has wandered off!');
  return (
    <main className="mx-auto max-w-6xl px-5 py-12 md:py-20">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div className="text-center md:text-left">
          <h1 className="font-display text-5xl  text-brand md:text-6xl">
            Oops... this page has wandered off!
          </h1>
          <p className="mx-auto mt-5 max-w-md font-serif leading-relaxed text-bark md:mx-0">
            It looks like the page you&apos;re looking for isn&apos;t here. Don&apos;t worry,
            we&apos;ll help you find your way back. You can return to our homepage or use one
            of the links below to continue exploring The Doghouse QLD.
          </p>
          <div className="mt-8">
            <CTAButton to="/">Return to Home</CTAButton>
          </div>
          <h2 className="mt-10 font-display text-3xl  text-brand">
            Looking for something?
          </h2>
          <ul className="mt-4 grid gap-2.5">
            {helpfulLinks.map((l) => (
              <li key={l.path}>
                <Link
                  to={l.path}
                  className="text-branddark underline underline-offset-4 transition hover:text-deep"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <img
            src={asset('/images/photos/pup-sitting-2.jpg')}
            alt="Cavoodle puppy sitting"
            className="aspect-square w-full rounded-2xl object-cover shadow-md"
          />
        </div>
      </div>
    </main>
  );
}
