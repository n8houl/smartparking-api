'use strict';

var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var schemaDict = {};
schemaDict['A'] = mongoose.model('SpotsA');
schemaDict['B'] = mongoose.model('SpotsB');
schemaDict['C'] = mongoose.model('SpotsC');
schemaDict['D'] = mongoose.model('SpotsD');
schemaDict['H'] = mongoose.model('SpotsH');
schemaDict['I'] = mongoose.model('SpotsI');
schemaDict['Libra'] = mongoose.model('SpotsLibra');
schemaDict['Test'] = mongoose.model('SpotsTest');
var Loc = mongoose.model('Location');
var User = mongoose.model('User');

// exports.add_user = function(req, res) {
//   var new_user = new User(req.body);
//
//   new_user.save(function(err, user) {
//     if(err)
//       res.send(err);
//     res.json(user);
//   });
// };
//
// exports.get_user = function(req, res) {
//   User.find({username: req.params.un}, function(err, user) {
//     if(err)
//       res.send(err);
//     res.json(user);
//   });
// };

exports.login = function(req, res) {
  User.findOne({username: req.params.un}, function(err, user) {
    if(err) {
      res.send(err);
    }

    jwt.sign({user: user}, 'secretkey', (err, token) => {
      if(err)
        res.send(err);
      res.json({
        token: token
      });
    });
  });
};

exports.get_location = function(req, res) {
  Loc.find({garage: 'Garage' + req.params.garage}, function(err, loc) {
	if(err)
	  res.send(err);
	res.json(loc);
  });
};

exports.add_location = function(req, res) {
  jwt.verify(req.token, 'secretkey', (err, authData) => {
    if(err) {
      res.sendStatus(403);
    } else {
      console.log(authData);
      var new_loc = new Loc(req.body);
      new_loc.save(function(err, loc) {
      	if(err)
          res.send(err);
        res.json(loc);
      });
    }
  });
};

exports.update_location = function(req, res) {
  jwt.verify(req.token, 'secretkey', (err, authData) => {
    if(err) {
      res.sendStatus(403);
    } else {
      console.log(authData);
      Loc.findOneAndUpdate({garage: 'Garage' + req.params.garage}, req.body, {new: true}, function(err, loc) {
        if(err)
          res.send(err);
        res.json(loc);
      });
    }
  });
};

exports.delete_location = function(req, res) {
  jwt.verify(req.token, 'secretkey', (err, authData) => {
    if(err) {
      res.sendStatus(403);
    } else {
      console.log(authData);
      Loc.remove({garage: 'Garage' + req.params.garage}, function(err, loc) {
        if(err)
          res.send(err);
        res.json({message: 'Spot removed successfully'});
      });
    }
  });
};

exports.list_all_spots = function(req, res) {
  var Spot = schemaDict[req.params.garage];

  Spot.find({}, function(err, spot) {
    if(err)
      res.send(err);
    res.json(spot);
  });
};

exports.create_a_spot = function(req, res) {
  jwt.verify(req.token, 'secretkey', (err, authData) => {
    if(err) {
      res.sendStatus(403);
    } else {
      console.log(authData);
      var Spot = schemaDict[req.params.garage];
      var new_spot = new Spot(req.body);
      new_spot.save(function(err, spot) {
        if(err)
          res.send(err);
        res.json(spot);
      });
    }
  });
};

exports.read_a_spot = function(req, res) {
  var Spot = schemaDict[req.params.garage];
  Spot.findOne({name: 'sensor_' + req.params.spotId + '_garage' + req.params.garage.toLowerCase()}, function(err, spot) {
    if(err)
      res.send(err);
    res.json(spot);
  });
};

exports.update_a_spot = function(req, res) {
  jwt.verify(req.token, 'secretkey', (err, authData) => {
    if(err) {
      res.sendStatus(403);
    } else {
      console.log(authData);
      var Spot = schemaDict[req.params.garage];
      Spot.findOneAndUpdate({name: 'sensor_' + req.params.spotId + '_garage' + req.params.garage.toLowerCase()}, req.body, {new: true}, function(err, spot) {
        if(err)
          res.send(err);
        res.json(spot);
      });
    }
  });
};

exports.delete_a_spot = function(req, res) {
  jwt.verify(req.token, 'secretkey', (err, authData) => {
    if(err) {
      res.sendStatus(403);
    } else {
      console.log(authData);
      var Spot = schemaDict[req.params.garage];
      Spot.remove({name: 'sensor_' + req.params.spotId + '_garage' + req.params.garage.toLowerCase()}, function(err, spot) {
        if(err)
          res.send(err);
        res.json({message: 'Spot removed successfully'});
      });
    }
  });
};
