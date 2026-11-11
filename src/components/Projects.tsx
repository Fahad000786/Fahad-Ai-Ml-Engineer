import { PROJECTS } from "../data/portfolio";
import { GithubIcon } from "./Icons";

export function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Featured Projects</span>
          <h2>Featured Projects</h2>
          <p>Selected projects demonstrating AI engineering and full-stack development.</p>
        </div>

        <div className="projects-grid">
          {PROJECTS.map((project) => (
            <div key={project.id} className="project-card" aria-label={project.title}>
              <div className="project-body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </div>
              <div className="project-footer">
                <span>
                  <GithubIcon size={16} strokeWidth={2} /> Source
                </span>
              </div>
            </div>
          ))}
        </div>

        <p className="section-label" style={{ textAlign: "center", marginTop: "1.5rem" }}>
          Project source links are available upon request — no repository URLs are published here
          to avoid unverified links.
        </p>
      </div>
    </section>
  );
}
