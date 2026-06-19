"use client";

// A clean, structured, *cheap* background field.
//
// Design: a soft blue gradient wash + a calm flow-line field (smooth contour
// curves) + a sparse constellation of connected nodes — intentional geometry,
// not random blobs. Inspired by elegant network/flow-field hero backgrounds.
//
// Performance: NO animated SVG filters (those recompute every frame and were
// causing the lag). Everything is static SVG geometry; the only motion is a
// single slow CSS `transform` drift on a wrapper, which stays on the GPU
// compositor and costs essentially nothing.

export default function BackgroundField() {
  return (
    <div
      aria-hidden
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        overflow: "hidden",
        pointerEvents: "none",
        background:
          "radial-gradient(130% 100% at 78% 8%, #eaf6fb 0%, #e3f0fa 38%, #d8eaf6 70%, #d0e5f2 100%)",
      }}
    >
      {/* soft corner glow — pure CSS, static */}
      <div
        style={{
          position: "absolute",
          top: "-25%",
          right: "-15%",
          width: "70vw",
          height: "70vw",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(191,220,238,0.55) 0%, rgba(191,220,238,0) 62%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-30%",
          left: "-18%",
          width: "60vw",
          height: "60vw",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(158,200,232,0.4) 0%, rgba(158,200,232,0) 64%)",
        }}
      />

      {/* flow-line + constellation field, slowly drifting (GPU transform only) */}
      <div className="bg-drift" style={{ position: "absolute", inset: "-8%" }}>
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
          style={{ position: "absolute", inset: 0 }}
        >
          <defs>
            <linearGradient id="flow" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="rgba(12,26,60,0)" />
              <stop offset="45%" stopColor="rgba(12,26,60,0.14)" />
              <stop offset="100%" stopColor="rgba(12,26,60,0)" />
            </linearGradient>
          </defs>

          {/* flowing contour lines — a calm "flow field" sweeping across */}
          <g
            fill="none"
            stroke="url(#flow)"
            strokeWidth="1"
          >
            {Array.from({ length: 9 }).map((_, i) => {
              const o = i * 46;
              return (
                <path
                  key={i}
                  d={`M ${-120 + o} ${-60}
                      C ${380 + o} ${120 + i * 18}, ${720 + o} ${420 + i * 8}, ${1120 + o} ${300 + i * 22}
                      S ${1700 + o} ${640}, ${1980 + o} ${520 + i * 14}`}
                  opacity={0.5 - i * 0.03}
                />
              );
            })}
          </g>

          {/* sparse constellation nodes + connectors */}
          <g stroke="rgba(12,26,60,0.12)" strokeWidth="1">
            {CONSTELLATION.links.map(([a, b], i) => (
              <line
                key={i}
                x1={CONSTELLATION.nodes[a][0]}
                y1={CONSTELLATION.nodes[a][1]}
                x2={CONSTELLATION.nodes[b][0]}
                y2={CONSTELLATION.nodes[b][1]}
              />
            ))}
          </g>
          <g fill="rgba(12,26,60,0.22)">
            {CONSTELLATION.nodes.map(([x, y], i) => (
              <circle key={i} cx={x} cy={y} r={i % 4 === 0 ? 2.6 : 1.6} />
            ))}
          </g>
        </svg>
      </div>

      <style>{`
        .bg-drift {
          will-change: transform;
          animation: bgDrift 60s ease-in-out infinite alternate;
        }
        @keyframes bgDrift {
          0%   { transform: translate3d(0, 0, 0) scale(1.02); }
          100% { transform: translate3d(-2.5%, 1.5%, 0) scale(1.06); }
        }
        @media (prefers-reduced-motion: reduce) {
          .bg-drift { animation: none; }
        }
      `}</style>
    </div>
  );
}

// A hand-placed constellation, kept to the lower-left so it never sits behind
// the nav / Apply button in the top-right.
const CONSTELLATION = {
  nodes: [
    [120, 640],
    [260, 720],
    [80, 800],
    [330, 600],
    [700, 760],
    [560, 700],
    [840, 690],
  ] as [number, number][],
  links: [
    [0, 1],
    [1, 3],
    [3, 0],
    [1, 2],
    [4, 5],
    [5, 6],
    [4, 6],
  ] as [number, number][],
};
