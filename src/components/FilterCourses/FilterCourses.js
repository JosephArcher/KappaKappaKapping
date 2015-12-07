import React, { Component, PropTypes } from 'react';

export default class FilterCourses extends Component {
  static propTypes = {
    searchTerm: PropTypes.string,
    actions: PropTypes.object
  };

  render() {
    const {searchTerm, actions} = this.props;

    return (
      <form className="test">
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            name="search"
            placeholder="Search Courses..."
            value={searchTerm}
            onChange={e => actions.searchTermChanged(e.target.value)} />
        </div>
      </form>
    );
  }
}