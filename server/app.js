// import files and packages up here
const express = require('express');
const data = require('./data.json');
// create your express server below
var app = express();


// add your routes and middleware below
app.get('/', function (req, res) {
    console.log('Receiving GET request for: /');
    res.sendFile('index.html', { root: './app' });
});

app.get('/data', function (req, res) {
    console.log('Receiving GET request for: /data');
    res.json(data);
});

app.get('/style', function(req,res){
    console.log('Receiving GET request for: ' + req.url);
    res.sendFile('style.css', { root: './app'});
});

app.get('/js', function(req,res){
    console.log('Receiving GET request for: ' + req.url);    
    res.sendFile('main.js', { root: './app'});
});

app.get('/*', function (req, res) {
    console.log('Receiving GET request for an invalid path');
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 : File not found');
});

// finally export the express application
module.exports = app;
