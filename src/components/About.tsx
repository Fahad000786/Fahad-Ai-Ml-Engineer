import { Flame, Zap, ShieldCheck, Rocket, Brain } from "lucide-react";
import { PERSONAL } from "../data/portfolio";

const HIGHLIGHT_ICONS: Record<string, React.ElementType> = {
  "AI/ML Engineering": Flame,
  "Generative AI & LLM Applications": Brain,
  "RAG Systems & AI Agents": Zap,
  "Full-Stack Development": Rocket,
  "Cloud Deployment & Automation": ShieldCheck,
};

export function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">About Me</span>
          <h2>Who I am</h2>
          <p>
            AI/ML engineer building LLM applications, RAG systems, AI agents, and full-stack
            software with Python, FastAPI, and React.
          </p>
        </div>

        <div className="about-grid">
          <div>
            <p>{PERSONAL.summary}</p>
            <p>
              I enjoy turning complex machine learning models into usable products, automating
              workflows, and shipping cloud-ready applications end to end. Below are the core
              areas I focus on.
            </p>
          </div>

          <div className="highlights">
            {PERSONAL.highlights.map((highlight) => {
              const Icon = HIGHLIGHT_ICONS[highlight];
              return (
                <div key={highlight} className="highlight-card">
                  <Icon size={20} strokeWidth={2} className="highlight-icon" />
                  <div>
                    <h4>{highlight}</h4>
                    <p>Core competency</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
