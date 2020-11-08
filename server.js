const { request } = require("express");

const express = require("express");
const mongoose = require("mongoose");
const nodemon = require("nodemon");
// dependenices
///////////////
const logger = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
//  middleware dependencies
///////////////

const PORT = process.env.PORT || 3000;
//  Setting the port
////////////////////

const app = express();
// Set app equal to express instance
////////////////////////////////////

app.use(logger("dev"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("AHT AHT... HELLO!");
});
//  defining the Route
//////////////////////

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});
