import { useState } from "react";
import "./Header.css";
import { Link } from 'react-router-dom';
function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <h1 className="logo">CORIM</h1>
        <button
          className="hamburger"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>
        <nav className={`nav-menu ${isOpen ? "open" : ""}`}>
          <ul className="nav-links">
            <li><a href="/home" onClick={() => setIsOpen(false)}>Home</a></li>
            <li><a href="/about" onClick={() => setIsOpen(false)}>About</a></li>
            <li><a href="/blog" onClick={() => setIsOpen(false)}>Blog</a></li>
            <li><a href="/contact" onClick={() => setIsOpen(false)}>Contact</a></li>
             <li><a href="/Login" onClick={() => setIsOpen(false)}>Login</a></li>
            <li><a href="/Register" onClick={() => setIsOpen(false)}>Register</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

