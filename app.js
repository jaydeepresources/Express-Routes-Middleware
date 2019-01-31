var express = require('express');

var app = express();

app.get('/', function(req, res){    
    res.send("Welcome to Express");
});

app.use('/', require('./users-routes'));
app.use('/', require('./posts-routes'));

app.listen(3000, function () {
    console.log('Listening on port 3000!');
});