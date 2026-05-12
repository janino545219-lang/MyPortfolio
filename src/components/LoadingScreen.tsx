import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const words = ["Design", "Create", "Inspire"];

export const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [count, setCount] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const duration = 2700;
    let animationFrameId: number;

    const updateCounter = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min((progress / duration) * 100, 100);
      
      setCount(Math.floor(percentage));

      if (progress < duration) {
        animationFrameId = requestAnimationFrame(updateCounter);
      } else {
        setTimeout(onComplete, 400);
      }
    };

    animationFrameId = requestAnimationFrame(updateCounter);

    return () => cancelAnimationFrame(animationFrameId);
  }, [onComplete]);

  useEffect(() => {
    const wordInterval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 900);
    return () => clearInterval(wordInterval);
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] bg-bg flex flex-col justify-between p-6 md:p-12 overflow-hidden">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-xs text-muted uppercase tracking-[0.3em]"
      >
        Portfolio
      </motion.div>

      <div className="flex-1 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={wordIndex}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="text-4xl md:text-6xl lg:text-7xl font-display italic text-text-primary/80"
          >
            {words[wordIndex]}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex flex-col items-end w-full">
        <div className="text-6xl md:text-8xl lg:text-9xl font-display text-text-primary tabular-nums mb-4 md:mb-8">
          {String(count).padStart(3, "0")}
        </div>
        
        <div className="w-full h-[3px] bg-stroke/50 overflow-hidden relative">
          <div 
            className="absolute inset-y-0 left-0 accent-gradient w-full origin-left"
            style={{ 
              transform: `scaleX(${count / 100})`,
              boxShadow: "0 0 8px rgba(137, 170, 204, 0.35)",
              transition: "transform 0.1s linear"
            }}
          />
        </div>
      </div>
    </div>
  );
};
