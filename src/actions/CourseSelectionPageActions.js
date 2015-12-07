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
  }
};

module.exports = CourseSelectionPageActions;
