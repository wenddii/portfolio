import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Wendwosen</h2>
      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#extracurriculars">Activities</a>
        <a href="#resume">Resume</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;