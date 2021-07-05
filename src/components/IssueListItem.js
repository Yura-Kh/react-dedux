import React from 'react';
import { Link } from 'react-router-dom';

const IssueListItem = (props) => <li><Link to={`/${props.number}`}>{props.text}</Link></li>;
 
export default IssueListItem;