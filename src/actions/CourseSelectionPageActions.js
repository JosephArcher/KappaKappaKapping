var AppDispatcher = require('../core/dispatcher');
var ActionTypes = require('../constants/ActionTypes');


var CourseSelectionPageActions = {

  /**
   * @param  {string} text
   */
  create: function(theCourse) {
    console.log("actions create was found");
    AppDispatcher.dispatch({
      actionType: ActionTypes.Course_CREATE,
      course: theCourse
    })
  },

 delete: function(theCourse) {
  	console.log("actions delete was found");
  	AppDispatcher.dispatch({
  		actionType: ActionTypes.Course_DESTROY,
  		course: theCourse
  	})
  }

};

module.exports = CourseSelectionPageActions;
