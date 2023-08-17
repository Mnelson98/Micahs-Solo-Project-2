const express = require('express');
const router = express.Router();
const Todo = require('../models/todo')
const taskController = require('../controllers/taskController')
// const mongoose = require('mongoose');

// IMPORT CONTROLLER FUNCTIONS //
// const authController = require('../controllers/auth');
const { Collection } = require('mongoose');


// TODO POST ROUTE 
router.post('/', taskController.addTask, (req, res) => {return res.status(200).json(res.locals.task)})

router.delete('/done', taskController.removeTask, async (req, res) => {return res.status(200).send('You\'re crushing it!')});


module.exports = router; 