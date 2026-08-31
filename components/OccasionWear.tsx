import Link from "next/link";
import { Container, Arrow } from "@/components/ui";
import Reveal from "@/components/Reveal";

const chips = ["Sarees", "Lehengas", "Dresses", "Contemporary Indian", "Party Wear"];

export default function OccasionWear() {
  return (
    <section className="bg-ivory-deep py-24 lg:py-32">
      <Container wide>
        <div className="mb-14 grid grid-cols-1 items-end gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <p className="eyebrow mb-4">Occasion Wear</p>
            <h2 className="font-serif text-4xl leading-tight text-burgundy sm:text-5xl">
              Made for the <span className="italic text-gold">invitation.</span>
            </h2>
          </Reveal>
          <Reveal delay={100} className="lg:col-span-5">
            <p className="text-base leading-relaxed text-espresso/70 lg:text-right">
              Sarees, lehengas and dresses for engagement parties, festivals,
              weddings and every occasion worth celebrating.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
          {[
            { src: "/images/occasion.jpg", label: "Emerald Silk Saree", category: "Saree" },
            { src: "/images/dupatta-detail.jpg", label: "Gold Border Detail", category: "Detail" },
            { src: "/images/engagement-look.jpg", label: "Sunlit Lehenga", category: "Lehenga" },
          ].map((item, i) => (
            <Reveal
              key={item.label}
              delay={i * 90}
              variant="scale"
              className={i === 2 ? "col-span-2 row-span-1 lg:col-span-1" : ""}
            >
              <div className="group relative aspect-[3/4] overflow-hidden bg-espresso transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5">
                <img
                  src={item.src}
                  alt={item.label}
                  className="img-zoom h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-[0.6rem] tracking-[0.26em] uppercase text-gold-light">
                    {item.category}
                  </p>
                  <p className="mt-1 font-serif text-lg text-ivory">{item.label}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-12 flex flex-wrap items-center gap-3">
            {chips.map((c) => (
              <span
                key={c}
                className="rounded-full border border-espresso/15 px-4 py-2 text-[0.66rem] tracking-[0.14em] uppercase text-espresso/70"
              >
                {c}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={180}>
          <div className="mt-10">
            <Link href="/occasion-wear" className="btn-primary group">
              Explore Occasion Wear
              <Arrow className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
