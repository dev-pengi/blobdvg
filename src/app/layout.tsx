import { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Svg blob",
  description: "svg blob shapes generator, quick, customizable and easy to use",
  keywords: [
    "svg",
    "blob",
    "shape",
    "generator",
    "customizable",
    "easy",
    "quick",
    "beautiful",
    "create",
    "creative",
  ],
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
