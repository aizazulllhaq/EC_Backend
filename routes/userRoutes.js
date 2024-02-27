const { Router } = require('express');
const userController = require('../controllers/userController');
const passport = require('passport');
const userRouter = Router();
const { isLoggedIn } = require("../middlewares/isLoggedIn");


// /users/
userRouter
    .get('/new', userController.signUpPage)
    .post('/new', userController.signUp)
    .get('/login', userController.loginPage)
    .post('/login', passport.authenticate("local", {
        failureRedirect: "/users/login",
    }), userController.login)
    .get("/logout", isLoggedIn, userController.logout)
    .get('/:id', isLoggedIn, userController.getUserDetail)


exports.router = userRouter;