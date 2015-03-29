var db = require('../db');
//establish connection

module.exports = {
  messages: {

    //query from mysql
    get: function (req, cb) {
      console.log('messages get')
      var queryString = "select Messages.id, Messages.content, Messages.id_Rooms,\
      Messages.id_Users from Messages left outer join Users on (Messages.id_Users = \
        Users.id) order by Messages.id desc";
      db.query(queryString, function(err, data){

        cb(err,data);
      });
    },

    post: function (req, cb) {
      console.log('req', req)
      var queryString = "insert into Messages(content, id_Users, id_Rooms) \
      values(?, (select id from users where username = ? limit 1), (select id from rooms where roomname = ? limit 1))";
      db.query(queryString, req, function(err, res){
        console.log('amazig results', res);
        console.log('amazing error', err)
        cb(res);
      })
    }
  },

  users: {
    // Ditto as above.
    get: function (cb) {
      var queryString = "select * from Users"; //Select all Users
      db.query(queryString, function(err, results) {
        cb(results);
      });
    },
    post: function (req, cb) {
      var queryString = "insert into Users(username) values(?)"; //Select all Users
      db.query(queryString, req, function(err, results) {
        cb(results);
      });
    }
  }
};

