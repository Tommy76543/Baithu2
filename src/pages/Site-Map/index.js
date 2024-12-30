import { memo } from "react";
import "./SiteMap.css";

const SiteMap = () => {
  return (
    <div>
      <nav aria-label="breadcrumb" className="breadcrumb-container">
      <ol className="breadcrumb-list">
        <li className="breadcrumb-item">
          <a href="/Homepage" className="breadcrumb-link">
            Home
          </a>
        </li>
        <li className="breadcrumb-separator">»</li>
        <li className="breadcrumb-item">
        <a href="/Site-Map" className="breadcrumb-link">
            Site map
          </a>
        </li>
      </ol>
    </nav>
    <div className="sitemap-container">
      <header className="sitemap-header">
        <h1 className="sitemap-title">Sitemap</h1>
        <hr align="center" width="40%" color="#c9a22e" />
      </header>
      <main className="sitemap-main">
        <section className="sitemap-section">
          <h3 className="subsection-title">
            <a href="/Homepage" className="nav-link">HomePage</a>
          </h3>
          <ul className="item-list">
            <li>
              <a href="/Celling-lights" className="nav-link">Ceiling Light</a>
            </li>
            <li>
              <a href="/Wall-lights" className="nav-link">Wall Lights</a>
            </li>
            <li>
              <a href="/Lamps" className="nav-link">Lamps</a>
            </li>
            <li>
              <a href="/Fans" className="nav-link">Fans</a>
            </li>
            <li>
              <a href="/OutDoor-Lights" className="nav-link">Outdoor Lights</a>
            </li>
            <li>
              <a href="/Home-Accents" className="nav-link">Home Accents</a>
            </li>
            <li>
              <a href="/Smart-Lights" className="nav-link">Smart Lights</a>
            </li>
            <li>
              <a href="/Log-in" className="nav-link">Log In</a>
            </li>
            <li>
              <a href="/Shopping-cart" className="nav-link">Shopping Cart</a>
            </li>
            <li>
              <a href="/Contract-us" className="footer-link">Contact Us</a>
            </li>
            <li>
              <a href="/Customer-Help" className="footer-link">FAQ</a>
            </li>
            <li>
              <a href="/About-us" className="footer-link">About Chic Light & Design</a>
            </li>
          </ul>
        </section>
      </main>
    </div>
    </div>
  );
};

export default memo(SiteMap);
