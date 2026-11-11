import { Code, Laptop } from "lucide-react";
import profileImg from "../assets/fahadceo.png";
import { PERSONAL } from "../data/portfolio";

const introText =
  "Hello, I'm Muhammad Fahad — an AI/ML Engineer and Full-Stack Developer based in Lahore, Pakistan. I build intelligent software: LLM applications, RAG systems, AI agents, and production-ready web applications with Python, FastAPI, and React.";

const techLabels = ["Python", "React", "AI/ML", "LLMs"];

export function Hero() {
  return (
    <section id="home" className="hero reveal">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content reveal">
            <div className="intro-badge">
              <Code size={18} strokeWidth={2} />
              Hello, I'm Muhammad Fahad
            </div>
            <h1 className="reveal">Building Intelligent Solutions with AI &amp; Code</h1>
            <span className="professional-title reveal">
              AI/ML Engineer | Full-Stack Developer
            </span>
            <p className="reveal">{introText}</p>
            <div className="btn-group">
              <a href="#projects" className="btn btn-primary">
                View My Work <Laptop size={18} strokeWidth={2} />
              </a>
              <a href="#contact" className="btn btn-outline">
                Contact Me
              </a>
              <a
                href={PERSONAL.resume}
                download="Muhammad-Fahad-Resume.pdf"
                className="btn btn-ghost"
                target="_blank"
                rel="noopener noreferrer"
              >
                <DownloadIcon size={18} strokeWidth={2} /> Download Resume
              </a>
            </div>
          </div>

          <div className="hero-visual reveal">
            <div className="profile-card">
              <img
                src={profileImg}
                alt="Profile picture of Muhammad Fahad"
                className="profile-img"
              />
            </div>
            <div className="tech-labels">
              {techLabels.map((label) => (
                <span key={label} className="label">
                  <span />
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DownloadIcon({ size = 18, strokeWidth = 2 }: { size?: number; strokeWidth?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>
  );
}
