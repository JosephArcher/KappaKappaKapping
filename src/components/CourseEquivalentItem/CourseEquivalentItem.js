import React, { Component, PropTypes } from 'react';
import AdminActions from '../../actions/adminActions';

export default class CourseEquivalentItem extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired
  };

  render() {

    const item = this.props.item;
    function _removeCourseEquivalency() {
      AdminActions.removeCourseEquivalency(item.marist_crn, item.transfer_id);
      var row = document.getElementById(item.marist_course + item.transfer_course);
      row.style.display = 'none';
    }

    return (
      <tr id={item.marist_course + item.transfer_course}>
        <td>{item.marist_course}</td>
        <td>{item.transfer_course}</td>
        <td>DCC</td>
        <td>
          <button
            type="button"
            className="btn btn-danger"
            onClick={_removeCourseEquivalency}>
            Remove
          </button>
        </td>
      </tr>
    );
  }
}
export default CourseEquivalentItem;
