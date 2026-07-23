export const projects = [
  {
    slug: "hellomed",
    name: "HelloMed",
    emoji: "🏥",
    description:
      "Hospital management web platform with AI-assisted recommendation features using LLM-powered workflows, relational schema and validation logic.",
    longDescription:
      "HelloMed is an end-to-end hospital management system I designed for clinics that need digital workflows without committing to a heavyweight EMR. It models the encounter, not the patient, so every visit, prescription, and lab order belongs to a specific episode of care. On top of the relational core sits an Ollama-powered recommendation engine that suggests differential diagnoses from symptoms — it suggests, never decides, and every AI suggestion is logged with the prompt and model version.",
    highlights: [
      "Relational schema modelling encounters, prescriptions, lab orders, and results with referential integrity",
      "Ollama-powered differential-diagnosis suggestion engine with full audit log of prompts and model versions",
      "Role-based access control for doctors, nurses, reception, and admin with route-level guards",
      "Audit trail: every record update is timestamped and attributable to a user",
    ],
    challenges: [
      "Designing a schema that scales to multi-clinic deployments without requiring nightly batch reconciliation",
      "Keeping LLM latency acceptable (< 2s) on small Ollama models while still surfacing a ranked suggestion list",
    ],
    learnings: [
      "Healthcare software is unforgiving when you can't reconstruct what happened — build the event log first",
      "AI in clinical settings must suggest, not decide, and every override is part of the audit trail",
    ],
    tech: ["PHP", "Laravel", "SQLite", "Ollama"],
    github: "https://github.com/AbirHasanArko/HelloMed",
    live: null,
    demoEmbed: null,
    featured: true,
    status: "ongoing",
    category: "Web",
    date: "2025",
  },
  {
    slug: "ai-function-validator",
    name: "AI Function Validator",
    emoji: "🧪",
    description:
      "End-to-end AI function-calling simulator. Natural language → structured JSON tool calls → validation → SQL execution → dataset quality analysis. Includes a multi-layer validation engine (JSON schema, type check, registry enforcement, SQL injection detection) and analytics dashboard.",
    longDescription:
      "AI Function Validator is a sandbox for stress-testing LLM tool-calling pipelines. You give it a natural-language task and a registry of allowed functions, and it walks the request through structured JSON tool calls, schema validation, type checking, registry enforcement, and SQL injection detection before executing against a SQLite database. The analytics dashboard then surfaces per-function success rates, schema-violation patterns, and average tool-call latency so you can compare models on real, deterministic tasks instead of vibes.",
    highlights: [
      "Multi-layer validation engine: JSON schema, type check, registry enforcement, SQL injection detection",
      "Function-call analytics dashboard with success rates, latency, and schema-violation breakdowns",
      "Model-agnostic: works with any OpenAI-compatible endpoint (OpenAI, Ollama, vLLM, etc.)",
      "Dataset quality scoring: every run produces a reproducibility hash and a quality delta vs. ground truth",
    ],
    challenges: [
      "Designing a registry DSL that is restrictive enough to catch injection but flexible enough for real-world tool definitions",
      "Surfacing LLM errors as actionable analytics instead of opaque stack traces",
    ],
    learnings: [
      "Treat tool calls like database queries: validate, log, and isolate them — never let raw model output touch the DB",
      "Deterministic validation pipelines make model comparison honest",
    ],
    tech: [
      "Python",
      "FastAPI",
      "SQLite",
      "Pydantic",
      "OpenAI",
      "Chart.js",
      "JavaScript",
    ],
    github: "https://github.com/AbirHasanArko/AI-Function-Validator",
    live: "https://arko-hasan-ai-function-validator.hf.space",
    demoEmbed: "https://arko-hasan-ai-function-validator.hf.space",
    featured: true,
    status: "shipped",
    category: "AI",
    date: "2025",
  },
  {
    slug: "classos",
    name: "ClassOS",
    emoji: "🎓",
    description:
      "Classroom attendance platform powered by FastAPI + PostgreSQL with computer-vision pipelines using OpenCV, deployed on Raspberry Pi.",
    longDescription:
      "ClassOS automates classroom attendance using a Raspberry Pi + camera module running an OpenCV face-recognition pipeline. A FastAPI backend talks to PostgreSQL for student rosters and attendance logs, with a per-class dashboard for instructors. It was designed to run on a single Pi per classroom, syncing attendance records back to a central server at the end of each session.",
    highlights: [
      "OpenCV face-recognition pipeline tuned for classroom lighting and partial occlusion",
      "FastAPI + PostgreSQL backend with per-class roster and session management",
      "Edge deployment on Raspberry Pi with offline-tolerant local caching and end-of-session sync",
    ],
    challenges: [
      "Keeping recognition latency under 800ms on Pi-class hardware without GPU acceleration",
      "Handling classroom edge cases: masks, profile angles, partial face visibility",
    ],
    learnings: [
      "Edge inference budgets are tighter than they look — profile, then optimise",
      "Sync-friendly local caches beat always-online assumptions in real classrooms",
    ],
    tech: ["Python", "FastAPI", "OpenCV", "PostgreSQL", "Raspberry Pi"],
    github: "https://github.com/AbirHasanArko/ClassOS-legacy",
    live: null,
    demoEmbed: null,
    featured: true,
    status: "ongoing",
    category: "AI",
    date: "2024",
  },
  {
    slug: "passman",
    name: "PassMan",
    emoji: "🔐",
    description:
      "Secure password manager and encrypted file vault. AES-256-CBC, SHA-256, PBKDF2 key derivation; cross-platform JavaFX desktop + Android client with Material Design 3.",
    longDescription:
      "PassMan is a cross-platform password manager with both a JavaFX desktop client and an Android client built with Material Design 3. Vaults are encrypted at rest with AES-256-CBC, keys are derived with PBKDF2, and file attachments are stored alongside entries as encrypted blobs. The desktop client focuses on power-user workflows (bulk import, CSV export, custom fields), while the Android client focuses on quick unlock via biometric + master password fallback.",
    highlights: [
      "AES-256-CBC vault encryption with PBKDF2 key derivation and per-entry salts",
      "JavaFX desktop client with bulk import/export and custom fields",
      "Android client with Material Design 3 and biometric unlock",
      "Encrypted file vault: attachments are stored as encrypted blobs alongside entries",
    ],
    challenges: [
      "Keeping biometric unlock secure without ever exposing the master password to the Android Keystore fallback path",
      "Cross-platform UI parity without abstracting away the strengths of each platform",
    ],
    learnings: [
      "PBKDF2 with a sane iteration count is still a respectable default for password-derived keys",
      "Encrypted blobs are simpler than per-file key management and almost always good enough",
    ],
    tech: [
      "Java",
      "JavaFX",
      "Android",
      "SQLite",
      "Material Design 3",
      "AES-256-CBC",
      "SHA-256",
      "PBKDF2",
    ],
    github: "https://github.com/AbirHasanArko/PassMan",
    live: null,
    demoEmbed: null,
    featured: true,
    status: "shipped",
    category: "Java",
    date: "2024",
  },
  {
    slug: "numerical-computing-suite",
    name: "Numerical Computing Suite",
    emoji: "🧮",
    description:
      "C++ toolkit implementing 15+ classical numerical analysis algorithms: linear/non-linear solvers, interpolation, numerical differentiation/integration, curve fitting, ODEs (Newton-Raphson, Bisection, Simpson's rules, Runge-Kutta, LU decomposition).",
    longDescription:
      "A from-scratch C++ implementation of the numerical methods I studied in my Numerical Methods course. The suite covers equation solving (Newton-Raphson, Bisection, Secant), interpolation (Newton forward/backward divided differences), numerical differentiation and integration (Simpson's 1/3 and 3/8, trapezoidal), curve fitting (least squares), ODEs (Runge-Kutta 4th order), and linear algebra (LU decomposition). Every method has a CLI demo with a known-good test case so you can compare numerical vs analytical results side by side.",
    highlights: [
      "15+ classical numerical methods with CLI demos and known-good test cases",
      "Newton-Raphson, Bisection, Secant for non-linear equations",
      "Simpson's 1/3, Simpson's 3/8, and trapezoidal rules for numerical integration",
      "Runge-Kutta 4th order for ODEs and LU decomposition for linear systems",
    ],
    challenges: [
      "Avoiding catastrophic cancellation in finite-difference formulas near singularities",
      "Picking step sizes that balance truncation error vs round-off error in practice",
    ],
    learnings: [
      "Numerical methods teach humility: small epsilon changes can flip convergence",
      "Always print intermediate values — debugging numerics without them is guesswork",
    ],
    tech: ["C++"],
    github: "https://github.com/AbirHasanArko/Numerical-Computing-Suite",
    live: null,
    demoEmbed: null,
    featured: false,
    status: "shipped",
    category: "C++",
    date: "2024",
  },
  {
    slug: "photo-editor",
    name: "Photo Editor",
    emoji: "📷",
    description:
      "Command-line image processing app in C++ for JPEG load/manipulate/export. Implements Gaussian blur, grayscale, Sobel edge detection, mirroring, sepia, color inversion in a clean OOP architecture.",
    longDescription:
      "A command-line image processor I built to learn JPEG internals the hard way. It implements its own JPEG load/manipulate/export pipeline without external image libraries, then layers classical computer-vision operators (Gaussian blur, Sobel edge detection) and stylisation filters (sepia, grayscale, color inversion) on top. The architecture is split into an Image class, per-filter strategy classes, and a CLI parser, which made it easy to add new filters as I learned them.",
    highlights: [
      "Hand-rolled JPEG load/manipulate/export pipeline without external image libraries",
      "Gaussian blur, Sobel edge detection, sepia, grayscale, mirroring, color inversion",
      "OOP architecture: Image class + per-filter strategy classes + CLI parser",
    ],
    challenges: [
      "Implementing JPEG decoding well enough to round-trip files without visible drift",
      "Choosing convolution kernels and stride values that look correct on real photos, not just test images",
    ],
    learnings: [
      "Image formats are not magic — DCT + quantisation + Huffman is enough to know why JPEG artefacts look the way they do",
      "Strategy pattern keeps filter pipelines easy to extend and benchmark",
    ],
    tech: ["C++", "OOP", "CMAKE"],
    github: "https://github.com/AbirHasanArko/Image-Editor",
    live: null,
    demoEmbed: null,
    featured: false,
    status: "shipped",
    category: "C++",
    date: "2024",
  },
  {
    slug: "32-bit-computer",
    name: "32-bit Computer Architecture",
    emoji: "🖥️",
    description:
      "Custom 32-bit processor architecture in Logisim — ALU, register file, memory, control logic, and datapath. Custom ISA with arithmetic, logical, memory, branching, and control instructions (ADD, AND, STO, LOD, BUN, ISZ, BSB, HLT).",
    longDescription:
      "For my Computer Architecture course I designed and simulated a 32-bit processor in Logisim. The processor has its own ISA covering arithmetic (ADD, INC), logical (AND, OR, NOT), memory (STO, LOD), branching (BUN, BSA, ISZ), and control (HLT, I/O) instructions. The datapath wires an ALU, a register file, RAM, and a control unit with a hard-wired microprogram, all driven by an external clock and program counter.",
    highlights: [
      "Custom 32-bit ISA with arithmetic, logical, memory, branching, and control instructions",
      "Hard-wired control unit and microprogrammed control logic",
      "Full datapath: ALU + register file + RAM + program counter + bus",
      "Test programs that exercise every instruction class and run end-to-end in Logisim",
    ],
    challenges: [
      "Designing a control unit that decoded opcodes without exploding the combinational logic",
      "Debugging timing glitches across the bus when multiple components drove it simultaneously",
    ],
    learnings: [
      "Building a CPU from scratch changes how you read every other piece of code you write",
      "Microprogrammed control is verbose but worth it for instruction-set flexibility",
    ],
    tech: ["Logisim", "Computer Architecture"],
    github: "https://github.com/AbirHasanArko/32-Bit-Computer",
    live: null,
    demoEmbed: null,
    featured: false,
    status: "shipped",
    category: "Hardware",
    date: "2024",
  },
];

export const allTech = Array.from(
  new Set(projects.flatMap((p) => p.tech))
).sort();

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug) || null;
}

export function getAllProjectSlugs() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default projects;