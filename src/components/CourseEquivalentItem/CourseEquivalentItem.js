import React, { Component, PropTypes } from 'react';
import AdminActions from '../../actions/adminActions';

class CourseEquivalentItem extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired
  };

  render() {

    const item = this.props.item;
    function _removeCourseEquivalency() {
      AdminActions.removeCourseEquivalency();
    }

    return (
      <tr>
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
