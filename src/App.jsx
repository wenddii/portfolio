import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
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
      <Certificates /> 
      <Extracurriculars />
      <Resume/>
      <Contact />
    </div>
  );
}

export default App;