import { Blogpg1, Blogpg2, Blogpg3, Blogpg4, Blogpg5 } from "../assets";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io5";
import { RiLinkedinLine } from "react-icons/ri";
import { useState, useEffect, useRef } from "react";
import "../Styles/BlogsSec.css";

const blogData = [
  { img: Blogpg1, alt: "Portfolio Website", title: "Portfolio Website", sub: "React.js & Responsive Design"},
  { img: Blogpg2, alt: "UI Components Library", title: "UI Components Library",  sub: "Reusable React Components"},
  { img: Blogpg3, alt: "Landing Pages", title: "Responsive Pages", sub: "Mobile-First Design"},
  { img: Blogpg4, alt: "E-commerce Platform", title: "E-commerce Frontend", sub: "React & State Management"},
  { img: Blogpg5, alt: "Web App Project", title: "Web Application", sub: "Full-Stack Integration"},
];

const SocialIcons = () => (
  <div className="blog-social-icons">
    <a href="https://instagram.com" title="Instagram"><FaInstagram /></a>
    <a href="https://twitter.com" title="Twitter"><FaXTwitter /></a>
    <a href="mailto:contact@example.com" title="Email"><MdAlternateEmail /></a>
    <a href="https://wa.me" title="WhatsApp"><IoLogoWhatsapp /></a>
    <a href="https://linkedin.com" title="LinkedIn"><RiLinkedinLine /></a>
  </div>
);

function BlogsSec() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const touchStartX = useRef(0);
  const total = blogData.length;

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 480);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const getPos = (index) => {
    let diff = index - activeIndex;
    if (diff >  total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  };

  const handleTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const handleTouchEnd = (e) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      diff > 0
        ? setActiveIndex((p) => (p + 1) % total)
        : setActiveIndex((p) => (p - 1 + total) % total);
    }
  };

  return (
    <section className="blogs-section">
      <div className="blogs-container">

        <div className="blogs-header">
          <h3>Featured <span>Projects & Work</span></h3>
          <p className="blogs-header-desc">
            A collection of my best frontend development projects, showcasing
            clean code, user-centric design, and modern web technologies.
          </p>
        </div>

        {!isMobile && (
          <div className="blogs-cards">
            {blogData.map((blog, i) => (
              <div className="blog-card" key={i}>
                <div className="blog-image-container">
                  <img src={blog.img} alt={blog.alt} />
                  <div className="blog-social-icons-overlay">
                    <SocialIcons />
                  </div>
                </div>
                <div className="blog-info">
                  <p>{blog.title}</p>
                  <p>{blog.sub}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {isMobile && (
          <div
            className="mobile-carousel"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div className="mobile-carousel-track">
              {blogData.map((blog, i) => {
                const pos    = getPos(i);
                const absPos = Math.abs(pos);
                if (absPos > 2) return null;

                return (
                  <div
                    key={i}
                    className={`mobile-carousel-card ${pos === 0 ? "is-active" : ""}`}
                    style={{
                      transform: `
                        translateX(${pos * 52}%)
                        translateY(${absPos * 22}px)
                        scale(${1 - absPos * 0.09})
                      `,
                      zIndex:     10 - absPos,
                      opacity:    absPos > 1 ? 0.55 : 1,
                      filter:     absPos > 0 ? `brightness(${1 - absPos * 0.18})` : "none",
                      transition: "all 0.45s cubic-bezier(0.34,1.2,0.64,1)",
                      pointerEvents: pos === 0 ? "auto" : "none",
                    }}
                    onClick={() => setActiveIndex(i)}
                  >
                    <div className="mcc-image">
                      <img src={blog.img} alt={blog.alt} />
                    </div>

                    <div className="mcc-info">
                      <p className="mcc-title">{blog.title}</p>
                      <p className="mcc-sub">{blog.sub}</p>
                    </div>

                    {pos === 0 && (
                      <div className="mcc-social">
                        <a href="https://instagram.com" title="Instagram"><FaInstagram /></a>
                        <a href="https://twitter.com" title="Twitter"><FaXTwitter /></a>
                        <a href="mailto:contact@example.com" title="Email"><MdAlternateEmail /></a>
                        <a href="https://wa.me" title="WhatsApp"><IoLogoWhatsapp /></a>
                        <a href="https://linkedin.com" title="LinkedIn"><RiLinkedinLine /></a>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="carousel-dots">
              {blogData.map((_, i) => (
                <button
                  key={i}
                  className={`carousel-dot ${i === activeIndex ? "active" : ""}`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>

            <div className="carousel-arrows">
              <button className="carousel-arrow left"
                onClick={() => setActiveIndex((p) => (p - 1 + total) % total)}>
                ‹
              </button>
              <button className="carousel-arrow right"
                onClick={() => setActiveIndex((p) => (p + 1) % total)}>
                ›
              </button>
            </div>
          </div>
        )}

        <div className="blogs-cta">
          <p>Crafting beautiful interfaces with clean code and user-focused design. Let's create something amazing together.</p>
          <p>View My Work</p>
        </div>

      </div>
    </section>
  );
}

export default BlogsSec;