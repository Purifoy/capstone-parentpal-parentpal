import React from "react";
import NavBar from "../components/NavBar";
import Headline from "../components/Headline";
import Vision from "../components/About";
import Footer from "../components/Footer";
import Team from "../components/Team";

import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";

function Home() {
  return (
    <>
      <NavBar />
      <Headline />
      <Vision />
      <Team />
      <Footer />
   

    </>
  );
}
export default Home;
