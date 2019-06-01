// import files and packages up here
const express = require('express');
const data = require('./data.json');
// create your express server below
var app = express();

app.get('/', function(req,res){
    console.log('Receiving GET request for: /');
    res.writeHead(200,{'Content-Type' : 'text/html'});
    res.end('It\'s working :)');
});

app.get('/data', function(req,res){
    console.log('Receiving GET request for: /data');
    res.json(data);
});

// add your routes and middleware below

// finally export the express application
module.exports = app;
