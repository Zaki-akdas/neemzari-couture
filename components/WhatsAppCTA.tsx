import { whatsappGeneralUrl } from "@/lib/whatsapp";
import { Container, WhatsAppIcon } from "@/components/ui";
import Reveal from "@/components/Reveal";

export default function WhatsAppCTA() {
  return (
    <section className="bg-emerald py-20 text-ivory lg:py-24">
      <Container>
        <Reveal>
          <div className="flex flex-col items-center gap-8 text-center lg:flex-row lg:justify-between lg:text-left">
            <div className="max-w-xl">
              <p className="eyebrow mb-4 text-gold-light">Enquire on WhatsApp</p>
              <h2 className="font-serif text-3xl leading-tight sm:text-4xl">
                Message us about a look, a styling session, or your wedding plans.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ivory/70">
                Quick questions, availability and consultations &mdash; start the
                conversation on WhatsApp.
              </p>
            </div>
            <a
              href={whatsappGeneralUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold group !px-6 sm:!px-10 !py-5 max-w-full"
            >
              <WhatsAppIcon className="h-5 w-5 shrink-0" />
              Enquire via WhatsApp
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
