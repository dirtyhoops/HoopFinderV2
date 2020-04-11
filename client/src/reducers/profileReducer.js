import {
  GET_PROFILES,
  GET_USER_PROFILE,
  GET_USER_PROFILE_FAIL,
} from '../actions/types';

const initialState = {
  profiles: [],
  user_profile: null,
  loadingProfiles: true,
  isUserProfileLoaded: false,
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
    default:
      return state;
  }
}
