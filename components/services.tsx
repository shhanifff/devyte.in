"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    id: "01",
    title: "Web & Mobile Development",
    description:
      "Crafting high-performance websites and intuitive mobile applications designed for seamless user experiences and business growth.",
  },
  {
    id: "02",
    title: "GMB Optimization",
    description:
      "Dominating local search rankings with expert Google My Business optimization and strategic local SEO to drive more foot traffic.",
  },
  {
    id: "03",
    title: "Search Engine Optimization",
    description:
      "Precision-targeted SEO strategies and technical audits to increase organic visibility and scale your digital authority across search engines.",
  },
  {
    id: "04",
    title: "Meta Ads Management",
    description:
      "Results-driven Facebook and Instagram advertising campaigns designed to maximize ROI and connect your brand with the right audience.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-[#EAE8E4] text-black">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border-t border-black/10">
          {/* Left Column - Branding & Image */}
          <div className="border-r border-black/10 flex flex-col justify-between pt-12 pr-0 lg:pr-12 pb-12 lg:pb-0">
            <div>
              <motion.h2
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-serif mb-8 tracking-tight"
              >
                AT <span className="font-sans font-bold">DEVYTE</span> & CO.,
              </motion.h2>
              <p className="text-black/70 text-lg md:text-xl max-w-sm leading-relaxed mb-16">
                We believe digital presence is more than just aesthetics — it's
                about creating systems that inspire, function beautifully, and
                reflect the brands that live within them.
              </p>
            </div>

            <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-200 mt-auto group">
              {/* Placeholder for editorial image */}
              <div className="absolute inset-0 bg-[url('https://i.pinimg.com/1200x/cd/43/84/cd4384017bb5b50aa2dec8ec0621f171.jpg')] bg-cover bg-center transition-transform duration-700 " />
            </div>
          </div>

          {/* Right Column - Service Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`p-8 md:p-12 border-b border-black/10 flex flex-col justify-between min-h-[300px] group hover:bg-white/50 transition-colors cursor-pointer ${
                  index % 2 === 0 ? "md:border-r" : ""
                }`}
              >
                <div className="flex justify-between items-start mb-8">
                  <p className="text-sm font-medium text-black/40 uppercase tracking-wider">
                    Service
                  </p>
                  <span className="text-4xl md:text-5xl font-serif text-black/80 font-light group-hover:scale-110 transition-transform origin-top-right">
                    {service.id}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-black/60 leading-relaxed text-sm md:text-base">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}

            {/* Slot 6 - CTA Block */}
            <div className="bg-[#2A2A2A] text-white p-8 md:p-12 border-b border-black/10 flex flex-col justify-between min-h-[300px] cursor-pointer group overflow-hidden relative">
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div className="flex justify-between items-start">
                  <p className="text-sm font-medium text-white/40 uppercase tracking-wider">
                    Inquire
                  </p>
                  <ArrowUpRight className="w-8 h-8 text-white/80 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4">Start a Project</h3>
                  <p className="text-white/60 leading-relaxed text-sm md:text-base mb-6">
                    Design isn't just what you see — it's how a brand lives with
                    you.
                  </p>
                  <span className="inline-block border-b border-white/30 pb-1 text-sm uppercase tracking-widest group-hover:border-white transition-colors">
                    Contact Us
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
