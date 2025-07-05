import React, { useState, useEffect } from "react";

const Profile = () => {
  const [thisUser, setThisUser] = useState({
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    coverImage:
      "https://images.unsplash.com/photo-1750517896388-672eb820110c?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    username: "JohnDoe",
    dob: "1990-01-01",
    firstName: "John",
    lastName: "Doe",
    accountCreatedOn: "2025-07-04",
    about: "Lorem ipsum dolor sit amet.",
  });
  const [isEditing, setIsEditing] = useState(false); // State to toggle edit mode
  const [errors, setErrors] = useState({});

  const handleEditToggle = () => {
    setIsEditing(!isEditing); // Toggle edit mode
  };

  const handleUpdate = (field, value) => {
    setThisUser({ ...thisUser, [field]: value }); // Update local state
    // Make an API call to update the field on the server
    const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
    fetch(`${API_BASE_URL}/users/updateAccountDetails`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ [field]: value }),
      credentials: "include",
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to update user details");
        }
        console.log("User details updated successfully");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="grid grid-rows-2 justify-center p-10">
      <div
        className="grid grid-cols-12 col-span-12 justify-center p-10 bg-cover bg-center rounded-lg"
        style={{ backgroundImage: `url(${thisUser.coverImage})` }}
      >
        <div className="grid grid-cols-12 col-span-12 h-full w-full bg-black bg-opacity-30 items-center justify-center p-10">
          <div className="col-span-3">
            <img src={thisUser.avatar} className="w-64 h-64 rounded-full" />
          </div>
          <div className="col-start-5 col-span-8 grid">
            <span className="text-slate-50 text-6xl flex items-center">
              {isEditing ? (
                <input
                  type="text"
                  value={thisUser.firstName}
                  onChange={(e) => handleUpdate("firstName", e.target.value)}
                  className="bg-gray-800 text-white rounded p-2"
                />
              ) : (
                thisUser.firstName
              )}
              &nbsp;
              {isEditing ? (
                <input
                  type="text"
                  value={thisUser.lastName}
                  onChange={(e) => handleUpdate("lastName", e.target.value)}
                  className="bg-gray-800 text-white rounded p-2"
                />
              ) : (
                thisUser.lastName
              )}
              <button
                onClick={handleEditToggle}
                className="ml-4 text-gray-300 hover:text-white"
              >
                <i className="fas fa-edit"></i> {/* Font Awesome Edit Icon */}
              </button>
            </span>
            <span className="text-slate-50">
              {isEditing ? (
                <input
                  type="date"
                  value={thisUser.dob}
                  onChange={(e) => handleUpdate("dob", e.target.value)}
                  className="bg-gray-800 text-white rounded p-2"
                />
              ) : (
                `Happy Birthday on🎂 ${thisUser.dob}`
              )}
            </span>
            <span className="text-slate-50 text-xs">
              Account created on: {thisUser.accountCreatedOn}
            </span>
            <span className="text-slate-50 text-xs">
              {isEditing ? (
                <textarea
                  value={thisUser.about}
                  onChange={(e) => handleUpdate("about", e.target.value)}
                  className="bg-gray-800 text-white rounded p-2"
                />
              ) : (
                thisUser.about
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;