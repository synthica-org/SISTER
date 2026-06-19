"use client";

import { Reveal } from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import { Mark } from "@/components/Mark";
import { APPLY_URL } from "@/lib/data";

export default function PublicationPage() {
  return (
    <>
      <PageHero
        crumb="Publication"
        lines={["Published,", "open to all"]}
        intro={
          <p>
            A core pillar of SISTER is the publication of top research in the{" "}
            <strong>Synthica Journal</strong>. At the conclusion of the program,
            the top 3 projects from each track are selected for formal
            publication.
          </p>
        }
      />

      <section className="section" style={{ paddingTop: 50 }}>
        <div className="shell">
          <div
            className="grid"
            style={{ gridTemplateColumns: "repeat(3, 1fr)" }}
          >
            {[
              {
                h: "Top 3 per track",
                p: "The strongest projects from every track are nominated for the journal — a clear, attainable target for each team.",
              },
              {
                h: "Double-blind review",
                p: "Each project undergoes double-blind peer review to ensure it meets the journal's technical and ethical standards.",
              },
              {
                h: "Open access, no fees",
                p: "Funding covers the Article Processing Charges so research stays freely available — no financial barriers for students or readers.",
              },
            ].map((b, i) => (
              <Reveal key={b.h} inView delay={i * 0.08}>
                <div className="card" style={{ background: "var(--bg-soft)", height: "100%" }}>
                  <Mark size={32} />
                  <h3 className="h-md" style={{ marginTop: 18 }}>
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

      {/* review pipeline */}
      <section className="section section-dark">
        <div className="shell">
          <Reveal as="div" className="eyebrow" inView>
            From project to publication
          </Reveal>
          <Reveal as="h2" className="h-lg" inView delay={0.05} style={{ marginTop: 16 }}>
            The pathway, step by step.
          </Reveal>

          <div style={{ marginTop: 44, display: "grid", gap: 4 }}>
            {[
              ["01", "Final submission", "Teams submit their full manuscript at the end of Week 4, refined through internal peer review."],
              ["02", "Track selection", "Track Leads nominate the top 3 projects from their cohort for journal consideration."],
              ["03", "Double-blind peer review", "Reviewers assess each manuscript on technical rigor and ethical compliance, blind to authorship."],
              ["04", "Open-access publication", "Accepted projects are published in the Synthica Journal with APCs fully covered."],
            ].map(([no, h, p], i) => (
              <Reveal key={no} inView delay={i * 0.06}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "auto 1fr",
                    gap: 24,
                    padding: "24px 0",
                    borderTop: "1px solid var(--line)",
                    alignItems: "baseline",
                  }}
                >
                  <span style={{ fontWeight: 800, color: "var(--mint-deep)", fontSize: "1.1rem" }}>
                    {no}
                  </span>
                  <div>
                    <h3 className="h-md">{h}</h3>
                    <p className="muted" style={{ marginTop: 8, maxWidth: 620 }}>
                      {p}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal inView delay={0.2}>
            <a href={APPLY_URL} className="btn" style={{ marginTop: 44 }} target="_blank" rel="noopener noreferrer">
              <span className="dot" /> Start your research →
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
