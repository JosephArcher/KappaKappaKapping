/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import styles from './LoginPage.css';
import withStyles from '../../decorators/withStyles';
import {Form} from 'react-bootstrap';
import {Input} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {Grid} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {MenuItem} from 'react-bootstrap';
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
        <Col xs={12} sm={12} md={12} lg={12} > 
          <form className="centeredLoginForm">
            <h1> {title} </h1>
            <Input className="test" type="text" bsSize="large" placeholder="Username" id="userID" />
            <Input className="test"type="text" bsSize="large" placeholder="Password" id="userPassword" />
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
