import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SIgnUp from "./screens/auth/signup/SIgnUp";
import RazorPayBtn from "./components/shared/razorPayBtn/RazorPayBtn";
import Home from "./screens/home/Home";
import "./App.css";
import EventDetails from "./screens/event/EventDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event/:id" element={<EventDetails />} />
        <Route path="/signup" element={<SIgnUp />} />
        <Route path="/payment" element={<RazorPayBtn />} />
      </Routes>
    </Router>
  );
}

export default App;
