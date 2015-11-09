import React, { PropTypes, Component } from 'react';
import withStyles from '../../decorators/withStyles';
import styles from './CreateNewAdmin.css';
import * as types from '../../constants/ActionTypes';
const TextField = require('material-ui/lib/text-field');
const RaisedButton = require('material-ui/lib/raised-button');
const injectTapEventPlugin = require("react-tap-event-plugin");
import AdminActions from '../../actions/AdminActions';
import AdminStore from '../../stores/AdminStore';

@withStyles(styles)
class CreateNewAdmin extends Component {
  static propTypes = {
    input: PropTypes.string,
    actions: PropTypes.object
  };


  render() {

    injectTapEventPlugin();

    return (
      <div className="NewAdminFields">
        <h1>Register New Administrator</h1>
        <p className="NewAdminPTag">Create a new administrator by filling out the fields below.</p>
          <div>
            <input id="username" type="text" name="username" />
          </div>
          <div>
           <input id="password" type="password" name="password" />
          </div>
          <div className="submit-button">
            <RaisedButton className="button" fullWidth={true} label="Submit" onClick={this.registerAdmin} />
          </div>
      </div>
    );
  };

  registerAdmin() {
    var user = document.getElementById("username").value;
    var pw   = document.getElementById("password").value;
    AdminActions.registerAdmin(user, pw);
  }
}

export default CreateNewAdmin;
