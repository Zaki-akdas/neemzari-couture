import { SITE } from "@/lib/site";
import { Container, CTALink, PinIcon, PhoneIcon } from "@/components/ui";
import OpeningHours from "@/components/OpeningHours";
import Reveal from "@/components/Reveal";

export default function LocationSection() {
  return (
    <section className="bg-espresso py-24 text-ivory lg:py-32">
      <Container wide>
        <Reveal>
          <div className="mb-12 max-w-2xl">
            <p className="eyebrow mb-5 text-gold-light">Visit Us</p>
            <h2 className="font-serif text-4xl leading-tight sm:text-5xl">
              Visit Neemzari <span className="italic text-gold-light">Couture.</span>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ivory/70">
              Step into the showroom, feel the fabrics and speak with our team
              about your perfect look.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Map */}
          <Reveal className="lg:col-span-7">
            <div className="relative h-[360px] w-full overflow-hidden border border-ivory/15 lg:h-[440px]">
              <iframe
                title="Map to Neemzari Couture — Jaipur Gore Plaza, 8887 The Gore Rd, Brampton"
                src={SITE.maps.embedUrl}
                className="h-full w-full grayscale-[0.2]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <div className="pointer-events-none absolute left-4 top-4 bg-espresso/90 px-4 py-2 text-[0.62rem] tracking-[0.2em] uppercase text-ivory backdrop-blur-sm">
                Jaipur Gore Plaza
              </div>
            </div>
          </Reveal>

          {/* Info + hours */}
          <Reveal delay={120} className="lg:col-span-5">
            <div className="flex h-full flex-col justify-between gap-8">
              <div>
                <div className="flex items-start gap-3">
                  <PinIcon className="mt-1 h-5 w-5 text-gold" />
                  <div>
                    <p className="font-medium text-ivory">{SITE.address.street}</p>
                    <p className="text-ivory/70">
                      {SITE.address.city}, {SITE.address.state} {SITE.address.postal}
                    </p>
                    <p className="text-ivory/70">{SITE.address.country}</p>
                    <p className="mt-2 text-xs tracking-[0.18em] uppercase text-gold-light">
                      {SITE.address.plaza}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex items-start gap-3">
                  <PhoneIcon className="mt-1 h-5 w-5 text-gold" />
                  <a href={`tel:${SITE.phone.tel}`} className="text-ivory hover:text-gold-light">
                    {SITE.phone.display}
                  </a>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <CTALink href={SITE.maps.directionsUrl} variant="gold" external>
                    Get Directions
                  </CTALink>
                  <CTALink href={`tel:${SITE.phone.tel}`} variant="ghost-light" external>
                    Call the Store
                  </CTALink>
                </div>
              </div>

              <div className="border-t border-ivory/15 pt-6">
                <OpeningHours dark compact />
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
