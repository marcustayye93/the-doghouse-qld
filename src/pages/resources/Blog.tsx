import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { asset, PageHero, usePageMeta } from '../../components/ui';
import { siteConfig } from '../../config';

const ilink =
  'font-semibold text-branddark underline decoration-brand/40 underline-offset-4 hover:decoration-brand';

type BlogPost = {
  slug: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  image?: string;
  imageAlt?: string;
};

/* OWNER: Publish a new article by adding an entry here (newest first).
   Title, category, publication date, feature image or video thumbnail, short
   excerpt, and the article itself. Do not invent demonstration article titles. */
const posts: BlogPost[] = [];

const categories: { name: string; description: string[] }[] = [
  {
    name: 'Puppies',
    description: [
      'Everything from preparing for a new puppy and those first days at home to socialisation, confidence building, puppy development and the funny realities of puppyhood.',
    ],
  },
  {
    name: 'Cavoodle Care',
    description: [
      'Practical information about living with and caring for a Cavoodle throughout their life.',
    ],
  },
  {
    name: 'Training',
    description: [
      'Helpful training ideas, everyday manners, confidence, independence and understanding the little dog at the other end of the lead.',
      'This category can complement our dedicated Training section without replacing it.',
    ],
  },
  {
    name: 'Grooming',
    description: [
      'Brushing, coat care, grooming preparation, teeth, nails and practical advice for keeping your Cavoodle comfortable between professional grooms.',
    ],
  },
  {
    name: 'Health & Wellbeing',
    description: [
      'General educational information about responsible dog care, preventative health and things we believe Cavoodle families should understand.',
      "Where veterinary advice is required, we'll always encourage families to speak with their veterinarian.",
    ],
  },
  {
    name: 'Food & Treats',
    description: [
      "Feeding, treats, enrichment and some of the things we've learnt from living with a rather substantial Cavoodle tasting panel.",
    ],
  },
  {
    name: 'Life at The Doghouse',
    description: [
      'A little window into what happens behind the scenes.',
      'Puppy development, everyday activities, our dogs, our breeding program and some of the moments that make life at The Doghouse what it is.',
    ],
  },
  {
    name: 'Videos',
    description: [
      "Sometimes it's much easier to show something than explain it.",
      'Our video collection brings together useful demonstrations, puppy moments, educational content and videos shared by The Doghouse QLD.',
    ],
  },
];

const exploreLinks = [
  { label: 'Puppy Resources', to: '/resources/puppy-resources' },
  { label: 'Cavoodle Care', to: '/resources/cavoodle-care' },
  { label: 'Grooming', to: '/resources/grooming' },
  { label: 'Training', to: '/training' },
  { label: 'Frequently Asked Questions', to: '/resources/faq' },
];

