import { motion } from "framer-motion";
import { journey } from "../data/portfolioContent";
import "./JourneyTimelineSection.css";

function JourneyTimelineSection({ shouldReduceMotion }) {
  return (
    <section id="journey" className="story-section">
      <div className="section-head">
        <p className="eyebrow">Journey Timeline</p>
        <h2>The route from basketball to tech and back into confidence.</h2>
        <p>
          This timeline follows the real turning points: the injury, the creative detour,
          learning backend development, the hackathon, the ERP work, and the internship search.
        </p>
      </div>

      <div className="timeline-shell">
        {journey.map((step, index) => (
          <motion.article
            key={step.title}
            className="timeline-item"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.5, delay: index * 0.06 }}
          >
            <div className="timeline-rail" aria-hidden="true">
              <span className="timeline-dot" />
            </div>
            <div className="timeline-content">
              <p className="timeline-meta">{step.meta}</p>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default JourneyTimelineSection;

