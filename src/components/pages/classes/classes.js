import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import CardList from '../../cards-list/cards-list';

export class Classes extends Component {
  static propTypes = {
    classes: PropTypes.array
  }

  onCardListButtonClick(elem) {
    console.log(elem)
  }
  render() {
    return (
      <div>
        <h1>Classes</h1>
        <div>
          <CardList list={this.props.classes} buttonLabel="Assisted" onButtonClick={this.onCardListButtonClick} />
        </div>
      </div>
    );
  }
}

export default connect(
  ({classes}) => ({classes:classes})
)(Classes);
