var AppDispatcher = require('../core/Dispatcher');
var EventEmitter = require('events').EventEmitter;
import ActionTypes from '../constants/ActionTypes';
import _ from 'underscore';
var request = require('superagent');
var prefix = require('superagent-prefix')('/static');
import {Courses} from '../constants/testdata';
var CHANGE_EVENT = 'change';


  let availableTransferCourses = [];
  let completedCourses = [];
  var crr = [];
  let courseReportResponse = [];
  let test = "hell";
  loadCourses();
  function loadResponse(){
    courseReportResponse = crr;
  }
  function loadCourses() {
 availableTransferCourses = getTransferlCourses();
 console.log("Hello From Joe ");
 console.log(availableTransferCourses);
  }

  function generateReport(completedCourses) {
    request
     .post('/api/getTransferSchoolCourses')
       .send({completedCoursesArray: completedCourses })
       .end(function(err, res){
      if (err) {
        console.log("There's been an error.");
        console.log(err);
      } else {
        console.log("No error.");
        console.log(res);
        console.log("res avbou");
      }
    });

  }
    function getTransferlCourses() {

   request
      .get('/api/getTransferSchoolCourses')
      .end(function(err, res) {
        if (err) {
          console.log("There's been an error: getting the transfer courses.");
          console.log(err);
        } else {

          //console.log("Printing res body: " + res.body.length);
          //for(var i=0; i < res.body.length; i++){
          //  console.log(res.body[i]);
          //}
          availableTransferCourses = res.body;


        }
      }.bind(this));
    }

 // Will add the course to the completed course list
function  markCourseAsCompleted(course) {

  console.log("Joe the course " + course.title + "was added to the completed list  " + completedCourses.length);

  // Initalize the variables
  var nextCourse;
  var indexToRemove;

  // Loop over each item in the transfer courses array and search for the index with the given name
  for(var i = 0; i < availableTransferCourses.length; i++){

    nextCourse = availableTransferCourses[i];

    // Compare
    if(course.course_title == nextCourse.course_title) {
      // Save the index to remove later
      indexToRemove = i;
      break;
    }
 }

 // Add the course to the completed courses array
  completedCourses.push(course);

 // Remove the transerfable course

 console.log("BEFORE " + availableTransferCourses.length);
  availableTransferCourses.splice(indexToRemove,1);
   console.log("AFTER " + availableTransferCourses.length);
}
 // Will remove the course from the completed course list
 function deleteCourseFromCompleted(course) {

  var nextCourse;
  // Loop over each item in the completed courses array and search for the index with the given name
  for(var i = 0; i < completedCourses.length; i++){

    nextCourse = completedCourses[i];
    console.log("THE COURSE TITLE IS ... " + course.course_title);
    console.log("THE NEXT COURSE TITLE IS ... " + nextCourse.course_title);
    // Compare
    if(course.course_title == nextCourse.course_title) {
      console.log("JOE THE DELETE MATCH WAS FOUND");
      completedCourses.splice(i,1);
      break;
    }
  }
  availableTransferCourses.push(course);
  console.log("Joe the course " + course.title + " has made it to the store ");
 }
 function numberOfCompletedCourses() {

 }
 /////
 function submitCourseReport(cl) {
   CourseSelectionStore.clearUp();
   var completedCoursesCrn = [];
   var completedCoursesSize = completedCourses.length;
  
   if (!(completedCoursesSize > 0)) {
     return;
   }


   for(var x = 0; completedCoursesSize > x; x++){
    completedCoursesCrn.push(completedCourses[x].transfer_course_id);
   }
console.log(completedCoursesCrn);
   request
     .post('/api/getCreditReport')
     .send({cl: completedCoursesCrn })
     .end(function(err, res){
       if (err) {
         console.log("There's been an error.");
         console.log(err);
       } else {
         console.log("No error.");
         console.log(res.text);
         courseReportResponse.push(res.text);
         crr = res.text;
       }
  loadResponse();

     } );

 }

function submitNewCourse(user, name, id, credits, descrip) {
  console.log("SUBMITTING")

  request
    .post('/api/newCourse')
    .send({user: user, name : name, id : id, credits : credits, descrip : descrip})
    .end(function(err, res){
      if (err) {
        console.log("There's been an error.");
        console.log(err);
      } else {
        console.log("No error.");
        console.log(res.text);

      }


    } );


}
 // Extend Cart Store with EventEmitter to add eventing capabilities
var CourseSelectionStore = _.extend({}, EventEmitter.prototype, {

  getAllCompletedCourses: function () {
    console.log("Returning all of the completed courses + " + completedCourses.length);
    console.log(completedCourses);

    return completedCourses;
  },

  getAllTransferSchools: function()  {

    console.log("Getting all transfer schools");
    return availableTransferCourses;

  },
  getCourseReport: function (){
    return {cl: courseReportResponse};
  },
  getCurrentSChool: function() {
    console.log("Getting the current school");
  },
  getAllTransferCourses: function () {
     return availableTransferCourses;

  },

  clearUp: function(){
    crr = [];
    courseReportResponse = [];
  },

  // Emit Change event
  emitChange: function() {
    console.log("a change is being emitted");
    this.emit(CHANGE_EVENT);
  },

  // Add change listener
  addChangeListener: function(callback) {
    // loadCourses();
    this.on(CHANGE_EVENT, callback);
  },

  // Remove change listener
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },
  getCourseSelectionState:function () {

  console.log("Getting the currenet state of the  page ");
  return {
   // allTransferSchools: CourseSelectionStore.getAllTransferSchools(),
    currentTransferSchool: this.getCurrentSChool(),
    availableTransferCourses: this.getAllTransferCourses(),
        disabled : true,
    completedCourses: this.getAllCompletedCourses()
  };
  }
});

// Register callback with AppDispatcher
AppDispatcher.register(function(action) {

  switch(action.actionType) {

    case ActionTypes.Course_DESTROY:
     console.log("Destroy was found");
     deleteCourseFromCompleted(action.course);
     CourseSelectionStore.emitChange();
    break;

    case ActionTypes.Course_CREATE:
     console.log("create was found");
     markCourseAsCompleted(action.course);
     CourseSelectionStore.emitChange();
    break;

    case ActionTypes.SUBMIT_COURSE_REPORT:
      submitCourseReport(action.cl);
      CourseSelectionStore.emitChange();
      break;

    //ah
    case ActionTypes.NEW_COURSE:
      submitNewCourse(action.user, action.name, action.id, action.credits, action.descrip);
      CourseSelectionStore.emitChange();
      break;

    default:
      return true;
  }
  CourseSelectionStore.emitChange();


  return true;

});

module.exports = CourseSelectionStore;
