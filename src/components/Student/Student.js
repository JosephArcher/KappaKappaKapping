import React, { Component, PropTypes } from 'react';


class Student extends Component {
  static propTypes = {
    student: PropTypes.object.isRequired
  };
  render() {

    const student = this.props.student;

    return (
      <tr>
        <td>{student.first_name}</td>
        <td>{student.last_name}</td>
        <td>DCC</td>
        <td>{student.email}</td>
      </tr>
    );
  }
}
export default Student;