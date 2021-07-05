import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store';
import { ConcreteIssue } from './components/ConcreteIssue';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import { createBrowserHistory } from 'history';

//const customHistory = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <Router>
            <Switch>
                <Route path="/:issueNumber">
                    <ConcreteIssue/>
                </Route>
                <Route path="/">
                    <App/>
                </Route>
            </Switch>
        </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
