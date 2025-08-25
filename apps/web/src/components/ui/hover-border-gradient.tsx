"use client";
import React, { useState, useRef } from "react";

import { cn } from "@/lib/utils";

type Direction = "TOP" | "LEFT" | "BOTTOM" | "RIGHT";

export function HoverBorderGradient({
  children,
  containerClassName,
  className,
  as: Tag = "button",
  duration = 1,
  clockwise = true,
  ...props
}: React.PropsWithChildren<
  {
    as?: React.ElementType;
    containerClassName?: string;
    className?: string;
    duration?: number;
    clockwise?: boolean;
  } & React.HTMLAttributes<HTMLElement>
>) {
  const [hovered, setHovered] = useState<boolean>(false);
  const [direction, setDirection] = useState<Direction>("TOP");

  const radialGradient = `radial-gradient(circle, rgba(178, 129, 60, 0.8) 0%, rgba(178, 129, 60, 0.4) 50%, transparent 70%)`;
  const linearGradient = `linear-gradient(90deg, rgba(178, 129, 60, 1) 0%, rgba(178, 129, 60, 1) 50%, rgba(178, 129, 60, 1) 100%)`;

  const rotateDirection = (currentDirection: Direction): Direction => {
    const directions: Direction[] = ["TOP", "LEFT", "BOTTOM", "RIGHT"];
    const currentIndex = directions.indexOf(currentDirection);
    const nextIndex = clockwise
      ? (currentIndex - 1 + directions.length) % directions.length
      : (currentIndex + 1) % directions.length;
    return directions[nextIndex];
  };

  const movingMap: Record<Direction, string> = {
    TOP: "radial-gradient(20.7% 50% at 50% 0%, rgba(178, 129, 60, 0.8) 0%, transparent 100%)",
    LEFT: "radial-gradient(16.6% 43.1% at 0% 50%, rgba(178, 129, 60, 0.8) 0%, transparent 100%)",
    BOTTOM:
      "radial-gradient(20.7% 50% at 50% 100%, rgba(178, 129, 60, 0.8) 0%, transparent 100%)",
    RIGHT:
      "radial-gradient(16.2% 41.199999999999996% at 100% 50%, rgba(178, 129, 60, 0.8) 0%, transparent 100%)",
  };

  const highlight =
    "radial-gradient(75% 181.15942028985506% at 50% 50%, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.1) 100%)";

  return (
    <Tag
      onMouseEnter={(event: React.MouseEvent<HTMLDivElement>) => {
        setHovered(true);
      }}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "relative flex rounded-full border content-center bg-black/20 hover:bg-black/10 transition duration-500 dark:bg-white/20 items-center flex-col flex-shrink-0 overflow-visible",
        containerClassName
      )}
      {...props}
    >
      <div
        className={cn(
          "w-auto text-white z-10 bg-gradient-to-br from-trueme-gold to-trueme-gold px-4 py-2 rounded-full",
          className
        )}
      >
        {children}
      </div>
      <motion.div
        className={cn(
          "flex-shrink-0 rounded-full border-2 border-transparent bg-gradient-to-br from-trueme-gold to-trueme-gold absolute inset-0"
        )}
        style={{
          filter: "blur(2px)",
        }}
        initial={{ background: movingMap[direction] }}
        animate={{
          background: hovered
            ? [movingMap[direction], highlight]
            : movingMap[direction],
        }}
        transition={{ ease: "linear", duration: duration ?? 1 }}
        onAnimationComplete={() => {
          if (!hovered) {
            setDirection(rotateDirection(direction));
          }
        }}
      />
      <div className="bg-black absolute inset-[2px] rounded-full" />
    </Tag>
  );
}

import { motion } from "framer-motion";
