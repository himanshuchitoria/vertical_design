// src/components/Contact.js
import React from "react";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import socialLinks from "../data/socialLinks";

const Contact = () => {
  return (
    <section className="contact-container">
      <h1>Contact Us</h1>

      <div className="contact-methods">
        <a
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link whatsapp"
          aria-label="WhatsApp"
        >
          <FaWhatsapp /> WhatsApp
        </a>

        <a
          href="mailto:contact@verticaldesignstudio.in"
          className="contact-link email"
          aria-label="Email"
        >
          Email Us
        </a>
      </div>

      {/* Optional contact form (can enable later)
      <form className="contact-form">
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Message" required></textarea>
        <button type="submit" className="btn btn-primary">Send</button>
      </form>
      */}

      <div className="social-links contact-social">
        <a
          href={socialLinks.instagram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href={socialLinks.facebook}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FaFacebookF />
        </a>
      </div>
    </section>
  );
};

export default Contact;
