import "./globals.css";
import "../sentry"; // initialize Sentry if DSN provided
import { ReactNode } from "react";
import CookieConsent from "../components/CookieConsent";
import Header from "../components/Header";
import SiteFooter from "../components/SiteFooter";
import WhatsAppButton from "../components/WhatsAppButton";
import { siteContact, siteUrl } from "../config/site";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "Supekar Electronics, Satara | PCB Design, IoT, Embedded Systems & Automation",
  description:
    "Supekar Electronics is a Satara, Maharashtra micro enterprise for electronics and PCB design, IoT, embedded systems, home and industrial automation, and smart safety devices.",
  keywords: [
    "Supekar Electronics",
    "PCB design Satara",
    "IoT solutions Maharashtra",
    "embedded systems",
    "electronics design",
    "home automation",
    "industrial automation",
    "smart safety devices",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Supekar Electronics",
    title: "Supekar Electronics, Satara | PCB Design, IoT & Automation",
    description:
      "Electronics design, PCB, IoT, embedded systems, automation, and smart safety solutions from Satara, Maharashtra.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Supekar Electronics" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Supekar Electronics, Satara | PCB Design, IoT & Automation",
    description:
      "Electronics design, PCB, IoT, embedded systems, automation, and smart safety solutions from Satara, Maharashtra.",
    images: ["/opengraph-image"],
  },
  icons: { icon: "/icon.svg" },
};

export const viewport = "width=device-width, initial-scale=1.0, viewport-fit=cover";

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Supekar Electronics",
              description:
                "Electronics design, PCB design, IoT, embedded systems, automation, and smart safety devices.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Satara",
                addressRegion: "Maharashtra",
                addressCountry: "IN",
              },
              email: siteContact.email,
              telephone: siteContact.phone,
              url: siteUrl,
              sameAs: [siteContact.instagram, siteContact.linkedIn],
            }).replace(/</g, "\\u003c"),
          }}
        />
        {children}
        <SiteFooter />
        <WhatsAppButton />
        <CookieConsent />
      </body>
    </html>
  );
}