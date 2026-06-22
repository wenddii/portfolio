import { motion } from "framer-motion";
import { projects } from "../data/portfolioContent";
import "./ProjectsSection.css";

function ProjectsSection({ shouldReduceMotion }) {
  return (
    <section id="projects" className="story-section">
      <div className="section-head">
        <p className="eyebrow">Selected Projects</p>
        <h2>Case studies with screenshots, live links, and the lessons behind them.</h2>
        <p>
          I wanted these to feel like real work, not generic cards. Each one shows the problem,
          solution, stack, and what happened after shipping.
        </p>
      </div>

      <div className="case-study-list">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            className="case-study"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
          >
            <div className="case-study-header">
              <p className="case-number">0{index + 1}</p>
              <h3>{project.title}</h3>
            </div>

            <div className="case-study-media">
              <img src={project.image} alt={project.title} />
              <div className="case-study-links">
                <a href={project.liveUrl} target="_blank" rel="noreferrer">
                  Live demo / demo link
                </a>
                {project.title === "NOAH ERP" && (
                  <span>Running in my brother’s mini market</span>
                )}
              </div>
            </div>

            <div className="case-study-grid">
              <div>
                <p className="case-label">Problem</p>
                <p>{project.problem}</p>
              </div>
              <div>
                <p className="case-label">Solution</p>
                <p>{project.solution}</p>
              </div>
              <div>
                <p className="case-label">Technologies used</p>
                <div className="chip-row">
                  {project.tech.map((item) => (
                    <span key={item} className="chip">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="case-label">What I learned</p>
                <p>{project.learned}</p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;

