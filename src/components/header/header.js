import React, { Component } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';

import HamburguerButton from './hamburguer-button';

export default class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      isNavigationOpen: false
    };
  }
  openNavigation() {
    let isOpen = !this.state.isNavigationOpen;
    this.setState({isNavigationOpen: isOpen});
  }
  render() {
    let navigationClasses = classNames('navbar-collapse collapse',{
      'in': this.state.isNavigationOpen
    });
    return (
      <div className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand">Toptal React academy</Link>
            <HamburguerButton onClick={this.openNavigation.bind(this)}/>
          </div>
          <div className={navigationClasses}>
            <ul className="nav navbar-nav">
              <li>
                <Link to="hello">Classes </Link>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li><a href="" target="_blank">Sign out <i className="zmdi zmdi-sign-in zmdi-hc-lg"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
