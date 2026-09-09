import { Link } from 'react-router-dom';
import { asset, CTAButton, usePageMeta } from '../components/ui';

export default function NotFound() {
  usePageMeta('Page not found', 'Oops... this page has wandered off!');
  return (
    <main className="mx-auto max-w-3xl px-5 py-16 text-center md:py-24">
      <img
        src={asset("/images/photos/pup-sitting-2.jpg")}
        alt="Cavoodle puppy sitting"
        className="mx-auto aspect-square w-48 rounded-2xl object-cover shadow-md md:w-64"
      />
      <h1 className="mt-8 font-display text-5xl font-bold text-deep md:text-6xl">
        Oops... this page has wandered off!
      </h1>
      <p className="mx-auto mt-4 max-w-md leading-relaxed text-ink/80">
        The page you are looking for does not exist or has moved. Let us help you find
        your way back.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <CTAButton to="/">Back to Home</CTAButton>
        <Link
          to="/resources/contact-us"
          className="inline-flex items-center justify-center rounded-xl border-2 border-brand px-8 py-3.5 text-base font-bold uppercase tracking-wide text-branddark transition hover:bg-mist"
        >
          Contact Us
        </Link>
      </div>
    </main>
  );
}
