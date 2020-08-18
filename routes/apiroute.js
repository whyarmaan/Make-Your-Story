//* Import Statements!
const express = require("express");
const router = express.Router();
const models = require("../models/models");

//* Trail Route
router.get("/", (req, res) => {
  res.json({
    message: "You Are At The Index Page!",
  });
});

//* Fetch All Stories!
router.get("/stories", function (req, res) {
  models.find(function (err, doc) {
    if (err) {
      //* Listening for errors And if there are any errors then we gonna send a response of 404 and a json file along with the response!

      res.status(400);
      res.json({
        err,
      });
    } else {
      //* And if there arent any sort of errors then we send the users a json response with the stories array!
      res.json({
        stories: doc,
      });
    }
  });
});

//* Post New Stories
router.post("/new/story", (req, res) => {
  //* Deconstructing The Request User Sent!

  const story = new models({
    Author: req.body.author,
    Title: req.body.title,
    Description: req.body.description,
    Story: req.body.story,
  });

  //* Saving The Story
  story.save(function (err, doc) {
    //* Checking For Errors

    if (err) {
      //* Setting The Status Code to 404 Denoting Some Errors!
      res.status(404);
      res.json({
        error: err.message,
      });
    } else {
      //* If there aint any errors then we gonna send the users a json response with the new document!
      res.json({
        Status: {
          doc,
        },
      });
    }
  });
});

//* Exporting The Router!
module.exports = router;
