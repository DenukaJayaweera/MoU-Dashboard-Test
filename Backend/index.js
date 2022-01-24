const express = require('express');
const app = express();
const cors = require('cors');
const bodyparser = require('body-parser');

app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cors());

app.listen(3002, () => {
  console.log(`App connected`);
});

const country = require('./Routes/country');

app.use('/country', country);
