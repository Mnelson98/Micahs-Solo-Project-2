const mongoose = require('mongoose');


const ToDoSchema = mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    text: {
        type: String, 
        required: true
    },
    complete: {
        type: Boolean,
        default: false
    },
    timestamp: {
        type: String,
        default: Date.now()
    }
});

const Todo = mongoose.model("ToDo", ToDoSchema);

module.exports = Todo;