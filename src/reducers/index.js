import {combineReducers} from 'redux';
import courses from './courseReducer'; // "courses" can be aliased any name

const rootReducer  = combineReducers({
    courses
});

export default rootReducer;