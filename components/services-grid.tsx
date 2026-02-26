import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    id: "01",
    title: "Web & Mobile Development",
    description:
      "Devyte builds high-performance digital products. We specialize in custom website development using Next.js and React, alongside native and cross-platform mobile apps built for scale.",
    tags: ["Next.js", "React Native", "iOS & Android", "Custom UI/UX"],
  },
  {
    id: "02",
    title: "GMB Optimization",
    description:
      "Maximize your local visibility with expert Google My Business management. We optimize your profile to rank higher, attract more customers, and dominate local search results.",
    tags: ["Local SEO", "Profile Audit", "Review Management", "Map Rankings"],
  },
  {
    id: "03",
    title: "Search Engine Optimization",
    description:
      "Our technical SEO strategies drive organic growth. From keyword research and on-page optimization to technical audits, we ensure your brand stays ahead of the competition.",
    tags: ["Technical SEO", "On-Page SEO", "Backlink Strategy", "Analytics"],
  },
  {
    id: "04",
    title: "Meta Ads Management",
    description:
      "Accelerate your growth with precision-targeted Meta ads. We manage Facebook and Instagram campaigns that focus on high-intent audiences and maximum ROI.",
    tags: ["Facebook Ads", "Instagram Ads", "Ad Creative", "ROI Focused"],
  },
];

export function ServicesGrid() {
  return (
    <section className="bg-black text-white min-h-screen pt-24 md:pt-32 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header Section */}
        <div className="mb-16 md:mb-24 animate-in fade-in slide-in-from-bottom-5 duration-700">
          <h1 className="text-5xl sm:text-7xl md:text-9xl font-light tracking-tighter uppercase mb-6 md:mb-10">
            Capabilities
          </h1>
          <p className="text-lg sm:text-xl md:text-3xl text-white/50 max-w-3xl font-light leading-snug">
            Devyte combines cutting-edge technology with design thinking to
            transform ambitious ideas into market-leading digital products. From
            web development in Kerala to global digital marketing.
          </p>
        </div>

        {/* Services Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-1">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="md:col-span-12 group cursor-pointer border-t border-white/10 py-10 md:py-20 flex flex-col md:flex-row justify-between items-start md:items-center hover:bg-zinc-900/40 transition-colors px-2 md:px-4 -mx-2 md:-mx-4 rounded-xl animate-in fade-in slide-in-from-bottom-5 duration-700"
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: "both",
              }}
            >
              <div className="flex items-start gap-4 md:gap-16 flex-1">
                <span className="text-lg md:text-2xl font-light text-white/30 pt-1">
                  {service.id}
                </span>
                <div className="max-w-2xl">
                  <h3 className="text-3xl sm:text-4xl md:text-7xl font-light tracking-tight group-hover:text-blue-500 transition-colors mb-4 md:mb-6">
                    {service.title}
                  </h3>
                  <p className="text-base md:text-xl text-white/40 font-light leading-relaxed max-w-xl">
                    {service.description}
                  </p>
                </div>
              </div>

              <div className="mt-8 md:mt-0 flex flex-col items-start md:items-end gap-6">
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 md:px-4 py-1.5 rounded-full border border-white/10 text-[10px] md:text-xs tracking-widest uppercase text-white/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                  <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6" />
                </div>
              </div>
            </div>
          ))}

          {/* Final Border */}
          <div className="md:col-span-12 border-t border-white/10" />
        </div>

        {/* Process/CTA Preview */}
        <div className="mt-24 md:mt-40 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 animate-in fade-in duration-1000">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-6xl font-light tracking-tight uppercase">
              Devyte Kerala <br />
              <span className="text-white/40 italic">Process.</span>
            </h2>
            <Link href="/contact" className="inline-block group">
              <span className="text-base md:text-lg tracking-widest uppercase border-b border-white/20 pb-2 group-hover:border-white transition-colors">
                Start your journey with Devyte
              </span>
            </Link>
          </div>
          <div className="text-white/40 text-base md:text-xl font-light leading-relaxed">
            Our iterative framework ensures every decision is backed by data.
            From SEO Kochi to custom React development India, we solve business
            challenges with design and tech excellence.
          </div>
        </div>

        {/* Hidden SEO Keyword Cluster */}
        <div className="sr-only">
          <h2>SEO Keywords and Locations</h2>
          <p>
            Digital solution company in Kerala, Digital solution company in
            India, Custom website development services, Mobile app development
            company Kerala, React web development agency, Next.js development
            company India, E-commerce website development Kerala, UI UX design
            company Kerala, SEO company in Kerala, Technical SEO services India,
            Local SEO services Kerala, GMB profile optimization Kerala, Facebook
            ads agency Kerala, Digital marketing agency Trivandrum, Website
            solution company Kozhikode, SEO services Kochi, App development
            company Malappuram.
          </p>
        </div>
      </div>
    </section>
  );
}
