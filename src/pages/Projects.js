import React from "react";
import "./Projects.css";

const projectList = [
  {
    title: "Pinnacle : SSC & Railway Prep",
    description:
      "A Jetpack compose app, built for android devices. It is a one-stop solution for SSC and Railway exam preparation. As it includes mock tests, video courses, e-books and all the other stuffs needed for serious exam aspirant.",
    link: "https://play.google.com/store/apps/details?id=com.ssccgl.pinnacle.testportal",
  },
  {
    title: "Weather App",
    description: "A weather app using OpenWeatherMap API.",
    link: "#",
  },
  {
    title: "Todo App",
    description: "A simple todo app with CRUD features.",
    link: "#",
  },
];

function Projects() {
  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      <div className="project-grid">
        {projectList.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
