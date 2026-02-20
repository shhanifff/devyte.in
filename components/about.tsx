"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax for image
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section
      ref={containerRef}
      className="bg-black text-white py-20 md:py-32 relative overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column - Sticky Image */}
          <div className="relative md:sticky md:top-32 h-[60vh] md:h-[80vh] w-full overflow-hidden mb-12 md:mb-0">
            <motion.div
              style={{ y }}
              className="absolute inset-0 w-full h-[120%] -top-[10%]"
            >
              <img
                src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?q=80&w=2070&auto=format&fit=crop"
                alt="Editorial Portrait"
                className="w-full h-full object-cover grayscale brightness-75 contrast-125"
              />
            </motion.div>
            {/* Overlay Text/Badge */}
            <div className="absolute bottom-6 left-6 z-10">
              <span className="text-xs font-medium tracking-widest uppercase bg-white text-black px-3 py-1">
                Est. 2026
              </span>
            </div>
          </div>

          {/* Right Column - Scrollable Content */}
          <div className="flex flex-col justify-center py-10 md:py-20">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-medium tracking-widest uppercase text-white/50 mb-8 block"
            >
              Who We Are
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-light leading-[0.9] tracking-tight mb-12 mix-blend-screen"
            >
              WE CRAFT <br />
              <span className="italic font-serif opacity-80">DIGITAL</span>{" "}
              <br />
              LEGACIES
            </motion.h2>

            <div className="space-y-8 text-lg md:text-xl text-white/70 font-light leading-relaxed max-w-lg">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                We are a full stack digital powerhouse based in Kerala,
                specializing in high performance Web & Mobile App Development,
                precision targeted Meta Ads, and strategic GMB SEO services in
                Kozhikode, Kochi, and Trivandrum.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                We don't just build websites; we engineer complete digital
                ecosystems designed to dominate local search, capture social
                attention, and scale your business.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="mt-12"
            >
              <Link
                href="/about"
                className="group flex items-center gap-4 text-sm font-medium tracking-widest uppercase hover:text-white/70 transition-colors cursor-pointer"
              >
                Read Our Story{" "}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
