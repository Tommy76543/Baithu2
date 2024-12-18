import React, { memo, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../admin/Cartcontext";
import "./headerstyle.css";

const Header = () => {
  const { totalQuantity } = useContext(CartContext); // Lấy số lượng sản phẩm từ context

  return (
    <div className="header">
      <div className="header-top">
        <div className="container">
          <div className="logo">
            <Link to="/Homepage">
              <img src="./icon/Lg.png" alt="Chic Lighting & Design" />
            </Link>
          </div>
          <div className="search-bar">
            <input type="text" placeholder="Search" />
          </div>
          <div className="user-actions">
            <Link to="/Log-in">Account</Link>
            <Link to="/">My List (0)</Link>
            <Link to="/" className="cart-link">
              Cart ({totalQuantity}) {/* Hiển thị số lượng sản phẩm */}
            </Link>
          </div>
        </div>
      </div>
      <nav className="nav-bar">
        <div className="container">
          <ul className="ulFa">
            <li>
              <Link to="/">Ceiling Lights</Link>
            </li>
            <li>
              <Link to="/">Wall Lights</Link>
            </li>
            <li>
              <Link to="/">Lamps</Link>
            </li>
            <li>
              <Link to="/">Fans</Link>
            </li>
            <li>
              <Link to="/">Outdoor Lights</Link>
            </li>
            <li>
              <Link to="/">Lamps & Shades</Link>
            </li>
            <li>
              <Link to="/">Mirrors & Home Decor</Link>
            </li>
            <li className="dropdown">
              <button className="dropbtn">LED Lights</button>
              <ul className="dropdown-menu">
                <li>
                  <Link to="/Spot-Lights">Spot Lights</Link>
                </li>
                <li>
                  <Link to="/Decoration-Lights">Decoration Lights</Link>
                </li>
                <li>
                  <Link to="/Smart-Lights">Smart Lights</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default memo(Header);
