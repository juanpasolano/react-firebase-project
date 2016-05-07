const INITIAL_STATE = {
  isHeaderNavigationOpen: false
};
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'TOGGLE_HEADER_NAVIGATION': {
      return {...state, isHeaderNavigationOpen: action.value};
    }
    default:
      return state;
  }
}
