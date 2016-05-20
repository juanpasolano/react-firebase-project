import C from '../constants';

export default function (state = {}, action) {
  switch (action.type) {
    case C.LECTURES_REPLACE: {
      return action.value;
    }
    default:
      return state;
  }
}
