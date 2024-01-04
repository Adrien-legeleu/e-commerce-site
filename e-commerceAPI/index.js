const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://ecommercenumber01:Adrien14.@ecommerce01.5lfw224.mongodb.net/"
  )
  .then(() => console.log("db connection succesfull"))
  .catch((err) => console.log(err));

app.listen(5000, () => {
  console.log("backend server is running");
});
