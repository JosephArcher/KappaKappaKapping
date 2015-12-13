import React, { Component, PropTypes } from 'react';
import CourseSelectionPageActions from '../../actions/CourseSelectionPageActions';

export default class CompletedCourseListItem extends Component {

  static propTypes = {
    course: PropTypes.object.isRequired
  };

  render() {
  const course = this.props.course;
  function _deleteClass() {
    console.log("delete button clicked for course: " + course.title  ) ;
    CourseSelectionPageActions.delete(course);

  }

    return (
      <tr>
        <td>{course.course_title}</td>
        
        <td>       
            <button
              type="button"
              className="btn btn-danger"
              onClick={_deleteClass}>
              Delete
            </button>         
        </td>
      </tr>
    );
  } 
}