const Router = require("express") ;
const userRouter = Router() ;
const verifyJWT  = require("../middlewares/auth.middleware");

const { login , signup , updatePassword , updateAccountDetails , userData } = require("../controllers/user.controller");

userRouter.route("/login").post( login );
userRouter.route("/signup").post( signup ) ;

userRouter.route("/userData").get( verifyJWT , userData ) ;
userRouter.route("/updatePassword").post(verifyJWT , updatePassword );
userRouter.route("/updateAccountDetails").patch( verifyJWT , updateAccountDetails) ;

userRouter.route("/myCommunityEvents")
userRouter.route("/myStories") 
userRouter.route("/myCampaigns")


module.exports = { userRouter } ;