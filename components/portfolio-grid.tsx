"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    id: 1,
    title: "NOTES ON VISION",
    category: "EDITORIAL / BRANDING",
    image:
      "https://images.unsplash.com/photo-1542272201-98782a20b8f4?q=80&w=1887&auto=format&fit=crop",
    style: "aspect-[3/4] md:col-span-1",
  },
  {
    id: 2,
    title: "UNDESIGNATED",
    category: "LIFESTYLE / PHOTOGRAPHY",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop",
    style: "aspect-square md:col-span-1",
  },
  {
    id: 3,
    title: "FLORENCE",
    category: "FASHION ART",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2020&auto=format&fit=crop",
    style: "aspect-[4/5] md:col-span-2",
  },
  {
    id: 4,
    title: "COHERENCE",
    category: "DIGITAL EXPERIENCE",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop",
    style: "aspect-video md:col-span-2",
  },
  {
    id: 5,
    title: "WESTERN",
    category: "CINEMATIC",
    image:
      "https://images.unsplash.com/photo-1529139574466-a302d20525a9?q=80&w=2576&auto=format&fit=crop",
    style: "aspect-[3/4] md:col-span-1",
  },
  {
    id: 6,
    title: "KINETIC",
    category: "MOTION DESIGN",
    image:
      "https://images.unsplash.com/photo-1550745679-32863836067b?q=80&w=2070&auto=format&fit=crop",
    style: "aspect-square md:col-span-1",
  },
];

export function PortfolioGrid() {
  return (
    <section className="bg-black text-white py-24">
      <div className="container mx-auto px-6">
        <header className="mb-20 md:mb-32">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-medium tracking-widest uppercase text-white/50 mb-4 block"
          >
            Portfolio
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none"
          >
            SELECTED <br />
            WORKS
          </motion.h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`group cursor-pointer ${project.style}`}
            >
              <div className="relative h-full overflow-hidden bg-white/5">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-700 z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Floating Info */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-sm font-medium tracking-widest uppercase text-white/50 mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold tracking-tight">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Visible Info for Mobile */}
              <div className="mt-4 md:hidden">
                <h3 className="text-xl font-bold tracking-tight">
                  {project.title}
                </h3>
                <p className="text-xs tracking-widest uppercase text-white/50">
                  {project.category}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
