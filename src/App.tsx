import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SIgnUp from "./screens/auth/signup/SIgnUp";
import RazorPayBtn from "./components/shared/razorPayBtn/RazorPayBtn";
import Home from "./screens/home/Home";
import "./App.css";
import EventDetails from "./screens/event/EventDetails";
import ProtectedRoute from "./ProtectedRoutes";
import Profile from "./screens/profile/Profile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SIgnUp />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/event/:id" element={<EventDetails />} />
          <Route path="/payment" element={<RazorPayBtn />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
