/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import styles from './LoginPage.css';
import withStyles from '../../decorators/withStyles';
import { Form, Input, Button, Grid, Row, Col, MenuItem, OverlayTrigger, Popover, Glyphicon } from 'react-bootstrap';
import UserActions from '../../actions/UserActions';
import userStore from '../../stores/userStore';


@withStyles(styles)
class LoginPage extends Component {



  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  render() {

  const title = 'Log In';


   const inputSizeInstance = (
   <div>
    <Grid>
      <Row>
        <Col xs={6} sm={6} md={6} lg={6} >
          <h1>
            {title}
            <OverlayTrigger trigger="click" placement="right" overlay={<Popover title="Log In"> Enter your username and password into the form and then press the <strong> Submit </strong> button </Popover>}>
              <span className="helpIcon">  <Glyphicon glyph="glyphicon glyphicon-question-sign" /> </span>
            </OverlayTrigger>
          </h1>
          <form className="centeredLoginForm">
            <Input className="test" type="text" bsSize="large" placeholder="Username" id="userID" />
            <Input className="test" type="password" bsSize="large" placeholder="Password" id="userPassword" />
            <Button className="test"bsStyle="primary" block bsSize="large" onClick={this.logUser}>Submit</Button>
          </form>
      </Col>
    </Row>
   </Grid>
  </div>

);

    this.context.onSetTitle(title);
    return (
       <div desktop={true} width={320}>
        <div className="LoginPage-container">
            {inputSizeInstance}
        </div>
      </div>
    );

  }

  logUser() {
    console.log("THIS WORKS")
     var un = document.getElementById("userID").value;
     var up   = document.getElementById("userPassword").value;
     UserActions.logUser(un, up);
    console.log(un);
    console.log(up);
  }

}

export default LoginPage;
