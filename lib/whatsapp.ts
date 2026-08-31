import { SITE } from "./site";

/**
 * Build a WhatsApp click-to-chat deep link.
 *
 * IMPORTANT: Only enable this for the phone number if you have verified it is
 * on WhatsApp Business. The number below is the store's listed phone line; it
 * is configurable in `.env.local` via NEXT_PUBLIC_WHATSAPP_NUMBER.
 */
export function whatsappUrl(message: string): string {
  const number = SITE.whatsapp.number;
  const encoded = encodeURIComponent(message).replace(/%20/g, "+");
  return `https://wa.me/${number}?text=${encoded}`;
}

/** Generic enquiry intended for the mobile / floating WhatsApp button. */
export function whatsappGeneralUrl(): string {
  return whatsappUrl(
    "Hello Neemzari Couture, I'd like to know more about your collection and to book a consultation.",
  );
}

/**
 * Pre-filled enquiry for a specific look / garment.
 * The look name is inserted dynamically.
 */
export function whatsappLookUrl(lookName: string): string {
  return whatsappUrl(
    `Hi, I'm interested in the ${lookName} from Neemzari Couture. I'd like to know more about availability, customization and pricing.`,
  );
}
