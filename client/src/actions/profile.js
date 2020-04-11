import axios from 'axios';
import { GET_USER_PROFILE, GET_PROFILES, GET_USER_PROFILE_FAIL } from './types';

// Load Profiles
export const getProfiles = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/profile');

    dispatch({
      type: GET_PROFILES,
      payload: res.data,
    });
  } catch (err) {
    console.log('error change this later');
  }
};

// Load User's Profile
export const getUserProfile = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/profile/me');

    dispatch({
      type: GET_USER_PROFILE,
      payload: res.data,
    });
  } catch (err) {
    console.log('cant load profile--- change this later');

    dispatch({
      type: GET_USER_PROFILE_FAIL,
    });
  }
};
