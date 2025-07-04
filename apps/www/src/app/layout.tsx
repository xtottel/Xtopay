import { Outfit } from "next/font/google";
import "@/styles/globals.css";
import { ExaHeader } from "@/layout/ExaHeader";
import { ExaFooter } from "@/layout/ExaFooter";
import { ThemeProvider } from "next-themes";
import { GoogleTagManager } from "@next/third-parties/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { AnalyticsProvider } from "@/context/AnalyticsProvider";
import { CookiesProvider } from "@/context/CookiesContext";
import { CookiesBanner } from "@/components/common/CookiesBanner";
import Script from "next/script";
import { TrackingScripts } from "@/components/common/TrackingScripts";
import { Toaster } from "react-hot-toast";
//import PartnershipBanner from "@/context/PartnershipBanner";

const outfit = Outfit({
  variable: "--font-outfit-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Xtopay – Scalable Payment Infrastructure for Modern Africa",
    template: "%s | Xtopay",
  },
  description:
    "Power your business with Xtopay – enterprise-grade, developer-friendly payments infrastructure tailored for Africa. Accept mobile money, cards, and bank transfers with fast settlement and PCI DSS Level 1 security.",
  metadataBase: new URL("https://xtopay.co"),
  alternates: {
    canonical: "https://xtopay.co",
  },
  openGraph: {
    title: "Xtopay – Fast, Secure, African Payments",
    description:
      "Xtopay offers scalable, secure, and intelligent payment solutions across Africa. Enjoy fast settlements, developer-first APIs, and enterprise tools for modern commerce.",
    url: "https://xtopay.co",
    siteName: "Xtopay",
    images: [
      {
        url: "/og/xtopay-home.jpg",
        width: 1200,
        height: 630,
        alt: "Xtopay – Next-Gen Payments for Africa",
      },
    ],
    locale: "en_GH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Xtopay – Payments Built for Africa",
    description:
      "Developer-first payment infrastructure for Africa. Accept payments easily via mobile money, cards, and bank transfers.",
    images: ["/og/xtopay-twitter.jpg"],
    creator: "@XtopayGH",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
    other: {
      rel: "mask-icon",
      url: "/safari-pinned-tab.svg",
      color: "#4e3b7d",
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  keywords: [
    "Xtopay",
    "African payment gateway",
    "fintech Africa",
    "mobile money API",
    "card processing Africa",
    "developer payments",
    "PCI DSS Ghana",
    "bank transfer API",
    "payment solutions for Africa",
    "omnichannel payments",
  ],
  authors: [{ name: "Xtopay Team", url: "https://xtopay.co/about" }],
  publisher: "Xtopay Inc.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${outfit.variable} font-sans antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-50`}
      >
        <GoogleTagManager gtmId="G-FLDGHERSB9" />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          storageKey="xtopay-theme"
        >
          <AnalyticsProvider>
            <CookiesProvider>
              {/* <PartnershipBanner /> */}
              <ExaHeader />
              <Toaster
                position="top-center"
                toastOptions={{
                  duration: 5000,
                  style: {
                    background: "#f9f5ff",
                    color: "#4c2b88",
                    border: "1px solid #e1d7f0",
                  },
                }}
              />
              <main id="main-content" className="min-h-[calc(100vh-160px)]">
                {/* <NavigationProgress /> */}
                {children}
              </main>
              <ExaFooter />
              <CookiesBanner />
              <SpeedInsights />
            </CookiesProvider>
          </AnalyticsProvider>
        </ThemeProvider>

        <TrackingScripts />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-FLDGHERSB9"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FLDGHERSB9', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </body>
    </html>
  );
}
