import { memo, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./headerstyle.css";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Detect window width and update isMobile state
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        // Set initial value based on window width
        handleResize();

        // Listen to window resize event
        window.addEventListener("resize", handleResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // Toggle menu when hamburger is clicked
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Close the menu if screen width exceeds 768px
    useEffect(() => {
        if (!isMobile) {
            setIsMenuOpen(false); // Close the menu when not on mobile
        }
    }, [isMobile]);

    return (
        <div className="header">
            <div className="header-top">
                <div className="container">
                    <div className="logo">
                        <Link to="/Homepage">
                            <img src="./logo/Lg.png" alt="Chic Lighting & Design" />
                        </Link>
                    </div>
                    <div className="search-bar">
                        <input type="text" placeholder="Search" />
                    </div>
                    <div className="user-actions">
                        <Link to="/Log-in">Account</Link>
                        <Link to="/">My List (0)</Link>
                        <Link to="/">Cart (0)</Link>
                    </div>
                </div>
            </div>
            <nav className={`nav-bar ${isMenuOpen ? "active" : ""}`}>
                <div className="container">
                    {/* Hamburger icon will only be displayed on mobile screens */}
                    {isMobile && (
                        <div className="hamburger-menu" onClick={toggleMenu}>
                            ☰
                        </div>
                    )}
                    <ul className="ulFa">
                        <li><Link to="/">Ceiling Lights</Link></li>
                        <li><Link to="/">Wall Lights</Link></li>
                        <li><Link to="/">Lamps</Link></li>
                        <li><Link to="/">Fans</Link></li>
                        <li><Link to="/">Outdoor Lights</Link></li>
                        <li><Link to="/">Lamps & Shades</Link></li>
                        <li><Link to="/">Mirrors & Home Decor</Link></li>
                        <li className="dropdown">
                            <button className="dropbtn">LED Lights</button>
                            <ul className="dropdown-menu">
                                <li><Link to="/Spot-Lights">Spot Lights</Link></li>
                                <li><Link to="/Decoration-Lights">Decoration Lights</Link></li>
                                <li><Link to="/Smart-Lights">Smart Lights</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default memo(Header);
