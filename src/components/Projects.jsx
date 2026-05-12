import "./Projects.css";

// Import project screenshots
import taskmanagerapiImg from "../assets/task_managerapi.png";
import SadImg from "../assets/SAD.png";
import EduRIseImg from "../assets/Edu_rise.jpg";
import javaconsoleImg from "../assets/javaconsole.jpg";
import ERPImg from "../assets/ERP.jpg";

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
      title: "Complete ERP System",
      description:
        "a complete ERP system made by django,username = abush password = 34412500",
      tech: "Django,PostgreSql",
      img: ERPImg,
      github: "https://simple-inventory-management-1-gsqc.onrender.com/report-range/?start_date=&end_date=",
    },
    {
      title: "Simple To-Do list tracker",
      description:
        "a simple To-do list tracker made by django",
      tech: "Django,PostgreSql",
      img: SadImg,
      github: "https://simple-todo-1-u0ir.onrender.com/",
    },
    {
      title: "Task Manager API",
      description: "Task manager API made with Django",
      tech: "Django, DRF, PostgreSQL",
      img: taskmanagerapiImg,
      github: "https://github.com/wenddii/my-api-project.git",
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
              View Code / live demo
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