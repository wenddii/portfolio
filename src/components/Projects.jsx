import "./Projects.css";

// Import project screenshots
import taskmanagerapiImg from "../assets/task_managerapi.png";
import SadImg from "../assets/SAD.png";
import EduRIseImg from "../assets/Edu_rise.jpg";
import javaconsoleImg from "../assets/javaconsole.jpg";

function Projects() {
  const projectList = [
    {
      title: "Java Student Registration System",
      description:
        "A java console application that simply registers and grades student scores",
      tech: "Java",
      img: javaconsoleImg,
      github: "https://github.com/wenddii/java_student_management.git",
    },
    {
      title: "Task Manager API",
      description: "Task manager API made with Django",
      tech: "Django, DRF, PostgreSQL",
      img: taskmanagerapiImg,
      github: "https://github.com/wenddii/my-api-project.git",
    },
    {
      title: "Food Ordering System Analysis",
      description:
        "A system requirements and analysis for a food ordering and delivery system in school",
      tech: "UML, ERD, DFD",
      img: SadImg,
      github: "https://github.com/wenddii/SAD.git",
    },
    {
      title: "EDU_Rise Africa",
      description: "A proposal for an offline learning application.",
      tech: "Google Slides, Miro",
      img: EduRIseImg,
      github:
        "https://docs.google.com/presentation/d/17NSeV7U4q4EWbXAR91jyDv_hZh-LO1WmfU3ycoNOnlQ/edit",
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>

      <div className="project-list">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>
            <img
              src={project.img}
              alt={project.title}
              className="project-img"
            />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p className="tech">{project.tech}</p>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Code
            </a>
          </div>
        ))}
      </div>

      {/* ✅ This is the ONLY new part */}
      <p className="more-projects">🚀 More projects coming soon</p>
    </section>
  );
}

export default Projects;