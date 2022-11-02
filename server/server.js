require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const connection = require("./DB");

//import routers by creating constant variables
const orderRouter = require("./Routes/orderRoutes");

// database connection
connection();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// routes
app.use("/api/order", orderRouter);

const port = process.env.PORT || 3001;

app.listen(port, (err) => {
  if (err) console.log("Error ocuured in starting the server:", err);
  console.log(`DevX Server is listening on port ${port}...`);
});
