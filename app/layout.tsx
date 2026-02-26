import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Script from "next/script";
import { WhatsAppButton } from "@/components/whatsapp-button";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: {
    default: "Devyte | Web & Mobile App Development Company in Kerala",
    template: "%s | Devyte",
  },
  description:
    "Devyte is a premium digital agency and the best web & mobile app development company in Kerala. We specialize in custom website & mobile app development, UI/UX design, and SEO services across India.",
  keywords: [
    "Digital solution company in Kerala",
    "Website development company in India",
    "Custom website development services",
    "Mobile app development company Kerala",
    "SEO company in Kerala",
    "UI UX design company Kerala",
    "GMB profile optimization Kerala",
    "Meta ads management services",
    "Facebook ads agency Kerala",
    "Next.js development company India",
    "React web development agency",
    "E-commerce website development Kerala",
    "Local business SEO Kerala",
    "Devyte",
    "Devyte Kerala",
  ],
  authors: [{ name: "Devyte" }],
  creator: "Devyte",
  publisher: "Devyte",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://devyte.in",
    title: "Devyte | Web & Mobile App UI/UX, SEO, GMB & Meta Ads Agency",
    description:
      "Full-service digital agency and consultancy in Kerala. Specialist in Web/Mobile UI/UX, SEO, GMB, and Performance Marketing.",
    siteName: "Devyte",
  },
  twitter: {
    card: "summary_large_image",
    title: "Devyte | Digital Agency",
    description:
      "Shaping the business of digital experiences with custom web and app solutions.",
    creator: "@devytedigital",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          "min-h-screen bg-black font-sans antialiased selection:bg-white/20",
          inter.variable,
        )}
      >
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-QNLGYGSCJT"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-QNLGYGSCJT');
          `}
        </Script>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
