var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Spot = require('./api/models/apiModel'),
  bodyParser = require('body-parser'),
  jwt = require('jsonwebtoken');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/Garages');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var routes = require('./api/routes/apiRoutes');
routes(app);


app.listen(port);

console.log('API Server started on: ' + port);
