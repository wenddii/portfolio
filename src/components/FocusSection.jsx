import { motion } from "framer-motion";
import { focusAreas } from "../data/portfolioContent";
import "./FocusSection.css";

function FocusSection({ shouldReduceMotion }) {
  return (
    <section id="focus" className="story-section split-section">
      <div className="section-head">
        <p className="eyebrow">Current Focus</p>
        <h2>What I am learning and building now.</h2>
        <p>
          I keep this short on purpose. The goal is to show direction, not overwhelm with a
          long list.
        </p>
      </div>

      <div className="focus-grid">
        {focusAreas.map((area) => (
          <motion.div
            key={area}
            className="focus-item"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
          >
            <span>{area}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default FocusSection;

