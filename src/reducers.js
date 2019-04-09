import { combineReducers } from 'redux';
import {
    SET_FILTER,
    SHOW_BOOKMARKED,
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
            return {...state, references};
        default:
            return state;
    }
}

export default combineReducers({
    displayFilter,
    references
})