import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app/app';
import Classes from './components/pages/classes/classes';
import Login from './components/pages/login/login';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={Classes}/>
    <Route path="login" component={Login}/>
  </Route>
);
