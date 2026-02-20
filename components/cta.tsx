"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function CTA() {
  const textRef = useRef<HTMLSpanElement>(null);
  const arrowRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (textRef.current) {
      const chars = textRef.current.children;

      gsap.to(chars, {
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.1,
        ease: "power4.out",
      });
    }

    if (arrowRef.current) {
      gsap.to(arrowRef.current, {
        y: -10,
        duration: 0.6,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }
  }, []);
  return (
    <section className="relative py-32 md:py-48 bg-[#EAE8E4] text-black overflow-hidden flex flex-col items-center justify-center min-h-[70vh]">
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          {/* Mixed Media Headline */}
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[1.1] mb-8">
            <span>Constructing</span>

            {/* Inline Visual: Avatar Group Placeholder */}
            <span className="inline-flex -space-x-4 mx-4 align-middle">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-gray-200 overflow-hidden bg-gray-300"
                >
                  <img
                    src={`https://images.unsplash.com/photo-${1500000000000 + i}?w=100&h=100&fit=crop`}
                    alt="Avatar"
                    className="w-full h-full object-cover grayscale"
                  />
                </div>
              ))}
            </span>

            <span>Digital</span>
            <br />
            <span
              ref={textRef}
              className="font-serif italic font-light text-gray-500 inline-block overflow-hidden align-bottom"
            >
              {"Narratives".split("").map((char, index) => (
                <span
                  key={index}
                  className="inline-block translate-y-full opacity-0"
                >
                  {char}
                </span>
              ))}
            </span>

            {/* Inline Visual: Icon/Graphic */}
            <span
              ref={arrowRef}
              className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-blue-600 text-white mx-4 align-middle rotate-12"
            >
              <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8" />
            </span>

            <span>That Scale.</span>
          </h2>

          <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed mb-12">
            We blend strategic insight with artistic direction to build brands
            that don't just exist, but resonate.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
