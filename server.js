var express = require('express');
var fs = require('fs');

var app = express();
var indexhtml = fs.readFileSync('app/index.html').toString();

app.configure(function () {
    app.use(express.logger('dev'));     /* 'default', 'short', 'tiny', 'dev' */
    app.use(express.bodyParser());
    app.use(express.cookieParser());
    app.use(express.static(__dirname + '/app'));
    app.use(express.favicon(__dirname + 'app/favicon.ico'));
});

app.get('/', function(req, res){
	res.send(indexhtml);
});

app.listen(3000);
console.log('Listening on port 3000...');
