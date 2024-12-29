const Router = require("express") ;
const campaignRouter = Router() ;

campaignRouter.route("/createCampaign")
campaignRouter.route("/joinCampaign")

module.exports = { campaignRouter } ;