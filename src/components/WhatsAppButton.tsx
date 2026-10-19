import { MessageCircle } from "lucide-react";
import { siteContact } from "../config/site";

export default function WhatsAppButton() {
  return (
    <a
      className="whatsapp-float"
      href={siteContact.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label="Contact Supekar Electronics on WhatsApp"
    >
      <MessageCircle size={26} aria-hidden="true" />
    </a>
  );
}
