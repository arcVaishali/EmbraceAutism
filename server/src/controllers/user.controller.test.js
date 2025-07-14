const { login, signup, updatePassword, updateAccountDetails, userData, updateAvatar, updateCoverImage } = require("./user.controller");
const ApiError = require("../utils/ApiError");
const ApiResponse = require("../utils/ApiResponse");
const { User } = require("../models/user.model");
const uploadOnCloudinary = require("../utils/cloudinary");

jest.mock("../models/user.model");
jest.mock("../utils/cloudinary");

describe("User Controller", () => {
    let req, res, next;

    beforeEach(() => {
        req = { body: {}, user: {}, file: {} };
        res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn().mockReturnThis(),
            cookie: jest.fn().mockReturnThis(),
            clearCookie: jest.fn().mockReturnThis(),
        };
        next = jest.fn();
        jest.clearAllMocks();
    });

    describe("login", () => {
        it("should throw error if email is missing", async () => {
            req.body = { password: "pass" };
            await expect(login(req, res, next)).rejects.toThrow(ApiError);
        });

        it("should throw error if user does not exist", async () => {
            req.body = { email: "test@test.com", password: "pass" };
            User.findOne.mockResolvedValue(null);
            await expect(login(req, res, next)).rejects.toThrow(ApiError);
        });

        it("should throw error if password is invalid", async () => {
            req.body = { email: "test@test.com", password: "pass" };
            const user = { isPasswordCorrect: jest.fn().mockResolvedValue(false) };
            User.findOne.mockResolvedValue(user);
            await expect(login(req, res, next)).rejects.toThrow(ApiError);
        });

        it("should login user and set cookies", async () => {
            req.body = { email: "test@test.com", password: "pass" };
            const user = {
                _id: "123",
                isPasswordCorrect: jest.fn().mockResolvedValue(true),
                generateAccessTokens: jest.fn().mockReturnValue("access"),
                generateRefreshTokens: jest.fn().mockReturnValue("refresh"),
                save: jest.fn(),
            };
            User.findOne.mockResolvedValue(user);
            User.findById.mockResolvedValue({
                select: jest.fn().mockReturnValue({ _id: "123", email: "test@test.com" }),
            });
            User.findById.mockReturnValue({
                select: jest.fn().mockReturnValue({ _id: "123", email: "test@test.com" }),
            });
            await login(req, res, next);
            expect(res.cookie).toHaveBeenCalledWith("accessToken", "access", expect.any(Object));
            expect(res.cookie).toHaveBeenCalledWith("refreshToken", "refresh", expect.any(Object));
            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith(expect.any(ApiResponse));
        });
    });

    describe("signup", () => {
        it("should throw error if any field is empty", async () => {
            req.body = { firstName: "", lastName: "Doe", password: "pass", email: "a@b.com", phoneNumber: "123" };
            await expect(signup(req, res, next)).rejects.toThrow(ApiError);
        });

        it("should throw error if user already exists", async () => {
            req.body = { firstName: "John", lastName: "Doe", password: "pass", email: "a@b.com", phoneNumber: "123" };
            User.findOne.mockResolvedValue(true);
            await expect(signup(req, res, next)).rejects.toThrow(ApiError);
        });

        it("should create user and return response", async () => {
            req.body = { firstName: "John", lastName: "Doe", password: "pass", email: "a@b.com", phoneNumber: "123", DOB: "2000-01-01", termsAgreed: true };
            User.findOne.mockResolvedValue(null);
            User.create.mockResolvedValue({ _id: "123" });
            User.findById.mockReturnValue({ select: jest.fn().mockReturnValue({ _id: "123" }) });
            await signup(req, res, next);
            expect(res.status).toHaveBeenCalledWith(201);
            expect(res.json).toHaveBeenCalledWith(expect.any(ApiResponse));
        });
    });

    describe("updatePassword", () => {
        it("should throw error if fields are empty", async () => {
            req.body = { oldPassword: "", newPassword: "" };
            req.user = { email: "a@b.com" };
            await expect(updatePassword(req, res, next)).rejects.toThrow(ApiError);
        });

        it("should throw error if new password is less than 8 chars", async () => {
            req.body = { oldPassword: "oldpass", newPassword: "short" };
            req.user = { email: "a@b.com" };
            await expect(updatePassword(req, res, next)).rejects.toThrow(ApiError);
        });

        it("should throw error if old password is invalid", async () => {
            req.body = { oldPassword: "oldpass", newPassword: "newpassword" };
            req.user = { email: "a@b.com" };
            User.findOne.mockResolvedValue({ isPasswordCorrect: jest.fn().mockResolvedValue(false) });
            await expect(updatePassword(req, res, next)).rejects.toThrow(ApiError);
        });

        it("should update password and clear cookies", async () => {
            req.body = { oldPassword: "oldpass", newPassword: "newpassword" };
            req.user = { email: "a@b.com" };
            const user = {
                isPasswordCorrect: jest.fn().mockResolvedValue(true),
                save: jest.fn(),
            };
            User.findOne.mockResolvedValue(user);
            await updatePassword(req, res, next);
            expect(res.clearCookie).toHaveBeenCalledWith("accessToken", expect.any(Object));
            expect(res.clearCookie).toHaveBeenCalledWith("refreshToken", expect.any(Object));
            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith(expect.any(ApiResponse));
        });
    });

    describe("updateAccountDetails", () => {
        it("should throw error if any field is empty", async () => {
            req.body = { firstName: "", lastName: "Doe", dob: "2000-01-01", about: "about" };
            req.user = {};
            await expect(updateAccountDetails(req, res, next)).rejects.toThrow(ApiError);
        });

        it("should update fields if changed", async () => {
            req.body = { firstName: "Jane", lastName: "Doe", dob: "2000-01-01", about: "about" };
            req.user = { _id: "123", firstName: "John", lastName: "Doe", DOB: "1990-01-01", about: "old" };
            User.updateOne.mockResolvedValue({ nModified: 1 });
            await updateAccountDetails(req, res, next);
            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith(expect.any(ApiResponse));
        });

        it("should return no changes detected if nothing changed", async () => {
            req.body = { firstName: "John", lastName: "Doe", dob: "1990-01-01", about: "old" };
            req.user = { _id: "123", firstName: "John", lastName: "Doe", DOB: "1990-01-01", about: "old" };
            await updateAccountDetails(req, res, next);
            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith(expect.any(ApiResponse));
        });
    });

    describe("updateAvatar", () => {
        it("should throw error if file is missing", async () => {
            req.file = undefined;
            await expect(updateAvatar(req, res, next)).rejects.toThrow(ApiError);
        });

        it("should throw error if upload fails", async () => {
            req.file = { path: "avatar.png" };
            uploadOnCloudinary.mockResolvedValue({ url: undefined });
            await expect(updateAvatar(req, res, next)).rejects.toThrow(ApiError);
        });

        it("should update avatar and return user", async () => {
            req.file = { path: "avatar.png" };
            req.user = { _id: "123" };
            uploadOnCloudinary.mockResolvedValue({ url: "http://cloud/avatar.png" });
            User.findByIdAndUpdate.mockReturnValue({ select: jest.fn().mockReturnValue({ _id: "123", avatar: "http://cloud/avatar.png" }) });
            await updateAvatar(req, res, next);
            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith(expect.any(ApiResponse));
        });
    });

    describe("updateCoverImage", () => {
        it("should throw error if file is missing", async () => {
            req.file = undefined;
            await expect(updateCoverImage(req, res, next)).rejects.toThrow(ApiError);
        });

        it("should throw error if upload fails", async () => {
            req.file = { path: "cover.png" };
            uploadOnCloudinary.mockResolvedValue({ url: undefined });
            await expect(updateCoverImage(req, res, next)).rejects.toThrow(ApiError);
        });

        it("should update cover image and return user", async () => {
            req.file = { path: "cover.png" };
            req.user = { _id: "123" };
            uploadOnCloudinary.mockResolvedValue({ url: "http://cloud/cover.png" });
            User.findByIdAndUpdate.mockReturnValue({ select: jest.fn().mockReturnValue({ _id: "123", coverImage: "http://cloud/cover.png" }) });
            await updateCoverImage(req, res, next);
            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith(expect.any(ApiResponse));
        });
    });

    describe("userData", () => {
        it("should return user data", async () => {
            req.user = { _id: "123", email: "a@b.com" };
            await userData(req, res, next);
            expect(res.json).toHaveBeenCalledWith(expect.any(ApiResponse));
        });
    });
});