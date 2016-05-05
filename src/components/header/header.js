import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Header extends Component {
  render() {
    return (
      <div className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand">Toptal React academy</Link>
            <button className="navbar-toggle" type="button" data-toggle="collapse" data-target="#navbar-main">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>
          <div className="navbar-collapse collapse" id="navbar-main">
            <ul className="nav navbar-nav">
              <li>
                <Link to="hello">Courses</Link>
              </li>
            </ul>

            <ul className="nav navbar-nav navbar-right">
              <li><a href="http://builtwithbootstrap.com/" target="_blank">Sign out</a></li>
            </ul>

          </div>
        </div>
      </div>
    );
  }
}
