const config = require('../config/databaseConfig');
const connection = config.connection;

const express = require('express');
const router = express.Router();

router.post('/form/insert', (req, res) => {
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

router.get('/', (req, res) => {
  connection.query('SELECT * FROM Country', (err, result) => {
    if (err) return res.status(500).send('Database Failure');
    res.send(result);
  });
});

module.exports = router;
