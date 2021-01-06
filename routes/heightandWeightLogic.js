const express = require("express");
const Joi = require("joi");

const router = express.Router();
const FailureResponse = require("../public/responces/response.failure.json");
const SuccessResponse = require("../public/responces/response.success.json");
const HeightAndWeight = require("../public/data/HeightAndWeight");

router.get("/", (req, res) => {
  let success_200 = SuccessResponse.success_200;
  success_200.message = "No Data";
  success_200.data.items = [];
  res.send(success_200);
});

router.post("/", (req, res) => {
  const { error } = validateInput(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const data = {
    height: req.body.height,
    weight: req.body.weight,
  };
  var returnData = HeightAndWeight(data.height, data.weight);
  let success_200 = SuccessResponse.success_200;
  success_200.message = "Recommmended Sizes";
  success_200.data.items = returnData;
  res.send(success_200);
});

function validateInput(input) {
  const schema = {
    height: Joi.number().required(),
    weight: Joi.number().required(),
  };
  return Joi.validate(input, schema);
}

module.exports = router;
