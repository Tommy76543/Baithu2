import { memo } from "react";
import { Link } from "react-router-dom"; // Import Link từ react-router-dom
import "./footerstyle.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-subscription">
          <div className="subscription-header">
            <div class="header-with-icons">
              <h4>STAY IN THE KNOW</h4>
              <div class="social-icons">
                <img src="./icon/pinterest.png" alt="Pinterest" />
                <img src="./icon/instagram.png" alt="Instagram" />
                <img src="./icon/facebook.png" alt="Facebook" />
              </div>
            </div>

            <form className="subscription-form">
              <input
                type="email"
                placeholder="Enter email address"
                className="email-input"
              />
              <button type="submit" className="subscribe-button">
                Join
              </button>
            </form>
          </div>
          <p>
            Be the first to find out about trending styles, new releases and
            sales.
          </p>
        </div>
        <div className="footer-top">
          <div className="footer-links">
            <div className="footer-column">
              <h4>Shop location</h4>
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d346.4222265211192!2d106.6665831753696!3d10.78677813511538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752edac37c5025%3A0xd5fab66e51e1049d!2zTeG7uSB0aHXhuq10IMSRYSBwaMawxqFuZyB0aeG7h24gRlBUIEFyZW5h!5e0!3m2!1svi!2s!4v1734097857394!5m2!1svi!2s"
                  width="600"
                  height="450"
                  style={{ border: 0 }} // Bỏ viền của iframe
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Shop Location"
                ></iframe>
              </div>
            </div>
            <div className="footer-column">
              <h4>Customer Service</h4>
              <ul>
                <li>
                  <Link to="/Contract-us">Contact Us</Link>
                </li>
                <li>
                  <Link to="/Customer-Help">FAQ</Link>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>B2B Programs</h4>
              <ul>
                <li>
                  <Link to="#">Designer Trade Program</Link>
                </li>
                <li>
                  <Link to="#">Hospitality & Commercial</Link>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Our Company</h4>
              <ul>
                <li>
                  <Link to="/About-us">About Chic light & Desgin</Link>
                </li>
                <li>
                  <Link to="#">Richmond Showroom</Link>
                </li>
                <li>
                  <Link to="#">Decorating Outlet</Link>
                </li>
                <li>
                  <Link to="#">Careers</Link>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Shopping Resources</h4>
              <ul>
                <li>
                  <Link to="#">Blogs</Link>
                </li>
                <li>
                  <Link to="#">Request a catalog</Link>
                </li>
                <li>
                  <Link to="#">Gift Registry</Link>
                </li>
                <li>
                  <Link to="#">Design Guides</Link>
                </li>
                <li>
                  <Link to="#">Styles & Trends</Link>
                </li>
                <li>
                  <Link to="#">New Arrivals</Link>
                </li>
                <li>
                  <Link to="#">Current Offers</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2024 Chic Lighting & Design. All Rights Reserved</p>
          <p>
            <Link to="#">Privacy Policy</Link> |
            <Link to="#">Terms & Conditions</Link> |
            <Link to="#">Accessibility</Link> |<Link to="#">CCPA Policy</Link> |
            <Link to="/Site-Map">Sitemap</Link> |<Link to="#">Cookie Preferences</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default memo(Footer);
