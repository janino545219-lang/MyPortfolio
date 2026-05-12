import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const explorations = [
  { id: 1, image: "/explorations/exp1.png", title: "Minimal Workspace" },
  { id: 2, image: "/explorations/exp2.png", title: "Glass Sculpture" },
  { id: 3, image: "/explorations/exp3.png", title: "Mobile UI Design" },
  { id: 4, image: "/explorations/exp4.png", title: "Creative Focus" },
  { id: 5, image: "/explorations/exp5.png", title: "Digital Dashboard" },
  { id: 6, image: "/explorations/exp6.png", title: "Branding Concepts" }
];

export const Explorations = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const col1Ref = useRef<HTMLDivElement>(null);
  const col2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Pin the center content
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: contentRef.current,
        pinSpacing: false,
      });

      // Parallax for columns
      gsap.to(col1Ref.current, {
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      });

      gsap.to(col2Ref.current, {
        yPercent: -100,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative bg-bg min-h-[300vh] overflow-hidden">
      {/* Pinned Center Content */}
      <div ref={contentRef} className="absolute inset-0 h-screen w-full flex flex-col items-center justify-center z-10 pointer-events-none">
        <div className="text-center px-6 pointer-events-auto mix-blend-difference">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-8 h-px bg-stroke"></div>
            <span className="text-xs text-muted uppercase tracking-[0.3em]">Explorations</span>
            <div className="w-8 h-px bg-stroke"></div>
          </div>
          <h2 className="text-5xl md:text-7xl lg:text-8xl text-text-primary tracking-tight mb-6 font-display italic">
            Visual playground
          </h2>
          <p className="text-muted mb-8 max-w-sm mx-auto">
            A collection of experimental designs, animations, and micro-interactions.
          </p>
          <a href="#" className="inline-flex items-center gap-2 group relative rounded-full px-8 py-4 border border-stroke text-sm hover:border-transparent transition-all">
            <span className="absolute inset-0 accent-gradient opacity-0 group-hover:opacity-100 rounded-full -z-10 transition-opacity"></span>
            <span className="absolute inset-[1px] bg-bg rounded-full -z-10"></span>
            <span className="relative z-10 text-text-primary group-hover:text-white transition-colors">
              Follow on Dribbble
            </span>
          </a>
        </div>
      </div>

      {/* Parallax Gallery Columns */}
      <div className="absolute top-0 left-0 w-full h-full z-20 pointer-events-none">
        <div className="max-w-[1400px] mx-auto w-full h-full relative">
          
          {/* Column 1 */}
          <div 
            ref={col1Ref} 
            className="absolute left-[5%] md:left-[15%] top-[50vh] flex flex-col gap-12 md:gap-40 w-1/3 md:w-auto pointer-events-auto"
          >
            {explorations.slice(0, 3).map((item, i) => (
              <div 
                key={item.id} 
                className={`group cursor-pointer relative aspect-square max-w-[280px] md:max-w-[320px] rounded-3xl overflow-hidden ${i % 2 === 0 ? '-rotate-6' : 'rotate-3'} hover:rotate-0 hover:scale-105 transition-all duration-500`}
              >
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                  <span className="text-white font-display italic text-2xl">{item.title}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Column 2 */}
          <div 
            ref={col2Ref} 
            className="absolute right-[5%] md:right-[15%] top-[100vh] flex flex-col gap-12 md:gap-40 w-1/3 md:w-auto pointer-events-auto"
          >
            {explorations.slice(3, 6).map((item, i) => (
              <div 
                key={item.id} 
                className={`group cursor-pointer relative aspect-square max-w-[280px] md:max-w-[320px] rounded-3xl overflow-hidden ${i % 2 === 0 ? 'rotate-6' : '-rotate-3'} hover:rotate-0 hover:scale-105 transition-all duration-500`}
              >
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                  <span className="text-white font-display italic text-2xl">{item.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
