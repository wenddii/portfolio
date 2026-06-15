import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Extracurriculars from "./components/Extracurriculars";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certificates />
        <Extracurriculars />
        <Resume />
        <Contact />
      </main>
    </div>
  );
}

export default App;