var path = require('path');
var express = require('express');

var app = express();
var port = 3000;

//sets the listening port to 3000, if there is none configured as an environment variable
app.set('port', process.env.PORT || port);

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
 });


app.use(express.static( path.join(__dirname,'..', 'dist', 'dev')) );

app.listen(port, function(){
    console.log('listening on port ', port);
});

app.get('/people', function(req, res){
    res.send(people);
});



var people = [
    {
        name: 'andre'
    },
    {
        name: 'brian'
    },
    {
        name: 'nuno'
    },
];
