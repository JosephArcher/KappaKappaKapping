/**
 * Created by priscoj on 11/6/15.
 */
import React, { PropTypes, Component } from 'react';
import withStyles from '../../decorators/withStyles';
import styles from './UpdateCourseEquivalencies.css';
import { Avatar, Card, CardHeader, CardText, CardActions, Table, TableHeader, TableRow, TableHeaderColumn, TableBody, TableRowColumn, RaisedButton, FlatButton } from 'material-ui';
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

        <div className="table">
          <Table height={this.state.height} fixedHeader={this.state.fixedHeader} selectable={this.state.selected}>

            <TableHeader>
              <TableRow>
                <TableHeaderColumn colSpan="4" tooltip="This table lists Marist courses and their equivalent DCC courses." style={{textAlign: 'center'}}>
                  Course Information
                </TableHeaderColumn>
              </TableRow>
              <TableRow>
                <TableHeaderColumn>Marist Course</TableHeaderColumn>
                <TableHeaderColumn>Transfer Course</TableHeaderColumn>
                <TableHeaderColumn>Transfer School</TableHeaderColumn>
                <TableHeaderColumn>Remove Equivalency</TableHeaderColumn>
              </TableRow>
            </TableHeader>

            <TableBody showRowHover={this.state.showRowHover} stripedRows={this.state.stripedRows}>
              <TableRow>
                <TableRowColumn>Software Development II</TableRowColumn>
                <TableRowColumn>Computer Science II</TableRowColumn>
                <TableRowColumn>DCC</TableRowColumn>
                <TableRowColumn><RaisedButton label="Remove" backgroundColor={ this.state.color } /></TableRowColumn>
              </TableRow>

              <TableRow>
                <TableRowColumn>Systems Design</TableRowColumn>
                <TableRowColumn>Systems Design</TableRowColumn>
                <TableRowColumn>DCC</TableRowColumn>
                <TableRowColumn><RaisedButton label="Remove" backgroundColor={ this.state.color } /></TableRowColumn>
              </TableRow>

              <TableRow>
                <TableRowColumn>Introduction to Programming</TableRowColumn>
                <TableRowColumn>Introduction to Programming</TableRowColumn>
                <TableRowColumn>DCC</TableRowColumn>
                <TableRowColumn><RaisedButton label="Remove" backgroundColor={ this.state.color } /></TableRowColumn>
              </TableRow>

              <TableRow>
                <TableRowColumn>Operation Systems</TableRowColumn>
                <TableRowColumn>Introduction to OS</TableRowColumn>
                <TableRowColumn>DCC</TableRowColumn>
                <TableRowColumn><RaisedButton label="Remove" backgroundColor={ this.state.color } /></TableRowColumn>
              </TableRow>

              <TableRow>
                <TableRowColumn>Software Development II</TableRowColumn>
                <TableRowColumn>Computer Science II</TableRowColumn>
                <TableRowColumn>DCC</TableRowColumn>
                <TableRowColumn><RaisedButton label="Remove" backgroundColor={ this.state.color } /></TableRowColumn>
              </TableRow>

              <TableRow>
                <TableRowColumn>Systems Design</TableRowColumn>
                <TableRowColumn>Systems Design</TableRowColumn>
                <TableRowColumn>DCC</TableRowColumn>
                <TableRowColumn><RaisedButton label="Remove" backgroundColor={ this.state.color } /></TableRowColumn>
              </TableRow>

              <TableRow>
                <TableRowColumn>Introduction to Programming</TableRowColumn>
                <TableRowColumn>Introduction to Programming</TableRowColumn>
                <TableRowColumn>DCC</TableRowColumn>
                <TableRowColumn><RaisedButton label="Remove" backgroundColor={ this.state.color } /></TableRowColumn>
              </TableRow>

              <TableRow>
                <TableRowColumn>Operation Systems</TableRowColumn>
                <TableRowColumn>Introduction to OS</TableRowColumn>
                <TableRowColumn>DCC</TableRowColumn>
                <TableRowColumn><RaisedButton label="Remove" backgroundColor={ this.state.color } /></TableRowColumn>
              </TableRow>

              <TableRow>
                <TableRowColumn>Software Development II</TableRowColumn>
                <TableRowColumn>Computer Science II</TableRowColumn>
                <TableRowColumn>DCC</TableRowColumn>
                <TableRowColumn><RaisedButton label="Remove" backgroundColor={ this.state.color } /></TableRowColumn>
              </TableRow>

              <TableRow>
                <TableRowColumn>Systems Design</TableRowColumn>
                <TableRowColumn>Systems Design</TableRowColumn>
                <TableRowColumn>DCC</TableRowColumn>
                <TableRowColumn><RaisedButton label="Remove" backgroundColor={ this.state.color } /></TableRowColumn>
              </TableRow>

              <TableRow>
                <TableRowColumn>Introduction to Programming</TableRowColumn>
                <TableRowColumn>Introduction to Programming</TableRowColumn>
                <TableRowColumn>DCC</TableRowColumn>
                <TableRowColumn><RaisedButton label="Remove" backgroundColor={ this.state.color } /></TableRowColumn>
              </TableRow>

              <TableRow>
                <TableRowColumn>Operation Systems</TableRowColumn>
                <TableRowColumn>Introduction to OS</TableRowColumn>
                <TableRowColumn>DCC</TableRowColumn>
                <TableRowColumn><RaisedButton label="Remove" backgroundColor={ this.state.color } /></TableRowColumn>
              </TableRow>

            </TableBody>

          </Table>
        </div>
      </div>
    );
  }
}

export default UpdateCourseEquivalencies;
