import { catalogue } from "@/lib/data";
import { Container } from "@/components/ui";
import ProductCard from "@/components/ProductCard";
import Reveal from "@/components/Reveal";

/**
 * Digital Couture Catalogue — a refined, editorial showcase. Not a marketplace
 * grid: garments are presented as looks to be viewed and enquired about.
 */
export default function CollectionGrid() {
  return (
    <section className="bg-ivory py-24 lg:py-32">
      <Container>
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <Reveal>
            <p className="eyebrow mb-4">The Digital Couture Catalogue</p>
            <h2 className="font-serif text-4xl leading-tight text-burgundy sm:text-5xl">
              Explore the <span className="italic text-gold">looks.</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-espresso/65">
              Browse bridal, sherwani and occasion looks. Each piece is
              available for consultation &ndash; colours, details and styling
              are discussed with a stylist.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {catalogue.map((g, i) => (
            <Reveal key={g.slug} delay={(i % 3) * 80}>
              <ProductCard garment={g} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
