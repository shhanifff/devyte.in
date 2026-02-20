"use client";

import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "NOTES ON VISION",
    category: "12 IMAGES",
    image:
      "https://i.pinimg.com/1200x/4d/50/d0/4d50d052a964e782a28f904664c70b4e.jpg",
  },
  {
    id: 2,
    title: "UNDESIGNATED",
    category: "08 IMAGES",
    image:
      "https://i.pinimg.com/1200x/a7/24/cf/a724cfd94f4e455e133d30c597135625.jpg",
  },
  {
    id: 3,
    title: "FLORENCE",
    category: "23 IMAGES",
    image:
      "https://i.pinimg.com/1200x/74/af/76/74af76af3c4a3c762db3f8dc50005ebf.jpg",
  },
];

export function Work() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let intervalId: NodeJS.Timeout;

    const startAutoScroll = () => {
      // Only auto-scroll on small screens (e.g., width < 768px)
      if (window.innerWidth < 768) {
        intervalId = setInterval(() => {
          if (scrollContainer) {
            const maxScroll =
              scrollContainer.scrollWidth - scrollContainer.clientWidth;
            if (scrollContainer.scrollLeft >= maxScroll - 1) {
              scrollContainer.scrollTo({ left: 0, behavior: "smooth" });
            } else {
              scrollContainer.scrollBy({ left: 300, behavior: "smooth" });
            }
          }
        }, 3000); // Scroll every 3 seconds
      }
    };

    startAutoScroll();

    const handleResize = () => {
      clearInterval(intervalId);
      startAutoScroll();
    };

    window.addEventListener("resize", handleResize);
    return () => {
      clearInterval(intervalId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      id="work"
      className="pt-0 pb-20 bg-black text-white relative overflow-hidden min-h-[80vh] flex flex-col justify-between"
    >
      {/* Header */}
      <div className="container mx-auto px-6 mb-16 flex justify-between items-center relative z-10">
        <h2 className="text-sm font-medium tracking-widest uppercase text-white/50">
          Selected Works
        </h2>
      </div>

      {/* Horizontal Gallery */}
      <div
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto md:justify-center px-6 md:px-12 pb-12 scrollbar-hide snap-x snap-mandatory"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-shrink-0 w-[85vw] md:w-[28vw] snap-center group cursor-pointer"
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
            <div className="text-center">
              <h3 className="text-lg md:text-xl font-bold tracking-wider mb-2 relative inline-block">
                {project.title}
                <span className="absolute left-0 -bottom-1 w-full h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left" />
              </h3>
              <p className="text-xs md:text-sm text-white/50 tracking-widest uppercase font-medium">
                {project.category}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer / Navigation */}
      <div className="container mx-auto px-6 mt-12 md:mt-auto relative z-10 border-t border-white/10 pt-8 flex items-end justify-end">
        <div className="text-right w-full md:w-auto flex flex-col items-end">
          <Link href="/work" className="group inline-block">
            <h2 className="text-6xl md:text-9xl font-light tracking-tight uppercase leading-none md:-mb-4 group-hover:text-blue-400 transition-colors duration-500">
              WORKS
            </h2>
          </Link>
        </div>
      </div>
    </section>
  );
}
