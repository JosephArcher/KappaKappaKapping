var AppDispatcher = require('../core/dispatcher');
import ActionTypes from '../constants/ActionTypes';
var AdminActions = {

  // This is called by the submit button on the register page,
  // and is given the field values as parameters.
  registerAdmin: function(username, password) {
    console.log("In register admin in actions.");
    console.log("Actions: username: " + username);
    console.log("Actions: password: " + password);

    AppDispatcher.dispatch({
      actionType: ActionTypes.REGISTER_ADMIN,
      username: username,
      password: password
    });
  },

  getStudents: function() {
    console.log("Getting those students!");

    AppDispatcher.dispatch({
      actionType: ActionTypes.GET_STUDENTS
    });
  },

  addCourseToProgram: function(course) {
    AppDispatcher.dispatch({
      actionType: ActionTypes.ADD_COURSE_TO_PROGRAM,
      course: course
    });
  },

  removeCourseFromProgram: function(course) {
    AppDispatcher.dispatch({
      actionType: ActionTypes.REMOVE_COURSE_FROM_PROGRAM,
      course: course
    });
  },

  addCourseEquivalency: function(maristCourse, transferCourse, credits) {
    AppDispatcher.dispatch({
      actionType: ActionTypes.ADD_COURSE_EQUIVALENCY,
      maristCourse: maristCourse,
      transferCourse: transferCourse,
      credits: credits
    });
  },

  removeCourseEquivalency: function(maristCourse, transferCourse) {
    AppDispatcher.dispatch({
      actionType: ActionTypes.REMOVE_COURSE_EQUIVALENCY,
      maristCourse: maristCourse,
      transferCourse: transferCourse
    });
  }




};

export default AdminActions;
