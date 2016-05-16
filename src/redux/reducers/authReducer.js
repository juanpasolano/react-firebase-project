import C from '../constants';

export default function authReducer(state = null, action) {
  switch (action.type) {
    case C.AUTH_REPLACE: {
      return action.value
    }
    case C.PROFILE_REPLACE: {
      return {...state, profile: action.value}
    }
    case C.ACCESS_LEVEL_REPLACE: {
      return {...state, profile: {...state.profile, accessLevel: action.value}}
    }
    default:
      return state
  }
}
