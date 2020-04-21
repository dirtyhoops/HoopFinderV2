import axios from 'axios';
import {
  GET_USER_PROFILE,
  GET_PROFILES,
  GET_USER_PROFILE_FAIL,
  CREATE_PROFILE_SUCCESS,
  RESET_PROFILE_LOADED,
  GET_PROFILE,
  CLEAR_SELECTED_PLAYER,
} from './types';

// Create profile
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

// Load Profiles
export const getProfiles = (playerposition) => async (dispatch) => {
  try {
    const res = await axios.get('/api/profile');

    // Unfiltered list of players
    const players1 = res.data;

    if (playerposition !== 'all players') {
      const filteredPlayers = res.data.filter(
        (player) => player.position === playerposition
      );

      // Replace the unfiltered players inside the array with the filtered result
      players1.splice(0, players1.length, ...filteredPlayers);
    }

    // const filteredPlayersByPostion = res.data.filter(
    //   (player) => player.position === playerposition
    // );

    dispatch({
      type: GET_PROFILES,
      payload: players1,
    });
  } catch (err) {
    console.log('error change this later');
  }
};

// Get Logged in User's Profile
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

// Get player's profile by user ID
export const getProfile = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/profile/user/${id}`);

    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
  } catch (err) {
    console.log(
      'cant load profile ---- change this later and take this console log out'
    );
  }
};

// Just resets the isUserProfileLoaded to false
export const resetProfileLoaded = () => async (dispatch) => {
  dispatch({ type: RESET_PROFILE_LOADED });
};

export const clearSelectedPlayer = () => async (dispatch) => {
  dispatch({ type: CLEAR_SELECTED_PLAYER });
};
