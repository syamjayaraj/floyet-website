import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.css";
const gaId = process?.env?.NEXT_PUBLIC_GA_ID as string;

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: `FLOYET Labs & Technologies ← Empowering the Future with Innovative Technology`,
  description: `At Floyet Labs & Technologies, we're dedicated to building cutting-edge products and services that simplify life and shape the future.`,
  keywords: [
    "floyet",
    "labs & technologies",
    "software company",
    "best",
    "web development",
    "kozhikode",
    "kerala",
    "gymtie",
    "youngmenu",
    "onebest",
    "floying",
    "codeariv",
  ],
  openGraph: {
    type: "website",
    title: `FLOYET Labs & Technologies ← Empowering the Future with Innovative Technology`,
    description: `At Floyet Labs & Technologies, we're dedicated to building cutting-edge products and services that simplify life and shape the future.`,
    url: "https://floyet.com",
    images: "/assets/images/floyet-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleAnalytics gaId={gaId} />
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
