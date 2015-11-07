/**
 * Created by priscoj on 11/6/15.
 */
import React, { PropTypes, Component } from 'react';
import withStyles from '../../decorators/withStyles';
import styles from './UpdateCourseEquivalencies.css';

const injectTapEventPlugin = require("react-tap-event-plugin");

@withStyles(styles)
class UpdateCourseEquivalencies extends Component {
  render() {
    injectTapEventPlugin();

    return (
      <div></div>
    );
  }
}

export default UpdateCourseEquivalencies;
