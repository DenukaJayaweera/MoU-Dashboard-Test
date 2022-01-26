const config = require('../config/databaseConfig');
const connection = config.connection; //connect to the database

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  connection.query('SELECT * FROM Faculty', (err, result) => {
    if (err) return res.status(500).send('Database Failure');
    res.send(result);
  });
});

module.exports = router;
