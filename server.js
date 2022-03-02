// import express
const express = require('express');
// import mysql2 package that has been installed to node_modules
const mysql = require('mysql2');

// add PORT designation and the APP expression
const PORT = process.env.PORT || 3001;
const app = express();

// add Express.js middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// connect to mysql database
const db = mysql.createConnection (
    {
        host: 'localhost',
        // your mysql username,
        user: 'root',
        // your mysql password
        password: 'PicoS123!',
        database: 'election'
    });
    // console.log('Connected to the election database. Snitches.')

// default response for any other (not found) request
app.use((req, res) => {
    res.status(404).end();
});

db.query(`SELECT * FROM candidates`, (err, rows) => {
    console.log(rows);
});

// test Express.js connection via GET route
// app.get('/', (req, res) => {
//     res.json({
//         message: 'It worrrks!!'
//     });
// });

// Start server after DB connection
db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  });