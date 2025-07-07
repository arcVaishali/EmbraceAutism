import React, { useState, useEffect } from "react";
import ButtonPrimary from "../AutismAppComponents/ButtonPrimary";

const Profile = () => {
  const [thisUser, setThisUser] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [errors, setErrors] = useState({});
  const [avatar, setAvatar] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const [touch, setTouch] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
    fetch(`${API_BASE_URL}/users/userData`, {
      method: "GET",
      credentials: "include",
    })
      .then(async (res) => {
        if (res.ok) {
          const body = await res.json();

          setThisUser((prev) => ({
            ...prev,
            username: body.data.user.username,
            dob: body.data.user.DOB.split("T")[0],
            about: body.data.user.about,
            email: body.data.user.email,
            firstName: body.data.user.firstName,
            lastName: body.data.user.lastName,
            accountCreatedOn: body.data.user.createdAt.split("T")[0],
          }));
          setAvatar(body.data.user.avatar);
          setCoverImage(body.data.user.coverImage);
        } else {
          setErrors({ ...errors, userFetchError: "Please login" });
        }
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const error = {};
    if (touch.firstName && thisUser.firstName?.trim() === "") {
      error.firstName = "First Name cannot be empty";
    }
    if (touch.lastName && thisUser.lastName?.trim() === "") {
      error.lastName = "Last Name cannot be empty";
    }
    if (touch.DOB && !thisUser.dob) {
      error.DOB = "Date of Birth is required";
    }
    if (touch.about && !thisUser.about) {
      error.about = "Please Tell a little bit about yourself";
    }

    setErrors(error);

    // Validation
    const isDOBValid = thisUser.dob !== "";
    const areNamesValid =
      thisUser.firstName?.trim() !== "" && thisUser.lastName?.trim() !== "";

    setIsFormValid(areNamesValid && isDOBValid);
  }, [
    thisUser.firstName,
    thisUser.lastName,
    thisUser.dob,
    thisUser.about,
    touch.about,
    touch.firstName,
    touch.lastName,
    touch.dob,
  ]);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleUpdate = (field, value) => {
    setThisUser({ ...thisUser, [field]: value });
  };

  const handleTouch = (field) => {
    setTouch({ ...touch, [field]: true });
  };

  const handleSubmit = () => {
    const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

    if (
      !touch.firstName &&
      !touch.lastName &&
      !touch.dob &&
      !touch.about &&
      !touch.avatar &&
      !touch.coverImage
    )
      return;

    fetch(`${API_BASE_URL}/users/updateAccountDetails`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(thisUser),
      credentials: "include",
    })
      .then((res) => {
        if (!res.ok) {
          setErrors({
            ...errors,
            userDetailsError: "Failed to update user details",
          });
          throw new Error("Failed to update user details");
        }
        console.log("User details updated successfully");
      })
      .catch((err) => console.error(err));

    if (avatar !== null && touch.avatar) {
      const formData = new FormData();
      formData.append("image", avatar);

      fetch(`${API_BASE_URL}/users/updateAvatar`, {
        method: "PATCH",
        credentials: "include",
        body: formData,
      }).then(async (res) => {
        const JsonObj = await res.json();
        if (!res.ok) {
          setErrors({ ...errors, AvatarUploadError: "Avatar upload Failed" });
          throw new Error("Avatar upload failed");
        } else {
          console.log("Success ::", JsonObj);
        }
      });
    }

    if (coverImage !== null && touch.coverImage) {
      const formData = new FormData();
      formData.append("image", coverImage);

      fetch(`${API_BASE_URL}/users/updateCoverImage`, {
        method: "PATCH",
        credentials: "include",
        body: formData,
      }).then(async (res) => {
        const JsonObj = await res.json();
        if (!res.ok) {
          setErrors({
            ...errors,
            CoverImageUploadError: "Cover Image upload Failed",
          });
          throw new Error("Cover Image upload failed");
        } else {
          console.log("Success ::", JsonObj);
        }
      });
    }

    window.location.reload();
  };

  const PasswordChangeModal = ({ show, onClose }) => {
    const [email, setEmail] = useState("");
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = async () => {
      if (newPassword !== confirmPassword)
        return alert("Passwords don't match!");

      const res = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/users/updatePassword`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify({ email , oldPassword, newPassword }),
        }
      );

      const data = await res.json();
      if (res.ok) {
        alert("Password changed!");
        onClose(); 
      } else {
        alert(data.message || "Error");
      }
    };

    if (!show) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white p-6 rounded shadow-md w-96">
          <h2 className="text-lg font-bold mb-4">Change Password</h2>
          <input
            placeholder="Email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 mb-2 w-full"
          />
          <input
            placeholder="Old Password"
            type="password"
            onChange={(e) => setOldPassword(e.target.value)}
            className="border p-2 mb-2 w-full"
          />
          <input
            placeholder="New Password"
            type="password"
            onChange={(e) => setNewPassword(e.target.value)}
            className="border p-2 mb-2 w-full"
          />
          <input
            placeholder="Confirm Password"
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="border p-2 mb-2 w-full"
          />
          <div className="flex justify-end space-x-2">
            <button onClick={onClose} className="text-gray-600 px-3 py-1">
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className="bg-blue-600 text-white px-3 py-1 rounded"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="grid grid-rows-2 justify-center p-10">
      <div
        className="grid grid-cols-12 col-span-12 justify-center p-10 bg-cover bg-center rounded-lg"
        style={{
          backgroundImage: `url(${
            coverImage
              ? coverImage
              : "https://res.cloudinary.com/dvny8jtdq/image/upload/v1718593902/cld-sample-2.jpg"
          })`,
        }}
      >
        <div className="grid grid-cols-12 col-span-12 h-full w-full bg-black bg-opacity-30 items-center justify-center p-10">
          <div className="col-span-3 grid justify-center">
            {!isEditing ? (
              <img
                src={
                  avatar
                    ? avatar
                    : "https://res.cloudinary.com/dvny8jtdq/image/upload/v1718593872/samples/bike.jpg"
                }
                className="w-64 h-64 rounded-full"
              />
            ) : (
              <div className="grid justify-center">
                <div className="flex-row items-center justify-center m-2">
                  <span className="text-white">Upload Your Avatar</span>
                  <input
                    className=""
                    type="file"
                    accept="image/*"
                    name="avatar"
                    onChange={(e) => setAvatar(e.target.files[0])}
                    onBlur={(e) => handleTouch("avatar")}
                  />
                </div>
                <div className="flex-row items-center justify-center m-2 ">
                  <span className="text-white">Upload Your Cover Image</span>
                  <input
                    className=""
                    type="file"
                    accept="image/*"
                    name="coverImage"
                    onChange={(e) => setCoverImage(e.target.files[0])}
                    onBlur={(e) => handleTouch("coverImage")}
                  />
                </div>
              </div>
            )}
          </div>
          <div className="col-start-5 col-span-8 grid">
            <div className="text-xs italic opacity-40 underline text-white m-2 hover:text-gray-200">
              {thisUser.username}
            </div>
            <span className="text-slate-50 text-6xl flex items-center m-2">
              {isEditing ? (
                <input
                  type="text"
                  value={thisUser.firstName}
                  onChange={(e) => handleUpdate("firstName", e.target.value)}
                  className="bg-gray-800 text-white rounded p-2 text-base"
                  onBlur={(e) => handleTouch("firstName")}
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
                  onBlur={(e) => handleTouch("lastName")}
                />
              ) : (
                thisUser.lastName
              )}
              <button
                onClick={isEditing ? handleSubmit : handleEditToggle}
                className=" bg-white border-2 rounded-md p-2 ml-4 text-black hover:text-gray-800 text-base"
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
                  onBlur={(e) => handleTouch("dob")}
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
                  onBlur={(e) => handleTouch("about")}
                />
              ) : (
                thisUser.about
              )}
            </span>
            <span className="text-slate-50 text-xs m-2">
              Account created on: {thisUser.accountCreatedOn}
            </span>
            <div>
              <button
                className="m-4 p-2 col-span-4 bg-white border-2 rounded-full hover:bg-transparent hover:text-white"
                onClick={(e) => setShowModal(true)}
              >
                Update Password
              </button>
              {showModal && (
                <PasswordChangeModal
                  show={showModal}
                  onClose={(e) => setShowModal(false)}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
