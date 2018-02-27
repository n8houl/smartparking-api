'use strict';
module.exports = function(app) {
  var spotList = require('../controllers/apiController');

  app.route('/spots/:garage').get(spotList.list_all_spots).post(spotList.create_a_spot);
  app.route('/spots/:garage/:spotId').get(spotList.read_a_spot).put(spotList.update_a_spot).delete(spotList.delete_a_spot);
};