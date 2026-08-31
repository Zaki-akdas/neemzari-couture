"use client";

import { useState } from "react";

export default function LookGallery({
  images,
  label,
}: {
  images: string[];
  label: string;
}) {
  const [index, setIndex] = useState(0);
  const main = images[index];

  return (
    <div>
      <div className="relative aspect-[3/4] overflow-hidden bg-espresso frame-gold">
        <img
          src={main}
          alt={`${label} — view ${index + 1}`}
          className="img-zoom h-full w-full object-cover"
        />
        <span className="absolute right-4 top-4 bg-espresso/80 px-3 py-1.5 text-[0.6rem] tracking-[0.2em] uppercase text-ivory backdrop-blur-sm">
          {index + 1} / {images.length}
        </span>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-3">
        {images.map((img, i) => (
          <button
            key={img + i}
            onClick={() => setIndex(i)}
            className={`relative aspect-[3/4] overflow-hidden ${
              i === index ? "ring-2 ring-gold" : "opacity-80 hover:opacity-100"
            }`}
            aria-label={`Show view ${i + 1}`}
          >
            <img src={img} alt="" className="h-full w-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
