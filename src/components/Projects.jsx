// src/components/Projects.jsx
import React from "react";
import ProjectCard from "./ProfileCard.jsx";
import projectsData from "../data/projects.js";

const Projects = () => {
  return (
    <section className="projects-container" style={{ padding: "3rem 2rem", maxWidth: "1000px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>Featured Projects</h1>
      <div
        className="projects-grid"
        
      >
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
