/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import withStyles from '../../decorators/withStyles';
import styles from './RegisterPage.css';
const TextField = require('material-ui/lib/text-field');
const RaisedButton = require('material-ui/lib/raised-button');
const DropDownMenu  = require('material-ui/lib/drop-down-menu');


@withStyles(styles)
class RegisterPage extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };



  render() {
    const title = 'New User Registration';
    this.context.onSetTitle(title);
    const menuItems = [
       { payload: '1', text: 'Never' },
       { payload: '2', text: 'Every Night' },
       { payload: '3', text: 'Weeknights' },
       { payload: '4', text: 'Weekends' },
       { payload: '5', text: 'Weekly' },
    ];

   

   
    return (
      <div className="RegisterPage">
        <div className="RegisterPage-container">
          <h1>{title}</h1>
          <div><TextField hintText="First and Last Name" /></div>
          <div><TextField hintText="Current School" /></div>
          <div><TextField hintText="Email" /></div>
          <div><TextField hintText="Address" /></div>
          <div><TextField hintText="Phone Number" /></div>
          <div><TextField hintText="Birthdate" /></div>
              <div>
              <RaisedButton className="button" label="Submit" /></div>
          </div>

          <div>
          <DropDownMenu menuItems={menuItems} onChange={this.handleNav}/>
          </div>
        </div>
      
    );
  }

}

export default RegisterPage;
