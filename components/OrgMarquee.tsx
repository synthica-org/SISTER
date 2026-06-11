"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ORGANIZATIONS } from "@/lib/data";
import { Mark } from "./Mark";

// Parallax marquee of partner / track-lead organizations. Two rows drift in
// opposite directions, and the whole band shifts on scroll for depth.
export default function OrgMarquee() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const xA = useTransform(scrollYProgress, [0, 1], ["2%", "-8%"]);
  const xB = useTransform(scrollYProgress, [0, 1], ["-8%", "2%"]);

  const row = [...ORGANIZATIONS, ...ORGANIZATIONS];

  return (
    <div ref={ref} style={{ overflow: "hidden", width: "100%" }}>
      <motion.div style={{ x: xA, display: "flex", gap: 18, width: "max-content" }}>
        <Track items={row} dir={-1} dur={42} />
      </motion.div>
      <motion.div
        style={{ x: xB, display: "flex", gap: 18, width: "max-content", marginTop: 18 }}
      >
        <Track items={[...row].reverse()} dir={1} dur={52} />
      </motion.div>
    </div>
  );
}

function Track({
  items,
  dir,
  dur,
}: {
  items: typeof ORGANIZATIONS;
  dir: number;
  dur: number;
}) {
  return (
    <motion.div
      style={{ display: "flex", gap: 18 }}
      animate={{ x: dir < 0 ? ["0%", "-50%"] : ["-50%", "0%"] }}
      transition={{ repeat: Infinity, ease: "linear", duration: dur }}
    >
      {[...items, ...items].map((o, i) => (
        <OrgPill key={i} {...o} />
      ))}
    </motion.div>
  );
}

function OrgPill({
  name,
  role,
  track,
}: {
  name: string;
  role: string;
  track: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 14,
        padding: "16px 22px",
        borderRadius: 16,
        background: "rgba(255,255,255,0.55)",
        border: "1px solid var(--line)",
        backdropFilter: "blur(8px)",
        minWidth: 250,
        flexShrink: 0,
      }}
    >
      <Mark size={26} />
      <div style={{ lineHeight: 1.25 }}>
        <div style={{ fontWeight: 800, fontSize: "0.98rem" }}>{name}</div>
        <div style={{ fontSize: "0.78rem", color: "var(--ink-60)" }}>
          {role} · {track}
        </div>
      </div>
    </div>
  );
}
