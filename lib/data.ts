// Central content for the SISTER website.
// SISTER — Summer Institute of Science, Technology, and Engineering Research

export const SITE = {
  name: "SISTER",
  full: "Summer Institute of Science, Technology, and Engineering Research",
  organizer: "Synthica",
  tagline: ["Turning students", "into researchers"],
  blurb:
    "SISTER is a FREE, global, project-based research institute empowering high school and early undergraduate students through rigorous STEM and Social Science research.",
};

export const APPLY_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSc851kN-KrRSHFF6xYTc-9m6YUf_W20Oq0uvWsQ5x2nZxeOqg/viewform?usp=header";

export const NAV_LINKS = [
  { label: "Framework", href: "/framework" },
  { label: "Tracks", href: "/tracks" },
  { label: "Schedule", href: "/schedule" },
  { label: "Organizations", href: "/organizations" },
];

export const NAV_RIGHT = [
  { label: "About", href: "/framework" },
  { label: "Publish", href: "/publication" },
];

// ── Program pillars (The SISTER Framework — tripartite model) ───────────────
export const PILLARS = [
  {
    id: "tracks",
    no: "01",
    title: "Subject-Specific Tracks",
    summary:
      "Each track is hosted by 1–2 recognized student-led organizations acting as Track Leads.",
    points: [
      {
        h: "Actionable Projects",
        p: "A research prompt or project students can complete within the summer timeframe.",
      },
      {
        h: "Weekly Instruction",
        p: "At least one technical session per week teaching subject-specific methodologies.",
      },
      {
        h: "Mentorship Support",
        p: "Active guidance so members work on their project with a clear direction.",
      },
      {
        h: "Expert Resources",
        p: "Datasets, software access, and subject-matter guides for every student.",
      },
    ],
  },
  {
    id: "core",
    no: "02",
    title: "The Synthica Core",
    summary:
      "Partner organizations drive subject depth; Synthica provides the spine of the program.",
    points: [
      {
        h: "Research Skills Sessions",
        p: "Weekly sessions on universal competencies: literature reviews, IMRaD, and ethical compliance.",
      },
      {
        h: "Guest Speaker Series",
        p: "A weekly webinar with speakers from academia and industry on STEM careers.",
      },
      {
        h: "Operational Oversight",
        p: "Logistics, inter-track communication, and final output quality management.",
      },
    ],
  },
  {
    id: "publication",
    no: "03",
    title: "Publication & Output",
    summary:
      "The top 3 projects from each track are selected for formal publication.",
    points: [
      {
        h: "Synthica Journal",
        p: "Selected projects are published in the open-access Synthica Journal.",
      },
      {
        h: "Double-Blind Review",
        p: "Peer review ensures every project meets technical and ethical standards.",
      },
      {
        h: "Open Access",
        p: "APCs are covered so research stays free to the global scientific community.",
      },
    ],
  },
];

// ── Curated subject tracks ──────────────────────────────────────────────────
// Each lead is an organization (no individual names). `href` links the org's
// site where available.
export type Lead = { name: string; href?: string };
export type Track = {
  slug: string;
  name: string;
  focus: string;
  leads: Lead[];
  blurb: string;
  tags: string[];
};

export const TRACKS: Track[] = [
  {
    slug: "ai-ml",
    name: "AI / ML",
    focus: "Multi-Agent Systems, Model Development & AI Safety",
    leads: [
      {
        name: "Dubai Computer Science Society",
        href: "https://research.dubaicssociety.com",
      },
      { name: "Delta Rising Foundation" },
    ],
    blurb:
      "Do real machine-learning research. Students design and train models, build multi-agent and agentic systems, run rigorous evaluations, and probe how modern AI behaves — with safety and ethics treated as part of the engineering, not an afterthought.",
    tags: ["Multi-Agent Systems", "Agentic AI", "Model Development", "AI Safety"],
  },
  {
    slug: "computational-biology",
    name: "Computational Biology",
    focus: "Genomics, Protein Folding, and Systems Biology",
    leads: [{ name: "NovusCatalyst" }],
    blurb:
      "Decode the machinery of life with code. Students model genomic sequences, predict protein structure, and build systems-level views of living organisms.",
    tags: ["Genomics", "Protein Folding", "Systems Biology"],
  },
  {
    slug: "economics",
    name: "Economics",
    focus: "Econometrics and Game Theory",
    leads: [{ name: "FinanceMeta" }, { name: "Youth Economy Lab" }],
    blurb:
      "Quantify human decisions and markets. Students apply econometrics and game theory to real datasets and strategic systems.",
    tags: ["Econometrics", "Game Theory", "Markets"],
  },
  {
    slug: "psychology",
    name: "Psychology / Cognitive Science",
    focus: "Human-Computer Interaction (HCI) and Behavioral Psychology",
    leads: [{ name: "MindScroll Health" }],
    blurb:
      "Study the mind where it meets technology. Research spans human-computer interaction and behavioral psychology with rigorous experimental design.",
    tags: ["HCI", "Behavioral Psychology", "Experiments"],
  },
  {
    slug: "biomedicine-data-science",
    name: "Biomedicine & Data Science",
    focus: "Biostatistics and Predictive Diagnostics",
    leads: [{ name: "ATLAS" }],
    blurb:
      "Turn clinical data into insight. Students use biostatistics and predictive modeling to advance diagnostics and health outcomes.",
    tags: ["Biostatistics", "Diagnostics", "Health Data"],
  },
  {
    slug: "neuroscience",
    name: "Neuroscience",
    focus: "Cognitive Science and Neural Modeling",
    leads: [{ name: "Track Lead — to be announced" }],
    blurb:
      "Investigate how the brain computes. From cognitive science to neural modeling, students explore the substrate of thought and behavior.",
    tags: ["Cognitive Science", "Neural Modeling", "Behavior"],
  },
  {
    slug: "social-science",
    name: "Social Science",
    focus: "Quantitative & qualitative research methods",
    leads: [{ name: "Track Lead — to be announced" }],
    blurb:
      "A rigorous social science track bringing quantitative and qualitative research methods to questions about society, institutions, and people.",
    tags: ["Methods", "Society", "Research"],
  },
  {
    slug: "additional-tracks",
    name: "Additional Tracks",
    focus: "More disciplines announced each cycle",
    leads: [{ name: "Partner organizations — to be announced" }],
    blurb:
      "New disciplines are added each cycle as partner organizations join. More tracks will be announced before applications open.",
    tags: ["Emerging", "Interdisciplinary", "New"],
  },
];

