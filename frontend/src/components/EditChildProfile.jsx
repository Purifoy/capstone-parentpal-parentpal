import React, { useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

function EditChildProfile(childId) {
  const [name, setName] = useState(childId.name || "");
  const [age, setAge] = useState(childId.age || "");
 

  const handleSubmit = async (e) => {

    console.log("this is teh value of childID: ", childId)


    e.preventDefault();
    
    
    try {
      await axios.put(`/api/childprofile/${childId}`);
      console.log("It works! successfully updated data");

      //Success message
      Swal.fire({
        title: "Success!",
        text: "Successfully updated child data",
        icon: "success",
      });

      // Clear the input fields after successful submission
      setName("");
      setAge("");
    } catch (error) {
      console.error("Error updating child's information: ", error);
    }
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
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <input
                placeholder="Child Age"
                type="text"
                id="small-input"
                className="block w-full mt-2 p-2 text-gray-900 border border-gray-500 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 "
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>

            <div className="pt-3 flex justify-center">
              <button
                onClick={handleSubmit}//testing something out
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
