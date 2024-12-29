const mongoose = require("mongoose") 
const { Schema } = require("mongoose") 
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const userSchema = new Schema({
    username: {
        type : String,
        lowercase : true ,
        required : true,
        unique : true 
    },
    email : {
        type : String ,
        required : true ,
    },
    fullName : {
        type : String ,
        required : true ,
    },
    age : {
        type: Number ,
        required : true 
    },
    avatar : {
        type : String ,
        required : true ,
    },
    address : {
        type : String 
    },
    type: {
        type : String ,
        enums : [ "Adult" , "Child" ] 
    },
    coverImage : {
        type : String 
    },
    password: {
        type : String , 
        lowercase : true ,
        required: true ,
    }, 
    refreshToken : {
        type : String
    }
} , {timestamps : true}) ;

userSchema.pre("save" , async function( next ){
    if ( !this.isModified("password") ) return next() ;
    
    this.password = await bcrypt.hash( password , 10 )
    .then( 
        () => {
            console.log("BCRYPT: The Operation was successful")
        },
        (err) => {
            console.error( "BCRYPT: Encountered some error" , err) ;
        }
        )
    .catch( error , (er) => {
            console.log("BCRYPT: Some error occurred") 
    }) ;
    next() ;
})

userSchema.pre("deleteOne" , async function( next ) {
    //delete this user's stories, campaigns and events

    next() ;
})

userSchema.methods.isPasswordCorrect = async function() {
    return await bcrypt.compare( password , this.passoword )
    .then(
        ()=> {
            console.log("BCRYPT: Operation was succesful");
        },
        (err)=> {
            console.error("BCRYPT: Some Error Occurred" , err );
        }
    )
    .catch( (err) => {
        console.log("BCRYPT: Some error occurred" );
    });
}

userSchema.methods.generateAccessTokens = function() {
    return jwt.sign(
        {
            id : this._id,
            username : this.username ,
            email : this.email,
            fullName : this.fullName 
        },
        process.env.ACCESS_TOKEN_SECRET ,
        {
            expiresIn : process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

userSchema.methods.generateRefreshTokens = function() {
    return jwt.sign(
        {
            id : this._id ,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn : process.env.REFRESH_TOKEN_EXPIRY
        }

    )
}

const User = mongoose.model("Users" , userSchema ) ;
module.exports = { User } ;
