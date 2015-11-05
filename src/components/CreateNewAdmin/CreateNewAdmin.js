import React, { PropTypes, Component } from 'react';
import withStyles from '../../decorators/withStyles';
import styles from './CreateNewAdmin.css';
const TextField = require('material-ui/lib/text-field');
const RaisedButton = require('material-ui/lib/raised-button');
const injectTapEventPlugin = require("react-tap-event-plugin");

@withStyles(styles)
class CreateNewAdmin extends Component {
  render() {
    injectTapEventPlugin();

    return (
      <div className="NewAdminFields">
        <h1>Register New Administrator</h1>
        <p className="NewAdminPTag">Create a new administrator by filling out the fields below.</p>
          <div>
            <TextField
              hintText="User ID"
              floatingLabelText="New User ID" />
          </div>
          <div>
            <TextField
              hintText="Password Field"
              floatingLabelText="Password"
              type="password" />
          </div>
          <div className="submit-button">
            <RaisedButton className="button" fullWidth="true" label="Submit" />
          </div>
      </div>
    );
  }
}

export default CreateNewAdmin;
