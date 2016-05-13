import { combineReducers } from 'redux';
import classes from './classesReducer';
import ui from './uiReducer';
import auth from './authReducer';

const rootReducer = combineReducers({
  classes,
  ui,
  auth
});

export default rootReducer;
