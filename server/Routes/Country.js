const config = require('../config/databaseConfig');
const connection = config.connection;

const express = require('express');
const router = express.Router();

//localhost/country/insert
router.post('/insert', (req, res) => {
  const countryName = req.body.countryName;
  const countryCode = req.body.countryCode;
  console.log(countryName);

  connection.query(
    'INSERT INTO Country(CountryName,CountryCode) VALUES (?,?)',
    [countryName, countryCode],
    (err, result) => {
      res.send('entry successful');
    }
  );
});

router.get('/', (req, res) => {
  connection.query('SELECT * FROM Country', (err, result) => {
    if (err) return res.status(500).send('Database Failure');
    res.send(result);
  });
});

module.exports = router;
