/**
 * Created by ahoch 11/8/15
 */
import pg from 'pg';
import Router from 'express';
var bodyParser = require('body-parser');
let router = new Router();
router.use(bodyParser.json());
let conString = "postgres://priscoj:alpha29@localhost/capping";

//var results = [];

// // Grab data from the URL parameters
// var id = req.params.todo_id;

// // Grab data from http request
// var data = {text: req.body.text, complete: req.body.complete};

//let _selected_course_ids = ['00001','00002', '00003', '00004', '00009'];
let _total_credits = 0;
let _credits_transfered = 0;
let _transferable_course_ids = [];
let _nontransferable_course_ids = [];
let _transferable_course_marist_crns = [];
let _transferable_courses = [];
let _nontransferable_courses = [];
let _programList = [];
let _programListProgess = [];
let _possible_program_requirements = [];
let _possible_program_requirements_separated = [];
let formatted_top_three = [];
let topThree=[];
let _pprs_lengths = [];

// If the route matches /api/getTransferSchools...
router.post('/', function(req, res) {
   console.log(req.body);
     var _selected_course_ids = req.body.cl;
     console.log(_selected_course_ids);
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
  console.log("hey3");
    // This query.on() call will run as many times as rows there are
    query.on('row', function(row, result) {


      //for every transfer course, searches user's selected courses
      for (var i = 0; i < _selected_course_ids.length; i++) {
        //if found, adds its number of credits to total credits
        if(row.transfer_course_id== _selected_course_ids[i]){
          _total_credits= _total_credits + row.transfer_number_of_credits;

        }
      };

      results.push(row);
    });

    //NUMBER OF CREDUTS TRANSFERED

    // Define the query
    var query = client.query('SELECT * FROM course_equivalents');

    // This query.on() call will run as many times as rows there are
    query.on('row', function(row, result) {


      //for every transfer course, searches user's selected courses
      for (var i = 0; i < _selected_course_ids.length; i++) {
        //if found, push course marist crn to transferable courses
        //and add credits to number of transferble creduts
        if(row.transfer_course_id== _selected_course_ids[i]){
          _credits_transfered = _credits_transfered + row.number_of_credits;
          _transferable_course_marist_crns.push(row.marist_crn);
          _transferable_course_ids.push(row.transfer_course_id);

        }

      };
      results.push(row);
    });

    //TRANSFERABLE COURSES

    // Define the query
    var query = client.query('SELECT * FROM marist_courses');

    // This query.on() call will run as many times as rows there are
    query.on('row', function(row, result) {

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
      //finds difference between transferable courses and selected courses
      var _nontransferable_course_ids = arr_diff(_transferable_course_ids, _selected_course_ids);

      //for every transfer course, searches user's selected courses
      for (var i = 0; i < _nontransferable_course_ids.length; i++) {
        //if found, adds its info to nontranferable courses
        if(row.transfer_course_id== _nontransferable_course_ids[i]){
          _nontransferable_courses.push(row);
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

//Selects all from programs
//and pushes to _programList
    var query = client.query('SELECT * FROM programs');

    query.on('row', function(row, result) {

      _programList.push(row);
    });



  //Selects all from program requirements
    var query = client.query('SELECT * FROM program_requirements');
    query.on('row', function(row, result) {

      //compares transferable marist crn's to program requiremt crns
      //pushes results to _possible_program_requirements
      for (var i = 0; i < _transferable_course_marist_crns.length; i++) {

        if(_transferable_course_marist_crns[i]==row.marist_crn){
          _possible_program_requirements.push(row);

        }
    };

    });




    //End query
    query.on('end', function() {

 console.log("tests");

 console.log(_possible_program_requirements)

    //compares IDs from program list and _possible_program_requirements
    //to make an array of program requirements separted by programs
    for (var j = 0; j < _programList.length; j++) {
        //initializes temporary array for each loop
        let tempArray = [];
        for (var i = 0; i < _possible_program_requirements.length; i++) {
             if(_programList[j].program_id==_possible_program_requirements[i].program_id){
                 tempArray.push( _possible_program_requirements[i]);
                 }
             }
             _possible_program_requirements_separated.push(tempArray);
      }

 console.log("yo");

  console.log(_possible_program_requirements_separated);
    //creates array of amount fufilled of each program
     for (var i = 0; i < _possible_program_requirements_separated.length; i++) {
     _pprs_lengths.push(_possible_program_requirements_separated[i].length);
        };

      //sorts array of amount-program-fufilled lengths from least to most
       _pprs_lengths.sort();

       //sets minOfMaxes as the third most amount of class fufilling programs
       let minOfMaxes = _pprs_lengths[ _pprs_lengths.length-3];

    //loops through _possible_program_requirements_separated
    //and returns array of top three programs fufilled
    //if greater than min of maxes
    //--to add top choices first
    for (var i = 0; i < _possible_program_requirements_separated.length; i++) {
       if(_possible_program_requirements_separated[i].length > minOfMaxes){
       topThree.push(_possible_program_requirements_separated[i]);

    //breaks loop after 3 are choosen
      if(topThree.length==3){
      i= i+42;
            }
       }

      };

  //loops through _possible_program_requirements_separated
  //and returns array of top three programs fufilled
  //if equal to min of maxes
  //until length is three

  if(topThree.length<3){

    for (var i = 0; i < _possible_program_requirements_separated.length; i++) {
      if(_possible_program_requirements_separated[i].length == minOfMaxes){
      console.log(topThree);
      topThree.push(_possible_program_requirements_separated[i]);
      console.log(topThree);
    //breaks loop after 3 are choosen
      if(topThree.length==3){
      i= i+42;
            }
       }

      }
  };

  //if topThree doesn't have three programs
    if(topThree.length<3){
      while(topThree.length < 3){
        console.log(topThree);
        topThree.push("No more programs.")
      }
    }
    console.log(topThree);
//formats top three programs to add details/percent complete
 for(var i = 0; i < topThree.length; i++){

   //initializes
    var program= topThree[i];
    if(!(topThree[i][0]==null)){
    var programID= topThree[i][0].program_id;
  }
    var courseList =[];
    var programName = "";
    var program_num_class_required = "";

    //loops through current programs' classes
    for(var k = 0; k < program.length; k++){

      //compares marist crn's from current program to transferable courses
      //and pushes course details to courseList
       for(var h = 0; h <  _transferable_courses.length; h++){
         if(program[k].marist_crn==_transferable_courses[h].marist_crn){
          courseList.push(_transferable_courses[h]);
         }
       }

    }


    //loops through program list to set program name and # of classes required
    for(var j = 0; j < _programList.length; j++){
      if(programID==_programList[j].program_id){
        programName = _programList[j].program_name;
        program_num_class_required = _programList[j].classes_required;
      }
    }

     //formats program name, course list and percent complete as object
     var obj = new Object;
     obj["Program_Name"] = programName;
     obj["Completed_Courses"] = courseList;
     obj["Percent_Complete"] = (Math.round(100*(courseList.length/program_num_class_required )));

    //pushes object to formatted array
    formatted_top_three.push(obj);

 };


      done();
      //pushes total number of credits to pretty results
      prettyResults.push({"Total_Credits" : _total_credits});
      //pushes total number of credits to pretty results
      prettyResults.push({"Credits_Transfered" : _credits_transfered });
      //pushes total number of credits to pretty results
      prettyResults.push({"Transferable_Courses" : _transferable_courses});
      //pushes total number of credits to pretty results
      prettyResults.push({"Non_Transferable_Courses" : _nontransferable_courses });
      //pushes top three programs, classes transfered with each and percent complete
      prettyResults.push({"Top_Three_Programs" : formatted_top_three });

      //reinitialize values after push
      _total_credits = 0;
      _credits_transfered = 0;
      _transferable_course_ids = [];
      _nontransferable_course_ids = [];
      _transferable_courses = [];
      _nontransferable_courses = [];
      _programList = [];
      _programListProgess = [];
      _transferable_course_marist_crns = [];
      _possible_program_requirements = [];
      _possible_program_requirements_separated = [];
      formatted_top_three = [];
      topThree=[];
      _pprs_lengths = [];

      return res.json(prettyResults);
    });


  });
});

export default router;
