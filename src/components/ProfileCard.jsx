import React, { useState } from "react";

const ProfileCard = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div
        className="project-card"
        onClick={openModal}
        style={{
          width: 300,
          border: "1px solid #ddd",
          borderRadius: 12,
          padding: 16,
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          boxSizing: "border-box",
          cursor: "pointer",
        }}
      >
        <img
          src={project.image}
          alt={project.title}
          className="project-image"
          style={{ width: "100%", borderRadius: 10, objectFit: "cover", height: 180 }}
        />
        <div className="project-info" style={{ padding: "1rem" }}>
          <h3 className="project-title" style={{ marginBottom: "0.5rem" }}>{project.title}</h3>
          <p className="project-description" style={{ marginBottom: "0.5rem", color: "#555" }}>{project.description}</p>
          <p className="project-service" style={{ fontWeight: "bold", color: "#222", marginBottom: "0.75rem" }}>{project.serviceType}</p>
        </div>
      </div>

      {isModalOpen && (
        <div
          onClick={closeModal}
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
          <div onClick={e => e.stopPropagation()} style={{ position: "relative" }}>
            <button
              onClick={closeModal}
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
              src={project.image}
              alt={project.title}
              style={{
                maxHeight: "80vh",
                maxWidth: "90vw",
                borderRadius: 12,
                objectFit: "contain",
              }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ProfileCard;
