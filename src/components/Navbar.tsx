import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import { NAV_LINKS, PERSONAL } from "../data/portfolio";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const options = {
      root: null,
      threshold: 0.3,
      rootMargin: "-10% 0% -55% 0%",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    NAV_LINKS.forEach((link) => {
      const el = document.getElementById(link.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <>
      <nav className="navbar" aria-label="Main navigation">
        <div className="navbar-inner">
          <div className="logo" onClick={() => scrollTo("home")} role="button" tabIndex={0}>
            <span className="logo-mark">MF</span>
            {PERSONAL.name}
          </div>

          <div className="nav-links">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`nav-link ${activeSection === link.id ? "active" : ""}`}
                onClick={() => scrollTo(link.id)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={PERSONAL.resume}
              download="Muhammad-Fahad-Resume.pdf"
              className="nav-download"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download resume"
            >
              <Download size={16} strokeWidth={2} />
              Resume
            </a>
          </div>

          <button
            className="mobile-menu-btn"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} strokeWidth={2} /> : <Menu size={20} strokeWidth={2} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="mobile-menu open" role="navigation" aria-label="Mobile navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={activeSection === link.id ? "active" : ""}
              onClick={() => scrollTo(link.id)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={PERSONAL.resume}
            download="Muhammad-Fahad-Resume.pdf"
            className="nav-download"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Download size={18} strokeWidth={2} /> Download Resume
          </a>
        </div>
      )}
    </>
  );
}
