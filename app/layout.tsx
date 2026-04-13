import type { Metadata, Viewport } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import BootstrapClient from "@/app/components/BootstrapClient";
import AnimationUtility from "./components/AnimationUtility";
import CookieConsent from "./components/CookieConsent";
import "@/app/lib/fontawesome";
import AppleNav from "./components/AppleNav";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Floyet — Focused Digital Products for Real-World Impact",
    template: "%s | Floyet",
  },
  description:
    "Floyet builds modern, high-quality digital products — GymTie (gym management & fitness), YoungMenu (restaurant branding & digital solutions), and Onebest (gifts) — solving real-world business challenges.",
  keywords: [
    "Floyet",
    "digital products",
    "GymTie",
    "GymTie Manager",
    "GymTie Fit",
    "gym management software",
    "YoungMenu",
    "restaurant management",
    "Onebest",
    "software solutions India",
    "Kozhikode tech company",
  ],
  authors: [{ name: "Floyet Labs & Technologies LLP", url: "https://floyet.com" }],
  creator: "Floyet Labs & Technologies LLP",
  publisher: "Floyet Labs & Technologies LLP",
  metadataBase: new URL("https://floyet.com"),
  alternates: {
    canonical: "https://floyet.com",
  },
  openGraph: {
    title: "Floyet — Focused Digital Products for Real-World Impact",
    description:
      "Floyet builds modern, high-quality digital products — GymTie, YoungMenu, and Onebest — solving real-world business challenges.",
    type: "website",
    url: "https://floyet.com",
    siteName: "Floyet",
    locale: "en_IN",
    images: [
      {
        url: "/assets/logo/gymtie.png",
        width: 512,
        height: 512,
        alt: "Floyet — Digital Products",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@floyet",
    title: "Floyet — Focused Digital Products for Real-World Impact",
    description:
      "GymTie, YoungMenu, Onebest — digital products that solve real business challenges.",
    images: ["/assets/logo/gymtie.png"],
  },
  icons: {
    icon: "/assets/logo/gymtie.png",
    apple: "/assets/logo/gymtie.png",
    shortcut: "/assets/logo/gymtie.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#0B0B0F",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Floyet Labs & Technologies LLP",
  url: "https://floyet.com",
  logo: "https://floyet.com/assets/logo/gymtie.png",
  description:
    "Floyet builds focused, high-quality digital products that solve real-world business challenges.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Door No: 2211, 2/1149/I 100, Hilite Business Park, Olavanna",
    addressLocality: "Kozhikode",
    addressRegion: "Kerala",
    postalCode: "673014",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-9746742650",
    contactType: "customer support",
    email: "info@floyet.com",
    availableLanguage: ["English", "Malayalam"],
  },
  sameAs: [
    "https://www.linkedin.com/company/floyet",
    "https://x.com/floyet.tech",
    "https://www.instagram.com/floyet.tech",
    "https://github.com/codeariv",
  ],
  foundingDate: "2018",
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    minValue: 1,
    maxValue: 10,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preconnect"
          href="https://cdn.jsdelivr.net"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="page-transition">
        <AppleNav />
        <AnimationUtility />
        {children}
        <BootstrapClient />
        <CookieConsent />
        <GoogleAnalytics gaId="G-SNX508HYRB" />
        <Footer />
      </body>
    </html>
  );
}
