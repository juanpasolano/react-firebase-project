import { combineReducers } from 'redux';
import lectures from './lecturesReducer';
import ui from './uiReducer';
import auth from './authReducer';

const rootReducer = combineReducers({
  lectures,
  ui,
  auth
});

export default rootReducer;
