'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SchemaLocation = new Schema({ 
  garage: {
	type: String,
	required: 'Enter name of garage'
  },
  latitude: {
	type: Number,
	required: 'Enter latitude for garage'
  },
  longitude: {
	type: Number,
	required: 'Enter longitude for garage'
  }
}, {collection: 'Locations'});

var SchemaA = new Schema({
  name: {
    type: String,
    required: 'Enter name of sensor'
  },
  occupied: {
    type: Boolean,
    default: false
  }
}, {collection: 'GarageA'});

var SchemaB = new Schema({
  name: {
    type: String,
    required: 'Enter name of sensor'
  },
  occupied: {
    type: Boolean,
    default: false
  }
}, {collection: 'GarageB'});

var SchemaC = new Schema({
  name: {
    type: String,
    required: 'Enter name of sensor'
  },
  occupied: {
    type: Boolean,
    default: false
  }
}, {collection: 'GarageC'});

var SchemaD = new Schema({
  name: {
    type: String,
    required: 'Enter name of sensor'
  },
  occupied: {
    type: Boolean,
    default: false
  }
}, {collection: 'GarageD'});

var SchemaH = new Schema({
  name: {
    type: String,
    required: 'Enter name of sensor'
  },
  occupied: {
    type: Boolean,
    default: false
  }
}, {collection: 'GarageH'});

var SchemaI = new Schema({
  name: {
    type: String,
    required: 'Enter name of sensor'
  },
  occupied: {
    type: Boolean,
    default: false
  }
}, {collection: 'GarageI'});

var SchemaLibra = new Schema({
  name: {
    type: String,
    required: 'Enter name of sensor'
  },
  occupied: {
    type: Boolean,
    default: false
  }
}, {collection: 'GarageLibra'});

var SchemaTest = new Schema({
  name: {
    type: String,
    required: 'Enter name of sensor'
  },
  occupied: {
    type: Boolean,
    default: false
  }
}, {collection: 'GarageTest'});

module.exports = mongoose.model('SpotsA', SchemaA);
module.exports = mongoose.model('SpotsB', SchemaB);
module.exports = mongoose.model('SpotsC', SchemaC);
module.exports = mongoose.model('SpotsD', SchemaD);
module.exports = mongoose.model('SpotsH', SchemaH);
module.exports = mongoose.model('SpotsI', SchemaI);
module.exports = mongoose.model('SpotsLibra', SchemaLibra);
module.exports = mongoose.model('SpotsTest', SchemaTest);
module.exports = mongoose.model('Location', SchemaLocation);
