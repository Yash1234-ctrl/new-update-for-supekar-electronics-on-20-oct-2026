export type Product = {
  slug: string;
  name: string;
  shortDescription: string;
  keySpecs: string[];
  useCases: string[];
  image: string;
};

export const products: Product[] = [
  {
    slug: "universal-switch-controller-s1",
    name: "Universal Switch Controller S1",
    shortDescription: "Control 9 electrical switches independently using a multifunction IR remote controller.",
    keySpecs: ["Independent control of 9 loads", "Multiple operating modes", "IR-based operation"],
    useCases: ["Homes", "Offices", "Shops", "Automation projects"],
    image: "/images/product 1.jpeg",
  },
  {
    slug: "universal-switch-controller-s2",
    name: "Universal Switch Controller S2",
    shortDescription: "Advanced switch automation system capable of controlling up to 21 switches from a single remote.",
    keySpecs: ["Control up to 21 switches", "Single remote operation", "Designed for larger spaces"],
    useCases: ["Large homes", "Institutions", "Commercial spaces", "Offices"],
    image: "/images/product 2.jpeg",
  },
  {
    slug: "smartswitch",
    name: "SmartSwitch",
    shortDescription: "IoT-enabled smart switch controller for appliance control using a mobile app.",
    keySpecs: ["Mobile app control", "Real-time status monitoring", "Cloud connectivity"],
    useCases: ["Smart homes", "Offices", "Farms", "Remote monitoring"],
    image: "/images/product 3.jpeg",
  },
  {
    slug: "pumpmaster5k",
    name: "PumpMaster5K",
    shortDescription: "Long-range wireless motor controller for agricultural and industrial applications.",
    keySpecs: ["Up to 5 km range", "Remote ON/OFF operation", "Wireless motor control"],
    useCases: ["Agriculture", "Industry", "Water pumping", "Remote motor control"],
    image: "/images/product 4.jpeg",
  },
  {
    slug: "universal-switch-controller-mini",
    name: "Universal Switch Controller S Mini",
    shortDescription: "Compact remote-based controller for up to 5 electrical switches.",
    keySpecs: ["Supports up to 5 switches", "Compact design", "IR-based control"],
    useCases: ["Rooms", "Apartments", "Cabins", "Small offices"],
    image: "/images/product 5.jpeg",
  },
  {
    slug: "motionlight",
    name: "MotionLight",
    shortDescription: "PIR sensor-based motion controller that automates lighting.",
    keySpecs: ["Automatic light activation", "Motion-based operation", "Energy-saving control"],
    useCases: ["Corridors", "Staircases", "Parking areas", "Washrooms"],
    image: "/images/product 6.jpeg",
  },
  {
    slug: "sunsense",
    name: "SunSense",
    shortDescription: "Day-night controller that operates lights based on ambient sunlight conditions.",
    keySpecs: ["Automatic dusk-to-dawn control", "Ambient-light sensing", "Automatic lighting operation"],
    useCases: ["Street lights", "Gardens", "Security lights", "Outdoor installations"],
    image: "/images/product 7.jpeg",
  },
  {
    slug: "leakguard",
    name: "LeakGuard",
    shortDescription: "Electrical safety device designed to protect against leakage current hazards in electric geysers.",
    keySpecs: ["Leakage current protection", "Automatic power disconnect", "Electrical safety monitoring"],
    useCases: ["Homes", "Hotels", "Hostels", "Commercial buildings"],
    image: "/images/product 8.jpeg",
  },
];
