var path = require('path');
var express = require('express');
var swig = require('swig');

var app = express();
var port = 3000;

//sets the listening port to 3000, if there is none configured as an environment variable
app.set('port', process.env.PORT || port);
//Sets up Swig as the templating engine


app.set('views', 'views/');
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
swig.setDefaults({
    cache: false ,
    autoescape: false
});

app.use(express.static( path.join(__dirname,'..', 'dist', 'dev')) );


app.get('/', function(req, res){

    //call to controller
    var data = {
        qty: 5,
        names: ['a', 'b', 'c', 'd']
    };

    res.render('index', data);
});

app.listen(port, function(){
    console.log('listening on port ', port);
});


