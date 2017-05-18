import React from 'react';
import { Router, Route, IndexRoute } from 'dva/router';
import IndexPage from './routes/IndexPage';
import LoginPage from "./routes/Login";
import ManagementShopList from "./routes/management/shopList";
import App from "./routes/App";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={IndexPage} />
      </Route>
      <Route path="/login" components={LoginPage} />
      <Router path="/manage">
        <IndexRoute component={ManagementShopList} />
        <Route path="shopList" components={ManagementShopList} />
      </Router>
    </Router>
  );
}

export default RouterConfig;
