import "./Resume.css";
import resumePDF from "../assets/Wendwosen_Resume.pdf"; // put your resume here

function Resume() {
  return (
    <section id="resume" className="resume">
      <h2>Resume</h2>
      <p>Click below to download my resume:</p>
      <a href={resumePDF} download>
        <button>Download Resume</button>
      </a>
      

    </section>
  );
}

export default Resume;