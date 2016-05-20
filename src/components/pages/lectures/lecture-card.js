import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../../redux/actions';
import { Link } from 'react-router';

export class LectureCard extends Component {
  static propTypes = {
    auth: PropTypes.object,
    lecture: PropTypes.object,
    lectureId: PropTypes.string,
    accessLevel: PropTypes.number,
    actions: PropTypes.number,
    addAttendeeToLecture: PropTypes.func,
    removeAttendeeFromLecture: PropTypes.func,
    role: PropTypes.number
  };

  addAttendee() {
    if (this.props.accessLevel) {
      this.props.addAttendeeToLecture(this.props.lectureId, this.props.auth.uid, this.props.auth.profile);
    }
  }

  removeAttendee() {
    if (this.props.accessLevel) {
      this.props.removeAttendeeFromLecture(this.props.lectureId, this.props.auth.uid);
    }
  }
  hasStudentButtons() {
    if(this.props.accessLevel === 1 || this.props.accessLevel === 3) {
      if (this.props.lecture.attendees && this.props.lecture.attendees[this.props.auth.uid]) {
        return (
          <div>
            <a href="#" className="btn btn-default btn-sm" role="button"
               onClick={(e)=>{this.removeAttendee();}}>I did not attended</a>
                <span className="m-l-2">{(this.props.lecture.attendees[this.props.auth.uid].accepted !== undefined) ?
                  (this.props.lecture.attendees[this.props.auth.uid].accepted) ?
                    <span className="text-success">Assistance accepted</span> :
                    <span className="text-danger">Assistance Rejected</span> : ''}
                </span>
          </div>

        );
      } else {
        return (
          <a href="#" className="btn btn-primary btn-sm" role="button"
             onClick={(e)=>{this.addAttendee();}}>I attended</a>
        );
      }
    }
  }
  hasAttendeesButton(){
    if(this.props.accessLevel > 1){
      if (this.props.lecture.attendees) {
        return (
          <Link to={`/lectures/${this.props.lectureId}/attendees`} className="btn btn-primary btn-sm" role="button">See
              attendees</Link>
        );
      } else {
        return (
          <button className="btn btn-default btn-sm" disabled role="button"> No attendees</button>
        );
      }
    }
  }
  hasEditButton(){
    if(this.props.accessLevel > 1) {
      return (
        <Link to={`/lectures/edit/${this.props.lectureId}`} className="btn btn-primary btn-sm" role="button">Edit
          lecture</Link>
      );
    }
  }


  renderButtons() {
    return (
      <div>
        {this.hasStudentButtons()}
        <div>
          {this.hasAttendeesButton()}
          {this.hasEditButton()}
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="col-md-3 col-sm-6">
        <div className="thumbnail">
          <div className="caption">
            <h3 className="m-t-0">{this.props.lecture.title}</h3>
            <p>{this.props.lecture.description}</p>
            {this.renderButtons()}
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, actions)(LectureCard);
