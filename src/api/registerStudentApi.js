/**
 * Created by ahoch 11/8/15
 */
import pg from 'pg';
import Router from 'express';

let router = new Router();
let conString = "postgres://postgres:ja5125@localhost/postgres";

//var results = [];

// // Grab data from the URL parameters
// var id = req.params.todo_id;

// // Grab data from http request
// var data = {text: req.body.text, complete: req.body.complete};

let _userId = "testtest26";
let _password = "kappa";
//Will always be false!
let _is_admin = "false";
let _last_sign_in = "11-11-11";

let _school_id = 'DCC0000001';
let _first_name = 'Joe';
let _last_name = 'Blow';
let _email = 'kappa@gmail.kappa';
let _address = '10 Main Street';
let _phone_number = '1234567890';
let _birthday = '10-10-10';
let _intended_start_date = '10-10-10';


// If the route matches /api/getTransferSchools...
router.get('/', function(req, res) {
  // Set up the connection
  var results = [];

  console.log(res);

  pg.connect(conString, function(err, client, done) {

    if (err) {
      done();
      console.log(err);
      return res.status(500).json({ success: false, data: err});
    }

    // client.query ("INSERT INTO items (text, complete) values ($ 1, $ 2)" [data.text, data.complete]);

    client.query("INSERT INTO people (user_id, password, is_admin, last_sign_in) VALUES ($1, $2, $3, $4)", [_userId, _password, _is_admin, _last_sign_in]);
    client.query("INSERT INTO students(user_id, school_id, first_name, last_name, email, address, phone_number, birthday, intended_start_date)"
      + "VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9)", [_userId, _school_id, _first_name, _last_name, _email, _address, _phone_number, _birthday, _intended_start_date]);

    // Define the query
    var query = client.query('SELECT * FROM people');

    // This query.on() call will run as many times as rows there are
    query.on('row', function(row, result) {
      console.log("People:");
      console.log(row);
      results.push(row);
    });

    // Define the query
    var query = client.query('SELECT * FROM students');

    // This query.on() call will run as many times as rows there are
    query.on('row', function(row, result) {
      console.log("Students:");
      console.log(row);
      results.push(row);
    });

    query.on('end', function() {
      done();
      return res.json(results);
    });


  });
});

export default router;
