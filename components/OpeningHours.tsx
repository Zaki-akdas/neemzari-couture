import { SITE } from "@/lib/site";

export default function OpeningHours({
  dark = false,
  compact = false,
}: {
  dark?: boolean;
  compact?: boolean;
}) {
  const dayCls = dark ? "text-ivory/60" : "text-espresso/60";
  const timeCls = dark ? "text-ivory" : "text-espresso";
  const titleCls = dark ? "text-ivory" : "text-burgundy";

  return (
    <div>
      <h3 className={`eyebrow mb-5 ${dark ? "text-gold-light" : ""}`}>
        Opening Hours
      </h3>
      <ul className="space-y-3">
        {SITE.hours.map((h) => (
          <li
            key={h.days}
            className={`flex items-baseline justify-between gap-4 border-b pb-3 last:border-0 ${dark ? "border-ivory/10" : "border-espresso/10"}`}
          >
            <span className={`text-sm ${dayCls}`}>{h.days}</span>
            <span className={`text-right font-medium ${timeCls}`}>
              {h.time}
            </span>
          </li>
        ))}
      </ul>
      {compact && (
        <p className={`mt-4 text-xs leading-relaxed ${dark ? "text-ivory/50" : "text-espresso/50"}`}>
          {SITE.hoursNote}
        </p>
      )}
    </div>
  );
}
