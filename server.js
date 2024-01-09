require('dotenv').config();
const express = require('express');
const Task = require('./mongo/Tasks.js');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3001;


// ...
app.use(cors({
    origin: 'http://localhost:3000', // replace with the origin of your client-side code
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type']
}));
app.use(bodyParser.json());

// Define your routes and API endpoints here

app.post('/tasks', (req, res) => {
    const { id, title, completed } = req.body;
    const newtask = new Task({
        id,
        title,
        completed
    });
    newtask.save()
        .then(newtask => {
            res.status(200).json({ 'task': 'task added successfully' });
        })
        .catch(err => {
            res.status(400).send('adding new task failed');
        });
});


app.get('/Alltasks', async (req, res) => {
    const tasks = await Task.find()
        .then(tasks => {
            res.json(tasks);
        })
        .catch(err => {
            console.log(err);
        });
});

app.put('/UpdateTask', async (req, res) => {
    const { id, completed } = req.body;
    console.log(id + " " + completed);
    const task = await Task.findById(id);
    task.completed = completed;
    task.save()
        .then(task => {
            res.json({ message: 'task updated' });
        })
        .catch(err => {
            res.status(400).send({ message: 'update not possible' });
        });
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
