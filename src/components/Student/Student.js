import React, { Component, PropTypes } from 'react';


class Student extends Component {
  static propTypes = {
    student: PropTypes.object.isRequired
  };
  render() {

    const student = this.props.student;
    const emailStr = "mailto:" + student.email;
    return (
      <tr>
        <td>{student.first_name}</td>
        <td>{student.last_name}</td>
        <td>Dutchess County Community College</td>
        <td>
          <a href={emailStr}>
            {student.email}
          </a>
        </td>
      </tr>
    );
  }
}
export default Student;
