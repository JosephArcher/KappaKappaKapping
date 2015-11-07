/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import styles from './AdminPage.css';
import withStyles from '../../decorators/withStyles';
import {Tabs, Tab} from 'material-ui';
import CreateNewAdmin from '../CreateNewAdmin';
import StudentTable from '../StudentTable';
import UpdatePrograms from '../UpdatePrograms';
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
      <div className="tabs-container">
        <Tabs>
          <Tab label="Courses" >

          </Tab>
          <Tab label="Programs" >
            <UpdatePrograms></UpdatePrograms>
          </Tab>
          <Tab label="Students" >
            <StudentTable></StudentTable>
          </Tab>
          <Tab label="Administrators" >
            <CreateNewAdmin></CreateNewAdmin>
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default AdminPage;
