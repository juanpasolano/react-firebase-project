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

  onCardListButtonClick(elem, id) {
    if(_.get(this.props, 'auth.profile.role')){
      switch(this.props.auth.profile.role){
        case 'student':{
          this.props.actions.addAssistantToLecture(id, this.props.auth.uid, this.props.auth.profile)
        }
      }
    }
  }

  buttonLabel() {
    if(_.get(this.props, 'auth.profile.role')){
      switch(this.props.auth.profile.role){
        case 'student':{
          return 'Assist'
        }
      }
    }
  }
  
  render() {
    return (
      <div>
        <h1>Lectures</h1>
        <Link className="btn btn-primary" to="/lectures/new">New Lecture</Link>
        <div>
          <CardList list={this.props.lectures} buttonLabel={this.buttonLabel()} onButtonClick={this.onCardListButtonClick.bind(this)} />
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
