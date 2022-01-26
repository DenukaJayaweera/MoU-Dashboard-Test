const express = require('express');
const app = express();

const cors = require('cors');
const bodyparser = require('body-parser');

app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cors());

const country = require('./Routes/Country');
const faculty = require('./Routes/Faculty');

app.use('/country', country); //url
app.use('/faculty', faculty);
// Defining the PORT number

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Listening to port ${port}...`);
});
