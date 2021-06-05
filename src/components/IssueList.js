import React from 'react';
import { useSelector } from 'react-redux';
import IssueListItem from './IssueListItem';

const currentIssues = (state) => state.issues.entities;

const currentStatus = (state) => state.issues.status;

const currentErrorMessage = (state) => state.issues.errorMessage;

const IssueList = () => {

  const issues = useSelector(currentIssues);

  const status = useSelector(currentStatus);

  const ErrorMessage = useSelector(currentErrorMessage);

  if (status === 'default') {
    return <h2>Press download button...</h2>;
  } else if (status === 'loading') {
    return <h2>Loading...</h2>;
  } else if (status === 'loadingError') {
    return <h2>{ErrorMessage}</h2>;
  }
  
  const renderedListItems = issues.map((issue) => {
    return <IssueListItem text={issue.body} />
  });

  return <ul className="issue-list">{renderedListItems}</ul>;
}

export default IssueList;