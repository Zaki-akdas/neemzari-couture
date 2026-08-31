"use client";

import { useState } from "react";
import { faqs } from "@/lib/data";
import { Container } from "@/components/ui";
import Reveal from "@/components/Reveal";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-ivory py-24 lg:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="eyebrow mb-5">Common Questions</p>
            <h2 className="font-serif text-4xl leading-tight text-burgundy sm:text-5xl">
              Answers, before you <span className="italic text-gold">ask.</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-espresso/60">
              Have a question about a look, sizing, styling or visiting us? We&rsquo;re
              happy to help.
            </p>
          </Reveal>

          <div className="lg:col-span-8">
            <div className="divide-y divide-espresso/10 border-y border-espresso/10">
              {faqs.map((f, i) => {
                const isOpen = open === i;
                return (
                  <Reveal key={i} delay={i * 40}>
                    <div>
                      <button
                        onClick={() => setOpen(isOpen ? null : i)}
                        aria-expanded={isOpen}
                        className="flex w-full items-center justify-between gap-4 py-6 text-left"
                      >
                        <span className="font-serif text-xl text-espresso">
                          {f.q}
                        </span>
                        <span
                          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-espresso/20 text-espresso transition-transform duration-300 ${
                            isOpen ? "rotate-45 border-gold text-gold" : ""
                          }`}
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                            <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                          </svg>
                        </span>
                      </button>
                      <div
                        className={`grid transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="max-w-2xl pb-6 text-sm leading-relaxed text-espresso/65">
                            {f.a}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
