"use client";

import { motion } from "framer-motion";

// SISTER brand mark — a clean four-point "spark". Minimal, scientific, and it
// reads well both static and slowly rotating across page transitions.
export function Mark({
  size = 30,
  spin = false,
  color = "var(--ink)",
}: {
  size?: number;
  spin?: boolean;
  color?: string;
}) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      animate={spin ? { rotate: 360 } : undefined}
      transition={
        spin ? { repeat: Infinity, ease: "linear", duration: 28 } : undefined
      }
      style={{ display: "block" }}
      aria-hidden
    >
      <path
        d="M50 3
           C53 31, 69 47, 97 50
           C69 53, 53 69, 50 97
           C47 69, 31 53, 3 50
           C31 47, 47 31, 50 3 Z"
        fill={color}
      />
    </motion.svg>
  );
}
