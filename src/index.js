import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import App from './components/app/app';

require('./favicon.ico');
import './styles/styles.scss';


render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('app'));
