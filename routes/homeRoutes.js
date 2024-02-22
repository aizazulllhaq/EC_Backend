const { Router } = require('express');
const homeRouter = Router();
const homeController = require('../controllers/homeController');
const { isLoggedIn } = require('../middlewares/isLoggedIn');


homeRouter
    .get('/', isLoggedIn, homeController.home);

exports.router = homeRouter;