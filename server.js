var express = require('express');
var bodyParser = require('body-parser');


var bookCtrl = require('./controllers/bookCtrl.js');


var app = express();

app.use(bodyParser.json());

//Endpoints
app.post('/api/books/:isbn', bookCtrl.Create);


var port = 3000;
app.listen(port, function () {
  console.log('NSA link established on port: ' + port);
})
