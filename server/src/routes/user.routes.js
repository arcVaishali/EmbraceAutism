const Router = require("express") ;
const userRouter = Router() ;

const { login , signup } = require("../controllers/user.controller")

userRouter.route("/login").post( login );
userRouter.route("/signup").post( signup ) ;

userRouter.route("/updatePassword")
userRouter.route("/updateAccountDetails")
userRouter.route("/updateAvatar")
userRouter.route("/updateCoverImage")

userRouter.route("/myCommunityEvents")
userRouter.route("/myStories") 
userRouter.route("/myCampaigns")


module.exports = { userRouter } ;