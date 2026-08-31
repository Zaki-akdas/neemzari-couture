import { SITE } from "@/lib/site";
import { Container, WhatsAppIcon, PhoneIcon } from "@/components/ui";
import ConsultationForm from "@/components/ConsultationForm";
import Reveal from "@/components/Reveal";

export default function ConsultationSection() {
  return (
    <section id="consult" className="scroll-mt-20 bg-ivory-deep py-24 lg:py-32">
      <Container wide>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left — copy */}
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow mb-6">Book a Consultation</p>
              <h2 className="font-serif text-4xl leading-[1.1] tracking-tight text-burgundy sm:text-5xl">
                Let&rsquo;s design your <span className="italic text-gold">look.</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-espresso/70">
                Share your vision and a stylist will help you shape the perfect
                outfit for your occasion.
              </p>
              <div className="mt-8 border-t border-espresso/10 pt-6">
                <p className="eyebrow mb-3">Prefer to talk now?</p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <a
                    href={`https://wa.me/${SITE.whatsapp.number}?text=${encodeURIComponent(
                      "Hello Neemzari Couture, I'd like to book a styling consultation.",
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline !py-3"
                  >
                    <WhatsAppIcon className="h-4 w-4" /> WhatsApp
                  </a>
                  <a href={`tel:${SITE.phone.tel}`} className="btn-outline !py-3">
                    <PhoneIcon className="h-4 w-4" /> {SITE.phone.display}
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right — form */}
          <Reveal delay={120} className="lg:col-span-7">
            <div className="bg-ivory p-8 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.25)] sm:p-10">
              <p className="eyebrow mb-6">Consultation Request</p>
              <ConsultationForm />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
