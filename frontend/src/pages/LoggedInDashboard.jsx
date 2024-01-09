import React from "react";

import BabyFactsCard from "../components/BabyFactsCard";
import ToDoListCard from "../components/ToDoListCard";

function LoggedInDashboard() {

    return (
        <div>
    
          <h2>Welcome! You have successfully logged in.</h2><br/><br/>
          
          <ToDoListCard /><br/>
          <BabyFactsCard />


        </div>
      );
}

export default LoggedInDashboard;