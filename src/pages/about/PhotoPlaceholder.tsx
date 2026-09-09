/** Tasteful square placeholder used where a photograph is still to be supplied. */
export function PhotoPlaceholder() {
  return (
    <div
      className="flex aspect-square w-full items-center justify-center rounded-2xl border-2 border-dashed border-ink/20 bg-mist p-8 text-center shadow-sm"
      role="img"
      aria-label="Photograph to be supplied"
    >
      <p className="text-sm leading-relaxed text-ink/60">
        Details to be supplied by The Doghouse QLD.
      </p>
    </div>
  );
}
