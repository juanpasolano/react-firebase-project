import C from '../constants';
const INITIAL_STATE = null;

export default function authReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case C.AUTH_REPLACE: {
      return action.value
    }
    case C.PROFILE_REPLACE: {
      return {...state, profile: action.value}
    }
    default:
      return state
  }
}
