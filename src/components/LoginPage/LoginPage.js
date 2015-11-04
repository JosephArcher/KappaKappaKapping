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
<<<<<<< HEAD


var username = this.refs.yo;
console.log(username);
var usernameValue = username.value;

    const title = 'Log In';
=======
    const title = 'Login';
>>>>>>> master
    this.context.onSetTitle(title);
    return (

      <div className="LoginPage">
        <div className="LoginPage-container">
          <div className="LoginPage-components">
            <h1 >{title}</h1>
              <div >
              <TextField floatingLabelText="Username"  ref="yo" /></div>
              <div >
              <TextField id="password" floatingLabelText="Password" /></div>
                <br></br>
              <div >
              <RaisedButton className="button" label="Submit" onClick={handleNav} /></div>
          </div>
        </div>
      </div>
    );
        function handleNav() {

console.log("x");
console.log(usernameValue);
};

handleNav();



  }

}

export default LoginPage;
