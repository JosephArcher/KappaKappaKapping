import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';
import withStyles from '../../decorators/withStyles';
import styles from './CreateNewAdmin.css';
import * as types from '../../constants/ActionTypes';
const injectTapEventPlugin = require("react-tap-event-plugin");
import AdminActions from '../../actions/adminActions';
import AdminStore from '../../stores/adminStore';
import { OverlayTrigger, Popover, Glyphicon, Input, Button, Alert } from 'react-bootstrap';

@withStyles(styles)
class CreateNewAdmin extends Component {
  static propTypes = {
    input: PropTypes.string,
    actions: PropTypes.object
  };

  render() {

    injectTapEventPlugin();

    return (
      <div className="NewAdminFields" id="NewAdminFields">
        <div id="registration-msg" style={{margin: "0 auto", width: "550px"}}></div>
        <h1>
          Register New Administrator
          <span style={{paddingLeft: "10px"}}>
            <OverlayTrigger trigger="hover" placement="right" overlay={<Popover title="Admin Registration">Enter the username and password in the appropriate fields to register a new admin.</Popover>}>
              <Glyphicon glyph="glyphicon glyphicon-question-sign" />
            </OverlayTrigger>
          </span>
        </h1>
        <p className="NewAdminPTag">Create a new administrator by filling out the fields below.</p>
          <div className="admin-fields">
            <Input type="text" placeholder="Username" id="username" />
            <Input type="password" placeholder="Password" id="password" />
          </div>
          <div className="submit-button">
            <Button onClick={this.registerAdmin}>Submit</Button>
          </div>
      </div>
    );
  };

  registerAdmin() {
    var successfulRegistration = (
      <Alert bsStyle="success" dismissAfter={2000}>
        <strong>Success!</strong> The administrator has been registered.
      </Alert>
    );

    var unsuccessfulRegistration = (
      <Alert bsStyle="danger" dismissAfter={2000}>
        <strong>Oops...</strong> The administrator could not be registered.
      </Alert>
    );

    var user = document.getElementById("username").value;
    var pw = document.getElementById("password").value;

    document.getElementById("username").value = "";
    document.getElementById("password").value = "";

    AdminActions.registerAdmin(user, pw);
    ReactDOM.render(successfulRegistration, document.getElementById('registration-msg'));
  }
}

export default CreateNewAdmin;
