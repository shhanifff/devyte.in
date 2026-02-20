import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      <Navbar />
      <div className="container mx-auto px-6 pt-32 pb-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-12">
            Terms & Conditions
          </h1>

          <div className="space-y-8 text-white/70 text-lg leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 italic">
                1. Agreement to Terms
              </h2>
              <p>
                By accessing or using our website, you agree to be bound by
                these Terms and Conditions and our Privacy Policy. If you do not
                agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 italic">
                2. Intellectual Property
              </h2>
              <p>
                All content on this website, including text, graphics, logos,
                and images, is the property of Devyte and is protected by
                intellectual property laws. You may not use, reproduce, or
                distribute any content without our prior written permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 italic">
                3. Use of Services
              </h2>
              <p>
                You agree to use our services only for lawful purposes and in
                accordance with these Terms and Conditions. You are responsible
                for any content you post or transmit through our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 italic">
                4. Limitation of Liability
              </h2>
              <p>
                In no event shall Devyte be liable for any direct, indirect,
                incidental, special, or consequential damages arising out of or
                in connection with your use of our website or services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 italic">
                5. Governing Law
              </h2>
              <p>
                These Terms and Conditions shall be governed by and construed in
                accordance with the laws of India, without regard to its
                conflict of law principles.
              </p>
            </section>

            <p className="pt-8 border-t border-white/10 italic">
              Last updated: February 20, 2026
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
