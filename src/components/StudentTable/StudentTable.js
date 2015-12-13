import React, { PropTypes, Component } from 'react';
import withStyles from '../../decorators/withStyles';
import styles from './StudentTable.css';
import { Table } from 'react-bootstrap';
import AdminStore from '../../stores/AdminStore';
import Student from '../Student';
const injectTapEventPlugin = require("react-tap-event-plugin");

@withStyles(styles)
class StudentTable extends Component {
  static propTypes = {
    students: PropTypes.array.isRequired
  };

  render() {
    injectTapEventPlugin();
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
        {
          this.props.students.map(function (student) {
            return <Student student={ student }></Student>
          })
        }
        </tbody>
      </Table>


    );
  }
}

export default StudentTable;
