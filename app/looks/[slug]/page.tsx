import Link from "next/link";
import { notFound } from "next/navigation";
import { catalogue, type Garment } from "@/lib/data";
import { SITE } from "@/lib/site";
import { whatsappLookUrl } from "@/lib/whatsapp";
import { Container, Arrow, WhatsAppIcon, PhoneIcon } from "@/components/ui";
import LookGallery from "@/components/LookGallery";
import Reveal from "@/components/Reveal";

export function generateStaticParams() {
  return catalogue.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const g = catalogue.find((x) => x.slug === slug);
  if (!g) return {};
  return {
    title: g.name,
    description: g.description,
    openGraph: {
      title: `${g.name} | ${SITE.name}`,
      description: g.description,
      images: [g.image],
    },
  };
}

export default async function LookDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const garment: Garment | undefined = catalogue.find((x) => x.slug === slug);
  if (!garment) notFound();

  const images = [
    garment.image,
    garment.detailImage || garment.image,
  ];

  return (
    <>
      <section className="bg-ivory py-14 lg:py-20">
        <Container wide>
          <Reveal>
            <Link
              href="/collections"
              className="inline-flex items-center gap-2 text-[0.68rem] tracking-[0.2em] uppercase text-espresso/55 transition-colors hover:text-burgundy"
            >
              <Arrow className="h-3.5 w-3.5 rotate-180" />
              Back to Collections
            </Link>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Gallery */}
            <Reveal className="lg:col-span-6">
              <LookGallery images={images} label={garment.name} />
            </Reveal>

            {/* Details */}
            <div className="lg:col-span-6">
              <Reveal>
                <p className="eyebrow mb-4">{garment.category} Couture</p>
                <h1 className="font-serif text-4xl leading-tight text-burgundy sm:text-5xl">
                  {garment.name}
                </h1>
                {garment.note && (
                  <span className="mt-5 inline-block border border-gold/40 bg-ivory-light px-3 py-1.5 text-[0.6rem] font-semibold tracking-[0.2em] uppercase text-gold-dark">
                    {garment.note}
                  </span>
                )}
              </Reveal>

              <Reveal delay={100}>
                <p className="mt-7 text-lg leading-relaxed text-espresso/70">
                  {garment.description}
                </p>
              </Reveal>

              <Reveal delay={160}>
                <div className="mt-8 grid grid-cols-1 gap-6 border-t border-espresso/10 pt-8 sm:grid-cols-2">
                  <div>
                    <h2 className="eyebrow mb-3">Colours</h2>
                    {garment.colours && garment.colours.length > 0 ? (
                      <ul className="flex flex-wrap gap-2">
                        {garment.colours.map((c) => (
                          <li
                            key={c}
                            className="rounded-full border border-espresso/15 px-3 py-1.5 text-xs text-espresso/70"
                          >
                            {c}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-sm text-espresso/55">Discuss at consultation.</p>
                    )}
                  </div>
                  <div>
                    <h2 className="eyebrow mb-3">Customization</h2>
                    <p className="text-sm text-espresso/60">
                      {garment.customizable
                        ? "Customizable in colour, fabric, detailing and fit — confirmed during consultation."
                        : "Available as shown. Ask about styling options at consultation."}
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={220}>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                  <a
                    href={whatsappLookUrl(garment.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary group !px-8"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    Enquire About This Look
                  </a>
                  <Link href="/#consult" className="btn-outline group">
                    Consult with a Stylist
                    <Arrow className="transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </Reveal>

              <Reveal delay={280}>
                <div className="mt-10 border-t border-espresso/10 pt-6">
                  <p className="text-sm leading-relaxed text-espresso/55">
                    Availability, colour options and pricing are confirmed during
                    consultation. Every look is prepared around your event and
                    preferences.
                  </p>
                  <a
                    href={`tel:${SITE.phone.tel}`}
                    className="mt-4 inline-flex items-center gap-2 text-sm text-espresso/70 hover:text-burgundy"
                  >
                    <PhoneIcon className="h-4 w-4" />
                    Or call {SITE.phone.display}
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
