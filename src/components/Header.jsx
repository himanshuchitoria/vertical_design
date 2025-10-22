import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="header-container">
      <div className="logo">
        <NavLink to="/" className="logo-text">
          Vertical Design Studio
        </NavLink>
      </div>

      <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
        {/* Hamburger icon bars */}
        <span className={`bar ${menuOpen ? "open" : ""}`}></span>
        <span className={`bar ${menuOpen ? "open" : ""}`}></span>
        <span className={`bar ${menuOpen ? "open" : ""}`}></span>
      </button>

      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        <NavLink to="/" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} onClick={() => setMenuOpen(false)}>
          Home
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} onClick={() => setMenuOpen(false)}>
          About
        </NavLink>
        <NavLink to="/services" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} onClick={() => setMenuOpen(false)}>
          Services
        </NavLink>
        <NavLink to="/projects" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} onClick={() => setMenuOpen(false)}>
          Projects
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} onClick={() => setMenuOpen(false)}>
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
