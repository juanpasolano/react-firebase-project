import Firebase from 'firebase';
import C from '../constants';

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
    type: C.AUTH_REPLEACE,
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
