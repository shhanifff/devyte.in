import { projects } from "@/lib/projects";
import { ArrowUpRight } from "lucide-react";

export function WorkGrid() {
  return (
    <section className="bg-black text-white min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="mb-20 animate-in fade-in slide-in-from-bottom-5 duration-700">
          <h1 className="text-7xl md:text-9xl font-light tracking-tighter uppercase mb-8">
            Work
          </h1>
          <p className="text-xl md:text-2xl text-white/60 max-w-2xl font-light leading-relaxed">
            We partner with forward-thinking brands to create digital
            experiences that challenge the status quo and push the boundaries of
            design.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group cursor-pointer relative overflow-hidden aspect-[4/5] animate-in fade-in slide-in-from-bottom-10 duration-1000 ${
                index % 3 === 0 ? "md:col-span-2 md:aspect-[21/9]" : ""
              }`}
              style={{
                animationDelay: `${index * 150}ms`,
                animationFillMode: "both",
              }}
            >
              {/* Project Card */}
              <div className="relative w-full h-full overflow-hidden bg-zinc-900">
                {/* Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />

                {/* Overlay Appear on Hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-start p-8 md:p-12 backdrop-blur-[1px]">
                  <div className="text-left transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 w-full flex justify-between items-end">
                    <div>
                      <h3 className="text-3xl md:text-5xl font-light tracking-tighter uppercase mb-2">
                        {project.title}
                      </h3>
                      {project.domain && (
                        <p className="text-sm md:text-lg text-white/40 font-light tracking-widest lowercase">
                          {project.domain}
                        </p>
                      )}
                    </div>
                    <div className="hidden md:flex items-center gap-2 text-sm tracking-widest uppercase text-white/60">
                      <span>View Project</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Perspective Border Overlay (Subtle) */}
                <div className="absolute inset-0 border border-white/5 pointer-events-none group-hover:border-white/10 transition-colors duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
