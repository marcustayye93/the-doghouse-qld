import { useEffect, useState, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../config';

/** Sets document title + meta description (client-side; SSR uses route meta). */
/** Prefix a public-dir path with the configured base URL so the site also works under a subpath. */
export function asset(path: string): string {
  const base = import.meta.env.BASE_URL || '/';
  return base + path.replace(/^\//, '');
}

export function usePageMeta(title: string, description?: string) {
  useEffect(() => {
    document.title = `${title} | ${siteConfig.name}`;
    if (description) {
      let tag = document.querySelector('meta[name="description"]');
      if (tag) tag.setAttribute('content', description);
    }
  }, [title, description]);
}

/** Approved progressive disclosure: "Read more..." / "Read less". */
export function ReadMore({
  summary,
  children,
  id,
}: {
  summary: ReactNode;
  children: ReactNode;
  id: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div>{summary}</div>
      <div
        id={id}
        className={`grid transition-all duration-500 ease-in-out ${
          open ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">{children}</div>
      </div>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={id}
        className="mt-3 inline-flex items-center gap-1 font-semibold text-branddark underline decoration-brand/40 underline-offset-4 hover:decoration-brand"
      >
        {open ? 'Read less' : 'Read more...'}
      </button>
    </div>
  );
}

/** Square image with slightly rounded corners (approved image treatment). */
export function SquareImage({
  src,
  alt,
  className = '',
  eager = false,
}: {
  src: string;
  alt: string;
  className?: string;
  eager?: boolean;
}) {
  return (
    <img
      src={src}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      className={`aspect-square w-full rounded-2xl object-cover ${className}`}
    />
  );
}

/** Standard page opening: eyebrow, title, intro copy, square image beside on desktop. */
export function PageHero({
  title,
  intro,
  image,
  imageAlt,
  eyebrow,
}: {
  title: string;
  intro: ReactNode;
  image: string;
  imageAlt: string;
  eyebrow?: string;
}) {
  return (
    <section className="mx-auto max-w-6xl px-5 pt-10 pb-8 md:pt-14 md:pb-12">
      <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
        <div>
          {eyebrow && (
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-branddark">
              {eyebrow}
            </p>
          )}
          <h1 className="font-display text-5xl  leading-tight text-brand md:text-6xl">
            {title}
          </h1>
          <div className="prose-dog mt-5">{intro}</div>
        </div>
        <SquareImage src={image} alt={imageAlt} eager className="shadow-lg" />
      </div>
    </section>
  );
}

/** Primary call-to-action button. */
export function CTAButton({
  to,
  children,
  className = '',
}: {
  to: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      to={to}
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-cta px-8 py-3.5 text-base font-bold uppercase tracking-wide text-white shadow-md transition hover:bg-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 ${className}`}
    >
      {children}
      <span aria-hidden="true">›</span>
    </Link>
  );
}

/** Simple decorative paw divider. */
export function PawDivider() {
  return (
    <div className="flex items-center justify-center gap-3 py-2" aria-hidden="true">
      <span className="h-px w-16 bg-gold/60" />
      <svg width="26" height="26" viewBox="0 0 24 24" fill="#17A296" opacity="0.7">
        <circle cx="7" cy="9" r="2.2" />
        <circle cx="12" cy="6.4" r="2.2" />
        <circle cx="17" cy="9" r="2.2" />
        <path d="M12 10.5c-3.2 0-5.8 2.5-5.8 5.2 0 1.7 1.2 2.8 2.9 2.8 1.2 0 2-.6 2.9-.6s1.7.6 2.9.6c1.7 0 2.9-1.1 2.9-2.8 0-2.7-2.6-5.2-5.8-5.2z" />
      </svg>
      <span className="h-px w-16 bg-gold/60" />
    </div>
  );
}
