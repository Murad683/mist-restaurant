import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 800);
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Animated Mist Particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-silver-dark/20"
                style={{
                  width: `${200 + i * 100}px`,
                  height: `${200 + i * 100}px`,
                  left: `${10 + i * 15}%`,
                  top: `${20 + (i % 3) * 25}%`,
                }}
                initial={{ opacity: 0.8, scale: 0.5, filter: "blur(40px)" }}
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  scale: [0.8, 1.2, 0.8],
                  x: [0, 30, -20, 0],
                  y: [0, -20, 10, 0],
                }}
                transition={{
                  duration: 8 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.5,
                }}
              />
            ))}
          </div>

          {/* Brand Text */}
          <motion.div
            className="relative z-10 text-center"
            initial={{ opacity: 0, scale: 0.8, filter: "blur(20px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
          >
            <div className="font-display text-5xl md:text-7xl lg:text-8xl tracking-[0.2em] text-foreground">
              Mist
            </div>
            <div className="mt-4 font-mono text-xs tracking-[0.4em] uppercase text-muted-foreground">
              Loading
            </div>
          </motion.div>

          {/* Mist clearing effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-radial-mist"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.4, 0] }}
            transition={{ duration: 3, ease: "easeInOut" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
