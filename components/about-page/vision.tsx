export function AboutVision() {
  return (
    <section className="py-32 bg-black text-white relative isolate overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Number */}
        <div className="mb-20 border-b border-white/20 pb-8 flex justify-between items-end">
          <span className="text-sm font-medium tracking-widest uppercase text-white/50 bg-white/5 px-3 py-1 rounded-full">
            Section 1
          </span>
          <h2 className="text-9xl font-bold leading-none tracking-tighter opacity-20 select-none">
            01
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-20">
          {/* Title */}
          <div className="animate-in fade-in slide-in-from-left-5 duration-700">
            <h3 className="text-6xl md:text-8xl font-light tracking-tight leading-none mb-6">
              Vision & <br /> Mission
            </h3>
          </div>

          {/* Content */}
          <div className="space-y-12 animate-in fade-in slide-in-from-right-5 duration-700">
            <div>
              <h4 className="text-xl font-medium mb-4 flex items-center gap-3">
                <span className="w-2 h-2 bg-blue-500 rounded-full" />
                Our Vision
              </h4>
              <p className="text-2xl text-white/70 font-light leading-relaxed">
                As a premier web development company in Kerala, our vision is to
                merge artistic expression with technical precision, creating
                digital destinations that redefine industry standards in India.
              </p>
            </div>

            <div className="h-px w-full bg-white/10" />

            <div>
              <h4 className="text-xl font-medium mb-4 flex items-center gap-3">
                <span className="w-2 h-2 bg-purple-500 rounded-full" />
                Our Mission
              </h4>
              <p className="text-lg text-white/50 leading-relaxed max-w-md">
                We strive to empower brands with tools that scale. From
                technical SEO services in India to advanced Meta ads management,
                our mission is to build future-proof ecosystems for every
                ambitious business.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="mt-24 border-t border-white/10 pt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left animate-in fade-in duration-1000">
          <div>
            <h4 className="text-4xl md:text-5xl font-light mb-2">40+</h4>
            <p className="text-white/50 text-sm tracking-widest uppercase">
              Global Clients
            </p>
          </div>
          <div>
            <h4 className="text-4xl md:text-5xl font-light mb-2">150+</h4>
            <p className="text-white/50 text-sm tracking-widest uppercase">
              Successful Projects
            </p>
          </div>
          <div>
            <h4 className="text-4xl md:text-5xl font-light mb-2">5+</h4>
            <p className="text-white/50 text-sm tracking-widest uppercase">
              Years of Experience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
