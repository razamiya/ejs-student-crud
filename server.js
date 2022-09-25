// Require all module 
const express = require('express');
const dotenv = require('dotenv').config();
const colors = require('colors');
const ejs = require('ejs');
const ejsLayout = require('express-ejs-layouts');
const studentRoute = require('./routes/studentRoute') ;


// init express 
let app = express();


// Envirenment variable 
const PORT = process.env.PORT || 4000;

// manege json data and from data 
app.use(express.json())
app.use(express.urlencoded( {extended : false } ))


// Init ejs and ejs layout 
app.set('view engine', 'ejs');
app.use(ejsLayout);
app.set('layout', 'layouts/app')


// Static folder
app.use(express.static('public'))

// User Router 
app.use('/student', studentRoute)

// Server Listen 
app.listen(PORT, () => {
    console.log(`Your Server is Running on port ${PORT}`.bgYellow.black);
} )