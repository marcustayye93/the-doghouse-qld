/**
 * Square placeholder reserving space for a future Doghouse-supplied photograph.
 * Clearly replaceable without rebuilding the page. Never renders a dog's name.
 */
export function PhotoPlaceholder({
  label = 'Photograph to be supplied by The Doghouse QLD',
  small = false,
}: {
  label?: string;
  small?: boolean;
}) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`flex aspect-square w-full flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-brand/40 bg-brand/5 text-center ${
        small ? 'p-3' : 'p-6'
      }`}
    >
      <svg
        width={small ? 30 : 44}
        height={small ? 30 : 44}
        viewBox="0 0 24 24"
        fill="#17A296"
        opacity="0.55"
        aria-hidden="true"
      >
        <circle cx="7" cy="9" r="2.2" />
        <circle cx="12" cy="6.4" r="2.2" />
        <circle cx="17" cy="9" r="2.2" />
        <path d="M12 10.5c-3.2 0-5.8 2.5-5.8 5.2 0 1.7 1.2 2.8 2.9 2.8 1.2 0 2-.6 2.9-.6s1.7.6 2.9.6c1.7 0 2.9-1.1 2.9-2.8 0-2.7-2.6-5.2-5.8-5.2z" />
      </svg>
      <p
        className={`${
          small ? 'text-[11px]' : 'text-sm'
        } font-semibold leading-snug text-branddark`}
      >
        {label}
      </p>
    </div>
  );
}
