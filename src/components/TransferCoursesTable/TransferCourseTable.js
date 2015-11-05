import React, { PropTypes, Component } from 'react';
import styles from './TransferCourseTable.css';
import withStyles from '../../decorators/withStyles';
import { Table, TableHeader, TableRow, TableHeaderColumn, TableBody, TableRowColumn } from 'material-ui';
const injectTapEventPlugin = require("react-tap-event-plugin");
import {Label} from 'react-bootstrap';

@withStyles(styles)
class TransferCourseTable extends Component {
  render() {

   injectTapEventPlugin();

 this.state = {
  fixedHeader: true,
  fixedFooter: false,
  stripedRows: true,
  showRowHover: true,
  selectable: true,
  multiSelectable: true,
  enableSelectAll: false,
  displaySelectAll: false,
  deselectOnClickaway: false,
  adjustForCheckbox: false,
  displayRowCheckbox: false,
  height: '600px',
};

    return (
      <Table className="tableLabel" height={this.state.height} fixedHeader= {this.state.fixedHeader} selectable={this.state.selectable}  multiSelectable= {this.state.multiSelectable}>

        <TableHeader displaySelectAll = {this.state.displaySelectAll} enableSelectAll = {this.state.enableSelectAll} adjustForCheckbox = {this.state.adjustForCheckbox} >
            <TableRow>
      <TableHeaderColumn  style={{textAlign: 'center'}}>
    <p className="tableLabel"> Transferable Courses </p>
      </TableHeaderColumn>
    </TableRow>
          <TableRow>
            <TableHeaderColumn>First Name</TableHeaderColumn>
            <TableHeaderColumn>Last Name</TableHeaderColumn>
          </TableRow>
       </TableHeader>

        <TableBody showRowHover={this.showRowHover} displayRowCheckbox= {this.state.displayRowCheckbox} stripedRows={this.state.stripedRows} deselectOnClickaway= {this.state.deselectOnClickaway}>

          // Currently using dummy data until we set up database logic

          <TableRow>
            <TableRowColumn>Joseph</TableRowColumn>
            <TableRowColumn>Archer</TableRowColumn>
          </TableRow>

          <TableRow>
            <TableRowColumn>Joseph</TableRowColumn>
            <TableRowColumn>Archer</TableRowColumn>
          </TableRow>

          <TableRow>
            <TableRowColumn>Joseph</TableRowColumn>
            <TableRowColumn>Archer</TableRowColumn>
          </TableRow>

          <TableRow>
            <TableRowColumn>Joseph</TableRowColumn>
            <TableRowColumn>Archer</TableRowColumn>
          </TableRow>

          <TableRow>
            <TableRowColumn>Joseph</TableRowColumn>
            <TableRowColumn>Archer</TableRowColumn>
          </TableRow>

          <TableRow>
            <TableRowColumn>Joseph</TableRowColumn>
            <TableRowColumn>Archer</TableRowColumn>
          </TableRow>

          <TableRow>
            <TableRowColumn>Joseph</TableRowColumn>
            <TableRowColumn>Archer</TableRowColumn>
          </TableRow>

          <TableRow>
            <TableRowColumn>Joseph</TableRowColumn>
            <TableRowColumn>Archer</TableRowColumn>
          </TableRow>

          <TableRow>
            <TableRowColumn>Joseph</TableRowColumn>
            <TableRowColumn>Archer</TableRowColumn>
          </TableRow>
        </TableBody>

      </Table>
   );
  }
}
export default TransferCourseTable;