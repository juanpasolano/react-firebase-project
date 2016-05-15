import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import * as actions from '../../../redux/actions';
import { connect } from 'react-redux';
import { Link } from 'react-router';

export class LecturesForm extends Component {
  resetForm (){
    let {title, description} = this.refs.form;
    title.value = "";
    description.value = "";
  }
  onSubmit(event) {
    event.preventDefault();
    let {title, description} = this.refs.form;
    let lecture = {
      title: title.value,
      description: description.value
    };
    if(this.props.routeParams.id) {
      this.props.actions.updateLecture(this.props.routeParams.id, lecture);
    }else {
      this.props.actions.saveLecture(lecture);
      this.resetForm();
    }
  }
  componentWillUpdate(nextProps){
    if(nextProps.lectures && this.props.routeParams.id && nextProps.lectures[this.props.routeParams.id]){
      let lecture = nextProps.lectures[this.props.routeParams.id];
      let {title, description} = this.refs.form;
      title.value = lecture.title;
      description.value = lecture.description;
    }
  }
  componentWillMount () {
    if(this.props.routeParams.id){
      this.props.actions.fetchLectures();
    }
  }
  render() {
    return (
      <div>
        <ol className="breadcrumb">
          <li><Link to="/lectures">Lectures</Link></li>
          <li className="active">New Lecture</li>
        </ol>
        <h1>New Lecture</h1>
        <div>
          <form onSubmit={this.onSubmit.bind(this)} ref="form">
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input type="text" name="title" className="form-control" required/>
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea name="description" cols="30" rows="5" className="form-control" />
            </div>
            <button type="submit" className="btn btn-primary">Save</button>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(
  ({lectures})=> ({lectures}),
  (dispatch) => {
    return {
      actions: bindActionCreators(actions, dispatch)
    };
  }
)(LecturesForm);
