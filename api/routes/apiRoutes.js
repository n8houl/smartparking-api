'use strict';
module.exports = function(app) {
  var spotList = require('../controllers/apiController');

  app.route('/spots/:garage').get(spotList.list_all_spots).post(verifyToken, spotList.create_a_spot);
  app.route('/spots/:garage/:spotId').get(spotList.read_a_spot).put(verifyToken, spotList.update_a_spot).delete(verifyToken, spotList.delete_a_spot);
  app.route('/locations/:garage').get(spotList.get_location).post(verifyToken, spotList.add_location).put(verifyToken, spotList.update_location).delete(verifyToken, spotList.delete_location);
  app.route('/api/login').get(spotList.login);

  function verifyToken(req, res, next){
    const bearerHeader = req.headers['authorization'];
    if(typeof bearerHeader !== 'undefined') {
      const bearer = bearerHeader.split(' ');
      const bearerToken = bearer[1];

      req.token = bearerToken;

      next();
    } else {
      res.sendStatus(403);
    }
  }
};
