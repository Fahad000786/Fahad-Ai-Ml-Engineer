import { Mail } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "./Icons";

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <span className="logo-mark">MF</span>
            Muhammad Fahad
          </div>
          <p style={{ color: "#94a3b8", fontSize: "0.95rem" }}>
            AI/ML Engineer | Full-Stack Developer
          </p>

          <div className="footer-social">
            <a
              href="https://www.linkedin.com/in/muhammad-fahad-8b6258370/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={20} strokeWidth={2} />
            </a>
            <a
              href="https://github.com/basharatfahad54-del"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <GithubIcon size={20} strokeWidth={2} />
            </a>
            <a
              href="mailto:basharatfahad54@gmail.com"
              aria-label="Email"
            >
              <Mail size={20} strokeWidth={2} />
            </a>
          </div>

          <p className="footer-copy">
            &copy; {CURRENT_YEAR} Muhammad Fahad. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
