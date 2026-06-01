export type ProductAccent = "purple" | "orange" | "gold" | "green" | "rose";

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
  },
  {
    id: "onebest",
    name: "Onebest",
    href: "https://onebest.in",
    description: "Curated gifts for every occasion",
    tagline: "Gift shop",
    logo: "/assets/logo/onebest.png",
    accent: "rose",
    highlights: ["Curated catalog", "Special occasions", "India delivery"],
  },
];

export const flagshipProduct = products.find((p) => p.flagship)!;
export const companionProducts = products.filter((p) => !p.flagship);

export const PRODUCT_NAMES =
  "GymTie, YoungMenu, DevaPatha, Livonomi, and Onebest";
