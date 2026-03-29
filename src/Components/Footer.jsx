import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io5";
import { RiLinkedinLine } from "react-icons/ri";
import '../Styles/Footer.css';
import { FooterHelper } from "./helper/Footer.helper";
import { config } from "../config/config";

function Footer() {
  return (
    <footer className="footer-section">
        <div className="footer-newsletter-section">
          <div className="newsletter-wrapper">
            <h3>Subscribe to My Blog</h3>
            <p>Get frontend development tips and insights delivered to your inbox</p>
              <form className="newsletter-form" onSubmit={(e) => FooterHelper.handleSubmit(e)}>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  required
                />
                <button type="submit">Subscribe</button>
              </form>
            </div>
        </div>

      <div className="footer-main">
        <div className="footer-container">
          <div className="footer-column footer-brand">
            <div className="footer-logo">
              <h2><span className="logo-accent">Saran</span>Devaraj</h2>
            </div>
            <p className="brand-tagline">Frontend Development & UI Design</p>
            <div className="brand-description">
              <p>
                Crafting beautiful, responsive interfaces with clean code and user-focused design.
                Let's build something amazing together.
              </p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-column footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/service">Services</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="footer-column footer-services">
            <h4>Services</h4>
            <ul>
              <li><a href="/service">React Development</a></li>
              <li><a href="/service">Responsive Design</a></li>
              <li><a href="/service">UI Components</a></li>
              <li><a href="/service">Performance Optimization</a></li>
              <li><a href="/service">Consulting</a></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="footer-column footer-contact">
            <h4>Get In Touch</h4>
            <div className="contact-item">
              <span className="contact-label">Email</span>
              <a href="mailto:saran@example.com">saran@example.com</a>
            </div>
            <div className="contact-item">
              <span className="contact-label">Phone</span>
              <a href="tel:+919876543210">+91 9876 543 210</a>
            </div>
            <div className="contact-item">
              <span className="contact-label">Location</span>
              <p>India</p>
            </div>
          </div>
        </div>
      </div>

      {/* Social & Bottom */}
      <div className="footer-bottom">
        <div className="footer-social">
          <h4>Follow Me</h4>
          <div className="social-icons">
            <a href="https://instagram.com" title="Instagram"><FaInstagram /></a>
            <a href="https://twitter.com" title="Twitter"><FaXTwitter /></a>
            <a href="mailto:saran@example.com" title="Email"><MdAlternateEmail /></a>
            <a href="https://wa.me/919876543210" title="WhatsApp"><IoLogoWhatsapp /></a>
            <a href="https://linkedin.com" title="LinkedIn"><RiLinkedinLine /></a>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Copyright & Legal */}
        <div className="footer-legal">
          <div className="copyright">
            <p>&copy; {new config().Dateformat()} Saran Devaraj. All rights reserved.</p>
          </div>
          <div className="legal-links">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
            <a href="/cookies">Cookie Policy</a>
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="footer-decoration"></div>
    </footer>
  );
}
export default Footer;
