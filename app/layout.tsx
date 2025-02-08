import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import { Syne, Inter } from "next/font/google";
import BootstrapClient from "@/app/components/BootstrapClient";
import CookieConsent from "./components/CookieConsent";

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
  title: "Floyet - Building Future-Ready Digital Solutions",
  description:
    "We craft innovative applications that solve real-world challenges using cutting-edge technology.",
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
