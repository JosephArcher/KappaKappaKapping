import React, { PropTypes, Component } from 'react';
import withStyles from '../../decorators/withStyles';
import styles from './StudentTable.css';
import { Table, TableHeader, TableRow, TableHeaderColumn, TableBody, TableRowColumn } from 'material-ui';
const injectTapEventPlugin = require("react-tap-event-plugin");

@withStyles(styles)
class StudentTable extends Component {
  render() {
    injectTapEventPlugin();

    return (
      <Table height="750px" fixedHeader="true" selectable="true">

        <TableHeader enableSelectAll="false">
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

        <TableBody showRowHover="true" stripedRows="true">

          // Currently using dummy data until we set up database logic

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
}

export default StudentTable;
