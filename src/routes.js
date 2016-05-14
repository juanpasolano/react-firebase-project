import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app/app';
import Classes from './components/pages/classes/classes';
import Login from './components/pages/login/login';

import requireAuth from './components/hoc/require-auth';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={Login}/>
    <Route path="classes" component={requireAuth(Classes)}/>
    <Route path="*" component={Login}/>
  </Route>
);
