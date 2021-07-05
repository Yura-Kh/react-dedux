import getDataFromServer from '../../api/axiosClient';

const initialState = {
    entities: [],
    status: 'default'
};

export const issuesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'issues/issuesLoading':
            return {...state, status: 'loading'};
        case 'issues/issuesLoaded':
            return {entities: action.payload, status: 'idle'};
        case 'issues/issuesLoadingError':
            return {...state, status: 'loadingError', errorMessage: action.errorMessage};
        default:
            return state;
    }
}

export const fetchIssues = async (dispatch, getState) => {
    dispatch({ type: 'issues/issuesLoading'});
    try{
        const response = await getDataFromServer('https://api.github.com/repos/facebook/react/issues');
        dispatch({ type: 'issues/issuesLoaded', payload: response });
    } catch(error) {
        console.log(error.message);
        dispatch({ type: 'issues/issuesLoadingError', errorMessage: error.message});
    }
}

const issueInitialState = {
    entity: undefined,
    status: 'default'
};

export const issueReducer = (state = issueInitialState, action) => {
    switch (action.type) {
        case 'issue/issueLoading':
            return {...state, status: 'loading'};
        case 'issue/issueLoaded':
            return {entity: action.payload, status: 'idle'};
        case 'issue/issueLoadingError':
            return {...state, status: 'loadingError', errorMessage: action.errorMessage};
        default:
            return state;
    }
}

export const fetchConcreteIssueByNumber = (issueNumber) => async (dispatch, getState) => {
    dispatch({ type: 'issue/issueLoading'});
    try{
        const response = await getDataFromServer(`https://api.github.com/repos/facebook/react/issues/${issueNumber}`);
        dispatch({ type: 'issue/issueLoaded', payload: response });
    } catch(error) {
        console.log(error.message);
        dispatch({ type: 'issue/issueLoadingError', errorMessage: error.message});
    }
}