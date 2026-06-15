import { motion } from "framer-motion";
import "./Experience.css";

const timeline = [
  {
    title: "ALX Software Engineering",
    subtitle: "Program graduate",
    period: "2024",
    details: [
      "Built production-grade Django services.",
      "Focused on backend delivery and testing.",
      "Learned product-grade engineering practices.",
    ],
  },
  {
    title: "Hackathons & fast builds",
    subtitle: "Rapid product workflow",
    period: "2024–present",
    details: [
      "Delivered prototypes in weekend sprints.",
      "Balanced UX clarity with backend stability.",
      "Collaborated with founders and teams.",
    ],
  },
  {
    title: "Internship readiness",
    subtitle: "Junior software engineer",
    period: "Now",
    details: [
      "Available for backend / full-stack internships.",
      "Ready to contribute to startup product teams.",
      "Bringing readable engineering and service ownership.",
    ],
  },
];

function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="section-heading">
        <span className="eyebrow">Experience</span>
        <h2>Progress from ALX training to product-minded delivery.</h2>
        <p>
          A concise timeline of experience that emphasizes practical systems,
          rapid delivery, and engineering readiness for early-stage roles.
        </p>
      </div>

      <div className="timeline">
        {timeline.map((item, index) => (
          <motion.article
            key={item.title}
            className="timeline-item surface-card"
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: index * 0.08 }}
          >
            <div className="timeline-marker" />
            <h3>{item.title}</h3>
            <h4>{item.subtitle}</h4>
            <p className="text-muted">{item.period}</p>
            <ul>
              {item.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Experience;
