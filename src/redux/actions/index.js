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

export function replaceAuth(auth) {
  console.log(auth);
  return {
    type: C.AUTH_REPLEACE,
    value: auth
  }
}

//Gets called by the app.js to initialize with current session
export function getAuth(){
  return (dispatch, getState) => {
    var ref = new Firebase(C.FIREBASE_URL);
    dispatch(replaceAuth(ref.getAuth()))
  }
}

export function authWithPassword(credentials) {
  return (dispatch, getState) => {
    var ref = new Firebase(C.FIREBASE_URL);
    ref.authWithPassword(credentials, function (error, authData) {
      if (error) {
        dispatch(replaceAuth(error));
      } else {
        dispatch(replaceAuth(authData));
        console.log("Authenticated successfully with payload:", authData);
      }
    });
  };
}
export function unauth() {
  return (dispatch, getState) => {
    var ref = new Firebase(C.FIREBASE_URL);
    ref.unauth();
    dispatch(replaceAuth(null));
  }
}
