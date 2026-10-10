import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";
import "./Contact.css";

export default function Skills() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been sent successfully.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <div className="contact-page">
        <div className="contact-hero">
          <span className="badge">Get In Touch</span>
          <h1 className="page-title">
            Contact <span className="gradient-text">Me</span>
          </h1>
          <p className="page-subtitle">
            Have a question, project proposal, or just want to say hi? Feel free
            to reach out!
          </p>
        </div>

        <div className="contact-container">
          {/* Left Side: Contact Information Cards */}
          <div className="contact-info">
            {/* WhatsApp Card */}
            <a
              href="https://wa.me/923019306424"
              target="_blank"
              rel="noreferrer"
              className="info-card whatsapp-card"
            >
              <div className="icon-box whatsapp-icon">
                <FaWhatsapp />
              </div>
              <div>
                <h3>WhatsApp</h3>
                <p>+92 301 9306424</p>
                <span className="click-note">Click to Chat ↗</span>
              </div>
            </a>

            {/* Email Card */}
            <div className="info-card">
              <div className="icon-box email-icon">
                <FaEnvelope />
              </div>
              <div>
                <h3>Email</h3>
                <p>
                  <a href="mailto:subhanhaneef@gmail.com">
                    iamsubhanhaneef123@gmail.com
                  </a>
                </p>
              </div>
            </div>

            {/* Location Card */}
            <div className="info-card">
              <div className="icon-box location-icon">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h3>Location</h3>
                <p>Lahore, Pakistan</p>
              </div>
            </div>
          </div>

          {/* Right Side: Message Form */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Ali Ahmed"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. ali@example.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                required
              ></textarea>
            </div>

            <button type="submit" className="btn-submit">
              Send Message <FaPaperPlane className="send-icon" />
            </button>
          </form>
        </div>
      </div>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-brand">
              <h3 className="footer-logo">
                Subhan<span className="gradient-text">.dev</span>
              </h3>
              <p>
                Crafting modern, responsive, and performance-focused web
                experiences.
              </p>
            </div>

            <div className="footer-links">
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/projects">Projects</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>

            <div className="footer-social">
              <h4>Connect</h4>
              <div className="social-icons">
                <a href="https://github.com" target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>
              © {new Date().getFullYear()} Subhan Haneef. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
