import { Paw, SectionHeading, FACEBOOK_REVIEWS_URL } from './shared'

export default function Reviews() {
  return (
    <section id="reviews" className="py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHeading eyebrow="Reviews" title="Loved by their families">
          100% of puppy buyers recommend The Doghouse QLD.
        </SectionHeading>

        <figure className="rounded-3xl border border-ink/10 bg-white/70 p-8 shadow-sm sm:p-10">
          <Paw className="mb-4 h-8 w-8 text-brand" />
          <blockquote className="font-display text-3xl font-bold leading-snug text-ink sm:text-4xl">
            “If you're considering purchasing a cavoodle, Charmaine is the breeder for you. We
            have just welcomed our precious toy cavoodle, Hazel (formerly Ruby), and we
            couldn't be happier. Charmaine's dedication to all of her dogs is so clear to see.”
          </blockquote>
          <figcaption className="mt-6 text-sm font-semibold text-pine">
            Genna M. <span className="font-normal">· verified RightPaw buyer</span>
          </figcaption>
        </figure>

        <div className="mt-8 text-center">
          <a
            href={FACEBOOK_REVIEWS_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-block rounded-full border-2 border-ink/15 px-8 py-3 font-semibold text-ink transition hover:border-brand/50 hover:text-branddark"
          >
            Read more reviews on Facebook
          </a>
        </div>
      </div>
    </section>
  )
}
