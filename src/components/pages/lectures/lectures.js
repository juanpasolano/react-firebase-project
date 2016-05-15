import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import * as actions from '../../../redux/actions';
import { connect } from 'react-redux';
import CardList from '../../cards-list/cards-list';
import { Link } from 'react-router';
import _ from 'lodash';

export class Lectures extends Component {
  static propTypes = {
    actions: PropTypes.object,
    lectures: PropTypes.object,
    auth: PropTypes.object
  };

  componentWillMount() {
    this.props.actions.fetchLectures();
  }

  addAttendee(elem, id) {
    if(_.get(this.props, 'auth.profile')) {
      this.props.actions.addAttendeeToLecture(id, this.props.auth.uid, this.props.auth.profile)
    }
  }

  removeAttendee(elem, id) {
    if(_.get(this.props, 'auth.profile')) {
      this.props.actions.removeAttendeeFromLecture(id, this.props.auth.uid)
    }
  }

  renderButton(elem, id) {
    if (_.get(this.props, 'auth.profile.role')) {
      switch (this.props.auth.profile.role) {
        case 'student':
        {
          if (elem.attendees && elem.attendees[this.props.auth.uid]) {
            return (
              <a href="#" className="btn btn-default btn-sm" role="button"
                 onClick={(e)=>{this.removeAttendee(elem, id);}}>I did not attended</a>
            )
          } else {
            return (
              <a href="#" className="btn btn-primary btn-sm" role="button"
                 onClick={(e)=>{this.addAttendee(elem, id);}}>I attended</a>
            );
          }
        }
        case 'teacher':
        {
          if(elem.attendees) {
            return (
              <Link to={`/lectures/${id}/attendees`} className="btn btn-primary btn-sm" role="button">See attendees</Link>
            );
          }else {
            return (
              <button className="btn btn-default btn-sm" disabled role="button"> No attendees</button>
            );
          }
        }
        default:
        {
          return null;
        }
      }
    }
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
          <div className="col-md-3 col-sm-6" key={id}>
            <div className="thumbnail">
              <div className="caption">
                <h3 className="m-t-0">{elem.title}</h3>
                <p>{elem.description}</p>
                <p>
                  {this.renderButton(elem, id)}
                </p>
              </div>
            </div>
          </div>
        );
      });
    }
  }
  renderNewLectureButton() {
    if (_.get(this.props, 'auth.profile.role')) {
      switch (this.props.auth.profile.role) {
        case 'teacher':
        {
          return (<Link className="btn btn-primary btn-sm pull-right" to="/lectures/new">New Lecture</Link>);
        }
      }
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
