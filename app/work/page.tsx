import { Navbar } from "@/components/navbar";
import { WorkGrid } from "@/components/work-grid";
import { Footer } from "@/components/footer";
import { CTA } from "@/components/cta";

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      <Navbar />
      <WorkGrid />
      <CTA />
      <Footer />
    </main>
  );
}
