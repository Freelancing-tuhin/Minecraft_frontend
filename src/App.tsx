import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SIgnUp from "./screens/auth/signup/SIgnUp";
import RazorPayBtn from "./components/shared/razorPayBtn/RazorPayBtn";
import Home from "./screens/home/Home";
import "./App.css";
import EventDetails from "./screens/event/EventDetails";
import ProtectedRoute from "./ProtectedRoutes";
import Profile from "./screens/profile/Profile";
import Wishlist from "./screens/wishlist/Wishlist";
import Bookings from "./screens/bookings/Bookings";
import Login from "./screens/auth/login/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SIgnUp />} />
        <Route path="/login" element={<Login />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/space/:id" element={<EventDetails />} />
          <Route path="/payment" element={<RazorPayBtn />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/bookings" element={<Bookings />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
