import Home from "./pages/Home";
import LoggedInDashboard from "./pages/LoggedInDashboard";

import Login from "./components/Login";

import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";

function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Dashboard" element={<LoggedInDashboard />} />
      
      </Routes>
     
    </Router>
  );
}

export default App;
