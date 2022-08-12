const Router = require('express');
const appRouter = require('./app-router');

const router = new Router();

router.use("/app", appRouter);

module.exports = router;