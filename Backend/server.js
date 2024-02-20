const express = require("express");

const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.send('Hey Bhagya!');
});

app.listen(port, () => {
  console.log(`server successfully running in ${port}`);
});