// ── Partner / track-lead organizations (for parallax marquee) ───────────────
export const ORGANIZATIONS = [
  {
    name: "Dubai Computer Science Society",
    role: "Track Lead",
    track: "AI / ML",
    href: "https://research.dubaicssociety.com",
  },
  { name: "Delta Rising Foundation", role: "Track Lead", track: "AI / ML" },
  { name: "NovusCatalyst", role: "Track Lead", track: "Computational Biology" },
  { name: "FinanceMeta", role: "Track Lead", track: "Economics" },
  { name: "Youth Economy Lab", role: "Track Lead", track: "Economics" },
  { name: "MindScroll Health", role: "Track Lead", track: "Psychology" },
  { name: "ATLAS", role: "Track Lead", track: "Biomedicine & Data Science" },
  { name: "Synthica", role: "Core & Publication", track: "Synthica Journal" },
];

// ── 4-week project phases ───────────────────────────────────────────────────
export const PHASES = [
  {
    week: "Week 1",
    title: "Foundation & Team Forming",
    focus:
      "Project scoping, team organization, and foundational research literacy.",
    lead: "Introduction to the subject track's scope and available actionable projects.",
    core: "Research skills session covering literature reviews and project definition.",
    deliverable:
      "Teams select their final research prompt and complete an initial literature review.",
  },
  {
    week: "Week 2",
    title: "Methodology & Building",
    focus:
      "Defining methodology, infrastructure setup, and initiating data collection.",
    lead: "Forming a clear methodology and accessing expert resources — datasets, software, guides.",
    core: "Research skills session on ethical compliance and data management best practices.",
    deliverable:
      "Finalized methodology, project infrastructure, and initial data collection / model building begins.",
  },
  {
    week: "Week 3",
    title: "Building & Collecting Results",
    focus:
      "Advanced technical building, refining data collection, and result visualization.",
    lead: "Learning specific skills, refining data collection, and active mentorship to guide work.",
    core: "Research skills session on collecting, analyzing, and visualizing results.",
    deliverable:
      "Completed data collection, preliminary analysis, and initial data visualizations.",
  },
  {
    week: "Week 4",
    title: "Writing & Final Submission",
    focus: "Manuscript drafting, peer refinement, and final project submission.",
    lead: "Guidance on structuring the discussion and conclusion sections.",
    core: "Research skills session on the full IMRaD structure and effective scientific writing.",
    deliverable:
      "Full manuscript drafting, internal peer refinement, and final project submission.",
  },
];

// ── Key figures ─────────────────────────────────────────────────────────────
export const FIGURES = [
  { value: "4", label: "weeks of intensive, project-based research" },
  { value: "8+", label: "specialized research tracks across STEM & social science" },
  { value: "Top 3", label: "projects per track selected for publication" },
  { value: "$0", label: "cost — fully free instruction and mentorship" },
];

export const LOGISTICS = [
  { k: "Location", v: "Global / Virtual" },
  { k: "Applications", v: "Open mid-June" },
  { k: "Program begins", v: "Late June / Early July" },
  { k: "Duration", v: "4 weeks" },
  { k: "Concludes", v: "Mid-August" },
  { k: "Organized by", v: "A coalition of student-led organizations" },
  { k: "Incentive", v: "Publication in the Synthica Journal" },
  { k: "Price", v: "Free" },
];
