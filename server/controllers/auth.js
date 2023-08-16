const db = require('../models/todo');

const authController = {};

authController.register = async (req, res, next) => {
    try {
        // console.log(req.body);
        res.locals.test = 'Hello, I am here';
        return next();
    } catch (err) {
        return next({
            status: 404,
            message: 'this is an error',
        })
    }
}

module.exports = authController;