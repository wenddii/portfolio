import { motion } from "framer-motion";
import { visualStory } from "../data/portfolioContent";
import "./StoryPhotosSection.css";

function StoryPhotosSection({ shouldReduceMotion }) {
  return (
    <section id="story-photos" className="story-section">
      <div className="section-head">
        <p className="eyebrow">Story in Photos</p>
        <p>These photos show the parts of my life that shaped the way I think, build, and show up.</p>
      </div>

      <div className="visual-story-grid">
        {visualStory.map((item, index) => (
          <motion.article
            key={item.title}
            className="visual-card"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
          >
            {item.link ? (
              <a href={item.link} target="_blank" rel="noreferrer">
                <img src={item.image} alt={item.title} />
              </a>
            ) : (
              <img src={item.image} alt={item.title} />
            )}
            <div className="visual-card-copy">
              <h3>{item.title}</h3>
              <p>{item.caption}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default StoryPhotosSection;

