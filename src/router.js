import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Products from "./routes/Products";
import LoginPage from "./routes/Login";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} />
      <Route path="/products" components={Products} />
      <Route path="/login" components={LoginPage} />
    </Router>
  );
}

export default RouterConfig;
