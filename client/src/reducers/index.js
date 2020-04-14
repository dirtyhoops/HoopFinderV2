import { combineReducers } from 'redux';
import authReducer from './authReducer';
import profileReducer from './profileReducer';
import playerReducer from './playerReducer';

export default combineReducers({
  auth: authReducer,
  profile: profileReducer,
  player: playerReducer,
});
