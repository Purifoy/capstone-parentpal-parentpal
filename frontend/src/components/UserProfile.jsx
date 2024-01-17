import React, { useEffect, useState } from "react";
import axios from "axios";
import AddChildProfile from "./AddChildProfile";
import { useNavigate } from "react-router-dom";
import DigitalClock from "./DigitalClock";

function UserProfile({ userId }) {
  const [userName, setUserName] = useState(null);
  const [childProfiles, setChildProfiles] = useState([]);
  const [showAddChildForm, setShowAddChildForm] = useState(false);
  const navigate = useNavigate();

  //fetching all of the profiles
  useEffect(() => {
    axios
      .get("api/childprofile/all")
      .then((response) => setChildProfiles(response.data))
      .catch((error) => console.error("Error fetching child profiles:", error));
  }, []);

  //for handling child profile when button is clicked for a specific profile
  const handleProfileButtonClick = (profileId) => {
    console.log(`Button clicked for Child with ID # ${profileId}`);

    const selectedChild = childProfiles.find(
      (profile) => profile.id === profileId
    );
    //when clicked it will navigate to the ChildProfile component
    navigate(`/child-profile`, { state: { childData: selectedChild } });
  };

  //for User fetching user details
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

  //Handle form submission
  const handleFormSubmit = (newChildProfile) => {
    //Add Child to current list of profiles
    setChildProfiles([
      ...childProfiles,
      { id: childProfiles.length + 1, name: newChildProfile },
    ]);
    //Hide the Form
    setShowAddChildForm(false);
  };

  // Reload the page
  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <>
    <div className="ml-[550px] pt-2 flex justify-end"><DigitalClock/></div>
      <div className="mt-5 text-2xl">
        <h2 className="mb-5 font-[Instrument] text-5xl ">
          Welcome {userName}!
        </h2>
      </div>
      <br />
      <div>
        <img
          className="w-40 h-40 rounded-full bg-gray-300 flex items-center justify-center"
          src="/src/assets/baby3.jpg"
          alt="baby"
        />
      </div>
      <h1 className="mt-10 mb-5 font-bold font-[Play] text-xl ">Profiles</h1>
      <br />
      <div className="flex flex-row gap-2 ">
        {childProfiles.map((profile) => (
          <button
            key={profile.id}
            onClick={() => handleProfileButtonClick(profile.id)}
            type="button"
            className="py-2.5 px-5 me-2 mb-2 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            {profile.name}
          </button>
        ))}

        {showAddChildForm && (
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
            <div className="bg-transparent p-6 rounded-lg">
              <AddChildProfile onFormSubmit={handleFormSubmit} />
              <button
                className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-4"
                onClick={() => {
                  setShowAddChildForm(false);
                  reloadPage();
                }}
              >
                Close
              </button>
            </div>
          </div>
        )}

        <button
          type="button"
          onClick={() => setShowAddChildForm(true)}
          className="py-2.5 px-5 me-2 mb-2 text-xl text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          +
        </button>
      </div>
    </>
  );
}

export default UserProfile;
