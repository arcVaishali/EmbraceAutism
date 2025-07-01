const asyncHandler = require("../utils/asyncHandler");
const ApiError = require("../utils/ApiError");
const ApiResponse = require("../utils/ApiResponse");
const { User } = require("../models/user.model");

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email) {
    throw new ApiError(400, "username or email is required");
  }

  const user = await User.findOne(email);

  if (!user) {
    throw new ApiError(404, "User does not exist");
  }

  const isPasswordValid = await user.isPasswordCorrect(password);

  if (!isPasswordValid) {
    throw new ApiError(401, "Invalid user credentials");
  }

  const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(
    user._id
  );

  const loggedInUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
      new ApiResponse(
        200,
        {
          user: loggedInUser,
          accessToken,
          refreshToken,
        },
        "User logged In Successfully"
      )
    );
});

const signup = asyncHandler(async (req, res) => {
  const {
    firstName,
    lastName,
    password,
    email,
    phoneNumber,
    DOB,
    termsAgreed,
  } = req.body;

  console.log(password);

  if (
    [firstName, lastName, password, email, phoneNumber].some(
      (field) => typeof field !== "string" || field.trim() === ""
    )
  ) {
    throw new ApiError("One of the fields is empty");
  }

  const existedUser = await User.findOne({ email: email });
  if (existedUser) {
    throw new ApiError("User already exists");
    // return res
    // .status(300)
    // .json(new ApiError(200, "User already exists"));
  }

  const [username] = email.split("@");
  console.log( password ) ;
  const user = await User.create({
    firstName,
    lastName,
    password : password,
    email,
    phoneNumber,
    DOB,
    termsAgreed,
    username,
  });

//   console.log("I am here") ;
  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  if (!createdUser) {
    throw new ApiError(500, "Something went wrong while registering the user");
  }

  return res
    .status(201)
    .json(new ApiResponse(200, createdUser, "User registered Successfully"));
});

module.exports = { login, signup };
