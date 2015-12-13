import React, { PropTypes, Component } from 'react';
import withStyles from '../../decorators/withStyles';
import styles from './StudentSubmissionsTable.css';
import { Table } from 'react-bootstrap';
import AdminStore from '../../stores/AdminStore';
import StudentSubmission from '../StudentSubmission';
const injectTapEventPlugin = require("react-tap-event-plugin");

@withStyles(styles)
class StudentSubmissionsTable extends Component {
  static propTypes = {
    submissions: PropTypes.array.isRequired
  };

  render() {
    injectTapEventPlugin();
    return (
      <Table striped hover responsive>
        <thead>
        <tr>
          <th>Course Title</th>
          <th>Course Description</th>
          <th>Number of Credits</th>
          <th>School</th>
        </tr>
        </thead>

        <tbody>
        {
          this.props.submissions.map(function (item) {
            return <StudentSubmission submission= { item }></StudentSubmission>
          })
        }
        </tbody>
      </Table>
    );
  }
}

export default StudentSubmissionsTable;
