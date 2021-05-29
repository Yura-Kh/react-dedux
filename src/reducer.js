import { combineReducers } from 'redux';
import issuesReducer from './features/issues/issueSlice';

const rootReducer = combineReducers({
    issues: issuesReducer,
});

export default rootReducer;