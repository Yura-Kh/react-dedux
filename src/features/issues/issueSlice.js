import client from '../../api/client';

const initialState = {
    entities: [],
    status: 'default'
};

export default function issuesReducer(state = initialState, action) {
    switch (action.type) {
        case 'issues/issuesLoading':
            return {...state, status: 'loading'};
        case 'issues/issuesLoaded':
            return {entities: action.payload, status: 'idle'};
        default:
            return state;
    }
}

export async function fetchIssues(dispatch, getState) {
    dispatch({ type: 'issues/issuesLoading'});
    const response = await client.get('https://api.github.com/repos/facebook/react/issues');
    dispatch({ type: 'issues/issuesLoaded', payload: response });
}