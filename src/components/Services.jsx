import React from "react";
import { useNavigate } from "react-router-dom";

const services = [
  {
    name: "Interior Design Consultation",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=500&q=60", // Modern designer workspace
    path: "/idesign",
  },
  {
    name: "Space Planning",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=500&q=60", // Architectural floor plan
    path: "/Spaceplan",
  },
  {
    name: "Lighting & Material Design",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=500&q=60", // Sophisticated lighting setup
    path: "/lightdesign",
  },
  {
    name: "Furniture & Décor Sourcing",
    image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=500&q=60", // Curated modern furniture
    path: "/furniture",
  },
  {
    name: "End-to-End Project Execution",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=500&q=60", // Building/interior construction
    path: "/projectexecution",
  },
  {
    name: "Project Management",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=500&q=60", // Planning/oversight visual
    path: "/projectmanagement",
  },
  {
    name: "Budget-Friendly Design Solutions",
    image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=500&q=60", // Smart, practical interior design
    path: "/budgetdesign",
  },
];

const Services = () => {
  const navigate = useNavigate();

  const handleCardClick = (service) => {
    if (service.path) {
      navigate(service.path);
    }
  };

  return (
    <section className="services-container">
      <h1>Our Services</h1>
      <div className="services-grid">
        {services.map((service, index) => (
          <div
            key={index}
            className="service-card"
            onClick={() => handleCardClick(service)}
            style={
              index === services.length - 1
                ? { cursor: "pointer", marginBottom: "48px !important" }
                : { cursor: "pointer" }
            }
          >
            <img
              src={service.image}
              alt={service.name}
              className="service-image"
            />
            <h3 className="service-name">{service.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
