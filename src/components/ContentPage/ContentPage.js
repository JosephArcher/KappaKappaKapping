/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import styles from './ContentPage.css';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class ContentPage extends Component {

  static propTypes = {
    path: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    title: PropTypes.string,
  };

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

 
        

  render() {
    const title ="Credit Tracker";
    this.context.onSetTitle(title);
    return (
      <div className="ContentPage">
        <div className="ContentPage-container">
        <h1 className="title">{title}</h1>
        <p className="descrip">Marist Transfer Credit Tracker allows users to select completed 
        classes from their current University and receieve a full Marist College Transfer Credit Report. 
        </p>
         <img className="Header-brandImg" src={require('./campusgreen.jpg')}  alt="React" />
        </div>
      </div>
    );
  }

}

export default ContentPage;
