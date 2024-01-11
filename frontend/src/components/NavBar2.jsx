import React from "react";
import Logout from "./Logout";
import { Link, animateScroll as scroll } from "react-scroll";

function NavBar2() {
  return (
    <nav className=" bg-[#FFD9B7] z-20 top-0 start-0">
      <div className="max-w-screen-xl flex flex-row justify-between mx-auto p-4">
        <div></div>
        <div className="pl-20">
          <img
            src="/src/assets/logo.png"
            className="h-[120px] pl-20"
            alt="Logo"
          ></img>
        </div>
        <div className="mt-14 pl-20 pr-0">
          <Logout />
        </div>
      </div>
    </nav>
  );
}

export default NavBar2;
