import React, { Component, PropTypes } from "react";
import {Router} from 'react-router';
import {connect} from 'react-redux';
import  * as actions from '../../redux/actions';
import Firebase from 'firebase';
import C from '../../redux/constants';


function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default ComposedComponent => connect(mapStateToProps, actions)(
  class RequireAuth extends Component {

    static propTypes = {
      auth: PropTypes.object,
      getAuth: PropTypes.fn
    };
    static contextTypes = {
      router: PropTypes.object.isRequired
    };

    componentWillMount() {
      this.props.getAuth();
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.auth || nextProps.auth.error) {
        this.context.router.push('/');
      }
    }
    componentDidMount() {
      let ref = new Firebase(C.FIREBASE_URL);
      if (!ref.getAuth()) {
        this.context.router.push('/');
      }
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  });

