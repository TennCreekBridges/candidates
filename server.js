// import express
const express = require('express');

// add PORT designation and the APP expression
const PORT = process.env.PORT || 3001;
const app = express();

// add Express.js middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// test Express.js connection via GET route
app.get('/', (req, res) => {
    res.json({
        message: 'It works, snitches!!'
    });
});

// default response for any other (not found) request
app.use((req, res) => {
    res.status(404).end();
});



// connection function
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});