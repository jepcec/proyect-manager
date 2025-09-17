// ==============================================================================
// File: server/src/config/db.js
// Description: Database connection configuration using mysql2 and dotenv
// ==============================================================================
const mysql = require('mysql2');
require('dotenv').config();

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});

module.exports = pool.promise();