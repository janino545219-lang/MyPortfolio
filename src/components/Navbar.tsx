import { useEffect, useState } from 'react';
import { useScroll } from 'framer-motion';

export const Navbar = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 100);
    });
  }, [scrollY]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4">
      <div
        className={`inline-flex items-center rounded-full backdrop-blur-md border border-white/10 bg-surface px-2 py-2 transition-shadow duration-300 ${
          isScrolled ? 'shadow-md shadow-black/20' : ''
        }`}
      >
        {/* Logo */}
        <div className="group relative w-9 h-9 rounded-full cursor-pointer flex items-center justify-center transition-transform duration-300 hover:scale-110 flex-shrink-0">
          {/* Gradient ring */}
          <div
            className="absolute inset-0 rounded-full p-[1.5px] group-hover:[background:linear-gradient(270deg,#89AACC_0%,#4E85BF_100%)]"
            style={{ background: 'linear-gradient(90deg,#89AACC 0%,#4E85BF 100%)' }}
          >
            <div className="w-full h-full rounded-full bg-bg flex items-center justify-center">
              <span className="font-display italic text-[13px] text-text-primary leading-none">JA</span>
            </div>
          </div>
        </div>

        <div className="w-px h-5 bg-stroke mx-1 hidden md:block" />

        {/* Nav Links */}
        <div className="flex items-center gap-0.5">
          {(["Home", "Work", "Resume"] as const).map((item, i) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 transition-colors ${
                i === 0
                  ? 'text-text-primary bg-stroke/50'
                  : 'text-muted hover:text-text-primary hover:bg-stroke/50'
              }`}
            >
              {item}
            </a>
          ))}
        </div>

        <div className="w-px h-5 bg-stroke mx-1" />

        {/* Say Hi button */}
        <a
          href="#contact"
          className="group relative text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-text-primary"
        >
          {/* Gradient border layer on hover */}
          <span
            className="absolute inset-[-2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ background: 'linear-gradient(90deg,#89AACC 0%,#4E85BF 100%)' }}
          />
          {/* Background fill */}
          <span className="absolute inset-0 rounded-full bg-surface z-[1]" />
          <span className="relative z-[2] flex items-center gap-1">
            Say hi <span className="text-[10px]">↗</span>
          </span>
        </a>
      </div>
    </nav>
  );
};
