"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface SmoothTypewriterProps {
  phrases: string[];
  className?: string;
  interval?: number;
}

export const SmoothTypewriter: React.FC<SmoothTypewriterProps> = ({
  phrases,
  className,
  interval = 4000
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      // Start fade out
      setIsVisible(false);
      
      // After fade out completes, change text and fade in
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % phrases.length);
        setIsVisible(true);
      }, 500); // 500ms fade out duration
      
    }, interval);

    return () => clearInterval(timer);
  }, [phrases.length, interval]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: isVisible ? 1 : 0, 
          y: isVisible ? 0 : -20 
        }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ 
          duration: 0.5,
          ease: "easeInOut"
        }}
        className={cn("text-center", className)}
      >
        {phrases[currentIndex]}
      </motion.div>
    </AnimatePresence>
  );
};
