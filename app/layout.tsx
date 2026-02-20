import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: {
    default: "Devyte | Best Web Development Company in Kerala & India",
    template: "%s | Devyte",
  },
  description:
    "Devyte is a premium digital agency and the best web development company in Kerala. We specialize in custom website development, UI/UX design, and SEO services across India.",
  keywords: [
    "Web development company in Kerala",
    "Website development company in India",
    "Custom website development services",
    "Mobile app development company Kerala",
    "React web development agency",
    "Next.js development company India",
    "E-commerce website development Kerala",
    "Business website development services",
    "UI UX design company Kerala",
    "Web UI design services India",
    "Mobile app UI UX design agency",
    "SaaS UI design company",
    "Website redesign services",
    "SEO company in Kerala",
    "Technical SEO services India",
    "On-page SEO services",
    "Local SEO services Kerala",
    "Google ranking services India",
    "Google My Business setup service",
    "GMB profile optimization Kerala",
    "Facebook ads agency Kerala",
    "Meta ads management services",
    "Instagram ads agency India",
    "Devyte web development",
    "Devyte digital agency",
    "Devyte Kerala",
  ],
  authors: [{ name: "Devyte" }],
  creator: "Devyte",
  publisher: "Devyte",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://devyte.in",
    title: "Devyte | Digital Agency",
    description: "Shaping the business of digital experiences.",
    siteName: "Devyte",
  },
  twitter: {
    card: "summary_large_image",
    title: "Devyte | Digital Agency",
    description: "Shaping the business of digital experiences.",
    creator: "@devytedigital",
  },
  robots: {
    index: true,
    follow: true,
  },
  generator: "v0.app",
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
        {/* Analytics Script added by shhanif */}
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
      </body>
    </html>
  );
}
