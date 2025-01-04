import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import RouterApp from "./components/RouterApp"; 
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <RouterApp />
      </BrowserRouter>
    </div>
   
  );
  
}

export default App;