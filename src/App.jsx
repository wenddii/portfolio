import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Extracurriculars from "./components/Extracurriculars";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Extracurriculars />  {/* ← added here */}
      <Resume />
      <Contact />
    </div>
  );
}

export default App;