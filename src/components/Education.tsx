import { GraduationCap } from "lucide-react";
import { EDUCATION } from "../data/portfolio";

export function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Education</span>
          <h2>Education</h2>
          <p>Academic background in software engineering and information technology.</p>
        </div>

        <div className="edu-grid">
          {EDUCATION.map((edu) => (
            <div key={edu.id} className="edu-card">
              <span className="date">{edu.duration}</span>
              <div className="info">
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <GraduationCap size={18} strokeWidth={2} aria-hidden="true" />
                  <h3>{edu.institution}</h3>
                </div>
                <p>{edu.degree}</p>
                <p>{edu.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
