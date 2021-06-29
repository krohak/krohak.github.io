import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  Router,
  Switch,
  Route,
} from "react-router-dom";
import { createBrowserHistory } from "history";
import { Projects } from './Projects';

ReactDOM.render(
  <React.StrictMode>
    <Router asename={process.env.PUBLIC_URL+ '/'} history={createBrowserHistory()}>
        <Switch>
          {Projects.map((project, index) =>
            <Route path={`/${project.title.toLowerCase().replace(/\s/g, "-")}`} exact key={index}>
              <App openDialog={index}/>
            </Route>
           )}
          <Route path="/me" exact>
            <App openDialog={-1}/>
          </Route>
          <Route path="/">
            <App/>
          </Route>
        </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
