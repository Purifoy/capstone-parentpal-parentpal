import Home from "./pages/Home";
import Vision from "./components/About";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import Headline from "./components/Headline";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
