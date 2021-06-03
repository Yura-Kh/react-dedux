import './App.css';
import DownloadButton from './components/DownloadButton';
import IssueList from './components/IssueList';
import { useDispatch } from 'react-redux';
import { fetchIssues } from './features/issues/issueSlice';

function App() {

  const dispatch = useDispatch();

  async function onClickHandler() {
      await dispatch(fetchIssues);
  }

  return (
    <>
      <DownloadButton onClickHandler = {onClickHandler} />
      <IssueList />
    </>
  );
}

export default App;
