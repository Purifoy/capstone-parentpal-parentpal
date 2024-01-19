import React, { useState } from "react";
import axios from "axios";

function AddChildProfile(child) {
  const [name, setName] = useState(child.name);
  const [age, setAge] = useState(child.age);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const childData = { id: child?.id, name, age };
    try {

   
      if (child && child.id) {
        await axios.put(`/api/editchildprofile/{id}`, childData); //edit existing
        console.log("It works! updated database");
      } else {
        await axios.post("/api/childprofile", childData); //add
        console.log("It works! added to database");

        //Success message
        Swal.fire({
          title: "Success!",
          text: "child added successfully",
          icon: "success",
        });
      }

      // Clear the input fields after successful submission
      setName("");
      setAge("");
    } catch (error) {
      console.error("Error adding child to database: ", error);
    }
  };

  return (
    <>
      <form
        className="bg-[#D0E7D2] mt-20 max-w-md mx-auto border rounded-3xl"
        onSubmit={handleSubmit}
      >
        <div className="p-10">
          <div className="flex justify-center font-[Mont] font-extrabold text-lg">
            Child Data
          </div>
          <div className=" grid md:grid-cols-2 md:gap-6">
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
                placeholder="Age"
                type="text"
                id="age-input"
                className="block w-full mt-2 p-2 text-gray-900 border border-gray-500 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
          </div>
          <div className="pt-3 flex justify-center">
            <button
              type="submit"
              className="h-8 flex items-center text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Add Child
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default AddChildProfile;
