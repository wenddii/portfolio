import "./Projects.css";

// Import project screenshots (put images in src/assets/)

import taskmanagerapiImg from "../assets/task_managerapi.png";
import SadImg from "../assets/Sad.png";
import EduRIseImg from "../assets/Edu_rise.jpg";
import profileImg from "../assets/portfolio.png";
import javaconsoleImg from "../assets/javaconsole.jpg";

function Projects() {
  const projectList = [
    {
      title: "Java Student Registration System",
      description: "A java Cnosole application that simply registers and grade students score ",
      tech: "java",
      img: javaconsoleImg,
      github: "https://github.com/wenddii/java_student_management.git",
    },
    {
      title: "Task Manager Api",
      description: "Task manager api made with django",
      tech: "Django,DRF,Postgresql",
      img: taskmanagerapiImg,
      github: "https://github.com/wenddii/my-api-project.git",
    },
    {
      title: "Food ordering system analysis",
      description: "a system requiremnts and analysis for a food ordering and delivery system in school ",
      tech: "UML,ERD,DFD",
      img: SadImg,
      github: "https://github.com/wenddii/SAD.git",
    },
    {
      title: "EDU_Rise Africa",
      description: "a proposal for an offline learning application.",
      tech: "Google_slides,Miro",
      img: EduRIseImg,
      github: "https://docs.google.com/presentation/d/17NSeV7U4q4EWbXAR91jyDv_hZh-LO1WmfU3ycoNOnlQ/edit?slide=id.g3778da6cb36_0_452#slide=id.g3778da6cb36_0_452",
    },
    {
      title: "Personal Portfolio",
      description: "Interactive portfolio website showcasing projects and skills.",
      tech: "React, Vite, CSS",
      img: profileImg,
      github: "https://github.com/yourusername/portfolio",
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.img} alt={project.title} className="project-img" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p className="tech">{project.tech}</p>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              View Code
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;