const Router = require("express");
const appController = require("../controllers/app-controller");

const appRouter = new Router();

appRouter.post('/transfer', appController.dealTransfer);

appRouter.get('/deals', appController.getDeals);

appRouter.post('/integration', appController.addIntegration);

module.exports = appRouter;