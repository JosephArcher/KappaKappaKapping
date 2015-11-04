/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import styles from './LoginPage.css';
import withStyles from '../../decorators/withStyles';
const TextField = require('material-ui/lib/text-field');
const RaisedButton = require('material-ui/lib/raised-button');

@withStyles(styles)
class LoginPage extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  render() {
    const title = 'Log In';
    this.context.onSetTitle(title);
    return (
      <div className="LoginPage">
        <div className="LoginPage-container">
          <div className="LoginPage-components">
            <h1 >{title}</h1>
              <div >
              <TextField floatingLabelText="Username" /></div>
              <div >
              <TextField floatingLabelText="Password" /></div>
                <br></br>
              <div >
              <RaisedButton className="button" label="Submit" /></div>
          </div>
        </div>
      </div>
    );
  }

}

export default LoginPage;
