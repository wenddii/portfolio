import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import Navbar from "./components/Navbar";
import IntroSection from "./components/IntroSection";
import StoryPhotosSection from "./components/StoryPhotosSection";
import JourneyTimelineSection from "./components/JourneyTimelineSection";
import ProjectsSection from "./components/ProjectsSection";
import FocusSection from "./components/FocusSection";
import BeyondSection from "./components/BeyondSection";
import VisionSection from "./components/VisionSection";
import ContactSection from "./components/ContactSection";
import "./App.css";

function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "dark";

    const storedTheme = window.localStorage.getItem("portfolio-theme");
    if (storedTheme === "light" || storedTheme === "dark") return storedTheme;

    return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  });

  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  };

  return (
    <div className="app-shell">
      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      <main className="story-page">
        <IntroSection shouldReduceMotion={shouldReduceMotion} />
        <StoryPhotosSection shouldReduceMotion={shouldReduceMotion} />
        <JourneyTimelineSection shouldReduceMotion={shouldReduceMotion} />
        <ProjectsSection shouldReduceMotion={shouldReduceMotion} />
        <FocusSection shouldReduceMotion={shouldReduceMotion} />
        <BeyondSection />
        <VisionSection shouldReduceMotion={shouldReduceMotion} />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;

