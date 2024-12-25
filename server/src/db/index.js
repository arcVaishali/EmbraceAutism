const mongoose = require("mongoose") 
const { DB_NAME } = require("../constants.js")

const DB_Connect = async () => {
    try {
        const conn = await mongoose.connect(`${process.env.MONGODBURI}/${DB_NAME}`)
        // console.log(conn)
    } catch (error ){
        console.log(error)
    }
}

module.exports = { DB_Connect }