var express = require('express');
var fs = require('fs');

var app = express();
var indexhtml = fs.readFileSync('app/index.html').toString();
var ngjs = fs.readFileSync('app/components/angular/angular.js').toString();
var ngresource = fs.readFileSync('app/components/angular-resource/angular-resource.js').toString();
var ngcookies = fs.readFileSync('app/components/angular-cookies/angular-cookies.js').toString();
var ngsanitize = fs.readFileSync('app/components/angular-sanitize/angular-sanitize.js').toString();
var nggmaps = fs.readFileSync('app/components/angular-googlemaps/angular-googlemaps.js').toString();
var appjs = fs.readFileSync('app/scripts/app.js').toString();
var mainjs = fs.readFileSync('app/scripts/controllers/main.js').toString();
var bootstrapcss = fs.readFileSync('app/styles/bootstrap.css').toString();
var maincss = fs.readFileSync('app/styles/main.css').toString();
var navbarhtml = fs.readFileSync('app/views/partials/navbar.html').toString();
var gmaphtml = fs.readFileSync('app/views/partials/google-map.html').toString();
var lightbarhtml = fs.readFileSync('app/views/partials/lightbar.html').toString();
var mainhtml = fs.readFileSync('app/views/main.html').toString();


app.configure(function () {
    app.use(express.logger('dev'));     /* 'default', 'short', 'tiny', 'dev' */
    app.use(express.bodyParser());
    app.use(express.cookieParser());
    app.use(express.static(__dirname + 'app'));
    app.use(express.favicon(__dirname + '/favicon.ico')); 
});

app.get('/index.html', function(req, res){
	res.send(indexhtml);
});

app.get('/components/angular/angular.js', function(req, res){
	res.header("Content-type", "text/javascript");
	res.send(ngjs);
});
app.get('/components/angular-resource/angular-resource.js', function(req, res){
	res.header("Content-type", "text/javascript");
	res.send(ngresource);
});
app.get('/components/angular-cookies/angular-cookies.js', function(req, res){
	res.header("Content-type", "text/javascript");
	res.send(ngcookies);
});
app.get('/components/angular-sanitize/angular-sanitize.js', function(req, res){
	res.header("Content-type", "text/javascript");
	res.send(ngsanitize);
});
app.get('/components/angular-googlemaps/angular-googlemaps.js', function(req, res){
	res.header("Content-type", "text/javascript");
	res.send(nggmaps);
});
app.get('/scripts/app.js', function(req, res){
	res.header("Content-type", "text/javascript");
	res.send(appjs);
});
app.get('/scripts/controllers/main.js', function(req, res){
	res.header("Content-type", "text/javascript");
	res.send(mainjs);
});
app.get('/styles/bootstrap.css', function(req, res){
	res.header("Content-type", "text/css");
	res.send(bootstrapcss);
});
app.get('/styles/main.css', function(req, res){
	res.header("Content-type", "text/css");
	res.send(maincss);
});
app.get('/views/partials/navbar.html', function(req, res){
	res.send(navbarhtml);
});
app.get('/views/partials/google-map.html', function(req, res){
	res.send(gmaphtml);
});
app.get('/views/partials/lightbar.html', function(req, res){
	res.send(lightbarhtml);
});
app.get('/views/main.html', function(req, res){
	res.send(mainhtml);
});


app.listen(3000);
console.log('Listening on port 3000...');
