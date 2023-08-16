const express = require('express');
const router = express.Router();
const Todo = require('../models/todo')
// const mongoose = require('mongoose');

// IMPORT CONTROLLER FUNCTIONS //
const authController = require('../controllers/auth');

// router.get('/',
// authController.register,
// (req, res) => res.status(200).json(res.locals.test)
// );

router.get('/', async (req, res) => {
    const todos = await Todo.find();
    return res.json(todos);
});

//SET UP POST ROUTE
router.post('/', async (req, res) => {
//MONGOOSE CALLS
console.log(req.body)
console.log('post route hit!!!')
try {
    const todo = await Todo.create(req.body)
    res.status(200).send('We\'re good!')
} catch (error) {
    console.log(error)
}


})

module.exports = router; 