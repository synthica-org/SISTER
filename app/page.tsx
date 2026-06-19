"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Reveal, MaskLines } from "@/components/Reveal";
import OrgMarquee from "@/components/OrgMarquee";
import { Mark } from "@/components/Mark";
import { TRACKS, PILLARS, FIGURES, APPLY_URL } from "@/lib/data";

export default function Home() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section
        style={{
          minHeight: "100svh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingTop: "clamp(110px, 16vh, 180px)",
          paddingBottom: "clamp(40px, 8vh, 80px)",
          position: "relative",
        }}
      >
        <div className="shell" style={{ position: "relative", zIndex: 2 }}>
          <Reveal as="div" className="eyebrow" delay={0.3}>
            Summer Institute of Science, Technology & Engineering Research
          </Reveal>

          <MaskLines
            className="display"
            baseDelay={0.45}
            lines={["Turning students", <em key="e" style={{ fontStyle: "normal", color: "var(--mint-deep)" }}>into researchers</em>]}
          />

          <motion.div
            className="rule"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            style={{ transformOrigin: "left", width: 300 }}
            transition={{ duration: 1, ease: [0.2, 0.7, 0.2, 1], delay: 0.9 }}
          />

          <Reveal delay={1} className="lead" style={undefined}>
            <p style={{ maxWidth: 620 }}>
              <strong>SISTER is a FREE, global research institute</strong> for
              high school and early undergraduate students — rigorous,
              project-based STEM and social science research, run by a coalition
              of premier student-led organizations.
            </p>
          </Reveal>

          <Reveal delay={1.15}>
            <div style={{ display: "flex", gap: 14, marginTop: 32, flexWrap: "wrap" }}>
              <a href={APPLY_URL} className="btn" target="_blank" rel="noopener noreferrer">
                <span className="dot" /> Apply now
              </a>
              <Link href="/framework" className="btn btn-ghost">
                How it works →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── ORG MARQUEE ──────────────────────────────────────────────────── */}
      <section style={{ padding: "40px 0 90px" }}>
        <div className="shell" style={{ marginBottom: 26 }}>
          <Reveal as="div" className="eyebrow" inView>
            Co-Organizers & Track Leads
          </Reveal>
        </div>
        <OrgMarquee />
      </section>

      {/* ── BIG STATEMENT + ALL TRACKS OVERVIEW ──────────────────────────── */}
      <section className="section" style={{ paddingTop: 40 }}>
        <div className="shell">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              gap: 30,
              flexWrap: "wrap",
              marginBottom: 48,
            }}
          >
            <Reveal as="h2" className="h-xl" inView style={{ maxWidth: 720 }}>
              Research turns curiosity into{" "}
              <span style={{ color: "var(--mint-deep)" }}>publishable science</span>.
              Every student leaves with a real project.
            </Reveal>
            <Reveal inView delay={0.1}>
              <Link href="/tracks" className="btn btn-ghost" style={{ whiteSpace: "nowrap" }}>
                <span className="dot" /> View all tracks
              </Link>
            </Reveal>
          </div>

          {/* clear, static overview of EVERY track with its lead organizers */}
          <div
            className="grid"
            style={{ gridTemplateColumns: "repeat(2, 1fr)" }}
          >
            {TRACKS.map((t, i) => (
              <Reveal key={t.slug} inView delay={(i % 2) * 0.06}>
                <Link href={`/tracks#${t.slug}`}>
                  <TrackCard {...t} />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FRAMEWORK (tripartite) ───────────────────────────────────────── */}
      <section className="section section-dark">
        <div className="shell">
          <Reveal as="div" className="eyebrow" inView>
            The SISTER Framework
          </Reveal>
          <Reveal as="h2" className="h-lg" inView delay={0.05} style={{ marginTop: 16, maxWidth: 760 }}>
            A tripartite model: subject depth, research literacy, and a real
            path to publication.
          </Reveal>

          <div
            className="grid"
            style={{ gridTemplateColumns: "repeat(3, 1fr)", marginTop: 56 }}
          >
            {PILLARS.map((p, i) => (
              <Reveal key={p.id} inView delay={i * 0.1}>
                <div
                  style={{
                    border: "1px solid var(--line)",
                    borderRadius: 22,
                    padding: "30px 26px",
                    height: "100%",
                    background: "rgba(255,255,255,0.03)",
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.85rem",
                      fontWeight: 800,
                      color: "var(--mint-deep)",
                      letterSpacing: "0.1em",
                    }}
                  >
                    {p.no}
                  </div>
                  <h3 className="h-md" style={{ marginTop: 12 }}>
                    {p.title}
                  </h3>
                  <p className="muted" style={{ marginTop: 14, fontSize: "0.96rem" }}>
                    {p.summary}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal inView delay={0.2}>
            <Link href="/framework" className="btn" style={{ marginTop: 40 }}>
              <span className="dot" /> Explore the framework →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── FIGURES ──────────────────────────────────────────────────────── */}
      <section className="section">
        <div className="shell">
          <Reveal as="div" className="eyebrow" inView>
            SISTER in a few figures
          </Reveal>
          <div
            className="grid"
            style={{ gridTemplateColumns: "repeat(4, 1fr)", marginTop: 40 }}
          >
            {FIGURES.map((f, i) => (
              <Figure key={i} {...f} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 1000px) {
          .grid[style*="repeat(3"], .grid[style*="repeat(4"] {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 680px) {
          .grid[style*="repeat(2"],
          .grid[style*="repeat(3"],
          .grid[style*="repeat(4"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}

function TrackCard({
  name,
  focus,
  leads,
}: {
  name: string;
  focus: string;
  leads: { name: string; href?: string }[];
}) {
  return (
    <div
      className="card"
      style={{ minHeight: 180, display: "flex", flexDirection: "column" }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: 16,
        }}
      >
        <div>
          <h3 className="h-md">{name}</h3>
          <p
            style={{
              marginTop: 8,
              color: "var(--mint-deep)",
              fontWeight: 700,
              fontSize: "0.92rem",
            }}
          >
            {focus}
          </p>
        </div>
        <Mark size={26} color="var(--ink-40)" />
      </div>

      <div
        style={{
          marginTop: "auto",
          paddingTop: 20,
          borderTop: "1px solid var(--line)",
        }}
      >
        <div
          className="eyebrow"
          style={{ fontSize: "0.66rem", marginBottom: 8 }}
        >
          Led by
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {leads.map((l) => (
            <span
              key={l.name}
              style={{
                fontSize: "0.82rem",
                fontWeight: 700,
                padding: "5px 11px",
                borderRadius: 999,
                background: "rgba(255,255,255,0.55)",
                border: "1px solid var(--line)",
              }}
            >
              {l.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function Figure({
  value,
  label,
  delay,
}: {
  value: string;
  label: string;
  delay: number;
}) {
  return (
    <Reveal inView delay={delay}>
      <div>
        <div
          style={{
            fontSize: "clamp(3rem, 6vw, 5rem)",
            fontWeight: 800,
            letterSpacing: "-0.04em",
            lineHeight: 1,
          }}
        >
          {value}
        </div>
        <p className="muted" style={{ marginTop: 10, maxWidth: 220 }}>
          {label}
        </p>
      </div>
    </Reveal>
  );
}
