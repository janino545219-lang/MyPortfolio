import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ExternalLink, X } from 'lucide-react';

const certifications = [
  {
    title: "Databases",
    issuer: "IT Specialist — CertNexus",
    date: "October 1, 2025",
    credentialId: "EE9p-DwzP",
    verifyUrl: "https://verify.certiport.com",
    image: "/certificates/cert-databases.jpg",
    color: "#4E85BF",
  },
  {
    title: "HTML and CSS",
    issuer: "IT Specialist — CertNexus",
    date: "May 20, 2026",
    credentialId: "EE9p-DwzP",
    verifyUrl: "https://verify.certiport.com",
    image: "/certificates/cert-html-css.jpg",
    color: "#89AACC",
  },
  {
    title: "Networking",
    issuer: "IT Specialist — CertNexus",
    date: "May 20, 2026",
    credentialId: "EE9p-DwzP",
    verifyUrl: "https://verify.certiport.com",
    image: "/certificates/cert-networking.jpg",
    color: "#5A9BD5",
  },
];

export const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState<number | null>(null);

  return (
    <>
      <section id="certifications" className="bg-bg py-16 md:py-24">
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
                <span className="text-xs text-muted uppercase tracking-[0.3em]">
                  Certifications
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl text-text-primary tracking-tight">
                Professional{" "}
                <span className="font-display italic">credentials</span>
              </h2>
              <p className="text-muted mt-4 max-w-md">
                Industry-recognized certifications validating my technical
                expertise and commitment to professional growth.
              </p>
            </div>
          </motion.div>

          {/* Certificate Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.15,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                onClick={() => setSelectedCert(i)}
                className="group relative bg-surface/30 hover:bg-surface border border-stroke hover:border-stroke/60 rounded-3xl overflow-hidden transition-all duration-500 cursor-pointer"
              >
                {/* Glowing top border on hover */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${cert.color}, transparent)`,
                  }}
                />

                {/* Certificate Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={cert.image}
                    alt={`${cert.title} Certificate`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-bg/60 opacity-0 group-hover:opacity-100 backdrop-blur-sm transition-all duration-500 flex items-center justify-center">
                    <div className="p-[1px] rounded-full accent-gradient">
                      <div className="bg-white text-black px-5 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                        <span>View Certificate</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5 md:p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg md:text-xl text-text-primary font-medium group-hover:text-white transition-colors duration-300 truncate">
                        {cert.title}
                      </h3>
                      <p className="text-sm text-muted mt-1">{cert.issuer}</p>
                    </div>
                    <div
                      className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center border border-stroke group-hover:border-transparent transition-colors relative"
                    >
                      <span className="absolute inset-0 accent-gradient rounded-full opacity-0 group-hover:opacity-100 -z-10 transition-opacity" />
                      <span className="absolute inset-[1px] bg-bg rounded-full -z-10 opacity-0 group-hover:opacity-100" />
                      <Award
                        size={18}
                        className="text-muted group-hover:text-white transition-colors"
                      />
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-stroke/50 flex items-center justify-between">
                    <span className="text-xs text-muted">{cert.date}</span>
                    <span className="text-xs text-muted font-mono">
                      {cert.credentialId}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedCert !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
            onClick={() => setSelectedCert(null)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />

            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative max-w-3xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute -top-12 right-0 sm:top-4 sm:right-4 z-10 w-10 h-10 rounded-full bg-surface/80 border border-stroke flex items-center justify-center text-muted hover:text-white hover:bg-surface transition-all"
              >
                <X size={18} />
              </button>

              {/* Certificate Image */}
              <div className="rounded-2xl overflow-hidden border border-stroke/30 shadow-2xl shadow-black/50">
                <img
                  src={certifications[selectedCert].image}
                  alt={`${certifications[selectedCert].title} Certificate`}
                  className="w-full h-auto"
                />
              </div>

              {/* Info Bar */}
              <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 px-1">
                <div>
                  <h3 className="text-lg text-text-primary font-medium">
                    {certifications[selectedCert].title}
                  </h3>
                  <p className="text-sm text-muted">
                    {certifications[selectedCert].issuer} •{" "}
                    {certifications[selectedCert].date}
                  </p>
                </div>
                <a
                  href={certifications[selectedCert].verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted hover:text-white transition-colors group"
                >
                  <span>Verify</span>
                  <ExternalLink
                    size={14}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
