"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { WhatsAppIcon } from "@/components/ui";

const links = [
  { label: "Home", href: "/" },
  { label: "Collections", href: "/collections" },
  { label: "Bridal", href: "/bridal" },
  { label: "Sherwanis", href: "/sherwanis" },
  { label: "Occasion Wear", href: "/occasion-wear" },
  { label: "Custom Couture", href: "/custom-couture" },
  { label: "Lookbook", href: "/lookbook" },
  { label: "About", href: "/about" },
  { label: "Visit", href: "/visit" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when the mobile menu is open.
  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close the menu whenever the route changes.
  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const solid = scrolled || open;

  return (
    <header
      className={`sticky top-0 z-[70] w-full transition-all duration-500 ${
        solid
          ? "bg-ivory/95 shadow-[0_1px_0_0_rgba(0,0,0,0.06)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-3 sm:px-8 lg:px-12">
        {/* Logo */}
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="group flex shrink-0 flex-col leading-none"
          aria-label="Neemzari Couture home"
        >
          <span className="font-serif text-[1.5rem] font-semibold tracking-[0.2em] text-burgundy group-hover:text-espresso sm:text-[1.55rem]">
            NEEMZARI
          </span>
          <span className="mt-1 text-[0.6rem] font-semibold tracking-[0.6em] uppercase text-gold">
            Couture
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-6 xl:gap-8 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`nav-underline text-[0.72rem] font-medium tracking-[0.14em] uppercase transition-colors duration-300 ${
                  isActive(l.href) ? "text-burgundy" : "text-espresso/70 hover:text-burgundy"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA + mobile controls */}
        <div className="flex items-center gap-2">
          <Link
            href="/#consult"
            className="btn-primary hidden !px-6 !py-3 lg:inline-flex"
          >
            Book Consultation
          </Link>

          {/* Mobile: WhatsApp */}
          <a
            href="https://wa.me/16478193146?text=Hello%20Neemzari%20Couture%2C%20I%27d%20like%20to%20enquire%20about%20your%20collection."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp Neemzari Couture"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-espresso/20 text-espresso/70 transition-colors hover:border-emerald hover:text-emerald lg:hidden"
          >
            <WhatsAppIcon />
          </a>

          {/* Mobile: Menu */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-espresso/15 lg:hidden"
          >
            {/* hamburger -> X */}
            <span className="relative block h-3.5 w-5">
              <span
                className={`absolute left-0 top-0 block h-[1.5px] w-full bg-espresso transition-all duration-300 ${
                  open ? "top-1/2 -translate-y-1/2 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 block h-[1.5px] w-full -translate-y-1/2 bg-espresso transition-opacity duration-300 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute bottom-0 left-0 block h-[1.5px] w-full bg-espresso transition-all duration-300 ${
                  open ? "bottom-1/2 translate-y-1/2 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay — full screen, sits just under the sticky header */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        aria-hidden={!open}
        inert={!open}
        className={`fixed inset-0 top-0 z-[60] flex flex-col bg-ivory transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden ${
          open ? "translate-x-0" : "translate-x-full pointer-events-none"
        }`}
      >
        <div className="flex flex-1 flex-col overflow-y-auto px-8 pb-10 pt-28">
          <ul className="space-y-1">
            {links.map((l, i) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`group flex items-center justify-between border-b border-espresso/10 py-4 text-2xl font-serif ${
                    isActive(l.href) ? "text-burgundy" : "text-espresso"
                  }`}
                  style={{ transitionDelay: `${i * 20}ms` }}
                >
                  {l.label}
                  <span className="text-sm tracking-[0.2em] text-gold opacity-0 transition-opacity group-hover:opacity-100 group-focus:opacity-100">
                    0{i + 1}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/#consult"
            onClick={() => setOpen(false)}
            className="btn-primary mt-10 w-full"
          >
            Book Consultation
          </Link>
        </div>
        <div className="border-t border-espresso/10 p-6 pb-8 text-center text-xs tracking-[0.2em] uppercase text-espresso/50">
          Jaipur Gore Plaza • Brampton
        </div>
      </div>
    </header>
  );
}
