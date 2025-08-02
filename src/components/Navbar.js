import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // We'll create this CSS file next

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">My Portfolio</h2>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
