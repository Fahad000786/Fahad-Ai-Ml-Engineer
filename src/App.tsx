import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Certifications } from "./components/Certifications";
import { Education } from "./components/Education";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { SEO } from "./components/SEO";
import "./index.css";

function App() {
  return (
    <>
      <SEO />

      <a href="#home" className="skip-link">
        Skip to content
      </a>

      <div className="glue">
        <div className="glow-blob blob-1" aria-hidden="true" />
        <div className="glow-blob blob-2" aria-hidden="true" />
        <div className="glow-blob blob-3" aria-hidden="true" />
      </div>

      <Navbar />

      <main id="skip-content">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Education />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
