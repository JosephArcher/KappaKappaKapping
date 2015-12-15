/**
 * Created by ahoch 11/8/15
 */
import pg from 'pg';
import Router from 'express';
import AdminStore from '../stores/adminStore';
var bodyParser = require('body-parser');
let router = new Router();
router.use(bodyParser.json());

let conString = 'postgres://justin:swag@10.10.7.182/transfer';



let _school_id = 'DCC0000001';
let _is_admin = "false";
let _address = '10 Main Street';




// If the route matches /api/getTransferSchools...
router.post('/', function(req, res) {
  console.log(req.body);


  //fn: fn,ln: ln, pw: pw, em: em, pn: pn, bd: bd
   var _first_name = req.body.fn;
   var _last_name = req.body.ln;
   var _userId = req.body.us;
   var _password = req.body.pw;
   var _phone_number = req.body.pn;
   //fix db constraints
   var _birthday = req.body.bd;
   //var _birthday = req.body.bd;
   var _email = req.body.em;
   var _school_id = req.body.cs;
   var _intended_start_date = req.body.sd;
   var _intended_major = req.body.ma;


  // Set up the connection
  var results = [];

 // console.log(res);

  pg.connect(conString, function(err, client, done) {

    if (err) {
      done();
    //  console.log(err);
      return res.status(500).json({ success: false, data: err});
    }


    var query = client.query("INSERT INTO people (user_id, password, is_admin) VALUES ($1, $2, $3)", [_userId, _password, _is_admin]);

    // This query.on() call will run as many times as rows there are
    query.on('row', function(row, result) {
     // console.log("People:");
      console.log("HEYY");
      results.push(row);
    });

    // Define the query
    var query = client.query("INSERT INTO students(user_id, school_id, first_name, last_name, email,  phone_number, birthday, intended_major, intended_start_date)"
      + "VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9)", [_userId, _school_id, _first_name, _last_name, _email,  _phone_number, _birthday, _intended_major, _intended_start_date]);



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
