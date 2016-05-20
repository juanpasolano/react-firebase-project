import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Link, browserHistory } from 'react-router';
import _ from 'lodash';
import * as actions from '../../../redux/actions';



class Login extends Component {
  static propTypes = {
    actions: PropTypes.object,
    auth: PropTypes.object
  };
  componentWillMount() {
    this.props.actions.getAuth();
  }

  componentWillUpdate(nextProps) {
    if(nextProps.auth && !nextProps.auth.error){
      browserHistory.push('/lectures');
    }
  }

  onFormSubmit(e) {
    e.preventDefault();
    const credentials = {
      email: this.refs.email.value,
      password: this.refs.password.value
    };
    this.props.actions.authWithPassword(credentials);
  }

  loggedUser() {
    if(_.get(this, 'props.auth.profile')){
      return (
        <div className="text-center m-t-2">
          <Link to="/lectures">
            Continue as {this.props.auth.profile.email}
          </Link>
          <hr/>
        </div>
      );
    }
  }

  render () {
    return (
      <div>
        {this.loggedUser()}
        <form onSubmit={this.onFormSubmit.bind(this)}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" className="form-control" ref="email"/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" className="form-control" ref="password"/>
          </div>
          <button type="submit" className="btn btn-sm btn-success">Login</button>
        </form>
      </div>
    );
  }
}

export default connect(
  ({auth}) => ({auth}),
  (dispatch) => {
    return {
      actions: bindActionCreators(actions, dispatch)
    };
  }
)(Login);
