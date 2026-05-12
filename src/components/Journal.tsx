import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const journals = [
  {
    title: "Mastering React Animations with GSAP",
    date: "May 10, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=200&auto=format&fit=crop"
  },
  {
    title: "The Future of Web Development in 2026",
    date: "Apr 28, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=200&auto=format&fit=crop"
  },
  {
    title: "Building Dark Mode Portfolio Interfaces",
    date: "Apr 15, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=200&auto=format&fit=crop"
  },
  {
    title: "Optimizing Tailwind CSS for Production",
    date: "Mar 30, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1618477247222-ac60c647046e?q=80&w=200&auto=format&fit=crop"
  }
];

export const Journal = () => {
  return (
    <section className="bg-bg py-16 md:py-24">
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
              <span className="text-xs text-muted uppercase tracking-[0.3em]">Journal</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-text-primary tracking-tight">
              Recent <span className="font-display italic">thoughts</span>
            </h2>
            <p className="text-muted mt-4 max-w-md">
              Writing about design, engineering, and personal experiences.
            </p>
          </div>
          
          <a href="#" className="hidden md:inline-flex items-center gap-2 group relative rounded-full px-6 py-3 mt-8 md:mt-0 overflow-hidden text-sm">
            <span className="absolute inset-0 accent-gradient opacity-0 group-hover:opacity-100 -z-10 transition-opacity" style={{ padding: '1px' }}>
              <span className="absolute inset-[1px] bg-bg rounded-full"></span>
            </span>
            <span className="relative z-10 text-text-primary flex items-center gap-2">
              View all <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
        </motion.div>

        {/* Entries */}
        <div className="flex flex-col gap-4">
          {journals.map((journal, i) => (
            <motion.a
              key={i}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="group flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 p-4 rounded-[40px] sm:rounded-full bg-surface/30 hover:bg-surface border border-stroke transition-colors duration-300 relative overflow-hidden"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-full overflow-hidden">
                <img 
                  src={journal.image} 
                  alt={journal.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <div className="flex-1 px-2 sm:px-0">
                <h3 className="text-lg md:text-xl text-text-primary group-hover:text-white transition-colors duration-300">
                  {journal.title}
                </h3>
                <div className="flex items-center gap-3 mt-2 text-sm text-muted">
                  <span>{journal.date}</span>
                  <span className="w-1 h-1 rounded-full bg-stroke"></span>
                  <span>{journal.readTime}</span>
                </div>
              </div>

              <div className="hidden sm:flex w-12 h-12 shrink-0 rounded-full border border-stroke items-center justify-center group-hover:border-transparent relative mr-2 transition-all">
                <span className="absolute inset-0 accent-gradient rounded-full opacity-0 group-hover:opacity-100 -z-10"></span>
                <span className="absolute inset-[1px] bg-bg rounded-full -z-10 opacity-0 group-hover:opacity-100"></span>
                <ArrowRight size={18} className="text-muted group-hover:text-white group-hover:-rotate-45 transition-all" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
