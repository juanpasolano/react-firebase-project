import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import * as actions from '../../../redux/actions';
import { connect } from 'react-redux';
import CardList from '../../cards-list/cards-list';
import { Link } from 'react-router';

export class Lectures extends Component {
  static propTypes = {
    actions: PropTypes.object,
    lectures: PropTypes.object
  };

  componentWillMount() {
    this.props.actions.fetchLectures();
  }

  onCardListButtonClick(elem) {
    console.log(elem);
  }
  render() {
    return (
      <div>
        <h1>Lectures</h1>
        <Link className="btn btn-primary" to="/lectures/new">New Lecture</Link>
        <div>
          <CardList list={this.props.lectures} buttonLabel="Assisted" onButtonClick={this.onCardListButtonClick} />
        </div>
      </div>
    );
  }
}

export default connect(
  ({lectures}) => ({lectures}),
  (dispatch) => {
    return {
      actions: bindActionCreators(actions, dispatch)
    };
  }
)(Lectures);
