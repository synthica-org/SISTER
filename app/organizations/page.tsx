"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import OrgMarquee from "@/components/OrgMarquee";
import { Mark } from "@/components/Mark";
import { ORGANIZATIONS, TRACKS } from "@/lib/data";

export default function OrganizationsPage() {
  return (
    <>
      <PageHero
        crumb="Organizations"
        lines={["The organizations", "behind SISTER"]}
        intro={
          <p>
            SISTER operates as a <strong>decentralized institute</strong>.
            Synthica organizes the program while premier student-led
            organizations lead specialized research tracks as Track Leads — every
            partner is recognized as a Co-Organizer.
          </p>
        }
      />

      {/* parallax marquee band */}
      <section style={{ padding: "30px 0 70px" }}>
        <OrgMarquee />
      </section>

      {/* parallax org cards */}
      <section className="section" style={{ paddingTop: 10 }}>
        <div className="shell">
          <Reveal as="div" className="eyebrow" inView>
            Co-Organizers & Track Leads
          </Reveal>
          <div
            className="grid grid-cols-3-wide"
            style={{ marginTop: 40, gap: 20 }}
          >
            {ORGANIZATIONS.map((o, i) => (
              <ParallaxOrgCard key={o.name} org={o} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* lead per track */}
      <section className="section section-dark">
        <div className="shell">
          <Reveal as="div" className="eyebrow" inView>
            Who leads what
          </Reveal>
          <Reveal as="h2" className="h-lg" inView delay={0.05} style={{ marginTop: 16, maxWidth: 720 }}>
            Each track is hosted by the organizations closest to the work.
          </Reveal>

          <div style={{ marginTop: 44, display: "grid", gap: 4 }}>
            {TRACKS.map((t, i) => (
              <Reveal key={t.slug} inView delay={(i % 3) * 0.05}>
                <Link
                  href={`/tracks#${t.slug}`}
                  className="lead-row"
                  style={{
                    padding: "22px 4px",
                    borderTop: "1px solid var(--line)",
                  }}
                >
                  <span style={{ fontWeight: 800, fontSize: "1.05rem" }}>
                    {t.name}
                  </span>
                  <span className="muted lead-row-meta" style={{ fontSize: "0.92rem" }}>
                    {t.leads.map((l) => l.name).join("  ·  ")}
                  </span>
                  <span style={{ color: "var(--mint-deep)", fontWeight: 800 }}>→</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* become a partner CTA */}
      <section className="section" style={{ textAlign: "center" }}>
        <div className="shell">
          <Reveal as="h2" className="h-xl" inView style={{ maxWidth: 820, margin: "0 auto" }}>
            Lead a track. Shape a researcher.
          </Reveal>
          <Reveal inView delay={0.1} className="lead muted">
            <p style={{ maxWidth: 540, margin: "20px auto 0" }}>
              Student-led organizations with subject expertise are invited to
              host a track. Mentors receive stipends for their instruction and
              guidance.
            </p>
          </Reveal>
          <Reveal inView delay={0.2}>
            <a href="mailto:hello@synthica.org" className="btn" style={{ marginTop: 28 }}>
              <span className="dot" /> Become a Track Lead →
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function ParallaxOrgCard({
  org,
  index,
}: {
  org: (typeof ORGANIZATIONS)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  // stagger the parallax depth per column for a layered feel
  const depth = 30 + (index % 3) * 20;
  const y = useTransform(scrollYProgress, [0, 1], [depth, -depth]);

  return (
    <motion.div ref={ref} style={{ y }}>
      <Reveal inView delay={(index % 3) * 0.06}>
        <div
          className="card"
          style={{
            background: "var(--bg-soft)",
            minHeight: 200,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Mark size={34} />
            <span className="chip">{org.role}</span>
          </div>
          <h3 className="h-md" style={{ marginTop: 22 }}>
            {org.name}
          </h3>
          <p className="muted" style={{ marginTop: "auto", paddingTop: 16, fontSize: "0.92rem" }}>
            {org.track}
          </p>
        </div>
      </Reveal>
    </motion.div>
  );
}
