import Link from "next/link";
import { whatsappLookUrl } from "@/lib/whatsapp";
import { Arrow, WhatsAppIcon } from "@/components/ui";
import type { Garment } from "@/lib/data";

/**
 * Digital Couture Catalogue card — editorial, not marketplace style.
 * CTA is "View Look" (detail page) + "Enquire" (WhatsApp), never Add to Cart.
 */
export default function ProductCard({ garment }: { garment: Garment }) {
  return (
    <article className="group flex flex-col transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5">
      <Link
        href={`/looks/${garment.slug}`}
        className="relative block aspect-[3/4] overflow-hidden bg-espresso"
        aria-label={`View ${garment.name}`}
      >
        <img
          src={garment.image}
          alt={garment.name}
          className="img-zoom h-full w-full object-cover"
          loading="lazy"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-[2] translate-x-[-120%] bg-gradient-to-r from-transparent via-white/8 to-transparent transition-transform duration-[1000ms] ease-out group-hover:translate-x-[120%]"
        />
        {/* availability tag */}
        {garment.note && (
          <span className="absolute left-4 top-4 bg-ivory/90 px-3 py-1.5 text-[0.58rem] font-semibold tracking-[0.2em] uppercase text-burgundy backdrop-blur-sm">
            {garment.note}
          </span>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <span className="absolute inset-x-4 bottom-4 flex translate-y-2 items-center justify-center gap-2 bg-ivory/95 py-3 text-[0.62rem] font-semibold tracking-[0.2em] uppercase text-burgundy opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          View Look
          <Arrow className="h-3.5 w-3.5" />
        </span>
      </Link>

      <div className="flex flex-1 flex-col pt-5">
        <p className="text-[0.6rem] tracking-[0.26em] uppercase text-gold">
          {garment.category}
        </p>
        <h3 className="mt-1.5 font-serif text-xl text-espresso group-hover:text-burgundy">
          {garment.name}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-espresso/60">
          {garment.description}
        </p>

        <div className="mt-5 flex items-center gap-3 border-t border-espresso/10 pt-4">
          <Link
            href={`/looks/${garment.slug}`}
            className="btn-outline !px-5 !py-2.5 !text-[0.62rem] flex-1"
          >
            View Look
          </Link>
          <a
            href={whatsappLookUrl(garment.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-emerald/40 text-emerald transition-colors hover:bg-emerald hover:text-ivory"
            aria-label={`Enquire about ${garment.name} on WhatsApp`}
          >
            <WhatsAppIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </article>
  );
}
