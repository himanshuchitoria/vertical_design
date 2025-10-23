import React from "react";
import { useNavigate } from 'react-router-dom';
import {Link} from "react-router-dom";



const About = () => {
  const navigate = useNavigate();
  return (
    <section className="about-container">
      <h1 className="abouth1">About Us</h1>

      <div className="about-content">
        <div className="profile-photo-container">
          <img
            src="/assets/projects/homeim.jpg" // Correct public path
            alt="Profile"
            className="profile-photo"
          />

         
        
        </div>
        <div className="about-text">
  <h2 className="about-subheading">Vertical Design Studio</h2>
  <p>
    Vertical Design Studio is a boutique, design-driven interior studio specializing in sophisticated renovations that blend modern aesthetics with timeless elegance.
    Our passion lies in creating luxurious, high-quality interiors that elevate everyday living through meticulous attention to detail and innovative design solutions.
  </p>
  <p>
    We believe that thoughtful, functional design enhances the way people live and interact with their spaces. Each project is tailored to reflect the unique personality and lifestyle of our clients, combining beauty with practicality.
  </p>
  <p>
    Our services encompass every stage of the interior journey—from initial concept and space planning to material and lighting design, furniture sourcing, and seamless project execution.
    This end-to-end approach ensures a cohesive, stress-free experience and superior craftsmanship.
  </p>
  <p>
    At Vertical Design Studio, quality is never compromised. We source premium materials, collaborate with skilled artisans, and prioritize sustainable, innovative practices.
    Our work stands apart through its elegant simplicity, refined details, and lasting impact.
  </p>
  <p>
    Client trust and satisfaction are at the heart of everything we do. We are committed to honest communication, transparent processes, and delivering projects on time and within budget.
    Discover how Vertical Design Studio can transform your space into a harmonious blend of luxury, comfort, and style.
  </p>
</div>

        
      </div>
    </section>
  );
};

export default About;
