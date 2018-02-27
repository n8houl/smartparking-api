'use strict';

var mongoose = require('mongoose');
var schemaDict = {};
schemaDict['A'] = mongoose.model('SpotsA');
schemaDict['B'] = mongoose.model('SpotsB');
schemaDict['C'] = mongoose.model('SpotsC');
schemaDict['D'] = mongoose.model('SpotsD');
schemaDict['H'] = mongoose.model('SpotsH');
schemaDict['I'] = mongoose.model('SpotsI');
schemaDict['Libra'] = mongoose.model('SpotsLibra');
schemaDict['Test'] = mongoose.model('SpotsTest');

exports.list_all_spots = function(req, res) {
  var Spot = schemaDict[req.params.garage];

  Spot.find({}, function(err, spot) {
    if(err)
      res.send(err);
    res.json(spot);
  });
};

exports.create_a_spot = function(req, res) {
  var Spot = schemaDict[req.params.garage];
  var new_spot = new Spot(req.body);
  new_spot.save(function(err, spot) {
    if(err)
      res.send(err);
    res.json(spot);
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
  var Spot = schemaDict[req.params.garage];
  Spot.findOneAndUpdate({name: 'sensor_' + req.params.spotId + '_garage' + req.params.garage.toLowerCase()}, req.body, {new: true}, function(err, spot) {
    if(err)
      res.send(err);
    res.json(spot);
  });
};

exports.delete_a_spot = function(req, res) {
  var Spot = schemaDict[req.params.garage];
  Spot.remove({name: 'sensor_' + req.params.spotId + '_garage' + req.params.garage.toLowerCase()}, function(err, spot) {
    if(err)
      res.send(err);
    res.json({message: 'Spot removed successfully'});
  });
};
