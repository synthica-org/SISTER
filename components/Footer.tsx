"use client";

import Link from "next/link";
import { Mark } from "./Mark";
import { Reveal } from "./Reveal";
import { NAV_LINKS, APPLY_URL } from "@/lib/data";

export default function Footer() {
  return (
    <footer style={{ position: "relative", zIndex: 2 }}>
      {/* single, calm CTA band — transparent tint, no heavy slab */}
      <section className="section-dark" style={{ padding: "clamp(56px, 9vw, 110px) 0" }}>
        <div className="shell" style={{ textAlign: "center" }}>
          <Reveal as="div" className="eyebrow" inView>
            Applications open mid-June
          </Reveal>
          <Reveal as="h2" className="h-xl" inView delay={0.05} style={{ marginTop: 16, maxWidth: 720, marginInline: "auto" }}>
            Ready to become a researcher?
          </Reveal>
          <Reveal inView delay={0.12}>
            <a href={APPLY_URL} className="btn" style={{ marginTop: 28 }} target="_blank" rel="noopener noreferrer">
              <span className="dot" /> Apply to SISTER →
            </a>
          </Reveal>
        </div>
      </section>

      {/* footer body — light & transparent */}
      <div
        style={{
          borderTop: "1px solid var(--line)",
          background: "rgba(255,255,255,0.28)",
          backdropFilter: "blur(8px)",
        }}
      >
        <div className="shell" style={{ padding: "clamp(40px, 8vw, 56px) var(--pad) 40px" }}>
          <div className="foot-grid">
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <Mark size={26} />
                <span style={{ fontWeight: 800, letterSpacing: "0.12em" }}>
                  SISTER
                </span>
              </div>
              <p
                className="muted"
                style={{ marginTop: 16, maxWidth: 360, fontSize: "0.95rem" }}
              >
                Summer Institute of Science, Technology, and Engineering
                Research — a free, global, project-based research initiative run
                collaboratively by a coalition of premier student-led
                organizations.
              </p>
            </div>

            <div>
              <div className="eyebrow" style={{ marginBottom: 16 }}>
                Explore
              </div>
              <div style={{ display: "grid", gap: 10 }}>
                {NAV_LINKS.map((l) => (
                  <Link key={l.href} href={l.href} className="muted foot-link">
                    {l.label}
                  </Link>
                ))}
                <Link href="/publication" className="muted foot-link">
                  Publication
                </Link>
              </div>
            </div>

            <div>
              <div className="eyebrow" style={{ marginBottom: 16 }}>
                Get involved
              </div>
              <div style={{ display: "grid", gap: 10 }}>
                <a href={APPLY_URL} className="muted foot-link" target="_blank" rel="noopener noreferrer">
                  Apply as a student
                </a>
                <Link href="/organizations" className="muted foot-link">
                  Partner organizations
                </Link>
                <a href="mailto:hello@synthica.org" className="muted foot-link">
                  Contact us
                </a>
              </div>
            </div>
          </div>

          <div
            style={{
              marginTop: 48,
              paddingTop: 22,
              borderTop: "1px solid var(--line)",
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 12,
              fontSize: "0.85rem",
              color: "var(--ink-60)",
            }}
          >
            <span>© {new Date().getFullYear()} SISTER · A student-led coalition</span>
            <span>Global / Virtual · Free for all participants</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
