export type ProductAccent = "purple" | "orange" | "gold" | "green" | "rose";

export interface ProductMedia {
  /** Main product screenshot (16:9) - replace in /public/placeholders/ */
  showcase: string;
  /** Optional secondary shot for sub-apps */
  manager?: string;
  fit?: string;
}

export interface ProductItem {
  id: string;
  name: string;
  href: string;
  description: string;
  tagline: string;
  logo: string;
  accent: ProductAccent;
  flagship?: boolean;
  highlights: string[];
  media: ProductMedia;
}

export const products: ProductItem[] = [
  {
    id: "gymtie",
    name: "GymTie",
    href: "https://gymtie.com",
    description: "Complete gym management for owners and members",
    tagline: "Fitness ecosystem",
    logo: "/assets/logo/gymtie.png",
    accent: "purple",
    flagship: true,
    highlights: ["Billing & attendance", "WhatsApp automation", "Member app"],
    media: {
      showcase: "/assets/gymtie/manager.png",
      manager: "/assets/gymtie/manager.png",
      fit: "/assets/gymtie/fit.png",
    },
  },
  {
    id: "youngmenu",
    name: "YoungMenu",
    href: "https://youngmenu.com",
    description: "POS, digital menus, and online reach for food businesses",
    tagline: "Restaurant operations",
    logo: "/assets/logo/youngmenu.png",
    accent: "orange",
    highlights: ["POS billing", "QR menus", "Discovery app"],
    media: { showcase: "/assets/youngmenu/youngmenu.png" },
  },
  {
    id: "devapatha",
    name: "DevaPatha",
    href: "https://devapatha.com",
    description: "Temple operations and devotee engagement",
    tagline: "Temple platform",
    logo: "/assets/logo/devapatha.png",
    accent: "gold",
    highlights: ["Temple manager", "Devotee app", "Donations & events"],
    media: { showcase: "/assets/devapatha/devapatha.png" },
  },
  {
    id: "livonomi",
    name: "Livonomi",
    href: "https://livonomi.com",
    description: "Finance-first life management for personal and business",
    tagline: "Life management OS",
    logo: "/assets/logo/livonomi.png",
    accent: "green",
    highlights: ["Wealth tracking", "AI insights", "Dual workspaces"],
    media: { showcase: "/assets/livonomi/livonomi.png" },
  },
  {
    id: "onebest",
    name: "Onebest",
    href: "https://onebest.in",
    description: "Online gift store with curated picks for every occasion",
    tagline: "Online gift store",
    logo: "/assets/logo/onebest.png",
    accent: "rose",
    highlights: [
      "Curated online store catalog",
      "Special occasions",
      "India-wide delivery",
    ],
    media: { showcase: "/assets/onebest/onebest.png" },
  },
];

/** About / trust section visual */
export const FLOYET_ECOSYSTEM_MEDIA = "/placeholders/floyet-ecosystem.svg";

export const flagshipProduct = products.find((p) => p.flagship)!;
export const companionProducts = products.filter((p) => !p.flagship);

export const PRODUCT_NAMES =
  "GymTie, YoungMenu, DevaPatha, Livonomi, and Onebest";
