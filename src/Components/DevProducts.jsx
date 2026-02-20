import { Devbox1, Devbox2, Devbox3, Devbox4 } from "../assets";
import "../Styles/DevProducts.css";

function DevProducts() {
    return (
        <section className="services-section">
          <div className="services-container">
            <div className="services-header">
              <div className="services-header-left">
                <p>Specializing in frontend development & <button>UI Design</button></p>
              </div>
              <div className="services-header-right">
                <button>Browse All Services</button>
              </div>
            </div>
            <div className="serviceBox">
              <div className="developBox">
                <section>
                  <img src={Devbox1} alt="Web Development" />
                  <h3>React Development</h3>
                  <p>Building responsive and scalable web applications with modern React.js practices.</p>
                </section>
              </div>
              <div className="developBox">
                <section>
                  <img src={Devbox2} alt="Responsive Design" />
                  <h3>Responsive Web Design</h3>
                  <p>Crafting mobile-first interfaces that work perfectly on all devices and screen sizes.</p>
                </section>
              </div>
              <div className="developBox">
                <section>
                  <img src={Devbox3} alt="UI/UX Design" />
                  <h3>UI/UX Development</h3>
                  <p>Designing and developing intuitive interfaces that users love to interact with.</p>
                </section>
              </div>
              <div className="developBox">
                <section>
                  <img src={Devbox4} alt="Component Development" />
                  <h3>Component Development</h3>
                  <p>Building reusable, accessible UI components that scale with your project needs.</p>
                </section>
              </div>
            </div>
          </div>
        </section>
    );
}
export default DevProducts;
