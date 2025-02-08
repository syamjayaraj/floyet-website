import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Syne, Inter } from "next/font/google";
import BootstrapClient from "@/app/components/BootstrapClient";

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
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css"
        />
      </head>
      <body>
        {children}
        <BootstrapClient />
      </body>
    </html>
  );
}
