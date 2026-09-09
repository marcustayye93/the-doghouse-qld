export const RIGHTPAW_URL =
  'https://rightpaw.com.au/l/the-doghouse-qld-theodore-cavoodles/296a0927-5317-4f69-a9ef-de2a28b688d4'
export const FACEBOOK_URL = 'https://www.facebook.com/profile.php?id=100067893231417'
export const FACEBOOK_REVIEWS_URL =
  'https://www.facebook.com/profile.php?id=100067893231417&sk=reviews'

export function Paw({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="currentColor" aria-hidden="true">
      <ellipse cx="50" cy="66" rx="20" ry="16" />
      <ellipse cx="26" cy="44" rx="10" ry="13" transform="rotate(-18 26 44)" />
      <ellipse cx="44" cy="30" rx="10" ry="13" />
      <ellipse cx="62" cy="30" rx="10" ry="13" />
      <ellipse cx="78" cy="46" rx="10" ry="13" transform="rotate(18 78 46)" />
    </svg>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string
  title: string
  children?: React.ReactNode
}) {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center">
      <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-branddark">{eyebrow}</p>
      <h2 className="font-display text-5xl font-bold text-ink sm:text-6xl">{title}</h2>
      {children && <p className="mt-4 text-pine">{children}</p>}
    </div>
  )
}
