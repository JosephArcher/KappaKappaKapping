
var AppDispatcher = require('../core/dispatcher');
var EventEmitter = require('events').EventEmitter;
var ActionTypes = require('../constants/ActionTypes');
import {Courses} from '../constants/testdata';


import _ from 'underscore';

var CHANGE_EVENT = 'change';

  let availableTransferCourses = [];
  let completedCourses = [];

  loadCourses();

  function loadCourses() {
    availableTransferCourses =  Courses;
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
    if(course.title == nextCourse.title) {
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
    console.log("THE COURSE TITLE IS ... " + course.title);
    console.log("THE NEXT COURSE TITLE IS ... " + nextCourse.title);
    // Compare
    if(course.title == nextCourse.title) {
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
 // Extend Cart Store with EventEmitter to add eventing capabilities
var CourseSelectionStore = _.extend({}, EventEmitter.prototype, {

  getAllCompletedCourses: function () {
    console.log("Returning all of the complted courses + " + completedCourses.length);
    console.log(completedCourses);
    return completedCourses;
  },

  getAllTransferSchools: function()  {
    
    console.log("Getting all transfer schools");
    return availableTransferCourses;

  },
  getCurrentSChool: function() {
    console.log("Getting the current school");
  },
  getAllTransferCourses: function () {
      console.log("Getting all the transfer courses");
      return availableTransferCourses;
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

    default:
      return true;
  }
  CourseSelectionStore.emitChange();


  return true;

});

module.exports = CourseSelectionStore;
