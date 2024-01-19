import React, { useState, useEffect } from "react";

const DigitalClock = ({ timezone }) => {
  const [currentTime, setCurrentTime] = useState(null);

  useEffect(() => {
    const fetchCurrentTime = async () => {
      try {
        const response = await fetch("http://worldtimeapi.org/api/ip");
        const data = await response.json();

        console.log("Raw time from WorldTimeAPI:", data.utc_datetime);

        const formattedTime = new Date(data.utc_datetime);

        if (timezone) {
          formattedTime.toLocaleString("en-US", {
            timeZone: timezone,
            hour: "numeric",
            minute: "numeric",
          });
        }

        console.log("Formatted time:", formattedTime);

        setCurrentTime(formattedTime);
      } catch (error) {
        console.error("Error fetching current time:", error);
        setCurrentTime(null);
      }
    };

    const intervalId = setInterval(fetchCurrentTime, 1000);

    return () => clearInterval(intervalId);
  }, [timezone]);

  return (
    <div className="p-2 max-w-sm text-center">
      <div className="pl-5 pr-5 border rounded-2xl border-none bg-transparent shadow-sm shadow-black">
        {currentTime ? (
          <p className="p-0 m-0 font-[Play] text-bold text-xl">
            {currentTime.toLocaleString("en-US", {
              timeZone: timezone,
              hour: "numeric",
              minute: "numeric",
      
            })}
          </p>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default DigitalClock;
