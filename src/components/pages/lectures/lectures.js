import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import * as actions from '../../../redux/actions';
import { connect } from 'react-redux';
import CardList from '../../cards-list/cards-list';
import { Link } from 'react-router';
import _ from 'lodash';
import LectureCard from './lecture-card';

export class Lectures extends Component {
  static propTypes = {
    actions: PropTypes.object,
    lectures: PropTypes.object,
    auth: PropTypes.object
  };

  componentWillMount() {
    this.props.actions.fetchLectures();
  }

  renderList() {
    if (!this.props.lectures || this.props.lectures.length === 0) {
      return (
        <div className="col-md-12">
          <span>There are no lectures available</span>
        </div>
      );
    } else {
      return _.map(this.props.lectures, (elem, id) => {
        return (
          <LectureCard lecture={elem} lectureId={id} accessLevel={_.get(this.props, 'auth.profile.accessLevel')}
                       auth={this.props.auth} key={id}/>
        );
      });
    }
  }

  renderNewLectureButton() {
    if (_.get(this.props, 'auth.profile.accessLevel') && this.props.auth.profile.accessLevel > 1) {
      return (<Link className="btn btn-primary btn-sm pull-right" to="/lectures/new">New Lecture</Link>);
    }
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            {this.renderNewLectureButton()}
            <h1>Lectures</h1>
          </div>
        </div>
        <div className="row">
          {this.renderList()}
        </div>
      </div>
    );
  }
}

export default connect(
  ({lectures, auth}) => ({lectures, auth}),
  (dispatch) => {
    return {
      actions: bindActionCreators(actions, dispatch)
    };
  }
)(Lectures);
