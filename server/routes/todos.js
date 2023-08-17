const express = require('express');
const router = express.Router();
const Todo = require('../models/todo')
// const mongoose = require('mongoose');

// IMPORT CONTROLLER FUNCTIONS //
// const authController = require('../controllers/auth');
const { Collection } = require('mongoose');


// TODO POST ROUTE 
router.post('/', async (req, res) => { // <<<---- eventually will create tasks in the DB
    console.log('post route hit!!!')
    try {
        // MONGOOSE MODEL CALL //
        const todo = await Todo.create(req.body)
        console.log(todo)
        return res.status(200).json(todo)
    } catch (error) {
        console.log(error)
    }
})

router.delete('/done', async (req, res) => {
    console.log('delete route hit!!!')
    try {
        console.log('THIS IS REQUEST: ', req.body)
        return res.status(200)
    } catch (err) {
        console.log(err)
    }
});

module.exports = router; 