import Home from "./pages/Home";
import LoggedInDashboard from "./pages/LoggedInDashboard";
// import SleepLog from "./components/SleepLog";
import AddEditChildProfile from "./components/AddEditChildProfile";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Dashboard" element={<LoggedInDashboard />} />
        <Route path="/testpage" element={<AddEditChildProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
