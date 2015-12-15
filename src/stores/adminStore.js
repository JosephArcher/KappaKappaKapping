var AppDispatcher = require('../core/Dispatcher');
var EventEmitter = require('events').EventEmitter;
import ActionTypes from '../constants/ActionTypes';
import _ from 'underscore';
var request = require('superagent');
var prefix = require('superagent-prefix')('/static');

function registerAdmin(user, pw) {
  request
    .post('/api/adminApi/register')
    .send({ username: user, password: pw })
    .end(function(err, res){
      if (err) {
        console.log("There's been an error registering an admin.");
        console.log(err);
        AdminStore.registrationSuccess = false;

      } else {
        console.log("Registering admin");
        console.log(res);
        AdminStore.registrationSuccess = true;
      }
    });
}

function addCourseToProgram(course) {
  request
    .post('/api/adminApi/addCourseToProgram')
    .send({ course: course })
    .end(function(err, res){
      if (err) {
        console.log("There's been an error.");
        console.log(err);
      } else {
        console.log("No error.");
        console.log(res);
      }
    });
}

function getProgramRequirements() {
  request
    .get('/api/adminApi/getProgramRequirements')
    .end(function(err, res) {
      if (err) {
        console.log("There's been an error: geting program reqs.");
        console.log(err);
      } else {
        return res;
      }
    });
}

function removeCourseFromProgram(course) {
  request
    .post('/api/adminApi/removeCourseFromProgram')
    .send({ course: course })
    .end(function(err, res){
      if (err) {
        console.log("There's been an error.");
        console.log(err);
      } else {
        console.log("No error.");
        console.log(res);
      }
    });
}

function getStudents() {
   request
     .get('http://localhost:3000/api/adminApi/getStudents')
     .set('Accept', 'application/json')
     .end(function(err, res) {
       if (err) {
         console.log("There's been an error: getting students. ");
         console.log(err);
       } else {
         console.log("In upper function");
         return res;
       }
     });
 }

function addCourseEquivalency(maristCourse, transferCourse, credits) {
  request
    .post('/api/adminApi/addCourseEquivalency')
    .send({ maristCourse: maristCourse, transferCourse: transferCourse, credits: credits })
    .end(function(err, res) {
      if (err) {
        console.log("There's been an error adding an equivalency.");
        console.log(err);
      } else {
        console.log("Adding equivalency.");
        console.log(res);
      }
    });
}

function removeCourseEquivalency(maristCourse, transferCourse) {
  request
    .post('/api/adminApi/removeCourseEquivalency')
    .send({ maristCourse: maristCourse, transferCourse: transferCourse })
    .end(function(err, res) {
      if (err) {
        console.log("There's been an error removing an equivalency.");
        console.log(err);
      } else {
        console.log("Removing equivalency.");
        console.log(res);
      }
    });
}



var AdminStore = _.extend({}, EventEmitter.prototype, {

  registrationSuccess: null,

  equivalencySuccess: null,

  emitChange: function() {
    this.emit('change');
  },

  /**
   * @param {function} callback
   */
  addChangeListener: function(callback) {
    this.on('change', callback);
  },

  /**
   * @param {function} callback
   */
  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  }
});

AppDispatcher.register(function(action) {
  switch(action.actionType) {

    case ActionTypes.REGISTER_ADMIN:
      registerAdmin(action.username, action.password);
      break;

    case ActionTypes.ADD_COURSE_TO_PROGRAM:
      addCourseToProgram(action.course);
      break;

    case ActionTypes.REMOVE_COURSE_FROM_PROGRAM:
      removeCourseFromProgram(action.course);
      break;

    case ActionTypes.GET_STUDENTS:
      getStudents();
      break;

    case ActionTypes.REMOVE_COURSE_EQUIVALENCY:
      removeCourseEquivalency(action.maristCourse, action.transferCourse);
      break;

    case ActionTypes.ADD_COURSE_EQUIVALENCY:
      addCourseEquivalency(action.maristCourse, action.transferCourse, action.credits);
      break;

    default:
      break;
  }
});

export default AdminStore;
