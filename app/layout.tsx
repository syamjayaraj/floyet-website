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
    default: "Floyet - Focused Digital Products for Real-World Impact",
    template: "%s | Floyet",
  },
  description:
    "Floyet builds modern, high-quality digital products - GymTie, YoungMenu, DevaPatha, and Onebest - solving real-world business challenges.",
  keywords: [
    "Floyet",
    "digital products",
    "GymTie",
    "GymTie Manager",
    "GymTie Fit",
    "gym management software",
    "YoungMenu",
    "restaurant management",
    "DevaPatha",
    "temple management platform",
    "temple management software",
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
    title: "Floyet - Focused Digital Products for Real-World Impact",
    description:
      "Floyet builds modern, high-quality digital products - GymTie, YoungMenu, DevaPatha, and Onebest - solving real-world business challenges.",
    type: "website",
    url: "https://floyet.com",
    siteName: "Floyet",
    locale: "en_IN",
    images: [
      {
        url: "/assets/logo/gymtie.png",
        width: 512,
        height: 512,
        alt: "Floyet - Digital Products",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@floyet",
    title: "Floyet - Focused Digital Products for Real-World Impact",
    description:
      "GymTie, YoungMenu, DevaPatha, Onebest - digital products that solve real business challenges.",
    images: ["/assets/logo/gymtie.png"],
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
    shortcut: "/favicon.png",
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
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://floyet.com/#organization",
      name: "Floyet Labs & Technologies LLP",
      alternateName: "Floyet",
      url: "https://floyet.com",
      logo: {
        "@type": "ImageObject",
        url: "https://floyet.com/logo.png",
      },
      description:
        "Floyet builds focused vertical software products for real-world businesses and community-led markets in India.",
      foundingDate: "2018",
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
      numberOfEmployees: {
        "@type": "QuantitativeValue",
        minValue: 1,
        maxValue: 10,
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://floyet.com/#website",
      url: "https://floyet.com",
      name: "Floyet",
      publisher: {
        "@id": "https://floyet.com/#organization",
      },
      inLanguage: "en-IN",
    },
    {
      "@type": "ItemList",
      "@id": "https://floyet.com/#site-navigation",
      name: "Floyet site navigation",
      itemListElement: [
        { "@type": "SiteNavigationElement", position: 1, name: "Products", url: "https://floyet.com/products" },
        { "@type": "SiteNavigationElement", position: 2, name: "About", url: "https://floyet.com/about" },
        { "@type": "SiteNavigationElement", position: 3, name: "Founders", url: "https://floyet.com/founders" },
        { "@type": "SiteNavigationElement", position: 4, name: "Careers", url: "https://floyet.com/careers" },
        { "@type": "SiteNavigationElement", position: 5, name: "Blog", url: "https://floyet.com/blog" },
        { "@type": "SiteNavigationElement", position: 6, name: "Contact", url: "https://floyet.com/contact" },
      ],
    },
    {
      "@type": "ItemList",
      "@id": "https://floyet.com/#products",
      name: "Floyet product portfolio",
      itemListElement: [
        {
          "@type": "SoftwareApplication",
          position: 1,
          name: "GymTie",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web, Android, iOS",
          url: "https://gymtie.com",
          description: "Gym management software for member management, billing, attendance, and WhatsApp automation.",
        },
        {
          "@type": "SoftwareApplication",
          position: 2,
          name: "YoungMenu",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          url: "https://youngmenu.com",
          description: "Digital menu, ordering, billing, and online visibility platform for food businesses.",
        },
        {
          "@type": "SoftwareApplication",
          position: 3,
          name: "DevaPatha",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web, Android, iOS",
          url: "https://devapatha.com",
          image: "https://floyet.com/assets/logo/devapatha.png",
          description: "Temple management platform for temple operations and devotee engagement.",
        },
        {
          "@type": "Store",
          position: 4,
          name: "Onebest Gifts",
          url: "https://onebest.in",
          description: "Curated gift shop for special occasions.",
        },
      ],
    },
  ],
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
