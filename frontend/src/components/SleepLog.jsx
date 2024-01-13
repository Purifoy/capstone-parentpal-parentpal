import React, { useState } from "react";
import axios from "axios";

function SleepLog() {
  const preDefinedChildId = 1;
  const [notes, setNotes] = useState("");
  const [startTime, setStartTime] = useState(
    new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  );

  const handleAddSleep = async () => {
    if (notes.trim() != "") {
      const encodedNotes = encodeURIComponent(notes);

      try {
        await axios.post("sleep/new", {
          childId: preDefinedChildId,
          startTime,
          notes: encodedNotes,
        });
        console.log("Successfully added log!")


      } catch (error) {
        console.error("Error adding notes: ", error);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    handleAddSleep();
  };


  return (
    <>
      <h1>THIS IS A SLEEP LOG</h1>
      <br />
      <form onSubmit={handleSubmit}>
        <label>
          Start Time:
          <input
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
          />
        </label>
        <br />
        <label>
          Notes:
          <input
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          ></input>
        </label>
        <button
          type="submit"
          onClick={handleAddSleep}
          className="border rounded-lg"
        >
          Add Sleep
        </button>
      </form>
    </>
  );
}

export default SleepLog;
