/**
 * Created by priscoj on 11/8/15.
 */
import React, { PropTypes, Component } from 'react';
import styles from './RemoveCourseTable.css';
import { RaisedButton, Table, TableHeader, TableRow, TableHeaderColumn, TableBody, TableRowColumn } from 'material-ui';
let Colors = require('material-ui/lib/styles/colors');
var injectTapEventPlugin = require("react-tap-event-plugin");

@withStyles(styles)

class RemoveCourseTable extends Component {
  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired
  };

  render() {
    this.state = {
      fixedHeader: true,
      fixedFooter: true,
      stripedRows: false,
      showRowHover: false,
      selectable: false,
      multiSelectable: false,
      enableSelectAll: false,
      deselectOnClickaway: true,
      height: '500px'
    };

    return (
      //testing
      <Table height={this.state.height} fixedHeader={this.state.fixedHeader} selectable={this.state.selected}>

        <TableHeader>
          <TableRow>
            <TableHeaderColumn colSpan="4" tooltip="This table lists the requirements for the selected course and lets you update them." style={{textAlign: 'center'}}>
              Course Information
            </TableHeaderColumn>
          </TableRow>
          <TableRow>
            <TableHeaderColumn>CRN</TableHeaderColumn>
            <TableHeaderColumn>Title</TableHeaderColumn>
            <TableHeaderColumn>Number of Credits</TableHeaderColumn>
            <TableHeaderColumn>Remove Requirement</TableHeaderColumn>
          </TableRow>
        </TableHeader>

        <TableBody showRowHover={this.state.showRowHover} stripedRows={this.state.stripedRows}>

          <TableRow>
            <TableRowColumn>10690</TableRowColumn>
            <TableRowColumn>Compilers</TableRowColumn>
            <TableRowColumn>5</TableRowColumn>
            <TableRowColumn><RaisedButton label="Remove" backgroundColor={ Colors.red500 } /></TableRowColumn>
          </TableRow>

          <TableRow>
            <TableRowColumn>10690</TableRowColumn>
            <TableRowColumn>Compilers</TableRowColumn>
            <TableRowColumn>4</TableRowColumn>
            <TableRowColumn><RaisedButton label="Remove" backgroundColor={ Colors.red500 } /></TableRowColumn>
          </TableRow>

          <TableRow>
            <TableRowColumn>10690</TableRowColumn>
            <TableRowColumn>Compilers</TableRowColumn>
            <TableRowColumn>2</TableRowColumn>
            <TableRowColumn><RaisedButton label="Remove" backgroundColor={ Colors.red500 } /></TableRowColumn>
          </TableRow>

          <TableRow>
            <TableRowColumn>10690</TableRowColumn>
            <TableRowColumn>Compilers</TableRowColumn>
            <TableRowColumn>3</TableRowColumn>
            <TableRowColumn><RaisedButton label="Remove" backgroundColor={ Colors.red500 } /></TableRowColumn>
          </TableRow>

        </TableBody>

      </Table>
    );
  }
}

export default RemoveCourseTable;
