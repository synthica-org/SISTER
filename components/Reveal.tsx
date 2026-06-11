"use client";

import { motion } from "framer-motion";
import type { CSSProperties, ReactNode } from "react";

const EASE = [0.2, 0.7, 0.2, 1] as const;

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  as?: "div" | "p" | "h1" | "h2" | "h3" | "section";
  className?: string;
  once?: boolean;
  inView?: boolean;
  style?: CSSProperties;
};

export function Reveal({
  children,
  delay = 0,
  y = 24,
  as = "div",
  className,
  once = true,
  inView = false,
  style,
}: RevealProps) {
  const MotionTag = motion[as] as typeof motion.div;

  const initial = { opacity: 0, y, filter: "blur(6px)" };
  const target = { opacity: 1, y: 0, filter: "blur(0px)" };
  const transition = { duration: 0.8, ease: EASE, delay };

  if (inView) {
    return (
      <MotionTag
        className={className}
        style={style}
        initial={initial}
        whileInView={target}
        viewport={{ once, margin: "-80px" }}
        transition={transition}
      >
        {children}
      </MotionTag>
    );
  }

  return (
    <MotionTag
      className={className}
      style={style}
      initial={initial}
      animate={target}
      transition={transition}
    >
      {children}
    </MotionTag>
  );
}

type MaskLinesProps = {
  lines: ReactNode[];
  baseDelay?: number;
  stagger?: number;
  className?: string;
};

export function MaskLines({
  lines,
  baseDelay = 0,
  stagger = 0.11,
  className,
}: MaskLinesProps) {
  return (
    <h1 className={className}>
      {lines.map((line, i) => (
        <span className="lm" key={i}>
          <motion.span
            style={{ display: "block" }}
            initial={{ y: "105%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{
              duration: 0.95,
              ease: EASE,
              delay: baseDelay + i * stagger,
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </h1>
  );
}
