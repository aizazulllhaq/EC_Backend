require('dotenv').config();
const express = require('express');
const app = express();
const passport = require('passport');
const dashboardRouter = require('./routes/dashboardRoutes');
const userRouter = require('./routes/userRoutes');
const { dbConnect } = require('./utils/dbConnect');
const { User } = require('./models/userModel');
const session = require('express-session');
const path = require('path');
const adminRouter = require('./routes/adminRoutes');

// dbConnection
dbConnect();


// Passport-Authentication 
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

const sessionOptions = {
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
}

app.use(session(sessionOptions));
app.use(passport.initialize());
app.use(passport.session());


// Middlewares
app.use(express.static(path.resolve(__dirname, process.env.PUBLIC)))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Router
app.use(adminRouter.router);
app.use(dashboardRouter.router);
app.use("/users", userRouter.router);

// Server Listening
app.listen(process.env.PORT, () => {
    console.log(`Server Listening At : http://localhost:${process.env.PORT}`)
})