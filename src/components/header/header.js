import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../redux/actions';
import classNames from 'classnames';

import HamburguerButton from './hamburguer-button';

export class Header extends Component {
  toggleNavigation() {
    let isOpen = (this.props.isHeaderNavigationOpen !== true);
    this.props.actions.toggleHeaderNavigation(isOpen);
  }

  render() {
    let navigationClasses = classNames('navbar-collapse collapse', {
      'in': this.props.isHeaderNavigationOpen
    });
    return (
      <div className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand">Toptal React academy</Link>
            <HamburguerButton onClick={this.toggleNavigation.bind(this)}/>
          </div>
          <div className={navigationClasses}>
            <ul className="nav navbar-nav">
              <li>
                <Link to="/">Classes </Link>
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

Header.propTypes = {
  actions: PropTypes.object,
  isHeaderNavigationOpen: PropTypes.bool
};

export default connect(
  ({ui}) => ({
    isHeaderNavigationOpen: ui.isHeaderNavigationOpen
  }),
  (dispatch) => {
    return {
      actions: bindActionCreators(actions, dispatch)
    };
  }
)(Header);
