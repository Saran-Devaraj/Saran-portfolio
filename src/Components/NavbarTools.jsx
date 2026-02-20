import { Link } from "react-router-dom";  // Added this import
import "../Styles/NavbarTools.css";  // Assuming you have a CSS file for styling
import { OritechLogo } from "../assets";

function NavbarTools() {
  return (
    <div className="navbar">
      <header className="app">
        <img src={OritechLogo} alt="Logo" />
        <h2><span style={{ color: "#5F28FD" }}>Saran</span>Dev</h2>
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
  );
}

export default NavbarTools;
