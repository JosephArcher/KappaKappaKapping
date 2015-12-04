import React, { PropTypes, Component } from 'react';
import withStyles from '../../decorators/withStyles';
import styles from './StudentTable.css';
import { Table } from 'react-bootstrap';
import AdminActions from '../../actions/AdminActions';
const injectTapEventPlugin = require("react-tap-event-plugin");

@withStyles(styles)
class StudentTable extends Component {
  render() {
    injectTapEventPlugin();
    // TODO: Add field that allows for searching of student by name
    // TODO: We can do that by filtering the table, no need for multiple queries.

    return (
      <Table striped hover responsive>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Currently Attending</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>
        <tr>
          <td>Kill </td>
          <td>Me</td>
          <td>Now Pls University</td>
          <td>test@test.test</td>
        </tr>

        <tr>
          <td>Kill </td>
          <td>Me</td>
          <td>Now Pls University</td>
          <td>test@test.test</td>
        </tr>

        <tr>
          <td>Kill </td>
          <td>Me</td>
          <td>Now Pls University</td>
          <td>test@test.test</td>
        </tr>

        <tr>
          <td>Kill </td>
          <td>Me</td>
          <td>Now Pls University</td>
          <td>test@test.test</td>
        </tr>
        </tbody>
      </Table>


    );
  }

  getStudents() {
    AdminActions.getStudents();
  }
}

export default StudentTable;
