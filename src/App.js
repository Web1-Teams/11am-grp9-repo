import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import RouterApp from "./components/RouterApp";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#121212" : "#FFF", 
        color: darkMode ? "#FFF" : "#000", 
        transition: "background-color 0.3s ease-in-out, color 0.3s ease-in-out",
        minHeight: "100vh", 
      }}
    >
      <BrowserRouter>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <RouterApp />
      </BrowserRouter>
    </div>
  );
}

export default App;
