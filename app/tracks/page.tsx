"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import { Mark } from "@/components/Mark";
import { TRACKS, type Track } from "@/lib/data";

export default function TracksPage() {
  // first track open by default so the page reads clearly on load
  const [open, setOpen] = useState<string | null>(TRACKS[0].slug);

  return (
    <>
      <PageHero
        crumb="Tracks"
        lines={["Curated", "research tracks"]}
        intro={
          <p>
            SISTER hosts a diverse array of disciplines, each led by recognized
            student-led organizations who design an actionable,
            publication-worthy project. Open a track to see its focus and lead
            organizers.
          </p>
        }
      />

      <section className="section" style={{ paddingTop: 50 }}>
        <div className="shell">
          <div
            className="panel"
            style={{ overflow: "hidden", padding: "6px 6px" }}
          >
            {TRACKS.map((t, i) => (
              <Reveal key={t.slug} inView delay={i * 0.04}>
                <TrackItem
                  track={t}
                  index={i}
                  isOpen={open === t.slug}
                  onToggle={() =>
                    setOpen((cur) => (cur === t.slug ? null : t.slug))
                  }
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function TrackItem({
  track,
  index,
  isOpen,
  onToggle,
}: {
  track: Track;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      id={track.slug}
      style={{
        scrollMarginTop: 110,
        borderRadius: 16,
        background: isOpen ? "rgba(255,255,255,0.45)" : "transparent",
        transition: "background 0.4s ease",
      }}
    >
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        style={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "auto 1fr auto",
          gap: 18,
          alignItems: "center",
          padding: "22px 22px",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          color: "var(--ink)",
          borderBottom:
            "1px solid var(--line-soft)",
        }}
        className="track-head"
      >
        <span
          style={{
            fontWeight: 800,
            fontSize: "0.8rem",
            color: "var(--mint-deep)",
            width: 28,
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        <span>
          <span className="h-md" style={{ display: "block" }}>
            {track.name}
          </span>
          <span
            style={{
              fontSize: "0.9rem",
              color: "var(--ink-60)",
              fontWeight: 600,
            }}
          >
            {track.focus}
          </span>
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.35, ease: [0.2, 0.7, 0.2, 1] }}
          style={{
            display: "grid",
            placeItems: "center",
            width: 40,
            height: 40,
            borderRadius: 12,
            background: "var(--mint)",
            fontSize: "1.4rem",
            fontWeight: 400,
            lineHeight: 1,
          }}
        >
          +
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.2, 0.7, 0.2, 1] }}
            style={{ overflow: "hidden" }}
          >
            <div className="track-body">
              <div>
                <p className="muted" style={{ maxWidth: 520, fontSize: "1rem" }}>
                  {track.blurb}
                </p>
                <div
                  style={{
                    marginTop: 18,
                    display: "flex",
                    gap: 8,
                    flexWrap: "wrap",
                  }}
                >
                  {track.tags.map((tag) => (
                    <span key={tag} className="chip">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <div className="eyebrow" style={{ marginBottom: 12 }}>
                  Lead {track.leads.length > 1 ? "organizers" : "organizer"}
                </div>
                <div style={{ display: "grid", gap: 10 }}>
                  {track.leads.map((lead) => {
                    const inner = (
                      <>
                        <Mark size={20} />
                        <span style={{ fontWeight: 700, fontSize: "0.92rem" }}>
                          {lead.name}
                        </span>
                        {lead.href && (
                          <span
                            style={{
                              marginLeft: "auto",
                              color: "var(--mint-deep)",
                              fontWeight: 800,
                            }}
                          >
                            ↗
                          </span>
                        )}
                      </>
                    );
                    const style: React.CSSProperties = {
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      padding: "12px 14px",
                      borderRadius: 12,
                      background: "rgba(255,255,255,0.5)",
                      border: "1px solid var(--line)",
                    };
                    return lead.href ? (
                      <a
                        key={lead.name}
                        href={lead.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={style}
                        className="lead-card"
                      >
                        {inner}
                      </a>
                    ) : (
                      <div key={lead.name} style={style}>
                        {inner}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
