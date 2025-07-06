import React, { useState, useEffect } from "react";

const Profile = () => {
  const [thisUser, setThisUser] = useState({
    avatar:
      "https://res.cloudinary.com/dvny8jtdq/image/upload/v1718593872/samples/bike.jpg",
    coverImage:
      "https://res.cloudinary.com/dvny8jtdq/image/upload/v1718593902/cld-sample-2.jpg",
    username: "JohnDoe",
    dob: "1990-01-01",
    firstName: "John",
    lastName: "Doe",
    accountCreatedOn: "2025-07-04",
    about: "Lorem ipsum dolor sit amet.",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
    fetch(`${API_BASE_URL}/users/userData`, {
      method: "GET",
      credentials: "include",
    })
      .then(async (res) => {
        if (res.ok) {
          const body = await res.json();

          setThisUser({
            ...thisUser,
            username: body.data.user.username,
            dob: body.data.user.DOB.split("T")[0],
            about: body.data.user.about,
            // coverImage : body.data.user.coverImage ,
            // avatar : body.data.user.avatar ,
            email: body.data.user.email,
            firstName: body.data.user.firstName,
            lastName: body.data.user.lastName,
            accountCreatedOn: body.data.user.createdAt.split("T")[0],
          });
        } else {
          setErrors({ ...errors, userFetchError: "Please login" });
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const handleEditToggle = () => {
    setIsEditing(!isEditing); 
  };

  const handleUpdate = (field, value) => {
    setThisUser({ ...thisUser, [field]: value });
  };

  const handleSubmit = () => {
    setIsEditing(!isEditing) ;
    const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
    fetch(`${API_BASE_URL}/users/updateAccountDetails`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(thisUser),
      credentials: "include",
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to update user details");
        }
        console.log("User details updated successfully");
      })
      .catch((err) => console.error(err));
  }

  return (
    <div className="grid grid-rows-2 justify-center p-10">
      <div
        className="grid grid-cols-12 col-span-12 justify-center p-10 bg-cover bg-center rounded-lg"
        style={{ backgroundImage: `url(${thisUser.coverImage})` }}
      >
        <div className="grid grid-cols-12 col-span-12 h-full w-full bg-black bg-opacity-30 items-center justify-center p-10">
          <div className="col-span-3 grid justify-center">
            <img src={thisUser.avatar} className="w-64 h-64 rounded-full" />
            <div className="text-xs italic opacity-40 underline text-white text-center m-2 hover:text-gray-200">{thisUser.username}</div>
          </div>
          <div className="col-start-5 col-span-8 grid">
            <span className="text-slate-50 text-6xl flex items-center m-2">
              {isEditing ? (
                <input
                  type="text"
                  value={thisUser.firstName}
                  onChange={(e) => handleUpdate("firstName", e.target.value)}
                  className="bg-gray-800 text-white rounded p-2 text-base"
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
                  className="bg-gray-800 text-white rounded p-2 text-base"
                />
              ) : (
                thisUser.lastName
              )}
              <button
                onClick={isEditing ? handleSubmit : handleEditToggle}
                className="ml-4 text-gray-300 hover:text-white text-base"
              >
                <i className="fas fa-edit text-xs">
                  {!isEditing ? <span>Edit</span> : <span>Save</span>}
                </i>
              </button>
            </span>
            <span className="text-slate-50 m-2">
              {isEditing ? (
                <input
                  type="date"
                  value={thisUser.dob}
                  onChange={(e) => handleUpdate("dob", e.target.value)}
                  className="bg-gray-800 text-white rounded p-2 text-base"
                />
              ) : (
                `Happy Birthday on🎂 ${thisUser.dob}`
              )}
            </span>
            <span className="grid text-slate-50 text-xs m-2">
              <div className="row-span-1 text-base">About</div>
              {isEditing ? (
                <textarea
                  value={thisUser.about}
                  onChange={(e) => handleUpdate("about", e.target.value)}
                  className="bg-gray-800 text-white rounded p-2 text-base"
                />
              ) : (
                thisUser.about
              )}
            </span>
            <span className="text-slate-50 text-xs m-2">
              Account created on: {thisUser.accountCreatedOn}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
