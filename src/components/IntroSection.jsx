import { motion } from "framer-motion";
import "./IntroSection.css";

function IntroSection({ shouldReduceMotion }) {
  return (
    <section id="intro" className="intro-section story-section">
      <motion.div
        className="intro-copy"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
        animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <p className="eyebrow">Computer Science Student & Developer</p>
        <h1>Building software, learning business, and documenting the journey.</h1>
        <p className="intro-text">
          My name is Wendwosen Tessema. I am a 3rd year Information Systems student, and my
          story started on the basketball court. Injury changed that dream, so I spent time in
          creative work until tech became the place where I could keep building forward.
        </p>

        <div className="intro-meta">
          <span>Name: Wendwosen</span>
          <span>Current role: 3rd year Information Systems student & developer</span>
          <span>Mission: Build useful software, learn fast, and grow into a full-stack engineer.</span>
        </div>

        <div className="intro-actions">
          <a className="text-link" href="#projects">
            See selected work
          </a>
          <a className="text-link" href="#contact">
            Contact me
          </a>
        </div>
      </motion.div>

      <motion.aside
        className="intro-panel"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
        animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
      >
        <span className="panel-label">Now</span>
        <h2>In Addis, searching for an internship and trying to learn from the best mentors I can find.</h2>
        <p>
          I want to contribute with what I already know, stay productive, and keep moving
          toward full-stack development and AI.
        </p>
      </motion.aside>
    </section>
  );
}

export default IntroSection;

