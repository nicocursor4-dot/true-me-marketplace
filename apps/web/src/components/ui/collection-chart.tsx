"use client";

import * as React from "react";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface CollectionChartProps {
  values: number[];
  labels: string[];
  purchasesByMonth?: number[]; // same length as values, optional
  height?: number; // px
  onBarClick?: (index: number) => void;
}

// A responsive, animated bar chart with hover tooltip and optional purchase markers.
export function CollectionChart({ values, labels, purchasesByMonth, height = 200, onBarClick }: CollectionChartProps) {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  // Auto-scaling logic
  const { min, max } = useMemo(() => {
    if (!values || values.length === 0) return { min: 0, max: 100 };
    const rawMin = Math.min(...values);
    const rawMax = Math.max(...values);
    // Add 10% padding top/bottom for visual comfort
    const range = rawMax - rawMin;
    const padding = range === 0 ? rawMax * 0.1 : range * 0.1;
    return {
      min: Math.max(0, rawMin - padding),
      max: rawMax + padding
    };
  }, [values]);

  const barHeights = useMemo(() => {
    if (!values || values.length === 0) return [];
    return values.map((v) => {
      // Map value to percentage between min and max
      const percentage = ((v - min) / (max - min)) * 100;
      return Math.max(4, percentage); // Ensure at least 4% height for visibility
    });
  }, [values, min, max]);

  if (!values || values.length === 0) {
    return (
      <div className="flex items-center justify-center h-40 text-trueme-secondary font-light">
        Aucune donnée disponible
      </div>
    );
  }

  return (
    <div className="relative w-full select-none pt-6">
      {/* Chart area */}
      <div className="relative flex items-end justify-between gap-3" style={{ height }}>
        {/* Grid lines */}
        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-5">
          <div className="w-full h-px bg-trueme-black" />
          <div className="w-full h-px bg-trueme-black" />
          <div className="w-full h-px bg-trueme-black" />
          <div className="w-full h-px bg-trueme-black" />
        </div>

        {barHeights.map((h, i) => (
          <div key={i} className="flex-1 flex flex-col items-center relative group h-full justify-end"
            onMouseEnter={() => setHoverIndex(i)}
            onMouseLeave={() => setHoverIndex(null)}
            onClick={() => onBarClick?.(i)}
          >

            {/* Purchase marker */}
            {purchasesByMonth?.[i] && purchasesByMonth[i] > 0 && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute -top-10 flex flex-col items-center gap-1 z-10"
              >
                <span className="text-[10px] font-bold text-white bg-trueme-black px-2 py-1 rounded-full shadow-lg border border-white/20">
                  +{purchasesByMonth[i]}
                </span>
                <div className="w-px h-4 bg-trueme-black/20" />
              </motion.div>
            )}

            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: `${h}%`, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 80,
                damping: 15,
                delay: 0.05 * i
              }}
              className={`w-full rounded-t-lg cursor-pointer relative overflow-hidden transition-all duration-300 ${hoverIndex === i ? 'shadow-lg scale-x-110 z-10' : 'shadow-sm'}`}
              style={{
                minHeight: '4px',
              }}
            >
              <div className={`absolute inset-0 transition-opacity duration-300 ${hoverIndex === i ? 'opacity-100' : 'opacity-80'}`}>
                <div className="absolute inset-0 bg-gradient-to-t from-trueme-gold to-[#F4E4BC]" />
              </div>
              {/* Shine effect on hover */}
              <div className={`absolute inset-0 bg-gradient-to-tr from-white/0 via-white/30 to-white/0 translate-y-full transition-transform duration-700 ${hoverIndex === i ? '-translate-y-full' : ''}`} />
            </motion.div>

            {/* Tooltip */}
            <AnimatePresence>
              {hoverIndex === i && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 5, scale: 0.9 }}
                  className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 bg-trueme-black text-white text-sm px-4 py-2 rounded-xl whitespace-nowrap z-30 shadow-2xl border border-white/10 flex flex-col items-center"
                >
                  <span className="font-serif font-bold tracking-wide text-trueme-gold">{values[i].toLocaleString()} €</span>
                  <span className="text-[10px] text-white/60 uppercase tracking-wider">{labels[i]}</span>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-trueme-black border-r border-b border-white/10" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* Month labels */}
      <div className="flex justify-between mt-4 px-1">
        {labels.map((label, i) => (
          <div key={i} className="flex-1 text-center">
            <span className={`text-[10px] uppercase tracking-wider transition-all duration-300 block ${hoverIndex === i ? 'text-trueme-black font-bold scale-110' : 'text-trueme-secondary'}`}>
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CollectionChart;
