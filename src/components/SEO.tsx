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
    description:
      "AI/ML Engineer and Full-Stack Developer based in Lahore, Pakistan. Open to remote roles and relocation worldwide — United States, United Kingdom, Japan, Singapore, UAE, Canada, Europe, and globally.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lahore",
      addressRegion: "Punjab",
      addressCountry: "PK",
    },
    jobLocation: {
      "@type": "Place",
      name: "Worldwide (Remote & On-site)",
      address: {
        "@type": "PostalAddress",
        addressCountry: "Worldwide",
      },
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
      "International remote work",
      "Global collaboration",
      "Relocation worldwide",
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
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: PERSONAL.phone,
        contactType: "customer service",
        availableLanguage: ["English", "Urdu"],
      },
      {
        "@type": "ContactPoint",
        email: PERSONAL.email,
        contactType: "customer service",
        availableLanguage: ["English", "Urdu"],
      },
    ],
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
