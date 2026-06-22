import { motion } from "framer-motion";
import "./VisionSection.css";

function VisionSection({ shouldReduceMotion }) {
  return (
    <section id="vision" className="story-section vision-section">
      <div className="section-head">
        <p className="eyebrow">Future Vision</p>
        <h2>In five years, I want to be building systems that matter.</h2>
      </div>

      <motion.div
        className="vision-panel"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
        whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
      >
        <p>
          I want to be the person who can move between backend engineering, product thinking,
          and the needs of a real business without losing clarity. My aim is to build tools
          that help teams work better, write about the process honestly, and keep learning in
          public as I grow.
        </p>
      </motion.div>
    </section>
  );
}

export default VisionSection;

