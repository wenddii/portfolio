import "./Navbar.css";

const links = [
  { label: "Journey", href: "#journey" },
  { label: "Work", href: "#projects" },
  { label: "Focus", href: "#focus" },
  { label: "Life", href: "#beyond" },
  { label: "Vision", href: "#vision" },
  { label: "Contact", href: "#contact" },
];

function Navbar({ theme, onToggleTheme }) {
  return (
    <header className="navbar">
      <a className="brand" href="#intro">
        Wendwosen
      </a>

      <nav className="nav-links" aria-label="Primary">
        {links.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>

      <button
        type="button"
        className="theme-toggle"
        onClick={onToggleTheme}
        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      >
        {theme === "dark" ? "Light" : "Dark"}
      </button>
    </header>
  );
}

export default Navbar;


