import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../../cards-list/cards-list';

export class Classes extends Component {

  render() {
    return (
      <div>
        <h1>Classes</h1>
        <div>
          <CardList list={this.props.classes} />
        </div>
      </div>
    );
  }
}


export default connect(
  (state) => ({
    classes: state.classes
  })
)(Classes);
