import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Link, browserHistory } from 'react-router';
import _ from 'lodash';
import * as actions from '../../../redux/actions';


class Attendees extends Component {
  static propTypes = {
    lectures: PropTypes.object
  };

  componentWillMount() {
    this.props.actions.fetchLectures();
  }

  renderButtons(elem, id) {
    if(elem.accepted === undefined){
      return (
        <div className="btn-group pull-right">
          <button onClick={()=>{this.props.actions.rejectAttendeeOnLecture(this.props.routeParams.id, id)}} className="btn btn-xs btn-danger">Reject</button>
          <button onClick={()=>{this.props.actions.acceptAttendeeOnLecture(this.props.routeParams.id, id)}}className="btn btn-xs btn-success">Accept</button>
        </div>
      );
    }else if(elem.accepted){
      return (
        <span className="pull-right text-success">
          <i className="zmdi zmdi-check zmdi-hc-2x"/>
        </span>
      )
    }else if(elem.accepted === false){
      return (
        <span className="pull-right text-danger">
          <i className="zmdi zmdi-close zmdi-hc-2x"/>
        </span>
      )
    }
  }

  renderAttendees (lecture) {
    if(lecture && lecture.attendees){
      return _.map(lecture.attendees, (elem, id) => {
        return (
          <li key={id} className="list-group-item">
            {this.renderButtons(elem, id)}
            {elem.name} <br/><small>At: {new Date(elem.date).toDateString()}</small>
          </li>
        )
      })
    }
  }

  render() {
    let lecture = (this.props.lectures) ? this.props.lectures[this.props.routeParams.id] : null;
    return (
      <div>
        <ol className="breadcrumb">
          <li><Link to="/lectures">Lectures</Link></li>
          <li className="active">Attendees to {(lecture)? lecture.title : ''}</li>
        </ol>
        <h1><small>Attendees to </small>
          <br/>{(lecture)? lecture.title : ''}</h1>
        <ul className="list-group">
          {this.renderAttendees(lecture)}
        </ul>

        <button onClick={()=>{this.props.actions.addRandomAttendeeToLecture(this.props.routeParams.id)}}>Add random user</button>
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
)(Attendees);
