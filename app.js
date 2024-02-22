require('dotenv').config();
const express = require('express');
const app = express();
const passport = require('passport');
const homeRouter = require('./routes/homeRoutes');
const userRouter = require('./routes/userRoutes');
const { dbConnect } = require('./utils/dbConnect');
const { User } = require('./models/userModel');
const session = require('express-session');

// dbConnection
dbConnect();


// Passport-Authentication 
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

const sessionOptions = {
    secret: process.env.SECRET,
    resave: false,
    saveUnintialized: true
}

app.use(session(sessionOptions));
app.use(passport.initialize());
app.use(passport.session());


// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Router
app.use(homeRouter.router);
app.use("/users", userRouter.router);


// Server Listening
app.listen(process.env.PORT, () => {
    console.log(`Server Listening At : http://localhost:${process.env.PORT}`)
})