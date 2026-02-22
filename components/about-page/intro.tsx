import { ArrowDownRight } from "lucide-react";

export function AboutIntro() {
  return (
    <section className="py-24 bg-gray-200 text-black overflow-hidden relative">
      <div className="container mx-auto px-6">
        {/* Top Badge */}
        <div className="mb-12 animate-in fade-in duration-700">
          <span className="inline-block px-4 py-1 rounded-full border border-black/10 text-xs font-medium tracking-widest uppercase">
            Welcome
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div className="animate-in fade-in slide-in-from-left-5 duration-700">
            <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-8 leading-[0.9]">
              We are{" "}
              <span className="font-serif italic font-normal">Devyte.</span>{" "}
              <br />
              Architects of <br />
              Digital Reality.
            </h1>
            <p className="text-lg text-black/60 leading-relaxed max-w-md mb-12">
              Based in the digital heart of Kerala, we engineer high-performance
              web ecosystems and targeted marketing strategies that transform
              vague ideas into market-dominant realities.
            </p>
            <div className="flex items-center gap-2 text-sm font-medium tracking-wide uppercase border-b border-black pb-1 w-fit cursor-pointer hover:opacity-50 transition-opacity">
              Get to know us <ArrowDownRight className="w-4 h-4" />
            </div>
          </div>

          {/* Right Content - Abstract Composition */}
          <div className="relative h-[500px] w-full bg-gray-100 rounded-lg overflow-hidden animate-in fade-in duration-1000">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
              alt="Office Space"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-10 right-10 w-40 h-56 bg-white p-2 shadow-xl rotate-6 transform hover:rotate-0 transition-transform duration-500">
              <img
                src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop"
                alt="Detail"
                className="w-full h-full object-cover grayscale"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
