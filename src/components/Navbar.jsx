import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const closeMenu = () => setShowMenu(false);

  return (
    <header className="nav-bar">
      <div className="nav-container">
        <div className="logo">
          <Link
            to="/"
            className="nav-link"
            onClick={closeMenu}
            aria-label="Home"
          >
            Subhan Hanif
          </Link>
        </div>

        <div className="desktop-menu">
          <Link to="/education" className="nav-link">
            Education
          </Link>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
          <Link to="/projects" className="nav-link">
            Projects
          </Link>
        </div>

        <button
          type="button"
          className="hamburger-menu"
          onClick={() => setShowMenu(!showMenu)}
          aria-label={
            showMenu ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={showMenu}
        >
          {showMenu ? <ImCross /> : <GiHamburgerMenu />}
        </button>
      </div>

      <div className={`mobile-options${showMenu ? " active" : ""}`}>
        <Link to="/education" className="nav-link" onClick={closeMenu}>
          Education
        </Link>

        <Link to="/contact" className="nav-link" onClick={closeMenu}>
          Contact
        </Link>
        <Link to="/projects" className="nav-link" onClick={closeMenu}>
          Projects
        </Link>
      </div>
    </header>
  );
}
