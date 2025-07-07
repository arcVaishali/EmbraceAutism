const asyncHandler = require("../utils/asyncHandler");
const ApiError = require("../utils/ApiError");
const ApiResponse = require("../utils/ApiResponse");
const { User } = require("../models/user.model");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const uploadOnCloudinary = require("../utils/cloudinary");

const generateAccessAndRefreshTokens = async (userId) => {
  try {
    const user = await User.findById(userId);
    const accessToken = user.generateAccessTokens();
    const refreshToken = user.generateRefreshTokens();

    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    return { accessToken, refreshToken };
  } catch (error) {
    console.log(error);
    throw new ApiError(
      500,
      "Something went wrong while generating refresh and access token"
    );
  }
};

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email) {
    throw new ApiError(400, "username or email is required");
  }

  const user = await User.findOne({ email: email });

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
    secure: false,
    sameSite: "lax",
    maxAge: 24 * 60 * 60 * 1000,
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

  // console.log(password);

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
  console.log(password);
  const user = await User.create({
    firstName,
    lastName,
    password,
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

const updatePassword = asyncHandler(async (req, res) => {
  const loggedInUser = req.user;
  const { currentPassword, newPassword } = req.body;

  // validation
  // delete refresh tokens and access token
  // update database
});

const updateAccountDetails = asyncHandler(async (req, res) => {
  const loggedInUser = req.user;
  const updatedUser = req.body;

  if (
    updatedUser.firstName.trim() === "" ||
    updatedUser.lastName.trim() === "" ||
    updatedUser.dob.trim() === "" ||
    updatedUser.about.trim() === ""
  ) {
    throw new ApiError("One of the fields is empty");
  }

  const updateFields = {};
  if (loggedInUser.firstName !== updatedUser.firstName)
    updateFields.firstName = updatedUser.firstName;
  if (loggedInUser.lastName !== updatedUser.lastName)
    updateFields.lastName = updatedUser.lastName;
  if (loggedInUser.DOB !== updatedUser.dob) updateFields.DOB = updatedUser.dob;
  if (loggedInUser.about !== updatedUser.about)
    updateFields.about = updatedUser.about;

  if (Object.keys(updateFields).length > 0) {
    const updatedUserDoc = await User.updateOne(
      { _id: loggedInUser._id },
      { $set: updateFields }
    );
    return res
      .status(200)
      .json(new ApiResponse(200, updatedUserDoc, "Updated"));
  } else {
    return res
      .status(200)
      .json(new ApiResponse(200, null, "No changes detected"));
  }
});

const updateAvatar = asyncHandler(async (req, res) => {
  const avatarLocalPath = req.file?.path;

  console.log("Avatar Upload begins");

  if (!avatarLocalPath) {
    throw new ApiError(400, "Avatar file is missing");
  }

  // TODO: delete old image

  const avatar = await uploadOnCloudinary(avatarLocalPath);

  if (!avatar.url) {
    throw new ApiError(400, "Error while uploading on avatar");
  }

  // const updatedAvatar = await User.updateOne( { _id : loggedInUser._id } , {})

  const user = await User.findByIdAndUpdate(
    req.user?._id,
    {
      $set: {
        avatar: avatar.url,
      },
    },
    { new: true }
  ).select("-password");

  return res
    .status(200)
    .json(new ApiResponse(200, user, "Avatar image updated successfully"));
});

const updateCoverImage = asyncHandler(async (req, res) => {
  const coverImageLocalPath = req.file?.path;

  if (!coverImageLocalPath) {
    throw new ApiError(400, "Cover image file is missing");
  }

  //TODO: delete old image - assignment

  const coverImage = await uploadOnCloudinary(coverImageLocalPath);

  if (!coverImage.url) {
    throw new ApiError(400, "Error while uploading on avatar");
  }

  const user = await User.findByIdAndUpdate(
    req.user?._id,
    {
      $set: {
        coverImage: coverImage.url,
      },
    },
    { new: true }
  ).select("-password");

  return res
    .status(200)
    .json(new ApiResponse(200, user, "Cover image updated successfully"));
});

const userData = asyncHandler(async (req, res) => {
  const loggedInUser = req.user;

  return res.json(
    new ApiResponse(
      200,
      {
        user: loggedInUser,
      },
      "Fetched user data"
    )
  );
});

module.exports = {
  login,
  signup,
  updatePassword,
  updateAccountDetails,
  userData,
  updateAvatar,
  updateCoverImage,
};
