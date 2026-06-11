"use client";

import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import { Mark } from "@/components/Mark";
import { TRACKS, LOGISTICS } from "@/lib/data";

export default function ApplyPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHero
        crumb="Apply"
        lines={["Apply to", "SISTER"]}
        intro={
          <p>
            Applications open in <strong>mid-June</strong>. The program is{" "}
            <strong>free</strong> and open to high school and early
            undergraduate students worldwide. Register your interest below and
            we&apos;ll send you the application the moment it opens.
          </p>
        }
      />

      <section className="section" style={{ paddingTop: 50 }}>
        <div
          className="shell"
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            gap: 48,
            alignItems: "start",
          }}
        >
          <Reveal inView>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              style={{
                background: "rgba(255,255,255,0.6)",
                border: "1px solid var(--line)",
                borderRadius: 24,
                padding: "clamp(24px, 4vw, 40px)",
                backdropFilter: "blur(8px)",
              }}
              className="apply-form"
            >
              {sent ? (
                <div style={{ textAlign: "center", padding: "40px 0" }}>
                  <Mark size={60} spin />
                  <h3 className="h-md" style={{ marginTop: 20 }}>
                    You&apos;re on the list.
                  </h3>
                  <p className="muted" style={{ marginTop: 10 }}>
                    We&apos;ll email you at the address provided as soon as
                    applications open.
                  </p>
                </div>
              ) : (
                <>
                  <Field label="Full name" placeholder="Ada Lovelace" />
                  <Field
                    label="Email"
                    type="email"
                    placeholder="you@school.edu"
                  />
                  <Field
                    label="School / Institution"
                    placeholder="Where you study"
                  />
                  <div style={{ marginBottom: 18 }}>
                    <label className="eyebrow" style={{ display: "block", marginBottom: 8 }}>
                      Preferred track
                    </label>
                    <select
                      style={inputStyle}
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select a track…
                      </option>
                      {TRACKS.map((t) => (
                        <option key={t.slug} value={t.slug}>
                          {t.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div style={{ marginBottom: 22 }}>
                    <label className="eyebrow" style={{ display: "block", marginBottom: 8 }}>
                      Why SISTER? (optional)
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us what you want to research…"
                      style={{ ...inputStyle, resize: "vertical" }}
                    />
                  </div>
                  <button type="submit" className="btn" style={{ width: "100%", justifyContent: "center" }}>
                    <span className="dot" /> Register interest
                  </button>
                  <p className="muted" style={{ marginTop: 14, fontSize: "0.82rem", textAlign: "center" }}>
                    Free · Global / Virtual · No commitment to register interest.
                  </p>
                </>
              )}
            </form>
          </Reveal>

          <Reveal inView delay={0.1}>
            <div>
              <div className="eyebrow">What you get</div>
              <div style={{ marginTop: 18, display: "grid", gap: 2 }}>
                {[
                  "Weekly technical instruction from a student-led Track Lead",
                  "Universal research-skills sessions from the Synthica Core",
                  "A guest speaker webinar each week",
                  "Mentorship and expert resources — datasets, software, guides",
                  "A real, publication-worthy research project",
                  "A shot at publication in the open-access Synthica Journal",
                ].map((item, i) => (
                  <div
                    key={i}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "auto 1fr",
                      gap: 14,
                      padding: "16px 0",
                      borderTop: "1px solid var(--line)",
                    }}
                  >
                    <Mark size={20} />
                    <span style={{ fontWeight: 600 }}>{item}</span>
                  </div>
                ))}
              </div>

              <div
                style={{
                  marginTop: 30,
                  padding: "22px 24px",
                  borderRadius: 18,
                  background: "var(--mint)",
                }}
              >
                <div className="eyebrow" style={{ marginBottom: 12 }}>
                  Key dates
                </div>
                {LOGISTICS.slice(0, 5).map((l) => (
                  <div
                    key={l.k}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "7px 0",
                      fontSize: "0.9rem",
                    }}
                  >
                    <span style={{ opacity: 0.7 }}>{l.k}</span>
                    <span style={{ fontWeight: 700 }}>{l.v}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <style>{`
        @media (max-width: 860px) {
          .apply-form { order: 2; }
          .shell[style*="grid-template-columns: 1.1fr"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "13px 15px",
  borderRadius: 12,
  border: "1px solid var(--line)",
  background: "rgba(255,255,255,0.7)",
  fontSize: "0.98rem",
  fontFamily: "inherit",
  color: "var(--ink)",
  outline: "none",
};

function Field({
  label,
  type = "text",
  placeholder,
}: {
  label: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div style={{ marginBottom: 18 }}>
      <label className="eyebrow" style={{ display: "block", marginBottom: 8 }}>
        {label}
      </label>
      <input type={type} placeholder={placeholder} style={inputStyle} required />
    </div>
  );
}
