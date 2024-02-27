const { Router } = require('express');
const adminRouter = Router();
const adminController = require('../controllers/adminController');
const { isLoggedIn } = require('../middlewares/isLoggedIn');


adminRouter
    .get('/users', isLoggedIn, adminController.getAllUsers);

exports.router = adminRouter;