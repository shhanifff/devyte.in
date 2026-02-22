import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black text-white pt-32 pb-8 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Top Section: Navigation & Contact */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 mb-20 md:mb-32">
          {/* Brand / Intro (Span 4) */}
          <div className="lg:col-span-4 sm:col-span-2 lg:text-left">
            <Link
              href="/"
              className="text-2xl font-bold tracking-tighter mb-6 md:mb-8 block"
            >
              Devyte<span className="text-blue-500">.</span>
            </Link>
            <p className="text-white/50 text-base md:text-lg leading-relaxed max-w-sm">
              Crafting digital experiences that merge art, technology, and human
              connection. We build for the bold.
            </p>
          </div>

          {/* Links (Span 4) */}
          <div className="lg:col-span-4 sm:col-span-1 grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-medium text-white/40 mb-6 uppercase tracking-widest text-xs">
                Sitemap
              </h4>
              <ul className="space-y-4 text-sm md:text-base font-light">
                {[
                  { name: "Work", href: "/work" },
                  { name: "Services", href: "/services" },
                  { name: "About", href: "/about" },
                  { name: "Contact", href: "/contact" },
                  { name: "See Map", href: "https://maps.google.com" },
                ].map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="hover:text-blue-400 transition-colors flex items-center gap-2 group"
                    >
                      {item.name}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-white/40 mb-6 uppercase tracking-widest text-xs">
                Socials
              </h4>
              <ul className="space-y-4 text-sm md:text-base font-light">
                {[
                  "Instagram",
                  "Twitter",
                  "LinkedIn",
                  "Behance",
                  "Dribbble",
                ].map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="hover:text-blue-400 transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Contact Large (Span 4) */}
          <div className="lg:col-span-4 sm:col-span-1 lg:text-right">
            <h4 className="font-medium text-white/40 mb-6 uppercase tracking-widest text-xs">
              Got an Idea?
            </h4>
            <a
              href="mailto:devyte.digital@gmail.com"
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light hover:text-blue-400 transition-colors border-b border-white/20 hover:border-blue-400 pb-1 break-all md:break-normal inline-block group"
            >
              devyte.digital@gmail.com
            </a>
            <div className="mt-8 space-y-4">
              <a
                href="tel:+919747659606"
                className="text-lg md:text-xl font-light hover:text-blue-400 transition-colors block"
              >
                +91 97476 59606
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright & Links */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="text-sm text-white/30 flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <span className="opacity-50">&copy; 2026 Devyte Agency</span>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="hover:text-white transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="hover:text-white transition-colors"
              >
                Terms
              </Link>
              <Link href="/faq" className="hover:text-white transition-colors">
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
