import "./HeroSection.css";

function HeroSection() {
  return (
    <section id="intro" className="intro-section story-section">
      <div className="intro-copy">
        <p className="eyebrow">Computer Science Student & Developer</p>
        <h1>Building software, learning business, and documenting the journey.</h1>
        <p className="intro-text">
          My name is Wendwosen Tessema. I am a 3rd year Information Systems student, and my
          story started on the basketball court. Injury changed that dream, so I spent time in
          creative work until tech became the place where I could keep building forward.
        </p>

        <div className="intro-meta">
          <span>Name: Wendwosen</span>
          <span>Current role: 3rd year Information Systems student & developer</span>
          <span>Mission: Build useful software, learn fast, and grow into a full-stack engineer.</span>
        </div>

        <div className="intro-actions">
          <a className="text-link" href="#projects">
            See selected work
          </a>
          <a className="text-link" href="#contact">
            Contact me
          </a>
        </div>
      </div>

      <aside className="intro-panel">
        <span className="panel-label">Now</span>
        <h2>
          In Addis, searching for an internship and trying to learn from the best mentors I can
          find.
        </h2>
        <p>
          I want to contribute with what I already know, stay productive, and keep moving toward
          full-stack development and AI.
        </p>
      </aside>
    </section>
  );
}

export default HeroSection;

