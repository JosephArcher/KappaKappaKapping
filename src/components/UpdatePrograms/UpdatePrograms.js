/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import styles from './UpdatePrograms.css';
import withStyles from '../../decorators/withStyles';
import { DropDownMenu, RaisedButton } from 'material-ui';
import { Avatar, Card, CardActions, CardHeader, CardText } from 'material-ui';
import { Table, DropdownButton, MenuItem, OverlayTrigger, Glyphicon, Popover, Input } from 'react-bootstrap';
let Colors = require('material-ui/lib/styles/colors');
import AdminActions from '../../actions/AdminActions';
import ProgramReqCourse from '../ProgramReqCourse';
var injectTapEventPlugin = require("react-tap-event-plugin");

@withStyles(styles)
class UpdatePrograms extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
    courses: PropTypes.array.isRequired
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
      height: '500px',
      color: Colors.red700
    };

    injectTapEventPlugin();

    // TODO: Tried breaking this table out into its component, got module not found error.
    // TODO: Worth fixing past prototype stage.
    // TODO: Also its ugly and needs to be changed.
    // TODO: div.course-search: This needs better styling.

    return (
      <div className="update-programs-container">
        <div className="header">
          <h1>
            Update Program Requirements
            <span style={{paddingLeft: "10px"}}>
              <OverlayTrigger trigger="hover" placement="right" overlay={<Popover title="Update Programs">Here you can remove requirements from a program or add a requirement by entering its CRN in the menu below.</Popover>}>
                <Glyphicon glyph="glyphicon glyphicon-question-sign" />
              </OverlayTrigger>
            </span>
          </h1>
          Update requirements for:
          <DropdownButton title="Computer Science">
            <MenuItem eventKey="1">Computer Science</MenuItem>
          </DropdownButton>
        </div>

        <div className="course-search">
          <Card initiallyExpanded={false}>
            <CardHeader
              title="Enter the courses you want to add to the program."
              avatar={<Avatar style={{color:'red'}}>A</Avatar>}
              actAsExpander={true}
              showExpandableButton={true}>
            </CardHeader>
            <CardText expandable={true}>
              <div className="course-fields">
                <Input type="text" placeholder="Marist Course" id="course" name="course" />
              </div>
            </CardText>
            <CardActions expandable={true}>
              <button
                type="button"
                className="btn btn-default"
                onClick={this.addCourseToProgram}>
                Submit
              </button>
            </CardActions>
          </Card>


        </div>

        <div className="table" style={{paddingTop: "15px"}}>

          <Table striped hover responsive>

            <thead>
              <tr>
                <th>CRN</th>
                <th>Title</th>
                <th>Number of Credits</th>
                <th>Remove Requirement</th>
              </tr>
            </thead>

            <tbody>
            {
              this.props.courses.map(function (course) {
                return <ProgramReqCourse course={ course }></ProgramReqCourse>
              })
            }
            </tbody>

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
