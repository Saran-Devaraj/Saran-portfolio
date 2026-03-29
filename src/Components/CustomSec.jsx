import { Custombox1, Custombox2, Custombox3 } from "../assets";
import "../Styles/CustomSec.css";

function CustomSec() {
  return (
    <section className="custom-section">
      <div className="custom-container">
        <div className="custom-header">
          <h3>Frontend Development <span className="highlight">Expertise</span></h3>
        </div>
        <div className="custom-description">
          <p>I specialize in building responsive, user-centric interfaces with modern technologies and best practices.</p>
        </div>
        <div className="custom-cards">
          <div className="custom-card">
            <img src={Custombox1} alt="React Development" />
            <h3>React Expertise</h3>
            <p>Building scalable applications with functional components and modern hooks.</p>
          </div>
          <div className="custom-card">
            <img src={Custombox2} alt="Secure Solutions" />
            <h3>Secure Solutions</h3>
            <p>Implementing robust security measures to protect your applications and data.</p>
          </div>
          <div className="custom-card">
            <img src={Custombox3} alt="User Experience" />
            <h3>User Experience</h3>
            <p>Creating intuitive interfaces that prioritize usability and accessibility standards.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CustomSec;
