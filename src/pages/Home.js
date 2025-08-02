import React from "react";
import "./Home.css"; // We'll create this next

function Home() {
  return (
    <div className="home-container">
      <div className="intro">
        <h1>Hello, I'm <span className="highlight">Your Name</span></h1>
        <p>I'm a Frontend Developer passionate about building modern web applications.</p>
        <a href="/projects" className="cta-button">View Projects</a>
      </div>
    </div>
  );
}

export default Home;
