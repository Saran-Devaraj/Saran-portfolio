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
            <img src={Custombox2} alt="Responsive Design" />
            <h3>Responsive Design</h3>
            <p>Creating interfaces that adapt beautifully to all device sizes and screen resolutions.</p>
          </div>
          <div className="custom-card">
            <img src={Custombox3} alt="User Experience" />
            <h3>User Experience</h3>
            <p>Designing intuitive interfaces that prioritize usability and accessibility standards.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CustomSec;
