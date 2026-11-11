import { PERSONAL } from "../data/portfolio";

export function SEO() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: PERSONAL.name,
    jobTitle: PERSONAL.title,
    url: "https://fahad-ai-ml-engineer.vercel.app/",
    image: "https://fahad-ai-ml-engineer.vercel.app/assets/fahadceo.png",
    email: PERSONAL.email,
    telephone: PERSONAL.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lahore",
      addressRegion: "Punjab",
      addressCountry: "PK",
    },
    knowsAbout: [
      "Artificial Intelligence",
      "Machine Learning",
      "Large Language Models",
      "RAG Systems",
      "AI Agents",
      "Natural Language Processing",
      "Computer Vision",
      "Full-Stack Development",
      "Python",
      "React",
      "FastAPI",
      "Flask",
      "Node.js",
      "TypeScript",
      "AWS",
      "Microsoft Azure",
      "GCP",
      "Docker",
      "Kubernetes",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Pandas",
      "NumPy",
    ],
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "Virtual University of Pakistan",
      },
      {
        "@type": "CollegeOrUniversity",
        name: "University of the Punjab",
      },
    ],
    sameAs: [PERSONAL.linkedin, PERSONAL.github],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
    </>
  );
}
