import { Navbar } from "@/components/navbar";
import { Services } from "@/components/services";
import { Footer } from "@/components/footer";
import { CTA } from "@/components/cta";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#EAE8E4] text-black selection:bg-blue-500/30">
      <Navbar />
      <Services />
      <CTA />
      <Footer />
    </main>
  );
}
