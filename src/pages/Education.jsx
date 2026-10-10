import React from "react";
import { Link } from "react-router-dom";
import "./Education.css";

export default function Education() {
  return (
    <>
      <div className="education-page">
        <div className="education-hero">
          <span className="badge">Academic Background</span>
          <h1 className="page-title">
            My <span className="gradient-text">Education</span>
          </h1>
        </div>

        <div className="timeline-container">
          {/* Item 1: Degree */}
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span className="timeline-date">2026 - Present</span>
              <h3>BS Computer Science (BSCS)</h3>
              <h4>Punjab University</h4>
              <p>
                Focusing on Core Computer Science principles, Data Structures,
                Algorithms, Web Development, and Digital Logic Design.
              </p>
            </div>
          </div>
          {/* Item 1: Degree */}
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span className="timeline-date">2023 - 2024</span>
              <h3> Computer Science </h3>
              <h4>Wissen Grammar High School</h4>
              <p>
                Studied Computer Science fundamentals, programming basics, and
                gained hands-on experience with coding projects and applications. 
              </p>
            </div>
          </div>

          {/* Item 2: Relevant Coursework or College */}
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span className="timeline-date">2024 - 2025</span>
              <h3>Intermediate / Higher Secondary</h3>
              <p>
                Strong foundation in Mathematics, Physics, and Computer Science
                fundamentals.
              </p>
            </div>
          </div>
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
