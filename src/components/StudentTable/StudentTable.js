import React, { PropTypes, Component } from 'react';
import withStyles from '../../decorators/withStyles';
import styles from './StudentTable.css';
import { Table, TableHeader, TableRow, TableHeaderColumn, TableBody, TableRowColumn } from 'material-ui';
import AdminActions from '../../actions/AdminActions';
const injectTapEventPlugin = require("react-tap-event-plugin");

@withStyles(styles)
class StudentTable extends Component {
  render() {
    injectTapEventPlugin();
    // TODO: Add field that allows for searching of student by name
    // TODO: We can do that by filtering the table, no need for multiple queries.

    return (
      <Table height="500px" fixedHeader={true} selectable={true}>

        <TableHeader enableSelectAll={false}>
          <TableRow>
            <TableHeaderColumn colSpan="4" tooltip='This table delineates information about prospective students.' style={{textAlign: 'center'}}>
              Student Information
            </TableHeaderColumn>
          </TableRow>
          <TableRow>
            <TableHeaderColumn>First Name</TableHeaderColumn>
            <TableHeaderColumn>Last Name</TableHeaderColumn>
            <TableHeaderColumn tooltip='This is the institution the student is currently or most recently attended.'>Currently Attending</TableHeaderColumn>
            <TableHeaderColumn tooltip='This is the email to contact the student.'>Email</TableHeaderColumn>
          </TableRow>
        </TableHeader>

        <TableBody showRowHover={true} stripedRows={true}>

          <TableRow>
            <TableRowColumn>Joseph</TableRowColumn>
            <TableRowColumn>Archer</TableRowColumn>
            <TableRowColumn>Marist College</TableRowColumn>
            <TableRowColumn>joe@archer.edu</TableRowColumn>
          </TableRow>

          <TableRow>
            <TableRowColumn>Alex</TableRowColumn>
            <TableRowColumn>Hochberg</TableRowColumn>
            <TableRowColumn>Marist College</TableRowColumn>
            <TableRowColumn>Alex@marist.edu</TableRowColumn>
          </TableRow>

          <TableRow>
            <TableRowColumn>John</TableRowColumn>
            <TableRowColumn>Prisco</TableRowColumn>
            <TableRowColumn>Marist College</TableRowColumn>
            <TableRowColumn>john@marist.edu</TableRowColumn>
          </TableRow>

          <TableRow>
            <TableRowColumn>Joseph</TableRowColumn>
            <TableRowColumn>Archer</TableRowColumn>
            <TableRowColumn>Marist College</TableRowColumn>
            <TableRowColumn>joe@archer.edu</TableRowColumn>
          </TableRow>

          <TableRow>
            <TableRowColumn>Alex</TableRowColumn>
            <TableRowColumn>Hochberg</TableRowColumn>
            <TableRowColumn>Marist College</TableRowColumn>
            <TableRowColumn>Alex@marist.edu</TableRowColumn>
          </TableRow>

          <TableRow>
            <TableRowColumn>John</TableRowColumn>
            <TableRowColumn>Prisco</TableRowColumn>
            <TableRowColumn>Marist College</TableRowColumn>
            <TableRowColumn>john@marist.edu</TableRowColumn>
          </TableRow>

          <TableRow>
            <TableRowColumn>Joseph</TableRowColumn>
            <TableRowColumn>Archer</TableRowColumn>
            <TableRowColumn>Marist College</TableRowColumn>
            <TableRowColumn>joe@archer.edu</TableRowColumn>
          </TableRow>

          <TableRow>
            <TableRowColumn>Alex</TableRowColumn>
            <TableRowColumn>Hochberg</TableRowColumn>
            <TableRowColumn>Marist College</TableRowColumn>
            <TableRowColumn>Alex@marist.edu</TableRowColumn>
          </TableRow>

          <TableRow>
            <TableRowColumn>John</TableRowColumn>
            <TableRowColumn>Prisco</TableRowColumn>
            <TableRowColumn>Marist College</TableRowColumn>
            <TableRowColumn>john@marist.edu</TableRowColumn>
          </TableRow>

          <TableRow>
            <TableRowColumn>Joseph</TableRowColumn>
            <TableRowColumn>Archer</TableRowColumn>
            <TableRowColumn>Marist College</TableRowColumn>
            <TableRowColumn>joe@archer.edu</TableRowColumn>
          </TableRow>

          <TableRow>
            <TableRowColumn>Alex</TableRowColumn>
            <TableRowColumn>Hochberg</TableRowColumn>
            <TableRowColumn>Marist College</TableRowColumn>
            <TableRowColumn>Alex@marist.edu</TableRowColumn>
          </TableRow>

          <TableRow>
            <TableRowColumn>John</TableRowColumn>
            <TableRowColumn>Prisco</TableRowColumn>
            <TableRowColumn>Marist College</TableRowColumn>
            <TableRowColumn>john@marist.edu</TableRowColumn>
          </TableRow>

          <TableRow>
            <TableRowColumn>Joseph</TableRowColumn>
            <TableRowColumn>Archer</TableRowColumn>
            <TableRowColumn>Marist College</TableRowColumn>
            <TableRowColumn>joe@archer.edu</TableRowColumn>
          </TableRow>

          <TableRow>
            <TableRowColumn>Alex</TableRowColumn>
            <TableRowColumn>Hochberg</TableRowColumn>
            <TableRowColumn>Marist College</TableRowColumn>
            <TableRowColumn>Alex@marist.edu</TableRowColumn>
          </TableRow>

          <TableRow>
            <TableRowColumn>John</TableRowColumn>
            <TableRowColumn>Prisco</TableRowColumn>
            <TableRowColumn>Marist College</TableRowColumn>
            <TableRowColumn>john@marist.edu</TableRowColumn>
          </TableRow>


        </TableBody>

      </Table>
    );
  }

  getStudents() {
    AdminActions.getStudents();
  }
}

export default StudentTable;
