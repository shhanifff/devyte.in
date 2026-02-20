"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown } from "lucide-react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen bg-black text-white overflow-hidden flex flex-col justify-center items-center pt-20"
    >
      {/* Corner Metadata Removed */}

      {/* Fullscreen Video Background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
      >
        <div className="w-full h-full overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover grayscale brightness-50 hover:grayscale-0 hover:brightness-100 transition-all duration-700 ease-in-out"
          >
            <source
              src="https://res.cloudinary.com/dvj3mphwu/video/upload/v1771343464/From_Main_Klickpin_CF-_Visuelle_launch_-_2iRYmQuAx_rg4cdd.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </motion.div>

      {/* Main Typographic Content */}
      <div className="relative z-10 w-full max-w-[90vw] mx-auto text-center flex flex-col items-center justify-center mix-blend-difference">
        {/* Line 1 */}
        <motion.h1
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-[12vw] md:text-[11vw] leading-[0.85] font-light tracking-tighter"
        >
          WE BUILD
        </motion.h1>

        {/* Line 2 */}
        <motion.h1
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-[12vw] md:text-[11vw] leading-[0.85] font-light tracking-tighter"
        >
          WE MARKET
        </motion.h1>

        {/* Line 3 */}
        <motion.h1
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-[12vw] md:text-[11vw] leading-[0.85] font-light tracking-tighter"
        >
          YOU GROW
        </motion.h1>

        {/* SEO Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-8 text-sm md:text-base tracking-[0.3em] uppercase text-white/40 font-medium"
        >
          Best Web Development Company in Kerala
        </motion.p>
      </div>

      {/* Floating Gradient for subtle depth (Optional, keeping it very subtle for this clean look) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-white/5 rounded-full blur-[120px] mix-blend-screen" />
      </div>
    </section>
  );
}
