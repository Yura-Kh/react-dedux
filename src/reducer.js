import { combineReducers } from 'redux';
import {issueReducer, issuesReducer} from './features/issues/issueSlice';

const rootReducer = combineReducers({
    issues: issuesReducer,
    issue: issueReducer
});

export default rootReducer;