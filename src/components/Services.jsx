import React from "react";

const services = [
  {
    name: "Interior Design Consultation",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=500&q=60"
  },
  {
    name: "Space Planning",
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=500&q=60"
  },
  {
    name: "Lighting & Color Palette Selection",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=500&q=60"
  },
  {
    name: "Furniture & Material Sourcing",
    image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=500&q=60"
  },
  {
    name: "Project Management",
    image: "https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?auto=format&fit=crop&w=500&q=60"
  },
  {
    name: "Project Management",
    image: "https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?auto=format&fit=crop&w=500&q=60"
  },
];

const Services = () => {
  return (
    <section className="services-container">
      <h1>Our Services</h1>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <img src={service.image} alt={service.name} className="service-image" />
            <h3 className="service-name">{service.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
