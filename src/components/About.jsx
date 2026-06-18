import "./About.css";
import profilePic from "../assets/profile.jpg"; // put your photo here

function About() {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <div className="about-content">
        <img src={profilePic} alt="Wendwosen" className="profile-pic" />
        <p>
         My name is Wendwosen Tessema, a 3rd year Information Systems student with a passion for building software and solving problems through technology.

Before starting my tech journey, I was a basketball player, and that was the dream I wanted to pursue. Unfortunately, due to a knee injury, I could not continue that path. After exploring different creative fields such as content creation, photography, Photoshop, video editing, and music production, I eventually found my passion in technology.

About a year ago, I decided to fully focus on software development. I started with HTML and CSS and later continued my learning through the ALX Backend Web Development program. The journey was not always easy, and there were moments when I questioned myself, but every challenge pushed me to improve.

A major turning point came when I participated in a university hackathon. Working with a friend, we competed against 60 teams and made it into the top 10. That experience gave me confidence and motivated me to keep building and learning.

Currently, I work with Django and Tailwind CSS, focusing on creating scalable web applications and improving my skills as a developer. My goal is to grow into a strong full-stack developer and eventually explore the field of Artificial Intelligence.

I believe I am still at the beginning of my journey, but I am always eager to learn, build, and improve.

        </p>
      </div>
    </section>
  );
}

export default About;