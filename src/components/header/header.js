import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../redux/actions';
import classNames from 'classnames';
import _ from 'lodash';

import HamburguerButton from './hamburguer-button';

export class Header extends Component {
  static propTypes = {
    actions: PropTypes.object,
    auth: PropTypes.object,
    isHeaderNavigationOpen: PropTypes.bool
  };

  toggleNavigation() {
    let isOpen = (this.props.isHeaderNavigationOpen !== true);
    this.props.actions.toggleHeaderNavigation(isOpen);
  }

  logout() {
    this.props.actions.unauth();
  }

  navigation() {
    if(this.props.auth && !this.props.auth.error){
      let navigationClasses = classNames('navbar-collapse collapse', {
        'in': this.props.isHeaderNavigationOpen
      });
      let canChangeAccessLevel = () => {
        if(_.get(this.props, 'auth.profile.role') == 'admin' ){
          return(
            <li>
              <ul>
                <li><a onClick={()=>{this.props.actions.switchAccessLevel(1);}}>1</a></li>
                <li><a onClick={()=>{this.props.actions.switchAccessLevel(2);}}>2</a></li>
                <li><a onClick={()=>{this.props.actions.switchAccessLevel(3);}}>3</a></li>
              </ul>
            </li>
          );
        }
      };
      return (
        <div className={navigationClasses}>
          <ul className="nav navbar-nav">
            <li>
              <Link to="/lectures">Lectures</Link>
            </li>
            {canChangeAccessLevel()}
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li><a href="javascript:;" onClick={this.logout.bind(this)} >Sign out <i className="zmdi zmdi-sign-in zmdi-hc-lg"/></a></li>
          </ul>
        </div>
      );
    }
  }

  render() {

    return (
      <div className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand">Toptal React academy</Link>
            <HamburguerButton onClick={this.toggleNavigation.bind(this)}/>
          </div>
          {this.navigation()}
        </div>
      </div>
    );
  }
}

export default connect(
  ({ui, auth}) => ({
    isHeaderNavigationOpen: ui.isHeaderNavigationOpen,
    auth
  }),
  (dispatch) => {
    return {
      actions: bindActionCreators(actions, dispatch)
    };
  }
)(Header);
