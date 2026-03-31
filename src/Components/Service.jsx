import React, { useState } from "react";
import "../Styles/Service.css";
import { Devbox1, Devbox2, Devbox3, Devbox4 } from "../assets";

function Service() {
  const [expandedFaq, setExpandedFaq] = useState(null);

  const services = [
    {
      icon: Devbox1,
      title: "React.js Development",
      description: "Building modern, scalable web applications with React.js best practices",
      features: ["Functional Components", "React Hooks", "State Management", "Performance Optimization"],
      color: "#5F28FD"
    },
    {
      icon: Devbox2,
      title: "Responsive Web Design",
      description: "Creating beautiful interfaces that work seamlessly across all devices",
      features: ["Mobile-First Approach", "CSS Layouts", "Cross-browser Testing", "Accessibility"],
      color: "#FF6B9D"
    },
    {
      icon: Devbox3,
      title: "UI Component Development",
      description: "Designing reusable, accessible components that scale with your project",
      features: ["Component Libraries", "Design Systems", "Storybook Integration", "Component Documentation"],
      color: "#00D4FF"
    },
    {
      icon: Devbox4,
      title: "Frontend Optimization",
      description: "Improving performance, SEO, and user experience of existing applications",
      features: ["Performance Audits", "Code Optimization", "SEO Enhancement", "Web Vitals"],
      color: "#FFB82E"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Understanding",
      description: "I take time to understand your goals, target audience, and project requirements"
    },
    {
      step: "02",
      title: "Planning",
      description: "I create a detailed plan with wireframes and component structure"
    },
    {
      step: "04",
      title: "Development",
      description: "I write clean, maintainable code following best practices"
    },
    {
      step: "03",
      title: "Design",
      description: "I build responsive, user-centric interfaces with attention to detail"
    },
    {
      step: "05",
      title: "Testing",
      description: "I thoroughly test for functionality, responsiveness, and browser compatibility"
    },
    {
      step: "06",
      title: "Delivery",
      description: "I deliver the final product with documentation and support"
    }
  ];

  const faqs = [
    {
      id: 1,
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on complexity and scope. A simple website might take 2-4 weeks, while a more complex React application typically takes 4-8 weeks. I'll provide a detailed timeline after discussing your requirements."
    },
    {
      id: 2,
      question: "What technologies do you use?",
      answer: "I specialize in React.js, JavaScript ES6+, HTML5, CSS3, and responsive design frameworks. I also use modern tools like Git, npm, Webpack, and development best practices to ensure quality code."
    },
    {
      id: 3,
      question: "Do you provide ongoing support?",
      answer: "Yes, I offer post-launch support and maintenance services. Whether you need bug fixes, feature updates, or performance optimization, I'm here to help keep your application running smoothly."
    },
    {
      id: 4,
      question: "Can you work with my existing team?",
      answer: "Absolutely! I have experience collaborating with designers, backend developers, and other team members. I write clean code, document my work, and integrate seamlessly with existing workflows."
    },
    {
      id: 5,
      question: "Do you build mobile-responsive websites?",
      answer: "Yes, mobile-first responsive design is a core focus of my work. All projects are designed to work beautifully on mobile, tablet, and desktop devices with cross-browser compatibility."
    },
    {
      id: 6,
      question: "What happens if I need changes after delivery?",
      answer: "I'm committed to your satisfaction. Small adjustments and refinements are part of my process. For larger scope changes, we can discuss additional development time and any associated adjustments."
    }
  ];

  const toggleFaq = (id) => {
    setExpandedFaq(expandedFaq === id ? null : id);
  };

  return (
    <div className="service-page">
      <section className="service-hero">
        <div className="service-hero-content">
          <h1>My Services</h1>
          <p>Frontend development and UI design solutions to bring your vision to life</p>
          <div className="hero-line"></div>
        </div>
      </section>

      <section className="service-showcase">
        <div className="service-container">
          <div className="services-header">
            <h2>My Services</h2>
            <p>Tailored solutions for your frontend development needs</p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card" style={{ '--service-color': service.color }}>
                <div className="service-icon-wrapper">
                  <img src={service.icon} alt={service.title} className="service-icon" />
                </div>
                <h3>{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <div className="service-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <button className="service-learn-btn">Learn More</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="service-process">
        <div className="process-container">
          <div className="process-header">
            <h2>My Process</h2>
            <p>From concept to delivery in 6 proven steps</p>
          </div>
          <div className="process-grid">
            {process.map((item, index) => (
              <div key={index} className="process-card">
                <div className="process-step">{item.step}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                {index < process.length - 1 && (
                  <div className="process-arrow">→</div>
                )}
                {index < process.length - 1 && (
                  <div className="process-arrow-down">↓</div>
                )}
                {index === 0 && <div className="process-arrow arr-right">→</div>}
                {index === 1 && <div className="process-arrow arr-down">↓</div>}
                {index === 2 && <div className="process-arrow arr-down">↓</div>}
                {index === 3 && <div className="process-arrow arr-left">←</div>}
                {index === 4 && <div className="process-arrow arr-right">→</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="service-faq">
        <div className="faq-container">
          <div className="faq-header">
            <h2>Frequently Asked Questions</h2>
            <p>Common questions about my frontend development services</p>
          </div>
          <div className="faq-grid">
            {faqs.map((faq) => (
              <div key={faq.id} className={`faq-item ${expandedFaq === faq.id ? 'expanded' : ''}`}>
                <button
                  className="faq-question"
                  onClick={() => toggleFaq(faq.id)}
                >
                  <span>{faq.question}</span>
                  <span className="faq-icon">+</span>
                </button>
                {expandedFaq === faq.id && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="service-cta">
        <div className="cta-content">
          <h2>Ready to Start Your Project?</h2>
          <p>Let's discuss your frontend development needs and create something amazing together</p>
          <button className="cta-button">Get In Touch</button>
        </div>
      </section>
    </div>
  );
}

export default Service;