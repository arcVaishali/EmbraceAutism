import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [DOB, setDOB] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [termsAgreed, setTermsAgreed] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const error = {};
    if (touched.firstName && firstName.trim() === "") {
      error.firstName = "First Name cannot be empty";
    }
    if (touched.lastName && lastName.trim() === "") {
      error.lastName = "Last Name cannot be empty";
    }
    if (touched.email && !email.includes("@")) {
      error.email = "Invalid Email";
    }
    if (
      touched.phoneNumber &&
      (phoneNumber.length < 10 || phoneNumber.length > 10)
    ) {
      error.phoneNumber = "Invalid Phone Number";
    }
    if (touched.password && password.length < 8) {
      // console.log(password.length);
      error.password = "Password must be minimum of 8 characters";
    }
    if (touched.confirmPassword && confirmPassword.trim() !== password.trim()) {
      error.confirmPassword = "Passwords do not match.";
    }
    if ( touched.DOB && !DOB ) {
      error.DOB = "Date of Birth is required" ;
    }

    setErrors(error);

    // Validation
    const isEmailValid = email.includes("@");
    const isPasswordValid = password.length > 8;
    const isConfirmPasswordValid = password.trim() === confirmPassword.trim();
    const isDOBValid = DOB !== "" ;
    const areNamesValid = firstName.trim() !== "" && lastName.trim() !== "";
    const isPhoneNumberValid = phoneNumber.length === 10;
    const IsTermsAgreed = termsAgreed === true;

    setIsFormValid(
      isEmailValid &&
        isPasswordValid &&
        isConfirmPasswordValid &&
        areNamesValid &&
        isPhoneNumberValid &&
        IsTermsAgreed &&
        isDOBValid
    );
  }, [
    firstName,
    lastName,
    email,
    phoneNumber,
    password,
    DOB,
    confirmPassword,
    termsAgreed,
    touched,
    touched.firstName,
    touched.lastName,
    touched.email,
    touched.phoneNumber,
    touched.password,
    touched.confirmPassword,
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      firstName,
      lastName,
      password,
      email,
      phoneNumber,
      DOB,
      termsAgreed,
    };

    const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
    fetch(`${API_BASE_URL}/users/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then(async (res) => {
        console.log(res);
        if (res.ok) setSubmitted(true);
        else {
          const errorHtml = await res.text(); 
          const errorMessageMatch = errorHtml.match(/<pre>(.*?)<\/pre>/s); 
          const errorMessage = errorMessageMatch
            ? errorMessageMatch[1].split("<br>")[0]
            : "An error occurred"; 
          setErrors({ ...errors, submissionError: "Something went wrong" });
          console.log(errors);
          setSubmitted(false);
        }
      })
      .catch((err) => {
        console.log("Error is", err);
      });
  };

  const handleBlur = (field) => {
    setTouched({ ...touched, [field]: true });
  };
  const handleTermsClick = () => {
    setTermsAgreed(true);
  };
  return (
    <div className="grid grid-cols-12 justify-center p-5 m-10">
      <span className="col-start-5 col-span-6 text-3xl p-10 mr-10 ml-10">
        User Registration
      </span>
      {!submitted ? (
        <form
          className="grid grid-rows-1 justify-center col-start-4 col-span-6 p-5 mb-4 border-2 rounded-md"
          onSubmit={handleSubmit}
        >
          <label className="block m-1 text-sm" for="firstName">
            First Name
          </label>
          <input
            className="rounded-sm m-1 border-2"
            type="text"
            id="firstName"
            name={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            onBlur={() => handleBlur("firstName")}
          />
          {errors.firstName && (
            <div className="text-xs text-red-600">{errors.firstName}</div>
          )}

          <label className="block m-1 text-sm" for="lastName">
            Last Name
          </label>
          <input
            className="rounded-sm m-1 border-2"
            type="text"
            id="lastName"
            name={lastName}
            onChange={(e) => setLastName(e.target.value)}
            onBlur={() => handleBlur("lastName")}
          />
          {errors.lastName && (
            <div className="text-xs text-red-600">{errors.lastName}</div>
          )}

          <label className="block m-1 text-sm" for="Email">
            Email
          </label>
          <input
            className="rounded-sm m-1 border-2"
            type="text"
            id="Email"
            name={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => handleBlur("email")}
          />
          {errors.email && (
            <div className="text-xs text-red-600">{errors.email}</div>
          )}

          <label className="block m-1 text-sm" for="DOB">
            Date of Birth
          </label>
          <input
            className="rounded-sm m-1 border-2"
            type="date"
            id="DOB"
            name={DOB}
            onChange={(e) => setDOB(e.target.value)}
            onBlur={() => handleBlur("DOB")}
          />
          {errors.DOB && (
            <div className="text-xs text-red-600">{errors.DOB}</div>
          )}

          <label className="block m-1 text-sm" for="PhoneNumber">
            Phone Number
          </label>
          <input
            className="rounded-sm m-1 border-2"
            type="text"
            id="PhoneNumber"
            name={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            onBlur={() => handleBlur("phoneNumber")}
          />
          {errors.phoneNumber && (
            <div className="text-xs text-red-600">{errors.phoneNumber}</div>
          )}

          <label for="Password"> Password </label>
          <input
            className="rounded-sm m-1 border-2"
            type="text"
            id="Password"
            name={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={(e) => handleBlur("password")}
          />
          {errors.password && (
            <div className="text-xs text-red-600">{errors.password}</div>
          )}

          <label for="ConfirmPassword"> Confirm Password </label>
          <input
            className="rounded-sm m-1 border-2"
            type="text"
            id="ConfirmPassword"
            name={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            onBlur={(e) => handleBlur("confirmPassword")}
          />
          {errors.confirmPassword && (
            <div className="text-xs text-red-600">{errors.confirmPassword}</div>
          )}

          <div className="grid-cols-6">
            <input
              className="col-span-2 m-2"
              type="checkbox"
              id="termsAgreed"
              name="termsAgreed"
              onChange={(e) => handleTermsClick()}
            />
            <label className="col-span-4 m-2" for="termsAgreed">
              {" "}
              Terms and Conditions
            </label>
          </div>

          <input
            className={
              isFormValid
                ? "bg-green rounded-md border-2 m-2 p-2"
                : "bg-gray-600 rounded-md border-2 m-2 p-2"
            }
            type="submit"
            id="submit"
            name="submitted"
            disabled={!isFormValid}
          />
          {errors.submissionError && (
            <div className="text-xs text-red-600">{errors.submissionError}</div>
          )}
        </form>
      ) : (
        <div className="grid justify-center col-span-12">
          Registration successful, you can now{" "}
          <Link to="/login" className="underline text-blue">
            login
          </Link>
          . Also don't forget to complete your profile.
        </div>
      )}
    </div>
  );
};

export default Signup;
