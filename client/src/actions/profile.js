import axios from 'axios';
import {
  GET_USER_PROFILE,
  GET_PROFILES,
  GET_USER_PROFILE_FAIL,
  CREATE_PROFILE_SUCCESS,
  RESET_PROFILE_LOADED,
} from './types';

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

export const createProfile = ({ formData }) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const res = await axios.post('/api/profile', formData, config);

    dispatch({ type: CREATE_PROFILE_SUCCESS });

    // dispatch(setAlert(res.data.msg, 'success'));
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      // errors.forEach((error) => dispatch(setAelert(error.msg, 'danger')));
      console.log(errors);
    }
  }
};

// Just resets the isUserProfileLoaded to false
export const resetProfileLoaded = () => async (dispatch) => {
  dispatch({ type: RESET_PROFILE_LOADED });
};
