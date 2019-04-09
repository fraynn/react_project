import { combineReducers } from 'redux';
import {
  SET_FILTER,
  SHOW_ALL,
  TOGGLE_BOOKMARK,
  RECEIVE_REFERENCES
} from './actions';

const displayFilter = (state = SHOW_ALL, action) => {
  switch (action.type) {
    case SET_FILTER:
      return action.filter;
    default:
      return state;
  }
}

const references = (state = [], action) => {
  switch (action.type) {
    case TOGGLE_BOOKMARK:
      return state.map(reference => {
        return reference.key === action.key ?
          { ...reference, bookmarked: !reference.bookmarked } :
          reference
      });
    case RECEIVE_REFERENCES:
      const references = [...state, ...action.references];
      // Set property bookmarked to false if not set
      return references.map(ref => ref.bookmarked = ref.bookmarked ?
        { ...ref } :
        { ...ref, bookmarked: false });
    default:
      return state;
  }
}

export default combineReducers({
  displayFilter,
  references
});