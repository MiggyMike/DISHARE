const AppRouter = require("./routes/AppRouter");

const express = require("express");
// dependenices
///////////////
const logger = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const connection = require("./db/connection");
//  middleware dependencies
///////////////

const PORT = process.env.PORT || 3000;
//  Setting the port
////////////////////

const app = express();
// Set app equal to express instance
////////////////////////////////////

app.use(logger("dev"));
app.use(helmet())
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.disable("X-Powered-By");
app.get("/", (req, res) => res.send({ msg: "Server Working" }));
app.use('/api', AppRouter)
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
