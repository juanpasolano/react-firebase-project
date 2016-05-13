import C from '../constants';
const INITIAL_STATE = null;

export default function authReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case C.AUTH_REPLEACE:
    {
      return action.value
    }
    default:
      return state
  }
}
