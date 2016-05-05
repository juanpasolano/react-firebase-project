import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app/app';
import Classes from './components/pages/classes/classes';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={Classes}/>
  </Route>
);
