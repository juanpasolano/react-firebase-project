import React, { Component } from 'react';
import { render } from 'react-dom';
require('./favicon.ico');
import './styles/styles.scss';

class App extends Component {
	render () {
		return (
			<div>
			Hello React
			</div>
		);
	}
}

render(<App/>, document.getElementById('app'));
