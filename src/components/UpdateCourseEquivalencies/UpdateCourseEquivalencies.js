/**
 * Created by priscoj on 11/6/15.
 */
import React, { PropTypes, Component } from 'react';
import withStyles from '../../decorators/withStyles';
import styles from './UpdateCourseEquivalencies.css';
import { Table, OverlayTrigger, Glyphicon, Popover, Input } from 'react-bootstrap';
import { Avatar, Card, CardHeader, CardText, CardActions } from 'material-ui';
let Colors = require('material-ui/lib/styles/colors');
const injectTapEventPlugin = require("react-tap-event-plugin");

@withStyles(styles)
class UpdateCourseEquivalencies extends Component {
  render() {
    injectTapEventPlugin();
    var Typeahead = require('react-typeahead').Typeahead;

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

    return (
      <div className="update-equivalencies-container">
        <div className="header">
          <h1>
            Update Course Equivalencies
            <span style={{paddingLeft: "10px"}}>
              <OverlayTrigger trigger="hover" placement="right" overlay={<Popover title="Update Courses">Here you can remove equivalencies by clicking the remove button below or add equivalencies by entering the CRN of the Marist course and the Course ID of the Transfer School course.</Popover>}>
                <Glyphicon glyph="glyphicon glyphicon-question-sign" />
              </OverlayTrigger>
            </span>
          </h1>

          <Card initiallyExpanded={false}>
            <CardHeader
              title="Define the equivalency you would like to add."
              avatar={<Avatar style={{color:'red'}}>A</Avatar>}
              actAsExpander={true}
              showExpandableButton={true}>
            </CardHeader>
            <CardText expandable={true}>
              <div className="course-fields">
                <Input type="text" placeholder="Marist Course" id="marist-course" name="marist-course" />
                <Input type="text" placeholder="Transfer Course" id="transerf-course" name="transfer-course" />
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
                <th>Marist Course</th>
                <th>Transfer Course</th>
                <th>Transfer School</th>
                <th>Remove Equivalency</th>
              </tr>
            </thead>

            <tbody>
            <tr>
              <td>Software Development II</td>
              <td>Computer Science II</td>
              <td>DCC</td>
              <td>
                <button type="button" className="btn btn-danger">
                  Remove
                </button>
              </td>
            </tr>

            <tr>
              <td>Software Development II</td>
              <td>Computer Science II</td>
              <td>DCC</td>
              <td>
                <button type="button" className="btn btn-danger">
                  Remove
                </button>
              </td>
            </tr>
            </tbody>

          </Table>
        </div>
      </div>
    );
  }
}

export default UpdateCourseEquivalencies;
