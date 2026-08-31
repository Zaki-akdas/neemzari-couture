"use client";

import { useState } from "react";
import { eventTypes, lookingFor } from "@/lib/data";
import { SITE } from "@/lib/site";
import { WhatsAppIcon, PhoneIcon } from "@/components/ui";

type Status = "idle" | "submitting" | "success" | "demo";

const inputCls =
  "w-full rounded-none border border-espresso/20 bg-ivory-light px-4 py-3 text-sm text-espresso placeholder:text-espresso/40 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition-colors";
const labelCls =
  "mb-2 block text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-espresso/60";

export default function ConsultationForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    eventType: "",
    eventDate: "",
    lookingFor: "",
    style: "",
    budget: "",
    message: "",
  });

  const update = (key: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => setForm((f) => ({ ...f, [key]: e.target.value }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const endpoint = process.env.NEXT_PUBLIC_CONSULTATION_ENDPOINT;

    if (!endpoint) {
      // No backend yet — this is a front-end demo. Be honest with the visitor
      // and route them to WhatsApp / phone instead of claiming a submission.
      setStatus("demo");
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          source: "website-consultation",
          timestamp: new Date().toISOString(),
        }),
      });
      if (res.ok) setStatus("success");
      else setStatus("demo");
    } catch {
      setStatus("demo");
    }
  }

  return (
    <div className="relative">
      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className={labelCls}>Full Name *</label>
            <input id="name" required className={inputCls} value={form.name} onChange={update("name")} placeholder="Your name" />
          </div>
          <div>
            <label htmlFor="phone" className={labelCls}>Phone *</label>
            <input id="phone" required type="tel" className={inputCls} value={form.phone} onChange={update("phone")} placeholder="+1 ..." />
          </div>
        </div>

        <div>
          <label htmlFor="email" className={labelCls}>Email</label>
          <input id="email" type="email" className={inputCls} value={form.email} onChange={update("email")} placeholder="you@example.com" />
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="eventType" className={labelCls}>Event Type *</label>
            <select id="eventType" required className={inputCls} value={form.eventType} onChange={update("eventType")}>
              <option value="">Select…</option>
              {eventTypes.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="eventDate" className={labelCls}>Event Date</label>
            <input id="eventDate" type="date" className={inputCls} value={form.eventDate} onChange={update("eventDate")} />
          </div>
        </div>

        <div>
          <label htmlFor="lookingFor" className={labelCls}>What are you looking for? *</label>
          <select id="lookingFor" required className={inputCls} value={form.lookingFor} onChange={update("lookingFor")}>
            <option value="">Select…</option>
            {lookingFor.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="style" className={labelCls}>Style / Colour Preferences</label>
          <input id="style" className={inputCls} value={form.style} onChange={update("style")} placeholder="e.g. maroon lehengas, gold detailing" />
        </div>

        <div>
          <label htmlFor="budget" className={labelCls}>Budget Range (optional)</label>
          <input id="budget" className={inputCls} value={form.budget} onChange={update("budget")} placeholder="Optional" />
        </div>

        <div>
          <label htmlFor="message" className={labelCls}>Message</label>
          <textarea id="message" rows={4} className={inputCls} value={form.message} onChange={update("message")} placeholder="Tell us a little about your occasion…" />
        </div>

        <button type="submit" className="btn-gold w-full !py-4" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending…" : "Request Consultation"}
        </button>
      </form>

      {/* Success / demo states */}
      {status === "success" && (
        <Panel>
          <CheckMark />
          <h3 className="mt-4 font-serif text-2xl text-burgundy">
            Thank you. Your consultation request has been received.
          </h3>
          <p className="mt-2 text-sm text-espresso/60">
            A stylist from Neemzari Couture will be in touch. We look forward to
            helping you create your look.
          </p>
        </Panel>
      )}

      {status === "demo" && (
        <Panel>
          <h3 className="font-serif text-2xl text-burgundy">
            Let&rsquo;s start your consultation.
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-espresso/60">
            Online submission is being set up. Please reach us directly and
            we&rsquo;ll arrange your styling consultation right away.
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <a
              href={`https://wa.me/${SITE.whatsapp.number}?text=${encodeURIComponent(
                "Hello Neemzari Couture, I'd like to book a styling consultation.",
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex-1 !py-3"
            >
              <WhatsAppIcon className="h-4 w-4" /> WhatsApp Us
            </a>
            <a href={`tel:${SITE.phone.tel}`} className="btn-outline flex-1 !py-3">
              <PhoneIcon className="h-4 w-4" /> Call the Store
            </a>
          </div>
        </Panel>
      )}
    </div>
  );
}

function Panel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-6 border border-gold/40 bg-ivory-light p-8">
      {children}
    </div>
  );
}

function CheckMark() {
  return (
    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald text-ivory">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}
