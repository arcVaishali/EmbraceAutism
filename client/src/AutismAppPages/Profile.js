import { useState, useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.css";

const Profile = () => {
  const [thisUser, setThisUser] = useState({
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    coverImage:
      "https://images.unsplash.com/photo-1750517896388-672eb820110c?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  });
  const [errors, setErrors] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [firstName , setFirstName ] = useState("") ;
  

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
            about: body.data.user.body,
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
  useEffect(()=> {
    const errors = {} ;
    
  } , [ isEditing ] ) 
  const handleEditToggle = () => {
    setIsEditing(true);
  };
  const handleSubmit = (e)=> {
    e.preventDefault() ;

    const payload = {
        username ,
        avatar , 
        coverImage ,
        dob,
        firstName ,
        lastName ,
        email
    }
    
    const API_BASE_URL = process.env.REACT_APP_API_BASE_URL ;
    fetch(`${API_BASE_URL}/users/updateAccountDetails` , {
        method : "PUT" ,
        header : {"Content-Type" : "application/json"},
        credentials : "include",
        body : JSON.stringify(payload) 
    }).then((res)=>{
        if ( res.ok) {

        } else {

        }
    }).catch((err)=> console.log( err ) ) 
  }
  return (
    <div className="grid grid-rows-2 justify-center p-10">
      <div
        className="grid grid-cols-12 col-span-12 justify-center p-10 bg-cover bg-center rounded-lg"
        style={{ backgroundImage: `url(${thisUser.coverImage})` }}
      >
        {!isEditing ? (
          <div className="grid grid-cols-12 col-span-12 h-full w-full bg-black bg-opacity-30 items-center justify-center p-10">
            <div className="col-span-3">
              <img src={thisUser.avatar} className="w-64 h-64 rounded-full" />
            </div>
            <div className="col-start-5 col-span-8 grid">
              <span className="text-slate-50 text-6xl">
                {thisUser.firstName}&nbsp;{thisUser.lastName}
                <button
                  onClick={handleEditToggle}
                  className="ml-4 text-gray-300 hover:text-white"
                >
                  <i className="fas fa-edit text-sm"></i>
                </button>
              </span>
              <span className="text-slate-50">{thisUser.username}</span>
              <span className="text-slate-50">
                Happy Birthday on🎂{thisUser.dob}
              </span>
              <span className="text-slate-50 text-xs">
                Account created on: {thisUser.accountCreatedOn}
              </span>
              <span className="text-slate-50 text-xs">{thisUser.about}</span>
            </div>
          </div>
        ) : (
          <form onSubmit={(e)=>handleSubmit()} className="grid grid-cols-12 col-span-12 h-full w-full bg-black bg-opacity-30 items-center justify-center p-10">
            <label for="firstName"></label>
            <input
            className=""
            id="firstName" 
            name="firstName" 
            value={firstName}
            />
          </form>
        )}
      </div>
    </div>
  );
};

export default Profile;
