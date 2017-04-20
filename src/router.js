import React from 'react';
import { Router, Route, IndexRoute } from 'dva/router';
import IndexPage from './routes/IndexPage';
import LoginPage from "./routes/Login";
import App from "./routes/App";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={IndexPage} />
      </Route>
      <Route path="/login" components={LoginPage} />
    </Router>
  );
}

export default RouterConfig;
