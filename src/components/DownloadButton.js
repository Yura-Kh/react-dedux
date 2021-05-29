import { fetchIssues } from '../features/issues/issueSlice';
import store from '../store';

function DownloadButton() {

    async function onClickHandler() {
        await store.dispatch(fetchIssues);
    }

    return <button onClick={onClickHandler}>Download</button>;

}

export default DownloadButton;