import {
  CircuitBoard,
  Cpu,
  Home,
  Microchip,
  Radio,
  Rocket,
  ShieldCheck,
  Wifi,
  type LucideIcon,
} from "lucide-react";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const siteContact = {
  email: "supekarelectronics@gmail.com",
  phone: "+918459672618",
  phoneDisplay: "+91 84596 72618",
  whatsapp: "https://wa.me/917709707725?text=Hello%20Supekar%20Electronics",
  instagram: "https://www.instagram.com/supekarelectronics?dlrf=Z3lpdTRlbTc1dWQx",
  linkedIn: "https://www.linkedin.com/company/supekar-electronics/",
};

export const serviceIconMap: Record<string, LucideIcon> = {
  CircuitBoard,
  Cpu,
  Home,
  Microchip,
  Radio,
  Rocket,
  ShieldCheck,
  Wifi,
};

export const fallbackServiceIcon = Cpu;

export const services = [
  {
    icon: "Cpu",
    title: "Electronics Design & Development",
    description: "Turn a concept into a thoughtfully engineered electronic product.",
  },
  {
    icon: "CircuitBoard",
    title: "PCB Design & Manufacturing",
    description: "Schematic capture, PCB layout, prototyping, and manufacturing support.",
  },
  {
    icon: "Wifi",
    title: "IoT Solutions",
    description: "Connected devices for remote monitoring, data, and control.",
  },
  {
    icon: "Home",
    title: "Home & Industrial Automation",
    description: "Automation solutions designed around practical operating needs.",
  },
  {
    icon: "Microchip",
    title: "Embedded Systems Engineering",
    description: "Microcontroller, sensor, and firmware engineering for embedded products.",
  },
  {
    icon: "Radio",
    title: "Wireless Control Systems",
    description: "Wireless control and monitoring for equipment and applications.",
  },
  {
    icon: "ShieldCheck",
    title: "Smart Safety Devices",
    description: "Electronics designed to support safer use of people and equipment.",
  },
  {
    icon: "Rocket",
    title: "Custom Product Development",
    description: "Product development support from early idea through production planning.",
  },
] as const;
