import React from "react";

const About = () => {
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
            Vertical Design Studio is a boutique design-oriented service brand dedicated to crafting clean,
            elegant, and minimal interior designs. We believe that simplicity creates timeless beauty and 
            functional spaces that speak for themselves.
          </p>
          <p>
            Our mission is to inspire harmony and elegance in interiors by blending creativity, precision, and careful attention to detail.
            Each project reflects our commitment to trust, professionalism, and personalized service.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
