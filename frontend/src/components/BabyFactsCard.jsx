import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

function BabyFactsCard() {

  const [someFact, setFact] = useState("");
  
  const handleActivityChange = () => {
    axios
      .get("/api/babyfact")
      .then((response) => {
        setFact(response.data);
       
      })
      .catch((error) => console.error("Error fetching fact: ", error));
  };

  useEffect(() => {
    axios
      .get("/api/babyfact")
      .then((response) => {
        setFacts(response.data);
        
      })
      .catch((error) => console.error("Error fetching fact: ", error));
  }, []);

  return (
    <>
      {/* I will create a different Navbar for when the user logs in */}
      <p className="cursor-pointer" onClick={handleActivityChange}>Hello Test</p>
      <p>{someFact}</p>
    </>
  );
}

export default BabyFactsCard;
