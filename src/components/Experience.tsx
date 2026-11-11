import { Briefcase, Clock, MapPin } from "lucide-react";
import { EXPERIENCE } from "../data/portfolio";

export function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Experience</span>
          <h2>Professional Experience</h2>
          <p>My journey in AI/ML engineering and full-stack development.</p>
        </div>

        <div className="timeline" aria-label="Experience timeline">
          {EXPERIENCE.map((job) => (
            <div key={job.id} className="timeline-item">
              <div className="timeline-dot" aria-hidden="true" />
              <div className="timeline-content">
                <div className="timeline-meta">
                  <span>
                    <Briefcase size={14} strokeWidth={2} /> {job.position}
                  </span>
                  <span>
                    <Clock size={14} strokeWidth={2} /> {job.duration}
                  </span>
                  <span>
                    <MapPin size={14} strokeWidth={2} /> {job.location}
                  </span>
                </div>
                <h3>{job.company}</h3>
                <ul>
                  {job.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
