import React, { Component } from 'react';

import Header from '../header/header';

export default class App extends Component {
  render () {
    return (
      <div>
        <Header/>
        <div className="container m-t-5">
          {this.props.children}
        </div>
      </div>
    );
  }
}
