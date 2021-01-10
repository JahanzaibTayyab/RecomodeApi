const express = require("express");
const Joi = require("joi");

const router = express.Router();
const FailureResponse = require("../public/responces/response.failure.json");
const SuccessResponse = require("../public/responces/response.success.json");
const Colors = require("../public/data/SeasonColors");

router.get("/", (req, res) => {
  var colors = Colors();
  let success_200 = SuccessResponse.success_200;
  success_200.message = "List of all Seasons Colors!";
  success_200.data.items = colors;
  res.send(success_200);
});

module.exports = router;
