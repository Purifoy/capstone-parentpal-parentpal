import React from "react";

import BabyFactsCard from "../components/BabyFactsCard";
import ToDoListCard from "../components/ToDoListCard";
import Footer from "../components/Footer";

function LoggedInDashboard() {
  return (
    <div>
      <h2>Welcome! You have successfully logged in.</h2>
      <br />
      <br />
      <ToDoListCard />
      <br />
      <BabyFactsCard />
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default LoggedInDashboard;
