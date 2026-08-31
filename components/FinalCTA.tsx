import { whatsappGeneralUrl } from "@/lib/whatsapp";
import { Container, Arrow, WhatsAppIcon } from "@/components/ui";
import Reveal from "@/components/Reveal";
import Parallax from "@/components/Parallax";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-espresso py-28 lg:py-40">
      <div className="absolute inset-0">
        <Parallax
          src="/images/bridal-rose.jpg"
          alt=""
          className="h-full w-full opacity-30"
          imgClassName="object-cover brightness-75"
          strength={44}
          speed={0.18}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/70 to-espresso/60" />
      <Container>
        <div className="relative mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="eyebrow mb-6 text-gold-light">Let&rsquo;s plan your look</p>
            <h2 className="font-serif text-4xl leading-[1.1] tracking-tight text-ivory sm:text-5xl lg:text-6xl">
              Your celebration deserves a look that feels{" "}
              <span className="italic text-gold-light">like you.</span>
            </h2>
            <p className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-ivory/75">
              Discover Indian couture, personalized styling and wedding looks at
              Neemzari Couture, Brampton.
            </p>
          </Reveal>
          <Reveal delay={140}>
            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href="/#consult" className="btn-gold group !px-10 !py-5 w-full sm:w-auto">
                Book a Consultation
                <Arrow className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href={whatsappGeneralUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost-light group w-full !py-5 sm:w-auto"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Enquire via WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
