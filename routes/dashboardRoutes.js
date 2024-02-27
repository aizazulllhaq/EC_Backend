const { Router } = require('express');
const homeRouter = Router();
const dashboardController = require('../controllers/dashboardController');
const { isLoggedIn } = require('../middlewares/isLoggedIn');


homeRouter
    .get('/dashboard', isLoggedIn, dashboardController.dashboard);

exports.router = homeRouter;