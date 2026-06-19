// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import "./Skills.css";

const skillGroups = [
  {
    title: "Core engineering",
    description: "Backend services, data modeling, and API stability for product teams.",
    skills: [
      { name: "Django + DRF", level: 90 },
      { name: "Python", level: 88 },
      { name: "PostgreSQL", level: 82 },
      { name: "REST APIs", level: 86 },
    ],
  },
  {
    title: "Frontend & polish",
    description: "Modern interfaces and responsive layouts that support product UX.",
    skills: [
      { name: "React", level: 50 },
      { name: "HTML & CSS", level: 80 },
      { name: "Tailwind / CSS", level: 74 },
      { name: "Responsive design", level: 83 },
    ],
  },
  {
    title: "Tools & delivery",
    description: "Engineering workflows that make collaboration and deployment predictable.",
    skills: [
      { name: "Git / GitHub", level: 90 },
      { name: "Docker", level: 62 },
      { name: "Linux", level: 70 },
      { name: "Technical writing", level: 80 },
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="section-heading">
        <span className="eyebrow">Skills</span>
        <h2>Technical strengths organized for startup delivery.</h2>
        <p>
          Focused skill groups designed to support backend reliability, frontend polish,
          and practical engineering workflows for early-stage teams.
        </p>
      </div>

      <div className="skill-grid">
        {skillGroups.map((group, index) => (
          <motion.article
            key={group.title}
            className="skill-card surface-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.62, delay: index * 0.08 }}
          >
            <h3>{group.title}</h3>
            <p className="text-muted">{group.description}</p>

            <div className="tag-grid">
              {group.skills.map((skill) => (
                <span key={skill.name} className="pill">
                  {skill.name}
                </span>
              ))}
            </div>

            <div className="skill-list">
              {group.skills.map((skill) => (
                <div key={skill.name} className="skill-row">
                  <div className="skill-row-title">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="progress-bar">
                    <span style={{ width: `${skill.level}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Skills;
