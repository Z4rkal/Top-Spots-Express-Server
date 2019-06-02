// import files and packages up here
const express = require('express');
const data = require('./data.json');
const morgan = require('morgan');

// create your express server below
var app = express();

//Tell express to use the morgan dev format for logging
app.use(morgan('dev'));

// add your routes and middleware below

//The server responds to get requests on the / route with the html file
app.get('/', function (req, res) {
    //console.log('Receiving GET request for: /');
    res.sendFile('index.html', { root: './app' });
});


//Route for getting the json
app.get('/data', function (req, res) {
    //console.log('Receiving GET request for: /data');
    res.json(data);
});

//Route for getting the style sheet
app.get('/style', function(req,res){
    //console.log('Receiving GET request for: ' + req.url);
    res.sendFile('style.css', { root: './app'});
});

//Route for getting the js file
app.get('/js', function(req,res){
    //console.log('Receiving GET request for: ' + req.url);    
    res.sendFile('main.js', { root: './app'});
});

//Any other route 404's
app.get('/*', function (req, res) {
    //console.log('Receiving GET request for an invalid path');
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 : File not found');
});

// finally export the express application
module.exports = app;
