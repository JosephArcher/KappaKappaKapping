/**
 * Created by ahoch 11/8/15
 */
import pg from 'pg';
import Router from 'express';

let router = new Router();
let conString = "postgres://postgres:wumbo100@localhost/kap";

//var results = [];

// // Grab data from the URL parameters
// var id = req.params.todo_id;

// // Grab data from http request
// var data = {text: req.body.text, complete: req.body.complete};

// let _userId = "testtest21";
// let _password = "kappa";
// //Will always be false!
// let _is_admin = "false";
// let _last_sign_in = "11-11-11";

// let _school_id = 'DCC0000001';
// let _first_name = 'Joe';
// let _last_name = 'Blow';
// let _email = 'kappa@gmail.kappa';
// let _address = '10 Main Street';
// let _phone_number = '1234567890';
// let _birthday = '10-10-10';
// let _intended_start_date = '10-10-10';

let _selected_course_ids = ['00001','00002', '00003'];
let _total_credits = 0;
let _credits_transfered = 0;
let _transferable_course_ids = [];
let _nontransferable_course_ids = [];
let _transferable_course_marist_crns = [];
let _transferable_courses = [];
let _nontransferable_courses = [];
let _programList = [];
let _programListProgess = [];

// If the route matches /api/getTransferSchools...
router.get('/', function(req, res) {
  // Set up the connection
  var results = [];
  var prettyResults = [];

  pg.connect(conString, function(err, client, done) {

    if (err) {
      done();
      console.log(err);
      return res.status(500).json({ success: false, data: err});
    }


    //TOTAL NUMBER OF CREDITS

    // Define the query
    var query = client.query('SELECT * FROM transfer_courses');

    // This query.on() call will run as many times as rows there are
    query.on('row', function(row, result) {
      console.log("Transfer Courses:");
      console.log(row.transfer_course_id);

      //for every transfer course, searches user's selected courses
      for (var i = 0; i < _selected_course_ids.length; i++) {
        //if found, adds its number of credits to total credits
        if(row.transfer_course_id== _selected_course_ids[i]){
          _total_credits= _total_credits + row.transfer_number_of_credits;
          console.log(_total_credits);
        }
      };

      results.push(row);
    });

    //NUMBER OF CREDUTS TRANSFERED

    // Define the query
    var query = client.query('SELECT * FROM course_equivalents');

    // This query.on() call will run as many times as rows there are
    query.on('row', function(row, result) {
      console.log("Courses Equ:");
      console.log(row);

      //for every transfer course, searches user's selected courses
      for (var i = 0; i < _selected_course_ids.length; i++) {
        //if found, push course marist crn to transferable courses
        //and add credits to number of transferble creduts
        if(row.transfer_course_id== _selected_course_ids[i]){
          _credits_transfered = _credits_transfered + row.number_of_credits;
          _transferable_course_marist_crns.push(row.marist_crn);
          _transferable_course_ids.push(row.transfer_course_id);
          console.log(_transferable_course_ids);
        }

      };
      results.push(row);
    });

    //TRANSFERABLE COURSES

    // Define the query
    var query = client.query('SELECT * FROM marist_courses');

    // This query.on() call will run as many times as rows there are
    query.on('row', function(row, result) {
      console.log("Marist Courses:");
      console.log(row);

      for (var i = 0; i < _transferable_course_marist_crns.length; i++) {

        if(row.marist_crn == _transferable_course_marist_crns[i]){
          _transferable_courses.push(row);
        }
      }
      results.push(row);
    });

//NON TRANFERABLE COURSES


    // Define the query
    var query = client.query('SELECT * FROM transfer_courses');


    // This query.on() call will run as many times as rows there are
    query.on('row', function(row, result) {
      //console.log("Transfer Courses:");
      //finds difference between transferable courses and selected courses
      var _nontransferable_course_ids = arr_diff(_transferable_course_ids, _selected_course_ids);

      //for every transfer course, searches user's selected courses
      for (var i = 0; i < _nontransferable_course_ids.length; i++) {
        //if found, adds its info to nontranferable courses
        if(row.transfer_course_id== _nontransferable_course_ids[i]){
          _nontransferable_courses.push(row);
          //console.log(row.transfer_course_id);
        }
      };

      results.push(row);
    });


//finds the difference between two arrays
    function arr_diff (a1, a2) {
      var a = [], diff = [];
      for (var i = 0; i < a1.length; i++) {
        a[a1[i]] = true;
      }
      for (var i = 0; i < a2.length; i++) {
        if (a[a2[i]]) {
          delete a[a2[i]];
        } else {
          a[a2[i]] = true;
        }
      }
      for (var k in a) {
        diff.push(k);
      }
      return diff;
    };

//Gets all Programs for now

// Define the query
    var query = client.query('SELECT * FROM programs');


// This query.on() call will run as many times as rows there are
    query.on('row', function(row, result) {
      //console.log("Transfer Courses:");
      //finds difference between transferable courses and selected courses
      // var _nontransferable_course_ids = arr_diff(_transferable_course_ids, _selected_course_ids);

      // //for every transfer course, searches user's selected courses
      // for (var i = 0; i < _nontransferable_course_ids.length; i++) {
      //    //if found, adds its info to nontranferable courses
      //    if(row.transfer_course_id== _nontransferable_course_ids[i]){
      //      _nontransferable_courses.push(row);
      //console.log(row.transfer_course_id);
      console.log("here");
      console.log(row);
      //}
//};

      _programList.push(row);
    });


//PERCENT COMPLETE
// Define the query
    var query = client.query('SELECT * FROM program_requirements');


// This query.on() call will run as many times as rows there are
    query.on('row', function(row, result) {
      //console.log("Transfer Courses:");
      //finds difference between transferable courses and selected courses
      // var _nontransferable_course_ids = arr_diff(_transferable_course_ids, _selected_course_ids);

      // //for every transfer course, searches user's selected courses


      for (var i = 0; i < _programList.length; i++) {
        _programListProgess.push(_programList[i].program_name);
        var tempArray = [];
        if(_programList[i].program_id==row.program_id){
          tempArray.push(row.program_id);

        }
        //    //if found, adds its info to nontranferable courses
        //    if(row.transfer_course_id== _nontransferable_course_ids[i]){
        //      _nontransferable_courses.push(row);
        //console.log(row.transfer_course_id);
        console.log("here");
        console.log(_programListProgess);

        _programListProgess.push(tempArray);
      }

      console.log(tempArray);
      //}
//};

      // _programList.push(row);
    });







    query.on('end', function() {


      done();
      //pushes total number of credits to pretty results
      prettyResults.push({"Total_Credits" : _total_credits});
      //pushes total number of credits to pretty results
      prettyResults.push({"Credits_Transfered" : _credits_transfered });
      //pushes total number of credits to pretty results
      prettyResults.push({"Transferable_Courses" : _transferable_courses});
      //pushes total number of credits to pretty results
      prettyResults.push({"Non_Transferable_Courses" : _nontransferable_courses });

      prettyResults.push({"Top_Three_Programs" : _programList });
      //console.log(res.json(results).transfer_course_id);

      //reinitialize values after push
      _total_credits = 0;
      _credits_transfered = 0;
      _transferable_course_ids = [];
      _nontransferable_course_ids = [];
      _transferable_courses = [];
      _nontransferable_courses = [];
      _programList = [];
      _programListProgess = [];

      return res.json(prettyResults);
    });


  });
});

export default router;
