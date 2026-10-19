"use client";

import { useEffect, useState, type FormEvent } from "react";
import { Mail, Phone, MessageCircle } from "lucide-react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { services, siteContact } from "../config/site";

type FormStatus = { kind: "success" | "error"; message: string } | null;

export default function ContactSection() {
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<FormStatus>(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const product = new URLSearchParams(window.location.search).get("product");
    if (product) setMessage(`I am interested in ${product}.`);
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus(null);
    setSending(true);
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as { message?: string };
      if (!response.ok) throw new Error(result.message || "Unable to send your message.");
      form.reset();
      setMessage("");
      setStatus({ kind: "success", message: result.message || "Thanks. Your request has been received." });
    } catch (error) {
      setStatus({
        kind: "error",
        message: error instanceof Error ? error.message : "Unable to send your message. Please try again.",
      });
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="contact" className="section contact-section">
      <div className="section-inner contact-inner">
        <div>
          <p className="eyebrow">Let&apos;s work together</p>
          <h2>Tell us what you&apos;re building</h2>
          <p className="section-copy">Share your requirement and we&apos;ll get back to you.</p>
          <div className="contact-actions" aria-label="Contact options">
            <a className="button button-secondary" href={`tel:${siteContact.phone}`}>
              <Phone size={18} aria-hidden="true" /> Call
            </a>
            <a className="button button-secondary" href={siteContact.whatsapp} target="_blank" rel="noreferrer">
              <MessageCircle size={18} aria-hidden="true" /> WhatsApp
            </a>
            <a className="button button-secondary" href={`mailto:${siteContact.email}`}>
              <Mail size={18} aria-hidden="true" /> Email
            </a>
          </div>
          <div className="social-links">
            <a href={siteContact.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
              <FaInstagram size={20} />
            </a>
            <a href={siteContact.linkedIn} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input name="name" type="text" autoComplete="name" required minLength={2} maxLength={100} />
          </label>
          <label>
            Phone
            <input name="phone" type="tel" autoComplete="tel" required pattern="\+?(?:[0-9]| |\(|\)|-){10,20}" />
          </label>
          <label>
            Email
            <input name="email" type="email" autoComplete="email" required maxLength={254} />
          </label>
          <label>
            Requirement type
            <select name="requirementType" required defaultValue="">
              <option value="" disabled>Select a service</option>
              {services.map(({ title }) => <option key={title} value={title}>{title}</option>)}
            </select>
          </label>
          <label>
            Message
            <textarea
              name="message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              required
              minLength={10}
              maxLength={5000}
              rows={5}
            />
          </label>
          <label className="honeypot" aria-hidden="true">
            Leave this field empty
            <input name="website" type="text" tabIndex={-1} autoComplete="off" />
          </label>
          <button className="button button-primary" type="submit" disabled={sending}>
            {sending ? "Sending…" : "Send Requirement"}
          </button>
          {status && (
            <p className={`form-status ${status.kind}`} role="status" aria-live="polite">
              {status.message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
