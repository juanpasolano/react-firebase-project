import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app/app';
import Login from './components/pages/login/login';
import Lectures from './components/pages/lectures/lectures';
import LecturesForm from './components/pages/lectures/lectures-form';
import Attendees from './components/pages/attendees/attendees';

import requireAuth from './components/hoc/require-auth';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={Login}/>
    <Route path="lectures" component={requireAuth(Lectures)}/>
    <Route path="lectures/new" component={requireAuth(LecturesForm)}/>
    <Route path="lectures/edit/:id" component={requireAuth(LecturesForm)}/>
    <Route path="/lectures/:id/attendees" component={requireAuth(Attendees)}/>
  </Route>
);
