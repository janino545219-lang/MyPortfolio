import { useEffect, useRef } from 'react';
import Hls from 'hls.js';
import gsap from 'gsap';

export const Footer = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const marqueeTrackRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    if (!marqueeTrackRef.current) return;
    // Animate the whole track by -50% (since it contains the text duplicated)
    const tween = gsap.to(marqueeTrackRef.current, {
      xPercent: -50,
      duration: 40,
      ease: "none",
      repeat: -1,
    });
    return () => { tween.kill(); };
  }, []);

  const marqueeText = "BUILDING THE FUTURE • ";

  return (
    <footer id="contact" className="relative bg-bg pt-16 md:pt-20 pb-8 md:pb-12 overflow-hidden">
      {/* BG Video — flipped vertically */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2 scale-y-[-1]"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-bg to-transparent" />
      </div>

      {/* Marquee */}
      <div className="relative z-10 w-full overflow-hidden py-16 md:py-24 opacity-[0.12] select-none pointer-events-none">
        {/* Double the content so GSAP -50% xPercent creates seamless loop */}
        <div ref={marqueeTrackRef} className="inline-flex whitespace-nowrap will-change-transform">
          {[...Array(20)].map((_, i) => (
            <span key={i} className="text-7xl md:text-9xl font-display text-text-primary tracking-tighter mr-8">
              {marqueeText}
            </span>
          ))}
        </div>
      </div>

      {/* CTA Email */}
      <div className="relative z-10 flex flex-col items-center mt-[-100px] md:mt-[-140px] mb-20 md:mb-28 px-4">
        <p className="text-xs text-muted uppercase tracking-[0.3em] mb-6">Let's work together</p>
        <a
          href="mailto:aninojerimie@gmail.com"
          className="group relative inline-flex items-center justify-center rounded-full px-8 py-4 md:px-12 md:py-6 text-xl md:text-3xl font-medium transition-all duration-300"
        >
          {/* Default pill */}
          <span className="absolute inset-0 rounded-full bg-text-primary group-hover:bg-transparent transition-colors duration-300" />
          {/* Gradient border on hover */}
          <span
            className="absolute inset-[-2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ background: 'linear-gradient(90deg,#89AACC,#4E85BF)', padding: '2px' }}
          />
          <span className="absolute inset-0 rounded-full bg-bg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <span className="relative z-10 font-display italic tracking-wider text-bg group-hover:text-text-primary transition-colors duration-300">
            aninojerimie@gmail.com
          </span>
        </a>
      </div>

      {/* Footer bar */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-stroke pt-8">
        {/* Social links */}
        <div className="flex items-center gap-5">
          {/* Twitter / X */}
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-text-primary transition-colors duration-200">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.259 5.632 5.905-5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
          {/* LinkedIn */}
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-text-primary transition-colors duration-200">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
          {/* Dribbble */}
          <a href="https://dribbble.com/" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-text-primary transition-colors duration-200">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 6.628 5.374 12 12 12 6.629 0 12-5.372 12-12 0-6.627-5.371-12-12-12zm7.369 5.824a10.12 10.12 0 012.186 5.765c-.321-.063-3.537-.717-6.771-.31-.066-.163-.131-.33-.198-.494a41.03 41.03 0 00-.559-1.302c3.579-1.467 5.21-3.576 5.342-3.659zm-1.453-1.367c-.102.149-1.603 2.105-5.056 3.415-1.58-2.9-3.331-5.281-3.6-5.643a10.154 10.154 0 018.656 2.228zm-11.373-.57c.263.35 2.014 2.74 3.578 5.59-4.518 1.2-8.499 1.175-8.91 1.175a10.167 10.167 0 015.332-6.765zM1.888 12.03c0-.085.002-.17.005-.255.396.01 5.099.063 9.896-1.375.276.54.542 1.088.788 1.637-.118.034-.238.07-.354.11-4.954 1.596-7.582 5.954-7.802 6.34A10.11 10.11 0 011.888 12.03zm8.113 10.093a10.116 10.116 0 01-5.982-3.961c.166-.304 2.547-4.418 7.959-6.32.025-.009.05-.017.076-.025a44.46 44.46 0 012.062 7.529 10.107 10.107 0 01-4.115 2.777zm6.09-1.252a45.06 45.06 0 00-1.934-7.118c3.009-.481 5.645.302 5.976.398a10.145 10.145 0 01-4.042 6.72z"/></svg>
          </a>
          {/* GitHub */}
          <a href="https://github.com/janino545219-lang" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-text-primary transition-colors duration-200">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
          </a>
        </div>

        {/* Availability badge */}
        <div className="flex items-center gap-3 bg-surface/50 backdrop-blur-sm border border-stroke rounded-full px-5 py-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
          </span>
          <span className="text-sm text-text-primary">Available for projects</span>
        </div>

        {/* Copyright */}
        <p className="text-muted text-sm">
          &copy; {new Date().getFullYear()} Jerimie Anino. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
