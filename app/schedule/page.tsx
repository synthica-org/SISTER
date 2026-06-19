"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import { Mark } from "@/components/Mark";
import { PHASES, LOGISTICS } from "@/lib/data";

export default function SchedulePage() {
  return (
    <>
      <PageHero
        crumb="Schedule"
        lines={["Four weeks,", "one publication"]}
        intro={
          <p>
            Applications open in <strong>mid-June</strong>. The program runs{" "}
            <strong>June 29 – August 2</strong> — four intensive weeks culminating in the
            selection of top projects for publication review.
          </p>
        }
      />

      {/* weekly structure */}
      <section className="section" style={{ paddingTop: 50 }}>
        <div className="shell">
          <Reveal as="div" className="eyebrow" inView>
            Weekly program structure
          </Reveal>
          <div
            className="grid"
            style={{ gridTemplateColumns: "repeat(3, 1fr)", marginTop: 30 }}
          >
            {[
              {
                h: "Track Lead Sessions",
                p: "At least 2 dedicated technical sessions per week, hosted by Track Leads, on subject-specific methodologies and project guidance.",
              },
              {
                h: "Synthica Core Session",
                p: "A weekly session covering essential research skills — literature reviews, IMRaD structure, ethical compliance.",
              },
              {
                h: "Guest Speaker Webinar",
                p: "A weekly webinar featuring a guest speaker from academia or industry for broader career and research context.",
              },
            ].map((b, i) => (
              <Reveal key={b.h} inView delay={i * 0.08}>
                <div className="card" style={{ background: "var(--bg-soft)", height: "100%" }}>
                  <Mark size={30} />
                  <h3 className="h-md" style={{ marginTop: 16 }}>
                    {b.h}
                  </h3>
                  <p className="muted" style={{ marginTop: 12 }}>
                    {b.p}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4-week timeline */}
      <Timeline />

      {/* logistics */}
      <section className="section section-dark">
        <div className="shell">
          <Reveal as="div" className="eyebrow" inView>
            Important information
          </Reveal>
          <Reveal as="h2" className="h-lg" inView delay={0.05} style={{ marginTop: 16 }}>
            Logistics at a glance
          </Reveal>
          <div
            style={{
              marginTop: 40,
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 16,
            }}
            className="log-grid"
          >
            {LOGISTICS.map((l, i) => (
              <Reveal key={l.k} inView delay={(i % 4) * 0.05}>
                <div
                  className="panel"
                  style={{
                    padding: "22px 22px",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                  }}
                >
                  <span className="eyebrow" style={{ fontSize: "0.66rem" }}>
                    {l.k}
                  </span>
                  <span
                    style={{
                      fontWeight: 800,
                      fontSize: "1.1rem",
                      letterSpacing: "-0.01em",
                      lineHeight: 1.2,
                    }}
                  >
                    {l.v}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 960px) {
          .log-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 520px) {
          .log-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}

function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="section" ref={ref}>
      <div className="shell">
        <Reveal as="div" className="eyebrow" inView>
          4-week project phases
        </Reveal>
        <Reveal as="h2" className="h-lg" inView delay={0.05} style={{ marginTop: 16, marginBottom: 50 }}>
          From scoping to submission.
        </Reveal>

        <div style={{ position: "relative" }}>
          {/* spine */}
          <div
            style={{
              position: "absolute",
              left: 19,
              top: 0,
              bottom: 0,
              width: 2,
              background: "var(--line)",
            }}
          />
          <motion.div
            style={{
              position: "absolute",
              left: 19,
              top: 0,
              width: 2,
              height: "100%",
              originY: 0,
              scaleY: lineScale,
              background: "var(--ink)",
            }}
          />

          <div style={{ display: "grid", gap: 8 }}>
            {PHASES.map((ph, i) => (
              <Reveal key={ph.week} inView delay={0.05}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "40px 1fr",
                    gap: 28,
                    padding: "26px 0",
                  }}
                >
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      background: "var(--mint)",
                      display: "grid",
                      placeItems: "center",
                      fontWeight: 800,
                      zIndex: 2,
                      border: "3px solid var(--bg)",
                    }}
                  >
                    {i + 1}
                  </div>
                  <div>
                    <div className="eyebrow">{ph.week}</div>
                    <h3 className="h-md" style={{ marginTop: 6 }}>
                      {ph.title}
                    </h3>
                    <p style={{ marginTop: 12, maxWidth: 680 }} className="muted">
                      {ph.focus}
                    </p>
                    <div
                      style={{
                        marginTop: 18,
                        display: "grid",
                        gridTemplateColumns: "repeat(2, 1fr)",
                        gap: 14,
                      }}
                      className="phase-detail"
                    >
                      <Detail label="Track Lead" value={ph.lead} />
                      <Detail label="Synthica Core" value={ph.core} />
                    </div>
                    <div
                      style={{
                        marginTop: 14,
                        padding: "14px 18px",
                        borderRadius: 14,
                        background: "var(--mint)",
                        fontWeight: 600,
                        fontSize: "0.92rem",
                      }}
                    >
                      <strong>Deliverable — </strong>
                      {ph.deliverable}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .phase-detail { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div
      style={{
        padding: "14px 16px",
        borderRadius: 14,
        background: "rgba(255,255,255,0.55)",
        border: "1px solid var(--line)",
      }}
    >
      <div className="eyebrow" style={{ fontSize: "0.68rem", marginBottom: 6 }}>
        {label}
      </div>
      <p style={{ fontSize: "0.9rem" }} className="muted">
        {value}
      </p>
    </div>
  );
}
