const mongoose = require('./mongo.js');

const Taskschema = new mongoose.Schema({
    id: Number,
    title: String,
    completed: Boolean
});


const Task = mongoose.model('Tasks', Taskschema);

module.exports = Task;