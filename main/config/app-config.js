const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const errorMiddleware = require("../middleware/error-middleware");
const router = require("../routes/base-router");

module.exports = appConfig = (app) => {
    app.use(bodyParser.json())
    app.use(cors());
    app.use(cookieParser());
    app.use('/api', router)
    app.use(errorMiddleware);
    return app;
}