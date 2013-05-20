var express = require('express');

var app = express();

app.configure(function () {
    app.use(express.logger('dev'));     /* 'default', 'short', 'tiny', 'dev' */
    app.use(express.bodyParser());
    app.use(express.cookieParser());
    app.use(express.static(path.join(__dirname, 'app')));
});

app.listen(3000);
console.log('Listening on port 3000...');
