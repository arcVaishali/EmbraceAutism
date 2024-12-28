const { app } = require("./app.js")
require("dotenv").config() 
const { DB_Connect } = require("./db/index.js")



DB_Connect()
.then( () => {
    app.on( "error" , (error) => {
        console.log("MongoDB connection error" , error )
    })
    app.listen( process.env.PORT || 8000 , () => {
        console.log(`The server is running on PORT ${process.env.PORT}`) ;
    })
})
.catch((error) => console.log("***MONGO DB  connection failed ***" , error ))
