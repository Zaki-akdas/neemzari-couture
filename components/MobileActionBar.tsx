"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { SITE } from "@/lib/site";
import { PhoneIcon, WhatsAppIcon } from "@/components/ui";

/**
 * Sticky mobile action bar — BOOK | WHATSAPP | CALL.
 * Only visible on small screens, hidden once the footer comes into view.
 */
export default function MobileActionBar() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      const nearBottom =
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 300;
      setShow(!nearBottom);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-espresso/10 bg-ivory/95 backdrop-blur-md md:hidden transition-transform duration-300 ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <Link
        href="/#consult"
        onClick={() => {
          // Ensure the menu isn't open and the anchor scroll works.
          setShow(true);
        }}
        className="flex flex-col items-center justify-center gap-1 bg-burgundy py-3 text-ivory"
      >
        <span className="text-[0.6rem] font-semibold tracking-[0.18em] uppercase">
          Book
        </span>
        <span className="text-[0.55rem] tracking-[0.14em] uppercase text-ivory/70">
          Consultation
        </span>
      </Link>
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center justify-center gap-1 bg-emerald py-3 text-ivory"
      >
        <WhatsAppIcon className="h-4 w-4" />
        <span className="text-[0.6rem] font-semibold tracking-[0.18em] uppercase">
          WhatsApp
        </span>
      </a>
      <a
        href={`tel:${SITE.phone.tel}`}
        className="flex flex-col items-center justify-center gap-1 bg-espresso py-3 text-ivory"
      >
        <PhoneIcon className="h-4 w-4" />
        <span className="text-[0.6rem] font-semibold tracking-[0.18em] uppercase">
          Call
        </span>
      </a>
    </div>
  );
}

function whatsappLink() {
  return `https://wa.me/${SITE.whatsapp.number}?text=${encodeURIComponent(
    "Hello Neemzari Couture, I'd like to book a styling consultation.",
  )}`;
}
