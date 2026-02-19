import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ContactForm } from "@/components/contact-form";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      <Navbar />

      <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center gap-16 md:gap-20">
            {/* Header Content */}
            <div className="text-center space-y-8">
              <div>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
                  Let's create <br />
                  <span className="text-blue-500">something</span> iconic.
                </h1>
                <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
                  Ready to elevate your brand? We're here to help you build the
                  extraordinary. Reach out and let's start the conversation.
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                <a
                  href="mailto:devyte.digital@gmail.com"
                  className="flex flex-col items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="text-center">
                    <h3 className="text-sm text-white/40 uppercase tracking-widest mb-1">
                      Email Us
                    </h3>
                    <p className="text-lg font-light">
                      devyte.digital@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="tel:+910000000000"
                  className="flex flex-col items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="text-center">
                    <h3 className="text-sm text-white/40 uppercase tracking-widest mb-1">
                      Call Us
                    </h3>
                    <p className="text-lg font-light">+91 00000 00000</p>
                  </div>
                </a>

                <div className="flex flex-col items-center gap-4">
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="text-center">
                    <h3 className="text-sm text-white/40 uppercase tracking-widest mb-1">
                      Visit Us
                    </h3>
                    <p className="text-lg font-light">Available Worldwide</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="w-full">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
