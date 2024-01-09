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
          type="button"
          onClick={handleActivityChange}
          className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 font-[Roboto] font-medium rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2"
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
        </div>
        <br />
        <p className="font-[Montserrat] ">{someFact}</p>
      </div>
    </>
  );
}

export default BabyFactsCard;
