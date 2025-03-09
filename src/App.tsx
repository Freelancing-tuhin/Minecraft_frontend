import React from "react";
import logo from "./logo.svg";
import "./App.css";
import SIgnUp from "./screens/auth/signup/SIgnUp";
import RazorPayBtn from "./components/shared/razorPayBtn/RazorPayBtn";

function App() {
  return (
    <div className="App">
      {/* <SIgnUp /> */}
      <RazorPayBtn />
    </div>
  );
}

export default App;
