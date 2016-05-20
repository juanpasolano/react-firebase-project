import React, { Component, PropTypes } from 'react';
import Header from '../header/header';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.object
  };
  
  render () {
    return (
      <div>
        <Header/>
        <div className="container m-t-6">
          {this.props.children}
        </div>
      </div>
    );
  }
}
