import "./Contact.css";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="content-wrapper">
        <h2>Contact</h2>
        <p>Want to get in touch? Feel free to email me or connect on LinkedIn & GitHub.</p>

        <div className="contact-buttons">
          {/* Email */}
          <a href="mailto:wendwosen03@gmail.com">
            <FaEnvelope />
            <span>Email Me</span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/wendwosen-tessema-3b8733274?utm_source=share_via&utm_content=profile&utm_medium=member_android"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
            <span>LinkedIn</span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/wendii"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;