const express = require("express");
const AppRouter = require("./routes/AppRouter");
// heroku setup
///////////////
const path = require("path");

// dependenices
///////////////
const logger = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const connection = require("./db/connection");
//  middleware dependencies
///////////////

const PORT = process.env.PORT || 3002;
//  Setting the port
////////////////////

const app = express();
// Set app equal to express instance
////////////////////////////////////

app.use(logger("dev"));
app.use(helmet({ contentSecurityPolicy: false }));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "client", "build")));

app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "client", "build", "index.html"))
);

app.disable("X-Powered-By");
app.get("/", (req, res) => res.send({ msg: "Server Working" }));
app.use("/api", AppRouter);
//  defining the Routes
//////////////////////

app.listen(PORT, async () => {
  try {
    await connection;
    console.log("Database Connected");
    console.log(`Express server listening on port ${PORT}`);
  } catch (error) {
    throw new Error("Error with Connection");
  }
});
