import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import { Syne, Inter } from "next/font/google";
import BootstrapClient from "@/app/components/BootstrapClient";
import CookieConsent from "./components/CookieConsent";
import "@/app/lib/fontawesome";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
});

export const metadata = {
  title:
    "Floyet - Building Future-Ready Digital Solutions | Web & Mobile App Development",
  description:
    "Floyet specializes in custom web development, mobile apps, and digital solutions. We craft innovative applications using React, Next.js, and cutting-edge technology to solve real-world business challenges.",
  keywords:
    "web development, mobile apps, digital solutions, React, Next.js, custom software, business solutions, technology consulting",
  openGraph: {
    title:
      "Floyet - Building Future-Ready Digital Solutions | Web & Mobile App Development",
    description:
      "Floyet specializes in custom web development, mobile apps, and digital solutions. We craft innovative applications using React, Next.js, and cutting-edge technology to solve real-world business challenges.",
    type: "website",
    url: "https://floyet.com",
    images: [
      {
        url: "/assets/logo/floyet.png",
        width: 1200,
        height: 630,
        alt: "Floyet Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Floyet - Building Future-Ready Digital Solutions",
    description:
      "Custom web & mobile app development using cutting-edge technology",
    images: ["/assets/logo/floyet.png"],
  },
  icons: {
    icon: "/assets/logo/floyet.png",
    apple: "/assets/logo/floyet.png",
  },
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${syne.variable} ${inter.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css"
        />
        <link rel="icon" href="/assets/logo/floyet.png" />
      </head>
      <body>
        {children}
        <BootstrapClient />
        <CookieConsent />
      </body>
    </html>
  );
}
