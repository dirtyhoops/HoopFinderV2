import { combineReducers } from 'redux';
import authReducer from './authReducer';
import profileReducer from './profileReducer';
import postReducer from './postReducer';
import courtReducer from './courtReducer';

export default combineReducers({
  auth: authReducer,
  profile: profileReducer,
  post: postReducer,
  court: courtReducer,
});
