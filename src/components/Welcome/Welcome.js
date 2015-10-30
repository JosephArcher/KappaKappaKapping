/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React ,{ PropTypes, Component } from 'react';

import styles from './Welcome.css';
import withStyles from '../../decorators/withStyles';
const TextField = require('material-ui/lib/text-field');
const RaisedButton = require('material-ui/lib/raised-button');


import Link from '../Link';


@withStyles(styles)
class Welcome extends React.Component{

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  render() {
    const title = 'Welcome';
    this.context.onSetTitle(title);
    return (
      <div className="Welcome" desktop={true} width={320}>
        <div className="Welcome-container">
          <h1>{title}</h1>
<RaisedButton label=" SELECT CLASSES" />
           
          
        </div>
      </div>
    );
  }

}



export default Welcome;

