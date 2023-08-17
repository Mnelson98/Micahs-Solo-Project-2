
const Todo = require('../models/todo')

const taskController = {};

taskController.addTask = async (req, res, next) => {
    try {
        const todo = await Todo.create(req.body)
        res.locals.task = todo;
        return next();
    } catch (err) {
        console.log(err);
        return next(err);
    }
}

taskController.removeTask = async (req, res, next) => {
    try {
    const id = req.headers.id;
    const removed = await Todo.deleteOne({ id: id })
    return next();
    } catch (err) {
        console.log(err);
        return next(err);
    }
}


module.exports = taskController;