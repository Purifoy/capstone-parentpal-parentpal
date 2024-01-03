import React from "react";
import { Element } from "react-scroll";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Team from "../components/Team";
import About from "../components/About";
import Headline from "../components/Headline";

function Home() {
  return (
    <>
      <NavBar />
      <Element name="home">
        <Headline />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="team">
        <Team />
      </Element>
      <Element name="contact">
        <Footer />
      </Element>
    </>
  );
}
export default Home;