function SocialIcons() {
  const iconClass =
    'flex h-11 w-11 items-center justify-center rounded-full bg-brand/10 text-branddark transition hover:bg-brand hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand';
  return (
    <div className="flex gap-3">
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

export default function Blog() {
  usePageMeta(
    'Cavoodle Blog & Puppy Advice | The Doghouse QLD',
    "Practical Cavoodle advice, puppy information, training and grooming tips, videos and behind-the-scenes moments from The Doghouse QLD."
  );
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts.filter((p) => {
      const matchesCategory = !activeCategory || p.category === activeCategory;
      const matchesQuery =
        !q ||
        `${p.title} ${p.excerpt} ${p.category}`.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [query, activeCategory]);

  return (
    <main>
      <PageHero
        title="Blog"
        eyebrow="Resources"
        image={asset("/images/photos/enrichment-ball-pit.jpg")}
        imageAlt="Cavoodle puppy playing in a ball pit"
        intro={
          <>
            <h2>From The Doghouse</h2>
            <p>There&apos;s always something happening at The Doghouse.</p>
            <p>
              Puppies are learning, dogs are keeping us entertained, families are asking great
              questions and we&apos;re continually learning ourselves.
            </p>
            <p>Our blog is where we can share a little more of that with you.</p>
            <p>
              You&apos;ll find practical Cavoodle advice, puppy information, training and grooming
              tips, videos, behind-the-scenes moments from The Doghouse and answers to some of the
              questions we&apos;re regularly asked by our puppy families.
            </p>
            <p>
              Some posts will be educational. Some will be practical. Some might simply give you a
              glimpse into everyday life at The Doghouse QLD.
            </p>
            <p>
              It&apos;s a growing collection, so there will always be something new to come back and
              explore.
            </p>
          </>
        }
      />

      <section className="mx-auto max-w-6xl px-5 pb-16">
        <div className="prose-dog max-w-4xl">
          <h2>Explore the Blog</h2>
        </div>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat) => {
            const active = activeCategory === cat.name;
            return (
              <button
                key={cat.name}
                type="button"
                onClick={() => setActiveCategory(active ? null : cat.name)}
                aria-pressed={active}
                className={`rounded-2xl border p-6 text-left shadow-sm transition focus:outline-none focus-visible:ring-2 focus-visible:ring-brand ${
                  active
                    ? 'border-brand bg-brand/10'
                    : 'border-brand/15 bg-white hover:border-brand/40'
                }`}
              >
                <h3 className="font-display text-2xl font-bold text-deep">{cat.name}</h3>
                {cat.description.map((d, i) => (
                  <p key={i} className="mt-2 text-sm leading-relaxed text-ink/75">
                    {d}
                  </p>
                ))}
              </button>
            );
          })}
        </div>

        <div className="prose-dog mt-14 max-w-4xl">
          <h2>Latest from The Doghouse</h2>
        </div>
        <div className="mt-4 max-w-xl">
          <label htmlFor="blog-search" className="mb-2 block text-sm font-semibold text-ink">
            Search the Blog
          </label>
          <input
            id="blog-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles and videos"
            className="w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-ink placeholder:text-ink/35 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
          />
        </div>
        {(query.trim() || activeCategory) && (
          <button
            type="button"
            onClick={() => {
              setQuery('');
              setActiveCategory(null);
            }}
            className="mt-3 text-sm font-semibold text-branddark underline underline-offset-4"
          >
            Clear search and filters
          </button>
        )}
        <div className="mt-6">
          {filtered.length === 0 ? (
            <div className="rounded-2xl border border-brand/10 bg-white p-8 text-center shadow-sm">
              <h3 className="font-display text-2xl font-bold text-deep">
                Our first articles are on the way.
              </h3>
              <p className="mx-auto mt-2 max-w-xl text-ink/70">
                We&apos;re preparing our first articles and videos now and will publish them here,
                newest first, as they are ready. Check back soon.
              </p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((post) => (
                <article
                  key={post.slug}
                  className="overflow-hidden rounded-2xl border border-brand/15 bg-white shadow-sm"
                >
                  {post.image && (
                    <img
                      src={post.image}
                      alt={post.imageAlt ?? ''}
                      className="aspect-video w-full object-cover"
                    />
                  )}
                  <div className="p-6">
                    <p className="text-xs font-bold uppercase tracking-wider text-branddark">
                      {post.category} &middot; {post.date}
                    </p>
                    <h3 className="mt-2 font-display text-2xl font-bold text-deep">
                      {post.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink/75">{post.excerpt}</p>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>

        <div className="prose-dog mt-14 max-w-4xl">
          <h2>Follow life at The Doghouse</h2>
          <p>
            The Blog is where we keep our longer resources and useful information, but plenty
            happens between articles too.
          </p>
          <p>
            Follow The Doghouse QLD on social media for puppy updates, litter announcements,
            videos, everyday Doghouse moments and the occasional bit of Cavoodle mischief.
          </p>
          <SocialIcons />

          <h2>Looking for something in particular?</h2>
          <p>
            Use the Blog search to explore topics including puppies, Cavoodle care, grooming,
            training, health, treats and life at The Doghouse.
          </p>
          <p>For more detailed permanent information, you can also explore:</p>
          <ul>
            {exploreLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className={ilink}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
