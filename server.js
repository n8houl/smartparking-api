var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Spot = require('./api/models/apiModel'),
  bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://n8houl:nah11796@seniordesign2-ssssl.mongodb.net/Garages');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var routes = require('./api/routes/apiRoutes');
routes(app);


app.listen(port);

console.log('API Server started on: ' + port);
