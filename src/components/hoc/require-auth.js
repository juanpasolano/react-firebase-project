import React, { Component, PropTypes } from "react";
import {Router} from 'react-router';

import {connect} from 'react-redux';


function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default ComposedComponent => connect(mapStateToProps)(
  class RequireAuth extends Component {

    static propTypes = {
      auth: PropTypes.object
    };
    static contextTypes = {
      router: PropTypes.object.isRequired
    };

    componentWillUpdate(nextProps) {
      if (!nextProps.auth || nextProps.auth.error) {
        this.context.router.push('/login');
      }
    }

    componentDidMount() {
      if (!this.props.auth) {
        this.context.router.push('/login');
      }
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  });

