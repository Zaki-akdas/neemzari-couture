const words = [
  "Bridal",
  "Wedding",
  "Bespoke",
  "Sherwani",
  "Occasion",
  "Couture",
  "Personalized Styling",
  "Jaipur Gore Plaza",
];

/**
 * Editorial brand ticker. Content is duplicated for a seamless infinite loop.
 * The CSS animation is disabled by prefers-reduced-motion (see globals.css).
 */
export default function Marquee() {
  const row = [...words, ...words];
  return (
    <div
      className="relative overflow-hidden bg-burgundy py-5"
      role="region"
      aria-label="Neemzari Couture specialities"
    >
      <div className="marquee-track flex items-center gap-8 whitespace-nowrap pr-8">
        {row.map((w, i) => (
          <span key={i} className="marquee-item flex items-center gap-8">
            <span className="font-serif text-2xl italic tracking-wide text-ivory/90">
              {w}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
          </span>
        ))}
      </div>
    </div>
  );
}
