const debug = require("debug")("app:startup");
//const config = require("config");
const morgan = require("morgan");
const helmet = require("helmet");
const Joi = require("joi");
const logger = require("./middleware/logger");
const courses = require("./routes/courses");
const recommendColors = require("./routes/recommendShirtColors");
const recommendPantsColors = require("./routes/recommendPantsColors");
const heightandWeightLOgic = require("./routes/heightandWeightLogic");
const recommendedSeasonColor = require("./routes/recommendedSeasonColor");
const home = require("./routes/home");
const express = require("express");
const app = express();

app.set("view engine", "pug");
app.set("views", "./views"); // default

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(helmet());
app.use(logger);

app.use("/v1/courses", courses);
app.use("/v1/recommend-shirts-colors", recommendColors);
app.use("/v1/recommend-pants-colors", recommendPantsColors);
app.use("/v1/height-and-weight", heightandWeightLOgic);
app.use("/v1/recommend-seaons-colors", recommendedSeasonColor);

app.use("/", home);

// Configuration
// console.log("Application Name: " + config.get("name"));
// console.log("Mail Server: " + config.get("mail.host"));
// console.log("Mail Password: " + config.get("mail.password"));

// if (app.get("env") === "development") {
//   app.use(morgan("tiny"));
//   debug("Morgan enabled...");
// }

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
