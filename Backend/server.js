const express = require("express");
// const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const userController= require('./Controllers/signup');

const port = 5000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/test')
  .then(() => {
    console.log("DB connected successfully");
  })
  .catch((err) => {
    console.log("Connection failed", err);
  });



app.post('/signup', userController.signup);

app.listen(port, () => {
  console.log(`server successfully running in ${port}`);
});
