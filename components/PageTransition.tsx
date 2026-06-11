"use client";

import {
  createContext,
  useContext,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";

type Phase = "idle" | "covering" | "covered" | "uncovering";

const BAR_COUNT = 10;
const FIRST_HOLD_MS = 480;
const COVER_MS = 860;
const HOLD_MS = 220;
const UNCOVER_MS = 900;

const TransitionContext = createContext<{
  navigate: (href: string) => void;
  busy: boolean;
}>({ navigate: () => {}, busy: false });

export const useTransitionNav = () => useContext(TransitionContext);

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  const [phase, setPhase] = useState<Phase>("covered");
  const pendingHref = useRef<string | null>(null);
  const lastPath = useRef(pathname);
  const isFirst = useRef(true);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const clearTimers = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  };
  const after = (ms: number, fn: () => void) => {
    const t = setTimeout(fn, ms);
    timers.current.push(t);
  };

  // First page load: reveal from dark.
  useEffect(() => {
    after(FIRST_HOLD_MS, () => setPhase("uncovering"));
    after(FIRST_HOLD_MS + UNCOVER_MS, () => setPhase("idle"));
    return clearTimers;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const navigate = useCallback(
    (href: string) => {
      if (phase !== "idle") return;
      isFirst.current = false;
      pendingHref.current = href;
      setPhase("covering");
      after(COVER_MS, () => {
        setPhase("covered");
        if (pendingHref.current) {
          router.push(pendingHref.current);
          window.scrollTo(0, 0);
        }
      });
    },
    [phase, router]
  );

  // When the new pathname arrives while covered, hold then uncover.
  useEffect(() => {
    if (lastPath.current === pathname) return;
    lastPath.current = pathname;
    if (phase === "covered") {
      after(HOLD_MS, () => setPhase("uncovering"));
      after(HOLD_MS + UNCOVER_MS, () => {
        setPhase("idle");
        pendingHref.current = null;
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // Document-level capture-phase link interception.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented) return;
      if (e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      const anchor = (e.target as HTMLElement)?.closest("a");
      if (!anchor) return;

      const target = anchor.getAttribute("target");
      if (target === "_blank") return;
      if (anchor.hasAttribute("download")) return;

      const href = anchor.getAttribute("href");
      if (!href) return;
      if (
        href.startsWith("#") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        href.startsWith("javascript:")
      )
        return;

      // cross-origin check
      const url = new URL(anchor.href, window.location.href);
      if (url.origin !== window.location.origin) return;

      const dest = url.pathname + url.search + url.hash;
      if (dest === pathname) return;

      e.preventDefault();
      navigate(dest);
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [navigate, pathname]);

  const busy = phase !== "idle";
  const covering = phase === "covering";
  const uncovering = phase === "uncovering";

  // The bars sweep consistently left → right across the whole transition.
  // "cover" group covers the screen (rests at 0%); "uncover" group sweeps the
  // bars off to the right (rests at 101%, off-screen) so when idle nothing is
  // shown. Remounting per group (key) lets each phase start from the correct
  // edge instead of animating from wherever it happened to rest.
  const sweep: "cover" | "uncover" =
    covering || phase === "covered" ? "cover" : "uncover";

  const initialX =
    sweep === "cover" ? (isFirst.current ? "0%" : "-101%") : "0%";
  const animateX = sweep === "cover" ? "0%" : "101%";

  return (
    <TransitionContext.Provider value={{ navigate, busy }}>
      {children}
      <div className={`page-wipe${busy ? " is-busy" : ""}`} aria-hidden>
        {Array.from({ length: BAR_COUNT }).map((_, i) => (
          <motion.span
            key={`${sweep}-${i}`}
            initial={{ x: initialX }}
            animate={{ x: animateX }}
            transition={{
              duration: sweep === "cover" ? 0.55 : 0.6,
              ease: [0.7, 0, 0.2, 1],
              delay: i * 0.03,
            }}
          />
        ))}
      </div>
    </TransitionContext.Provider>
  );
}
