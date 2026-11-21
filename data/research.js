export const researchInterests = [
  {
    code: "I",
    title: "Deterministic LLM Tool-Calling & Evaluation",
    summary:
      "Designing multi-layer schema, registry, and SQL-safety validation harnesses so model outputs can be measured and audited before touching production databases.",
  },
  {
    code: "II",
    title: "Human-in-the-Loop Clinical Decision Systems",
    summary:
      "Exploring auditable, local-first LLM workflows (Ollama) where recommendations stay transparent, logged with prompt and model provenance, and firmly advisory.",
  },
  {
    code: "III",
    title: "Resource-Constrained Edge Computer Vision",
    summary:
      "Profiling classical and lightweight vision pipelines under strict CPU and memory budgets on Raspberry Pi hardware with offline-first local state.",
  },
  {
    code: "IV",
    title: "Computer Architecture & Numerical Computing",
    summary:
      "Building from first principles — custom 32-bit processor datapaths, microprogrammed control logic, and classical numerical solvers studied for stability and error bounds.",
  },
];

export const researchNotes = [
  {
    id: "R-01",
    title: "Deterministic Multi-Layer Validation for LLM Function-Calling Pipelines",
    context: "Applied ML & System Validation · Independent Technical Study",
    year: "2025",
    status: "Active",
    abstract:
      "Language models frequently emit structurally plausible yet unsafe or off-registry tool calls. This study designs a deterministic verification pipeline—combining JSON Schema validation, static type checking, strict tool-registry enforcement, and SQL injection inspection—and instruments per-function latency, violation taxonomy, and reproducibility hashes across OpenAI-compatible and local models.",
    contributions: [
      "Four-stage pre-execution gate isolating raw LLM tool output from relational state",
      "Reproducibility hashing and dataset quality deltas for model-to-model benchmarking",
      "Interactive validation sandbox deployed publicly for empirical inspection",
    ],
    keywords: ["LLM Reliability", "Tool Calling", "Static Validation", "FastAPI", "SQLite"],
    projectSlug: "ai-function-validator",
    github: "https://github.com/AbirHasanArko/AI-Function-Validator",
    demo: "https://arko-hasan-ai-function-validator.hf.space",
  },
  {
    id: "R-02",
    title: "Auditable Local-LLM Decision Support for Episode-of-Care Clinical Workflows",
    context: "Applied AI & Healthcare Systems · Ongoing System Study",
    year: "2025",
    status: "Ongoing",
    abstract:
      "Clinical environments require full reconstructability of every decision. By modeling relational encounters as immutable episodes of care and pairing them with locally hosted Ollama models under a 2-second latency target, this work investigates how differential-diagnosis prompts, model versions, and clinician overrides can be logged as first-class audit records.",
    contributions: [
      "Encounter-centric relational schema maintaining strict referential integrity across prescriptions and lab orders",
      "Prompt and model-version provenance logging for every AI-assisted suggestion",
      "Role-scoped access boundaries ensuring AI remains advisory rather than autonomous",
    ],
    keywords: ["Clinical AI", "Local LLMs", "Auditability", "Relational Modeling", "Ollama"],
    projectSlug: "hellomed",
    github: "https://github.com/AbirHasanArko/HelloMed",
    demo: null,
  },
  {
    id: "R-03",
    title: "Sub-800ms Edge Face Recognition & Offline Sync on Raspberry Pi",
    context: "Edge Computer Vision · Embedded Systems Prototype",
    year: "2024",
    status: "Prototype",
    abstract:
      "Automated classroom attendance often fails under uneven lighting, partial occlusion, and intermittent connectivity. This prototype evaluates an OpenCV recognition pipeline tuned for CPU-only Raspberry Pi nodes, paired with an offline-tolerant local cache that reconciles session logs against a central FastAPI + PostgreSQL backend.",
    contributions: [
      "Profiled CPU inference path targeting sub-800ms frame-to-match latency without GPU hardware",
      "Handled partial face visibility and classroom lighting drift during live capture",
      "Decoupled capture from network uptime via end-of-session relational synchronization",
    ],
    keywords: ["Edge Inference", "OpenCV", "Raspberry Pi", "Offline Sync", "PostgreSQL"],
    projectSlug: "classos",
    github: "https://github.com/AbirHasanArko/ClassOS-legacy",
    demo: null,
  },
  {
    id: "R-04",
    title: "First-Principles 32-Bit Processor Architecture & Classical Numerical Solvers",
    context: "KUET CSE · Computer Architecture & Numerical Analysis Labs",
    year: "2024",
    status: "Completed",
    abstract:
      "Two foundational laboratory studies examining how software abstractions rest on hardware and floating-point realities: (1) designing a custom 32-bit ISA, ALU, register file, bus, and microprogrammed control unit in Logisim; and (2) implementing 15+ classical numerical solvers in C++ to observe truncation vs. round-off error and convergence sensitivity.",
    contributions: [
      "End-to-end 32-bit datapath executing arithmetic, logical, memory, and branching instructions",
      "Comparative C++ test harness for Newton-Raphson, Simpson's rules, RK4, and LU decomposition",
      "Empirical analysis of step-size stability and catastrophic cancellation near singularities",
    ],
    keywords: ["Computer Architecture", "Custom ISA", "Logisim", "Numerical Methods", "C++"],
    projectSlug: "32-bit-computer",
    github: "https://github.com/AbirHasanArko/32-Bit-Computer",
    demo: null,
  },
];

export const researchNoteText =
  "I approach engineering like a careful lab notebook: start from clear assumptions, build small systems you can actually measure, log what breaks, and leave clean documentation behind for the next person.";

export default {
  researchInterests,
  researchNotes,
  researchNoteText,
};
