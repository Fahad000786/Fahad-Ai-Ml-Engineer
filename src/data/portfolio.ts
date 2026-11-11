export type SkillCategory = {
  id: string;
  title: string;
  color: string;
  badgeColor: string;
  items: string[];
};

export type NavLink = {
  id: string;
  label: string;
};

export const NAV_LINKS: NavLink[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export type ExperienceItem = {
  id: string;
  company: string;
  position: string;
  duration: string;
  location: string;
  responsibilities: string[];
};

export type Project = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
};

export type Certification = {
  id: string;
  name: string;
  issuer: string;
};

export type EducationItem = {
  id: string;
  institution: string;
  degree: string;
  duration: string;
  location: string;
};

export const PERSONAL = {
  name: "Muhammad Fahad",
  title: "AI/ML Engineer | Full-Stack Developer | Python & React Developer",
  location: "Lahore, Pakistan",
  email: "basharatfahad54@gmail.com",
  phone: "+92 305 5387873",
  linkedin: "https://www.linkedin.com/in/muhammad-fahad-8b6258370/",
  github: "https://github.com/basharatfahad54-del",
  resume: "/Fahad%20Full%20Stack%20AI_ML%20Engineer.pdf",
  summary:
    "AI/ML engineer building LLM applications, RAG systems, AI agents, and full-stack software with Python, FastAPI, and React. Experience spans machine learning pipelines, workflow automation, API integrations, and cloud deployment. Microsoft Azure AI and Huawei HCIA AI certified.",
  highlights: [
    "AI/ML Engineering",
    "Generative AI & LLM Applications",
    "RAG Systems & AI Agents",
    "Full-Stack Development",
    "Cloud Deployment & Automation",
  ],
};

export const SKILLS: SkillCategory[] = [
  {
    id: "ai-ml",
    title: "AI / ML Engineering",
    color: "bg-cyan-500/10 border-cyan-500/30 text-cyan-400",
    badgeColor: "bg-cyan-500/20 text-cyan-400 border-cyan-500/40",
    items: [
      "Python",
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "NLP",
      "LLMs",
      "RAG",
      "LangChain",
      "Ollama",
      "Vector Databases",
    ],
  },
  {
    id: "fullstack",
    title: "Full-Stack Development",
    color: "bg-blue-500/10 border-blue-500/30 text-blue-400",
    badgeColor: "bg-blue-500/20 text-blue-400 border-blue-500/40",
    items: [
      "React",
      "Vite",
      "JavaScript",
      "MERN Stack",
      "MongoDB",
      "Express.js",
      "Node.js",
      "FastAPI",
      "Flask",
      "Django",
      "REST APIs",
    ],
  },
  {
    id: "data",
    title: "Databases & Data",
    color: "bg-purple-500/10 border-purple-500/30 text-purple-400",
    badgeColor: "bg-purple-500/20 text-purple-400 border-purple-500/40",
    items: [
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "Redis",
      "Pandas",
      "NumPy",
    ],
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    color: "bg-indigo-500/10 border-indigo-500/30 text-indigo-400",
    badgeColor: "bg-indigo-500/20 text-indigo-400 border-indigo-500/40",
    items: [
      "AWS",
      "Microsoft Azure",
      "GCP",
      "Docker",
      "Kubernetes",
      "Git",
      "GitHub Actions",
      "CI/CD",
    ],
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: "consultancy",
    company: "Consultancy Outfit",
    position: "Artificial Intelligence Engineer",
    duration: "November 2026 – Present",
    location: "Lahore, Pakistan",
    responsibilities: [
      "Develop AI solutions using LLMs, RAG, prompt engineering, and AI agents.",
      "Build Python automation workflows and integrate third-party APIs, databases, and enterprise systems.",
      "Contribute to solution architecture, prototyping, testing, optimization, and production deployment.",
    ],
  },
  {
    id: "lancers",
    company: "Lancers Tech",
    position: "Artificial Intelligence Engineer",
    duration: "September 2025 – July 2026",
    location: "Lahore, Pakistan",
    responsibilities: [
      "Built AI/ML pipelines, RAG applications, chatbots, and automation tools using Python, FastAPI, Flask, LangChain, and vector databases.",
      "Developed full-stack trading dashboards and e-commerce scraping applications.",
      "Integrated AI models into cloud-hosted applications and optimized retrieval, prompts, and system reliability.",
    ],
  },
  {
    id: "navttc",
    company: "NAVTTC – National Vocational and Technical Training Commission",
    position: "Artificial Intelligence / Machine Learning Engineer",
    duration: "September 2025 – December 2025",
    location: "Lahore, Pakistan",
    responsibilities: [
      "Developed machine learning, NLP, and computer vision applications.",
      "Prepared datasets and evaluated ML models.",
      "Deployed inference APIs using Flask, FastAPI, and Docker.",
    ],
  },
  {
    id: "vista",
    company: "Vista",
    position: "Machine Learning Engineer (Internship)",
    duration: "January 2025 – March 2025",
    location: "Lahore, Pakistan",
    responsibilities: [
      "Prepared datasets using Pandas and NumPy.",
      "Trained classification and regression models.",
      "Evaluated models using cross-validation.",
      "Supported Flask and Docker deployments.",
    ],
  },
  {
    id: "mavericks",
    company: "Mavericks United",
    position: "Business Development Specialist",
    duration: "January 2024 – September 2024",
    location: "Lahore, Pakistan",
    responsibilities: [
      "Generated leads through LinkedIn, Upwork, and cold outreach.",
      "Prepared technical proposals.",
      "Coordinated client requirements with delivery teams.",
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "cli-agent",
    title: "AI-Powered CLI & Web Agent Platform",
    description:
      "Developing an AI agent with CLI and web interfaces, modular workflows, terminal execution, and dashboard monitoring.",
    technologies: ["Python", "REST APIs", "PostgreSQL", "Ollama", "Webhooks"],
  },
  {
    id: "amazon-scraper",
    title: "Amazon E-Commerce Scraper & Browser Extension",
    description:
      "Built a browser extension and Python web application for automated e-commerce data extraction and visualization.",
    technologies: ["Python", "Vite", "REST APIs", "Docker", "Webhooks"],
  },
  {
    id: "ai-chatbot",
    title: "AI Chatbot – Generative AI",
    description:
      "Built a conversational AI application with a React frontend, Flask REST API, and context-aware OpenAI responses.",
    technologies: ["Python", "React", "Flask", "OpenAI API", "Docker"],
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: "azure-ai",
    name: "Microsoft Certified: Azure AI Fundamentals (AI-900)",
    issuer: "Microsoft",
  },
  {
    id: "hcia-ai",
    name: "Huawei HCIA AI",
    issuer: "Huawei",
  },
  {
    id: "navttc-ai",
    name: "NAVTTC AI/ML Engineer",
    issuer: "NAVTTC",
  },
  {
    id: "cisco-python",
    name: "Cisco Python Developer",
    issuer: "Cisco",
  },
  {
    id: "cisco-data-science",
    name: "Cisco Introduction to Data Science",
    issuer: "Cisco",
  },
];

export const EDUCATION: EducationItem[] = [
  {
    id: "vu",
    institution: "Virtual University of Pakistan",
    degree: "Bachelor of Engineering, Computer Software Engineering",
    duration: "February 2021 – November 2025",
    location: "Lahore, Pakistan",
  },
  {
    id: "pu",
    institution: "University of the Punjab",
    degree: "Bachelor of Commerce, Information Technology",
    duration: "January 2018 – May 2021",
    location: "Lahore, Pakistan",
  },
];
