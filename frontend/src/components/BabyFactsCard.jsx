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
      <div class="flex flex-col max-w-sm p-6  border border-gray-200 rounded-lg">
        <button
          className="bg-blue-300 border-gray-400 rounded-lg shadow cursor-pointer font-[Roboto]"
          onClick={handleActivityChange}
        >
          Click me for facts
        </button>
        <br />
        <div className="flex items-center justify-center">
          <img
            src="/src/assets/babyfact.png"
            alt="babyfactimg"
            style={{ height: "150px" }}
          />
        </div><br/>
        <p className="font-[Montserrat] ">{someFact}</p>
      </div>
    </>
  );
}

export default BabyFactsCard;
