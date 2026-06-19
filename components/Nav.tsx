"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { Mark } from "./Mark";
import { NAV_LINKS, APPLY_URL } from "@/lib/data";

export default function Nav() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 24));

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1], delay: 0.35 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 90,
        transition: "background 0.4s ease, box-shadow 0.4s ease",
        background: scrolled ? "rgba(230,240,248,0.78)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled ? "1px solid var(--line)" : "1px solid transparent",
      }}
    >
      <div className="shell nav-inner">
        <nav className="nav-left" style={{ display: "flex", gap: "1.7rem" }}>
          {NAV_LINKS.map((l) => (
            <NavLink key={l.href} {...l} active={pathname === l.href} />
          ))}
        </nav>

        <Link
          href="/"
          aria-label="SISTER home"
          className="nav-brand"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          <Mark size={28} spin />
          <span
            className="nav-brand-text"
            style={{
              fontWeight: 800,
              letterSpacing: "0.12em",
              fontSize: "1.05rem",
            }}
          >
            SISTER
          </span>
        </Link>

        <div className="nav-actions">
          <a
            href={APPLY_URL}
            className="btn nav-apply"
            target="_blank"
            rel="noopener noreferrer"
            style={{ padding: "0.7rem 1.2rem" }}
          >
            Apply
          </a>
          <button
            aria-label="Menu"
            className="nav-burger"
            onClick={() => setOpen((o) => !o)}
          >
            <span style={{ fontWeight: 800 }}>{open ? "×" : "≡"}</span>
          </button>
        </div>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="shell"
          style={{ paddingBottom: 20 }}
        >
          <div
            style={{
              display: "grid",
              gap: 4,
              background: "rgba(255,255,255,0.7)",
              border: "1px solid var(--line)",
              borderRadius: 16,
              padding: 12,
            }}
          >
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                style={{ padding: "0.7rem 0.6rem", fontWeight: 700 }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}

function NavLink({
  href,
  label,
  active,
}: {
  href: string;
  label: string;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      style={{
        position: "relative",
        fontWeight: 700,
        fontSize: "0.95rem",
        color: active ? "var(--ink)" : "var(--ink-60)",
        transition: "color 0.3s ease",
      }}
      className="navlink"
    >
      {label}
      <span
        style={{
          position: "absolute",
          left: 0,
          bottom: -6,
          height: 2,
          borderRadius: 2,
          background: "var(--ink)",
          width: active ? "100%" : "0%",
          transition: "width 0.35s cubic-bezier(0.2,0.7,0.2,1)",
        }}
        className="navline"
      />
    </Link>
  );
}
