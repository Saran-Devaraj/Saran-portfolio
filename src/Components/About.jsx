import { MdOutlineDesignServices } from "react-icons/md";
import { MdPhoneIphone } from "react-icons/md";
import { PiCodeBold } from "react-icons/pi";
import { IoRocketOutline } from "react-icons/io5";
import React, { useState, useRef } from "react";
import "../Styles/About.css";

function About() {
  const [activeValue, setActiveValue] = useState(0);
  const touchStartX = useRef(0);
  const total = 4;

  const handleValueTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleValueTouchEnd = (e) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) setActiveValue((p) => (p + 1) % total);
      else setActiveValue((p) => (p - 1 + total) % total);
    }
  };

  const timeline = [
    {
      year: "2020",
      title: "Development Journey Begins",
      description: "Started my career as a frontend developer with focus on React.js and user interface design"
    },
    {
      year: "2021",
      title: "First Major Project",
      description: "Built a portfolio website using React with modern responsive design principles"
    },
    {
      year: "2024",
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
      icon: <MdOutlineDesignServices />,
      title: "User-Centric Design",
      description: "Creating interfaces that prioritize user needs and experiences"
    },
    {
      icon: <MdPhoneIphone />,
      title: "Responsive Design",
      description: "Building interfaces that work flawlessly across all devices"
    },
    {
      icon: <PiCodeBold />,
      title: "Clean Code",
      description: "Writing maintainable, efficient, and well-documented code"
    },
    {
      icon: <IoRocketOutline />,
      title: "Performance",
      description: "Optimizing for speed, usability, and user satisfaction"
    }
  ];

  const getValuePos = (index) => {
    let diff = index - activeValue;
    if (diff >  total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  };

  return (
    <div className="about-page">

      <section className="about-hero">
        <div className="about-hero-visual">
          <div className="abstract-shape shape-1"></div>
          <div className="abstract-shape shape-2"></div>
          <div className="abstract-shape shape-3"></div>
        </div>
        <div className="about-hero-content">
          <h1>About Me</h1>
          <p className="about-hero-subtitle">Frontend Developer & UI Enthusiast</p>
          <div className="about-hero-divider"></div>
          <p className="about-hero-description">
            I'm a passionate frontend developer dedicated to creating beautiful, responsive interfaces that solve real problems.
            With a strong focus on user experience and clean code, I transform ideas into engaging digital products.
          </p>
        </div>
      </section>

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
                <span className="timeline-year-mobile">{item.year}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

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

        <div
          className="values-arc-swiper"
          onTouchStart={handleValueTouchStart}
          onTouchEnd={handleValueTouchEnd}
        >
          {values.map((value, index) => {
            const pos    = getValuePos(index);
            const absPos = Math.abs(pos);
            if (absPos > 2) return null;

            const rotate  = pos * 10;
            const translateX = pos * 80;
            const translateY = absPos * 20;
            const scale   = 1 - absPos * 0.08;
            const zIndex  = 10 - absPos;
            const opacity = absPos > 1 ? 0.55 : 1;

            return (
              <div
                key={index}
                className={`value-arc-card ${pos === 0 ? "is-active" : ""}`}
                style={{
                  transform: `translateX(${translateX}px) translateY(${translateY}px) rotate(${rotate}deg) scale(${scale})`,
                  zIndex,
                  opacity,
                  filter: absPos > 0 ? `brightness(${1 - absPos * 0.15})` : "none",
                  transition: "all 0.4s cubic-bezier(0.34, 1.2, 0.64, 1)",
                }}
                onClick={() => setActiveValue(index)}
              >
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            );
          })}

          <div className="arc-dots">
            {values.map((_, i) => (
              <button
                key={i}
                className={`arc-dot ${i === activeValue ? "active" : ""}`}
                onClick={() => setActiveValue(i)}
              />
            ))}
          </div>
        </div>
      </section>

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