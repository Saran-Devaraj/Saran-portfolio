import React from "react";
import "../Styles/About.css";
import { Venture } from "../assets";

function About() {
  const timeline = [
    {
      year: "2024",
      title: "Development Journey Begins",
      description: "Started my career as a frontend developer with focus on React.js and user interface design"
    },
    {
      year: "2024",
      title: "First Major Project",
      description: "Built a portfolio website using React with modern responsive design principles"
    },
    {
      year: "2025",
      title: "UI Components Library",
      description: "Developed reusable component library including buttons, cards, modals, and form elements"
    },
    {
      year: "2025",
      title: "Responsive Design Mastery",
      description: "Created multiple mobile-first responsive landing pages with cross-browser compatibility"
    },
    {
      year: "2026",
      title: "Continuous Growth",
      description: "Expanding expertise in modern frontend technologies and best practices"
    }
  ];

  const values = [
    {
      icon: "🎯",
      title: "User-Centric Design",
      description: "Creating interfaces that prioritize user needs and experiences"
    },
    {
      icon: "📱",
      title: "Responsive Design",
      description: "Building interfaces that work flawlessly across all devices"
    },
    {
      icon: "✨",
      title: "Clean Code",
      description: "Writing maintainable, efficient, and well-documented code"
    },
    {
      icon: "🚀",
      title: "Performance",
      description: "Optimizing for speed, usability, and user satisfaction"
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>About Me</h1>
          <p className="about-hero-subtitle">Frontend Developer & UI Enthusiast</p>
          <div className="about-hero-divider"></div>
          <p className="about-hero-description">
            I'm a passionate frontend developer dedicated to creating beautiful, responsive interfaces that solve real problems.
            With a strong focus on user experience and clean code, I transform ideas into engaging digital products.
          </p>
        </div>
        <div className="about-hero-visual">
          <div className="abstract-shape shape-1"></div>
          <div className="abstract-shape shape-2"></div>
          <div className="abstract-shape shape-3"></div>
        </div>
      </section>

      {/* Story Section */}
      <section className="about-story">
        <div className="story-container">
          <div className="story-content">
            <h2>My Journey</h2>
            <p>
              I started my career as an entry-level frontend developer with a genuine passion for building intuitive user interfaces.
              My journey has been driven by a commitment to continuous learning and a dedication to creating exceptional digital experiences.
            </p>
            <p>
              With hands-on experience in React.js and responsive web design, I've developed skills in component-based UI development, 
              cross-browser compatibility, and mobile-first design principles. I believe great interfaces aren't just about aesthetics—they're 
              about solving problems and creating delightful user experiences.
            </p>
          </div>
          <div className="story-stats">
            <div className="stat-card">
              <h3>5+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat-card">
              <h3>React.js</h3>
              <p>Core Expertise</p>
            </div>
            <div className="stat-card">
              <h3>100%</h3>
              <p>Mobile Responsive</p>
            </div>
            <div className="stat-card">
              <h3>Clean Code</h3>
              <p>Focus Area</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="about-timeline">
        <div className="timeline-header">
          <h2>Our Journey</h2>
          <p>A milestone for every moment</p>
        </div>
        <div className="timeline-container">
          {timeline.map((item, index) => (
            <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-marker">{item.year}</div>
              <div className="timeline-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="about-values">
        <div className="values-header">
          <h2>Our Core Values</h2>
          <p>Principles that guide everything we do</p>
        </div>
        <div className="values-grid">
          {values.map((value, index) => (
            <div key={index} className="value-card">
              <div className="value-icon">{value.icon}</div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="cta-content">
          <h2>Let's Work Together</h2>
          <p>Have a project in mind? I'd love to help bring your ideas to life with clean code and beautiful design</p>
          <button className="cta-button">Get In Touch</button>
        </div>
      </section>
    </div>
  );
}

export default About;
