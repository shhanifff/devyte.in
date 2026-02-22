import { Search, Globe, MapPin, BarChart3, Fingerprint } from "lucide-react";

const keywords = [
  {
    category: "Development",
    icon: <Globe className="w-6 h-6" />,
    items: [
      "Web development company in Kerala",
      "Website development company in India",
      "Custom website development services",
      "Mobile app development company Kerala",
      "React web development agency",
      "Next.js development company India",
      "E-commerce website development Kerala",
    ],
  },
  {
    category: "Design",
    icon: <Fingerprint className="w-6 h-6" />,
    items: [
      "UI UX design company Kerala",
      "Web UI design services India",
      "Mobile app UI UX design agency",
      "SaaS UI design company",
      "Website redesign services",
    ],
  },
  {
    category: "Marketing",
    icon: <Search className="w-6 h-6" />,
    items: [
      "SEO company in Kerala",
      "Technical SEO services India",
      "On-page SEO services",
      "Local SEO services Kerala",
      "Google ranking services India",
      "GMB profile optimization Kerala",
    ],
  },
  {
    category: "Performance",
    icon: <BarChart3 className="w-6 h-6" />,
    items: [
      "Facebook ads agency Kerala",
      "Meta ads management services",
      "Instagram ads agency India",
      "Paid ads management Kerala",
      "Digital marketing agency Trivandrum",
      "SEO services Kochi",
    ],
  },
];

export function SEOSection() {
  return (
    <section className="py-24 md:py-40 bg-black overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-20 animate-in fade-in slide-in-from-bottom-5 duration-700">
          <h2 className="text-4xl md:text-6xl font-light tracking-tighter uppercase mb-6">
            Digital Dominance <br />
            <span className="text-white/30 italic">Across the Grid.</span>
          </h2>
          <p className="text-lg md:text-xl text-white/40 font-light leading-relaxed">
            From the heart of Kerala to the global stage. We strategically
            position brands using high-intent keywords and data-driven
            performance marketing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
          {keywords.map((group, groupIndex) => (
            <div
              key={group.category}
              className="space-y-6 animate-in fade-in slide-in-from-bottom-5 duration-700"
              style={{
                animationDelay: `${groupIndex * 100}ms`,
                animationFillMode: "both",
              }}
            >
              <div className="flex items-center gap-3 text-blue-500">
                {group.icon}
                <h3 className="text-xs uppercase tracking-widest font-medium text-white/60">
                  {group.category}
                </h3>
              </div>
              <ul className="space-y-3">
                {group.items.map((keyword, i) => (
                  <li
                    key={i}
                    className="text-sm text-white/30 font-light hover:text-white transition-colors cursor-default"
                  >
                    {keyword}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Local Tags Cloud */}
        <div className="mt-24 pt-12 border-t border-white/5 flex flex-wrap gap-x-8 gap-y-4 items-center justify-center opacity-40 grayscale hover:grayscale-0 transition-all duration-1000 animate-in fade-in duration-1000">
          {[
            "Kozhikode",
            "Kochi",
            "Malappuram",
            "Trivandrum",
            "Kerala",
            "India",
            "Middle East",
          ].map((tag) => (
            <span
              key={tag}
              className="text-[10px] sm:text-xs uppercase tracking-[0.3em] font-medium border border-white/10 px-4 py-2 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
