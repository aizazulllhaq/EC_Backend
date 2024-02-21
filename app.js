require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const passport = require('passport');
const homeRouter = require('./routes/routes');

// dbConnection




// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());





// Router
app.use(homeRouter.router);




// Server Listening
app.listen(process.env.PORT, () => {
    console.log(`Server Listening At : http://localhost:${process.env.PORT}`)
})