import { NavLink } from "react-router-dom";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>॥ रामायण ॥</h2>
          <p>
            Exploring the timeless journey of Lord Rama through characters,
            wisdom, and the eternal values of dharma.
          </p>
        </div>

        <div className="footer-links">
          <h3>Explore</h3>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/characters">Characters</NavLink>
          <NavLink to="/timeline">Timeline</NavLink>
          <NavLink to="/kandas">Kandas</NavLink>
        </div>

        <div className="footer-links">
          <h3>Resources</h3>
          <NavLink to="/map">Journey Map</NavLink>
          <NavLink to="/ai-guide">Ask AI</NavLink>
          <NavLink to="/about">About</NavLink>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Ramayana Encyclopedia. Built with devotion and React.</p>
      </div>
    </footer>
  );
};