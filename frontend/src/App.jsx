import Home from "./pages/Home";
import LoggedInDashboard from "./pages/LoggedInDashboard";

import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* <Route path="/test" element={<BabyFactsCard />} /> */}
        <Route path="/test" element={<LoggedInDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
