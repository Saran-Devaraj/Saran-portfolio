import { Blogpg1, Blogpg2, Blogpg3, Blogpg4, Blogpg5 } from "../assets";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io5";
import { RiLinkedinLine } from "react-icons/ri";
import "../Styles/BlogsSec.css";

function BlogsSec() {
    return (
        <section className="blogs-section">
            <div className="blogs-container">
                <div className="blogs-header">
                    <h3>Featured <span>Projects & Work</span></h3>
                    <p className="blogs-header-desc">A collection of my best frontend development projects, showcasing clean code, user-centric design, and modern web technologies.</p>
                </div>
                <div className="blogs-cards">
                    <div className="blog-card">
                        <div className="blog-image-container">
                            <img src={Blogpg1} alt="Portfolio Website" />
                                <div className="blog-social-icons">
                                    <a href="https://instagram.com" title="Instagram"><FaInstagram /></a>
                                    <a href="https://twitter.com" title="Twitter"><FaXTwitter /></a>
                                    <a href="mailto:contact@example.com" title="Email"><MdAlternateEmail /></a>
                                    <a href="https://wa.me" title="WhatsApp"><IoLogoWhatsapp /></a>
                                    <a href="https://linkedin.com" title="LinkedIn"><RiLinkedinLine /></a>
                                </div>
                        </div>
                        <div className="blog-info">
                            <p>Portfolio Website</p>
                            <p>React.js & Responsive Design</p>
                        </div>
                    </div>
                    <div className="blog-card">
                        <div className="blog-image-container">
                            <img src={Blogpg2} alt="UI Components Library" />
                            <div className="blog-social-icons">
                                <a href="https://instagram.com" title="Instagram"><FaInstagram /></a>
                                <a href="https://twitter.com" title="Twitter"><FaXTwitter /></a>
                                <a href="mailto:contact@example.com" title="Email"><MdAlternateEmail /></a>
                                <a href="https://wa.me" title="WhatsApp"><IoLogoWhatsapp /></a>
                                <a href="https://linkedin.com" title="LinkedIn"><RiLinkedinLine /></a>
                            </div>
                        </div>
                        <div className="blog-info">
                            <p>UI Components Library</p>
                            <p>Reusable React Components</p>
                        </div>
                    </div>
                    <div className="blog-card">
                        <div className="blog-image-container">
                            <img src={Blogpg3} alt="Landing Pages" />
                            <div className="blog-social-icons">
                                <a href="https://instagram.com" title="Instagram"><FaInstagram /></a>
                                <a href="https://twitter.com" title="Twitter"><FaXTwitter /></a>
                                <a href="mailto:contact@example.com" title="Email"><MdAlternateEmail /></a>
                                <a href="https://wa.me" title="WhatsApp"><IoLogoWhatsapp /></a>
                                <a href="https://linkedin.com" title="LinkedIn"><RiLinkedinLine /></a>
                            </div>
                        </div>
                        <div className="blog-info">
                            <p>Responsive Pages</p>
                            <p>Mobile-First Design</p>
                        </div>
                    </div>
                    <div className="blog-card">
                        <div className="blog-image-container">
                            <img src={Blogpg4} alt="E-commerce Platform" />
                            <div className="blog-social-icons">
                                <a href="https://instagram.com" title="Instagram"><FaInstagram /></a>
                                <a href="https://twitter.com" title="Twitter"><FaXTwitter /></a>
                                <a href="mailto:contact@example.com" title="Email"><MdAlternateEmail /></a>
                                <a href="https://wa.me" title="WhatsApp"><IoLogoWhatsapp /></a>
                                <a href="https://linkedin.com" title="LinkedIn"><RiLinkedinLine /></a>
                            </div>
                        </div>
                        <div className="blog-info">
                            <p>E-commerce Frontend</p>
                            <p>React & State Management</p>
                        </div>
                    </div>
                    <div className="blog-card">
                        <div className="blog-image-container">
                            <img src={Blogpg5} alt="Web App Project" />
                            <div className="blog-social-icons">
                                <a href="https://instagram.com" title="Instagram"><FaInstagram /></a>
                                <a href="https://twitter.com" title="Twitter"><FaXTwitter /></a>
                                <a href="mailto:contact@example.com" title="Email"><MdAlternateEmail /></a>
                                <a href="https://wa.me" title="WhatsApp"><IoLogoWhatsapp /></a>
                                <a href="https://linkedin.com" title="LinkedIn"><RiLinkedinLine /></a>
                            </div>
                        </div>
                        <div className="blog-info">
                            <p>Web Application</p>
                            <p>Full-Stack Integration</p>
                        </div>
                    </div>
                </div>
                <div className="blogs-cta">
                    <p>Crafting beautiful interfaces with clean code and user-focused design. Let's create something amazing together.</p>
                    <p>View My Work</p>
                </div>
            </div>
        </section>
    );
}
export default BlogsSec;
