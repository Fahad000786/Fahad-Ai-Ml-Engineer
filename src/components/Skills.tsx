import { Code2, Database, Server } from "lucide-react";
import { SKILLS } from "../data/portfolio";

const CATEGORY_ICONS: Record<string, React.ElementType> = {
  "ai-ml": BrainIcon,
  fullstack: Code2,
  data: Database,
  cloud: Server,
};

function BrainIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.5 13.5L16 17H5l-4.5 3.5L8 4l3 3L20.5 13.5z" />
    </svg>
  );
}

export function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Technical Skills</span>
          <h2>Technical Skills</h2>
          <p>Tools, frameworks, and technologies I work with.</p>
        </div>

        <div className="skills-grid">
          {SKILLS.map((category) => {
            const Icon = CATEGORY_ICONS[category.id];
            return (
              <div
                key={category.id}
                className="skill-card"
                style={{
                  borderTop: `4px solid ${category.color.includes("cyan") ? "#22d3ee" : category.color.includes("blue") ? "#3b82f6" : category.color.includes("purple") ? "#a855f7" : "#6366f1"}`,
                }}
              >
                <h3>
                  <Icon className="skill-icon" />
                  {category.title}
                </h3>
                <div className="skill-badges">
                  {category.items.map((skill) => (
                    <span
                      key={skill}
                      className={`skill-badge ${category.badgeColor}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
