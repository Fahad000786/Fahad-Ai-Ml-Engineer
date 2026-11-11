import { Award } from "lucide-react";
import { CERTIFICATIONS } from "../data/portfolio";

export function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Certifications</span>
          <h2>Certifications</h2>
          <p>Industry certifications validating my AI and cloud expertise.</p>
        </div>

        <div className="certs-grid">
          {CERTIFICATIONS.map((cert) => (
            <div key={cert.id} className="cert-card">
              <Award size={32} strokeWidth={2} color="#22d3ee" aria-hidden="true" />
              <h4>{cert.name}</h4>
              <p>{cert.issuer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
