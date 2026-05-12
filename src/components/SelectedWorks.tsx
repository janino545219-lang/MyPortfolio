import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    title: "Hotel Management",
    category: "System Dashboard",
    span: "md:col-span-7",
    image: "/system_app_dashboard.png"
  },
  {
    title: "CRUD App",
    category: "Foundational",
    span: "md:col-span-5",
    image: "/modern_landing_page.png"
  },
  {
    title: "Library System",
    category: "Modern UI/UX",
    span: "md:col-span-5",
    image: "/portfolio_mockup.png" // using placeholder
  },
  {
    title: "IT20 Architecture",
    category: "Complex Logic",
    span: "md:col-span-7",
    image: "/portfolio_mockup.png"
  }
];

export const SelectedWorks = () => {
  return (
    <section id="work" className="bg-bg py-12 md:py-16">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12"
        >
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-px bg-stroke"></div>
              <span className="text-xs text-muted uppercase tracking-[0.3em]">Selected Work</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-text-primary tracking-tight">
              Featured <span className="font-display italic">projects</span>
            </h2>
            <p className="text-muted mt-4 max-w-md">
              A selection of projects I've worked on, from concept to launch.
            </p>
          </div>
          
          <a href="#" className="hidden md:inline-flex items-center gap-2 group relative rounded-full px-6 py-3 mt-8 md:mt-0 overflow-hidden text-sm">
            <span className="absolute inset-0 accent-gradient opacity-0 group-hover:opacity-100 -z-10 transition-opacity" style={{ padding: '1px' }}>
              <span className="absolute inset-[1px] bg-bg rounded-full"></span>
            </span>
            <span className="relative z-10 text-text-primary flex items-center gap-2">
              View all work <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
          {projects.map((project, i) => (
            <div 
              key={i} 
              className={`group relative overflow-hidden bg-surface border border-stroke rounded-3xl aspect-[4/3] md:aspect-auto md:min-h-[400px] ${project.span}`}
            >
              {/* Background Image */}
              <img 
                src={project.image} 
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Halftone Overlay */}
              <div 
                className="absolute inset-0 opacity-20 mix-blend-multiply"
                style={{
                  backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
                  backgroundSize: '4px 4px'
                }}
              />

              {/* Hover Darken */}
              <div className="absolute inset-0 bg-bg/70 opacity-0 group-hover:opacity-100 backdrop-blur-lg transition-all duration-500" />

              {/* Hover Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-95 group-hover:scale-100">
                <div className="p-[1px] rounded-full accent-gradient mb-4">
                  <div className="bg-white text-black px-6 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                    View — <span className="font-display italic text-base">{project.title}</span>
                  </div>
                </div>
                <p className="text-white/70 text-sm tracking-wider uppercase">{project.category}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 flex justify-center md:hidden">
          <a href="#" className="inline-flex items-center gap-2 group relative rounded-full px-6 py-3 overflow-hidden text-sm border border-stroke">
            <span className="text-text-primary flex items-center gap-2">
              View all work <ArrowRight size={14} />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};
