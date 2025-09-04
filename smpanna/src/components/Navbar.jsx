
import React, { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav className="navbar-clean">
      <div className="navbar-container-clean">
        <div className="navbar-brand-clean">
          <span className="brand-name-clean">Sampanna</span>
          <span className="brand-surname-clean">.G</span>
        </div>

        {/* Hamburger Icon for Mobile */}
        <button
          className="navbar-hamburger"
          aria-label="Toggle navigation menu"
          onClick={handleMenuToggle}
        >
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
        </button>

        <ul className={`navbar-nav-clean${menuOpen ? ' open' : ''}`}>
          <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
          <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
          <li><a href="#gallery" onClick={() => setMenuOpen(false)}>Gallery</a></li>
          <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;