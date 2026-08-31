import Link from "next/link";
import { Container } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="bg-ivory py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-6">404</p>
          <h1 className="font-serif text-5xl leading-tight text-burgundy sm:text-6xl">
            This page has slipped off the hanger.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-espresso/60">
            The look you&rsquo;re looking for isn&rsquo;t here. Return to the
            collection or book a consultation.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/" className="btn-primary">Back to Home</Link>
            <Link href="/collections" className="btn-outline">Explore Collections</Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
