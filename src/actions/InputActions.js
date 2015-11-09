import * as types from '../constants/ActionTypes';


class inputActions {

  render() {
    function searchTermChanged(searchTerm) {
      return {
        type: types.SEARCH_INPUT_CHANGED,
        searchTerm
      };
    }

    function markCaught(name) {
      return {
        type: types.MARK_CAUGHT,
        name
      };
    }
    function inputChanged(input) {
      console.log(input);
      return {
        type: types.SEARCH_INPUT_CHANGED,
        input

      }}
  }
}
