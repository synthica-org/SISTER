"use client";

import Link from "next/link";
import { Reveal, MaskLines } from "./Reveal";
import type { ReactNode } from "react";

export default function PageHero({
  crumb,
  lines,
  intro,
}: {
  crumb: string;
  lines: ReactNode[];
  intro?: ReactNode;
}) {
  return (
    <section
      className="page-hero"
      style={{
        position: "relative",
        zIndex: 2,
      }}
    >
      <div className="shell">
        <Reveal as="div" delay={0.25}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              fontSize: "0.85rem",
              fontWeight: 700,
              marginBottom: 22,
              flexWrap: "wrap",
            }}
          >
            <Link href="/" className="muted">
              Home
            </Link>
            <span className="muted">·</span>
            <span>{crumb}</span>
          </div>
        </Reveal>

        <MaskLines className="h-xl" baseDelay={0.4} lines={lines} />

        {intro && (
          <Reveal delay={0.7} className="lead" style={undefined}>
            <div style={{ maxWidth: 640, marginTop: 28 }}>{intro}</div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
