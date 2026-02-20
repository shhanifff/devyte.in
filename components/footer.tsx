"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black text-white pt-32 pb-8 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Top Section: Navigation & Contact */}
        <div className="grid md:grid-cols-12 gap-12 lg:gap-16 mb-20 md:mb-32">
          {/* Brand / Intro (Span 4) */}
          <div className="md:col-span-4">
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
          <div className="md:col-span-4 grid grid-cols-2 gap-8 md:gap-12">
            <div>
              <h4 className="font-medium text-white/40 mb-6 uppercase tracking-widest text-xs">
                Sitemap
              </h4>
              <ul className="space-y-4 text-base md:text-lg font-light">
                {[
                  { name: "Work", href: "/work" },
                  { name: "Services", href: "/services" },
                  { name: "About", href: "/about" },
                  { name: "Contact", href: "/contact" },
                  { name: "FAQ", href: "/faq" },
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
                Social Media
              </h4>
              <ul className="space-y-4 text-base md:text-lg font-light">
                {["Instagram", "LinkedIn", "Facebook", "Twitter"].map(
                  (item) => (
                    <li key={item}>
                      <Link
                        href="#"
                        className="hover:text-blue-400 transition-colors"
                      >
                        {item}
                      </Link>
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>

          {/* Contact Large (Span 4) */}
          <div className="md:col-span-4 md:text-right">
            <h4 className="font-medium text-white/40 mb-6 uppercase tracking-widest text-xs">
              Got an Idea?
            </h4>
            <a
              href="mailto:devyte.digital@gmail.com"
              className="text-xl sm:text-2xl md:text-4xl font-light hover:text-blue-400 transition-colors border-b border-white/20 hover:border-blue-400 pb-1 break-all md:break-normal inline-block group"
            >
              devyte.digital@gmail.com
            </a>
            <div className="mt-8">
              <a
                href="tel:+910000000000"
                className="text-lg md:text-xl font-light hover:text-blue-400 transition-colors"
              >
                +91 00000 00000
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section: Massive Text & Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-end justify-between gap-8">
          <div className="text-sm text-white/30 flex gap-8">
            <span>&copy; 2026 Devyte Agency</span>
            <Link
              href="/privacy"
              className="hover:text-white transition-colors"
            >
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms
            </Link>
          </div>

          {/* Massive Footer Text */}
          <h1 className="text-[12vw] leading-none font-bold tracking-tighter text-white/5 select-none pointer-events-none">
            DEVYTE
          </h1>
        </div>
      </div>
    </footer>
  );
}
