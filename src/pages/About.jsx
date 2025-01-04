import React, { useState, useEffect } from 'react';

const About = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const containerStyle = {
    width: "100%",
    height: "auto",
    padding: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    marginTop: "150px"
  };

  const imageStyle = {
    width: isMobile ? "100%" : "800px",
    marginBottom: "50px"
  };

  const headerStyle = {
    fontSize: isMobile ? "30px" : "50px",
    position: "relative",
    bottom: isMobile ? "10px" : "20px"
  };

  const paragraphStyle = {
    lineHeight: "22px",
    width: isMobile ? "90%" : "650px",
    textAlign: "justify",
    marginBottom: "15px"
  };

  return (
    <div style={containerStyle}>
      <div className="about_image">
        <img src="/Images/about uss.jpg" alt="About Us" style={imageStyle} />
      </div>
      <div className="about_tag">
        <h1 style={headerStyle}>About Us</h1>
        <p style={paragraphStyle}>
          Welcome to our library! We are a team of book enthusiasts dedicated to offering a unique experience for
          readers. Our goal is to help you discover books that inspire your imagination and nourish your mind.
          Our library was founded with the aim of making it easier to access a world of stories and knowledge.
          Whether you're looking for new novels, academic books, or works of fiction, we are here to help you
          choose the perfect book that suits your taste and interests.
          We are committed to providing a user-friendly experience, with a wide range of books for you to explore
          and read, along with detailed reviews to assist you in selecting the ideal read.
        </p>
      </div>
    </div>
  );
};

export default About;