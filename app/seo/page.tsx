import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CTA } from "@/components/cta";
import { SEOSection } from "@/components/seo-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Keywords & Digital Strategy | Devyte",
  description:
    "A comprehensive list of high-intent keywords and digital marketing strategies for Devyte Digital Agency.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function SEOPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      <Navbar />

      {/* Hero Section for SEO Page */}
      <section className="pt-40 pb-20 border-b border-white/5">
        <div className="container mx-auto px-6">
          <h1 className="text-6xl md:text-8xl font-light tracking-tighter uppercase mb-8">
            SEO <br />
            <span className="text-white/30 italic">Repository.</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/40 font-light max-w-2xl leading-relaxed">
            A dedicated index of high-performing keywords, local SEO tags, and
            commercial intent phrases that power Devyte's search engine
            dominance.
          </p>
        </div>
      </section>

      {/* Reuse the SEOSection component for the content grid */}
      <SEOSection />

      <section className="py-20 border-t border-white/5 bg-zinc-950/20">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-light tracking-widest uppercase mb-12 text-white/60">
            Search Strategy Overview
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-blue-500 text-sm uppercase tracking-widest mb-4">
                Location Targeting
              </h3>
              <p className="text-white/30 font-light leading-relaxed">
                Hyper-local targeting across Kerala (Kozhikode, Kochi,
                Malappuram, Trivandrum) ensures we capture users with high
                conversion intent in our primary operating regions.
              </p>
            </div>
            <div>
              <h3 className="text-blue-500 text-sm uppercase tracking-widest mb-4">
                Commercial Intent
              </h3>
              <p className="text-white/30 font-light leading-relaxed">
                We prioritize "Commercial Intent" keywords over informational
                ones, focusing on service-ready users looking for "Web
                development company" or "SEO services".
              </p>
            </div>
            <div>
              <h3 className="text-blue-500 text-sm uppercase tracking-widest mb-4">
                Brand Authority
              </h3>
              <p className="text-white/30 font-light leading-relaxed">
                Dominating branding keywords like "Devyte Kerala" and "Devyte
                Digital Agency" to ensure zero leakage when customers search for
                us directly.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
