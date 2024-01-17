import React, { useState, useEffect } from "react";

const DigitalClock = ({ timezone }) => {
  const [currentTime, setCurrentTime] = useState(null);

  // fetch the current time and update it every second
  useEffect(() => {
    // Function to fetch the current time from the worldtimeapi
    const fetchCurrentTime = async () => {
      try {
        const response = await fetch(`http://worldtimeapi.org/api/ip`);
        const data = await response.json();

        // Format the received datetime to display only hours, minutes, and seconds
        const formattedTime = new Date(data.datetime).toLocaleString("en-US", {
          timeZone: timezone || "UTC",
          hour: "numeric",
          minute: "numeric",
        });

        // Update the state with the formatted time
        setCurrentTime(formattedTime);
      } catch (error) {
        // Handle errors, e.g., if there's an issue fetching the time
        console.error("Error fetching current time:", error);
        setCurrentTime(null);
      }
    };

    // Set up an interval to fetch the current time every second
    const intervalId = setInterval(fetchCurrentTime, 1000);

    // Cleanup function to clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [timezone]); // Run the effect whenever the timezone changes

  return (
    <div className="p-2 max-w-sm text-center">
      <div className="pl-5 pr-5 border rounded-2xl border-none bg-transparent shadow-sm shadow-black">
        {currentTime ? (
          <p className="p-0 m-0 font-[Play] text-bold text-xl">{currentTime}</p>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default DigitalClock;
