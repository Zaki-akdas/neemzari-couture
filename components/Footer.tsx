import Link from "next/link";
import { SITE } from "@/lib/site";
import { Container, CTALink, Arrow, WhatsAppIcon } from "@/components/ui";

const nav = [
  { label: "Collections", href: "/collections" },
  { label: "Bridal", href: "/bridal" },
  { label: "Sherwanis", href: "/sherwanis" },
  { label: "Occasion Wear", href: "/occasion-wear" },
  { label: "Custom Couture", href: "/custom-couture" },
  { label: "Lookbook", href: "/lookbook" },
  { label: "About", href: "/about" },
  { label: "Visit", href: "/visit" },
  { label: "Consultation", href: "/#consult" },
];

export default function Footer() {
  return (
    <footer className="bg-espresso text-ivory">
      <Container wide>
        {/* Brand + CTA */}
        <div className="border-b border-ivory/10 py-16">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <p className="font-serif text-4xl font-semibold tracking-[0.16em]">
                NEEMZARI
              </p>
              <p className="mt-2 text-[0.62rem] tracking-[0.4em] uppercase text-gold">
                Couture
              </p>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-ivory/60">
                Indian Couture&nbsp;•&nbsp;Bridal&nbsp;•&nbsp;Wedding&nbsp;•&nbsp;Occasion
              </p>
            </div>
            <CTALink href="/#consult" variant="gold" className="group">
              Book Consultation
              <Arrow className="transition-transform duration-300 group-hover:translate-x-1" />
            </CTALink>
          </div>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div className="lg:col-span-1">
            <h3 className="eyebrow mb-5">Visit</h3>
            <address className="not-italic text-sm leading-relaxed text-ivory/70">
              {SITE.address.street}
              <br />
              {SITE.address.city}, {SITE.address.state} {SITE.address.postal}
              <br />
              {SITE.address.country}
              <br />
              <span className="text-gold-light">{SITE.address.plaza}</span>
            </address>
            <a
              href={`tel:${SITE.phone.tel}`}
              className="mt-4 inline-block text-sm text-ivory/80 hover:text-gold-light"
            >
              {SITE.phone.display}
            </a>
          </div>

          {/* Hours */}
          <div className="lg:col-span-1">
            <h3 className="eyebrow mb-5">Hours</h3>
            <ul className="space-y-2 text-sm text-ivory/70">
              {SITE.hours.map((h) => (
                <li key={h.days} className="flex flex-col">
                  <span className="text-ivory/50">{h.days}</span>
                  <span>{h.time}</span>
                </li>
              ))}
              <li className="pt-2 text-xs text-ivory/40">{SITE.hoursNote}</li>
            </ul>
          </div>

          {/* Links */}
          <div className="lg:col-span-1">
            <h3 className="eyebrow mb-5">Explore</h3>
            <ul className="space-y-2.5">
              {nav.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-ivory/70 transition-colors hover:text-gold-light"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="lg:col-span-1">
            <h3 className="eyebrow mb-5">Start</h3>
            <p className="text-sm leading-relaxed text-ivory/60">
              Personalized styling and custom wedding attire, designed around you.
            </p>
            <a
              href={`https://wa.me/${SITE.whatsapp.number}?text=${encodeURIComponent(
                "Hello Neemzari Couture, I'd like to book a styling consultation.",
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost-light mt-5 !px-5 !py-3 !text-[0.62rem]"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Enquire on WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-ivory/10 py-7 text-center text-xs text-ivory/45 sm:flex-row sm:text-left">
          <p>
            &copy; {new Date().getFullYear()} {SITE.registeredName}. All rights reserved.
          </p>
          <p className="tracking-[0.18em] uppercase">
            Jaipur Gore Plaza&nbsp;•&nbsp;Brampton
          </p>
        </div>
      </Container>
    </footer>
  );
}
