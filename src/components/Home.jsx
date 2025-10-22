import React from "react";
import { Link } from "react-router-dom";
import ProjectCard from "./ProfileCard.jsx";
import projectsData from "../data/projects.js";
import Mainphoto from  "../../public/assets/projects/homeim.jpg";

const Home = () => {
  const featuredProjects = projectsData.slice(0, 3);

  return (
    <section className="home-container">
      {/* Hero Section */}
      <div className="hero-section" style={{textAlign: "center", padding: "3rem"}}>
        <h1 className="studio-name" style={{fontSize: "3rem", fontWeight: "bold"}}>
          Vertical Design Studio
        </h1>
        <p className="tagline" style={{fontSize: "1.5rem", fontStyle: "italic", color: "#777"}}>
          Clean. Elegant. Minimal.
        </p>
        <img 
          src={Mainphoto}
          alt="Modern Interior" 
          style={{width: "80%", maxWidth: "900px", marginTop: "2rem", borderRadius: "10px"}} 
        />
      </div>

      {/* Small About Teaser */}
      <div className="about-teaser" style={{padding: "2rem", maxWidth: "700px", margin: "0 auto", fontSize: "1.1rem"}}>
        <p>
          Vertical Design Studio crafts visually stunning interiors that blend simplicity, harmony, and sophistication.
          We focus on clean lines, timeless elegance, and functional spaces tailored to your lifestyle.
        </p>
        <Link to="/about" className="btn btn-secondary" style={{marginTop: "1rem", display: "inline-block"}}>
          Learn More About Us
        </Link>
      </div>

      {/* Featured Projects Spotlight */}
      <div className="featured-projects" style={{padding: "3rem 2rem"}}>
        <h2 style={{textAlign: "center", marginBottom: "2rem"}}>Featured Projects</h2>
        <div className="projects-grid" style={{display: "flex", gap: "2rem", justifyContent: "center", flexWrap: "wrap"}}>
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div style={{textAlign: "center", marginTop: "2rem"}}>
          <Link to="/projects" className="btn btn-primary">View All Projects</Link>
        </div>
      </div>

      {/* Call to Action */}
      <div className="home-cta" style={{textAlign: "center", padding: "3rem", backgroundColor: "#f6f6f6", marginTop: "4rem", borderRadius: "8px"}}>
        <h3 style={{fontSize: "2rem", marginBottom: "1rem"}}>
          Ready to transform your space?
        </h3>
        <Link to="/contact" className="btn btn-primary btn-large">Contact Us</Link>
      </div>
    </section>
  );
};

export default Home;
