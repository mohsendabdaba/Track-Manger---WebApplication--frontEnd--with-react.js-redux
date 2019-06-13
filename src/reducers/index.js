import { combineReducers } from 'redux';

import authReducer from './authReducer';
import errorReducer from './errorReducer';
import ProjectReducer from './projectReducer';

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  projectList: ProjectReducer
});
