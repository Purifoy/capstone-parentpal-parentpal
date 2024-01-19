import React, { useEffect, useState } from "react";
import NavBar2 from "../components/NavBar2";
import Footer from "../components/Footer";
import EditChildProfile from "../components/EditChildProfile";
import DigitalClock from "../components/DigitalClock";

import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from "axios";

import defaultChildImage from "../assets/baby4.jpg";

function ChildProfilePage() {
  //for sleep logs, start&end buttons
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [note, setNote] = useState("");
  // for feed logs
  const [startFeedTime, setStartFeedTime] = useState(null);
  const [endFeedTime, setEndFeedTime] = useState(null);
  const [feedNote, setFeedNote] = useState("");

  //for extracting duration values from backend
  const [durationInSeconds, setDurationInSeconds] = useState(``);
  const [durationHours, setDurationHours] = useState(``);
  const [durationMinutes, setDurationMinutes] = useState(``);

  //for the edit button
  const [isEditing, setIsEditing] = useState(false);
  const location = useLocation();
  const [childData, setChildData] = useState(location.state?.childData || {});
  const [childId, setChildId] = useState(location.state?.childData.id || null);
  const navigate = useNavigate();

  //this will determine if Child profile was added
  const [isNewChild, setIsNewChild] = useState(childData.id !== 1);

  //return to dashboard
  const handleGoBack = () => {
    navigate("/Dashboard");
  };

  //edit child profile (currently in progress...)
  const handleEdit = () => {
    console.log(`Edit Button clicked for Child with ID # ${childId}`);
    setIsEditing(true);
  };

  const handleEditClose = () => {
    setIsEditing(false);
  };

  //handle Delete button
  const handleDelete = async (e) => {
    try {
      console.log("ChildId to delete:", childData.id);
      await axios.delete(`api/childprofile/${childData.id}`);

      // Navigate to Dashboard after successful deletion
      navigate("/Dashboard");
    } catch (error) {
      console.error("Error deleting child profile:", error);
    }
  };

  //this will get us the current time for sleep event
  const handleLogCurrentSleepTime = async (logType) => {
    try {
      const currentTime = new Date();
      const formattedTime = currentTime
        .toISOString()
        .slice(0, 19)
        .replace("T", " "); // Format as "yyyy-MM-dd'T'HH:mm:ss"

      if (logType === "start") {
        setStartTime(formattedTime);
        console.log("Start time set!", formattedTime);
      } else if (logType === "end") {
        // Check if startTime is available
        if (startTime) {
          setEndTime(formattedTime);
          console.log("End time set!", formattedTime);

          ///////// Calculate duration here ////////////////
          try {
            const startDateTime = new Date(startTime); // converting to a date object
            const endDateTime = new Date(formattedTime); // Use formattedTime directly

            // Calculate the time difference in milliseconds
            const timeDifferenceMs = Math.abs(endDateTime - startDateTime);

            // convert the time difference to a specific format (e.g., hours, minutes, seconds)
            const hours = Math.floor(timeDifferenceMs / (1000 * 60 * 60));
            const minutes = Math.floor(
              (timeDifferenceMs % (1000 * 60 * 60)) / (1000 * 60)
            );
            const seconds = Math.floor(
              ((timeDifferenceMs % (1000 * 60 * 60)) % (1000 * 60)) / 1000
            );

            setDurationHours(hours);
            setDurationMinutes(minutes);
            setDurationInSeconds(seconds);

            console.log(
              `Time Difference: ${hours} hours, ${minutes} minutes, ${seconds} seconds`
            );
          } catch (error) {
            console.log("Duration Calculation Error:", error);
          }
        } else {
          console.error("Error: Cannot set end time without start time");
        }
      }
    } catch (error) {
      console.error("Error logging time: ", error);
    }
  };

  //this will get us the current time for feeding event
  const handleLogCurrentFeedTime = async (logType) => {
    try {
      const currentTime = new Date();
      const formattedTime = currentTime
        .toISOString()
        .slice(0, 19)
        .replace("T", " "); // Format as "yyyy-MM-dd'T'HH:mm:ss"

      if (logType === "startConsume") {
        setStartFeedTime(formattedTime);
        console.log("Start time set!", formattedTime);
      } else if (logType === "endConsume") {
        // Check if startTime is available
        if (startFeedTime) {
          setEndFeedTime(formattedTime);
          console.log("End time set!", formattedTime);

          ///////// Calculate duration here ////////////////
          try {
            const startDateTime = new Date(startFeedTime); // converting to a date object
            const endDateTime = new Date(formattedTime); // Use formattedTime directly

            // Calculate the time difference in milliseconds
            const timeDifferenceMs = Math.abs(endDateTime - startDateTime);

            // convert the time difference to a specific format (e.g., hours, minutes, seconds)
            const hours = Math.floor(timeDifferenceMs / (1000 * 60 * 60));
            const minutes = Math.floor(
              (timeDifferenceMs % (1000 * 60 * 60)) / (1000 * 60)
            );
            const seconds = Math.floor(
              ((timeDifferenceMs % (1000 * 60 * 60)) % (1000 * 60)) / 1000
            );

            setDurationHours(hours);
            setDurationMinutes(minutes);
            setDurationInSeconds(seconds);

            console.log(
              `Time Difference: ${hours} hours, ${minutes} minutes, ${seconds} seconds`
            );
          } catch (error) {
            console.log("Duration Calculation Error:", error);
          }
        } else {
          console.error("Error: Cannot set end time without start time");
        }
      }
    } catch (error) {
      console.error("Error logging time: ", error);
    }
  };

  /************************************/
  /*********sleep note and save********/
  /************************************/

  // handle note input change for sleep
  const handleNoteChange = (e) => {
    setNote(e.target.value);
  };

  // handle Save button for sleep log
  const handleSave = async (e) => {
    e.preventDefault();

    try {
      //start and end time must have a value
      if (startTime && endTime !== null) {
        //data will be pushed to the backend database
        const response = await axios.post("/api/sleep/new", {
          childId: childData.id,
          startTime: new Date(startTime), // Converting to a Date Object
          endTime: new Date(endTime),
          notes: note,
        });

        console.log("Log Saved!", response.data);
        //Success message
        Swal.fire({
          title: "Success!",
          text: "Successfully saved Sleep Log",
          icon: "success",
        });

        //Reset startTime and endTime to null
        setStartTime(null);
        setEndTime(null);
        setNote("");
        setDurationHours("");
        setDurationMinutes("");
        setDurationInSeconds("");
      }
    } catch (error) {
      console.log("Error saving log!", error);
    }
  };
  /************************************/
  /******feeding note and save********/
  /************************************/
  // handle note input change for sleep
  const handleFeedNoteChange = (e) => {
    setFeedNote(e.target.value);
  };

  // handle Save button for sleep log
  const handleFeedSave = async (e) => {
    e.preventDefault();

    try {
      //start and end time must have a value
      if (startFeedTime && endFeedTime !== null) {
        //data will be pushed to the backend database
        const response = await axios.post("/api/consume/new", {
          childId: childData.id,
          startTime: new Date(startFeedTime), // Converting to a Date Object
          endTime: new Date(endFeedTime),
          notes: feedNote,
        });

        console.log("Log Saved!", response.data);
        //Success message
        Swal.fire({
          title: "Success!",
          text: "Successfully saved Feed Log",
          icon: "success",
        });

        //Reset startTime and endTime to null
        setStartFeedTime(null);
        setEndFeedTime(null);
        setFeedNote("");
        setDurationHours("");
        setDurationMinutes("");
        setDurationInSeconds("");
      }
    } catch (error) {
      console.log("Error saving log!", error);
    }
  };

  return (
    <>
      <NavBar2 />
      <div
        className="bg-cover"
        style={{ backgroundImage: 'url("/src/assets/newborn.jpg")' }}
      >
        <div className="pt-10 pb-10 flex items-center justify-center min-h-screen ">
          <div>
            <div className="absolute top-10 left-0 mt-9 ml-9">
              <button
                onClick={handleGoBack}
                className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 shadow-purple-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                &larr; Back
              </button>
            </div>
          </div>
          <div className="w-full max-w-3xl bg-[#FFD9B7] bg-opacity-75 border border-[#FFD9B7] rounded-lg shadow">
            <div className="flex justify-end p-4 "></div>
            <div className="flex flex-col items-center pb-10">
              <div className="mb-5 flex justify-end">
                <DigitalClock />
              </div>
              <div className="w-40 h-40 mb-5 rounded-full bg-slate-800 flex items-center justify-center">
                <img
                  className="w-40 h-40 rounded-full"
                  src={isNewChild ? defaultChildImage : "/src/assets/baby1.jpg"}
                  alt="Baby Image"
                />
              </div>
              <h5
                id="child-name"
                className="mb-1 text-xl font-bold font-[Play] text-black"
              >
                {childData.name || "Child name"}
              </h5>
              <div className="font-[Play]">{childData.age} old</div>
              <div className="flex mt-4 md:mt-6">
                <button
                  onClick={() => handleEdit(childId)}
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-purple-700 rounded-lg hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 "
                >
                  Edit
                </button>
                <button
                  onClick={handleDelete}
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-red-700 border border-red-700 rounded-lg hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red ms-3"
                >
                  Delete
                </button>
              </div>
              {/*SleepLog code  starts here */}

              <div className="mt-10 p-5">
                <h1 className="flex justify-center mb-5 font-[Mont]">
                  <span className="font-bold text-xl">Sleep Log</span>
                </h1>
                <ul className="font-[Roboto] pl-5 pr-5 flex justify-center gap-8">
                  <li>
                    <span className="font-[Mont] font-bold text-lg text-black text-shadow-lg">
                      Start Time:{" "}
                    </span>
                    {"\n"}
                    {startTime}
                  </li>

                  <li className="pl-5 pr-5 border-x-2 border-black">
                    <span className="font-[Mont] font-bold text-lg text-black text-shadow-lg">
                      End Time:{" "}
                    </span>
                    {"\n"}
                    {endTime}
                  </li>
                  <div
                    className="border-r-2 pr-2 border-black"
                    style={{ whiteSpace: "pre-line" }}
                  >
                    {" "}
                    <span className="font-[Mont] font-bold text-lg text-black text-shadow-lg">
                      Duration:{" "}
                    </span>
                    {"\n"}
                    <li>
                      {` ${durationHours} hours, ${durationMinutes} minutes, ${durationInSeconds} seconds`}
                    </li>
                  </div>

                  <li>
                    <span className="font-[Mont] font-bold text-lg text-black text-shadow-lg">
                      Note:{" "}
                    </span>
                    {"\n"}
                    <br />
                    <input
                      className="font-[Roboto] m-2 w-[150px] h-10 opacity-80 rounded-md border border-gray-300 focus:outline-none focus:ring focus:border-green-300"
                      type="text"
                      placeholder="Add a note..."
                      value={note}
                      onChange={handleNoteChange}
                    />
                  </li>
                </ul>
              </div>

              <div className="flex mt-4 md:mt-6">
                <button
                  onClick={() => handleLogCurrentSleepTime("start")}
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 rounded-lg ms-3"
                >
                  Start Sleep
                </button>
                <button
                  onClick={() => handleLogCurrentSleepTime("end")}
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 rounded-lg ms-3"
                >
                  End Sleep
                </button>
                <button
                  onClick={handleSave}
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 rounded-lg ms-3"
                >
                  Save
                </button>
              </div>

              {/* Feed Log code starts here */}
              <div className="mt-10 ">
                <h1 className="flex justify-center mb-5 font-[Mont]">
                  <span className="font-bold text-xl">Feed Log</span>
                </h1>
                <ul className="pl-5 pr-5 flex flex-row justify-center gap-8">
                  <li>
                    <span className="font-[Mont] font-bold text-lg text-black text-shadow-lg">
                      Start Feed:{" "}
                    </span>
                    {"\n"}
                    {startFeedTime}
                  </li>

                  <li className="pl-5 pr-5 border-x-2 border-black">
                    <span className="font-[Mont] font-bold text-lg text-black text-shadow-lg">
                      End Feed:{" "}
                    </span>
                    {"\n"}
                    {endFeedTime}
                  </li>
                  <div
                    className="border-r-2 pr-2 border-black"
                    style={{ whiteSpace: "pre-line" }}
                  >
                    {" "}
                    <span className="font-[Mont] font-bold text-lg text-black text-shadow-lg">
                      Duration:{" "}
                    </span>
                    {"\n"}
                    <li>
                      {` ${durationHours} hours, ${durationMinutes} minutes, ${durationInSeconds} seconds`}
                    </li>
                  </div>

                  <li>
                    <span className="font-[Mont] font-bold text-lg text-black text-shadow-lg">
                      Note:{" "}
                    </span>
                    {"\n"}
                    <br />
                    <input
                      className="font-[Roboto] m-2 w-[150px] h-10 opacity-80 rounded-md border border-gray-300 focus:outline-none focus:ring focus:border-green-300"
                      type="text"
                      placeholder="Add a note..."
                      value={feedNote}
                      onChange={handleFeedNoteChange}
                    />
                  </li>
                </ul>
              </div>
              <div className="flex mt-4 md:mt-6">
                <button
                  onClick={() => handleLogCurrentFeedTime("startConsume")}
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 rounded-lg ms-3"
                >
                  Start Feed
                </button>
                <button
                  onClick={() => handleLogCurrentFeedTime("endConsume")}
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 rounded-lg ms-3"
                >
                  End Time
                </button>
                <button
                  onClick={handleFeedSave}
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 rounded-lg ms-3"
                >
                  Save
                </button>
              </div>
            </div>
            <div></div>

            {isEditing && (
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
                <div className="bg-transparent p-6 rounded-lg">
                  {childId && (
                    <EditChildProfile
                      childId={childId}
                      onClose={handleEditClose}
                    />
                  )}
                  <button
                    className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-4"
                    onClick={() => {
                      setIsEditing(false);
                      navigate("/Dashboard"); // Navigate to the dashboard after clicking close
                    }}
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ChildProfilePage;
