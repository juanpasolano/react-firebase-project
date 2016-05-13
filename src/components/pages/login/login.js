import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../../redux/actions';


class Login extends Component {
  onFormSubmit(e) {
    e.preventDefault();
    const credentials = {
      email: this.refs.email.value,
      password: this.refs.password.value
    };
    this.props.actions.authWithPassword(credentials);
  }
  render () {
    return (
      <div>
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

Login.propTypes = {
  actions: PropTypes.object
};


export default connect(
  null,
  (dispatch) => {
    return {
      actions: bindActionCreators(actions, dispatch)
    };
  }
)(Login);
