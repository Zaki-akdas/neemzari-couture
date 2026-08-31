import Link from "next/link";
import { categories } from "@/lib/data";
import { Container, Arrow } from "@/components/ui";
import Reveal from "@/components/Reveal";

export default function CategoryGrid() {
  return (
    <section className="bg-ivory-deep py-24 lg:py-32">
      <Container>
        <div className="mb-14 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <Reveal>
            <p className="eyebrow mb-4">The Neemzari Collection</p>
            <h2 className="font-serif text-4xl leading-tight text-burgundy sm:text-5xl">
              Couture for every <span className="italic text-gold">moment.</span>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <Link
              href="/collections"
              className="btn-outline group hidden sm:inline-flex"
            >
              View All
              <Arrow className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c, i) => (
            <Reveal key={c.id} variant="scale" delay={i * 90}>
              <Link
                href={c.href}
                className="group relative block aspect-[3/4] overflow-hidden bg-espresso transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2"
              >
                <img
                  src={c.image}
                  alt={c.title}
                  className="img-zoom h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/90 via-espresso/15 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-[0.6rem] tracking-[0.28em] uppercase text-gold-light">
                    {c.eyebrow}
                  </p>
                  <h3 className="mt-2 font-serif text-2xl text-ivory">{c.title}</h3>
                  <ul className="mt-3 space-y-0.5 text-xs text-ivory/70">
                    {c.items.slice(0, 3).map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                  <span className="mt-4 inline-flex items-center gap-2 text-[0.62rem] font-semibold tracking-[0.2em] uppercase text-ivory">
                    {c.cta}
                    <Arrow className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
