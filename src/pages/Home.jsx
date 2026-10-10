import React from "react";
import { Link } from "react-router-dom";
import { ReactTyped } from "react-typed";
import "./Home.css";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <span className="badge">Frontend Web Developer</span>

            <h1 className="hero-title">
              Hi, I'm{" "}
              <span className="gradient-text">
                <ReactTyped
                  strings={[
                    "Subhan Haneef",
                    "a Frontend Developer",
                    "a React Specialist",
                    "a UI/UX Enthusiast",
                  ]}
                  typeSpeed={100}
                  backSpeed={60}
                  loop
                />
              </span>
            </h1>

            <p className="hero-description">
              I build fast, responsive, and visually stunning web applications
              using React, JavaScript, and modern CSS architecture.
            </p>

            <div className="hero-buttons">
              <Link to="/projects" className="btn btn-primary">
                View Projects
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Get In Touch
              </Link>
            </div>
          </div>

          <div className="hero-visual">
            <div className="img-wrapper">
              <img src="/image.png" alt="Subhan Haneef" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="about-container">
          <div className="about-header">
            <span className="badge">Get To Know Me</span>
            <h2 className="section-title">
              About <span className="gradient-text">Me</span>
            </h2>
          </div>
          <div className="about-grid">
            <div className="about-text">
              <p>
                I am a passionate <strong>Frontend Web Developer</strong>{" "}
                pursuing my Computer Science degree. I focus on creating clean,
                accessible, and user-friendly web applications with modern
                frontend technologies.
              </p>
              <p>
                My core expertise revolves around <strong>React.js</strong>,
                responsive layouts, modular CSS, and state management. I also
                have a keen interest in web security concepts and writing clean,
                scalable code.
              </p>
            </div>

            <div className="about-cards">
              <div className="info-card">
                <h3>Architecture</h3>
                <p>
                  Building scalable React components & dynamic UI workflows.
                </p>
              </div>

              <div className="info-card">
                <h3>Responsive Design</h3>
                <p>
                  Crafting flawless layouts for mobile, tablet, and desktop
                  screens.
                </p>
              </div>

              <div className="info-card">
                <h3>Performance & Security</h3>
                <p>
                  Optimizing web page load speeds & modern frontend security
                  practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Skills Section */}
      <div className="skills-category-grid">
        <div className="category-card">
          <h3>Frontend Development</h3>

          <div className="skill-item">
            <div className="skill-info">
              <span className="skill-name">React.js</span>
              <span className="skill-level">90%</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill react-fill"></div>
            </div>
          </div>

          <div className="skill-item">
            <div className="skill-info">
              <span className="skill-name">JavaScript (ES6+)</span>
              <span className="skill-level">85%</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill js-fill"></div>
            </div>
          </div>

          <div className="skill-item">
            <div className="skill-info">
              <span className="skill-name">HTML5 & CSS3</span>
              <span className="skill-level">90%</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill html-css-fill"></div>
            </div>
          </div>

          <div className="skill-item">
            <div className="skill-info">
              <span className="skill-name">Tailwind CSS</span>
              <span className="skill-level">80%</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill tailwind-fill"></div>
            </div>
          </div>
        </div>
      </div>
      {/* Quick Projects Banner Section */}
      <section className="projects-cta-section">
        <div className="projects-cta-container">
          <span className="badge">Portfolio Showcase</span>
          <h2 className="section-title">
            Want to see my <span className="gradient-text">Recent Work?</span>
          </h2>
          <p className="cta-description">
            I have built full-stack clones, interactive web tools, and
            cybersecurity-themed web applications.
          </p>
          <Link to="/projects" className="btn btn-primary">
            Explore All Projects ↗
          </Link>
        </div>
      </section>
      {/* Footer Section */}
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
