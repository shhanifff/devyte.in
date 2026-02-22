"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { projects as allProjects } from "@/lib/projects";

// Only show first 3 projects on home page
const projects = allProjects.slice(0, 3);

export function Work() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scrolling logic for mobile
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let intervalId: NodeJS.Timeout;

    const startAutoScroll = () => {
      intervalId = setInterval(() => {
        if (
          scrollContainer.scrollLeft + scrollContainer.clientWidth >=
          scrollContainer.scrollWidth - 10
        ) {
          scrollContainer.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollContainer.scrollBy({ left: 300, behavior: "smooth" });
        }
      }, 3000);
    };

    // Only auto-scroll on small screens (mobile/tablet)
    const handleResize = () => {
      clearInterval(intervalId);
      if (window.innerWidth < 768) {
        startAutoScroll();
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => {
      clearInterval(intervalId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      id="work"
      className="py-20 bg-black text-white relative overflow-hidden min-h-screen flex flex-col justify-between"
    >
      {/* Header */}
      <div className="container mx-auto px-6 mb-12 flex justify-between items-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-sm font-medium tracking-widest uppercase text-white/50"
        >
          Selected Works
        </motion.h2>
      </div>

      {/* Horizontal Gallery */}
      <div
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto px-6 md:px-12 pb-12 scrollbar-hide snap-x snap-mandatory"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-shrink-0 w-[85vw] md:w-[30vw] snap-center group cursor-pointer"
          >
            {/* Image Container */}
            <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-gray-900">
              <div className="absolute inset-0 bg-white/5 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-light tracking-wider mb-2 relative inline-block">
                {project.title}
                <span className="absolute left-0 -bottom-1 w-full h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left" />
              </h3>
              <p className="text-xs md:text-sm text-white/40 tracking-widest uppercase font-medium">
                {project.category}
              </p>
            </div>
          </motion.div>
        ))}
        {/* Spacer for right padding */}
        <div className="w-1 md:w-12 flex-shrink-0" />
      </div>

      {/* Footer / Navigation */}
      <div className="container mx-auto px-6 mt-12 md:mt-auto relative z-10 border-t border-white/10 pt-8 flex items-end justify-end">
        {/* Title & Controls */}
        <div className="text-right w-full md:w-auto flex flex-col items-end">
          <Link href="/work" className="group/works">
            <h2 className="text-7xl md:text-9xl font-light tracking-tight uppercase leading-none md:-mb-4 transition-colors duration-500 group-hover/works:text-blue-500">
              WORKS
            </h2>
          </Link>
        </div>
      </div>
    </section>
  );
}
