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
      title: "Complete ERP System",
      description:"NOAH ERP is a Django-based inventory and sales management system that combines stock control, purchasing, and a POS checkout workflow in one platform. It tracks products with real-time stock updates, handles multi-item cart sales, and calculates profit using stored cost and selling prices. The system also includes basic business analytics for revenue, expenses, and product performance.",
      tech: "Django,PostgreSql",
      img: ERPImg,
      github: "https://dese-erp-last-version.onrender.com",
    },
       
    {
      title: "Simple To-Do list tracker",
      description:
        "A simple task management web application built with Django that allows users to create, update, and delete tasks. It supports basic task tracking with status updates (pending/completed) and provides a clean interface for managing daily activities efficiently.",
      tech: "Django,PostgreSql",
      img: SadImg,
      github: "https://simple-todo-1-u0ir.onrender.com/",
    },
    {
      title: "Task Manager API",
      description: "A Django REST API-based task manager that allows users to create, update, retrieve, and delete tasks programmatically. It exposes structured endpoints for task management with basic status tracking, designed to be used by frontend apps or external clients.",
      tech: "Django, DRF, PostgreSQL",
      img: taskmanagerapiImg,
      github: "https://github.com/wenddii/my-api-project.git",
    },
    {
      title: "EDU_Rise Africa",
      description: "An early-stage proposal for an offline-first learning platform designed for African students with limited internet access. It outlines a system concept for delivering educational content in low-connectivity environments using lightweight, locally accessible resources. The project was developed as a prototype and design document for an ALX submission.",
      tech: "Google Slides, Miro",
      img: EduRIseImg,
      github:
        "https://docs.google.com/presentation/d/17NSeV7U4q4EWbXAR91jyDv_hZh-LO1WmfU3ycoNOnlQ/edit",
    },
    {
      title: "Java Student Registration System",
      description:
        "A Java console application for managing student records and calculating grades. It allows users to register students, store their academic information, and compute final grades based on input scores through a simple command-line interface.",
      tech: "Java",
      img: javaconsoleImg,
      github: "https://github.com/wenddii/java_student_management.git",
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