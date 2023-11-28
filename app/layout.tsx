import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.css";
import "./assets/css/globals.css";
import "font-awesome/css/font-awesome.min.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FLOYET Labs & Technologies",
  description:
    "Making Life Easier with FLOYET - Simplifying Your Future with Technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
