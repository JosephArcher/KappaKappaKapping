import React, { Component, PropTypes } from 'react';
import Modal from 'react-bootstrap';
import AdminActions from '../../actions/adminActions';

class ProgramReqCourse extends Component {
  static propTypes = {
    course: PropTypes.object.isRequired
  };

  showModal() {
    this.setState({ showModal: true });
  }

  render() {

    const course = this.props.course;
    function _removeProgramRequirement() {
      AdminActions.removeCourseFromProgram(course.marist_crn);
      var row = document.getElementById(course.marist_crn);
      row.style.display = 'none';
    }

    return (
      <tr id={course.marist_crn}>
        <td>{course.marist_crn}</td>
        <td>{course.course_title}</td>
        <td>{course.number_of_credits}</td>
        <td>
          <button
            type="button"
            className="btn btn-danger"
            onClick={_removeProgramRequirement}>
            Remove
          </button>
        </td>
      </tr>


    );
  }
}
export default ProgramReqCourse;
