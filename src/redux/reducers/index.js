import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  test: function(state = 'test', action){
    return state;
  }
});

export default rootReducer;
