import { Home, User, BookOpen, Briefcase, Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { SaranDevLogo, servicesicon } from "../assets";
import "../Styles/NavbarTools.css";


function Navbar() {
  const location = useLocation();

  return (
    <>
      <div className="navbar">
        <header className="app">
          <img src={SaranDevLogo} alt="SaranDev Logo" style={{ width: "50px", height: "50px" }} />
          <h2><span style={{ color: "#5F28FD" }}>Saran</span>Devaraj</h2>
        </header>
        <div className="nav-tools">
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/service">Service</Link>
        </div>
        <div className="contact1-btn">
          <Link to="/contact">Contact</Link>
        </div>
      </div>

      <nav className="mobile-bottom-nav">
        <Link to="/home" className={`mobile-nav-item ${location.pathname === "/home" ? "active" : ""}`}>
          <Home size={22} />
          <span>Home</span>
        </Link>
        <Link to="/about" className={`mobile-nav-item ${location.pathname === "/about" ? "active" : ""}`}>
          <User size={22} />
          <span>About</span>
        </Link>
        <Link to="/blog" className={`mobile-nav-item ${location.pathname === "/blog" ? "active" : ""}`}>
          <BookOpen size={22} />
          <span>Blog</span>
        </Link>
        <Link to="/service" className={`mobile-nav-item ${location.pathname === "/service" ? "active" : ""}`}>
          <img src={servicesicon} alt="Service" className="mobile-nav-icon-img"/>
          <span>Service</span>
        </Link>
      </nav>
      <Link to="/phone" className="mobile-contact-fab">
        <Phone size={22} />
      </Link>
    </>
  );
}

export default Navbar;