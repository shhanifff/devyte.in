import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      <Navbar />
      <div className="container mx-auto px-6 pt-32 pb-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-12">
            Privacy Policy
          </h1>

          <div className="space-y-8 text-white/70 text-lg leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 italic">
                1. Information We Collect
              </h2>
              <p>
                We collect information that you provide directly to us, such as
                when you fill out a contact form, subscribe to our newsletter,
                or communicate with us via email. This may include your name,
                email address, phone number, and any other information you
                choose to provide.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 italic">
                2. How We Use Your Information
              </h2>
              <p>
                We use the information we collect to provide, maintain, and
                improve our services, to communicate with you, and to develop
                new products and services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 italic">
                3. Data Security
              </h2>
              <p>
                We take reasonable measures to help protect information about
                you from loss, theft, misuse, and unauthorized access,
                disclosure, alteration, and destruction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 italic">
                4. Cookies
              </h2>
              <p>
                We use cookies and similar technologies to collect information
                about your browsing activities and to improve your experience on
                our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 italic">
                5. Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. If we make
                changes, we will notify you by revising the date at the top of
                the policy.
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
