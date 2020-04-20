import {
  GET_PROFILES,
  GET_USER_PROFILE,
  GET_USER_PROFILE_FAIL,
  CREATE_PROFILE_SUCCESS,
  RESET_PROFILE_LOADED,
  GET_PROFILE,
} from '../actions/types';

const initialState = {
  players: [],
  user_profile: null,
  selectedProfile: null,
  loadingProfiles: true,
  isUserProfileLoaded: false,
  isCreatingProfileSuccessful: false,
  playerProfileLoaded: false,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_USER_PROFILE: //Change this to LOGGEDIN USER PROFILE
      return {
        ...state,
        user_profile: payload,
        isUserProfileLoaded: true,
      };
    case GET_PROFILES:
      return {
        ...state,
        players: payload,
      };
    case GET_PROFILE:
      return {
        ...state,
        selectedProfile: payload,
        playerProfileLoaded: true,
      };
    case GET_USER_PROFILE_FAIL:
      return {
        ...state,
        isUserProfileLoaded: true,
      };
    case CREATE_PROFILE_SUCCESS:
      return {
        ...state,
        isCreatingProfileSuccessful: true,
      };
    case RESET_PROFILE_LOADED:
      return {
        ...state,
        isUserProfileLoaded: false,
      };
    default:
      return state;
  }
}
