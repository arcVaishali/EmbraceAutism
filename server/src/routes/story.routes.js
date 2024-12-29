const Router = require("express") ;
const storyRouter = Router() ;

storyRouter.route("/createStory").post() ;
storyRouter.route("/readStory").get() ;

module.exports = { storyRouter } ;

