import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Classes extends Component {
  render() {
    return (
      <div>
        <h1>Classes</h1>
        <pre>{this.props.test}</pre>
      </div>
    );
  }
}


export default connect(
  (state) => ({
    test: state.test
  })
)(Classes);
