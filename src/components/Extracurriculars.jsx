import "./Extracurriculars.css";

function Extracurriculars() {
  const activities = [
    "Alx graduate",
    "Batch club member in school",
    "Mens basketball team in school",
    "youtube channel",
  ];

  return (
<section id="extracurriculars" className="extracurriculars">
  <div className="content-wrapper">
    <h2>Extracurriculars & Interests</h2>

    <ul>
      {activities.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>

    <div className="activity-images">
     <img src="/club1.jpg" alt="Bahirdar university mens basketball team" />
      <img src="/club2.jpg" alt="Batch club" />

      <a
        href="https://youtu.be/2w-9-nCaWrQ?si=Vf9RZYVB8-hvnWWP"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/youtube.jpg" alt="YouTube Channel" />
      </a>
    </div>
  </div>
</section>
  );
}

export default Extracurriculars;