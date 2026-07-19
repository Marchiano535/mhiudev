export const profile = {
  name: "Marchiano Aulia Faraitody",
  shortName: "Marchiano",
  role: "Informatics Student & Developer",
  bio: "Informatics student at Telkom University — building web apps & exploring data.",
  avatar: "https://avatars.githubusercontent.com/u/58412970?v=4",
  status: "Open to opportunities",
  socials: {
    github: "https://github.com/Marchiano535",
    linkedin: "https://www.linkedin.com/in/marchiano-faraitody5353/",
    email: "marchiano.af@gmail.com",
    discord: "https://discord.com/users/mhiu",
    instagram: "https://instagram.com/marchftdy",
    whatsapp: "https://wa.me/6285172316794",
  },
};

export const skills = [
  { name: "React / Next.js", key: "react", color: "#61dafb", img: "/img/react.png" },
  { name: "TypeScript", key: "typescript", color: "#3178c6", img: "/img/ts.png" },
  { name: "JavaScript", key: "javascript", color: "#f7df1e", img: "/img/js.png" },
  { name: "Python", key: "python", color: "#3776ab", img: "/img/python.png" },
  { name: "PHP", key: "php", color: "#777bb4", img: "/img/php.png" },
  { name: "Laravel", key: "laravel", color: "#ff2d20", img: "/img/Laravel.png" },
  { name: "Data Analysis", key: "data", color: "#e879f9", img: "/img/Data analyst.png" },
  { name: "HTML", key: "html", color: "#e34f26", img: "/img/HTML.png" },
  { name: "CSS", key: "css", color: "#2965f1", img: "/img/css.png" },
  { name: "Jupyter", key: "jupyter", color: "#f37626", img: "/img/Jupyter.png" },
  { name: "C", key: "c", color: "#555555", img: "/img/C.png" },
  { name: "C++", key: "cpp", color: "#00599c", img: "/img/C++.png" },
  { name: "Go", key: "go", color: "#00add8", img: "/img/GO.png" },
];

export const projects = [
  {
    id: "fraud-bigdata",
    title: "Fraud Detection",
    description:
      "Fraud analysis and detection system using Big Data. Built with Python & Jupyter Notebook for data processing and pattern analysis.",
    tech: ["Python", "Jupyter", "Big Data"],
    color: "#f59e0b",
    github: "https://github.com/Marchiano535/fraud-bigdata",
    live: null,
    iconKey: "shield",
  },
  {
    id: "medical-toolkit",
    title: "Medical Toolkit",
    description:
      "Medical website for hospitals and clinics. Handles patient data, appointments, and medical records with a clean desktop interface.",
    tech: ["Python", "PySide6"],
    color: "#06b6d4",
    github: "https://github.com/Marchiano535/medical-toolkit",
    live: null,
    iconKey: "layout",
  },
  {
    id: "money-manager",
    title: "Money Manager",
    description:
      "Personal finance tracking app. Record income & expenses with a simple, intuitive web interface.",
    tech: ["JavaScript", "HTML", "CSS"],
    color: "#22c55e",
    github: "https://github.com/Marchiano535/MoneyManager",
    live: null,
    iconKey: "wallet",
  },
];

export const experience = [
  {
    company: "Placeholder Company",
    role: "Frontend Developer Intern",
    period: "2024 — Present",
    description:
      "Building and maintaining web applications. Working with React, TypeScript, and modern frontend tooling.",
    tags: ["React", "TypeScript", "Tailwind"],
  },
  {
    company: "Freelance",
    role: "Web Developer",
    period: "2023 — 2024",
    description:
      "Developed websites and web apps for small businesses and personal clients. Handled everything from design to deployment.",
    tags: ["JavaScript", "PHP", "Laravel"],
  },
  {
    company: "University Organization",
    role: "Staff of Research & Technology",
    period: "2023 — 2024",
    description:
      "Organized tech workshops, managed internal tools, and contributed to research projects within the student organization.",
    tags: ["Organization", "Research", "Workshop"],
  },
];

export const education = [
  {
    school: "Telkom University",
    degree: "Bachelor of Informatics",
    period: "2022 — Present",
    description: "Focus on software engineering, data science, and web technologies.",
  },
];

export const blog: {
  title: string;
  date: string;
  description: string;
  tags: string[];
}[] = [];

export const navLinks = [
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
