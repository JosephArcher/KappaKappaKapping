/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import styles from './LoginPage.css';
import withStyles from '../../decorators/withStyles';
const TextField = require('material-ui/lib/text-field');
const RaisedButton = require('material-ui/lib/raised-button');
import { findDOMNode } from 'react-dom';

@withStyles(styles)
class LoginPage extends Component {



  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,

  };

  // var MyComponent = React.createClass({
  //   propTypes: {
  //     children: React.PropTypes.element.isRequired
  //   },

  // _createNewPirate(event) {
  //   const pirateName = event.target.value,
  //     randomBtn = findDOMNode(this._randomBtn);

  //   if (pirateName !== '') {
  //     randomBtn.setAttribute('disabled', 'true');
  //   }
  //   else {
  //     randomBtn.removeAttribute('disabled');
  //   }

  //   fireAction(CREATE, pirateName);
  // };

  render() {

           function handleNav() {
var item = this.refs.myField.getValue();
 console.log("x");
console.log(item);
 };

    var myComponent = <myComponent />;
    var myComponentElement = <myComponent />;
// React.createClass({
//     propTypes: {
//       children: React.PropTypes.element.isRequired
//     }
//     });


// var username = this.refs.yo;
// console.log(username);
// var usernameValue = username.value;
//this.props.item = "";
   
var item = "yo";

    const title = 'Login';

    //var y = Component.getElementById("username").getValue();
    //console.log(y);


    this.context.onSetTitle(title);
    return (

      <div className="LoginPage">
        <div className="LoginPage-container">
          <h1 >{title}</h1>
          <div className="LoginPage-components">
          
              <div >
              <TextField id="username" floatingLabelText="Username" value={item} /></div>
              <div >
              <TextField id="password" floatingLabelText="Password" /></div>
                <br></br>
              <div >
              <RaisedButton className="button" label="Submit" onClick={handleNav} /></div>
          </div>
        </div>
      </div>
    );


function onChange(e) {
  var value = e.target.value;
  this.props.onChangeInputHandler( this.props.index, value );
  this.item.onChangeInputHandler( value );
};





  }
  

}

export default LoginPage;
