/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import withStyles from '../../decorators/withStyles';
import styles from './Profile.css';

import {Form} from 'react-bootstrap';
import {Input} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {Grid} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {MenuItem} from 'react-bootstrap';
import {Popover} from 'react-bootstrap';
import {OverlayTrigger} from 'react-bootstrap';
import {Glyphicon} from 'react-bootstrap';
import DropdownButton from 'react-bootstrap';
const injectTapEventPlugin = require("react-tap-event-plugin");
import Link from '../Link';
import Welcome from '../Welcome';
import UserActions from '../../actions/UserActions';
@withStyles(styles)
class Profile extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired
  };


  render() {
    const title = 'My Profile';
    this.context.onSetTitle(title);

     const inputSizeInstance = (
    <div>
     <Grid>
     <OverlayTrigger trigger="click" placement="right" overlay={<Popover title="Profile"> To edit your profile, change the fields you wish to edit and then click the <strong> Save Profile </strong> button </Popover>}>
           <p className="topMargin"> <span className="stepHeading">{title} </span>  <span className="pull-right helpIcon">  <Glyphicon glyph="glyphicon glyphicon-question-sign" /> </span> </p>
           </OverlayTrigger>
      <p> If you wish to edit your profile information simply edit the appropriate field and click the save profile button to keep the changes. </p>
        <div>
        <form className="centeredLoginForm">
        <Row>

          <Col xs={6} md={6} lg={6}>
                <Input type="text" bsSize="large" id="first-name" placeholder="First Name" />
                <Input type="text" bsSize="large" id="last-name" placeholder="Last Name" />
                <Input type="text" bsSize="large" id="email" placeholder="Email" />
                <Input type="text" bsSize="large" id="phone-number" placeholder="Phone Number" />
          </Col>
           <Col xs={6} md={6} lg={6}>

                  <Input bsSize="large" type="select" id="major">
                    <option value="">Intended Major</option>
                    <option value="Not Sure Yet">Not Sure Yet</option>
                    <option value="Computer Science">Computer Science</option>
                    <option value="Math">Math</option>
                    <option value="Fashion">Fashion</option>
                    <option value="Business">Business</option>
                    <option value="Communications">Communications</option>
                  </Input>

                  <Input bsSize="large" type="select" id="start-date">
                    <option value="">Intended Start Date</option>
                    <option value="02-01-16">Spring 2016</option>
                    <option value="09-01-16">Fall 2016</option>
                    <option value="02-01-17">Spring 2017</option>
                    <option value="09-01-17">Fall 2017</option>
                    <option value="02-01-18">Spring 2018</option>
                    <option value="09-01-18">Fall 2018</option>
                  </Input>

                  <Input bsSize="large" type="select">
                    <option value="DCC0000001">Current School</option>
                    <option value="DCC0000001">Dutchess Community College</option>
                  </Input>
          </Col>
      </Row>
       <Button bsStyle="primary" block bsSize="large" onClick={this.updateProfile}>Save Profile</Button>
       </form>
    </div>
  </Grid>
    </div>
    );
    return (
      <div desktop={true} width={320}>
        <div className="Profile-container">

            {inputSizeInstance}

        </div>
      </div>
    );
  }

  updateProfile() {
    var user = sessionStorage.getItem('user');
    var firstName = document.getElementById('first-name').value;
    var lastName = document.getElementById('last-name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone-number').value;
    var major = document.getElementById('major').value;
    var startDate = document.getElementById('start-date').value;

    document.getElementById('first-name').value = "";
    document.getElementById('last-name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('phone-number').value = "";

    UserActions.updateProfile(user, firstName, lastName, email, phone, major, startDate);


  }

}

export default Profile;

