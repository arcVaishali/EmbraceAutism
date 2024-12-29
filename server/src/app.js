const express = require("express")
const app = express() ;

// middlewares


const { userRouter } = require("./routes/user.routes") 
app.use( "/api/v1/users" , userRouter ) ;

module.exports = { app } ;