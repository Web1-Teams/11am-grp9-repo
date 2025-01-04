import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
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

  return (
<nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ boxShadow: "0 0 8px #089da1", position: "fixed", top: "0", left: "0", right: "0", zIndex: "1000" }}>
<div className="container">
        <Link className="navbar-brand" to="/">
          <img
            src='/images/icon.png'
            alt="Cooking Icon"
            style={{ width: "90px", height: "65px" }}
          />
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav" style={{ listStyle: "none", fontWeight: "bold", marginRight: "180px" }}>
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
                    textDecoration: "none",
                    color: hoverIndex === index ? "#fff" : "#000",
                    backgroundColor: hoverIndex === index ? "#089da1" : "transparent",
                    borderRadius: "10px",
                    padding: "8px 15px",
                    transition: "all 0.6s ease",
                   
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
