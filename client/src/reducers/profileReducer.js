import {
  GET_PROFILES,
  GET_USER_PROFILE,
  GET_USER_PROFILE_FAIL,
  CREATE_PROFILE_SUCCESS,
  RESET_PROFILE_LOADED,
} from '../actions/types';

const initialState = {
  profiles: [],
  user_profile: null,
  loadingProfiles: true,
  isUserProfileLoaded: false,
  isCreatingProfileSuccessful: false,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_USER_PROFILE:
      return {
        ...state,
        user_profile: payload,
        isUserProfileLoaded: true,
      };
    case GET_PROFILES:
      return {
        ...state,
        profiles: payload,
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
