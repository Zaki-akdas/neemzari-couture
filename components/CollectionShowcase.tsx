import { catalogue } from "@/lib/data";
import { Container } from "@/components/ui";
import ProductCard from "@/components/ProductCard";
import Reveal from "@/components/Reveal";

export default function CollectionShowcase({
  title = "Explore the looks.",
  filter,
}: {
  title?: string;
  filter?: string;
}) {
  const items = filter
    ? catalogue.filter((g) => g.category === filter)
    : catalogue;

  return (
    <section className="bg-ivory py-24 lg:py-32">
      <Container>
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <Reveal>
            <p className="eyebrow mb-4">Couture Looks</p>
            <h2 className="font-serif text-4xl leading-tight text-burgundy sm:text-5xl">
              {title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-espresso/60">
              Each look is available for consultation &ndash; we&rsquo;ll discuss
              colours, details and styling with you.
            </p>
          </Reveal>
        </div>
        <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((g, i) => (
            <Reveal key={g.slug} delay={(i % 3) * 80}>
              <ProductCard garment={g} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
