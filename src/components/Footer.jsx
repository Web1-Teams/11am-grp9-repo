import React from "react";

const Footer = ({ darkMode }) => {
  const footerStyle = {
    width: "100%",
    background: "#eaeaea",
    padding: "20px 0",
  };

  const footerMainStyle = {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap", // للتجاوب
  };

  const tagStyle = {
    margin: "10px 0",
    textAlign: "center", // يضمن التمركز عند العرض الضيق
  };

  const imgStyle = {
    width: "100px",
    marginBottom: "10px",
  };

  const textStyle = {
    width: "250px",
    lineHeight: "22px",
    textAlign: "justify",
    margin: "0 auto",
    fontFamily: "monospace", // Apply monospace font here
    color: darkMode ? "#000" : "#000", // Ensure the text stays black in both modes
  };

  const headingStyle = {
    fontSize: "25px",
    margin: "25px 0",
    color: "#000",
  };

  const linkStyle = {
    display: "block",
    fontFamily: "monospace", // Apply monospace font here
    color: "black",
    textDecoration: "none",
    margin: "10px 0",
  };

  const socialLinkStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
  };

  const iconStyle = {
    fontSize: "20px",
    color: "#000",
    cursor: "pointer",
  };

  return (
    <footer style={footerStyle}>
      <div style={footerMainStyle}>
        <div style={tagStyle}>
          <img src="Images/icon.png" alt="Book Haven Logo" style={imgStyle} />
          <p style={textStyle}>
            We strive to be your number one destination for the best books and
            reviews. Enjoy diversity and quality all in one place.
          </p>
        </div>

        <div style={tagStyle}>
          <h1 style={headingStyle}>Quick Link</h1>
          <a href="#" style={linkStyle}>Home</a>
          <a href="#" style={linkStyle}>About</a>
          <a href="#" style={linkStyle}>Featured</a>
          <a href="#" style={linkStyle}>Arrivals</a>
          <a href="#" style={linkStyle}>Reviews</a>
          <a href="#" style={linkStyle}>Blog</a>
        </div>

        <div style={tagStyle}>
          <h1 style={headingStyle}>Contact Info</h1>
          <a href="tel:+972569978778" style={linkStyle}>
            <i className="fa-solid fa-phone" style={iconStyle}></i> +972 569978778
          </a>
          <a href="mailto:bookhaven@gmail.com" style={linkStyle}>
            <i className="fa-solid fa-envelope" style={iconStyle}></i> bookhaven@gmail.com
          </a>
        </div>

        <div style={tagStyle}>
          <h1 style={headingStyle}>Follow Us</h1>
          <div style={socialLinkStyle}>
            <i className="fa-brands fa-facebook-f" style={iconStyle}></i>
            <i className="fa-brands fa-instagram" style={iconStyle}></i>
            <i className="fa-brands fa-twitter" style={iconStyle}></i>
            <i className="fa-brands fa-linkedin-in" style={iconStyle}></i>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
