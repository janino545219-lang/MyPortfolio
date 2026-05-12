import { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';
import gsap from 'gsap';

const roles = ["Developer", "Student", "Creator", "Designer"];

export const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [roleIndex, setRoleIndex] = useState(0);

  // HLS Video
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const src = "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8";
    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(video);
      return () => hls.destroy();
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = src;
    }
  }, []);

  // Role cycling
  useEffect(() => {
    const id = setInterval(() => setRoleIndex(p => (p + 1) % roles.length), 2000);
    return () => clearInterval(id);
  }, []);

  // GSAP entrance animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.timeline({ defaults: { ease: "power3.out" } })
        .fromTo(".name-reveal",
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1.2, delay: 0.1 }
        )
        .fromTo(".blur-in",
          { opacity: 0, filter: "blur(10px)", y: 20 },
          { opacity: 1, filter: "blur(0px)", y: 0, duration: 1, stagger: 0.15 },
          "-=0.9"
        );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2"
        />
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-bg to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto">
        <p className="blur-in text-xs text-muted uppercase tracking-[0.3em] mb-8">
          BSIT STUDENT • UNIVERSITY OF MINDANAO
        </p>

        <h1 className="name-reveal text-6xl md:text-8xl lg:text-9xl font-display italic leading-[0.9] tracking-tight text-text-primary mb-6">
          Jerimie Anino
        </h1>

        <div className="blur-in text-lg md:text-2xl text-text-primary/80 mb-6 flex items-center gap-2 flex-wrap justify-center">
          A{' '}
          <span
            key={roleIndex}
            className="font-display italic animate-role-fade-in inline-block"
            style={{ background: 'linear-gradient(90deg,#89AACC,#4E85BF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
          >
            {roles[roleIndex]}
          </span>
          {' '}based in Davao.
        </div>

        <p className="blur-in text-sm md:text-base text-muted max-w-md mb-12">
          Crafting digital experiences with clean code and modern design aesthetics. Always learning, always building.
        </p>

        <div className="blur-in flex flex-wrap justify-center gap-4">
          {/* Primary CTA */}
          <a
            href="#work"
            className="group relative rounded-full text-sm px-7 py-3.5 bg-text-primary text-bg font-medium hover:scale-105 transition-all duration-300 overflow-hidden"
          >
            <span
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: 'linear-gradient(90deg,#89AACC,#4E85BF)', padding: '2px' }}
            />
            <span className="absolute inset-[2px] bg-bg rounded-full group-hover:opacity-100 opacity-0 transition-opacity duration-300" />
            <span className="relative z-10 group-hover:text-text-primary transition-colors duration-300">See Works</span>
          </a>

          {/* Secondary CTA */}
          <a
            href="#contact"
            className="group relative rounded-full text-sm px-7 py-3.5 text-text-primary font-medium hover:scale-105 transition-all duration-300"
          >
            {/* Gradient border */}
            <span
              className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: 'linear-gradient(90deg,#89AACC,#4E85BF)', padding: '2px' }}
            />
            {/* Default border */}
            <span className="absolute inset-0 rounded-full border-2 border-stroke group-hover:border-transparent transition-colors duration-300" />
            {/* Fill */}
            <span className="absolute inset-[2px] bg-bg rounded-full" />
            <span className="relative z-10">Reach out...</span>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3">
        <span className="text-xs text-muted uppercase tracking-[0.2em]">SCROLL</span>
        <div className="w-px h-10 bg-stroke relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full bg-white/60 h-1/2 animate-scroll-down" />
        </div>
      </div>
    </section>
  );
};
