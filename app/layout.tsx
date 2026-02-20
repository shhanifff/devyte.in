import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: {
    default: "Devyte | Digital Agency",
    template: "%s | Devyte",
  },
  description:
    "Shaping the business of digital experiences. We are a premium digital agency specializing in web design, development, and branding.",
  keywords: [
    "Digital Agency",
    "Web Design",
    "Web Development",
    "Branding",
    "UI/UX",
    "Devyte",
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
