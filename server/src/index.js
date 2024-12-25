const { app } = require("./app.js")
require("dotenv").config() 
const { DB_Connect } = require("./db/index.js")



DB_Connect()
.then( () => {
    app.on( error , (er) => {
        console.log("MongoDB connection error" , er )
    })
    app.listen( process.env.PORT || 8000 , () => {
        console.log(`The server is running on PORT ${process.env.PORT}`) ;
    })
})
.catch( (error) => {
    console.log("MongoDB Connection failed" , error) 
}) 
