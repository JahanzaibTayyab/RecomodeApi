const express = require("express");
const Joi = require("joi");

const router = express.Router();
const FailureResponse = require("../public/responces/response.failure.json");
const SuccessResponse = require("../public/responces/response.success.json");
const ShirtColors = require("../public/data/ShirtColors");

router.get("/", (req, res) => {
  var colors = ShirtColors("#f3c6a5");
  let success_200 = SuccessResponse.success_200;
  success_200.message = "List of all Shirts Color!";
  success_200.data.items = [colors];
  res.send(success_200);
});

router.post("/", (req, res) => {
  const { error } = validateColor(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const color = {
    name: req.body.name,
  };
  var colors = ShirtColors(color.name);
  let success_200 = SuccessResponse.success_200;
  success_200.message = "List of all Recommended Shirts Colors!";
  success_200.data.items = colors;
  res.send(success_200);
});

function validateColor(color) {
  const schema = {
    name: Joi.string().min(3).required(),
  };
  return Joi.validate(color, schema);
}

module.exports = router;
