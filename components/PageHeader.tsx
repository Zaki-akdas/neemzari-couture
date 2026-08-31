import Reveal from "@/components/Reveal";

export default function PageHeader({
  eyebrow,
  title,
  description,
  image = "/images/bridal.jpg",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  image?: string;
}) {
  return (
    <section className="relative flex min-h-[46vh] items-end overflow-hidden bg-espresso">
      <img
        src={image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-45"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/60 to-espresso/30" />
      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-5 pb-14 sm:px-8 lg:px-12">
        <Reveal>
          <p className="eyebrow mb-4 text-gold-light">{eyebrow}</p>
          <h1 className="font-serif text-4xl leading-[1.05] tracking-tight text-ivory sm:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ivory/75">
              {description}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
