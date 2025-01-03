import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ toggleDarkMode, darkMode }) => {
  const [hoverIndex, setHoverIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/arrivals", label: "Arrivals" },
    { to: "/featured", label: "Featured" },
    { to: "/reviews", label: "Reviews" },
  ];

  const navbarStyle = {
    boxShadow: "0 0 8px #089da1",
    position: "fixed",
    top: "0",
    left: "0",
    right: "0",
    zIndex: "1000",
    backgroundColor: darkMode ? "#121212" : "#f8f9fa", 
    color: darkMode ? "#FFF" : "#000", 
  };

  const navLinkStyle = {
    textDecoration: "none",
    color: darkMode ? "#FFF" : "#000", 
    backgroundColor: "transparent",
    borderRadius: "10px",
    padding: "8px 15px",
    transition: "all 0.6s ease",
  };

  const navLinkHoverStyle = {
    backgroundColor: "#089da1",
    color: "#fff",
  };

  return (
    <nav className="navbar navbar-expand-lg" style={navbarStyle}>
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            src="/images/icon.png"
            alt="Book Icon"
            style={{ width: "90px", height: "65px" }}
          />
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul
            className="navbar-nav"
            style={{ listStyle: "none", fontWeight: "bold", marginRight: "180px" }}
          >
            {navLinks.map((link, index) => (
              <li
                key={index}
                className="nav-item"
                style={{ display: "inline-block", padding: "0 10px" }}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  className="nav-link"
                  to={link.to}
                  style={{
                    ...navLinkStyle,
                    ...(hoverIndex === index ? navLinkHoverStyle : {}),
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <button
          onClick={toggleDarkMode}
          style={{
            backgroundColor: "transparent",
            border: "none",
            cursor: "pointer",
            padding: "8px 16px",
          }}
        >
          {darkMode ? (
            <i className="fas fa-sun" style={{ fontSize: "24px", color: "#FFEB3B" }}></i> 
          ) : (
            <i className="fas fa-moon" style={{ fontSize: "24px", color: "#FFEB3B" }}></i> 
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
