import React from "react";
import Login from "./Login";
import { Link as RouterLink } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";

function NavBar2() {
  return (
    <nav className=" bg-[#FFD9B7] z-20 top-0 start-0">
      <div className="max-w-screen-xl flex justify-center mx-auto p-4">
        <img
          src="/src/assets/logo.png"
          className="h-[120px] pl-10"
          alt="Logo"
        ></img>
        <div className="mt-5">{/* logout component here */}</div>
      </div>
    </nav>
  );
}

export default NavBar2;
