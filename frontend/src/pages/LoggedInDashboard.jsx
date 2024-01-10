import React from "react";

import BabyFactsCard from "../components/BabyFactsCard";
import ToDoListCard from "../components/ToDoListCard";
import Footer from "../components/Footer";
import NavBar2 from "../components/NavBar2";

function LoggedInDashboard() {
  return (
    <>
      <NavBar2 />
      <div className="flex flex-col items-center justify-center">
        <div className="mt-5 text-2xl">
          <h2>Welcome! You have successfully logged in.</h2>
        </div>
        <br />
        <br />
        <BabyFactsCard />
        <br />
        <ToDoListCard />
        <br />
        <br />
      </div>
      <Footer />
    </>
  );
}

export default LoggedInDashboard;
