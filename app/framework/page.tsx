"use client";

import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import { Mark } from "@/components/Mark";
import { PILLARS } from "@/lib/data";

export default function FrameworkPage() {
  return (
    <>
      <PageHero
        crumb="Framework"
        lines={["The SISTER", "Framework"]}
        intro={
          <>
            <p>
              SISTER is built on a <strong>tripartite model</strong> that
              ensures every student receives both specialized subject knowledge
              and fundamental research literacy.
            </p>
            <p style={{ marginTop: 14 }} className="muted">
              Synthica serves as the primary organizing body — facilitating
              infrastructure, core curriculum, and publication pathways — while
              empowering partner organizations to lead subject-specific
              innovation.
            </p>
          </>
        }
      />

      {/* alternating detail sections */}
      <div style={{ position: "relative", zIndex: 2 }}>
        {PILLARS.map((p, i) => (
          <PillarSection key={p.id} pillar={p} index={i} />
        ))}
      </div>

      {/* decentralized model callout */}
      <section className="section section-dark">
        <div className="shell">
          <Reveal as="div" className="eyebrow" inView>
            How it operates
          </Reveal>
          <Reveal as="h2" className="h-lg" inView delay={0.05} style={{ marginTop: 16, maxWidth: 820 }}>
            A decentralized institute — premier student-led organizations host
            specialized tracks, Synthica holds the spine.
          </Reveal>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 24,
              marginTop: 48,
            }}
            className="dec-grid"
          >
            {[
              {
                h: "Track Leads",
                p: "Each subject track is hosted by 1–2 recognized student-led organizations responsible for projects, weekly instruction, mentorship, and expert resources.",
              },
              {
                h: "Synthica Core",
                p: "Universal research-skills sessions, a guest speaker series, and operational oversight tie every track together into one program.",
              },
              {
                h: "Stipends for mentors",
                p: "To attract high-caliber researchers from top institutions, the program provides stipends compensating mentors for weekly instruction and guidance.",
              },
              {
                h: "Open-access publishing",
                p: "Funding covers Article Processing Charges so top student research remains freely available to the global scientific community.",
              },
            ].map((b, idx) => (
              <Reveal key={b.h} inView delay={idx * 0.08}>
                <div
                  style={{
                    border: "1px solid var(--line)",
                    borderRadius: 20,
                    padding: "28px 26px",
                    height: "100%",
                  }}
                >
                  <h3 className="h-md">{b.h}</h3>
                  <p className="muted" style={{ marginTop: 12 }}>
                    {b.p}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal inView delay={0.2}>
            <Link href="/tracks" className="btn" style={{ marginTop: 44 }}>
              <span className="dot" /> See the curated tracks →
            </Link>
          </Reveal>
        </div>
      </section>

      <style>{`
        @media (max-width: 760px) {
          .dec-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}

function PillarSection({
  pillar,
  index,
}: {
  pillar: (typeof PILLARS)[number];
  index: number;
}) {
  const soft = index % 2 === 1;
  return (
    <section
      style={{
        background: soft ? "var(--bg-soft)" : "transparent",
        padding: "clamp(64px, 9vw, 120px) 0",
      }}
    >
      <div
        className="shell"
        style={{
          display: "grid",
          gridTemplateColumns: "1.1fr 0.9fr",
          gap: 48,
          alignItems: "center",
        }}
      >
        <div>
          <Reveal as="div" inView>
            <div
              style={{
                fontSize: "0.85rem",
                fontWeight: 800,
                color: "var(--mint-deep)",
                letterSpacing: "0.12em",
              }}
            >
              {pillar.no} — Pillar
            </div>
          </Reveal>
          <Reveal as="h2" className="h-lg" inView delay={0.05} style={{ marginTop: 14 }}>
            {pillar.title}
          </Reveal>
          <Reveal inView delay={0.1} className="lead muted">
            <p style={{ marginTop: 18, maxWidth: 540 }}>{pillar.summary}</p>
          </Reveal>

          <div style={{ marginTop: 28, display: "grid", gap: 2 }}>
            {pillar.points.map((pt, i) => (
              <Reveal key={pt.h} inView delay={i * 0.06}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "auto 1fr",
                    gap: 16,
                    padding: "18px 0",
                    borderTop: "1px solid var(--line)",
                  }}
                >
                  <Mark size={22} />
                  <div>
                    <div style={{ fontWeight: 800 }}>{pt.h}</div>
                    <p className="muted" style={{ marginTop: 4, fontSize: "0.95rem" }}>
                      {pt.p}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal inView delay={0.15}>
          <div
            style={{
              display: "grid",
              placeItems: "center",
              aspectRatio: "1 / 1",
              borderRadius: 28,
              background:
                "radial-gradient(120% 120% at 30% 20%, rgba(207,230,242,0.7), rgba(158,200,232,0.5))",
              border: "1px solid var(--line)",
            }}
            className="pillar-art"
          >
            <span
              style={{
                fontSize: "clamp(4rem, 12vw, 8rem)",
                fontWeight: 800,
                letterSpacing: "-0.04em",
                color: "rgba(18,42,77,0.35)",
                lineHeight: 1,
              }}
            >
              {pillar.no}
            </span>
          </div>
        </Reveal>
      </div>

      <style>{`
        @media (max-width: 860px) {
          section .shell[style*="grid-template-columns: 1.1fr"] {
            grid-template-columns: 1fr !important;
          }
          .pillar-art { max-width: 360px; }
        }
      `}</style>
    </section>
  );
}
