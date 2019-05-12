import { combineReducers } from 'redux';
import suggestionReducer from './suggestionReducer';
import dependencyReducer from './dependencyReducer';

export default combineReducers({
    suggestions: suggestionReducer,
    dependencies: dependencyReducer
});