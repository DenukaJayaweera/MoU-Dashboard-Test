const config = require('../config/databaseConfig');
const connection = config.connection;

const express = require('express');
const router = express.Router();

router.post('/insert', (req, res) => {
  const CountryName = req.body.countryName;
  const CountryCode = req.body.countryCode;

  connection.query(
    'INSERT INTO Country(CountryName,CountryCode) VALUES (?,?)',
    [CountryName, CountryCode],
    (err, result) => {
      res.send('entry successful');
    }
  );
});

module.exports = router;
