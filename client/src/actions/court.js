import axios from 'axios';
import {
  CREATE_COURT,
  DELETE_COURT,
  ADD_COURT_REVIEW,
  GET_COURTS,
  GET_COURT,
  GET_COURT_TO_EDIT,
  RESET_CREATE_COURT_SUCCESS,
  CLEAR_SELECTED_COURT,
  RESET_EDIT_COURT,
} from './types';

// Get all courts
export const getAllCourts = () => async (dispatch) => {
  try {
    const res = await axios.get(`/api/courts`);

    dispatch({
      type: GET_COURTS,
      payload: res.data,
    });
  } catch (err) {
    console.log('cant get posts ---fix this later');

    // dispatch({
    //   type: COURT_ERROR,
    // });
  }
};

export const getCourt = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/courts/${id}`);
    dispatch({
      type: GET_COURT,
      payload: res.data,
    });
  } catch (err) {
    console.log('cant get posts ---fix this later');

    // dispatch({
    //   type: COURT_ERROR,
    //   payload: {
    //     status: err.response.status,
    //     statusText: err.response.statusText,
    //   },
    // });
  }
};

export const getCourtToEdit = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/courts/${id}`);
    dispatch({
      type: GET_COURT_TO_EDIT,
      payload: res.data,
    });
  } catch (err) {
    console.log('cant get posts ---fix this later');

    // dispatch({
    //   type: COURT_ERROR,
    //   payload: {
    //     status: err.response.status,
    //     statusText: err.response.statusText,
    //   },
    // });
  }
};

// MAYBE DELETE THIS LATER
export const clearSelectedCourt = () => (dispatch) => {
  dispatch({
    type: CLEAR_SELECTED_COURT,
  });
};

// Create Court
export const createCourt = ({ formData }) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const res = await axios.post('/api/courts', formData, config);

    dispatch({ type: CREATE_COURT, payload: res.data });

    // MAKE SURE TO DISPATCH ALERT FOR SUCCESSFUL ADD
  } catch (err) {
    const errors = err.response.data.errors;

    // MAKE SURE TO DISPATCH ALERT

    if (errors) {
      // errors.forEach((error) => dispatch(setAelert(error.msg, 'danger')));
      console.log(errors);
    }
  }
};

// Delete court
export const deleteCourt = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`/api/courts/${id}`);

    dispatch({
      type: DELETE_COURT,
      payload: id,
    });

    // DISPATCH SUCCESS MESSAGE LATER
    // dispatch(setAlert(res.data.msg, 'success'));
  } catch (err) {
    console.log('cant delete . fix this later - not an admin to delete');
    // MAKE SURE TO CHANGE THIS.. ADD A DISPATCH
    // dispatch({
    //   type: DELETE_COURT_ERROR,
    //   payload: { msg: err.response.statusText, status: err.response.status }
    // });
  }
};

// Just resets the addCourtSuccess - it clears the add court form
export const clearAddCourtSuccess = () => async (dispatch) => {
  dispatch({ type: RESET_CREATE_COURT_SUCCESS });
};
