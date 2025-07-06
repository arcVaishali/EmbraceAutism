const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config() 
const app = express() ;

// middlewares
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    methods: ["GET" , "POST" , "PUT" , "DELETE" , "PATCH"],
    credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public/temp"))
app.use(cookieParser())


const { userRouter } = require("./routes/user.routes") 
app.use( "/api/v1/users" , userRouter ) ;

module.exports = { app } ;