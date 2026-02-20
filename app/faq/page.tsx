import { Navbar } from "@/components/navbar";
import { FAQ } from "@/components/faq";
import { Footer } from "@/components/footer";
import { CTA } from "@/components/cta";

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      <Navbar />
      <div className="pt-20">
        <FAQ />
      </div>
      <CTA />
      <Footer />
    </main>
  );
}
