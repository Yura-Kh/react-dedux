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