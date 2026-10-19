import Link from "next/link";
import { ArrowRight, BadgeCheck, MapPin, Wrench } from "lucide-react";
import { fallbackServiceIcon, serviceIconMap, services } from "../config/site";

const chips = [
  { icon: BadgeCheck, label: "Udyam Registered" },
  { icon: MapPin, label: "Made in Satara, India" },
  { icon: Wrench, label: "Repairable by design" },
];

const facts = [
  { value: "2026", label: "Established" },
  { value: String(services.length), label: "Core services" },
  { value: "MSME", label: "Registered enterprise" },
];

function ServiceCard({ service, duplicate = false }: { service: (typeof services)[number]; duplicate?: boolean }) {
  const Icon = serviceIconMap[service.icon] ?? fallbackServiceIcon;
  return (
    <li className="service-card" aria-hidden={duplicate || undefined} data-duplicate={duplicate || undefined}>
      <span className="service-icon"><Icon aria-hidden="true" size={26} strokeWidth={1.8} /></span>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
    </li>
  );
}

function CircuitArt() {
  return (
    <svg className="circuit-art" viewBox="0 0 480 400" role="img" aria-label="Illustration of a microcontroller connected to sensors">
      <g className="traces" fill="none" strokeWidth="2">
        <path d="M180 180 H90 V90 H30" />
        <path d="M180 220 H60 V310 H30" />
        <path d="M300 180 H390 V90 H450" />
        <path d="M300 220 H420 V310 H450" />
        <path d="M240 150 V60 H300" />
        <path d="M240 250 V340 H180" />
      </g>
      <g className="nodes">
        <circle cx="30" cy="90" r="6" />
        <circle cx="30" cy="310" r="6" />
        <circle cx="450" cy="90" r="6" />
        <circle cx="450" cy="310" r="6" />
        <circle cx="300" cy="60" r="6" />
        <circle cx="180" cy="340" r="6" />
      </g>
      <g className="chip">
        <rect x="180" y="150" width="120" height="100" rx="12" />
        <rect x="200" y="170" width="80" height="60" rx="6" className="chip-core" />
        <text x="240" y="206" textAnchor="middle">MCU</text>
      </g>
    </svg>
  );
}

export default function HeroSection() {
  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <div className="hero-grid-bg" aria-hidden="true" />

      <div className="hero-inner">
        <div className="hero-content">
          <p className="eyebrow">Electronics engineering · Satara, Maharashtra</p>
          <h1 id="hero-title">
            Innovate. Design. <span className="accent">Engineer.</span> Automate
          </h1>
          <p className="hero-intro">
            Practical electronics, PCB, IoT, embedded and automation products,
            designed and built locally for homes, industry and agriculture.
          </p>

          <div className="hero-actions">
            <Link className="button button-primary" href="/#contact">
              Get a Quote <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link className="button button-secondary" href="/products">View Products</Link>
          </div>

          <ul className="chips">
            {chips.map(({ icon: Icon, label }) => (
              <li key={label}><Icon size={16} aria-hidden="true" /> {label}</li>
            ))}
          </ul>

          <dl className="facts">
            {facts.map((f) => (
              <div key={f.label}>
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="hero-visual" aria-hidden="false">
          <CircuitArt />
        </div>
      </div>

      <div className="services-window">
        <h2 className="sr-only">Our services</h2>
        <ul className="services-track">
          {services.map((s) => <ServiceCard key={s.title} service={s} />)}
          {services.map((s) => <ServiceCard key={`${s.title}-copy`} service={s} duplicate />)}
        </ul>
      </div>
    </section>
  );
}