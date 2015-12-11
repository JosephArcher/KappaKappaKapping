/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import styles from './AdminPage.css';
import withStyles from '../../decorators/withStyles';
import { Tabs, Tab } from 'react-bootstrap';
import CreateNewAdmin from '../CreateNewAdmin';
import StudentTable from '../StudentTable';
import UpdatePrograms from '../UpdatePrograms';
import UpdateCourseEquivalencies from '../UpdateCourseEquivalencies';
import AdminStore from '../../stores/adminStore';
import AdminActions from '../../actions/AdminActions';
var request = require('superagent');
var injectTapEventPlugin = require("react-tap-event-plugin");

@withStyles(styles)
class AdminPage extends React.Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired
  };

  constructor() {
    super();
    this.state = { students: [], courses: [], equivalents: [] };
  }

  componentDidMount() {
    request
      .get('/api/adminApi/getStudents')
      .end(function(err, res) {
        if (err) {
          console.log("There's been an error: getting students.");
          console.log(err);
        } else {
          console.log("Printing res body: " + res.body);
          this.setState({
            students: res.body
          });
        }
      }.bind(this));

    request
      .get('/api/adminApi/getProgramRequirements')
      .end(function(err, res) {
        if (err) {
          console.log("There's been an error: getting Program Requirements.");
          console.log(err);
        } else {
          this.setState({
            courses: res.body
          });
        }
      }.bind(this));

    request
      .get('api/adminApi/getCourseEquivalents')
      .end(function(err, res) {
        if (err) {
          console.log("There's been an error: getting Course Equivalents.");
          console.log(err);
        } else {
          this.setState({
            equivalents: res.body
          });
        }
      }.bind(this));

  }

  render() {
    // This makes the tabs
    injectTapEventPlugin();

    const title = 'Administrator Options';
    this.context.onSetTitle(title);
    return (
      <div className="tabs-container" style={{paddingTop: "15px"}}>
        <Tabs defaultActiveKey={1} animation={false}>
          <Tab eventKey={1} title="Courses">
            <UpdateCourseEquivalencies equivalents={this.state.equivalents}></UpdateCourseEquivalencies>
          </Tab>
          <Tab eventKey={2} title="Programs">
            <UpdatePrograms courses={this.state.courses}></UpdatePrograms>
          </Tab>
          <Tab eventKey={3} title="Students">
            <StudentTable students={this.state.students}></StudentTable>
          </Tab>
          <Tab eventKey={4} title="Administrators">
            <CreateNewAdmin></CreateNewAdmin>
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default AdminPage;
