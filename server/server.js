require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const connection = require("./DB");

//import routers by creating constant variables
const orderRouter = require("./Routes/orderRoutes");
const itemRouter = require("./Routes/itemRoutes");

// database connection
connection();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// routes
app.use("/api/order", orderRouter);
app.use("/api/item", itemRouter);

const port = process.env.PORT || 3001;

app.listen(port, (err) => {
  if (err) console.log("Error ocuured in starting the server:", err);
  console.log(`Fineline Server is listening on port ${port}...`);
});
