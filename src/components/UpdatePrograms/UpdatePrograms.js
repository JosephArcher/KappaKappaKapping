/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import styles from './UpdatePrograms.css';
import withStyles from '../../decorators/withStyles';
import { DropDownMenu, RaisedButton } from 'material-ui';
import { Avatar, Card, CardActions, CardHeader, CardText, Table, TableHeader, TableRow, TableHeaderColumn, TableBody, TableRowColumn } from 'material-ui';
let Colors = require('material-ui/lib/styles/colors');
import AdminActions from '../../actions/AdminActions';

var injectTapEventPlugin = require("react-tap-event-plugin");

@withStyles(styles)
class UpdatePrograms extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired
  };

  render() {
    let courses = ['Compilers', 'Operating Systems', 'Database Management', 'Introduction to Programming', 'C++ (lol not really)', 'Software Development', 'Language Study'];

    var programs = [
      { payload: '1', text: 'Computer Science' },
      { payload: '2', text: 'Something' },
      { payload: '3', text: 'Something' },
      { payload: '4', text: 'Something' },
      { payload: '5', text: 'Something' },
    ];

    this.state = {
      fixedHeader: true,
      fixedFooter: true,
      stripedRows: false,
      showRowHover: false,
      selectable: false,
      multiSelectable: false,
      enableSelectAll: false,
      deselectOnClickaway: true,
      height: '500px',
      color: Colors.red700
    };
    var Typeahead = require('react-typeahead').Typeahead;

    injectTapEventPlugin();

    //<Typeahead
    //  options={['Compilers', 'Operating Systems', 'Database Management', 'Introduction to Programming', 'C++ (lol not really)', 'Software Development', 'Language Study']}
    //  maxVisible={5}
    ///>
    //

    // TODO: Tried breaking this table out into its component, got module not found error.
    // TODO: Worth fixing past prototype stage.
    // TODO: Also its ugly and needs to be changed.
    // TODO: Material-ui tables are broken and their styling sucks
    // TODO: div.course-search: This needs better styling.

    return (
      <div className="update-programs-container">
        <div className="header">
          <h1>Update Program Requirements</h1>
          Update requirements for:
          <DropDownMenu menuItems={programs} />
        </div>

        <div className="course-search">
          <Card initiallyExpanded={false}>
            <CardHeader
              title="Search for courses you want to add to the program."
              avatar={<Avatar style={{color:'red'}}>A</Avatar>}
              actAsExpander={true}
              showExpandableButton={true}>
            </CardHeader>
            <CardText expandable={true}>
              Marist Course: <input id="course" type="text" name="course" />
            </CardText>
            <CardActions expandable={true}>
              <RaisedButton label="Submit" backgroundColor={ Colors.green700 } onClick={this.addCourseToProgram}/>
            </CardActions>
          </Card>


        </div>

        <div className="table">
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
                <TableRowColumn><RaisedButton label="Remove" backgroundColor={ this.state.color } /></TableRowColumn>
              </TableRow>

              <TableRow>
                <TableRowColumn>10690</TableRowColumn>
                <TableRowColumn>Compilers</TableRowColumn>
                <TableRowColumn>4</TableRowColumn>
                <TableRowColumn><RaisedButton label="Remove" backgroundColor={ this.state.color } /></TableRowColumn>
              </TableRow>

              <TableRow>
                <TableRowColumn>10690</TableRowColumn>
                <TableRowColumn>Compilers</TableRowColumn>
                <TableRowColumn>2</TableRowColumn>
                <TableRowColumn><RaisedButton label="Remove" backgroundColor={ this.state.color } /></TableRowColumn>
              </TableRow>

              <TableRow>
                <TableRowColumn>10690</TableRowColumn>
                <TableRowColumn>Compilers</TableRowColumn>
                <TableRowColumn>3</TableRowColumn>
                <TableRowColumn><RaisedButton label="Remove" backgroundColor={ this.state.color } /></TableRowColumn>
              </TableRow>

              <TableRow>
                <TableRowColumn>10690</TableRowColumn>
                <TableRowColumn>Compilers</TableRowColumn>
                <TableRowColumn>5</TableRowColumn>
                <TableRowColumn><RaisedButton label="Remove" backgroundColor={ this.state.color } /></TableRowColumn>
              </TableRow>

              <TableRow>
                <TableRowColumn>10690</TableRowColumn>
                <TableRowColumn>Compilers</TableRowColumn>
                <TableRowColumn>4</TableRowColumn>
                <TableRowColumn><RaisedButton label="Remove" backgroundColor={ this.state.color } /></TableRowColumn>
              </TableRow>

              <TableRow>
                <TableRowColumn>10690</TableRowColumn>
                <TableRowColumn>Compilers</TableRowColumn>
                <TableRowColumn>2</TableRowColumn>
                <TableRowColumn><RaisedButton label="Remove" backgroundColor={ this.state.color } /></TableRowColumn>
              </TableRow>

              <TableRow>
                <TableRowColumn>10690</TableRowColumn>
                <TableRowColumn>Compilers</TableRowColumn>
                <TableRowColumn>3</TableRowColumn>
                <TableRowColumn><RaisedButton label="Remove" backgroundColor={ this.state.color } /></TableRowColumn>
              </TableRow>

              <TableRow>
                <TableRowColumn>10690</TableRowColumn>
                <TableRowColumn>Compilers</TableRowColumn>
                <TableRowColumn>5</TableRowColumn>
                <TableRowColumn><RaisedButton label="Remove" backgroundColor={ this.state.color } /></TableRowColumn>
              </TableRow>

              <TableRow>
                <TableRowColumn>10690</TableRowColumn>
                <TableRowColumn>Compilers</TableRowColumn>
                <TableRowColumn>4</TableRowColumn>
                <TableRowColumn><RaisedButton label="Remove" backgroundColor={ this.state.color } /></TableRowColumn>
              </TableRow>

              <TableRow>
                <TableRowColumn>10690</TableRowColumn>
                <TableRowColumn>Compilers</TableRowColumn>
                <TableRowColumn>2</TableRowColumn>
                <TableRowColumn><RaisedButton label="Remove" backgroundColor={ this.state.color } /></TableRowColumn>
              </TableRow>

              <TableRow>
                <TableRowColumn>10690</TableRowColumn>
                <TableRowColumn>Compilers</TableRowColumn>
                <TableRowColumn>3</TableRowColumn>
                <TableRowColumn><RaisedButton label="Remove" backgroundColor={ this.state.color } /></TableRowColumn>
              </TableRow>

            </TableBody>

          </Table>
        </div>
      </div>


    );
  }

  addCourseToProgram() {
    var program = '99999'; // Hard coded CS major for now.
    console.log("Add course to program called.");

    var course = document.getElementById("course").value;
    console.log("Trying to add course with ID: " + course);
    AdminActions.addCourseToProgram(program, course);
  }
}

export default UpdatePrograms;
