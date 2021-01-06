const express = require("express");
const Joi = require("joi");

const router = express.Router();
const FailureResponse = require("../public/responces/response.failure.json");
const SuccessResponse = require("../public/responces/response.success.json");
const PantsColor = require("../public/data/PantColors");
const Colors = require("../public/data/Colors");

router.get("/", (req, res) => {
  var colors = Colors.pantsColors;
  let success_200 = SuccessResponse.success_200;
  success_200.message = "List of all Pant Colors!";
  success_200.data.items = [colors];
  res.send(success_200);
});

router.post("/", (req, res) => {
  const { error } = validateCourse(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  const color = {
    name: req.body.name,
  };
  var colors = PantsColor(color.name);
  let success_200 = SuccessResponse.success_200;
  success_200.message = "List of all Pant Recommended Colors!";
  success_200.data.items = colors;
  res.send(success_200);
});

function validateCourse(course) {
  const schema = {
    name: Joi.string().min(3).required(),
  };
  return Joi.validate(course, schema);
}

module.exports = router;
