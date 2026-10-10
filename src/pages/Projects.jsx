import React from "react";
import { Link } from "react-router-dom";
import "./Projects.css";

export default function Projects() {
  return (
    <>
      <div className="projects-page">
        <div className="projects-hero">
          <span className="badge">My Portfolio</span>
          <h1 className="page-title">
            My <span className="gradient-text">Projects</span>
          </h1>
          <p className="page-subtitle">
            Here are some of the web applications I have built using React,
            JavaScript, and CSS architecture.
          </p>
        </div>

        <div className="projects-container">
          {/* Project 1: Weather App */}
          <div className="project-card">
            <div className="card-header">
              <div className="project-icon">🌤️</div>
              <span className="project-category">API & React</span>
            </div>
            <div className="card-body">
              <h3>Weather Forecast App</h3>
              <p>
                A real-time weather application built using React hooks and REST
                APIs to fetch weather condition, temperature, and humidity for
                any city.
              </p>
              <div className="tech-tags">
                <span>React</span>
                <span>Fetch API</span>
                <span>CSS Grid</span>
              </div>
            </div>
            <div className="card-footer">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="btn-card"
              >
                View Source Code ↗
              </a>
            </div>
          </div>

          {/* Project 2: Todo App */}
          <div className="project-card">
            <div className="card-header">
              <div className="project-icon">📝</div>
              <span className="project-category">State Management</span>
            </div>
            <div className="card-body">
              <h3>Interactive Todo App</h3>
              <p>
                A clean task management web app featuring CRUD operations (Add,
                Delete, Mark Complete) with LocalStorage support to persist user
                tasks.
              </p>
              <div className="tech-tags">
                <span>React</span>
                <span>LocalStorage</span>
                <span>JavaScript</span>
              </div>
            </div>
            <div className="card-footer">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="btn-card"
              >
                View Source Code ↗
              </a>
            </div>
          </div>

          {/* Project 3: Counter App */}
          <div className="project-card">
            <div className="card-header">
              <div className="project-icon">🔢</div>
              <span className="project-category">React Fundamentals</span>
            </div>
            <div className="card-body">
              <h3>Dynamic Counter App</h3>
              <p>
                A responsive counter application demonstrating core React state
                logic (`useState`), custom step increments, and lower-bound
                resets.
              </p>
              <div className="tech-tags">
                <span>React</span>
                <span>useState</span>
                <span>CSS Modules</span>
              </div>
            </div>
            <div className="card-footer">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="btn-card"
              >
                View Source Code ↗
              </a>
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
