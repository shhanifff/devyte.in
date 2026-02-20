import { Navbar } from "@/components/navbar";
import { PortfolioGrid } from "@/components/portfolio-grid";
import { Footer } from "@/components/footer";
import { CTA } from "@/components/cta";

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      <Navbar />
      <PortfolioGrid />
      <CTA />
      <Footer />
    </main>
  );
}
