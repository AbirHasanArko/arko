export const skills = [
  {
    category: "Programming",
    items: [
      { name: "Python", level: 92 },
      { name: "C++", level: 88 },
      { name: "Java", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "PHP", level: 75 },
      { name: "C#", level: 65 },
    ],
  },
  {
    category: "Databases & Data",
    items: [
      { name: "SQL", level: 90 },
      { name: "MySQL", level: 88 },
      { name: "PostgreSQL", level: 82 },
      { name: "Oracle PL/SQL", level: 80 },
      { name: "SQLite", level: 90 },
      { name: "JSON Workflows", level: 85 },
    ],
  },
  {
    category: "AI & Data",
    items: [
      { name: "Prompt Engineering", level: 90 },
      { name: "LLM Applications", level: 85 },
      { name: "Function Calling", level: 88 },
      { name: "LangChain", level: 78 },
      { name: "OpenAI API", level: 88 },
      { name: "Structured Data Processing", level: 82 },
    ],
  },
  {
    category: "Web",
    items: [
      { name: "Laravel", level: 78 },
      { name: "ASP.NET", level: 68 },
      { name: "FastAPI", level: 88 },
      { name: "HTML", level: 90 },
      { name: "CSS", level: 82 },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", level: 92 },
      { name: "Docker", level: 75 },
      { name: "Linux", level: 85 },
    ],
  },
  {
    category: "Embedded Systems",
    items: [
      { name: "Raspberry Pi", level: 78 },
      { name: "Arduino", level: 72 },
      { name: "Verilog", level: 65 },
    ],
  },
];

export const flatSkills = skills.flatMap((cat) =>
  cat.items.map((s) => ({ ...s, category: cat.category }))
);

export default skills;