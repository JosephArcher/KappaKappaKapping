var AppDispatcher = require('../core/Dispatcher');
var ActionTypes = require('../constants/ActionTypes');


var CourseSelectionPageActions = {

  /**
   * @param  {string} text
   */
  submitCourseReport: function(cl) {
    console.log(cl);

    AppDispatcher.dispatch({
      actionType: ActionTypes.SUBMIT_COURSE_REPORT,
      cl: cl
    });
  },
  create: function(theCourse) {
    console.log("actions create was found");
    AppDispatcher.dispatch({
      actionType: ActionTypes.Course_CREATE,
      course: theCourse
    })
  },
  searchTermChanged: function(theSearchTerm) {
    console.log("Actions Search Term Changed was Found");
    AppDispatcher.dispatch({
      actionType: ActionTypes.Course_Filter,
      searchTerm: theSearchTerm
    })
  },
 delete: function(theCourse) {
  	console.log("actions delete was found");
  	AppDispatcher.dispatch({
  		actionType: ActionTypes.Course_DESTROY,
  		course: theCourse
  	})
  },

  submitNewCourse: function(user, name, id, credits, descrip) {
    console.log("Submit in actions");
    AppDispatcher.dispatch({
      actionType: ActionTypes.NEW_COURSE,
      user: user,
      name : name,
      id : id,
      credits : credits,
      descrip : descrip
    });
  }

};

module.exports = CourseSelectionPageActions;
