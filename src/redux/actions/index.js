import Firebase from 'firebase';
import _ from 'lodash';
import C from '../constants';
import faker from 'faker';

export function toggleHeaderNavigation(isOpen) {
  return {
    type: C.TOGGLE_HEADER_NAVIGATION,
    value: isOpen
  };
}



/** -----
 * AUTH
 ** ----*/

let baseRef = new Firebase(C.FIREBASE_URL);

export function replaceAuth(auth) {
  return {
    type: C.AUTH_REPLACE,
    value: auth
  };
}

export function replaceProfile(profile) {
  return {
    type: C.PROFILE_REPLACE,
    value: profile
  }
}

//Gets called by the app.js to initialize with current session
export function getAuth() {
  return (dispatch, getState) => {
    dispatch(replaceAuth(baseRef.getAuth()));
    dispatch(getProfile());
  };
}

export function getProfile() {
  return (dispatch, getState) => {
    let state = getState();
    if(state.auth && state.auth.uid){
      let profileRef = baseRef.child("users/" + state.auth.uid + "/profile");
      profileRef.once('value', function(snapshot) {
        dispatch(replaceProfile(snapshot.val()));
      }, function(error) {
        console.log(error);
      });
    }
  }
}

export function authWithPassword(credentials) {
  return (dispatch, getState) => {
    baseRef.authWithPassword(credentials, function (error, authData) {
      if (error) {
        dispatch(replaceAuth({error:true, ...error}));
      } else {
        dispatch(replaceAuth(authData));
        dispatch(getProfile());
      }
    });
  };
}
export function unauth() {
  return (dispatch, getState) => {
    baseRef.unauth();
    dispatch(replaceAuth(null));
  };
}

export function switchAccessLevel(level) {
  return {
    type: C.ACCESS_LEVEL_REPLACE,
    value: level
  };
}


/**
 * Lectures
 */


let lecturesRef = baseRef.child("lectures");

export function replaceLectures(lectures) {
  return {
    type: C.LECTURES_REPLACE,
    value: lectures
  }
}

export function fetchLectures() {
  return (dispatch) => {
    lecturesRef.on('value', (snapshot) => {
      dispatch(replaceLectures(snapshot.val()));
    });
  }
}

export function saveLecture(lecture) {
  return dispatch => lecturesRef.push(lecture);
}
export function updateLecture(lectureId, lecture) {
  return dispatch => lecturesRef.child(lectureId).update(lecture);
}

export function addAttendeeToLecture(lectureId, userId, profile) {
  return dispatch => lecturesRef.child(`${lectureId}/attendees/${userId}`).set({...profile, date: new Date().getTime()});
}

export function removeAttendeeFromLecture(lectureId, userId) {
  return dispatch => lecturesRef.child(`${lectureId}/attendees/${userId}`).remove();
}
export function acceptAttendeeOnLecture(lectureId, userId){
  return dispatch => lecturesRef.child(`${lectureId}/attendees/${userId}/accepted`).set(true);
}
export function rejectAttendeeOnLecture(lectureId, userId){
  return dispatch => lecturesRef.child(`${lectureId}/attendees/${userId}/accepted`).set(false);
}

export function addRandomAttendeeToLecture(lectureId){
  return dispatch => {
    var name = faker.name.findName();
    var email = faker.internet.email();
    var date = new Date().getTime();
    lecturesRef.child(`${lectureId}/attendees/`).push({name, email, date});
  }
}
