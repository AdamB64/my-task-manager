require('dotenv').config();
const express = require('express');
const Task = require('./mongo/Tasks.js');

const app = express();
const PORT = process.env.PORT || 3001;

// Define your routes and API endpoints here

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
