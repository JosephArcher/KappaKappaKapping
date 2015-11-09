var AppDispatcher = require('../core/dispatcher');
var EventEmitter = require('events').EventEmitter;
import ActionTypes from '../constants/ActionTypes';
import _ from 'underscore';
var request = require('superagent');
var prefix = require('superagent-prefix')('/static');

var _students = {};

function registerAdmin(user, pw) {
  // This is where we use the superagent stuff.
  console.log("Logging username from admin store: " + username);
  console.log("Logging password from admin store: " + password);

  request
    .post('/api/adminApi/register')
    .send({ username: user, password: pw })
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

function addCourseToProgram(program, course) {
  request
    .post('/api/adminApi/addCourseToProgram')
    .send({ program: program, course: course })
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
    .get('/api/adminApi/getStudents')
    .end(function(err, res) {
      if (err) {
        console.log("There's been an error.");
        console.log(err);
      } else {
        return res;
      }
    });
}

var AdminStore = _.extend({}, EventEmitter.prototype, {

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
          addCourseToProgram(action.program, action.course);
          break;

    default:
          break;
  }
});

export default AdminStore;
