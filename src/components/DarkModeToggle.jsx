import React from 'react';

const DarkModeToggle = ({ toggleDarkMode, darkMode }) => {
  const iconStyles = {
    color: darkMode ? "#FFEB3B" : "#000",  
    cursor: "pointer",
    fontSize: "24px",
    transition: "color 0.3s ease-in-out",
  };

  return (
    <nav style={{ padding: "10px" }}>
      <i
        className="fa-solid fa-moon"
        style={iconStyles}
        onClick={toggleDarkMode}
      ></i>
    </nav>
  );
};

export default DarkModeToggle;
