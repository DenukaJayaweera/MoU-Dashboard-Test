const config = require('../config/databaseConfig');
const connection = config.connection; //connect to the database

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  connection.query(
    'SELECT user.first_name,user.last_name,role.role_name FROM user,role where role.role_id = user.role_id',
    (err, result) => {
      if (err) return res.status(500).send('Database Failure');
      res.send(result);
    }
  );
});

module.exports = router;
