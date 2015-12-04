/**
 * Created by priscoj on 11/6/15.
 */
import React, { PropTypes, Component } from 'react';
import withStyles from '../../decorators/withStyles';
import styles from './UpdateCourseEquivalencies.css';
import { Table } from 'react-bootstrap';
import { Avatar, Card, CardHeader, CardText, CardActions, RaisedButton, FlatButton } from 'material-ui';
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
          <h1>Update Course Equivalencies</h1>

          <Card initiallyExpanded={false}>
            <CardHeader
              title="Define the equivalency you would like to add."
              avatar={<Avatar style={{color:'red'}}>A</Avatar>}
              actAsExpander={true}
              showExpandableButton={true}>
            </CardHeader>
            <CardText expandable={true}>
              Marist Course: <Typeahead
              options={['Compilers', 'Operating Systems', 'Database Management', 'Introduction to Programming', 'C++ (lol not really)', 'Software Development', 'Language Study']}
              maxVisible={5} />
              Transfer Course: <Typeahead
              options={['Compilers', 'Operating Systems', 'Database Management', 'Introduction to Programming', 'C++ (lol not really)', 'Software Development', 'Language Study']}
              maxVisible={5} />
            </CardText>
            <CardActions expandable={true}>
              <RaisedButton label="Submit" backgroundColor={ Colors.green700 }/>
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
