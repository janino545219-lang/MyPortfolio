import { motion } from 'framer-motion';

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "15+", label: "Projects Done" },
  { value: "100%", label: "Client Satisfaction" }
];

export const Stats = () => {
  return (
    <section className="bg-bg py-16 md:py-24 border-y border-stroke">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6 divide-y md:divide-y-0 md:divide-x divide-stroke">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center text-center pt-8 md:pt-0 first:pt-0"
            >
              <h3 className="text-6xl md:text-7xl lg:text-8xl font-display text-text-primary mb-2 tabular-nums">
                {stat.value}
              </h3>
              <p className="text-muted uppercase tracking-[0.2em] text-xs sm:text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
