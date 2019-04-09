export const SET_FILTER = 'SET_FILTER';
export const SHOW_BOOKMARKED = 'SHOW_BOOKMARKED';
export const SHOW_ALL = 'SHOW_ALL';
export const TOGGLE_BOOKMARK = 'TOGGLE_BOOKMARK';
export const RECEIVE_REFERENCES = 'RECEIVE_REFERENCES';


export function toggleBookmark(key) {
    return {
        type: TOGGLE_BOOKMARK,
        key
    }
}

export function setFilter(filter) {
    return {
        type: SET_FILTER,
        filter
    }
}

export function getReferences(data) {
    return dispatch =>
    dispatch(receiveReferences(data.entities));
}

function receiveReferences(json) {
    return {
      type: RECEIVE_REFERENCES,
      references: json
    }
  }
