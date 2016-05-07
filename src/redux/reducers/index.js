import { combineReducers } from 'redux';
import classes from './classesReducer';
import ui from './uiReducer';

const rootReducer = combineReducers({
  classes,
  ui
});

export default rootReducer;
