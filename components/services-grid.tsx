import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    id: "01",
    title: "Web Development",
    description:
      "As a leading website development company in India, we craft high-performance, responsive websites. Our custom website development services in Kerala ensure your digital cornerstone stands out.",
    tags: ["Next.js", "React", "Next.js Development Company"],
  },
  {
    id: "02",
    title: "App Development",
    description:
      "A premier mobile app development company in Kerala, building intuitive experiences from iOS to Android. Expertise as a React web development agency power our cross-platform solutions.",
    tags: ["Flutter", "Mobile", "React Native"],
  },
  {
    id: "03",
    title: "SEO Strategy",
    description:
      "Leading SEO company in Kerala providing technical SEO services in India. Our precision-engineered search optimization ensures your brand dominates search results.",
    tags: ["Technical SEO", "On-page SEO", "Growth"],
  },
  {
    id: "04",
    title: "GMB Growth",
    description:
      "Experts in GMB profile optimization in Kerala. We capture local audiences with specialized local business SEO strategies to drive traffic to your doorstep.",
    tags: ["Local SEO", "GMB Optimization", "Maps"],
  },
  {
    id: "05",
    title: "Meta Advertising",
    description:
      "A results-driven Facebook ads agency in Kerala and Instagram ads agency in India. We deliver strategically targeted Meta ads management services that scale ROI.",
    tags: ["Meta Ads", "ROI", "Paid Social"],
  },
];

export function ServicesGrid() {
  return (
    <section className="bg-black text-white min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="mb-24 animate-in fade-in slide-in-from-bottom-5 duration-700">
          <h1 className="text-7xl md:text-9xl font-light tracking-tighter uppercase mb-10">
            Capabilities
          </h1>
          <p className="text-xl md:text-3xl text-white/50 max-w-3xl font-light leading-snug">
            We leverage cutting-edge technology and design thinking to transform
            ambitious ideas into market-leading digital products.
          </p>
        </div>

        {/* Services Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-1">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="md:col-span-12 group cursor-pointer border-t border-white/10 py-12 md:py-20 flex flex-col md:flex-row justify-between items-start md:items-center hover:bg-zinc-900/40 transition-colors px-4 -mx-4 rounded-xl animate-in fade-in slide-in-from-bottom-5 duration-700"
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: "both",
              }}
            >
              <div className="flex items-start gap-8 md:gap-16 flex-1">
                <span className="text-xl md:text-2xl font-light text-white/30 pt-1">
                  {service.id}
                </span>
                <div className="max-w-2xl">
                  <h3 className="text-4xl md:text-7xl font-light tracking-tight group-hover:text-blue-500 transition-colors mb-6">
                    {service.title}
                  </h3>
                  <p className="text-lg md:text-xl text-white/40 font-light leading-relaxed max-w-xl">
                    {service.description}
                  </p>
                </div>
              </div>

              <div className="mt-8 md:mt-0 flex flex-col items-end gap-6">
                <div className="flex gap-3">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-1.5 rounded-full border border-white/10 text-xs tracking-widest uppercase text-white/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                  <ArrowUpRight className="w-6 h-6" />
                </div>
              </div>
            </div>
          ))}

          {/* Final Border */}
          <div className="md:col-span-12 border-t border-white/10" />
        </div>

        {/* Process/CTA Preview */}
        <div className="mt-40 grid grid-cols-1 md:grid-cols-2 gap-20 animate-in fade-in duration-1000">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-6xl font-light tracking-tight uppercase">
              Our Process is <br />
              <span className="text-white/40 italic">the Product.</span>
            </h2>
            <Link href="/contact" className="inline-block group">
              <span className="text-lg tracking-widest uppercase border-b border-white/20 pb-2 group-hover:border-white transition-colors">
                Start your journey
              </span>
            </Link>
          </div>
          <div className="text-white/40 text-lg md:text-xl font-light leading-relaxed">
            From the initial deep-dive discovery to post-launch optimization,
            our iterative framework ensures every decision is backed by data and
            executed with precision. We don't just build; we solve.
          </div>
        </div>
      </div>
    </section>
  );
}
