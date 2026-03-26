import "./About.css";
import profilePic from "../assets/profile.jpg"; // put your photo here

function About() {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <div className="about-content">
        <img src={profilePic} alt="Wendwosen" className="profile-pic" />
        <p>
          I’m Wendwosen Tessema, a junior web developer and third-year Information Systems student passionate about building practical and scalable digital solutions.

I started with HTML and CSS, completed an intensive 5-month backend development program, and I’m currently learning React to grow into a full-stack developer. My studies also give me a strong understanding of system design and real-world applications.

I also create YouTube content and work in video editing, which strengthens my creativity and communication skills.

I’m currently seeking internship opportunities where I can apply my skills, gain experience, and continue growing as a developer.
        </p>
      </div>
    </section>
  );
}

export default About;