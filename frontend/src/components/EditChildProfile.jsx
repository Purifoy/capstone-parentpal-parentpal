import React, { useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

function EditChildProfile({ childId }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [thischildId, setChildId] = useState(childId);

  const handleSubmit = async (e) => {
    // console.log("this is the value of childID: ", thischildId, name, age);
    e.preventDefault();

    //push the update to the backend
    try {
      await axios.put(`api/editchildprofile/${thischildId}`, {
        name,
        age,
      });
      console.log("It works! successfully updated data");

      //Success message
      Swal.fire({
        title: "Success!",
        text: "Successfully updated child data",
        icon: "success",
      });

     
      //let's see what the new value of name and age are
      console.log("childName:", name, "childAge:", age);

      // Clear the input fields after successful submission
      setName("");
      setAge("");
    } catch (error) {
      console.error("Error updating child's information: ", error);
    }
  };

  const handleAgeChange = (e) => {
    const ageValue = e.target.value;
    console.log("Child Age:", ageValue);
    setAge(ageValue);
  };

  const handleNameChange = (e) => {
    const nameValue = e.target.value;
    console.log("Child name:", nameValue);
    setName(nameValue);
  };

  return (
    <div>
      <form
        className="bg-[#D0E7D2] mt-20 max-w-md mx-auto border rounded-3xl"
        onSubmit={handleSubmit}
      >
        <div className="p-10">
          <div className="flex justify-center font-[Mont] font-extrabold text-lg">
            Child Data
          </div>
          <div>
            <div>
              <input
                placeholder="Child Name"
                type="text"
                id="small-input"
                className="block w-full mt-2 p-2 text-gray-900 border border-gray-500 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 "
                value={name}
                onChange={handleNameChange}
              />
            </div>
            <div>
              <input
                placeholder="Child Age"
                type="text"
                id="small-input"
                className="block w-full mt-2 p-2 text-gray-900 border border-gray-500 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 "
                value={age}
                onChange={handleAgeChange}
              />
            </div>

            <div className="pt-3 flex justify-center">
              <button
                onClick={handleSubmit} //testing something out
                type="submit"
                className="h-8 flex items-center text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Confirm Edit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default EditChildProfile;
