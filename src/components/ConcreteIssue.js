import  { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import React from "react";
import {fetchConcreteIssueByNumber} from "../features/issues/issueSlice";
import { useHistory } from "react-router-dom";

const currentIssue = (state) => state.issue.entity;
const currentStatus = (state) => state.issue.status;
const currentErrorMessage = (state) => state.issue.errorMessage;

export const ConcreteIssue = (props) => {
    const issue = useSelector(currentIssue);
    const status = useSelector(currentStatus);
    const ErrorMessage = useSelector(currentErrorMessage);

    const dispatch = useDispatch();

    const { issueNumber } = useParams();

    const history = useHistory();
    const onClickHandler = () => {
        history.push("/");
    };

    useEffect(() => {
        const fetchConcreteIssue = fetchConcreteIssueByNumber(issueNumber);
        dispatch(fetchConcreteIssue);
    }, []);

    if (status === 'default') {
        return <h2>Wait...</h2>;
    } else if (status === 'loading') {
        return <h2>Loading...</h2>;
    } else if (status === 'loadingError') {
        return <h2>{ErrorMessage}</h2>;
    }
    return (
        <>
            <button onClick={onClickHandler}>Back</button>
            <h1>{issue.body}</h1>
        </>);
};