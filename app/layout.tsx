import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import BootstrapClient from "@/app/components/BootstrapClient";
import AnimationUtility from "./components/AnimationUtility";
import CookieConsent from "./components/CookieConsent";
import "@/app/lib/fontawesome";

export const metadata = {
  title:
    "Floyet - We build focused, high-quality products that make everyday life and work easier.",
  description:
    "Floyet builds powerful, modern digital products like GymTie, YoungMenu, and Onebest designed to solve real-world business challenges and streamline everyday life.",
  keywords:
    "Floyet, digital products, software solutions, GymTie, YoungMenu, Onebest, business automation, innovative technology",
  openGraph: {
    title:
      "Floyet - High-Quality Digital Products",
    description:
      "Floyet builds focused, high-quality digital products designed to solve real-world challenges and streamline operations.",
    type: "website",
    url: "https://floyet.com",
    images: [
      {
        url: "/assets/logo.png",
        width: 1200,
        height: 630,
        alt: "Floyet Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Floyet - High-Quality Digital Products",
    description:
      "High-quality products designed to solve real-world business challenges.",
    images: ["/assets/logo.png"],
  },
  icons: {
    icon: "/assets/logo.png",
    apple: "/assets/logo.png",
  },
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#ffffff",
};

import Header from "./components/Header";
import Footer from "./components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css"
        />
          <link rel="icon" href="/assets/logo.png" />
      </head>
      <body className="page-transition">
        <Header />
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
