import { memo } from "react";
import { Link } from "react-router-dom";  // Import Link từ react-router-dom
import "./footerstyle.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-subscription">
          <h4>STAY IN THE KNOW</h4>
          <p>Be the first to find out about trending styles, new releases and sales.</p>
          <form className="subscription-form">
            <input type="email" placeholder="Enter email address" className="email-input" />
            <button type="submit" className="subscribe-button">Join</button>
          </form>
        </div>
        <div className="footer-top">
          <div className="footer-links">
            <div className="footer-column">
              <h4>Shop location</h4>
              <img src="catalog-thumbnail.jpg" alt="Catalog Thumbnail" className="catalog-thumbnail" />
            </div>
            <div className="footer-column">
              <h4>Customer Service</h4>
              <ul>
                <li><Link to="#">Contact Us</Link></li>
                <li><Link to="#">Shipping Information</Link></li>
                <li><Link to="#">Returns & Exchanges</Link></li>
                <li><Link to="#">Manage My Account</Link></li>
                <li><Link to="#">Email Preference</Link></li>
                <li><Link to="#">Catalog Unsubscribe</Link></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>B2B Programs</h4>
              <ul>
                <li><Link to="#">Designer Trade Program</Link></li>
                <li><Link to="#">Hospitality & Commercial</Link></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Our Company</h4>
              <ul>
                <li><Link to="/About-us">About Chic light & Desgin</Link></li>
                <li><Link to="#">Richmond Showroom</Link></li>
                <li><Link to="#">Decorating Outlet</Link></li>
                <li><Link to="#">Careers</Link></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Shopping Resources</h4>
              <ul>
                <li><Link to="#">Blogs</Link></li>
                <li><Link to="#">Request a catalog</Link></li>
                <li><Link to="#">Gift Registry</Link></li>
                <li><Link to="#">Design Guides</Link></li>
                <li><Link to="#">Styles & Trends</Link></li>
                <li><Link to="#">New Arrivals</Link></li>
                <li><Link to="#">Current Offers</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2024 Chic Lighting & Design. All Rights Reserved</p>
          <p>
            <Link to="#">Privacy Policy</Link> |
            <Link to="#">Terms & Conditions</Link> |
            <Link to="#">Accessibility</Link> |
            <Link to="#">CCPA Policy</Link> |
            <Link to="#">Sitemap</Link> |
            <Link to="#">Cookie Preferences</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default memo(Footer);
