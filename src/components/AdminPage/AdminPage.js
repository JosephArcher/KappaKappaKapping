/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import styles from './AdminPage.css';
import withStyles from '../../decorators/withStyles';
import {Tabs, Tab} from 'material-ui';

@withStyles(styles)
class AdminPage extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired
  };

  render() {
    // This makes the tabs
    var injectTapEventPlugin = require("react-tap-event-plugin");
    injectTapEventPlugin();

    const title = 'Administrator Options';
    this.context.onSetTitle(title);
    return (
      <div className="tabs-container">
        <Tabs>
          <Tab label="Courses" >
            (Tab content...) 1
          </Tab>
          <Tab label="Programs" >
            (Tab content...) 2
          </Tab>
          <Tab label="Students" >
            (Tab content...) 3
          </Tab>
          <Tab label="Administrators" >
            (Tab content...) 4
          </Tab>
        </Tabs>
      </div>
    );
  }

}

export default AdminPage;
