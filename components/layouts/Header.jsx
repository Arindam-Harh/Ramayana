import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Header.css";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="header-container">
        <NavLink to="/" className="logo">
          ॥ रामायण ॥
        </NavLink>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <NavLink to="/" end onClick={closeMenu}>
            Home
          </NavLink>

          <NavLink to="/characters" onClick={closeMenu}>
            Characters
          </NavLink>

          <NavLink to="/timeline" onClick={closeMenu}>
            Timeline
          </NavLink>

          <NavLink to="/kandas" onClick={closeMenu}>
            Kandas
          </NavLink>

          <NavLink to="/map" onClick={closeMenu}>
            Journey Map
          </NavLink>

          <NavLink to="/ai-guide" onClick={closeMenu}>
            Ask AI
          </NavLink>
        </nav>
      </div>
    </header>
  );
};