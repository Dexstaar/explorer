import { combineReducers } from 'redux';
import suggestionReducer from './suggestionReducer';

export default combineReducers({
    suggestions: suggestionReducer
});