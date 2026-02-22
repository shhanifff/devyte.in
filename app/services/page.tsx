import { Navbar } from "@/components/navbar";
import { ServicesGrid } from "@/components/services-grid";
import { Footer } from "@/components/footer";
import { CTA } from "@/components/cta";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      <Navbar />
      <ServicesGrid />
      <CTA />
      <Footer />
    </main>
  );
}
