import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import RouterApp from "./components/RouterApp";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column", // Stack elements vertically
        minHeight: "100vh", // Ensure the full viewport height
        backgroundColor: darkMode ? "#121212" : "#FFF",
        color: darkMode ? "#FFF" : "#000",
        transition: "background-color 0.3s ease-in-out, color 0.3s ease-in-out",
      }}
    >
      <BrowserRouter>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <div style={{ flex: 1 }}>
          <RouterApp />
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
