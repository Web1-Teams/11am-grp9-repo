import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Arrivals from "../pages/Arrivals"
import Featured from "../pages/Arrivals"
import Reviews from "../pages/Arrivals"

const RouterApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/arrivals" element={<Arrivals />} />
      <Route path="/featured" element={<Featured />} />
      <Route path="/reviews" element={<Reviews />} />
    </Routes>
  );
};

export default RouterApp;