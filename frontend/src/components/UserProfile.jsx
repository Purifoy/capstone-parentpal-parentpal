import React, { useEffect, useState } from "react";
import axios from "axios";


function UserProfile({ userId }) {
  const [userName, setUserName] = useState(null);

  const getUserDetails = async (userId) => {
    try {
      const response = await axios.get(`api/${userId}`);
      return response.data.name;
    } catch (error) {
      console.error("Error fetching user details: ", error);
      return null;
    }
  };

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const userName = await getUserDetails(userId);
        setUserName(userName);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchUserName();
  }, [userId]);

  return (
    <>
      <div className="mt-20 text-2xl">
        <h2 className="font-[Instrument] text-5xl ">Welcome {userName}!</h2>
      </div>
      <br />
      <div>
        <img
          className="w-40 h-40 rounded-full bg-gray-300 flex items-center justify-center"
          src="/src/assets/baby3.jpg"
          alt="baby"
        />
      </div>
      <h1 className="mt-10 font-bold font-[Play] text-xl ">Profiles</h1>
      <br />
      <div className="flex flex-row gap-2 ">
        <button
          type="button"
          class="py-2.5 px-5 me-2 mb-2 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Child 1
        </button>
        <button
          type="button"
          class="py-2.5 px-5 me-2 mb-2 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Child 2
        </button>

        <button
          type="button"
          class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Add Child
        </button>
      </div>
    </>
  );
}

export default UserProfile;
