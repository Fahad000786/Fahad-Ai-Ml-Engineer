import { Mail, Phone, MapPin, Send, ArrowRight } from "lucide-react";
import { PERSONAL } from "../data/portfolio";
import { LinkedinIcon, GithubIcon } from "./Icons";

export function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-card reveal">
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
              <Mail size={20} strokeWidth={2} />
              <h3>Get in Touch</h3>
            </div>
            <p>
              I’m open to AI/ML engineering, full-stack development, and collaboration
              opportunities. Reach out via email or connect on LinkedIn.
            </p>
            <div className="btn-group">
              <a href={`mailto:${PERSONAL.email}`} className="btn btn-primary">
                <Send size={18} strokeWidth={2} /> Send Email
              </a>
              <a
                href={PERSONAL.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                Connect on LinkedIn <ArrowRight size={18} strokeWidth={2} />
              </a>
              <a
                href={PERSONAL.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                <GithubIcon size={18} strokeWidth={2} /> View GitHub
              </a>
            </div>
          </div>

          <div>
            <h2>Contact Details</h2>
            <div className="contact-items">
              <div className="contact-item">
                <div className="icon">
                  <Mail size={20} strokeWidth={2} />
                </div>
                <div className="details">
                  <h4>Email</h4>
                  <p>{PERSONAL.email}</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="icon">
                  <Phone size={20} strokeWidth={2} />
                </div>
                <div className="details">
                  <h4>Phone</h4>
                  <p>{PERSONAL.phone}</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="icon">
                  <MapPin size={20} strokeWidth={2} />
                </div>
                <div className="details">
                  <h4>Location</h4>
                  <p>{PERSONAL.location}</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="icon">
                  <LinkedinIcon size={20} strokeWidth={2} />
                </div>
                <div className="details">
                  <h4>LinkedIn</h4>
                  <p>{PERSONAL.name}</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="icon">
                  <GithubIcon size={20} strokeWidth={2} />
                </div>
                <div className="details">
                  <h4>GitHub</h4>
                  <p>{PERSONAL.name}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
