const login = (req, res) => {
    try {
        console.log("Logging in")
        res.status(200).send( "User logged in") ;
    } catch ( error ) {
        console.error(error) ;
    }
}

const signup = (req , res) => {
    try {
        console.log("Signing up")
        res.status(200).send("User signed up") ;
    } catch ( error ) {
        console.error(error) ;
    }
}

module.exports = { login , signup }