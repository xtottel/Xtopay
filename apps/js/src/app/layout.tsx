import "../styles/globals.css";
import { Metadata } from "next";
import { Outfit } from "next/font/google";
import type { Viewport } from "next";

const outfit = Outfit({
  variable: "--font-outfit-sans",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#16335c",
};

export const metadata: Metadata = {
  title: "Xtopay JS SDK",
  description: "Xtopay JS SDK is a JavaScript library for integrating Xtopay payment solutions into your web applications.",

  authors: [
    {
      name: "xtopay",
      url: "https://xtopay.co",
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
      <body
        className={`${outfit.variable} flex flex-col min-h-screen font-sans`}
      >
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
