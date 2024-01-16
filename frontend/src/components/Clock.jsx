import React, { useState, useEffect } from "react";
import axios from "axios";

const Clock = () => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const fetchTime = async () => {
      try {
        const response = await axios.get("/api/ip");
        const { datetime } = response.data;
        setCurrentTime(datetime);

        console.log("Raw date string:", datetime); //i'm trying to debug
        console.log("I'm on this line"); //i'm trying to debug
      } catch (error) {
        console.error("Error fetching time: ", error);
      }
    };

    // Call the fetchTime function when the component mounts
    fetchTime();

    // Set up an interval to update the time every minute
    const intervalId = setInterval(fetchTime, 60000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div>
      <h2>This is a clock</h2>
      <p>{new Date(currentTime).toLocaleString()}</p>
    </div>
  );
};

export default Clock;
