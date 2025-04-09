import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SIgnUp from "./screens/auth/signup/SIgnUp";
import RazorPayBtn from "./components/shared/razorPayBtn/RazorPayBtn";
import Home from "./screens/home/Home";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SIgnUp />} />
        <Route path="/payment" element={<RazorPayBtn />} />
      </Routes>
    </Router>
  );
}

export default App;
