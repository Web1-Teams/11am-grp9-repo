import React from "react";

const Services = () => {
  const servicesContainerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginTop: "20px",
    paddingBottom: "0", 
  };

  const serviceCardStyle = {
    width: "300px",
    textAlign: "center",
    margin: "20px",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    transition: "all 0.3s ease",
  };

  const iconStyle = {
    fontSize: "40px",
    color: "#089da1",
  };

  const titleStyle = {
    fontSize: "22px",
    fontWeight: "bold",
    marginTop: "15px",
  };

  const descriptionStyle = {
    marginTop: "10px",
    fontSize: "16px",
    color: "#555",
  };

  return (
    <div style={servicesContainerStyle}>
      <div style={serviceCardStyle}>
        <i className="fa-solid fa-truck-fast" style={iconStyle}></i>
        <h3 style={titleStyle}>Fast Delivery</h3>
        <p style={descriptionStyle}>
          "We deliver your favorite books quickly and efficiently without any delays."
        </p>
      </div>

      <div style={serviceCardStyle}>
        <i className="fa-solid fa-headset" style={iconStyle}></i>
        <h3 style={titleStyle}>24 x 7 Services</h3>
        <p style={descriptionStyle}>
          "Our services are available 24/7 to meet your needs anytime."
        </p>
      </div>

      <div style={serviceCardStyle}>
        <i className="fa-solid fa-tag" style={iconStyle}></i>
        <h3 style={titleStyle}>Best Deal</h3>
        <p style={descriptionStyle}>
          "Get the best deals and offers on exclusive book collections."
        </p>
      </div>

      <div style={serviceCardStyle}>
        <i className="fa-solid fa-lock" style={iconStyle}></i>
        <h3 style={titleStyle}>Secure Payment</h3>
        <p style={descriptionStyle}>
          "We support secure payment methods to ensure a reliable shopping experience."
        </p>
      </div>
    </div>
  );
};

const Welcome = () => {
  const mainStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    position: "relative",
    top: "10%",
    height: "100vh", 
    backgroundImage: "url('../Images/backgroundMain.png')", 
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  const h1Style = {
    position: "relative",
    fontSize: "55px",
    left: "25px",
  };

  const spanStyle = {
    color: "#089da1",
  };

  const pStyle = {
    width: "650px",
    textAlign: "justify",
    lineHeight: "22px",
    position: "relative",
    top: "35px",
    left: "25px",
    fontFamily: "'Playfair Display', serif",
    fontOpticalSizing: "auto",
    fontStyle: "normal",
    fontSize: "26px",
  };

  const mainImgStyle = {
    margin: "100px 0 0 200px",
    width: "70%",
    height: "450px",
    display: "flex",
    justifyContent: "center",
    gap: "10px",
  };

  const imgStyle = {
    width: "10%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "10px",
    border: "2px solid white",
    transition: "all ease-in-out 0.5s",
  };

  return (
    <section style={mainStyle}>
      <div className="main_tag">
        <h1 style={h1Style}>
          WELCOME TO<br />
          <span style={spanStyle}>Book Haven</span>
        </h1>
        <p style={pStyle}>
          Welcome to our online bookstore, your first destination for the best
          books and novels of various genres.
        </p>
      </div>
      <div style={mainImgStyle}>
        <img
          src="../Images/book 1-main.jpeg"
          alt="Book 1"
          style={imgStyle}
          onMouseOver={(e) => (e.currentTarget.style.width = "50%")}
          onMouseOut={(e) => (e.currentTarget.style.width = "10%")}
        />
        <img
          src="../Images/book 2-main.jpeg"
          alt="Book 2"
          style={imgStyle}
          onMouseOver={(e) => (e.currentTarget.style.width = "50%")}
          onMouseOut={(e) => (e.currentTarget.style.width = "10%")}
        />
        <img
          src="../Images/book 3-main.jpeg"
          alt="Book 3"
          style={imgStyle}
          onMouseOver={(e) => (e.currentTarget.style.width = "50%")}
          onMouseOut={(e) => (e.currentTarget.style.width = "10%")}
        />
        <img
          src="../Images/book 4-main.jpeg"
          alt="Book 4"
          style={imgStyle}
          onMouseOver={(e) => (e.currentTarget.style.width = "50%")}
          onMouseOut={(e) => (e.currentTarget.style.width = "10%")}
        />
        <img
          src="../Images/book 5-main.jpeg"
          alt="Book 5"
          style={imgStyle}
          onMouseOver={(e) => (e.currentTarget.style.width = "50%")}
          onMouseOut={(e) => (e.currentTarget.style.width = "10%")}
        />
      </div>
    </section>
  );
};

const App = () => {
  return (
    <div>
      <Welcome />
      <Services />
    </div>
  );
};

export default App;
