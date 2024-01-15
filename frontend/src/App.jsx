import Home from "./pages/Home";
import LoggedInDashboard from "./pages/LoggedInDashboard";
// import SleepLog from "./components/SleepLog";
import ChildProfilePage from "./pages/ChildProfilePage";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Dashboard" element={<LoggedInDashboard />} />
        <Route path="/child-profile" element={<ChildProfilePage />} />
        {/* <Route path="/testpage" element={<ChildProfilePage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
