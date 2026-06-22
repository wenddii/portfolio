import { beyondCoding } from "../data/portfolioContent";
import "./BeyondSection.css";

function BeyondSection() {
  return (
    <section id="beyond" className="story-section split-section">
      <div className="section-head">
        <p className="eyebrow">Beyond Coding</p>
        <h2>Small things that keep the work human.</h2>
        <p>
          Basketball still matters to me, and so does creative work, because they shaped how I
          handle pressure, rhythm, and consistency.
        </p>
      </div>

      <div className="beyond-grid">
        {beyondCoding.map((interest) => (
          <div key={interest} className="beyond-item">
            {interest}
          </div>
        ))}
      </div>

      <div className="youtube-strip">
        <a
          href="https://youtu.be/2w-9-nCaWrQ?si=Vf9RZYVB8-hvnWWP"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/youtube.jpg" alt="YouTube channel" />
          <span>My YouTube channel</span>
        </a>
      </div>
    </section>
  );
}

export default BeyondSection;

