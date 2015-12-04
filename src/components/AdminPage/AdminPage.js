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

var injectTapEventPlugin = require("react-tap-event-plugin");

@withStyles(styles)
class AdminPage extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired
  };

  render() {
    // This makes the tabs
    injectTapEventPlugin();

    const title = 'Administrator Options';
    this.context.onSetTitle(title);
    return (
      <div className="tabs-container" style={{paddingTop: "15px"}}>
        <Tabs defaultActiveKey={1} animation={false}>
          <Tab eventKey={1} title="Courses">
            <UpdateCourseEquivalencies></UpdateCourseEquivalencies>
          </Tab>
          <Tab eventKey={2} title="Programs">
            <UpdatePrograms></UpdatePrograms>
          </Tab>
          <Tab eventKey={3} title="Students">
            <StudentTable></StudentTable>
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
