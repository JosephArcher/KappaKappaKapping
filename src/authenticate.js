var express = require('express');
import pg from 'pg';
var bCrypt = require('bcrypt-nodejs');
var router = express.Router();
var bodyParser = require('body-parser');
let conString = 'postgres://justin:swag@10.10.7.182/transfer';
router.use(bodyParser.json());

module.exports = function(passport){

    router.get('/success', function(req, res){
        res.send({state: 'success', user: req.user ? req.user : null});
    });

    router.get('/failure', function(req, res){
        res.send({state: 'failure', user: null, message: "Invalid username or password"});
    });

    // log in
    //router.post('/login', passport.authenticate('login', function(req, res) {
    //	//res.redirect('/login');
    //}));

    router.post('/login', function(req,res) {
        pg.connect(conString, function(err, client, done) {
          var user = req.body.user;
          var password = req.body.password;
          console.log("submitted password: " + password);
          var results = [];
          if (err) {
            done();
            console.log(err);
            return res.status(500).json({success: false, data: err});
          }

          var query = client.query('SELECT password, is_admin from people where user_id = $1',
            [user]);

          query.on('row', function (row) {
            results.push(row);
          });

          query.on('end', function () {
            if (results.length > 0) {
              if (isValidPassword(password, results[0].password)) {
                // valid user
                console.log("its a match");
                //console.log(res);
                res.send({user: user, admin: results[0].is_admin});
              } else {
                console.log("not a match");
                // return error
                return res.status(401).json({success: false, data: err});
              }
            } else {
              // user not found
              console.log("not a match");
              // return error
              return res.status(401).json({success: false, data: err});
            }
          });
        });
    });

    // sign up
    router.post('/signup', function(req, res) {
        console.log("we're posting for signup.");
        var _first_name = req.body.fn;
        var _last_name = req.body.ln;
        var _userId = req.body.us;
        var _password = req.body.pw;
        var _phone_number = req.body.pn;
        var _email = req.body.em;
        var _school_id = req.body.cs;
        var _intended_start_date = req.body.sd;
        var _intended_major = req.body.ma;

        // look at db to see if user exists (get request)
        // if user exists, done
        // if user doesn't exit, add user to database (post request)
        // redirect to login page after


        // check if the user already exists
        pg.connect(conString, function(err, client, done) {
          var handleError = function(err) {
            // no error occurred, continue with the request
            if(!err) return false;

            if(client){
              done(client);
            }
            res.end('An error occurred');
            return true;
          };
          if (err) {
            done();
            console.log(err);
            return res.status(500).json({success: false, data: err});
          }
          console.log("In pgconnect in passport-init");

          client.query('INSERT INTO people (user_id, password, is_admin) values ($1, $2, $3)', [_userId, createHash(_password), false], function(err, result) {
            if (handleError(err)) {
              // display message user could not be added
              console.log("Error entering into people.");
              return;
            }
          });

          client.query("INSERT INTO students(user_id, school_id, first_name, last_name, email,  phone_number, intended_major, intended_start_date)"
            + "VALUES($1, $2, $3, $4, $5, $6, $7, $8)", [_userId, _school_id, _first_name, _last_name, _email, _phone_number, _intended_major, _intended_start_date],
          function(err, result) {
            if (handleError(err)) {
              console.log("Error entering into students.");
              return;
            }
          });

        });

        res.send();
    });

    // log out
    router.get('/signout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

  router.post('/update', function(req, res) {
    var user = req.body.user;
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var email = req.body.email;
    var phone = req.body.phone;
    var major = req.body.major;
    var startDate = req.body.startDate;

    console.log("In /update. user: " + user);
    if (user === null) {

      return;
    }

    pg.connect(conString, function(err, client, done) {
      var handleError = function(err) {
        // no error occurred, continue with the request
        if(!err) return false;

        if(client){
          done(client);
        }
        res.end('An error occurred');
        return true;
      };

      if (err) {
        done();
        console.log(err);
        return res.status(500).json({success: false, data: err});
      }

      if (firstName != "") {
        client.query('update students set first_name = $1 where user_id = $2', [firstName, user],
          function(err, result) {
            if (handleError(err)) {
              return;
            }
          });
      }

      if (lastName != "") {
        client.query('update students set last_name = $1 where user_id = $2', [lastName, user],
          function(err, result) {
            if (handleError(err)) {
              return;
            }
          });
      }

      if (email != "") {
        client.query('update students set email = $1 where user_id = $2', [email, user],
          function(err, result) {
            if (handleError(err)) {
              return;
            }
          });
      }

      if (phone != "") {
        client.query('update students set phone_number = $1 where user_id = $2', [phone, user],
          function(err, result) {
            if (handleError(err)) {
              return;
            }
          });
      }

      if (major != "") {
        client.query('update students set intended_major = $1 where user_id = $2', [major, user],
          function(err, result) {
            if (handleError(err)) {
              return;
            }
          });
      }

      if (startDate != "") {
        client.query('update students set intended_start_date = $1 where user_id = $2', [startDate, user],
          function(err, result) {
            if (handleError(err)) {
              return;
            }
          });
      }
    });
  });

    var isValidPassword = function(string, hash){
      return bCrypt.compareSync(string, hash);
    };

    var createHash = function(password){
      return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
    };

    return router;
};
