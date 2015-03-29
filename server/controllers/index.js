var models = require('../models');
var bluebird = require('bluebird');



module.exports = {
  messages: {
    //call this to get models
    get: function (req, res) {
      models.messages.get(req, function(err, result){
          if (!(err)){
            res.json(result);
          }
      });
    }, // a function which handles a get request for all messages
    post: function(req, res){
      var params = [ req.body["text"], req.body["username"], req.body["roomname"] ];
      models.messages.post(params, function(err, result){
        if (!(err)){
          res.json(result);
        }
      });
    }
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get( function(err,result) {
        req.json(result);
      });
    },
    post: function (req, res) {
        var params = [req.body["username"]];
          models.users.get( function(err,result) {
        req.json(result);
      });
    }
  }
};

