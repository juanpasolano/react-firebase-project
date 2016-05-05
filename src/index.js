import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';

import { Provider } from 'react-redux';
import configureStore from './redux/store/configureStore';

import App from './components/app/app';

require('./favicon.ico');
import './styles/styles.scss';


render(
  <Provider store={configureStore()}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  ,document.getElementById('app')
);
