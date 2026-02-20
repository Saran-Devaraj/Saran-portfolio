import React from "react";
import { Company, Enterprise, ManIcon, Organization, Venture } from "../assets";
import "../Styles/Header.css";

function Header() {
  return (
    <React.Fragment>
      <section className="hero">
        <div className="header-column">
          <div className="header-content-left">
            <h3>Crafting Beautiful User Interfaces, <span style={{backgroundColor: "#5F28FD", color: "#fff", padding: "8px 16px", borderRadius: "8px"}}>Today</span></h3>
            <div className="lorem">
              <p>I'm a frontend developer with a passion for building responsive, user-centric interfaces. Specializing in React.js and modern web technologies, I create engaging digital experiences that users love. Let's turn your ideas into reality with clean, functional code and exceptional design.</p>
            </div>
            <div>
              <h3>Let's Create Something Amazing.</h3>
            </div>
            <div className="header-left-btn">
              <button className="explore-btn">Explore More</button>
              <button className="contact-btn">Contact Us</button>
            </div>
          </div>
          <div className="header-content-right">
            <video autoPlay muted loop style={{width: "100%", maxWidth: "500px", borderRadius: "12px"}} alt="Saran Dev Logo Animation">
              <source src="/Initial Brand logo.mp4" type="video/mp4" />
              <img src={ManIcon} alt="Man Icon" />
            </video>
          </div>
        </div>
        <div>
          <p>Trusted by amazing clients</p>
          <div>
            <img src={Company} alt="Company Logo" />
            <img src={Organization} alt="Organization Logo" />
            <img src={Enterprise} alt="Enterprise Logo" />
            <img src={Venture} alt="Venture Logo" />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
export default Header;
