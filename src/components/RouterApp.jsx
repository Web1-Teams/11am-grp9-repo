import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Arrivals from "../pages/Arrivals";
import Featured from "../pages/Featured";
import Reviews from "../pages/Reviews";

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
