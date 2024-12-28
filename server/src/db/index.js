const mongoose = require("mongoose") 
const { DB_NAME } = require("../constants.js")

const DB_Connect = async () => {
    try {
        const conn = await mongoose.connect(`${process.env.MONGODBURI}/${DB_NAME}`)
        console.log("MongoDb connected") ;
        console.log(`\n MongoDB Connected !! DB HOST : ${conn.connection.host}`); 
    } catch (error){
        console.log("Mongodb Connection Failed" ,error)
        process.exit(1)
    }
}

module.exports = { DB_Connect }