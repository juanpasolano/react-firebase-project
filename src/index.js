import React, { Component } from 'react';
import { render } from 'react-dom';
import App from './components/app/app';

require('./favicon.ico');
import './styles/styles.scss';


render(<App/>, document.getElementById('app'));
