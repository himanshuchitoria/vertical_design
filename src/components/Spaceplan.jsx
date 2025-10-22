import React, { useState } from "react";
import projectsData from "../data/projects.js";

const Spaceplan = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Filter projects for "Interior Design" serviceType
 const interiorProjects = projectsData.filter(
  (project) =>
    Array.isArray(project.serviceType)
      ? project.serviceType.includes("Space Planning")
      : project.serviceType === "Space Planning"
);


  const openImageModal = (imgSrc) => {
    setSelectedImage(imgSrc);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="service-landing-container" style={{ maxWidth: 1000, margin: "auto", padding: "2rem" }}>
      <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>Space Planning</h1>
      <p style={{ textAlign: "center", marginBottom: "3rem", color: "#555" }}>
        A well-designed space isn’t just about how it looks — it’s about how it feels and functions. Our Space Planning service focuses on optimizing layouts to ensure every corner has a purpose and every pathway feels effortless. We study the flow, proportions, and natural light to create arrangements that blend comfort with practicality. Whether it’s a compact apartment or a large commercial setup, we balance form and functionality to make the most of your available space. The result is an interior that feels spacious, intuitive, and harmonious — where movement, balance, and comfort coexist beautifully.
      </p>

      <div
        className="projects-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {interiorProjects.map((project) => (
          <div
            key={project.id}
            className="project-card"
            style={{
              border: "1px solid #ddd",
              borderRadius: 12,
              overflow: "hidden",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              cursor: "pointer",
            }}
            onClick={() => openImageModal(project.image)}
          >
            <img
              src={project.image}
              alt={project.title}
              style={{ width: "100%", height: 180, objectFit: "cover" }}
            />
            <div style={{ padding: "1rem" }}>
              <h3 style={{ marginBottom: "0.5rem" }}>{project.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          onClick={closeImageModal}
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
        >
          <div onClick={(e) => e.stopPropagation()} style={{ position: "relative" }}>
            <button
              onClick={closeImageModal}
              style={{
                position: "absolute",
                top: 10,
                right: 10,
                backgroundColor: "transparent",
                border: "none",
                color: "white",
                fontSize: "2rem",
                cursor: "pointer",
                lineHeight: 1,
              }}
              aria-label="Close"
            >
              &times;
            </button>
            <img
              src={selectedImage}
              alt="Full preview"
              style={{ maxHeight: "80vh", maxWidth: "90vw", borderRadius: 12, objectFit: "contain" }}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Spaceplan;
