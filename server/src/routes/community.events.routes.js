const Router = require("express") ;
const eventsRouter = Router() ;

eventsRouter.route("/createCommunityEvent").post() ;
eventsRouter.route("/joinCommunityEvent").post() ;

module.exports = { eventsRouter } ;