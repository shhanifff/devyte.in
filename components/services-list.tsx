"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Smartphone,
  Search,
  MapPin,
  BarChart3,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    id: "01",
    title: "Web Development",
    icon: Globe,
    description:
      "Building high-performance e-commerce websites and custom web applications using React and Next.js.",
    details: [
      "Custom E-commerce Solutions",
      "Performance Optimization",
      "Headless CMS Integration",
      "Responsive Web Design",
    ],
  },
  {
    id: "02",
    title: "App Development",
    icon: Smartphone,
    description:
      "Native and cross-platform mobile applications designed for seamless user engagement and conversion.",
    details: [
      "iOS & Android Apps",
      "React Native Development",
      "UI/UX Design Systems",
      "API Architecture",
    ],
  },
  {
    id: "03",
    title: "SEO Strategy",
    icon: Search,
    description:
      "Technical SEO and Google ranking services to dominate search results and drive organic growth.",
    details: [
      "Technical SEO Audits",
      "Keyword Research & Strategy",
      "On-Page Optimization",
      "Strategic Link Building",
    ],
  },
  {
    id: "04",
    title: "GMB Growth",
    icon: MapPin,
    description:
      "Google My Business optimization to capture local audience and climb the maps effectively.",
    details: [
      "Local SEO Management",
      "Map Ranking Strategy",
      "GMB Profile Setup",
      "Review Strategy",
    ],
  },
  {
    id: "05",
    title: "Meta Advertising",
    icon: BarChart3,
    description:
      "Expert Meta ads management services targeted to scale your business ROI and brand awareness.",
    details: [
      "Facebook & Instagram Ads",
      "Campaign Management",
      "Creative Ad Strategy",
      "Data Analytics & Reporting",
    ],
  },
];

export function ServicesList() {
  return (
    <section className="bg-[#EAE8E4] pt-32 pb-20">
      <div className="container mx-auto px-6">
        <header className="mb-24 max-w-4xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] uppercase tracking-[0.4em] font-bold text-black/30 mb-8 block"
          >
            Our Capabilities
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none mb-12"
          >
            Digital <br />
            Excellence.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-black/60 max-w-2xl leading-relaxed"
          >
            We combine high-end design with technical precision to build digital
            systems that propel brands forward.
          </motion.p>
        </header>

        <div className="space-y-12">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white/40 hover:bg-white transition-all duration-700 p-8 md:p-16 border border-black/5 flex flex-col lg:flex-row gap-12 lg:items-center relative overflow-hidden"
            >
              {/* Number Background */}
              <span className="absolute right-8 top-12 text-9xl font-bold text-black/5 group-hover:text-black/10 transition-colors pointer-events-none">
                {service.id}
              </span>

              <div className="lg:w-1/3">
                <div className="w-16 h-16 bg-black text-white flex items-center justify-center mb-8">
                  <service.icon className="w-8 h-8" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                  {service.title}
                </h2>
                <p className="text-black/60 leading-relaxed text-sm md:text-base pr-4">
                  {service.description}
                </p>
              </div>

              <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.details.map((detail) => (
                  <div key={detail} className="flex items-center gap-3">
                    <div className="w-1 h-1 bg-black/30 rounded-full" />
                    <span className="text-sm font-medium text-black/80 uppercase tracking-wider">
                      {detail}
                    </span>
                  </div>
                ))}
              </div>

              <div className="lg:w-auto lg:ml-auto">
                <Link
                  href="/contact"
                  className="w-16 h-16 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-500"
                >
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
